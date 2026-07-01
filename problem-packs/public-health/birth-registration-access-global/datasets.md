# Dataset Inventory

## Candidate Sources

| Source                                                                                | Measure family                                                                                | Timing reference                                                                    | Grain                                                                          | Status   | Health-linkage relevance                                                      | Why it belongs in this class                                                                                                                                                       |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UNICEF birth registration database and 2024 update                                    | Survey-based under-5 registration and certificate possession summary                          | Survey year varies by country; 2024 update is a global summary                      | Country, occasionally sub-national tables via underlying surveys               | Usable   | Indirect only                                                                 | Strongest cross-country framing source, but operational use still depends on underlying survey instruments rather than the summary page itself.                                    |
| DHS birth-registration indicators and microdata guide                                 | Survey-based under-5 registration, registered without certificate, and certificate possession | Child under age 5 at interview; household roster over the survey reference period   | Household, cluster, region, and sometimes district depending on released files | Usable   | Indirect only unless paired with a concrete service dataset                   | Explicit numerator, denominator, and certificate split make DHS the cleanest survey source for measure-family discipline where microdata access exists.                            |
| MICS birth-registration module and survey tools                                       | Survey-based under-5 registration and certificate possession                                  | Child under age 5 at interview; survey-round specific                               | Household, cluster, region, and sometimes district depending on release        | Usable   | Indirect only unless paired with a concrete service dataset                   | Major comparable survey source with repeated module use across countries, but release timing and sub-national detail vary by survey round.                                         |
| World Bank WDI `SP.REG.BRTH.ZS` metadata and indicator series                         | Survey-based under-5 registration only                                                        | Survey year inherited from underlying DHS or MICS source                            | Country                                                                        | Usable   | None by itself                                                                | Good as an official metadata guardrail against metric mixing, but too aggregated for sub-national or workflow claims.                                                              |
| WHO CRVS fact sheet and WHO-UNICEF health-sector CRVS guidance                        | Administrative live-birth completeness and workflow guidance                                  | Country-system capacity and implementation guidance, not one harmonized survey wave | Global and country policy framing                                              | Usable   | Direct conceptual relevance for facility, postnatal, and immunization linkage | Best available primary-source basis for why health touchpoints matter, but not evidence that any given country's workflow is measurable enough for local targeting.                |
| National CRVS administrative tabulations                                              | Administrative live-birth completeness or registration timeliness                             | Registration within legal time window; varies by country law and reporting lag      | Country to district, highly variable                                           | Limited  | Potentially direct, but only when denominator and legal window are explicit   | Operationally important, but cross-country comparison usually breaks because denominator choice, delay rules, and district publication practices differ.                           |
| Health facility birth-notification systems                                            | Birth notification or facility-delivery workflow, not registration status itself              | Event-based or monthly facility reporting                                           | Facility, district, or national aggregate depending on HMIS design             | Limited  | Direct                                                                        | Relevant to missed-opportunity analysis, but usually lacks a verified link from notification to completed civil registration and often has unstable catchment denominators.        |
| Immunization or child-health registries                                               | Service-touchpoint coverage, not birth registration                                           | Dose-specific or visit-specific reporting periods                                   | Child, facility, district, or campaign area                                    | Limited  | Direct                                                                        | Useful for asking whether service contact exceeds registration coverage, but registry quality and linkage to civil registration are country-specific and often access-constrained. |
| Population denominators and admin boundaries                                          | Denominator and mapping support only                                                          | Census year or modeled population year                                              | District, gridded, national                                                    | Usable   | Indirect only                                                                 | Necessary for rate construction and map alignment, but cannot prove registration performance without a paired registration measure.                                                |
| Standalone legal-identity strategy papers without source tables                       | Mixed and often undefined                                                                     | Usually undated synthesis or policy horizon                                         | National narrative                                                             | Rejected | Vague                                                                         | Framing documents that do not state numerator, denominator, source year, or district grain cannot support canonical comparison.                                                    |
| One-off NGO project reports claiming registration impact without a comparator dataset | Usually mixed survey and administrative claims                                                | Project-specific and non-harmonized                                                 | District or project catchment                                                  | Rejected | Sometimes direct but uncheckable                                              | Too often they collapse notification, application, and completed registration into one success claim without a falsifiable denominator.                                            |

## Classification Notes

### Usable

- **UNICEF birth registration database and 2024 update**: Use for global and country framing plus the distinction between unregistered children and children reportedly registered without documentary proof. Limitation: this is a synthesis layer over underlying surveys, not a substitute for survey microdata when choosing districts or health-touchpoint wedges.
- **DHS birth-registration indicators and microdata guide**: Use when the question is specifically about under-5 registration status and certificate possession at the time of interview. Limitation: DHS does not measure administrative completeness of live births inside the legal registration window, so it cannot be treated as a CRVS performance metric.
- **MICS birth-registration module and survey tools**: Use when MICS is the best country source for under-5 registration and proof-of-registration measures. Limitation: module availability is not equal to released, district-usable microdata, so each country still needs a feasibility check.
- **World Bank WDI `SP.REG.BRTH.ZS` metadata and indicator series**: Use as the official metadata guardrail that defines the SDG survey indicator and warns against conflating it with CRVS completeness. Limitation: country-level only; no direct role in district prioritization.
- **WHO CRVS fact sheet and WHO-UNICEF health-sector CRVS guidance**: Use to justify why birth registration belongs in a health-service workflow discussion and to name plausible touchpoints such as facility birth, postnatal care, or immunization. Limitation: guidance and systems framing are not outcome proof.

### Limited

- **National CRVS administrative tabulations**: Use only after documenting the legal registration window, denominator, and publication lag. The same country can report high eventual registration but weak on-time registration, and those are different operational problems.
- **Health facility birth-notification systems**: Use as workflow evidence for where registration opportunity exists, not as proof that registration was completed. Notification, application, and final registration are separate states.
- **Immunization or child-health registries**: Use for missed-opportunity hypotheses only when the touchpoint, age window, denominator, and facility catchment are explicit. High immunization coverage is not enough if registry linkage to civil registration is absent.

### Rejected

- **Standalone legal-identity strategy papers without source tables**: Reject for canonical comparison because they often summarize ambition, not measurable registration performance.
- **One-off NGO project reports claiming registration impact without a comparator dataset**: Reject when they do not preserve the measure family, the timing rule, or a checkable denominator.

## Required Properties

- Measure family: under-5 survey registration, certificate possession, or administrative live-birth completeness.
- Data year and time reference.
- Geographic grain and whether sub-national identifiers are preserved.
- Numerator and denominator definition.
- License, access conditions, and whether microdata require approval.
- Known mismatch against other measure families.
- Health-touchpoint relevance, if the source is being used to support service-linkage claims.

## Rejection Rule

A source is rejected for canonical comparison if the measure family, date, grain, or access conditions cannot be verified. Sources that are valid only for framing or only for one country should be listed as limited rather than silently generalized. Administrative and service data without clear denominator or catchment definitions may be used as context but not as proof of sub-national registration performance.

## Task Verdict

This inventory satisfies the scoped `source-inventory` task because it classifies more than six candidate source types into usable, limited, and rejected groups with explicit reasons covering:

- measure family
- timing reference
- geographic grain
- health-linkage relevance
- denominator and access constraints

It does **not** satisfy downstream tasks on country feasibility or missed-opportunity analysis. Those require country-specific source checks and should fail if they rely on these classes alone.
