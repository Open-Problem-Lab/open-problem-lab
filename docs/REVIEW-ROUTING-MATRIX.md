# Review Routing Matrix

Open Problem Lab should route review by claim risk, not by who happens to see the pull request first.

This document defines a lightweight routing matrix for deciding when a submission needs general review, domain review, field review, replication review, or maintainer review.

## Why this matters

A protocol can have strong standards on paper and still fail if the wrong reviewer approves the wrong claim.

The question is not only whether a PR has been reviewed. The question is whether the review matched the claim.

## Routing levels

| Route | Use when | Minimum reviewer |
|---|---|---|
| `general` | Docs structure, typo fixes, navigation, low-risk explanation. | Any maintainer or trusted contributor. |
| `evidence` | Adds or changes evidence records, source interpretation, claim boundaries. | Reviewer comfortable with evidence quality and citation standards. |
| `domain` | Makes a substantive claim inside a technical or field domain. | Domain-knowledgeable reviewer. |
| `quantitative` | Adds metrics, rankings, model results, estimates, or statistical claims. | Reviewer who can inspect method and uncertainty. |
| `field` | Implies real-world action, program design, implementation, or policy use. | Field-reality reviewer or practitioner-informed reviewer. |
| `replication` | Claim is safety-sensitive, quantitative, or load-bearing. | Independent reviewer or reproduction artifact. |
| `maintainer` | Changes schemas, workflows, governance, generated indexes, or acceptance gates. | Maintainer. |

## Minimum routing note

For non-trivial PRs, add this note to the PR body or review comment:

```markdown
## Review routing

**Claim type:** docs | evidence | domain | quantitative | field | governance | generated artifact

**Suggested route:** general | evidence | domain | quantitative | field | replication | maintainer

**Why this route:** One sentence.

**Reviewer gap:** What expertise is missing if this is merged now?
```

## Escalation triggers

Escalate review when a PR:

- changes a claim's status;
- changes a metric, threshold, or ranking;
- introduces a new source that carries a load-bearing claim;
- touches generated canonical indexes;
- changes schemas or validation rules;
- turns desk evidence into operational advice;
- makes a claim where a false positive would waste money, time, trust, or field capacity.

## Reviewer guidance

A reviewer should be able to say either:

> I am the right reviewer for this route.

or:

> I can review structure, but this still needs domain, field, quantitative, replication, or maintainer review.

Partial review is useful when it is labeled. Unlabeled partial review is dangerous.

## Agent guidance

Agents should propose the review route before asking for review.

An agent should not mark work as ready simply because it passes validation. Validation checks structure. Review routing checks whether the right human or artifact has attacked the right risk.

## Acceptance test

Review routing is working when a contributor can look at a PR and know:

1. what kind of claim it changes;
2. which review route is required;
3. which reviewer gap remains;
4. whether merge would create an unsupported confidence upgrade.
