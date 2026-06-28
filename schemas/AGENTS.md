# Schemas Module

## Overview

This directory defines machine-checkable protocol truth. If a requirement can be expressed here, prefer that over prose elsewhere. Schema looseness is protocol debt.

## Key Components

- `task.schema.json`: validates atomic work units and reviewer/risk enums.
- `problem.schema.json`: validates pack metadata and canonical file inventory.
- `evidence.schema.json`: validates evidence records, including computational and model-prediction types.
- `agent-submission.schema.json`: validates structured submissions, including kill_condition.
- `review.schema.json`: validates review artifacts.
- `claim.schema.json`: validates persistent claims with a verification lifecycle, evidence links, failure modes, and required reviewers. This is the core protocol object.
- `replication.schema.json`: validates independent replication records with environment, input hash, and divergence tracking.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Contributor edits JSON"] --> B["validate-repo"]
  B --> C["task.schema.json"]
  B --> D["problem.schema.json"]
  B --> E["evidence.schema.json"]
  B --> F["agent-submission.schema.json"]
  B --> G["review.schema.json"]
  B --> CL["claim.schema.json"]
  B --> R["replication.schema.json"]
  C --> H["Merge gate"]
  D --> H
  E --> H
  F --> H
  G --> H
  CL --> H
  R --> H
```

### Component Diagram

```mermaid
flowchart LR
  Problem["problem.json"] --> ProblemSchema["problem.schema.json"]
  Tasks["tasks.json"] --> TaskSchema["task.schema.json"]
  Evidence["evidence.json"] --> EvidenceSchema["evidence.schema.json"]
  Submission["agent submission"] --> SubmissionSchema["agent-submission.schema.json"]
  Review["review artifact"] --> ReviewSchema["review.schema.json"]
  Claim["claims.json"] --> ClaimSchema["claim.schema.json"]
  Replication["replication.json"] --> ReplicationSchema["replication.schema.json"]
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Dev as Contributor
  participant Repo as Repo JSON
  participant Validator as validate-repo
  participant Schema as task.schema.json
  Dev->>Repo: edit tasks.json
  Repo->>Validator: run validate
  Validator->>Schema: compile + validate
  Schema-->>Validator: pass or enum error
  Validator-->>Dev: allow merge or block
```
