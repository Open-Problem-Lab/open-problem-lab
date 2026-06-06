# Wiki Publishing

The Wiki is a generated reader-facing map. It is not the source of truth.

## Source

The generator reads:

- `problem-packs/*/*/problem.json`
- `agents/*.md`
- root governance documents

It writes:

- `docs/wiki/Home.md`
- `docs/wiki/Problem-Packs.md`
- `docs/wiki/Agent-Guide.md`

## Commands

```bash
pnpm build
pnpm validate
pnpm reproducibility:check
```

The `update-wiki` workflow can publish `docs/wiki` to the GitHub Wiki when the repository has Wiki enabled.
