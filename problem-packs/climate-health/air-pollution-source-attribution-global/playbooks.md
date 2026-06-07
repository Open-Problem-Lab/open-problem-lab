# Playbooks

## Analyst Playbook

1. Start with `problem.json`, `evidence.json`, and `tasks.json`.
2. Select one scoped task.
3. Add evidence before adding claims.
4. For source-attribution mapping: always document which apportionment method is used and how methodology choice affects results — different methods give different attribution percentages for the same city.
5. For sector health-impact analysis: always document concentration-response function transferability from high-income to LMIC contexts and uncertainty propagation from source-attribution estimates.
6. For borrowed-context attribution: always explicitly state when source-attribution data comes from a different city than the one being analyzed, with transferability caveats.
7. Mark every operational inference as reviewed, replicated, or blocked.

## Reviewer Playbook

Ask five questions:

1. What claim is being made about PM2.5 source attribution or sector-specific health impacts?
2. What source proves it — and is it a published apportionment study from the analyzed city, a borrowed attribution from a different city, or a model estimate?
3. What method separates source contributions, and how would results differ under alternative apportionment methods?
4. What would make it false — particularly if the apportionment method is inappropriate for the city, if monitor density is too low for representativeness, or if the concentration-response function doesn't transfer to the LMIC context?
5. Who could misuse it — particularly to justify source-specific regulation without local apportionment evidence, or to close industries based on borrowed-context attributions?

## Field-Reality Playbook

Do not ask whether a source-attribution map is impressive. Ask whether it would change a named decision for a named user at a useful time, without creating worse incentives. For LMIC megacity air-quality policy, ask specifically:

- Would a Delhi Pollution Control Committee officer use this to target crop-residue burning interventions, or would it be used to justify industrial closures based on apportionment methodology that gives different results under different methods?
- Would an air-quality management agency use this to allocate enforcement resources, or would it ignore the monitor-representativeness limitations of a handful of stations for 10+ million people?
- Would a transport planner use this to justify vehicle emission standards, or would it assume transport is the dominant source without local apportionment evidence?

The answer must include explicit non-use cases before any field-facing output is published.
