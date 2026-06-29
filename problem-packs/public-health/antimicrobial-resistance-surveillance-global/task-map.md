# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["GLASS data compilation"]
  B --> C["Lab-capacity mapping"]
  C --> D["Surveillance-gap analysis"]
  D --> E["Red-team review"]
  D --> F["Field reality check"]
  E --> G["Reviewed output"]
  F --> G
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. GLASS compilation before gap analysis.
3. Gap analysis before red-team review.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
