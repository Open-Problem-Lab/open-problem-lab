# Reviewers

Domain reviewers are the most valuable contributors to Open Problem Lab. An accurate rejection that prevents a false result from becoming canonical is worth more than ten accepted submissions.

This document describes what domain review involves, what expertise is needed for each problem pack, and how to join as a reviewer.

## What Domain Review Involves

Reviewers evaluate submitted evidence, methods, and outputs against three questions:
1. **Is the evidence sufficient?** Are the sources dated, accessible, and capable of proving the specific claim?
2. **Is the method sound?** Can the analysis actually produce the conclusion? Are the limitations correctly stated?
3. **Is it safe to publish?** Could a less careful user misinterpret or misapply the output in a way that causes harm?

Reviewers do not need to prove the claim false. The submitter must prove it reliable enough to merge.

A reviewer may reject for:
- Weak or undated evidence
- Unclear method
- Hidden assumptions
- Missing failure modes
- Unsafe downstream use
- Unverifiable claims

See [GOVERNANCE.md](GOVERNANCE.md) for the full acceptance standard and reviewer rights.

## Reviewer Types

| Role | What it means |
|------|--------------|
| `domain-reviewer` | Has expertise in the problem domain (epidemiology, climate science, water engineering, etc.) |
| `replicator` | Independently reruns quantitative artifacts to confirm reproducibility |
| `red-team-reviewer` | Adversarially stress-tests claims and failure modes |
| `field-reality-reviewer` | Has direct experience with field decision-making in the relevant context |

## Domain Expertise Needed

### Climate Health

**Needed for:** malaria-early-warning-africa, dengue-heat-vietnam, heat-stress-urban-south-asia

**Expertise:** Epidemiology, infectious disease modeling, climate-health associations, Sub-Saharan Africa or Southeast Asia health system context, DHIS2 data familiarity, climate reanalysis data (ERA5, CHIRPS).

**Specific gaps:** Sub-national malaria surveillance data access and quality assessment; Viet Nam district-level dengue data; wet-bulb temperature threshold evidence.

---

### Biodiversity and Earth Observation

**Needed for:** deforestation-amazon, coral-bleaching-great-barrier-reef

**Expertise:** Remote sensing, land cover classification, species distribution modeling, reef ecology, AIMS survey data, NOAA Coral Reef Watch products.

**Specific gaps:** Amazon deforestation detection algorithm validation; coral bleaching classification methodology; species range response to habitat loss.

---

### Climate Adaptation and Disaster Resilience

**Needed for:** sea-level-rise-small-islands, cyclone-early-warning-bangladesh, earthquake-vulnerability-nepal

**Expertise:** Coastal hazard modeling, storm surge modeling, seismic hazard assessment, building vulnerability classification, SIDS adaptation context.

**Specific gaps:** Bangladesh coastal delta surge propagation; Nepal building stock classification post-Gorkha; SIDS coastal topography data reliability.

---

### Food Security and Locust Early Warning

**Needed for:** drought-early-warning-horn-of-africa, locust-outbreak-east-africa

**Expertise:** FEWS NET methodology, IPC classification, desert locust biology and wind trajectory modeling, Horn of Africa food system context.

**Specific gaps:** FEWS NET signal lead-time validation; locust outbreak prediction false-alarm rates; Sudan/Somalia surveillance data access.

---

### Water Security

**Needed for:** groundwater-depletion-india, glacial-melt-hindu-kush

**Expertise:** Hydrogeology, GRACE-FO satellite gravimetry interpretation, glaciology, Hindu Kush Himalaya basin hydrology, India aquifer data.

**Specific gaps:** GRACE spatial resolution limitations for district-level India analysis; glacier mass balance model ensemble uncertainty.

---

### Public Health and Nutrition

**Needed for:** stunting-sub-saharan-africa, lead-exposure-urban-global, indoor-air-pollution-sub-saharan-africa

**Expertise:** Child nutrition assessment, DHS survey methodology, air pollution health exposure modeling, blood lead level data, household energy surveys.

**Specific gaps:** Sub-national stunting survey comparison methodology across DHS rounds; lead isotope source apportionment in LMICs; solid fuel exposure estimation from fuel surveys.

---

### Sanitation and WASH

**Needed for:** open-defecation-india

**Expertise:** WASH sector, JMP methodology, India Swachh Bharat Mission context, household survey data, toilet use vs. access distinction.

**Specific gaps:** Administrative vs. survey data reconciliation at district level; toilet use behavioral follow-up data.

---

### Education

**Needed for:** learning-loss-post-pandemic, girls-education-sub-saharan-africa

**Expertise:** Educational assessment methodology (PASEC, SACMEQ, ASER), learning loss measurement, gender and education in Sub-Saharan Africa.

**Specific gaps:** Cross-survey learning comparability methods; girls' secondary retention data at sub-national level.

---

### Energy Access

**Needed for:** mini-grid-rural-sub-saharan-africa, clean-cooking-sub-saharan-africa

**Expertise:** Energy access measurement, mini-grid economics, solar resource assessment, household cooking behavior surveys.

**Specific gaps:** Mini-grid cost modeling under current Sub-Saharan Africa market conditions; clean cooking adoption behavior data.

## Reviewer Reputation

Reviewer reputation is earned by:
- Accurate rejections that prevent false claims from becoming canonical
- Reproducible approvals that are later confirmed by field use
- Clear limitation-setting that prevents downstream misuse
- Not by volume of reviews completed

Reputation lives in `git log` and the merged PR history. There is no separate scoreboard.

## How to Join as a Reviewer

Open a Discussion titled: `[REVIEWER] [Domain] [Your expertise and relevant experience]`

Include:
- Your domain expertise and relevant experience
- Which problem packs you can review
- Whether you are available for replication or field-reality review specifically
- Any institutional affiliations relevant to the domain

A maintainer will respond to scope your first review task.

Reviewers who have completed at least one verified review may be tagged directly in future pull requests in their domain.
