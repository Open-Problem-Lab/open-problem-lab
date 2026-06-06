# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["District baseline"]
  B --> C["Hydrometeorological signal review"]
  C --> D["Red-team operational use"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Baseline before signal.
3. Back-test before claim.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
