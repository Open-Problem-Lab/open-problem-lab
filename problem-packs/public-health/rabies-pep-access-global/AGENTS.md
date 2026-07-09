# Rabies PEP Access Pack

## Overview

This pack studies evidence for complete rabies post-exposure prophylaxis access in endemic settings. The core distinction is vaccine procurement versus complete PEP access.

## Key Components

- `problem.json`: pack metadata and review policy.
- `evidence.json`: dated evidence records.
- `datasets.md`: source inventory and source limitations.
- `tasks.json`: scoped task map.
- `validation.md`: component-separation and review gates.

## Diagrams

### Flowchart

```mermaid
flowchart TD
  A["Source inventory"] --> B["Component taxonomy"]
  B --> C["Country readiness screen"]
  C --> D["Red-team review"]
  C --> E["Field reality review"]
  D --> F["Reviewed output"]
  E --> F
```

### Component Diagram

```mermaid
flowchart LR
  Vaccine["Vaccine supply"] --> PEP["Complete PEP access"]
  RIG["RIG or monoclonal access"] --> PEP
  Triage["Bite-risk triage"] --> PEP
  Cost["Patient cost and travel"] --> PEP
  Reports["Reporting cadence"] --> PEP
  Dogs["Dog vaccination context"] --> PEP
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Scout as Literature Scout
  participant Pack as Problem Pack
  participant Reviewer as Domain Reviewer
  participant Field as Field Reviewer
  Scout->>Pack: Classify sources by PEP component
  Pack->>Reviewer: Validate source, grain, and limitation
  Reviewer->>Pack: Approve taxonomy or request changes
  Pack->>Field: Ask whether artifact maps to a real programme decision
```

## Agent Warning

Do not treat vaccine procurement, vaccine doses used, or national rabies deaths as direct proof of complete PEP access. This is the pack's main false-positive path.
