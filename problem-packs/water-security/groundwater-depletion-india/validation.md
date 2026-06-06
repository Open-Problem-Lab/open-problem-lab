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

Aquifer-level groundwater baselines must document:

- Aquifer or assessment unit identifier.
- Time period with monthly or seasonal grain.
- TWS anomaly units or equivalent water height.
- Groundwater signal separation method.
- Recharge data source.
- Extraction data source.
- Missingness including GRACE data gaps.
- Aquifer boundary definition source and version.

## Model Or Signal Requirements

No depletion signal may be called actionable until it includes:

- Input data sources.
- Depletion rate with uncertainty bounds.
- Validation period and validation dataset.
- Seasonality and recharge-year anomaly treatment.
- Known non-use cases including managed recharge zones and canal-irrigated areas.
- Replication status.
