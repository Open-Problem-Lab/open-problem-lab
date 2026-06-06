# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Risk factor spatial inventory"]
  B --> C["Neighborhood risk mapping"]
  C --> D["Validation against blood-lead data"]
  D --> E["Red-team misuse review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Risk factor inventory before risk mapping.
3. Validation before claim.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
