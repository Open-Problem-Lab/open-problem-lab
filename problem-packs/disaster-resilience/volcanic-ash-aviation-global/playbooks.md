# Playbooks

## Analyst Playbook

1. Start with `problem.json`, `evidence.json`, and `tasks.json`.
2. Select one scoped task.
3. Add evidence before adding claims.
4. For detection-capability mapping: always document satellite false-positive rates (20-40 percent), nighttime limitations, multi-layer cloud conditions, and the distinction between VAAC coverage area and actual detection capability.
5. For forecast-uncertainty analysis: always document eruption-source parameter uncertainty and non-linear propagation through transport models — small errors in ash height produce large errors in downwind concentration.
6. For safety-critical outputs: always present results as uncertainty-bounded risk indicators, not as definitive operational guidance. Document that safe ash-concentration thresholds are not scientifically established.
7. Mark every operational inference as reviewed, replicated, or blocked.

## Reviewer Playbook

Ask five questions:

1. What claim is being made about volcanic ash detection capability or forecast accuracy?
2. What source proves it — and is it satellite validation, model intercomparison, or operational case study?
3. What method separates true ash detections from false positives, and what is the false-negative risk in poorly monitored regions?
4. What would make it false — particularly if satellite false-positive rates are higher than documented, if eruption-source parameters are wrong, or if poorly monitored volcanoes erupt undetected?
5. Who could misuse it — particularly to justify airspace closures without sufficient evidence, to claim safe ash thresholds are established, or to ignore detection gaps in poorly monitored volcanic regions?

## Field-Reality Playbook

Do not ask whether a detection-capability map is impressive. Ask whether it would change a named decision for a named user at a useful time, without creating worse incentives. For volcanic ash aviation hazards, ask specifically:

- Would a London VAAC operations officer use this to calibrate advisory confidence levels, or would it be treated as real-time ash detection when it's actually a static capability assessment?
- Would an airline operations center use this for route planning around volcanic regions, or would it create false confidence in detection capability that doesn't exist in poorly monitored areas?
- Would a civil aviation authority use this to justify monitoring investment, or would it be used to set safe-flight thresholds that the science does not support?

The answer must include explicit non-use cases before any field-facing output is published.
