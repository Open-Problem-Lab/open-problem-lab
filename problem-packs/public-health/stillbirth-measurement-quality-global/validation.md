# Validation

## Validation Layers

| Layer           | Gate                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Structure       | `pnpm validate` passes schemas                                                                    |
| Evidence        | Every claim cites dated evidence records with explicit limitations                                |
| Reproducibility | Any shortlist or ranking includes rerunnable steps and explicit exclusion logic                   |
| Review          | Required reviewer roles approve or request changes                                                |
| Replication     | Quantitative comparisons and operationally sensitive classifications are independently reproduced |

## Baseline Requirements

- Stillbirth definition threshold is named explicitly.
- Source family is named explicitly.
- Numerator and denominator are documented.
- Time reference is documented.
- Geographic grain and boundary version are documented.
- Whether intrapartum burden is measured directly or inferred is documented.
- Reporting-population bias and missingness are documented.

## Comparison Requirements

No stillbirth comparison is valid unless it states:

- whether it compares survey recall, CRVS registration, facility counts, or audit records
- whether the same gestational-age or birthweight threshold is used
- whether the denominator is pregnancies, births, facility deliveries, or registered events
- whether the comparison is same-year, near-year, or cross-period
- whether the result is burden framing, counting-system assessment, or quality-of-care triage

## Quality-Signal Requirements

No quality-of-care inference may be merged without:

- a named workflow where failure could generate intrapartum stillbirth risk
- at least one alternative explanation tied to counting or referral bias
- at least one failure mode
- explicit non-use cases
- replication status for any ranking or classification artifact
