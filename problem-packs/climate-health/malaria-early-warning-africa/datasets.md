# Dataset Inventory

## Candidate Sources

| Source                         | Grain                  | Current status                    | Use                                              |
| ------------------------------ | ---------------------- | --------------------------------- | ------------------------------------------------ |
| WHO World Malaria Report data  | Country                | Usable for burden framing         | Global burden and trend context                  |
| CHIRPS rainfall reanalysis     | 0.05 deg, 1981-present | Usable, publicly available        | Rainfall anomaly derivation at district scale    |
| ERA5-Land temperature          | 0.1 deg, 1950-present  | Usable, publicly available        | Temperature anomaly derivation at district scale |
| NDVI vegetation indices        | 250m-1km, 2000-present | Usable, publicly available        | Vegetation greenness as mosquito habitat proxy   |
| DHIS2 health surveillance data | District-month         | Variable by country, requires MOU | Case counts and intervention coverage            |

## Required Dataset Properties

- Date range.
- Geographic grain.
- Case definition.
- Reporting lag.
- Missingness.
- License or reuse permission.
- Denominator source.
- Known changes in administrative boundaries.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
