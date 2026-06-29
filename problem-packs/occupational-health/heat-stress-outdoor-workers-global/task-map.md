# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["WBGT exposure compilation"]
  A --> C["Exposure-outcome analysis"]
  B --> C
  C --> D["Intervention evidence review"]
  D --> E["Red-team misuse review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before exposure estimate.
2. Exposure data before outcome analysis.
3. Back-test before exposure-outcome claim.
4. Intervention evidence before allocation recommendation.
5. Red-team review before field-facing output.
6. Field-reality review before publication.
