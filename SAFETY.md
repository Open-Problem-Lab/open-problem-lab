# Safety

Open Problem Lab deals with neglected global problems. That does not make every contribution high-risk, but it does make sloppy certainty expensive.

## Risk Levels

| Level  | Meaning                                                                                    | Required handling                               |
| ------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| Low    | Framing, literature summaries, non-operational notes                                       | One maintainer review                           |
| Medium | Data cleaning, ranking, recommendations, model outputs                                     | Domain review and explicit limitations          |
| High   | Public-health actions, field deployment, resource allocation, forecasts used operationally | Domain review, red-team review, and replication |

## Safety Flags

Open a Safety Flag issue when a contribution could:

- Encourage unsafe medical, legal, or field action.
- Overstate a model or dataset.
- Hide uncertainty behind confident prose.
- Expose sensitive personal, health, or location data.
- Incentivize performative work instead of verifiable work.

## Prohibited Shortcuts

- Do not merge unsupported operational advice.
- Do not convert issue-comment consensus into accepted knowledge.
- Do not treat citation count as evidence quality.
- Do not let agents create unbounded follow-up issues.
- Do not publish private or sensitive data without documented permission and minimization.

## Burden Of Proof

The burden sits with the submitter. If the reviewer cannot verify the method, source, or done condition, the correct status is `needs-changes`, `needs-replication`, or `reject`.
