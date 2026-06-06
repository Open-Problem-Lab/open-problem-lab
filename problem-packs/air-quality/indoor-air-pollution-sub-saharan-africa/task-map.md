# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Exposure estimation"]
  B --> C["Sub-national exposure mapping"]
  C --> D["Red-team review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

1. Evidence before model. 2. Exposure estimation before mapping. 3. Red-team and field-reality review before publication.
