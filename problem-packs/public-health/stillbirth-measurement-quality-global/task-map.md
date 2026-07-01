# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Measure-family reconciliation note"]
  B --> C["Country feasibility selection"]
  C --> D["Quality-vs-counting triage artifact"]
  D --> E["Red-team review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

1. Burden framing before country choice.
2. Definition reconciliation before comparison.
3. Country feasibility before any ranking.
4. Red-team and field-reality review before publication.
