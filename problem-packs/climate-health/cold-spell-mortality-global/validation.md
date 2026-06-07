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

Sub-national cold-spell analyses must document:

- Temperature reanalysis product used (ERA5-Land) with resolution, temporal coverage, and high-altitude validation status.
- Cold-spell definition methodology and threshold justification.
- Altitude-context documentation — explicitly state which populations are above 1,500 meters elevation.
- Ground weather-station data availability for ERA5-Land validation.
- LMIC data-gap documentation — explicitly state where cold-mortality data is absent.

## Extrapolation Requirements

No cold-mortality risk claim may be called actionable until it includes:

- Temperature-mortality relationship source — document whether from the analyzed LMIC context or extrapolated from high-income country studies.
- Explicit transferability caveats — state what is different about LMIC populations (housing, nutrition, health-system access, heating availability) that makes extrapolation uncertain.
- Housing-quality proxy documentation — state which DHS or census indicators are used and their correlation with indoor temperature where known.
- Comparison with at least one published cold-mortality study from a similar climate or altitude context, with explicit evidence-gap documentation if none exists.
- Sensitivity analysis showing how risk estimates change under alternative temperature-mortality assumptions.

## Vulnerability-Mapping Requirements

No cold-mortality vulnerability recommendation may be merged without:

- Housing-quality proxy limitations — document that proxy-to-indoor-temperature correlation is unvalidated.
- Energy-poverty and heating-fuel affordability context.
- Dual-hazard documentation — cold and heat risk must be presented together to prevent deprioritization of either.
- Non-use case documentation (not for deprioritizing heat adaptation, not for heating-fuel subsidy justification without affordability analysis, not for presenting proxy-based risk as verified mortality estimates).
