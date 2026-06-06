# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Monitor network gap map"]
  B --> C["Satellite estimate validation"]
  C --> D["Gap priority ranking"]
  D --> E["Red-team over-precision review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Monitor network map before gap analysis.
3. Satellite validation before gap filling.
4. Gap ranking before deployment claim.
5. Red-team and field-reality review before publication.
