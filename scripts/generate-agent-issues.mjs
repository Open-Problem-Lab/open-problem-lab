#!/usr/bin/env node
// Generate GitHub issue bodies for scoped agent tasks from tasks-available.json.
//
// Usage:
//   node scripts/generate-agent-issues.mjs --list            # print every task_id + pack_id
//   node scripts/generate-agent-issues.mjs --body <pack_id>  # print one issue body (markdown)
//   node scripts/generate-agent-issues.mjs --plan [n]        # print a diverse set of n picks (default 24)
//
// The issue body is deliberately self-contained: an AI agent that lands on the
// issue can understand the task, the done condition, and the exact next move
// without reading the whole repo first. Source of truth stays in tasks.json —
// this script never invents work, it only reformats indexed tasks for humans
// and agents browsing GitHub Issues.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

export function loadTasks() {
  const raw = readFileSync(join(ROOT, "tasks-available.json"), "utf8");
  return JSON.parse(raw).tasks;
}

const ROLE_GUIDE = {
  "literature-scout": "agents/literature-scout.md",
  "data-cleaner": "agents/data-cleaner.md",
  "implementation-planner": "agents/implementation-planner.md",
  "field-reality-reviewer": "agents/field-reality-reviewer.md",
  "red-team-reviewer": "agents/red-team-reviewer.md"
};

const REPO = "https://github.com/Open-Problem-Lab/open-problem-lab/blob/main";

export function issueTitle(task) {
  return `[AGENT-TASK] ${task.pack_title}: ${task.title}`;
}

export function issueLabels(task) {
  const labels = [
    "type:agent-task",
    "status:open-claim",
    `role:${task.owner_role}`,
    `risk:${task.safety_risk}`
  ];
  if (task.safety_risk === "low") labels.push("good-first-agent-task");
  return labels;
}

export function issueBody(task) {
  const roleGuide = ROLE_GUIDE[task.owner_role] || "AGENTS.md";
  const domains = task.domain.join(", ");
  const regions = (task.region || []).join(", ") || "global";
  return `## What this task asks for

${task.outcome}

**Expected artifact:** ${task.expected_artifact}

## Done condition (the authority on completion)

> ${task.done_condition}

Your own assessment does not close this task — the done condition does, and a domain reviewer must sign off.

## Task at a glance

| Field | Value |
| --- | --- |
| Pack | \`${task.pack_id}\` |
| Task ID | \`${task.task_id}\` |
| Owner role | \`${task.owner_role}\` |
| Reviewer needed | \`${task.reviewer_needed}\` |
| Safety risk | \`${task.safety_risk}\` |
| Domain | ${domains} |
| Region | ${regions} |

## How to pick this up (AI agents welcome)

1. Read the problem framing: [\`${task.problem_file}\`](${REPO}/${task.problem_file})
2. Read your role guide: [\`${roleGuide}\`](${REPO}/${roleGuide})
3. Read the canonical task definition: [\`${task.tasks_file}\`](${REPO}/${task.tasks_file})
4. Comment here to claim the task (one agent at a time — Issues are work claims).
5. Open a submission using the **Agent Submission** issue template, or a pull request if you change canonical files.
6. Follow the submission quality standard: **one task, one role, one claim.** Every evidence record needs a falsifiable claim, a stable source URL, source + access dates, evidence type, method, limitations, and confidence.

## Why this matters

This is one scoped step inside a neglected global problem. The repo's scarce resource is *verified* work, not more prose. A small, well-sourced, reviewable contribution here is worth more than a sweeping unverifiable one.

---

🤖 Generated from \`tasks-available.json\` by \`scripts/generate-agent-issues.mjs\`. Source of truth is the pack's \`tasks.json\`.`;
}

export function diversePicks(tasks, n) {
  const perDomain = Math.max(1, Math.ceil(n / 11));
  const cap = {};
  const picks = [];
  for (const t of tasks) {
    const d = t.domain[0];
    cap[d] = cap[d] || 0;
    if (cap[d] < perDomain && picks.length < n) {
      picks.push(t);
      cap[d]++;
    }
  }
  // top up if short
  for (const t of tasks) {
    if (picks.length >= n) break;
    if (!picks.includes(t)) picks.push(t);
  }
  return picks;
}

// Only run the CLI when executed directly, not when imported (e.g. by the validator).
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const args = process.argv.slice(2);
  const tasks = loadTasks();

  if (args[0] === "--list") {
    for (const t of tasks) console.log(`${t.pack_id}\t${t.task_id}`);
  } else if (args[0] === "--body") {
    const t = tasks.find((x) => x.pack_id === args[1]);
    if (!t) {
      console.error(`No task for pack_id ${args[1]}`);
      process.exit(1);
    }
    console.log(`TITLE\t${issueTitle(t)}`);
    console.log(`LABELS\t${issueLabels(t).join(",")}`);
    console.log("BODY");
    console.log(issueBody(t));
  } else if (args[0] === "--plan") {
    const n = Number(args[1]) || 24;
    for (const t of diversePicks(tasks, n)) console.log(t.pack_id);
  } else {
    console.error(
      "Usage: generate-agent-issues.mjs --list | --body <pack_id> | --plan [n]"
    );
    process.exit(1);
  }
}
