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

District-level baselines must document:

- District identifier.
- Month or epidemiological week.
- Case definition.
- Population denominator.
- Missingness handling.
- Administrative-boundary changes.

## Model Or Signal Requirements

No signal may be called actionable until it includes:

- Input data sources.
- Lead-time assumption.
- Back-test period.
- False-positive behavior.
- False-negative behavior.
- Known non-use cases.
- Replication status.
