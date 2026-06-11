# Validation

## Validation Layers

| Layer           | Gate                                                                 |
| --------------- | -------------------------------------------------------------------- |
| Structure       | `pnpm validate` passes schemas                                       |
| Evidence        | Every claim has a dated evidence record                              |
| Reproducibility | Quantitative artifacts include rerunnable steps                      |
| Review          | Required reviewer roles approve or request changes                   |
| Replication     | Safety-sensitive or quantitative claims are independently reproduced |

## Baseline Requirements

- Measure family is named explicitly.
- Numerator and denominator are documented.
- Time reference is documented.
- Geographic grain and boundary version are documented.
- Survey design or administrative source caveat is documented.
- Population denominator and exclusion logic are documented.

## Comparison Requirements

No cross-source comparison is valid unless it states:

- whether it compares under-5 survey status, certificate possession, or administrative completeness
- whether the comparison is same-year, near-year, or cross-period
- whether the catchment or district boundaries actually align
- whether the health-touchpoint source measures service contact, service completion, or registry workflow

## Health-Linkage Requirements

No health-service linkage claim may be merged without:

- a named touchpoint
- a stated mechanism
- at least one failure mode
- explicit non-use cases
- replication status for any quantitative comparison
