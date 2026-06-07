# Validation

## Validation Layers

| Layer           | Gate                                                                 |
| --------------- | -------------------------------------------------------------------- |
| Structure       | `pnpm validate` passes schemas and problem-pack completeness checks  |
| Evidence        | Every claim has a dated evidence record                              |
| Reproducibility | Quantitative artifacts include rerunnable steps                      |
| Review          | Required reviewer roles approve or request changes                   |
| Replication     | Safety-sensitive or quantitative claims are independently reproduced |

## Baseline Requirements

Sub-national wildfire-smoke analyses must document:

- Satellite smoke-detection product used (HMS, MODIS AOD) with known cloud-cover and nighttime gaps.
- Chemical-transport model used (GEOS-Chem) with fire-emissions inventory version and resolution.
- Ground-monitor selection rationale, density assessment, and spatial representativeness.
- Smoke-event identification methodology (threshold, duration, plume classification).
- Non-smoke baseline period for seasonal comparison.
- Regional fire-regime context (boreal, temperate, tropical, peat, grassland).

## Exposure-Validation Requirements

No smoke-exposure health claim may be called actionable until it includes:

- Satellite-to-monitor correlation for the specific region analyzed, with sample size and time period documented.
- Monitor density assessment and explicit documentation of areas where validation is insufficient.
- Comparison with at least one published exposure-validation study for a similar fire regime.
- Sensitivity analysis showing how health-impact estimates change under alternative exposure definitions (binary smoke-day vs. continuous PM2.5, HMS density categories vs. model composition).
- LMIC coverage-gap documentation where health-impact claims are made for underrepresented regions.

## Health-Impact Requirements

No respiratory health claim linked to wildfire smoke may be merged without:

- Confound control documentation for at least three non-smoke factors (non-smoke PM2.5, temperature, humidity, respiratory seasonality).
- Health-data limitations (facility coverage, case definition, health-seeking behavior, capacity constraints).
- Explicit statement of whether effect estimates are derived from the analyzed region or transferred from studies in different fire regimes or populations.
- Differential-toxicity claims flagged as non-consensus with replication-status documentation.
- Non-use case documentation (not for individual evacuation orders, not for prescribed-burning bans, not for panic-based advisories).
