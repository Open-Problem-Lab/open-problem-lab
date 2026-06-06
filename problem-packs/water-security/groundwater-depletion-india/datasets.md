# Dataset Inventory

## Candidate Sources

| Source                            | Grain                          | Current status                   | Use                                                      |
| --------------------------------- | ------------------------------ | -------------------------------- | -------------------------------------------------------- |
| GRACE/GRACE-FO mascon solutions   | ~300 km, monthly, 2002-present | Usable, publicly available       | Basin-scale TWS change and groundwater signal separation |
| CGWB assessment unit data         | Assessment unit, annual        | Usable with caveats              | Official extraction, recharge, and stage-of-development  |
| IndiaWRIS well monitoring         | Well level, variable temporal  | Publicly available, inconsistent | Local validation of remote sensing signals               |
| Agricultural census district data | District, quinquennial         | Usable                           | Irrigated area, crop choices, water sources              |
| ERA5-Land precipitation           | 0.1 deg, 1950-present          | Usable, publicly available       | Recharge seasonality context                             |

## Required Dataset Properties

- Date range.
- Geographic grain.
- Well depth, water level, or TWS anomaly units.
- Missingness including dry-season gaps and sensor dropout.
- License or reuse permission.
- Known aquifer boundary definitions.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
