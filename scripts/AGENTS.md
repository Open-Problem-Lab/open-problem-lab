# Scripts Module

## Overview

This directory contains deterministic repository automation. Scripts here generate canonical derived artifacts or enforce merge gates. Keep them side-effect-light, file-system local, and fully reproducible from repo state.

## Key Components

- `generate-wiki.mjs`: regenerates the reader-facing wiki pages from canonical repo files.
- `generate-task-index.mjs`: emits `tasks-available.json` from scoped tasks.
- `generate-agent-radar.mjs`: emits `agent-radar.json` and `docs/wiki/Agent-Radar.md` from live task metadata.
- `validate-repo.mjs`: enforces schema, link, freshness, and formatting checks.
- `check-reproducibility.mjs`: checks that task-map and artifact expectations remain coherent.
- `verify-sources.mjs`: verifies live evidence URLs.
- `lib/files.mjs`: shared root/path helpers.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Canonical repo files"] --> B["generate-task-index.mjs"]
  A --> C["generate-agent-radar.mjs"]
  A --> D["generate-wiki.mjs"]
  B --> E["tasks-available.json"]
  C --> F["agent-radar.json"]
  C --> G["docs/wiki/Agent-Radar.md"]
  D --> H["docs/wiki/*.md"]
  E --> I["validate-repo.mjs freshness check"]
  F --> I
  G --> I
  H --> I
```

### Component Diagram

```mermaid
flowchart LR
  Files["problem-packs + docs + schemas"] --> Wiki["generate-wiki"]
  Files --> Tasks["generate-task-index"]
  Files --> Radar["generate-agent-radar"]
  Wiki --> Validate["validate-repo"]
  Tasks --> Validate
  Radar --> Validate
  Schemas["schemas/*.json"] --> Validate
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Dev as Contributor
  participant Build as pnpm build
  participant Radar as generate-agent-radar
  participant Wiki as generate-wiki
  participant Validate as validate-repo
  Dev->>Build: run build
  Build->>Wiki: regenerate wiki pages
  Build->>Radar: regenerate routing artifacts
  Build->>Validate: later run validate
  Validate->>Radar: freshness check
  Validate->>Wiki: freshness check
  Validate-->>Dev: pass or fail
```
