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

Sub-national malaria baselines must document:

- District or administrative unit identifier.
- Month or epidemiological week.
- Case definition.
- Population denominator.
- Missingness handling including reporting gaps and facility closures.
- Administrative-boundary changes.
- Reporting lag documentation.

## Model Or Signal Requirements

No malaria early warning signal may be called actionable until it includes:

- Input data sources.
- Lead-time assumption.
- Back-test period with validation window.
- False-positive rate at seasonal lead times.
- False-negative rate at seasonal lead times.
- Known non-use cases including drug resistance zones and vector control campaign periods.
- Replication status.
