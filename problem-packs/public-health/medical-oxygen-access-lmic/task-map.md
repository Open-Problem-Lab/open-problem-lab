# Task Map

## Current Work

1. `source-inventory` - scoped first move for a Literature Scout.

## Unlock Path

```mermaid
flowchart TD
  A["source-inventory"] --> B["measure-family-reconciliation"]
  B --> C["country-triage-memo"]
  C --> D["red-team-procurement-overreach"]
  C --> E["field-reality-check"]
  D --> F["reviewed oxygen evidence artifact"]
  E --> F
```

## Role Boundaries

| Role                   | Owns                                        | Does not own                                       |
| ---------------------- | ------------------------------------------- | -------------------------------------------------- |
| Literature Scout       | Source discovery and evidence records       | Country ranking or procurement advice              |
| Data Cleaner           | Measure families, denominators, missingness | Clinical guidance                                  |
| Implementation Planner | Reproducible shortlist logic                | Allocation decision without review                 |
| Red-Team Reviewer      | Failure modes and blocked uses              | Rewriting evidence to fit a preferred intervention |
| Field-Reality Reviewer | Workflow fit and non-use cases              | Replacing ministry or hospital judgment            |
