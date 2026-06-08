# Agent Bootstrap Prompt

This file is for the human (or scheduler) operating an AI agent. Copy the prompt below verbatim into Claude, GPT, Gemini, or any other coding agent that can read repository files. The prompt orients the agent in one pass and routes it to the canonical guides.

If the agent supports a config file (Cursor, Windsurf, Copilot, Claude Code), it will already auto-detect the right guide. In that case, this prompt is the explicit version of what the config file says.

---

## Copy-paste prompt

> You are about to contribute to Open Problem Lab, a GitHub-native verification protocol for AI contributions to neglected global problems. Before you do anything else, read these files in order and confirm you understand them:
>
> 1. `AGENTS.md` — canonical agent guide. Quality ratchet, self-improvement loop, anti-patterns.
> 2. `SKILL.md` — street-smart contribution patterns. Narrow done conditions, kill conditions, decay handling.
> 3. `CLAUDE.md` — quick-reference rules, commands, role guides, schemas.
> 4. `SAFETY.md` — risk levels, prohibited shortcuts, burden of proof.
> 5. `docs/AGENT-FAQ.md` — common rejection patterns and how to recover.
> 6. `agent-radar.json` — routing layer for best first moves, unlock paths, reviewer bottlenecks, and protocol alerts.
>
> Then open `agent-radar.json` first, followed by `tasks-available.json`. `agent-radar.json` tells you which scoped tasks have the best leverage and which packs unlock the deepest follow-on queue. `tasks-available.json` is the exact machine-readable index of every task with status `scoped`. Each entry has: `pack_id`, `task_id`, `owner_role`, `reviewer_needed`, `safety_risk`, `outcome`, `expected_artifact`, `done_condition`, and pointers to the source files.
>
> Pick exactly one task whose `owner_role` matches a role you can carry out. Prefer a task surfaced in `agent-radar.json` unless you have a strong reason not to. Read the role guide at `agents/<owner_role>.md`. Then read the relevant `problem.md` at the pointer in the task entry.
>
> Constraints you must respect:
>
> - One task, one role, one claim per submission. Do not mix roles. Do not bundle independent claims.
> - Every claim must have: dated source with stable URL (prefer DOI or archive snapshot), method, named limitations, kill condition.
> - Run `pnpm install` once, then `pnpm validate` before opening any PR. If it fails, fix the contribution, not the validator.
> - Never edit `docs/wiki/` directly — run `pnpm build`.
> - Never weaken a schema, validator, or safety gate to merge a contribution.
> - If your contribution is `safety_risk: high`, it requires red-team review and replication. Do not skip these by reframing the task.
>
> Workflow:
>
> 1. Pick a task from `tasks-available.json`.
> 2. Open a GitHub Issue using `.github/ISSUE_TEMPLATE/agent-submission.yml` with the task's `task_id`.
> 3. Make the canonical-file changes needed to satisfy the done condition. Match the structure of the existing pack at `problem-packs/climate-health/dengue-heat-vietnam/` as your calibration sample.
> 4. Run `pnpm validate`. If it passes, run `pnpm build`. Commit both the canonical-file changes and the regenerated `docs/wiki/` and `tasks-available.json`.
> 5. Open a pull request linking the Issue. In the PR body, include: issue linked, files changed, evidence added or changed, validation method, known limitations, reviewer type needed.
> 6. If you noticed any validator gap, schema looseness, agent-guide blind spot, or workflow friction during the task, include a `Protocol Notes` heading in the PR body listing each. Omit the heading if nothing is worth noting — do not pad.
>
> When your PR is reviewed:
>
> - If approved, your work is done. The reviewer merges.
> - If rejected, read the rejection. Match it to a pattern in `docs/AGENT-FAQ.md` and recover. Do not resubmit a near-identical variant of the same idea — that is treated as spam.
> - If a reviewer asks for replication, provide the exact command, input hash, and environment notes needed to rerun your work.
>
> Confirm you have read and understood all of the above. Then state the `task_id` you intend to work on and why you picked it. Do not start the work until you have confirmed the task choice.

---

## What the prompt is doing

- **Routes the agent to canonical guides first** so it picks up the operating rules before producing output.
- **Forces a single-task choice** via `tasks-available.json`. Eliminates the "agent generates a 20-bullet plan covering everything" failure mode.
- **Names the calibration sample** (`dengue-heat-vietnam`) so output matches existing structure.
- **Bakes in the Protocol Notes convention** so the agent's friction becomes signal, not lost.
- **Requires confirmation before work starts** — gives the operator a checkpoint to redirect if the agent picked a poorly fitting task.

## Variations

For Claude Code specifically, you do not need this prompt — `CLAUDE.md` is auto-detected. Use this prompt for agents whose harness does not yet support an AGENTS.md / llms.txt convention.

For non-coding agents (research, retrieval, synthesis), prepend: "You will not edit files. Your job is to produce a draft submission matching `schemas/agent-submission.schema.json` that a human can review and convert into a PR."

## Verification

Before considering this prompt good for your loop, test it once end-to-end on a low-risk pack (e.g., a `literature-scout` task on a `safety_risk: low` pack). Confirm the agent:

1. Picks the right files to read.
2. Picks a task that matches its claimed role.
3. Produces a submission that passes `pnpm validate`.
4. Does not invent a new schema field.

If any of those fails, the prompt or the agent harness needs adjustment.
