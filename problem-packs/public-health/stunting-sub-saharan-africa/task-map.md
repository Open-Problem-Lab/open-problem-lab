# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Stunting rate estimation"]
  B --> C["Persistent hotspot classification"]
  C --> D["Intervention coverage gap analysis"]
  D --> E["Red-team review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

1. Evidence before model. 2. Multi-round analysis before hotspot claim. 3. Hotspot before intervention gap. 4. Red-team and field-reality review before publication.
