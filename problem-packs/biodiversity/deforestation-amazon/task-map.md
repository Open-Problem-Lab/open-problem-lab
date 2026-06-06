# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Deforestation detection verification"]
  B --> C["Species-range loss estimation"]
  C --> D["Conservation prioritization analysis"]
  D --> E["Red-team overstatement review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Deforestation verification before range-loss estimation.
3. Range-loss estimation before prioritization.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
