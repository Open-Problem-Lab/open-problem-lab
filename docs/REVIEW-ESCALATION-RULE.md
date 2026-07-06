# Review Escalation Rule

Open Problem Lab should make it clear when ordinary review is not enough.

This guide defines simple triggers for escalating a contribution to stronger review before merge or before treating it as repository knowledge.

## Escalation triggers

Escalate review when a contribution:

- changes an accepted artifact's status or boundary;
- adds a quantitative result used for prioritization;
- changes a generated index or schema-adjacent artifact;
- depends on field assumptions;
- introduces a disputed source;
- changes a review gate, workflow, or governance rule;
- affects a claim where being wrong would waste time, money, reviewer trust, or field capacity.

## Escalation note

```markdown
## Review escalation

**Artifact:** Link to PR, issue, evidence record, or problem-pack section.

**Trigger:** Which escalation trigger applies?

**Needed review:** evidence | domain | quantitative | field | maintainer | replication.

**Risk if skipped:** One sentence.

**Can merge before escalation?** yes | no | only as exploratory.
```

## Reviewer guidance

A reviewer can approve structure while still escalating substance. The PR should not treat partial review as full acceptance.

## Agent guidance

Agents should propose escalation when their work changes status, metrics, review gates, or field-facing claims.

## Acceptance test

The rule works when a contributor can tell whether a PR needs ordinary review, stronger review, or exploratory-only merge.
