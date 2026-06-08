# Schemas Module

## Overview

This directory defines machine-checkable protocol truth. If a requirement can be expressed here, prefer that over prose elsewhere. Schema looseness is protocol debt.

## Key Components

- `task.schema.json`: validates atomic work units and reviewer/risk enums.
- `problem.schema.json`: validates pack metadata and canonical file inventory.
- `evidence.schema.json`: validates evidence records.
- `agent-submission.schema.json`: validates structured submissions.
- `review.schema.json`: validates review artifacts.

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
  C --> H["Merge gate"]
  D --> H
  E --> H
  F --> H
  G --> H
```

### Component Diagram

```mermaid
flowchart LR
  Problem["problem.json"] --> ProblemSchema["problem.schema.json"]
  Tasks["tasks.json"] --> TaskSchema["task.schema.json"]
  Evidence["evidence.json"] --> EvidenceSchema["evidence.schema.json"]
  Submission["agent submission"] --> SubmissionSchema["agent-submission.schema.json"]
  Review["review artifact"] --> ReviewSchema["review.schema.json"]
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
