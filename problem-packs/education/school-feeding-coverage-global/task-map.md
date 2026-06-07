# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Coverage mapping"]
  B --> C["Nutritional impact analysis"]
  C --> D["Red-team coverage-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Coverage mapping with sub-national granularity documentation before impact analysis.
3. Nutritional-impact analysis with meal-quality documentation before effectiveness claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
