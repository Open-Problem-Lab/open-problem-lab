# Cheapest Disconfirming Test

Every serious claim in Open Problem Lab should identify the cheapest test that could make the repository lower confidence in it.

This is not a demand for perfect certainty. It is a demand for an explicit reversal path.

## Why this matters

AI-assisted research makes it easy to produce plausible claims and expensive-looking evidence packages. The harder question is usually missing:

> What would change our mind?

Without that question, the protocol can drift into verification theater: sources are cited, schemas pass, prose sounds careful, but no one knows the smallest observation that would weaken the claim.

A claim that cannot name its cheapest disconfirming test is usually not ready to become load-bearing repository knowledge.

## Definition

A cheapest disconfirming test is the lowest-cost safe check that would materially reduce confidence in a claim if it failed.

It should be:

- **specific** — tied to one claim, not a vague research agenda;
- **safe** — does not require unsafe action or misuse;
- **cheap** — uses the smallest credible check before larger work;
- **decision-relevant** — failure would change status, scope, priority, or confidence;
- **auditable** — another contributor can see what was tested and why it matters.

Cheap does not mean weak. It means the project should try to falsify claims efficiently before spending reviewer attention, compute, field access, or money.

## Minimum field

Add this field to issue descriptions, PR bodies, evidence records, or review notes when a claim is intended to become canonical:

```markdown
**Cheapest disconfirming test:**
If [specific check] shows [specific failure condition], then this claim should be [narrowed / disputed / rejected / moved to exploratory / sent for replication].
```

Examples of acceptable shapes:

- If the same method fails on a second dated source set, the claim should be marked disputed.
- If the effect disappears after excluding a known biased dataset, the claim should be narrowed to the original dataset only.
- If a field reviewer identifies a routine operational constraint that blocks implementation, the claim should become field-pending rather than accepted.
- If a reproduction run cannot recover the reported metric within the declared tolerance, the artifact should become replication-pending.

## Bad patterns

Bad tests are vague, heroic, or unfalsifiable.

Avoid:

- "More research is needed."
- "An expert should review this someday."
- "If the whole literature changes, update it."
- "If someone proves it wrong."
- "Run a large trial" when a source check, data audit, or small reproduction would test the load-bearing assumption first.

The point is to name the first useful crack, not the final definitive study.

## Reviewer rule

A reviewer may ask for a cheapest disconfirming test before accepting a claim as canonical.

The reviewer should especially ask for it when:

- the claim is safety-sensitive;
- the claim is quantitative;
- the claim affects prioritization;
- the claim is based on indirect evidence;
- the claim depends on a narrow dataset, geography, population, or operational assumption;
- an agent-generated submission sounds more confident than its evidence.

## Agent rule

Before opening a PR, an agent should identify the load-bearing assumption in its own claim and propose the cheapest safe way to attack it.

The agent should write:

1. The claim I want accepted is ...
2. The load-bearing assumption is ...
3. The cheapest disconfirming test is ...
4. If that test fails, the claim should become ...

If the agent cannot complete those lines, it should not present the claim as accepted knowledge.

## Relationship to counter-evidence

The disconfirming test is forward-looking: it says what would lower confidence next.

The counter-evidence ledger is backward-looking: it records what has already weakened, bounded, or disputed a claim.

Together, they prevent the repo from accumulating claims with no memory and no reversal path.

## Acceptance test

A cheapest disconfirming test is good when a skeptical reviewer can say:

> This is the first safe thing I would check if I wanted to prove the claim too broad, too weak, or not yet ready.

If the test would not change anything, it is not a disconfirming test. It is decoration.
