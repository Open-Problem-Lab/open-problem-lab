# Playbooks

## Analyst Playbook

1. Start with `problem.json`, `evidence.json`, and `tasks.json`.
2. Select one scoped task.
3. Add evidence before adding claims.
4. For cold-spell frequency mapping: always document ERA5-Land resolution limitations in mountainous terrain, altitude-related temperature patterns, and the absence of ground-station validation in most high-altitude LMIC regions.
5. For vulnerability analysis: always document that DHS housing-quality indicators are proxies for cold-exposure vulnerability — the correlation between housing materials and actual indoor temperature during cold spells has not been systematically validated.
6. For mortality-risk estimation: always document that the temperature-mortality relationship is extrapolated from high-income country studies — LMIC populations have different housing, nutrition, health-system, and heating-access contexts that make extrapolation uncertain.
7. Mark every operational inference as reviewed, replicated, or blocked.

## Reviewer Playbook

Ask five questions:

1. What claim is being made about cold-spell mortality risk or heating-access vulnerability?
2. What source proves it — and is it from the analyzed LMIC context or extrapolated from high-income country studies?
3. What method translates temperature exposure and housing-quality proxies into mortality-risk estimates, and what are the validation gaps?
4. What would make it false — particularly if ERA5-Land doesn't capture valley-scale cold-air pooling, if housing proxies don't correlate with indoor temperature, or if the temperature-mortality relationship from London doesn't transfer to Kathmandu?
5. Who could misuse it — particularly to deprioritize heat-adaptation investments, to justify heating-fuel subsidies without affordability analysis, or to present proxy-based risk indicators as verified mortality estimates?

## Field-Reality Playbook

Do not ask whether a cold-mortality risk map is impressive. Ask whether it would change a named decision for a named user at a useful time, without creating worse incentives. For cold-spell mortality in LMICs, ask specifically:

- Would a Nepal Ministry of Health cold-weather preparedness officer use this to pre-position health resources in high-altitude districts, or would it be presented as a verified mortality estimate when it's actually a proxy-based risk indicator?
- Would an energy-access program use this to target heating-fuel distribution, or would it justify subsidies without analyzing fuel affordability and availability?
- Would a climate-adaptation funder use this to balance cold and heat investments, or would it deprioritize heat adaptation without dual-hazard context?

The answer must include explicit non-use cases before any field-facing output is published.
