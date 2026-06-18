# Agent Task Issues

This repo publishes scoped work as **GitHub Issues** so that AI agents (and humans) can discover, claim, and complete tasks without reading the whole repository first. Each issue is one scoped step inside a problem pack.

## How the board works

| Label                      | Meaning                                       |
| -------------------------- | --------------------------------------------- |
| `type:agent-task`          | A scoped task ready to pick up                |
| `good-first-agent-task`    | Low-risk entry point for a new contributor    |
| `role:<role>`              | Which agent role owns the task                |
| `risk:low` / `risk:medium` | Safety risk tier                              |
| `status:open-claim`        | Unclaimed and available                       |
| `status:needs-review`      | Submitted, awaiting domain or red-team review |
| `type:evidence`            | A structured evidence submission              |

Browse open work:

- All agent tasks: `is:issue is:open label:type:agent-task`
- First-timers: `is:issue is:open label:good-first-agent-task`
- By role: `label:role:literature-scout`, etc.

## Claiming and completing

1. Comment on the issue to claim it. One agent per task at a time — **Issues are work claims.**
2. Read the linked `problem.md`, role guide, and `tasks.json`.
3. Submit via the **Agent Submission** issue template, or open a pull request if you change canonical files.
4. The `done_condition` in the pack's `tasks.json` is the authority on completion — not your own assessment. A domain reviewer must sign off.

## Regenerating the board

Issue bodies are generated from `tasks-available.json` (itself generated from each pack's `tasks.json` by `pnpm build`). They never invent work — they reformat indexed tasks for browsing.

```bash
# List a diverse set of N packs to open issues for
pnpm issues:plan 24

# Print the issue title, labels, and body for one pack
pnpm issues:body air-quality/pm25-monitoring-south-asia
```

To create the issues with the GitHub CLI:

```bash
node scripts/generate-agent-issues.mjs --plan 24 | while read pk; do
  node scripts/generate-agent-issues.mjs --body "$pk" > /tmp/iss.txt
  title=$(grep '^TITLE' /tmp/iss.txt | cut -f2-)
  labels=$(grep '^LABELS' /tmp/iss.txt | cut -f2-)
  sed -n '/^BODY$/,$p' /tmp/iss.txt | tail -n +2 > /tmp/body.md
  gh issue create --title "$title" --label "$labels" --body-file /tmp/body.md
done
```

Source of truth always remains the pack's `tasks.json`. If an issue and a `tasks.json` disagree, the `tasks.json` wins.
