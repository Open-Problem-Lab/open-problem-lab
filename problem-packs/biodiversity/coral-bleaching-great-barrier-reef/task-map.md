# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Bleaching alert validation"]
  B --> C["Reef-scale bleaching severity mapping"]
  C --> D["Recovery classification"]
  D --> E["Red-team review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

1. Evidence before model. 2. Satellite validation before severity claims. 3. Recovery tracking before management claims. 4. Red-team and field-reality review before publication.
