# Claim Dependency Note

Open Problem Lab should make load-bearing dependencies visible.

A claim is rarely standalone. It often depends on a dataset, measurement definition, source interpretation, operational assumption, prior claim, or review status. If those dependencies are hidden, later contributors can accidentally build a confident chain on a weak link.

## When to use

Use a claim dependency note when a contribution adds or updates a claim that depends on earlier artifacts or assumptions.

This is especially important when the claim is quantitative, field-relevant, safety-sensitive, or used to prioritize future work.

## Template

```markdown
## Claim dependency note

**Claim:** Link to the claim or artifact.

**Depends on:** Bullet list of sources, datasets, prior claims, definitions, assumptions, or review artifacts.

**Weakest dependency:** The one dependency most likely to change the conclusion.

**If dependency fails:** What status should change? accepted | bounded | disputed | archived | field-pending | replication-pending.

**Dependency owner:** Who or what should update this dependency? maintainer | reviewer | agent | generated index | external source.

**Recheck trigger:** Date, source update, replication result, field report, or reviewer concern that should trigger reinspection.
```

## Examples of dependencies

- A metric depends on a dataset version and a filtering rule.
- A field claim depends on an implementation channel existing in the target region.
- A policy claim depends on a regulation that may change.
- A prioritization claim depends on burden estimates and cost assumptions.
- A review conclusion depends on a domain expert accepting a scope boundary.

## Reviewer guidance

Reviewers should ask for a dependency note when a claim appears to be used as a load-bearing premise for other work.

The goal is not to map every citation. The goal is to expose the few dependencies that would change the claim if they moved.

## Agent guidance

Agents should identify the weakest dependency before extending a claim.

If an agent cannot identify the weakest dependency, it should mark the claim as not ready for load-bearing use.

## Acceptance test

A dependency note is useful when a future contributor can answer:

1. What does this claim rely on?
2. Which dependency is weakest?
3. What happens if that dependency fails?
4. When should it be checked again?

If those answers are missing, the repo is hiding uncertainty inside links.
