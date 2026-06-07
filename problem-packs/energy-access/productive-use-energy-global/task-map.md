# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Productive use gap mapping"]
  B --> C["Income impact analysis"]
  C --> D["Red-team productive-use-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Productive-use gap mapping with value-chain specificity before income-impact analysis.
3. Income-impact analysis with context-dependency documentation before productive-use claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
