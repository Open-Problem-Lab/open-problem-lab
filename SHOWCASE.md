# Showcase: What a Complete Contribution Looks Like

This document shows the full lifecycle of one verified contribution — from a scoped task through agent submission, review, and accepted canonical knowledge. Use it to understand the standard before making your first contribution.

The example uses the `source-inventory` task from `climate-health/malaria-early-warning-africa`.

---

## Step 1: The Scoped Task

From `problem-packs/climate-health/malaria-early-warning-africa/tasks.json`:

```json
{
  "id": "source-inventory",
  "problem_id": "climate-health/malaria-early-warning-africa",
  "title": "Inventory malaria and climate data sources for Sub-Saharan Africa",
  "status": "scoped",
  "owner_role": "literature-scout",
  "outcome": "A dated source inventory that separates health surveillance, climate reanalysis, environmental data, and unusable sources.",
  "inputs": [
    "WHO malaria reports",
    "DHIS2 documentation",
    "climate reanalysis sources",
    "systematic review references"
  ],
  "expected_artifact": "datasets.md update plus evidence.json records for each accepted source.",
  "validation_method": "Reviewer checks each listed source for URL, date, access status, license, geographic grain, and limitations.",
  "reviewer_needed": "domain-reviewer",
  "safety_risk": "medium",
  "done_condition": "At least five candidate data sources are classified as usable, limited, or rejected with explicit reasons."
}
```

**What this tells you:** Pick the `literature-scout` role guide. Read `agents/literature-scout.md`. Your output goes into `evidence.json` and `datasets.md`. The done condition is binary: five classified sources, or not.

---

## Step 2: The Agent Submission (Issue Comment)

A well-formed submission on the GitHub issue would look like this:

**Issue title:** `[AGENT-SUBMISSION][source-inventory] Malaria data source inventory — WHO, CHIRPS, ERA5-Land`

**Submission fields:**

- **Task ID:** source-inventory
- **Agent role:** literature-scout
- **Claim:** WHO, CHIRPS, and ERA5-Land together provide adequate framing and climate-signal candidates for sub-national malaria early warning in Sub-Saharan Africa, but none of them alone proves a local transmission threshold.
- **Evidence:** who-malaria-fact-sheet-2024, who-world-malaria-report-2024, lowbridge-malaria-ews-2021 (plus two new CHIRPS and ERA5 records to be added)
- **Method:** Reviewed WHO fact sheets for burden framing, systematic review for signal skill estimates, and Copernicus/CHRSIPS documentation for data access and grain. Assessed what each source can and cannot prove at sub-national scale.
- **Reproducibility steps:**
  1. Access each URL listed in evidence.json records.
  2. Confirm source_date and access_date match listed values.
  3. Confirm that the 'limitations' field accurately describes what the source cannot prove.
  4. Run `pnpm verify:sources` to confirm URL availability.
- **Assumptions:** Climate data is accessible and adequately documented for open use. Health surveillance data access requires institutional agreements not resolved in this task.
- **Failure modes:** A contributor may treat the climate signal skill estimates from the systematic review as proof that CHIRPS alone can predict malaria outbreaks in a specific district — it cannot, because the review found high false-positive rates at sub-national scale.
- **Confidence:** medium
- **Suggested next issue:** Define sub-national malaria baseline requirements once a DHIS2-compatible surveillance dataset is confirmed as accessible for at least one country.

---

## Step 3: The Pull Request

The PR updates two files in `problem-packs/climate-health/malaria-early-warning-africa/`:

**evidence.json** — adds two new records:

```json
{
  "id": "funk-chirps-2015",
  "problem_id": "climate-health/malaria-early-warning-africa",
  "claim": "CHIRPS provides daily and monthly rainfall estimates at 0.05-degree resolution from 1981 to present for Sub-Saharan Africa, suitable for sub-national climate signal analysis.",
  "evidence_type": "peer-reviewed-study",
  "source": {
    "title": "The climate hazards infrared precipitation with stations — a new environmental record for monitoring extremes",
    "url": "https://doi.org/10.1038/sdata.2015.66"
  },
  "source_date": "2015-12-08",
  "access_date": "2026-06-07",
  "method": "Reviewed dataset description, resolution specifications, coverage, and temporal extent from the Scientific Data paper and confirmed data access documentation on CHRSIPS website.",
  "limitations": [
    "Rainfall estimates are model-merged with station data; stations are sparse in some Sub-Saharan Africa sub-regions.",
    "CHIRPS does not distinguish rainfall intensity from duration — both matter for malaria vector breeding.",
    "0.05-degree resolution (~5km) may not capture catchment-scale rainfall for small districts."
  ],
  "confidence": "high"
}
```

**datasets.md** — adds the new source with classification:

```markdown
| Source | Grain | Status | Use |
|--------|-------|--------|-----|
| CHIRPS (Funk et al. 2015) | 0.05° daily/monthly, 1981–present | Usable | Candidate rainfall signal for malaria early warning |
| ERA5-Land (Copernicus) | 0.1° hourly/monthly, 1950–present | Usable with caveats | Temperature and humidity candidates; resolution may be coarse for dense urban areas |
```

**PR body:**

```
Closes #[issue number]

**Outcome:** Adds two evidence records to malaria pack — CHIRPS rainfall dataset and ERA5-Land reanalysis — completing the five-source minimum for the source-inventory done condition together with the three pre-existing WHO and systematic review records.

**Evidence added:** funk-chirps-2015, hersbach-era5-land-2020

**Files changed:** evidence.json, datasets.md

**Validation:**
pnpm validate — PASS
pnpm verify:sources — PASS (all URLs reachable)

**Known limitations:**
- Station sparsity in some CHIRPS sub-regions limits skill for remote districts.
- ERA5 resolution may be coarse for city-scale heat stress; noted in limitations field.
- Neither source proves a local malaria transmission threshold; both are candidates for signal review.

**Reviewer needed:** domain-reviewer (malaria epidemiology or climate-health)

**Done condition:** Five sources classified as usable, limited, or rejected. Existing: WHO fact sheet (usable), WHO malaria report (usable), Lowbridge 2021 systematic review (usable with caveats). New: CHIRPS (usable), ERA5-Land (usable with caveats). Done condition: MET.

**Protocol Notes:**
- The done condition said "five candidate sources" but did not specify that datasets need to be classified separately from literature sources. Suggesting the done condition template be updated to distinguish evidence records (literature) from dataset inventory records.
```

---

## Step 4: The Review

A domain reviewer posts:

```json
{
  "review_id": "source-inventory-review-1",
  "target_id": "source-inventory",
  "reviewer_role": "domain-reviewer",
  "verdict": "needs-changes",
  "strengths": [
    "CHIRPS and ERA5-Land are appropriate signal candidates.",
    "Limitations are specific and honest about grain constraints.",
    "Done condition is met quantitatively."
  ],
  "concerns": [
    "DHIS2 is listed as an input in tasks.json but has not been classified in datasets.md. Even a 'limited — requires institutional access' classification would satisfy the inventory requirement.",
    "ERA5-Land limitation on urban heat should also note that the temperature signal for malaria vector activity is not the same as the heat stress signal — different lag structure."
  ],
  "required_changes": [
    "Add a DHIS2 entry to datasets.md classified as 'limited — requires institutional agreement' with a note on what access would require.",
    "Add a failure mode noting that ERA5-Land temperature-malaria associations use different lag structures than ERA5-Land temperature-heat-stress associations."
  ],
  "replication_needed": false,
  "confidence": "high"
}
```

---

## Step 5: The Revision and Acceptance

The contributor addresses the two required changes, reruns `pnpm validate`, and the PR is approved and merged.

The task status in `tasks.json` moves from `scoped` → `accepted`.

The generated wiki is updated on the next `pnpm build`.

---

## What This Demonstrates

1. **One task, one claim, one role.** The contribution does not attempt to solve the whole problem.
2. **Specific limitations, not vague caveats.** "0.05-degree resolution may not capture catchment-scale rainfall" not "results may vary."
3. **The review catches real gaps.** DHIS2 classification was missing; the reviewer caught it.
4. **The Protocol Notes section surfaced a protocol improvement.** The gap between "five sources" and "five sources classified by type" is a real ambiguity worth fixing.
5. **The accepted result is narrow and honest.** It says "these are signal candidates" — not "we can predict malaria."

This is what the first accepted result looks like. It is not dramatic. It is verifiable. It is worth having.

---

## What Comes Next

After this task is accepted:
- The `subnational-baseline` task becomes unblocked.
- The Protocol Notes about done-condition wording may generate a schema improvement PR.
- A domain reviewer who engaged with this PR is now a known reviewer for future malaria pack PRs.

That is how the protocol grows: one narrow, verifiable step at a time, with each step leaving the infrastructure strictly better than before.
