# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Snakebite risk mapping"]
  B --> C["Antivenom access gap analysis"]
  C --> D["Red-team review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Risk mapping before gap analysis.
3. Gap analysis before red-team review.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
