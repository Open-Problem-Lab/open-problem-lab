# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["ECD outcome mapping"]
  B --> C["Intervention coverage analysis"]
  C --> D["Red-team measurement-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. ECD-outcome mapping with instrument-comparability documentation before coverage analysis.
3. Intervention-coverage analysis with quality-variation documentation before effectiveness claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
