# Task Map

The machine-readable task list is `tasks.json`.

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
