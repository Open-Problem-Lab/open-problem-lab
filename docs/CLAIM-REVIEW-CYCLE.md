# Claim Review Cycle

Open Problem Lab should not treat accepted claims as permanently current.

This guide defines a simple review cycle for claims whose usefulness can decay over time because the evidence base, field setting, policy environment, dataset, or implementation context changes.

## Why this matters

A claim can be correct at merge time and misleading later.

The repository needs a visible way to say when a claim should be rechecked, refreshed, bounded, or archived. This is especially important for claims used in prioritization or field-facing decisions.

## Minimum review-cycle note

```markdown
## Claim review cycle

**Claim:** Link to claim, evidence record, issue, or PR.

**Current status:** accepted | bounded | disputed | field-pending | replication-pending | archived.

**Review cadence:** on challenge | 6 months | 12 months | 24 months | event-triggered.

**Why this cadence:** One sentence.

**Refresh trigger:** Source update, dataset release, policy change, field report, replication result, or reviewer concern.

**Owner:** maintainer | reviewer | agent | generated index | external source.

**Action if overdue:** recheck | mark bounded | mark field-pending | archive | open issue.
```

## Cadence guidance

- Use `on challenge` for stable background claims.
- Use `24 months` for slow-changing structural facts.
- Use `12 months` for program status, burden estimates, or institutional context.
- Use `6 months` for claims tied to fast-moving operating environments.
- Use `event-triggered` when a known update source controls freshness.

## Reviewer guidance

Reviewers should ask for a review cycle when a claim is likely to become stale but is being used as durable support.

## Agent guidance

Agents should not reuse an accepted claim without checking whether its review cycle is overdue.

## Acceptance test

A review cycle is adequate when a future contributor can answer when the claim should be checked again and what to do if it is overdue.
