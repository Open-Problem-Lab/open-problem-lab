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

Sub-national dust-storm analyses must document:

- Satellite dust-detection product used (MODIS AOD, CAMS) with resolution, temporal coverage, and bright-surface accuracy limitations.
- AOD-to-ground-PM10 transfer methodology with boundary-layer height and dust-altitude assumptions.
- Ground-monitor sparsity documentation — explicitly state monitor density per million population in the analyzed region.
- Dust-source toxicology context — document biological and chemical contaminant profile for the analyzed dust source.
- Non-dust PM10 confound documentation — list co-occurring sources in the analyzed region.

## Exposure-Validation Requirements

No dust-exposure health claim may be called actionable until it includes:

- Satellite-to-monitor correlation for the specific region analyzed, with sample size and time period documented.
- Bright-surface AOD accuracy assessment — document whether the analyzed region has high surface reflectance that reduces AOD reliability.
- Comparison with at least one published dust-exposure validation study for a similar arid context.
- Sensitivity analysis showing how health-impact estimates change under alternative exposure definitions (AOD threshold vs. continuous, dust-day binary vs. dust concentration).
- LMIC monitor-sparsity documentation stating what monitoring would be needed to validate the exposure estimate.

## Health-Impact Requirements

No respiratory health claim linked to dust exposure may be merged without:

- Confound control documentation for at least two non-dust PM10 sources (construction, traffic, biomass burning, industrial).
- Health-data limitations (facility coverage, case definition, health-seeking behavior, capacity constraints).
- Dust-source toxicology context — document whether health effects may be driven by mineral mass or biological/chemical contaminants.
- Differential-toxicity claims flagged as non-consensus with replication-status documentation.
- Non-use case documentation (not for land-degradation intervention justification without health-effectiveness evidence, not for dust-suppression technology proposals).
