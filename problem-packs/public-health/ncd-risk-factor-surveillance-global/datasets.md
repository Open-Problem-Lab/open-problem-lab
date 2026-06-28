# Dataset Inventory

## Candidate Sources

| Source                             | Grain                 | Status   | Use                                               | Reason for classification                                                                                                                                                                                                    |
| ---------------------------------- | --------------------- | -------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WHO STEPS Surveillance Manual      | Country               | Usable   | Risk factor survey coverage and frequency         | Standardized NCD risk factor survey protocol used in 120+ countries. Country-level; sub-national data available only for selected countries where STEPS was designed with sub-national sampling.                             |
| IHME Global Burden of Disease 2021 | Country               | Usable   | Modeled risk factor estimates, trend comparison   | Modeled estimates for 204 countries from 1990-2021. Sub-national for only a subset. Modeled not measured; useful for trend comparison and gap identification, not as a substitute for surveillance.                          |
| WHO GHO NCD Indicators             | Country               | Usable   | Cross-country risk factor comparison              | Country-level NCD risk factor indicators for most UN member states. Heterogeneous underlying sources. No sub-national data for any LIC. Useful for cross-country comparison, not for sub-national gap mapping.               |
| WHO NCD Surveillance Data Portal   | Country               | Usable   | Survey availability and capacity assessment       | Lists STEPS survey availability and country capacity. Does not provide downloadable sub-national data. Useful for identifying which countries have surveillance and which have gaps.                                         |
| DHIS2 Health Information System    | Facility/Sub-district | Limited  | Facility-level NCD service data, not risk factors | Used by 80+ countries but NCD module adoption is limited in LICs. Captures service data, not population risk factor surveys. Complementary to STEPS, not a replacement. Useful where implemented; not universally available. |
| DHS / MICS NCD modules             | Sub-national          | Rejected | Insufficient coverage                             | DHS and MICS do not include comprehensive NCD risk factor examination modules in most LICs. Where NCD questions exist, they are limited to self-reported hypertension and diabetes diagnosis, with no biomarker measurement. |

## Required Dataset Properties

- Date range.
- Geographic grain.
- Risk factor definition (measured vs self-reported).
- Survey methodology (STEPS, national health survey, modeled estimate).
- Missingness.
- License or reuse permission.
- Denominator source.
- Known changes in survey methodology over time.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
