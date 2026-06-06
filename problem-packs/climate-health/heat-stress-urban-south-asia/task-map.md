# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Heat exposure mapping"]
  B --> C["Vulnerability-weighted risk mapping"]
  C --> D["Red-team review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

1. Evidence before model. 2. Exposure before vulnerability integration. 3. Risk mapping before action-planning claims. 4. Red-team and field-reality review before publication.
