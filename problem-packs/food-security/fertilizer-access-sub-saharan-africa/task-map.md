# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Fertilizer access mapping"]
  B --> C["Soil nutrient depletion analysis"]
  C --> D["Red-team fertilizer-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Fertilizer-access mapping with distribution-infrastructure documentation before soil analysis.
3. Soil-nutrient depletion analysis with response-variability documentation before effectiveness claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
