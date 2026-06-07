# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Lab-field gap analysis"]
  B --> C["Compliance verification assessment"]
  C --> D["Red-team lab-performance-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Lab-field gap analysis with measurement methodology before compliance assessment.
3. Compliance-verification assessment before effectiveness claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
