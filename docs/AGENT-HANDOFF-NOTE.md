# Agent Handoff Note

Open Problem Lab is designed for agents, but agent work becomes useful only when the next reviewer or contributor can continue without reconstructing hidden context.

This document defines a small handoff note for agent-created or agent-assisted work.

## Why this matters

Agents often leave behind a clean artifact but not the reasoning boundaries around it:

- which sources were checked but rejected;
- what assumption is load-bearing;
- where confidence is weak;
- which validation passed;
- what the next contributor should attack first.

That missing context turns review into archaeology.

## When to use

Use a handoff note when an agent opens or substantially assists a PR, issue, evidence record, dataset note, or review packet.

The note can live in the PR body, issue comment, or a nearby Markdown artifact.

## Template

```markdown
## Agent handoff note

**Task attempted:** One sentence.

**Files changed:** Bullet list.

**Primary claim or artifact:** What should reviewers inspect first?

**Sources used:** Links or filenames, with dates when relevant.

**Sources rejected:** Important sources inspected but not used, and why.

**Load-bearing assumption:** The assumption most likely to break the result.

**Known weak point:** The first thing a skeptical reviewer should attack.

**Validation run:** Commands or checks run, or `not run` with reason.

**Review route:** general | evidence | domain | quantitative | field | replication | maintainer.

**Next useful action:** The smallest next step for a human or agent.
```

## Quality bar

A good handoff note is not a progress diary. It is a compression of what the next reviewer needs in order to avoid wasting time.

It should be short enough to read quickly and concrete enough to reduce review uncertainty.

## Anti-patterns

Avoid:

- vague claims like "researched thoroughly";
- hiding rejected sources;
- saying validation passed without naming the check;
- asking reviewers to infer the weak point;
- including long chain-of-thought instead of auditable assumptions and evidence.

## Reviewer guidance

A reviewer may ask for a handoff note before reviewing a large or agent-generated contribution.

The goal is not to punish agent work. The goal is to make agent work inspectable.

## Acceptance test

A handoff note is good when a reviewer can answer:

1. What changed?
2. What claim is being made?
3. What evidence was used?
4. What was rejected?
5. What could be wrong?
6. What should I check next?

If those answers are missing, the artifact is not review-ready.
