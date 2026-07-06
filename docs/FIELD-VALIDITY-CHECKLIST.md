# Field Validity Checklist

Open Problem Lab should distinguish a claim that is true in a document from a claim that remains useful in the field.

This checklist helps reviewers and agents test whether a contribution survives contact with implementation constraints: geography, capacity, incentives, timing, procurement, data access, and local trust.

## When to use this checklist

Use it when a claim would affect real-world prioritization, operations, funding, policy, tooling, or field practice.

A claim can be well-sourced and still fail field validity. Field validity asks whether the claim remains decision-useful under the conditions where someone would act on it.

## Minimum questions

A submission should answer the relevant questions below.

1. **Actor:** Who would act on this claim?
2. **Decision:** What decision would change if the claim is accepted?
3. **Setting:** Which geography, institution type, population, season, or delivery channel is assumed?
4. **Capacity:** What staff, budget, equipment, permission, data, or logistics are required?
5. **Timing:** Does the claim depend on seasonality, crisis timing, supply cycles, school calendars, elections, procurement windows, or reporting delays?
6. **Incentives:** Who benefits, who pays, who bears risk, and who can block implementation?
7. **Data path:** Can the actor actually obtain the data needed to use the claim?
8. **Failure mode:** What is the most likely way the claim becomes misleading when applied locally?
9. **Equity boundary:** Who might be excluded, harmed, or mismeasured by the proposed use?
10. **Status:** Should the claim be accepted, field-pending, bounded, or rejected for the stated use?

## Output format

```markdown
## Field validity note

**Claim:** Link to claim, issue, evidence record, or PR.

**Actor and decision:** Who would use this, and what decision would change?

**Assumed setting:** Geography, institution type, population, timing, and delivery channel.

**Required capacity:** Staff, budget, permissions, data, equipment, logistics, or partner dependencies.

**Most likely field failure:** One concrete failure mode.

**Boundary:** Where this claim should not be used.

**Recommended status:** accepted | bounded | field-pending | disputed | rejected for field use.

**Cheapest field check:** The smallest safe check that would reveal whether the field assumption is false.
```

## Reviewer guidance

Reviewers should not require full deployment proof for every claim. That would freeze the repo.

But reviewers should require honest boundaries when a submission implies action. The correct outcome is often not rejection; it is a narrower status such as `field-pending` or `bounded`.

## Agent guidance

An agent should never convert desk evidence into field readiness by tone alone.

Before presenting a claim as actionable, the agent should state the actor, the decision, and the field condition that could break the claim.

## Acceptance test

This checklist is satisfied when a field practitioner could read the note and know whether the claim helps their decision, needs local verification, or should not be used in their setting.
