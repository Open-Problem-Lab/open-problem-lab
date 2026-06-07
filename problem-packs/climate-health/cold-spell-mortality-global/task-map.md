# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Cold-spell frequency mapping"]
  B --> C["Heating vulnerability mapping"]
  C --> D["Red-team extrapolation-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Cold-spell frequency mapping with altitude context before vulnerability analysis.
3. Vulnerability analysis before cold-mortality risk claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
