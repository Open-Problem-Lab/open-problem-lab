# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Measurement reconciliation note"]
  B --> C["Country selection and baseline"]
  C --> D["Missed-opportunity analysis"]
  D --> E["Red-team review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

1. Evidence before comparison.
2. Measure-family reconciliation before sub-national ranking.
3. Country selection before analysis.
4. Red-team and field-reality review before publication.
