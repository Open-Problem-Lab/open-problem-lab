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

Deforestation verification baselines must document:

- Satellite data source and processing methodology.
- Minimum mapping unit.
- Reference dataset and comparison methodology.
- Commission and omission error statistics.
- Study period and temporal aggregation.
- Cloud-cover and seasonality effects on detection.

## Model Or Signal Requirements

No species-range loss estimate may be called validated until it includes:

- Deforestation data source and verification status.
- Species occurrence data source and minimum record threshold.
- Range calculation methodology.
- Uncertainty bounds including occurrence undersampling effects.
- Known non-use cases including species not well-represented in occurrence databases.
- Replication status for all quantitative estimates.
