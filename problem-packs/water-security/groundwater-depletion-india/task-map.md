# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Aquifer baseline"]
  B --> C["Depletion signal analysis"]
  C --> D["Agricultural demand correlation"]
  D --> E["Red-team operational use"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Baseline before signal.
3. Back-test before claim.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
