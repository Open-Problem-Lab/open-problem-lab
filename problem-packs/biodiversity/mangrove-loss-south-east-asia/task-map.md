# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Mangrove deforestation mapping"]
  B --> C["Coastal protection loss analysis"]
  C --> D["Red-team valuation-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Deforestation mapping with driver classification before protection-loss analysis.
3. Protection-loss analysis before coastal-management claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
