# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Warning-system coverage mapping"]
  B --> C["Effectiveness evaluation analysis"]
  C --> D["Red-team effectiveness-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Warning-system coverage mapping before effectiveness evaluation.
3. Effectiveness evaluation before mortality-reduction claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
