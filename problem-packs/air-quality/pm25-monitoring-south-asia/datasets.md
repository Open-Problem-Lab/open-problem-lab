# Dataset Inventory

## Candidate Sources

| Source                             | Grain             | Current status     | Use                                                 |
| ---------------------------------- | ----------------- | ------------------ | --------------------------------------------------- |
| CPCB continuous monitoring         | Station, hourly   | Usable, sparse     | Ground-truth PM2.5 reference measurements           |
| OpenAQ platform                    | Station, variable | Usable, aggregated | Multi-country ground monitor data access            |
| State of Global Air PM2.5 surfaces | 0.01 deg, annual  | Usable             | Satellite-derived PM2.5 for unmonitored areas       |
| Sentinel-5P TROPOMI                | ~5.5 km, daily    | Usable             | Aerosol and NO2 column for complementary monitoring |
| WorldPop population data           | 100m, annual      | Usable             | Population-at-risk denominator                      |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and coordinate reference system.
- PM2.5 measurement method including reference-grade, low-cost, or satellite-derived.
- Quality assurance and calibration status.
- License or reuse permission.

## Rejection Rule

A dataset is rejected for canonical modeling if measurement method, date range, calibration, or license cannot be verified. Rejected datasets may still be listed as context.
