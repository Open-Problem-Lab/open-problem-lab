# Evidence Conflict Resolution

Open Problem Lab should preserve disagreement without letting contradictory claims drift into the repository as if they were equally actionable.

This guide defines how to handle cases where credible sources, reviewers, datasets, or replications point in different directions.

## Why this matters

Verification work fails when conflict is hidden, flattened, or solved by rhetorical confidence.

A mature evidence protocol should be able to say:

- what the conflict is;
- which sources disagree;
- what decision depends on the disagreement;
- what would resolve or bound it;
- whether the claim should be accepted, narrowed, disputed, or held pending replication.

## Minimum conflict note

```markdown
## Evidence conflict note

**Claim affected:** Link to claim, issue, evidence record, or PR.

**Conflict:** One paragraph describing the disagreement.

**Source A:** Link and date.

**Source B:** Link and date.

**Why both are plausible:** Why neither side can be ignored immediately.

**Decision impact:** accepted | bounded | disputed | replication-pending | field-pending | archived.

**Resolution path:** The smallest safe check, reviewer, dataset, or replication that would change status.
```

## Reviewer guidance

Reviewers should ask for a conflict note when a contribution cites only the favorable side of a live disagreement.

A conflict note does not require perfect resolution. It requires honest routing.

## Agent guidance

Agents should not resolve conflicts by majority vote across search results. They should identify the claim boundary, compare source quality and dates, and propose the next check.

## Acceptance test

A conflict note is adequate when a future contributor can see what disagrees, why it matters, and what would move the claim out of conflict.
