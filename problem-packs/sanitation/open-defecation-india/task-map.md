# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Coverage triangulation"]
  B --> C["Use-vs-construction gap analysis"]
  C --> D["Health outcome correlation"]
  D --> E["Red-team review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

1. Evidence before model.
2. Triangulation before gap analysis.
3. Gap analysis before health claims.
4. Red-team and field-reality review before publication.
