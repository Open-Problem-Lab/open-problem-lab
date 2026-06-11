# Birth Registration Pack

## Overview

This pack exists to stop a common analytical error: treating survey-based under-5 birth-registration status, certificate possession, and administrative CRVS completeness as if they were one number.

Health-service linkage is allowed here only when the workflow is named. "Use the health system" is too vague to merge.

## Key Components

- `problem.md` and `problem.json`: pack scope, contrarian framing, and merge gates.
- `tasks.json`: sequencing from source inventory to measure reconciliation, country selection, and red-team review.
- `datasets.md` and `evidence.json`: canonical source inventory and evidence records.
- `outputs.md`, `playbooks.md`, `validation.md`, `analytic-use-note.md`: what can be published, how to attack it, and what must be blocked.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Source inventory"] --> B["Measure-family note"]
  B --> C["Country selection"]
  C --> D["Missed-opportunity analysis"]
  D --> E["Red-team review"]
  D --> F["Field-reality review"]
  E --> G["Reviewed output"]
  F --> G
```

### Component Diagram

```mermaid
flowchart LR
  Problem["problem.*"] --> Tasks["tasks.json"]
  Tasks --> Evidence["evidence.json / datasets.md"]
  Tasks --> Rules["validation.md / analytic-use-note.md"]
  Tasks --> Outputs["outputs.md / playbooks.md"]
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Contributor
  participant Evidence as evidence.json
  participant Reviewer
  Contributor->>Evidence: classify measure family and source limits
  Contributor->>Reviewer: propose country or touchpoint comparison
  Reviewer-->>Contributor: allow, narrow, or block based on comparability and misuse risk
```
