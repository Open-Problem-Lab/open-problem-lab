# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Dust-exposure mapping"]
  B --> C["Health impact analysis"]
  C --> D["Red-team exposure-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Dust-exposure mapping with AOD validation before health-impact analysis.
3. Health-impact analysis before dust-specific health claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
