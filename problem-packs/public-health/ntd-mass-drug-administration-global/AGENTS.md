# NTD Mass Drug Administration Pack

## Overview

This pack concerns neglected tropical disease mass drug administration at global scope. Contributions must distinguish evidence inventory from operational advice. Task metadata drift here is not cosmetic; it can misroute review.

## Key Components

- `problem.json` and `problem.md`: pack scope and merge conditions.
- `tasks.json`: role, reviewer, and risk sequencing for the pack.
- `evidence.json` and `datasets.md`: canonical evidence and source inventory.
- `validation.md`, `outputs.md`, `playbooks.md`: downstream operational constraints.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Scoped source task"] --> B["Data cleaning"]
  B --> C["Implementation planning"]
  C --> D["Red-team review"]
  D --> E["Field-reality review"]
```

### Component Diagram

```mermaid
flowchart LR
  Problem["problem.md / problem.json"] --> Tasks["tasks.json"]
  Tasks --> Evidence["evidence.json / datasets.md"]
  Tasks --> Validation["validation.md"]
  Tasks --> Outputs["outputs.md / playbooks.md"]
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Contributor
  participant Tasks as tasks.json
  participant Reviewer
  Contributor->>Tasks: read scoped task
  Tasks->>Reviewer: declare required reviewer role
  Reviewer-->>Contributor: accept or block based on role/risk fit
```
