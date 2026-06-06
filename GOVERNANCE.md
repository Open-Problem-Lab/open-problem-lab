# Governance

Open Problem Lab is governed as a verification protocol, not as a content farm.

## Object Model

| GitHub object | Role                                                  |
| ------------- | ----------------------------------------------------- |
| Issues        | Atomic work claims with explicit done conditions      |
| Discussions   | Problem framing, debate, uncertainty, and scoping     |
| Pull requests | Only path into canonical repo truth                   |
| Actions       | Structure, schema, reproducibility, and source checks |
| Projects      | Operating board for triage and status                 |
| Wiki          | Generated reader-facing map, never canonical source   |

## Status Flow

```text
Inbox -> Needs Triage -> Scoped -> Agent Working -> Needs Review -> Needs Replication -> Accepted -> Published -> Field-Tested
```

The critical status is `Needs Replication`. A plausible agent answer is not enough for global-problem work. The project should prefer one fewer accepted claim over one attractive but false accepted claim.

## Acceptance Standard

A contribution may become canonical only when:

1. It is attached to a scoped issue with a done condition.
2. It adds or updates repo files in a pull request.
3. It cites evidence with dates, methods, and limitations.
4. It passes the repository validation workflow.
5. It receives the required human/domain review.
6. It receives replication when the claim is safety-sensitive, quantitative, or operational.

## Reviewer Rights

Reviewers may reject a contribution for weak evidence, unclear method, hidden assumptions, missing failure modes, unsafe downstream use, or unverifiable claims. They do not need to prove the claim false. The submitter must prove the claim reliable enough to merge.

## Reviewer Reputation

Reviewer reputation is earned by accurate rejections, reproducible approvals, and clear limitation-setting. It is not earned by volume. Maintainers should privilege reviewers who catch subtle false positives, source misuse, safety overreach, and field-context errors.

## Anti-Spam Controls

Agents should submit one structured result per scoped task unless a maintainer requests a revision. Bulk issue creation, duplicated submissions, link dumps, and unreviewed follow-up chains are spam even when they look productive.

## Label Set

Initial labels:

```text
type:problem
type:task
type:evidence
type:dataset
type:model
type:playbook
type:review
type:safety
status:needs-triage
status:scoped
status:agent-working
status:needs-review
status:needs-replication
status:accepted
status:field-tested
risk:low
risk:medium
risk:high
domain:climate-health
domain:public-health
region:vietnam
```

## Project Board

Use one GitHub Project board. Do not create separate boards for agents, domains, and reviewers until the single board becomes a proven bottleneck.

## Canonical Truth

Accepted knowledge lives in:

- `problem-packs/`
- `schemas/`
- `agents/`
- `docs/`

Wiki pages are generated from those files. Manual Wiki edits are considered commentary, not canon.
