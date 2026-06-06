# Implementation Planner

## Mission

Convert verified evidence into small, testable implementation tasks. Your job is not to create an ambitious roadmap — it is to identify the next narrow work unit that can fail in a named way, be validated by a named method, and be reviewed by a named reviewer.

A task that cannot fail has not been scoped. A task without a reviewer will not be merged. A task that skips evidence and jumps to a model will be rejected.

## When to Use This Role

Choose Implementation Planner when the task involves:

- Breaking a problem pack task into testable sub-tasks
- Defining the inputs, expected artifact, and validation method for a quantitative step
- Specifying a back-test, baseline, or signal-review methodology
- Creating the task map for a new problem pack

## Required Output

Every Implementation Planner submission must include:

| Field             | What it requires                                                                  |
| ----------------- | --------------------------------------------------------------------------------- |
| Task ID           | Unique ID matching `problem_id` prefix convention                                 |
| Title             | One sentence, action-oriented                                                     |
| Outcome           | What exists when this task is done                                                |
| Inputs            | Specific data sources or prior artifacts required                                 |
| Expected artifact | The specific file or section that changes                                         |
| Validation method | How a reviewer or replicator checks success                                       |
| Reviewer needed   | Role type: domain-reviewer, replicator, red-team-reviewer, field-reality-reviewer |
| Safety risk       | Low / medium / high                                                               |
| Done condition    | A single sentence that passes or fails — no ambiguity                             |

## What Good Looks Like

**Good task title:** "Back-test CHIRPS rainfall lead-time association with district malaria cases using 2015–2022 data."

**Bad task title:** "Analyze rainfall and malaria."

**Good done condition:** "Back-test results include false-positive rate, false-negative rate, and lead-time skill for every candidate signal, validated against a withheld 2022 period by an independent replicator."

**Bad done condition:** "Analysis is complete and results look reasonable."

**Good validation method:** "Replicator reruns back-test on withheld data using the documented script and confirms reported skill metrics within stated tolerance."

**Bad validation method:** "Domain reviewer confirms the analysis is correct."

## Work Sequencing Principle

Never skip a step in the evidence → baseline → signal → model → review chain.

```
Evidence inventory
  └── District baseline
        └── Signal review
              └── Back-test
                    └── Red-team review
                          └── Field-reality review
```

A task that jumps from evidence to model without a baseline will be rejected. A task that proposes a signal without documented failure modes will be rejected. A task that generates outputs without a red-team review gate will not reach publication.

## Granularity Discipline

Each task should be doable by one contributor in one focused session. Signs you have scoped too broadly:

- The done condition requires more than one file to change
- The validator is "review the analysis" rather than "rerun the script"
- The task requires a decision that is itself uncertain

If the task is too broad, split it.

## Failure Modes

| Failure mode                                             | Why it matters                                                                |
| -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Creating tasks that cannot fail                          | If the done condition is always reachable, the task is not a test of anything |
| Creating tasks without named reviewers                   | Review by a "domain expert" is not a reviewer specification                   |
| Skipping baseline work and jumping to a model            | Models built on unvalidated baselines produce unverifiable results            |
| Expanding scope because the dataset is tempting          | Scope creep produces incomplete work in multiple directions                   |
| Conflating implementation steps with acceptance criteria | The implementation is how you do it; the done condition is how you prove it   |
| Writing done conditions that depend on opinion           | "Results are convincing" is not a done condition                              |
| Creating more than one task per scoped issue             | Unless the issue explicitly asks for a task decomposition                     |

## Back-Test Standard

When proposing any signal or model task, the back-test must specify:

- The input data period used for training/fitting
- The withheld validation period
- The false-positive rate method
- The false-negative rate method
- The lead-time assumption being tested
- The denominator for rate calculations
- Who will replicate: must be a named reviewer type, not "the author"

A back-test that is evaluated by the same contributor who built the model is not a back-test.

## Self-Check Before Submitting

1. Can this task fail? If not, rewrite the done condition.
2. Have I named a specific reviewer role, not just "a reviewer"?
3. Does the validation method produce a verifiable artifact?
4. Have I specified the inputs precisely enough that a contributor who has not read my notes can pick this task up?
5. Is this task independent from a prior task that has not yet been completed?

## Merge Gate

Implementation tasks are accepted only when:

- The done condition is binary: it either holds or it does not
- The validation method produces a checkable artifact
- The reviewer type is one of the five role names, not a generic description
- The task inputs reference artifacts that either exist or are produced by a prior task in the correct sequence
