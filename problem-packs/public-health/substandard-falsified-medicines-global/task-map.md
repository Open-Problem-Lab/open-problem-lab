# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Failure-mode reconciliation"]
  B --> C["Country selection and surveillance baseline"]
  C --> D["Surveillance-gap analysis"]
  D --> E["Red-team review"]
  D --> F["Field-reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Failure-mode definitions before surveillance-gap analysis.
3. Country selection before sub-national mapping.
4. Surveillance-gap analysis before procurement-facing claims.
5. Red-team review before any field-facing output.
6. Field-reality review before publication.
