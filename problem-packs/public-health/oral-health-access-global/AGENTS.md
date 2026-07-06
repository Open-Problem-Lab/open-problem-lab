# Oral Health Access Pack

## Overview

This pack is about evidence readiness for oral health access, not oral disease advocacy. The useful question is whether public sources can support sub-national service-access or workforce-gap analysis in low-income countries without pretending that country-level burden estimates are facility or district data.

Do not treat a WHO burden fact, a dentist-density country indicator, or a general health-spending denominator as proof of local access. Those sources frame the problem; they do not locate the bottleneck.

## Key Components

- `problem.json` and `problem.md`: scope, decision wedge, and baseline facts.
- `evidence.json` and `evidence.md`: dated source-family records and source-use notes.
- `datasets.md`: usable, limited, and rejected source classifications.
- `claims.json`: current falsifiable data-scarcity claim.
- `tasks.json` and `task-map.md`: work queue and dependency order.
- `validation.md`: validation, review, and replication gates.

## Diagrams

### Flowchart

```mermaid
flowchart TD
  A["WHO burden and workforce sources"] --> B["Source inventory"]
  B --> C["Country-by-country survey and source-year extraction"]
  C --> D["Sub-national data availability test"]
  D --> E["Gap analysis only if public grain is sufficient"]
  B -. "Reject country-level proxy as local access proof" .-> F["Boundary note"]
```

### Component Diagram

```mermaid
flowchart LR
  Evidence["evidence.json"] --> Claim["claims.json"]
  Evidence --> Datasets["datasets.md"]
  Datasets --> Tasks["tasks.json"]
  Claim --> Review["domain review"]
  Tasks --> Validation["validation.md"]
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Agent
  participant Evidence
  participant DatasetInventory
  participant Reviewer
  Agent->>Evidence: Add or repair dated source records
  Agent->>DatasetInventory: Classify usable, limited, rejected
  Agent->>Reviewer: Submit narrow data-availability claim
  Reviewer->>Evidence: Verify URLs, dates, and source scope
  Reviewer->>DatasetInventory: Confirm source classifications
```
