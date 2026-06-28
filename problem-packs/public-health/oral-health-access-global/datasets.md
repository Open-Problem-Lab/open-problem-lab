# Dataset Inventory

## Candidate Sources

| Source                                          | Grain          | Status         | Use                                           | Reason for classification                                                                                                                                                                                                |
| ----------------------------------------------- | -------------- | -------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| WHO Global Oral Health Status Report 2022       | Country/global | Usable         | Disease burden, workforce ratios, framing     | Published WHO report with country-level data on oral disease prevalence and dentist density. Country-level only; no sub-national breakdowns.                                                                             |
| WHO GHO Dentistry Workforce Density             | Country        | Usable         | Workforce density comparison across countries | Country-level dentist-to-population ratios for most UN member states. Self-reported by ministries; no sub-national data for any LMIC. Useful for cross-country comparison, not for sub-national gap mapping.             |
| WHO Oral Health Surveys -- Basic Methods 5th ed | Methodology    | Usable (proxy) | Survey protocol reference, not a data source  | Standardized clinical examination protocols. Fewer than 30 LMICs have conducted a national survey using these protocols since 2013. Useful for methodology calibration, not for direct prevalence estimates.             |
| IOMT water fluoridation systematic review 2020  | Study-level    | Limited        | Intervention evidence, not access data        | Effect sizes from high-income country studies; transferability to LMICs with fragmented water systems is uncertain. Does not provide access or workforce data. Rejected as a source for gap mapping; usable for context. |
| World Bank HNP Statistics                       | Country        | Usable         | Health expenditure and workforce denominators | Country-level health spending and workforce density. No oral-health-specific indicators. Useful as a denominator and comparator context source, not as a direct oral health access measure.                              |
| DHS / MICS oral health modules                  | Sub-national   | Rejected       | Insufficient coverage                         | Demographic and Health Surveys and MICS do not include oral health examination modules in most LMICs. Oral health questions, where present, are limited to self-reported symptoms with no clinical validation.           |

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
