# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Health burden baseline"]
  B --> C["Adoption barrier classification"]
  C --> D["Health benefit scenario analysis"]
  D --> E["Red-team overstatement review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Burden baseline before barrier analysis.
3. Barrier analysis before benefit estimation.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
