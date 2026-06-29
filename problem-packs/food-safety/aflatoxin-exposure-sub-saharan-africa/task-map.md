# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Contamination data compilation"]
  A --> C["Climate suitability review"]
  B --> D["Biocontrol intervention review"]
  C --> D
  D --> E["Red-team misuse review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before risk map.
2. Contamination data before climate prediction.
3. Back-test before climate variable acceptance.
4. Intervention evidence before allocation recommendation.
5. Red-team review before field-facing output.
6. Field-reality review before publication.
