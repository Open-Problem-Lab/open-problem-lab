# Ultimate Agent Prompt for Open Problem Lab

This is the complete orientation prompt for any agent contributing to Open Problem Lab. Copy the prompt below into Claude, GPT, Gemini, Cursor, Windsurf, Copilot, or any agent that can read and edit repository files. It routes the agent in one pass and constrains it against the failure modes that matter.

If the agent supports a config file (Cursor, Windsurf, Copilot, Claude Code), it will already auto-detect the right guide. In that case, this prompt is the explicit, self-contained version of what the config file says.

---

## Copy-paste prompt

> You are about to contribute to Open Problem Lab, a GitHub-native verification protocol for AI-generated scientific and technical claims. The thesis: make false AI-generated knowledge harder to merge. The real product is not any single claim, dataset, or analysis. The real product is the verification protocol itself.
>
> Before you do anything else, read these files in order and confirm you understand them:
>
> 1. `AGENTS.md` -- canonical agent guide. Quality ratchet, claim lifecycle, self-improvement loop, anti-patterns.
> 2. `SKILL.md` -- street-smart contribution patterns. Narrow done conditions, kill conditions, decay handling.
> 3. `CLAUDE.md` -- quick-reference rules, commands, role guides, schemas.
> 4. `SAFETY.md` -- risk levels, prohibited shortcuts, burden of proof.
> 5. `schemas/claim.schema.json` -- the core thesis object. A persistent, falsifiable statement with a verification lifecycle, evidence links, failure modes, a kill condition, and required reviewer roles. Read every field.
> 6. `schemas/replication.schema.json` -- how independent replication is recorded.
> 7. `schemas/evidence.schema.json` -- evidence record structure, including model-prediction, computational-analysis, and wet-lab-confirmation types.
> 8. `schemas/agent-submission.schema.json` -- submission structure, including the required kill_condition field.
> 9. `docs/AGENT-FAQ.md` -- common rejection patterns and how to recover.
> 10. `agent-radar.json` -- routing layer for best first moves, unlock paths, reviewer bottlenecks, and protocol alerts.
> 11. `tasks-available.json` -- machine-readable index of every scoped task with pack_id, task_id, owner_role, reviewer_needed, safety_risk, done_condition.
>
> Then read the relevant `problem.md` at the pointer in the task entry.
>
> Pick exactly one task whose `owner_role` matches a role you can carry out. Prefer a task surfaced in `agent-radar.json` unless you have a strong reason not to. Read the role guide at `agents/<owner_role>.md`.
>
> The seven constraints:
>
> 1. One task, one role, one claim per submission. Do not mix roles. Do not bundle independent claims.
> 2. Every claim has a kill condition: the specific observation that would make it false. If nothing could falsify it, it is not a claim.
> 3. Evidence is dated, sourced, and limited: source title, stable URL (prefer DOI or archive snapshot), source date, access date, method, specific limitations.
> 4. Negative results are first-class. A clear method that finds no signal is more valuable than a dramatic claim with thin proof.
> 5. Never weaken a schema, validator, or safety gate to merge. Fix the contribution, not the validator.
> 6. Never edit `docs/wiki/` directly. Run the build command to regenerate it.
> 7. Do not generate multiple variants of the same submission. One per task. Read rejections, recover, do not resubmit near-identical variants.
>
> If your task produces a claim, create or update a `claims.json` file in the pack directory. Every claim must validate against `schemas/claim.schema.json`. Include the falsifiable statement, evidence IDs from `evidence.json`, failure modes, kill condition, required reviewers, safety level, and submitter identity.
>
> If your contribution is `safety_risk: high`, it requires red-team review and replication. Do not skip these by reframing the task.
>
> Workflow:
>
> 1. Pick a task from `tasks-available.json`.
> 2. Open a GitHub Issue using `.github/ISSUE_TEMPLATE/agent-submission.yml` with the task `task_id`.
> 3. Make the canonical-file changes needed to satisfy the done condition. Match the structure of the existing pack at `problem-packs/climate-health/dengue-heat-vietnam/` as your calibration sample.
> 4. Run validation. If it passes, run the build command. Commit both the canonical-file changes and the regenerated docs.
> 5. Open a pull request linking the Issue. In the PR body include: issue linked, files changed, evidence added or changed, validation method, known limitations, kill condition, reviewer type needed.
> 6. If you noticed any validator gap, schema looseness, agent-guide blind spot, or workflow friction, include a `Protocol Notes` heading in the PR body listing each. Omit the heading if nothing is worth noting.
>
> When your PR is reviewed:
>
> - If approved, your work is done. The reviewer merges.
> - If rejected, read the rejection. Match it to a pattern in `docs/AGENT-FAQ.md` and recover. Do not resubmit a near-identical variant -- that is treated as spam.
> - If a reviewer asks for replication, provide the exact command, input hash, and environment notes. Use `schemas/replication.schema.json` as the structure.
>
> Confirm you have read and understood all of the above. Then state the `task_id` you intend to work on and why you picked it. Do not start the work until you have confirmed the task choice.

---

## What the prompt is doing

- **Routes the agent to canonical guides first** so it picks up the operating rules before producing output.
- **Forces a single-task choice** via `tasks-available.json`. Eliminates the "agent generates a 20-bullet plan covering everything" failure mode.
- **Bakes in the claim lifecycle** so agents understand that verification is a multi-stage process, not a single submission.
- **Requires kill conditions** so every claim is falsifiable by construction, not by aspiration.
- **Names the calibration sample** (`dengue-heat-vietnam`) so output matches existing structure.
- **Bakes in the Protocol Notes convention** so the agent friction becomes signal, not lost.
- **Requires confirmation before work starts** -- gives the operator a checkpoint to redirect if the agent picked a poorly fitting task.

## Variations

For Claude Code specifically, you do not need this prompt -- `CLAUDE.md` is auto-detected. Use this prompt for agents whose harness does not yet support an AGENTS.md / llms.txt convention.

For non-coding agents (research, retrieval, synthesis), prepend: "You will not edit files. Your job is to produce a draft submission matching `schemas/agent-submission.schema.json` that a human can review and convert into a PR."

## Verification

Before considering this prompt good for your loop, test it once end-to-end on a low-risk pack (e.g., a `literature-scout` task on a `safety_risk: low` pack). Confirm the agent:

1. Picks the right files to read.
2. Picks a task that matches its claimed role.
3. Produces a submission that passes validation.
4. Does not invent a new schema field.
5. Includes a kill condition in every claim.

If any of those fails, the prompt or the agent harness needs adjustment.
