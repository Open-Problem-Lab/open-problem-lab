# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Teacher distribution mapping"]
  B --> C["Deployment equity analysis"]
  C --> D["Red-team proxy-overstatement review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```

## Merge Discipline

Work may happen in parallel, but accepted outputs must preserve this order:

1. Evidence before model.
2. Teacher-distribution mapping with EMIS data-quality documentation before equity analysis.
3. Deployment-equity analysis with qualification-proxy limitations before policy claims.
4. Red-team review before field-facing output.
5. Field-reality review before publication.
