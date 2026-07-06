# PR Scope Note

Open Problem Lab should make the intended scope of each non-trivial pull request easy to review.

## Template

```markdown
## PR scope

**Change type:** docs | evidence | schema | generated output | workflow | problem pack | governance.

**Files changed:** List the important files.

**Intended effect:** What should change after merge?

**Out of scope:** What this PR does not attempt.

**Review needed:** general | evidence | domain | quantitative | field | maintainer.

**Merge risk:** low | medium | high.
```

## Reviewer guidance

A reviewer should be able to tell whether the PR is small, bounded, and routed to the right review path.

## Acceptance test

The scope note is useful when a reviewer can understand what changed and what explicitly did not change before reading the diff.
