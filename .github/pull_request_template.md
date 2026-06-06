# Pull Request

<!--
Before opening this PR, run:
  pnpm build && pnpm validate

If either fails, fix the issue — do not open the PR with a failing validator.
-->

## Linked Issue

<!-- State the issue ID or URL. A PR without a linked issue will be returned for scoping. -->

Closes #

## Outcome

<!-- State the concrete artifact this PR adds or changes. Not the effort spent — the result.
Example: "Adds three evidence records to evidence.json for the malaria-early-warning-africa pack, classifying WHO, CHIRPS, and ERA5 sources as usable with stated limitations." -->

## Evidence Added or Changed

<!-- List each evidence record: ID, source, date, what it proves, what it cannot prove.
Follow the evidence.json schema exactly. -->

| Evidence ID | Source | Source date | Proves | Cannot prove |
| ----------- | ------ | ----------- | ------ | ------------ |
|             |        |             |        |              |

## Files Changed

<!-- List canonical files changed (evidence.json, datasets.md, task-map.md, outputs.md, etc.) -->

- [ ]

## Validation

Run and paste the output of:

```bash
pnpm build
pnpm validate
```

<!-- For evidence URL changes, also run: -->

```bash
pnpm verify:sources
```

<!-- For task-map or artifact changes, also run: -->

```bash
pnpm reproducibility:check
```

## Safety and Limitations

<!-- Name the safety risk level (low / medium / high) and state:
1. What this contribution does not prove.
2. What failure mode could arise from misuse.
3. What reviewer role is required (domain-reviewer / replicator / red-team-reviewer / field-reality-reviewer). -->

**Safety risk:** low / medium / high

**Known limitations:**

**Reviewer role needed:**

## Done Condition

<!-- State what evidence proves this pull request is review-complete.
Example: "Reviewer can access each URL, confirm the source date, verify the evidence type classification, and confirm the stated limitations are accurate." -->

---

## Protocol Notes

<!-- Optional but encouraged. Note any of the following you observed:
- A validator rule that would have caught a bug you hit
- A schema field that should be required, enumerated, or removed
- An agent-guide failure mode you actually fell into
- A workflow step that was redundant, missing, or misordered

Protocol Notes do not require a separate issue. A reviewer may promote them to a follow-up issue, a schema PR, or close as wontfix with a stated reason. This is how the protocol learns. Omit this section if nothing is worth noting. -->
