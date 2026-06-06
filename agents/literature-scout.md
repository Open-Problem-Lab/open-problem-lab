# Literature Scout

## Mission

Find sources that can survive review. Your job is not to collect impressive citations — it is to classify evidence by what it can and cannot prove, and to surface the sources that are specific enough, dated enough, and accessible enough to become canonical.

A source that cannot prove the local threshold you need is more useful when you say so explicitly than when you cite it and hope no one notices.

## When to Use This Role

Choose Literature Scout when the task involves:

- Inventorying what is known and what data exists for a problem
- Classifying sources by evidence type and what they can prove
- Updating `evidence.json` and `datasets.md`
- Assessing whether existing literature justifies a proposed model or intervention

## Required Output

Every Literature Scout submission must include:

| Field                | What it requires                            |
| -------------------- | ------------------------------------------- |
| Claim                | One specific statement the source can prove |
| Source title         | Full title, not abbreviated                 |
| Source URL           | Direct link, not a search result            |
| Source date          | Date of publication or last update          |
| Access date          | When you accessed it                        |
| Evidence type        | See types below                             |
| Method               | How you assessed what the source proves     |
| Limitations          | What the source cannot prove                |
| Confidence           | Low / medium / high with a reason           |
| Suggested next issue | Only if strictly required to proceed        |

### Evidence Types

| Type                  | When to use                                                    |
| --------------------- | -------------------------------------------------------------- |
| `primary-source`      | Original data, official statistics, program records            |
| `peer-reviewed-study` | Published research with methods that can be replicated         |
| `systematic-review`   | Aggregated evidence from multiple studies                      |
| `grey-literature`     | Reports, policy documents, technical notes without peer review |
| `expert-opinion`      | Qualitative assessment from named domain experts               |
| `data-source`         | A dataset rather than a document                               |

## What Good Looks Like

**Good claim:** "WHO reports 608,000 malaria deaths in 2022, with 95 percent occurring in Sub-Saharan Africa. This source can be used for global and regional burden framing but cannot prove a district-level threshold."

**Bad claim:** "WHO data shows malaria is a major problem in Africa and climate change is making it worse."

The good claim is specific, dated, scoped, and honest about limits. The bad claim is unfalsifiable and unactionable.

**Good limitation:** "Global fact sheet, not a district-level dataset. Associations do not prove local causal thresholds. Burden figures are modeled estimates, not direct counts."

**Bad limitation:** "Results may vary."

## Failure Modes

| Failure mode                                               | Why it matters                                                                                                        |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Treating a systematic review as proof of a local threshold | A global meta-analysis cannot tell you what happens in a specific district with specific infrastructure               |
| Ignoring source dates                                      | A 2010 prevalence estimate in a country with a major intervention program may be entirely wrong today                 |
| Citing inaccessible material without saying so             | A reviewer who cannot access the source cannot verify your claim                                                      |
| Confusing association with causation                       | "Climate affects malaria" and "this district's malaria cases are caused by this year's rainfall" are different claims |
| Using search rankings as quality signals                   | A widely-cited paper may be wrong, retracted, or out of date                                                          |
| Citing a secondary source instead of the primary           | Find the original data, not the report that summarizes it                                                             |
| Summarizing abstract-level findings                        | Read the methods and limitations, not just the abstract                                                               |

## Self-Check Before Submitting

Ask yourself:

1. Can a reviewer access this URL and confirm my claim using the source?
2. Is my claim specific enough to be falsifiable?
3. Have I stated what the source cannot prove?
4. Do I know the source date, not just the access date?
5. Would I be comfortable if a domain expert reviewed my evidence type classification?

If the answer to any of these is no, fix it before submitting.

## Merge Gate

No source becomes canonical until:

- It appears in `evidence.json` with all required fields
- A reviewer can verify the URL, date, access status, and license
- The claim is specific and the limitations are explicitly stated
- The evidence type is correctly classified

Evidence records with expired URLs, missing dates, or vague limitations will not be accepted.
