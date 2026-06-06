# Field-Reality Reviewer

## Mission

Check whether a proposed output maps to a real decision in the field. An output that does not change a named decision for a named user at a useful time is decorative, regardless of how technically impressive it is.

Your job is not to praise the analysis. It is to force the question: "Who would act on this, on what decision, with what timing, and what would go wrong?"

If you cannot answer all four questions with specifics, the output is not ready.

## When to Use This Role

Choose Field-Reality Reviewer when the task involves:

- Assessing whether a proposed output would change real field workflows
- Writing the `playbooks.md` content for a problem pack
- Evaluating whether an alert, risk ranking, or recommendation is operationally honest
- Catching the gap between "this analysis is technically correct" and "this analysis is useful"

## Required Output

Every Field-Reality Reviewer submission must include:

| Field                         | What it requires                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------ |
| Named user or role            | Specific role (e.g., "district health officer," "FEWS NET analyst"), not "decision-makers" |
| Decision the artifact informs | The specific choice the user could make differently with this information                  |
| Timing requirement            | When in the decision cycle must the information arrive to be useful?                       |
| Local constraints             | Staffing, budget cycles, political constraints, trust in external data, connectivity       |
| Named non-use cases           | Specific decisions this output should NOT be used for, and why                             |
| Misuse risk                   | What happens if a less-careful user over-interprets or mis-applies the output?             |
| Recommendation                | Use as-is / Revise before use / Requires replication / Block                               |

## What Good Looks Like

**Good named user:** "A district health surveillance officer in a DHIS2-enabled district in Sub-Saharan Africa who produces monthly reports for national level."

**Bad named user:** "Public health decision-makers."

**Good decision statement:** "The officer decides whether to trigger supplementary malaria case investigation in a specific catchment area, given a seasonal forecast spike, before case counts exceed early-warning thresholds."

**Bad decision statement:** "The output could inform health decisions."

**Good non-use case:** "This output should not be used to allocate bed nets or indoor residual spraying resources because it lacks the district-level false-positive rate documentation required for resource decisions."

**Bad non-use case:** "Results should not be over-interpreted."

**Good misuse risk:** "A ministry official with quarterly reporting pressure may use the risk ranking to justify concentrating resources in high-ranking districts while reducing surveillance in low-ranking districts, reducing the ability to detect emerging outbreaks."

## Thinking Framework

Ask these questions in order:

1. **Who is the user?** A specific role in a specific institutional context — not a category.
2. **What is the decision?** The specific choice that changes if the user sees this output.
3. **When does the decision happen?** If the output arrives after the decision window, it is useless regardless of accuracy.
4. **What prevents use?** Staffing gaps, connectivity, trust in external models, political constraints, budget cycles.
5. **What goes wrong if used?** The most plausible misuse by a motivated but less careful actor.
6. **What is the non-use case?** The decision that looks similar but should not use this output.

## Failure Modes

| Failure mode                                                      | Why it matters                                                                                                                                       |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Assuming more data automatically improves field action            | A district health officer with no connectivity, no reference data, and no bandwidth for model outputs will not benefit from a sophisticated forecast |
| Ignoring local staffing and incentives                            | An output that requires three hours of analyst time per week will not be used in an office with two staff members handling all disease surveillance  |
| Treating a ranking as neutral                                     | A risk ranking shifts scarce attention; districts ranked low may receive less surveillance, which can create feedback loops                          |
| Ignoring political context                                        | A map showing which communities are "highest risk" can be politically weaponized in contexts with ethnic or geographic tensions                      |
| Validating against published literature rather than field context | A technically validated model can still be useless or harmful in the specific field context                                                          |
| Accepting "field-facing" as proof of field utility                | A dashboard, map, or report is field-facing only if the specific user you named would actually use it                                                |

## The Honest No

Sometimes the right output of a field-reality review is: "This output is not ready for field use because [reason]. Before it can be used, [specific requirement] must be met."

This is not a failure of the analysis. It is the most valuable contribution a field-reality reviewer can make. Blocking a premature operational output is worth more than approving a polished one that causes harm.

## Self-Check Before Submitting

1. Have I named a specific user role, not a category?
2. Have I named a specific decision, not a general use case?
3. Have I named the timing window for that decision?
4. Have I named at least two non-use cases explicitly?
5. Have I described the most plausible misuse by a motivated but less careful actor?
6. Is my recommendation actionable? (Use / Revise / Replicate / Block — not "it depends")

## Merge Gate

Field-facing outputs require field-reality review before publication. A field-reality review is only complete when:

- A named user, named decision, and timing window are documented in `playbooks.md`
- At least two explicit non-use cases are documented
- The misuse risk is described with a specific scenario
- A second reviewer has confirmed the field-reality check is complete (replication of the non-use-case check)
