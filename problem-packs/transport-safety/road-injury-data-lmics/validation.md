# Validation

## Validation Layers

| Layer           | Gate                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Structure       | `pnpm validate` passes schemas, links, and pack completeness checks.                                                                   |
| Evidence        | Every burden or measurement-gap statement has a dated source and explicit limits.                                                      |
| Data            | A reviewer can identify grain, case definition, missingness, access permission, and de-identification status for every linkage source. |
| Reproducibility | Quantitative linkage and sensitivity artifacts include rerunnable steps, input hashes, and environment notes.                          |
| Review          | Transport-safety, public-health, privacy/red-team, and field-reality reviewers approve the relevant artifact.                          |
| Replication     | Any quantitative linkage or allocation result is independently rerun before acceptance.                                                |

## Linkage Requirements

- Define whether the row is a crash, person, encounter, dispatch, or death.
- State the matching key, time window, geography, and deterministic or probabilistic rule.
- Report unresolved duplicates, unmatched records, and missingness by source and relevant subgroup.
- Do not publish direct identifiers, raw coordinates that enable re-identification, or free-text clinical notes.
- Separate capture estimates from causal claims about road-safety interventions.

## Allocation Requirements

No shortlist may be called a recommendation until it states the named decision-maker, decision rule, time window, uncertainty range, false-positive and false-negative costs, non-use cases, and replication status.
