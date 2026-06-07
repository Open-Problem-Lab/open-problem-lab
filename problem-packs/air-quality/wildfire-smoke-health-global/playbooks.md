# Playbooks

## Analyst Playbook

1. Start with `problem.json`, `evidence.json`, and `tasks.json`.
2. Select one scoped task.
3. Add evidence before adding claims.
4. For satellite smoke-exposure analysis: always document cloud-cover gaps, nighttime detection limitations, and the difference between smoke-presence indicators (HMS) and quantitative PM2.5 estimates.
5. For chemical-transport model analysis: always document which fire-emissions inventory was used, model resolution limitations, and regional validation status.
6. For health-impact analysis: always document confound controls for non-smoke PM2.5, temperature, humidity, and baseline respiratory seasonality. Document LMIC evidence gaps explicitly.
7. Mark every operational inference as reviewed, replicated, or blocked.

## Reviewer Playbook

Ask five questions:

1. What claim is being made about wildfire smoke's contribution to PM2.5 or health impact?
2. What source proves it — and is it a satellite correlation, model estimate, or epidemiological study from a different fire regime?
3. What method separates smoke-specific PM2.5 from non-smoke sources and controls for confounders?
4. What would make it false — particularly if satellite exposure was misclassified, monitors were too sparse, or effect estimates were transferred from a different population?
5. Who could misuse it — particularly to cause panic during fire events, justify blanket fire suppression, or undermine prescribed-burning programs?

## Field-Reality Playbook

Do not ask whether a smoke-health impact estimate is impressive. Ask whether it would change a named decision for a named user at a useful time, without creating worse incentives. For wildfire smoke, ask specifically:

- Would a state air-quality manager use this to calibrate smoke-advisory thresholds, or would it be used to justify panic-based school closures without considering the limited duration of smoke events?
- Would an emergency management office use this to pre-position respiratory health resources, or would it trigger disproportionate evacuation orders?
- Would a land management agency use this to balance prescribed-burning benefits against smoke-health costs, or would it be used to ban prescribed burning and increase catastrophic fire risk?

The answer must include explicit non-use cases before any field-facing output is published.
