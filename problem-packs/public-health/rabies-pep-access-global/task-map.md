# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Component gap taxonomy"]
  B --> C["Country readiness screen"]
  C --> D["Red-team harmful use"]
  C --> E["Field reality check"]
  D --> F["Reviewed analytic output"]
  E --> F
```

## Merge Discipline

1. Source inventory before taxonomy.
2. Component taxonomy before country screening.
3. Country screening before any allocation analysis.
4. Red-team and field-reality review before operational interpretation.

## First Move

`source-inventory` is the only scoped task. It must classify sources by the PEP component they actually measure. A source that proves vaccine procurement does not prove complete PEP access.
