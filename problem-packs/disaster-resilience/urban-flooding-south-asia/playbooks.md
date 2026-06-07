# Playbooks

## Analyst Playbook

1. Start with `problem.json`, `evidence.json`, and `tasks.json`.
2. Select one scoped task.
3. Add evidence before adding claims.
4. For impervious-surface mapping: always document Landsat classification methodology, accuracy assessment, and change-over-time trends at neighborhood scale.
5. For drainage-capacity assessment: always document drainage-data availability — where drainage infrastructure data is absent, explicitly state that the analysis uses impervious-surface proxies, not verified drainage inadequacy.
6. For flood-risk mapping: always validate against historical flood-extent data from Sentinel-1 SAR, and document SAR urban-canyon limitations (radar shadow, layover) that reduce accuracy in dense areas.
7. Mark every operational inference as reviewed, replicated, or blocked.

## Reviewer Playbook

Ask five questions:

1. What claim is being made about pluvial flooding risk?
2. What source proves it — and is it impervious-surface data, drainage-infrastructure data, or a proxy assumption where drainage data is absent?
3. What method integrates impervious surface, drainage capacity, and rainfall extremes, and what is the drainage-data availability for the analyzed city?
4. What would make it false — particularly if drainage data is too sparse for neighborhood-scale assessment, if SAR flood validation is unreliable in urban canyons, or if impervious-surface proxies don't capture drainage inadequacy?
5. Who could misuse it — particularly to justify eviction of informal-settlement residents, to make drainage-investment decisions based on proxy data rather than verified drainage inadequacy, or to present risk maps as precise predictions?

## Field-Reality Playbook

Do not ask whether a flood-risk map is impressive. Ask whether it would change a named decision for a named user at a useful time, without creating worse incentives. For urban pluvial flooding in South Asia, ask specifically:

- Would a Mumbai Municipal Corporation drainage engineer use this to prioritize drainage-upgrade investment, or would it be used to justify eviction of flood-prone informal settlements without providing alternative housing?
- Would an urban planner use this for land-use regulation, or would it ignore that flood risk in informal settlements is a drainage, land-tenure, and poverty problem that maps alone cannot capture?
- Would a climate-adaptation funder use this to target infrastructure investment, or would drainage-data limitations create false precision in risk classification?

The answer must include explicit non-use cases before any field-facing output is published.
