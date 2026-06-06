# Review Guide

Domain reviewers are the most valuable contributors to Open Problem Lab. This guide explains how to conduct a review, what to look for, and how to write a review record.

## What Reviewing Means Here

A review is not a judgment of the contributor. It is a judgment of whether the evidence and method are sufficient to justify the claim at the stated confidence level, in the context of the problem pack's safety requirements.

You may reject for:

- Weak or undated evidence
- Unclear method
- Hidden assumptions
- Missing failure modes
- Unsafe downstream use
- Unverifiable claims

You do not need to prove the claim false. The submitter must prove it reliable enough to merge.

## Review Types

| Type                     | When you are needed                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| `domain-reviewer`        | You have expertise in the problem area (epidemiology, climate science, water engineering, etc.) |
| `replicator`             | You independently rerun a quantitative artifact and confirm reproducibility                     |
| `red-team-reviewer`      | You adversarially stress-test claims and failure modes                                          |
| `field-reality-reviewer` | You have direct field experience with the decision context                                      |

A single PR may need multiple review types. The task's `reviewer_needed` field specifies which.

## Step-by-Step Review Process

### 1. Understand the Task

Read the task in `tasks.json` to understand:

- What outcome was expected
- What inputs were specified
- What the done condition is
- What safety risk level applies

### 2. Check Evidence Quality

For each evidence record in `evidence.json`:

- Can you access the URL?
- Does the source_date look accurate?
- Does the claim accurately represent what the source says?
- Are the limitations honest? (Too few limitations is usually a red flag, not a sign of quality)
- Is the evidence type correctly classified?

**Red flags in evidence:**

- Claims that exceed what the source can prove at the stated grain
- Source dates that are missing or implausible
- URLs that return errors or require unapproved access
- Limitations that are vague ("results may vary")
- Citing a secondary source (a report about a study) instead of the primary

### 3. Check the Method

For the submission's method field:

- Could you replicate the reasoning from the evidence to the claim?
- Is there a step where the submitter makes an inference the evidence does not support?
- Are the assumptions listed complete?

A method that says "reviewed the literature" without specifying which sections, what criteria, and what conclusions were drawn is not a reviewable method.

### 4. Check the Failure Modes

For each failure mode listed:

- Is it specific enough to be useful?
- Does it cover the most plausible misuse scenario?
- For high-risk submissions: has a red-team-reviewer signed off?

**Things to look for:**

- Grain mismatch: is the claim being made at a grain the evidence cannot support?
- Causal overreach: does the claim imply causation where the evidence shows only association?
- Operational overreach: does the output imply actionability it has not earned?

### 5. Check the Done Condition

Compare the submission to the task's done condition. Ask:

- Is the done condition met? (Binary: yes or no)
- If not, what specifically is missing?

### 6. Write the Review

Use the review issue template or the `review.schema.json` format:

```json
{
  "review_id": "task-id-review-N",
  "target_id": "task-id",
  "reviewer_role": "domain-reviewer",
  "verdict": "accepted | needs-changes | needs-replication | reject",
  "strengths": ["..."],
  "concerns": ["..."],
  "required_changes": ["..."],
  "replication_needed": true | false,
  "confidence": "high | medium | low"
}
```

**Verdict guide:**

- `accepted`: Evidence is sufficient, method is sound, failure modes are honest, done condition is met.
- `needs-changes`: Specific changes would make this acceptable. List them in `required_changes`.
- `needs-replication`: The claim is plausible but needs independent reproduction before acceptance.
- `reject`: The claim is unsupported, the method is invalid, or the output is unsafe to publish.

### 7. Post the Review

Post the review as a structured comment on the pull request. Use the `review.schema.json` format or the Review issue template.

If you are requesting replication, tag a replicator in your review comment.

## Common Review Mistakes

| Mistake                                                        | Why it matters                                                       |
| -------------------------------------------------------------- | -------------------------------------------------------------------- |
| Approving because the prose is well-written                    | Quality prose can hide weak evidence                                 |
| Requesting cosmetic changes instead of flagging the real issue | Cosmetic reviews waste everyone's time                               |
| Being vague in required_changes                                | "Improve the analysis" is not a reviewable change request            |
| Not reading the task done condition                            | The review is against the done condition, not your personal standard |
| Applying high-safety-risk standards to low-risk framing        | Mismatch in standards delays useful work                             |

## Replication Protocol

If your review verdict is `needs-replication`:

1. State specifically what artifact must be replicated and what the expected outcome is.
2. The replicator should follow the `reproducibility_steps` in the submission exactly.
3. The replicator should post a replication record: what they ran, what they got, and whether it matched.
4. If replication fails, the replicator should state exactly where the divergence occurred.

A replication that says "I tried it and it worked" without stating what exactly was run and what was confirmed is not a valid replication.

## Reviewer Reputation

Reputation is earned by:

- Accurate rejections that prevent false claims from becoming canonical
- Clear, specific, actionable reviews that submitters can act on
- Identifying failure modes the submitter missed

Reputation is not earned by:

- Volume of reviews
- Approving submissions quickly
- Never rejecting

The contribution ledger is git log and the merged PR history. There is no separate scoreboard.
