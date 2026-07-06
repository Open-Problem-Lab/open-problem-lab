# Validation

## Validation Layers

| Layer           | Gate                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Structure       | `pnpm validate` passes schemas                                                                    |
| Evidence        | Every claim cites dated evidence records with explicit limitations                                |
| Reproducibility | Any shortlist or readiness classification includes rerunnable steps and exclusion logic           |
| Review          | Required reviewer roles approve or request changes                                                |
| Replication     | Quantitative readiness, gap, or allocation-sensitive classifications are independently reproduced |

## Baseline Requirements

- Measure family is explicit: need, equipment presence, functionality, clinical use, cost, or outcome.
- Oxygen source type is documented.
- Pulse oximetry availability and function are documented separately from oxygen source availability.
- Numerator and denominator are documented.
- Time reference and assessment method are documented.
- Geographic grain and facility identifier handling are documented.
- Uptime, power, maintenance, consumables, and staff constraints are documented or marked missing.

## Comparison Requirements

No oxygen access comparison is valid unless it states:

- whether it compares need estimates, equipment inventories, facility readiness, functionality, clinical use, or outcomes
- whether facilities, beds, admissions, hypoxemic patients, procedures, births, or disease episodes are the denominator
- whether the comparison is same-year, near-year, emergency-period, or cross-period
- whether oxygen source type and pulse oximetry are measured or inferred
- whether missing functionality data could overturn the classification

## Allocation-Sensitive Requirements

No procurement, maintenance, or financing implication may be merged without:

- a named decision-maker and decision
- at least one alternative explanation tied to measurement or reporting bias
- at least one failure mode
- an explicit kill condition
- non-use cases
- replication status for any ranking or classification artifact
