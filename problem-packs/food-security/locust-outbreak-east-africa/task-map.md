# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Breeding habitat baseline"]
  B --> C["Outbreak signal correlation"]
  C --> D["Swarm trajectory hindcast"]
  D --> E["Red-team operational use"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Baseline before signal.
3. Hindcast before claim.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
