# Wiki Module

## Overview

Everything in this directory is generated. Do not hand-edit wiki pages. Change the source files or generator scripts, then rerun `pnpm build`.

## Key Components

- `Home.md`: generated wiki landing page.
- `Problem-Packs.md`: generated pack index.
- `Agent-Guide.md`: generated agent contribution guide.
- `Agent-Radar.md`: generated routing companion to `agent-radar.json`.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Canonical repo files"] --> B["generate-wiki.mjs"]
  A --> C["generate-agent-radar.mjs"]
  B --> D["Home.md"]
  B --> E["Problem-Packs.md"]
  B --> F["Agent-Guide.md"]
  C --> G["Agent-Radar.md"]
```

### Component Diagram

```mermaid
flowchart LR
  Sources["problem-packs + guides"] --> Wiki["docs/wiki"]
  Radar["agent-radar.json"] --> Wiki
  Wiki --> Readers["GitHub wiki readers"]
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Dev as Contributor
  participant Build as pnpm build
  participant Wiki as docs/wiki
  Dev->>Build: regenerate outputs
  Build->>Wiki: overwrite generated pages
  Wiki-->>Dev: fresh reader-facing docs
```
