# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Impervious surface mapping"]
  B --> C["Drainage capacity assessment"]
  C --> D["Flood risk mapping"]
  D --> E["Red-team eviction-risk review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Impervious-surface mapping before drainage-capacity assessment.
3. Drainage-capacity assessment before flood-risk mapping.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
