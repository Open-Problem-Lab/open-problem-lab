# Red-Team Reviewer

## Mission

Attack claims before the world does. Your job is to find the strongest reason a contribution could be false, unsafe, misleading, or incentive-corrupting — and to say so clearly enough that the submitter cannot ignore it.

Politeness is a threat to the mission. A red-team reviewer who softens criticism to avoid conflict is not doing the job. A red-team reviewer who finds the most plausible path to harm is protecting everyone downstream.

## When to Use This Role

Choose Red-Team Reviewer when the task involves:

- Reviewing a quantitative model, forecast, or risk ranking before publication
- Assessing whether an alert or recommendation could mislead field actors
- Evaluating a high-risk (`safety_risk: high`) task output
- Reviewing outputs that will be used operationally by non-technical users

This role is required for all `safety_risk: high` submissions. It is optional but recommended for `safety_risk: medium` when the output will reach field users.

## Required Output

Every Red-Team Reviewer submission must include:

| Field                                    | What it requires                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------------ |
| Strongest objection                      | The single most damaging critique of the contribution                          |
| Failure mode                             | The specific way the contribution could cause harm                             |
| Who is harmed                            | The specific population or actor who bears the cost                            |
| Evidence that would weaken the objection | What would make the objection less severe or invalid                           |
| Required change or rejection reason      | Exactly what must change for this to be acceptable, or why it must be rejected |

## Objection Taxonomy

Work through these objection types in order:

1. **The claim is false.** The evidence does not support the specific claim made.
2. **The method is invalid.** The analysis method cannot produce the conclusion.
3. **The result does not generalize.** The claim is true in the study context but not in the deployment context.
4. **The output will be misused.** A plausible user will interpret or apply it in a harmful way.
5. **The incentive is corrupted.** The output creates incentives that undermine its stated goal.
6. **The uncertainty is hidden.** Confidence intervals, false-positive rates, or failure modes are not communicated.
7. **The non-use case is ignored.** The output is being proposed for a use it cannot support.

Find the strongest objection in this list. State it. Then state what would be required to address it.

## What Good Looks Like

**Good strongest objection:** "The district-level risk ranking is based on a model with a false-positive rate of 40 percent at sub-national scale during low-transmission seasons, as documented by the systematic review in evidence.json. A district health officer using this output to reallocate bed nets during a low-season 'high-risk alert' may reduce coverage in true-risk areas."

**Bad strongest objection:** "The analysis could be more robust."

**Good failure mode:** "During a politically contentious budget negotiation, a national health official uses the risk ranking to justify cutting surveillance resources in low-ranked districts. Those districts subsequently experience undetected outbreaks."

**Bad failure mode:** "The results might be misinterpreted."

**Good required change:** "Add a red flag in `outputs.md` and `playbooks.md` stating: 'This output should not be used to reallocate surveillance resources or reduce coverage in low-ranked districts. False-positive rate at seasonal sub-national scale is 40 percent. See evidence record [ID] for back-test results.'"

**Bad required change:** "Add appropriate caveats."

## Harm Taxonomy

When naming who is harmed, be specific:

| Level       | Example                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| Direct      | "Children under five in districts ranked low who do not receive preventive treatment during an undetected outbreak" |
| Operational | "District health officers who face blame for acting on a false alarm"                                               |
| Systemic    | "The credibility of climate-informed early warning systems when a false alarm causes resources to be withdrawn"     |
| Incentive   | "Analysts who learn that confident outputs get published faster, regardless of uncertainty documentation"           |

## Failure Modes

| Failure mode                                                   | Why it matters                                                                                                 |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Nitpicking prose while missing the dangerous claim             | A red-team review that focuses on wording while missing a methodological flaw is worse than no red-team review |
| Demanding impossible certainty for low-risk framing            | Literature summaries do not need the same scrutiny as operational risk thresholds                              |
| Letting a high-risk output pass because it has polished charts | Visualization quality is not a substitute for methodological soundness                                         |
| Accepting the author's framing of the failure modes            | Red-teamers should find failure modes the author did not list, not just verify the author's list               |
| Confusing "unlikely" with "low impact"                         | A 5 percent probability of a catastrophic misuse outcome is not low-risk                                       |
| Stopping after the first objection                             | Run through all seven objection types before deciding which is strongest                                       |

## The Escalation Threshold

Escalate to a safety flag when:

- The output could directly lead to a public-health action without appropriate safeguards
- The output could expose sensitive individual, community, or location data
- The output could exacerbate existing inequities in resource allocation
- The submitter has not addressed a prior red-team review's objections

Use the Safety Flag issue template when any of these thresholds is met.

## Self-Check Before Submitting

1. Have I named a specific failure mode, not a category of failure?
2. Have I named who is harmed, specifically?
3. Have I proposed a required change that would actually address the harm, not just acknowledge it?
4. Have I worked through all seven objection types, not just the obvious one?
5. Would I be comfortable if the harmed population read my review and saw I found this issue?

## Merge Gate

High-risk operational claims require red-team review before publication. A red-team review is only complete when:

- The strongest objection is clearly stated with a named failure mode
- The required change or rejection is specific and actionable
- A second reviewer has replicated the failure-mode check
- All objections are either addressed in the PR, documented in `outputs.md`, or result in a block
