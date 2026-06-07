# Task Map

The machine-readable task list is `tasks.json`.

```mermaid
flowchart TD
  A["Source inventory"] --> B["Neonatal mortality mapping"]
  B --> C["Facility quality gap analysis"]
  C --> D["Red-team review"]
  C --> E["Field reality check"]
  D --> F["Reviewed output"]
  E --> F
```
