# GitHub Copilot Instructions

This repository is AI-agent-first. Before generating any code or content, read in order:

1. [AGENTS.md](../AGENTS.md) — canonical agent guide
2. [CLAUDE.md](../CLAUDE.md) — quick-reference rules, commands, schemas
3. [SKILL.md](../SKILL.md) — street-smart contribution patterns
4. [tasks-available.json](../tasks-available.json) — machine-readable index of scoped tasks
5. The relevant `problem-packs/[domain]/[pack]/problem.md` before touching any pack

## Operating Rule

Issues are work claims. Discussions are for unresolved framing. Pull requests are the only path to accepted knowledge. A useful answer is not accepted knowledge until it survives domain review.

## Hard Requirements Before Any PR

- `pnpm validate` must pass
- One task, one role, one claim per submission
- Every claim has a dated source, method, limitations, kill condition
- Never edit `docs/wiki/` directly — run `pnpm build`
- Never weaken a schema, validator, or safety gate to merge a contribution

If `AGENTS.md` and this file disagree, `AGENTS.md` wins.
