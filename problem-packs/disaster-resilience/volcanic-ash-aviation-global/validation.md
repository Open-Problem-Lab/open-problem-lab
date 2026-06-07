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

Regional volcanic ash analyses must document:

- Satellite ash-detection product used (MODIS, VIIRS, infrared sounder) with false-positive rate, nighttime limitations, and multi-source aerosol discrimination capability.
- VAAC coverage area versus actual detection capability — explicitly distinguish advisory responsibility from monitoring infrastructure.
- Ground-based volcanic monitoring station density for the analyzed region.
- Ash-transport model used with eruption-source parameter sensitivity documentation.
- Submarine volcanic monitoring capability assessment.

## Detection-Capability Requirements

No ash-detection capability claim may be called actionable until it includes:

- False-positive rate documentation from satellite validation studies in the specific aerosol environment of the analyzed region.
- False-negative risk assessment for poorly monitored volcanic regions — document what eruptions could go undetected.
- Comparison with at least one well-monitored region as a capability baseline.
- Sensitivity analysis showing how detection capability changes with cloud cover, nighttime conditions, and multi-source aerosol contamination.
- Monitoring-network gap documentation stating what infrastructure would be needed for equivalent capability to well-monitored regions.

## Forecast-Uncertainty Requirements

No ash-concentration forecast claim may be merged without:

- Eruption-source parameter uncertainty documentation — explicitly state which parameters are measured versus estimated.
- Non-linear uncertainty propagation analysis showing how source-parameter errors affect downwind concentration forecasts.
- Validation against satellite observations with explicit documentation that satellite validation itself has false-positive limitations.
- Safe-threshold documentation — explicitly state that ash-concentration safe-flight thresholds are not scientifically established and vary by engine type, ash composition, and exposure duration.
- Non-use case documentation (not for airspace closure recommendations, not for safe-flight threshold determination, not for real-time ash alerts from static capability assessments).
