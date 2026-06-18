# Contributing

Contributions should make a neglected problem more tractable without weakening the verification standard. The burden of proof sits with the submitter. A negative result with a clear method is more valuable than a dramatic claim with thin proof.

## Before You Start

Read [VISION.md](VISION.md) to understand why verification is the product here, not output volume.

Browse [problem-packs/](problem-packs/) to find a problem that matches your expertise. Each pack contains a `task-map.md` and `tasks.json` with specific scoped work — these are your starting points.

The quickest way to find claimable work is the [agent-task issue board](https://github.com/Open-Problem-Lab/open-problem-lab/issues?q=is%3Aissue+is%3Aopen+label%3Atype%3Aagent-task). Comment on an issue to claim it (one contributor per task), then submit via the matching issue form or a PR. See [docs/AGENT-ISSUES.md](docs/AGENT-ISSUES.md).

## Contribution Types

| Type     | What it is                                             | Issue form      |
| -------- | ------------------------------------------------------ | --------------- |
| Problem  | A new neglected-problem candidate or pack change       | `type:problem`  |
| Task     | Atomic work unit with outcome and done condition       | `type:task`     |
| Evidence | Literature review, source assessment, agent submission | `type:evidence` |
| Dataset  | Dataset inventory, cleaning, provenance documentation  | `type:dataset`  |
| Model    | Quantitative model, signal, forecast, or back-test     | `type:model`    |
| Playbook | Field, reviewer, analyst, or operational guide         | `type:playbook` |
| Review   | Human, domain, red-team, or replication review         | `type:review`   |
| Safety   | Safety flag or high-risk misuse concern                | `type:safety`   |

## Human Workflow

1. **Start in Discussions** if the problem, metric, or scope is still vague. Discussions become Issues only when they have a scoped outcome and done condition.
2. **Open an Issue** only when the work has an outcome, a validation method, and a done condition.
3. **Do the work** — literature search, data cleaning, model back-test, or field review.
4. **Submit a pull request** with the canonical files changed (evidence.json, task-map.md, datasets.md, outputs.md, etc.).
5. **Include in the PR**: evidence cited with dates and methods, assumptions stated, limitations documented, failure modes enumerated.
6. **Wait for review.** Domain reviewers may require replication for quantitative or safety-sensitive claims.

## Agent Workflow

See [AGENTS.md](AGENTS.md) for the complete agent guide.

Short version:

1. Read the scoped issue and the relevant problem pack.
2. Post one structured agent submission using the [Agent Submission template](.github/ISSUE_TEMPLATE/agent-submission.yml).
3. Open a pull request if the submission changes canonical files.
4. Keep submissions lean and auditable — one claim, one method, one evidence chain.
5. Do not create follow-up issues unless the issue explicitly requests a suggested next issue.

## Local Verification

Run these before opening a pull request:

```bash
pnpm install
pnpm build        # regenerates docs/wiki/ from problem-packs/ and agents/
pnpm validate     # checks schemas, issue forms, Markdown, links, wiki freshness
```

For evidence-heavy or model submissions also run:

```bash
pnpm reproducibility:check   # verifies reproducibility for changed task maps
pnpm verify:sources          # live URL check for evidence records
```

Validation must pass before review. If validation fails, fix the evidence or structure — never weaken the validator.

## Pull Request Standard

Every pull request must state:

- **Issue linked**: which scoped issue this addresses.
- **Files changed**: what canonical files were added or modified.
- **Evidence added or changed**: citations, dates, methods.
- **Validation method**: how the claim can be checked.
- **Known limitations**: what the contribution does not prove.
- **Reviewer type needed**: domain, safety, replication, or general.

Use the [pull request template](.github/pull_request_template.md).

## Review Rights and Responsibilities

Reviewers may reject a contribution for:

- Weak or undated evidence
- Unclear method
- Hidden assumptions
- Missing failure modes
- Unsafe downstream use
- Unverifiable claims

Reviewers do not need to prove the claim false. The submitter must prove it reliable enough to merge.

Reviewers earn reputation through accurate rejections, reproducible approvals, and clear limitation-setting — not through volume.

## Safety

Before submitting anything involving public-health actions, field deployment, resource allocation, or forecasts used operationally, read [SAFETY.md](SAFETY.md). High-risk contributions require domain review, red-team review, and independent replication. This is not a burden — it is the reason the accepted results are worth using.

## Style

Write plainly. Mark uncertainty explicitly. Prefer a negative result with a clear method over a dramatic claim with thin proof. Do not use weasel words to soften a result that should be stated as negative.

## Proposing a New Problem Pack

Open a Discussion with:

- The problem statement (what is unknown or unverified)
- Why it is neglected (what is missing and why)
- The measurable outcome (what verified knowledge would look like)
- The available evidence base (what data and literature exist)
- The safety level (low, medium, or high — see SAFETY.md)

A Discussion becomes an Issue when the problem is scoped. An Issue becomes a problem pack through a pull request.
