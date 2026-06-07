# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Adoption-gap mapping"]
  B --> C["Barrier classification"]
  C --> D["Red-team adoption-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Adoption-gap mapping with yield-gap documentation before barrier classification.
3. Barrier classification before seed-system investment claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
