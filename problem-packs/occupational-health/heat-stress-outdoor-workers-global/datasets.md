# Dataset Inventory

## Candidate Sources

| Source                              | Grain                                  | Current status                  | Use                                                        |
| ----------------------------------- | -------------------------------------- | ------------------------------- | ---------------------------------------------------------- |
| ILO climate-labor report (2024)     | Global / country income group          | Usable for framing              | Exposure scale, DALY estimates, LMIC-vs-HIC gap            |
| ILOSTAT employment-by-industry      | National / some sub-national           | Usable with coverage caveat     | Worker population denominators by industry and sex         |
| ERA5 reanalysis (ECMWF)             | 0.25-degree grid, hourly, 1940-present | Usable for WBGT derivation      | Gridded temperature, humidity, radiation for WBGT calc     |
| ISO 7243:2017 WBGT standard         | International standard                 | Usable as threshold framework   | Work-rest regime thresholds by metabolic rate              |
| Xu et al. 2021 meta-analysis        | Multi-country pooled                   | Usable as effect-size reference | Heat-injury dose-response with heterogeneity documentation |
| Dunne et al. 2013 labor capacity    | Regional / global grid                 | Usable as projection context    | Future labor capacity loss under climate scenarios         |
| National labor force surveys (LMIC) | National, some sub-national            | Limited — informal sector gaps  | Worker population by industry, employment status           |
| Occupational injury registries      | National, variable coverage            | Limited — most LMICs absent     | Heat-related injury counts where surveillance exists       |

## Required Dataset Properties

- Exposure metric (WBGT, ambient temperature, heat index, apparent temperature).
- Data source type (ground station, reanalysis grid, satellite-derived).
- Temporal resolution (hourly, daily, monthly) and coverage period.
- Geographic grain (grid cell, district, province).
- Worker population denominator by industry and employment status (formal/informal).
- Health outcome type (injury, illness, productivity loss, mortality).
- Outcome data source (surveillance, compensation claims, household survey, study).
- Missingness patterns and representation of peak heat season.
- License or reuse permission.

## Rejection Rule

A data source is rejected for sub-national exposure-outcome mapping if exposure metric, temporal coverage, worker population denominator, or geographic grain cannot be verified. National-level labor force statistics without industry or sub-national breakdown may be listed as context but cannot anchor a district-level exposure estimate. Occupational injury data from countries without systematic surveillance is rejected as a burden estimate, though it may be retained as evidence of surveillance gaps.
