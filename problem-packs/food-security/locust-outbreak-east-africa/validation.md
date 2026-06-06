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

Breeding habitat suitability baselines must document:

- Vegetation index source and threshold.
- Soil moisture source and threshold.
- Rainfall trigger thresholds and accumulation periods.
- Geographic grain and temporal resolution.
- Agreement with FAO reported breeding sites.
- Known false-positive habitat types.

## Model Or Signal Requirements

No locust outbreak signal may be called actionable until it includes:

- Input data sources.
- Lead-time distribution from signal to swarm formation.
- False-positive rate at each lead time.
- False-negative rate at each lead time.
- Trajectory forecast error distances when wind fields are used.
- Known non-use cases including conflict zones where field confirmation is impossible.
- Replication status.
