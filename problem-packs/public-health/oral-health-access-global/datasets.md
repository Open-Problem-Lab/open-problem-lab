# Dataset Inventory

## Candidate Sources

| Source                                          | Grain          | Status         | Use                                                          | Reason for classification                                                                                                                                                                                      |
| ----------------------------------------------- | -------------- | -------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WHO Global Oral Health Status Report 2022       | Country/global | Usable         | Disease burden, health-system integration, workforce framing | Published WHO report with country-level oral health burden and workforce framing. Country-level only; no sub-national service access or dentist distribution data.                                             |
| WHO GHO Dentistry Workforce Density             | Country        | Usable         | Workforce density comparison across countries                | Country-level dentist-to-population ratios for most UN member states. Self-reported by ministries; no sub-national data for any LMIC. Useful for cross-country comparison, not for sub-national gap mapping.   |
| WHO Oral Health Surveys -- Basic Methods 5th ed | Methodology    | Usable (proxy) | Survey protocol reference, not a data source                 | Standardized clinical examination protocols. Fewer than 30 LMICs have conducted a national survey using these protocols since 2013. Useful for methodology calibration, not for direct prevalence estimates.   |
| WHO oral health fact sheet 2025                 | Global framing | Limited        | Current burden and service-availability framing              | Current WHO fact sheet estimates nearly 3.7 billion people affected and states that most LMICs lack sufficient services. It is not a dataset and cannot identify country-level or sub-national access gaps.    |
| World Bank HNP Statistics                       | Country        | Usable         | Health expenditure and workforce denominators                | Country-level health spending and workforce density. No oral-health-specific indicators. Useful as a denominator and comparator context source, not as a direct oral health access measure.                    |
| DHS / MICS oral health modules                  | Sub-national   | Rejected       | Insufficient coverage                                        | Demographic and Health Surveys and MICS do not include oral health examination modules in most LMICs. Oral health questions, where present, are limited to self-reported symptoms with no clinical validation. |

## Required Dataset Properties

- Date range.
- Geographic grain.
- Case definition (clinical criteria or self-report).
- Reporting lag.
- Missingness.
- License or reuse permission.
- Denominator source.
- Known changes in administrative boundaries.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.

## Task Completion Note

The `source-inventory` task is ready for domain review. Six candidate source families are classified with explicit reasons. The next useful task is not gap mapping; it is a country-by-country extraction of oral health survey dates, dentist density source years, and whether any public source preserves sub-national service-access or workforce distribution.
