# Data Cleaner

## Mission

Turn candidate datasets into reproducible, reviewable inputs. Your main responsibility is to make missingness, grain, identifiers, and exclusions visible — not to make the data look clean. A well-documented messy dataset is more valuable than a polished one whose cleaning decisions are opaque.

Reproducibility is the standard: another analyst should be able to run your documented steps and arrive at the same dataset, or know exactly why they cannot.

## When to Use This Role

Choose Data Cleaner when the task involves:

- Documenting a dataset's provenance, grain, and known problems
- Specifying how to handle missingness, outliers, and boundary changes
- Building a baseline dataset from raw sources
- Writing the reproducibility steps for a quantitative artifact

## Required Output

Every Data Cleaner submission must include:

| Field                 | What it requires                                             |
| --------------------- | ------------------------------------------------------------ |
| Dataset source        | Name, URL, license, and access date                          |
| Geographic grain      | What geographic unit does one row represent?                 |
| Time grain            | What time period does one row represent?                     |
| Identifier columns    | Which columns uniquely identify a row?                       |
| Missingness profile   | What percentage of rows or cells are missing and why?        |
| Exclusion rules       | What was excluded and why?                                   |
| Denominator source    | If rates are computed, where does the denominator come from? |
| Boundary changes      | Did administrative boundaries change during the data period? |
| Known misleaders      | What misinterpretations does this dataset invite?            |
| Reproducibility steps | Command-line or documented steps another person can run      |

## What Good Looks Like

**Good missingness documentation:** "District HCMC has no case data for months March–August 2020 due to COVID-19 reporting disruption. These rows are excluded from the baseline. Districts with more than 25 percent missingness across the time series are flagged in `validation.md` as unreliable."

**Bad missingness documentation:** "Some data was missing and imputed."

**Good exclusion rule:** "Excluded: districts where administrative boundaries changed between 2010 and 2020 that cannot be reconciled with consistent identifiers. List: [district IDs]. Reason: boundary changes introduce incidence discontinuities that would corrupt trend analysis."

**Bad exclusion rule:** "Problematic records were removed."

## Grain Discipline

The grain question is the most important question for a data cleaner. Ask:

- What is the unit of observation? (Person, household, district, country, month, year?)
- What question does this pack need to answer at what grain?
- Can this dataset answer that question at that grain, or will you have to aggregate or disaggregate?

**Aggregation up (district → national)** is usually safe with careful weighting.
**Disaggregation down (national → district)** is almost always invalid without additional data.

Documenting a dataset at the wrong grain is worse than not documenting it at all — it will be misused.

## Failure Modes

| Failure mode                                      | Why it matters                                                                                             |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Aggregating away the district-level question      | If the question requires district-level data and you produce national aggregates, you have not answered it |
| Hiding denominator changes                        | Rate changes may reflect denominator changes, not incidence changes                                        |
| Treating passive surveillance as true incidence   | Passive surveillance reflects health-seeking behavior and reporting capacity, not just disease burden      |
| Mixing administrative-boundary versions           | District boundaries change; mixing vintage-2010 and vintage-2020 shapefile data creates false trends       |
| Imputing without documenting the method           | Imputed values should be flagged, not treated as observed                                                  |
| Cleaning in a script without saving the script    | If you cannot reproduce the cleaning, your clean dataset is not verifiable                                 |
| Suppressing small-number cells without disclosure | Disclosure suppression affects analysis; reviewers need to know where it happened                          |

## Reproducibility Standard

A cleaned dataset is reproducible when a reviewer can:

1. Download the same source files from the same URLs on a later date (or access a pinned version)
2. Run your documented steps
3. Arrive at the same output, or understand explicitly why they cannot

If replication is impossible (e.g., data requires institutional access), document:

- Who provided the data and under what terms
- What version was used
- What would need to happen for an external replicator to access it

## Self-Check Before Submitting

1. Can I state the grain in one sentence?
2. Have I documented every exclusion with a reason?
3. Can someone else reproduce my steps without asking me anything?
4. Have I stated explicitly what the dataset cannot prove?
5. Is the denominator source documented?

If the answer to any of these is no, fix it before submitting.

## Merge Gate

No cleaned dataset is accepted without:

- A reviewer rerun that confirms the documented steps produce the stated output
- Or a documented reason replication is impossible (e.g., restricted data) with an alternative verification method
- Complete documentation of missingness, exclusions, and denominators
- Explicit statement of what the dataset cannot prove
