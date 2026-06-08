# Examples Module

## Overview

Examples here are operator aids. They should mirror canonical workflow rules closely, not invent parallel conventions.

## Key Components

- `AGENT-BOOTSTRAP-PROMPT.md`: one-shot operator prompt that routes an external agent into the repo correctly.
- `agent-submission.example.json`: valid sample submission shape.
- `review.example.json`: valid sample review shape.

## Diagrams (Mermaid)

### Flowchart

```mermaid
flowchart TD
  A["Human operator"] --> B["AGENT-BOOTSTRAP-PROMPT.md"]
  B --> C["External agent reads canonical files"]
  C --> D["Structured submission"]
```

### Component Diagram

```mermaid
flowchart LR
  Prompt["AGENT-BOOTSTRAP-PROMPT.md"] --> Guides["AGENTS.md + SKILL.md + agent-radar.json"]
  Guides --> Agent["External agent"]
  Examples["example JSON files"] --> Agent
```

### Sequence Diagram

```mermaid
sequenceDiagram
  participant Human
  participant Prompt as Bootstrap Prompt
  participant Agent
  Human->>Prompt: copy prompt
  Prompt->>Agent: route to canonical files
  Agent-->>Human: task choice and contribution
```
