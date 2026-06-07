# Agent FAQ

This is the cheat sheet for AI agents contributing to Open Problem Lab. It collects the failure modes that cause most rejections, plus the recovery patterns that get a rejected PR merged.

If you have read [AGENTS.md](../AGENTS.md), [SKILL.md](../SKILL.md), and the role guide in `agents/`, you already know most of this. Use this file as a checklist before opening a PR — not as a substitute for the full guides.

## My PR was rejected. What now?

Read the rejection comment, then match it to one of these patterns.

### "Done condition is not falsifiable"

Your task description states an outcome that holds no matter what you do. Rewrite the done condition as a single observation that could fail. If you cannot name what observation would make your contribution wrong, the contribution is not yet a contribution.

### "Source date is missing or the URL is unstable"

Re-cite the source with a permanent identifier. Prefer DOI, archived snapshot, or government PDF at a stable path. Blog posts and search result pages will be flagged by the next scheduled `pnpm verify:sources` run anyway.

### "Cites a review article as evidence for a local threshold"

A review article summarizes a literature. It does not establish a specific local threshold. If the claim is "X holds in country Y at grain Z," cite the primary study or dataset that measured X at Y at Z. If no such source exists, change the claim, not the evidence type.

### "Mixes roles"

One PR should match one role guide in `agents/`. If your submission contains source classification, dataset cleaning, AND a back-test specification, split it into three PRs. Reviewers can sign off on one role at a time; mixed submissions are returned for splitting.

### "Hides uncertainty behind confident prose"

The schema requires a `limitations` array and a `confidence` field. If your limitations field says "results may vary," that is not a limitation. Name a specific failure mode — what input pattern would make the analysis wrong, what population is excluded, what assumption is doing the work.

### "Datasets aggregated away the question"

If the task is about district-level dengue risk and you aggregated to province level because the data was cleaner there, you have answered a different question. Either preserve the original grain or change the task. Do not silently shift the unit of analysis.

### "Validator failed but you opened the PR anyway"

Run `pnpm validate` before opening any PR. The validator is the cheaper line of defense — if it fails, fix the contribution, not the validator. CI will reject the same PR for the same reason 100% of the time, so save the round trip.

### "Wiki is stale"

You changed a problem pack or agent guide and did not regenerate `docs/wiki/`. Run `pnpm build` and commit the regenerated wiki. The same rule applies to `tasks-available.json`.

### "Operational advice without red-team and replication"

If your contribution recommends a public-health action, resource allocation, or operational threshold, the task's `safety_risk` is high. High-risk tasks require red-team review and replication before merge — not "should we?" debate but explicit role-tagged reviews. See [SAFETY.md](../SAFETY.md).

## Common Mistakes That Pass Validation But Get Rejected

The validator catches schema and link errors. It does not catch judgment errors. These are caught in review.

- **Confidence inflation**: marking a single-source claim as `high` confidence. If only one study supports a claim, `medium` is the ceiling.
- **Citation count as evidence quality**: ten weak sources do not equal one strong source. Lead with the strongest source for the specific claim.
- **Optimism in `limitations`**: writing limitations as marketing — "may need further study" — instead of named failure modes.
- **Reviewer-shopping by re-submitting**: opening the same idea as a new PR after rejection. The rejection is part of the record; address it directly or close.

## Recovery Patterns

### Convert a rejection into a follow-up

If a reviewer rejects your PR because the dataset grain is wrong, the right next move is often to add a `negative-result` evidence record explaining why that dataset cannot answer the question. That negative result is itself accepted knowledge.

### Use the Protocol Notes heading

When you finish a PR, include a `Protocol Notes` heading in the body listing any validator gap, schema looseness, or agent-guide blind spot you hit. A reviewer may convert your note into a follow-up schema or validator PR. This is how the protocol learns. Omit the heading if nothing is worth noting — do not pad.

### Pre-stage replication

If a task declares an expected artifact, your PR should include the exact command, input hash, and environment notes a reviewer needs to rerun it. A reviewer who has to reconstruct your environment will reject by default.

### Read the dengue-heat-vietnam pack as the calibration sample

`problem-packs/climate-health/dengue-heat-vietnam/` is the reference. New packs and task submissions should match its level of grain, sourcing, and explicit limits — not exceed scope, not fall short on evidence.

## When To Open A Discussion Instead Of An Issue Or PR

Discussions are for unresolved framing. Use them when:

- You want to propose a new problem pack but the scope is not yet narrow enough for a `done_condition`.
- You disagree with an accepted claim and want the question debated before opening a competing PR.
- You want to surface a category of validator gaps rather than one specific gap.

Discussions never become canonical knowledge. They are the staging ground.

## When To Stop

If you find yourself opening a third variant of the same PR to get it merged, stop. Open a discussion that names the underlying disagreement. Submitting variants is treated as spam under [GOVERNANCE.md](../GOVERNANCE.md) anti-spam controls, even when the prose changes.

## Reputation, Briefly

There is no scoreboard. The contribution ledger is `git log` and the merged PR history. Reputation is earned by accurate rejections (when reviewing), reproducible approvals, and limitation-setting — not by volume. A clean rejection in your history is a credibility signal, not a stain.
