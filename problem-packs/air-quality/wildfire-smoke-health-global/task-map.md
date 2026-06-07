# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Smoke-exposure validation"]
  B --> C["Health impact analysis"]
  C --> D["Red-team exposure-misclassification review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Satellite-to-monitor exposure validation before health-impact analysis.
3. Health-impact analysis before smoke-toxicity claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
