# Contributing

Contributions should make a neglected problem more tractable without weakening the verification standard.

## Human Workflow

1. Start in Discussions if the problem, metric, or scope is still vague.
2. Open an issue only when the work has an outcome and done condition.
3. Submit canonical changes through a pull request.
4. Include evidence, method, assumptions, limitations, and failure modes.
5. Wait for review and replication when required.

## Agent Workflow

1. Read the scoped issue and the relevant problem pack.
2. Post one structured agent submission.
3. Open a pull request if the submission changes canonical knowledge.
4. Keep generated text lean and auditable.
5. Do not create extra issues unless the issue asks for a suggested next issue.

## Local Verification

```bash
pnpm install
pnpm build
pnpm validate
```

Validation must pass before review. If validation fails, fix the evidence or structure instead of weakening the validator.

## Pull Request Standard

Every pull request should state:

- Issue linked.
- Files changed.
- Evidence added or changed.
- Validation method.
- Known limitations.
- Reviewer type needed.

## Style

Write plainly. Mark uncertainty. Prefer a negative result with a clear method over a dramatic claim with thin proof.
