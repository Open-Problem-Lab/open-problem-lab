# Recheck Queue

Open Problem Lab should have a visible queue for artifacts that are not wrong, but are not strong enough to remain load-bearing without another pass.

## Purpose

The recheck queue captures work that needs a second look because of weak evidence, old sources, unclear boundaries, reviewer concerns, field uncertainty, or changing context.

It is a routing mechanism, not a rejection mechanism.

## Queue entry

```markdown
## RQ-YYYY-NNN — Short name

**Artifact:** Link to claim, evidence record, issue, PR, or problem-pack section.

**Reason for recheck:** One paragraph.

**Trigger:** Source age, field report, reviewer concern, dataset update, method concern, or status change.

**Needed reviewer:** general | evidence | domain | quantitative | field | maintainer.

**Smallest useful check:** The next action that would reduce uncertainty.

**Decision after check:** keep | bound | dispute | archive | escalate.
```

## Reviewer guidance

A reviewer should use the queue when work is promising but not ready to carry its current confidence level.

## Agent guidance

Agents should inspect the queue before proposing new work. A queued artifact is often the best place to make a valuable contribution.

## Acceptance test

A queue entry is useful when another contributor can immediately see what to check, why it matters, and how the result would change repository status.
