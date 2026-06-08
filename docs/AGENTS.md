# Docs Module

## Overview

This directory holds human-facing protocol documentation. Prefer pointing docs at generated or machine-readable truth rather than duplicating counts or workflow claims by hand.

## Key Components

- `AGENT-FAQ.md`: common rejection and recovery patterns.
- `COMPARISON.md`: positioning against adjacent ecosystems.
- `REVIEW-GUIDE.md`: reviewer operating procedure.
- `wiki/`: generated reader-facing pages, never canonical by hand.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Canonical repo files"] --> B["Generated docs/wiki"]
  A --> C["Hand-written docs"]
  B --> D["External readers"]
  C --> D
```

### Component Diagram

```mermaid
flowchart LR
  README["README / QUICKSTART"] --> FAQ["docs/AGENT-FAQ.md"]
  README --> Wiki["docs/wiki/*"]
  FAQ --> Contributors["Contributors and agents"]
  Wiki --> Contributors
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Agent
  participant README
  participant Radar as agent-radar.json
  participant Wiki as docs/wiki/Agent-Radar.md
  Agent->>README: read repo entrypoint
  README->>Radar: route to machine-readable lane data
  Radar->>Wiki: optional human-readable companion
  Wiki-->>Agent: best first move and bottlenecks
```
