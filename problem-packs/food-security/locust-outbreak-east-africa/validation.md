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

- Vegetation index source, product version, and threshold (e.g., MOD13Q1 V061, NDVI > 0.2).
- Soil moisture source and threshold (e.g., SMAP L3, 0.10-0.35 m3/m3).
- Rainfall trigger thresholds and accumulation periods (e.g., CHIRPS, >25mm in 10 days).
- Geographic grain and temporal compositing window.
- Agreement with FAO reported breeding sites (true positive, false positive, false negative rates).
- Known false-positive habitat types (e.g., irrigated agriculture, natural vegetation unrelated to locust breeding).
- Cloud-gap handling and temporal interpolation method.

## Model Or Signal Requirements

No locust outbreak signal may be called actionable until it includes:

- Input data sources and product versions.
- Lead-time distribution from signal to swarm formation (not a single point estimate).
- False-positive rate at each lead time.
- False-negative rate at each lead time.
- Trajectory forecast error distances when wind fields are used.
- Known non-use cases including conflict zones where field confirmation is impossible.
- Replication status.
