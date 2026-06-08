# Disaster Resilience Packs

## Overview

This domain contains packs where operational overclaim becomes dangerous quickly. Keep source-inventory tasks clearly separated from downstream operational modeling, and keep risk metadata aligned with that separation.

## Key Components

- Pack-local `problem.json` and `problem.md`: scope and safety framing.
- Pack-local `tasks.json`: role progression, reviewer routing, and risk staging.
- Pack-local `evidence.json`, `datasets.md`, `validation.md`, `outputs.md`: canonical evidence and downstream artifacts.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Source inventory"] --> B["Data preparation"]
  B --> C["Implementation planning"]
  C --> D["Red-team review"]
  D --> E["Field-reality review"]
```

### Component Diagram

```mermaid
flowchart LR
  Problem["problem.*"] --> Tasks["tasks.json"]
  Tasks --> Evidence["evidence.json / datasets.md"]
  Tasks --> Validation["validation.md"]
  Tasks --> Outputs["outputs.md / playbooks.md"]
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Contributor
  participant Tasks as tasks.json
  participant Validator as reproducibility check
  Contributor->>Tasks: classify task and risk
  Tasks->>Validator: expose reviewer and replication requirements
  Validator-->>Contributor: block if risk metadata and done condition diverge
```
