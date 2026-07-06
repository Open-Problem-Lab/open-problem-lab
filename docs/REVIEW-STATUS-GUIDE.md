# Review Status Guide

Open Problem Lab needs a clear vocabulary for claims after review. Merge is not the final state of knowledge. A claim can become narrower, disputed, replaced, or ready for field review as new evidence arrives.

This guide gives reviewers and agents a small set of status words to keep confidence visible.

## Status words

| Status | Meaning |
|---|---|
| `proposed` | Structured, but not accepted as repository knowledge. |
| `accepted` | Passed review for the scope stated in the artifact. |
| `bounded` | Useful only under a narrower scope than first proposed. |
| `disputed` | Serious unresolved counter-evidence or reviewer concern exists. |
| `superseded` | Replaced by a newer or stronger artifact. |
| `archived` | Preserved for history, but should not support new claims. |
| `field-pending` | Desk evidence exists, but operational validity is not established. |
| `replication-pending` | Initial evidence exists, but independent replication is still required. |

The labels are not prestige labels. They are routing labels. They tell the next contributor how much weight a claim can carry.

## When status should change

A status should change when a serious reviewer would use the claim differently.

Examples:

- `accepted` to `bounded`: the result survives only for a narrower population, geography, dataset, season, or method.
- `accepted` to `disputed`: a credible replication problem or field contradiction appears.
- `disputed` to `bounded`: the objection is real but limited to a known scope.
- `accepted` to `superseded`: a newer artifact is clearly stronger and should be the citation target.
- `field-pending` to `accepted`: operational review supports the claim inside its stated use case.

Do not change status for rhetorical disagreement. The trigger should be evidence, method, scope, or review substance.

## Minimum status-change note

Use this structure in the relevant PR, issue, or problem-pack note:

```markdown
## Review status change

**Artifact:** Link to claim, evidence record, or section.

**Previous status:** proposed | accepted | bounded | disputed | superseded | archived | field-pending | replication-pending

**New status:** proposed | accepted | bounded | disputed | superseded | archived | field-pending | replication-pending

**Reason:** One paragraph.

**Evidence or review event:** Link to PR, issue, source update, replication artifact, or reviewer comment.

**Practical effect:** What should future contributors do differently?

**Reversal condition:** What would justify changing the status again?
```

## Reviewer rule

A reviewer can approve a PR while requiring a weaker status.

That distinction matters. A contribution may be structured, sourced, and useful while still not strong enough to be treated as accepted operational knowledge.

Reviewers should prefer explicit status over vague concern when a claim is useful but over-scoped.

## Agent rule

Before using a claim as support, an agent should inspect its status.

- `accepted`: may be used inside the stated scope.
- `bounded`: must carry the boundary forward.
- `disputed`: may be discussed, but should not be used as a load-bearing premise.
- `superseded`: cite the newer artifact instead.
- `archived`: do not use as support except in historical context.
- `field-pending`: do not treat as deployment-ready.
- `replication-pending`: do not treat as independently established.

If an agent cannot determine status, it should say so rather than silently upgrading confidence.

## Acceptance test

A status guide is working when a new contributor can answer five questions quickly:

1. Can I rely on this claim?
2. Inside what boundary?
3. What is the strongest known objection?
4. What would change the repository's mind?
5. Which artifact should I cite now?

If the repository cannot answer those questions, it is accumulating content faster than trust.
