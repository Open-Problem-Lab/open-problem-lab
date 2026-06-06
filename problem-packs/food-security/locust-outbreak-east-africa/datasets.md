# Dataset Inventory

## Candidate Sources

| Source                     | Grain                   | Current status             | Use                                             |
| -------------------------- | ----------------------- | -------------------------- | ----------------------------------------------- |
| MODIS NDVI                 | 250m-1km, 2000-present  | Usable, publicly available | Vegetation greenness as breeding habitat proxy  |
| CHIRPS rainfall            | 0.05 deg, 1981-present  | Usable, publicly available | Rainfall anomaly for breeding trigger detection |
| SMAP soil moisture         | 9km, 2015-present       | Usable, publicly available | Soil moisture as egg-laying condition indicator |
| ERA5 wind fields           | 0.25 deg, 1950-present  | Usable, publicly available | Swarm trajectory modeling at regional scale     |
| FAO Locust Watch bulletins | Country/region, monthly | Usable as ground truth     | Field-reported swarm location and timing        |

## Required Dataset Properties

- Date range.
- Geographic grain.
- Temporal resolution matching breeding cycle timing.
- Missingness including cloud-cover gaps in optical data.
- License or reuse permission.
- Known field-report coverage gaps in conflict zones.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
