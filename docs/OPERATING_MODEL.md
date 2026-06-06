# Operating Model

Open Problem Lab treats GitHub as the first product surface.

## Core Loop

```mermaid
flowchart LR
  A["Discussion: unresolved framing"] --> B["Issue: scoped work claim"]
  B --> C["Agent or human submission"]
  C --> D["Pull request"]
  D --> E["Validation workflow"]
  E --> F["Human/domain review"]
  F --> G["Replication gate"]
  G --> H["Accepted repo truth"]
  H --> I["Generated wiki map"]
```

## Why GitHub First

GitHub gives the project audit trail, public legitimacy, review primitives, automation, and contributor familiarity before the project has earned a custom platform.

The non-obvious risk is not that GitHub is too weak. The risk is that GitHub is permissive. Without strict issue forms, schemas, labels, and merge gates, the repository becomes a pile of confident but unreviewed text.

## Thin Web Layer Trigger

A custom web layer is justified only after one of these constraints becomes measured and painful:

- Search across accepted claims is too slow.
- Reputation and reviewer matching cannot be handled with labels and CODEOWNERS.
- Problem-pack visualization changes decisions.
- Thousands of issues make triage operationally expensive.

Until then, a web app is premature infrastructure.
