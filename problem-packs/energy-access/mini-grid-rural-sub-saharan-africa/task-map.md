# Task Map

## Active Work Claims

The machine-readable task list is `tasks.json`.

## Work Sequence

```mermaid
flowchart TD
  A["Source inventory"] --> B["Viability factor spatial inventory"]
  B --> C["Multi-criteria viability ranking"]
  C --> D["Red-team review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```
