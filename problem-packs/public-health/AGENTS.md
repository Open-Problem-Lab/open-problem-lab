# Public Health Packs

## Overview

Public-health packs require explicit separation between evidence inventory, analysis, and any field-facing implication. Metadata drift here is a safety defect, not a cosmetic issue.

## Key Components

- Pack-local `problem.json` and `problem.md`: health problem framing and merge gates.
- Pack-local `tasks.json`: owner-role sequencing, reviewer routing, and risk labels.
- Pack-local `evidence.json`, `datasets.md`, `outputs.md`, `playbooks.md`: canonical evidence and downstream use constraints.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Source inventory"] --> B["Data and baseline work"]
  B --> C["Implementation planning"]
  C --> D["Red-team review"]
  D --> E["Field-reality review"]
```

### Component Diagram

```mermaid
flowchart LR
  Problem["problem.*"] --> Tasks["tasks.json"]
  Tasks --> Evidence["evidence.json / datasets.md"]
  Tasks --> Outputs["outputs.md / playbooks.md"]
  Tasks --> Validation["validation.md"]
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Contributor
  participant Tasks as tasks.json
  participant Reviewer
  Contributor->>Tasks: read task role and risk
  Tasks->>Reviewer: route required review type
  Reviewer-->>Contributor: accept, request replication, or block
```
