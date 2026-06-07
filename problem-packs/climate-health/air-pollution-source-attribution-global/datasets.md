# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| Published source-apportionment studies| City-point, variable           | Sparse in LMIC megacities               | Source-contribution estimates for cities with studies     |
| MODIS AOD and surface PM2.5           | 1km, daily                     | Usable, 20-50% LMIC uncertainty          | Satellite-derived PM2.5 spatial distribution             |
| TROPOMI NO2 and aerosol products      | 5.5 km, daily                  | Usable, publicly available               | High-resolution pollution mapping for source indicators  |
| WHO air-quality database              | Station-point, variable        | Sparse in LMIC megacities               | Ground PM2.5 and PM10 monitor data                       |
| National air-quality monitoring       | Station-point, variable        | Variable, LMIC-limited                   | Supplemental ground monitors in LMIC megacities          |
| Emission inventories (EDGAR, CEDS)    | 0.1 deg, annual                | Usable, LMIC uncertainty higher          | Source-sector emission estimates for chemical transport models |
| Chemical transport model output       | Variable, model-dependent      | Usable, emission inventory dependent     | Source-attribution from atmospheric modeling             |
| Speciated PM2.5 monitoring            | Station-point, very sparse     | Very sparse in LMIC cities               | Receptor model (PMF) source-apportionment input          |
| Household energy-use survey data      | Household, sub-national        | Variable by country                      | Household solid-fuel combustion contribution estimation  |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Apportionment-methodology documentation — explicitly state which method is used.
- Monitor-density-to-population ratio for LMIC megacities.
- Access conditions and license.
- LMIC megacity coverage assessment.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., satellite PM2.5 20-50% uncertainty in LMIC cities, sparse source-apportionment studies) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
