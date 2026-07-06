# Counter-Evidence Ledger

Open Problem Lab should not only preserve accepted evidence. It should preserve the strongest evidence that a claim might be wrong.

This document defines a lightweight ledger for counter-evidence: failed replications, null results, contradictory field reports, weak external validity, dataset caveats, and reviewer objections that remain unresolved.

The purpose is not to make every contribution slower. The purpose is to prevent the protocol from becoming a one-way ratchet where attractive claims accumulate faster than disconfirming evidence.

## Why this matters

Most knowledge repositories fail by selection bias, not by lack of content.

A problem pack can look stronger over time simply because accepted claims are visible while rejected, failed, or inconvenient evidence disappears into closed issues. For global-problem work, that is dangerous. A district health officer, researcher, funder, or agent should be able to see not only what the repo currently believes, but also what could overturn it.

The ledger makes disconfirmation first-class.

## What belongs in the ledger

Add an entry when evidence materially weakens, bounds, or threatens a claim already present in a problem pack.

Examples:

- A replication attempt fails under a plausible variant of the original method.
- A field report contradicts a desk-research assumption.
- A dataset is discovered to have leakage, survivorship bias, stale coverage, or unclear provenance.
- A reported effect appears to depend on a narrow geography, season, population, implementation partner, or measurement choice.
- A reviewer identifies a failure mode that is not resolved by the PR.
- A source previously treated as strong becomes outdated, retracted, superseded, or materially disputed.
- A negative result prevents wasted work, even if it does not prove the opposite claim.

Do not add entries for generic skepticism. The ledger is for specific evidence or a specific review objection with a plausible path to changing the claim.

## Entry format

Use this structure in the relevant problem pack or in a dedicated `counter-evidence.md` file when the pack becomes large.

```markdown
## CE-YYYY-NNN — Short falsifier name

**Claim affected:** Link to the claim, evidence record, task, or PR.

**Counter-evidence type:** failed replication | null result | external-validity limit | dataset flaw | field contradiction | reviewer objection | source status change

**What changed:** One paragraph stating the concrete threat to the claim.

**Evidence:** Source links, issue links, PR links, dated reviewer comments, or replication artifacts.

**Scope:** What this counter-evidence does and does not refute.

**Current status:** unresolved | bounded | resolved | accepted as limitation | claim withdrawn

**Next disconfirming test:** The cheapest concrete check that would decide whether this matters.
```

## Status semantics

| Status | Meaning |
|---|---|
| `unresolved` | The counter-evidence is plausible and still threatens the claim. |
| `bounded` | The original claim may survive, but only within a narrower scope. |
| `resolved` | Follow-up evidence addressed the objection without narrowing the claim. |
| `accepted as limitation` | The claim remains useful, but the limitation must travel with it. |
| `claim withdrawn` | The claim should no longer be treated as accepted knowledge. |

## Reviewer rule

A reviewer may request a counter-evidence entry even when approving a PR.

Approval means the artifact is worth merging under stated limits. It does not mean all serious objections vanished. Capturing the unresolved objection is often more valuable than blocking the contribution until perfect certainty, because the next contributor can attack the exact weak point.

## Agent rule

When an agent works on a problem pack, it should inspect the counter-evidence ledger before proposing new claims.

The agent should answer:

1. Does my proposed claim ignore an unresolved objection?
2. Does my evidence narrow or resolve an existing ledger entry?
3. Does my method introduce a new external-validity limit that should be logged?
4. What is the cheapest disconfirming test for my own claim?

If the answer to any of these changes the claim boundary, the PR should update the ledger.

## Anti-patterns

Do not use the ledger as:

- a debate dump;
- a place for vague doubt;
- a way to block work without evidence;
- a reputation score for contributors;
- a graveyard for every rejected issue.

A useful entry is concrete enough that another contributor can test, bound, or retire it.

## Acceptance test

A ledger entry is good when a hostile reviewer can read it and say:

> This is the best known reason the claim might fail, and here is the next test that would change our mind.

That is the standard. Anything weaker belongs in an issue comment, not in the ledger.
