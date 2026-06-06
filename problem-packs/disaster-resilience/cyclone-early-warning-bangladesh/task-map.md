# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Track forecast verification"]
  B --> C["Storm surge model verification"]
  C --> D["False-alarm profiling by lead time"]
  D --> E["Red-team false-confidence review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Track verification before surge verification.
3. Surge verification before evacuation signal analysis.
4. False-alarm profiling before claim.
5. Red-team and field-reality review before publication.
