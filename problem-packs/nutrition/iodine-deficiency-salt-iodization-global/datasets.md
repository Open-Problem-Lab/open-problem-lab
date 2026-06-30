# Dataset Inventory

## Candidate Sources

| Source                                   | Grain                                      | Current status                                  | Use                                                           |
| ---------------------------------------- | ------------------------------------------ | ----------------------------------------------- | ------------------------------------------------------------- |
| IGN Global Scorecard (2024)              | National                                   | Usable for country-level framing                | Country-by-country iodine status and salt iodization coverage |
| Andersson et al. 2012 global analysis    | National, modeled for missing countries    | Usable as historical baseline                   | Most recent global iodine status estimate (2011 data)         |
| DHS salt iodization testing modules      | Sub-national (cluster), national           | Usable with protocol caveats                    | Household salt iodization testing by cluster and region       |
| MICS salt iodization testing modules     | Sub-national (cluster), national           | Usable with protocol caveats                    | Household salt iodization testing by cluster and region       |
| National nutrition surveys (LMICs)       | Sub-national (regional/provincial)         | Limited — varies by country                     | Sub-national UIC and salt iodization coverage where conducted |
| WHO/UNICEF/ICCIDD 2014 guideline         | International standard                     | Usable as threshold framework                   | Iodization level standards and monitoring recommendations     |
| UNICEF SOWC reports                      | Regional, global                           | Usable for regional framing                     | Regional burden estimates and programmatic framing            |
| Small-scale salt producer studies        | Country-specific, limited geographic scope | Limited — few countries studied                 | Coverage among informal salt supply chains                    |
| National salt production and import data | National                                   | Limited — not publicly available for most LMICs | Iodized vs non-iodized salt supply at national level          |

## Required Dataset Properties

- Iodine status measurement method (median UIC, thyroglobulin, goiter rate by palpation or ultrasound).
- Population group surveyed (school-age children, pregnant women, lactating women, general population).
- UIC cutoff applied (WHO thresholds: less than 100 mcg/L for school-age children, less than 150 mcg/L for pregnant women).
- Salt iodization testing method (quantitative titration, rapid test kits, iodine content in ppm).
- Adequately iodized salt threshold (15 ppm or above, 15-40 ppm, or other).
- Geographic grain (national, regional, provincial, cluster).
- Survey year and temporal coverage.
- Sample size and sampling design.
- Coverage level measured (household, retail, production).
- Missingness patterns and representation of remote or inland areas.
- License or reuse permission.

## Rejection Rule

A data source is rejected for sub-national iodine status mapping if the measurement method, population group, UIC cutoff, geographic grain, or survey year cannot be verified. National-level iodine status estimates without sub-national breakdown may be listed as context but cannot anchor a sub-national coverage gap analysis. Salt iodization coverage data from surveys using qualitative test kits without quantitative validation may be retained as indicative but not as precise coverage estimates.
