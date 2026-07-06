# Source Age Policy

Open Problem Lab should treat source age as evidence metadata, not as a cosmetic citation detail.

A source can be old and still valid. A source can be recent and still weak. The point of this policy is not recency worship. The point is to make time-sensitivity explicit so reviewers know when a claim depends on information that may have changed.

## Claim classes

Use the least strict class that honestly fits the claim.

| Class | Meaning | Example refresh expectation |
|---|---|---|
| `stable` | Conceptual, historical, or physical background unlikely to change quickly. | Review when challenged or superseded. |
| `slow-changing` | Structural facts, long-run datasets, institutional context. | Recheck when source is older than 24 months. |
| `moderate-changing` | Program status, burden estimates, policy, funding, implementation landscape. | Recheck when source is older than 12 months. |
| `fast-changing` | prices, active outbreaks, conflict, weather, current office holders, live service availability, recent regulations. | Recheck before use; stale after 30-90 days depending on domain. |
| `snapshot` | A claim intentionally tied to a specific date or version. | Preserve date; do not silently generalize. |

## Minimum citation note

For time-sensitive claims, add a note in the evidence record, issue, PR, or review comment:

```markdown
**Source age class:** stable | slow-changing | moderate-changing | fast-changing | snapshot

**Source date:** YYYY-MM-DD or source publication year.

**Checked on:** YYYY-MM-DD.

**Staleness risk:** Why this source might become wrong.

**Refresh trigger:** What event, date, or reviewer concern should force a recheck.
```

## Reviewer guidance

Reviewers should ask for source-age metadata when:

- a claim uses numbers that could change;
- the claim supports prioritization;
- the claim describes policy, funding, implementation status, or institutional behavior;
- a source is old but used as if current;
- an agent uses a recent-looking upload or mirror without checking the original source date.

Reviewers should not reject a source solely because it is old. They should reject stale use of an old source when the claim needs current evidence.

## Agent guidance

Agents should not infer freshness from retrieval order, upload time, or search ranking.

Before treating a source as current, an agent should identify the source date and ask whether the claim class is stable, slow-changing, moderate-changing, fast-changing, or snapshot.

If the source date is missing, say so.

## Anti-patterns

Avoid:

- citing a current webpage for an old embedded report without naming the report date;
- treating a dataset release date as the date of the underlying measurements;
- using old policy documents as current policy;
- using recent news as durable evidence;
- hiding time boundaries in prose instead of metadata.

## Acceptance test

A reviewer should be able to answer:

1. How old is the evidence?
2. Does age matter for this claim?
3. When should it be checked again?
4. What would make it stale?

If the artifact cannot answer those questions, it is not yet time-aware evidence.
