# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| MODIS aerosol optical depth           | 1km, daily                     | Usable, bright-surface accuracy reduced  | Dust-plume detection and AOD-based exposure mapping      |
| CALIOP lidar dust profiles            | 333m vertical, along-track     | Usable, limited spatial coverage         | Dust-altitude profiling for AOD-to-PM10 transfer         |
| CAMS dust-forecast models             | 40 km, 3-hourly               | Usable, publicly available               | Dust-exposure forecasting and historical reanalysis      |
| WHO air-quality database              | Station-point, variable        | Sparse in LMIC arid regions              | Ground PM10 monitor data where available                 |
| National air-quality monitoring       | Station-point, variable        | Variable, LMIC-limited                   | Supplemental ground monitors in arid LMIC countries      |
| Dust-contaminant characterization     | Source-region, variable        | Sparse, publication-dependent            | Dust-source toxicology and contaminant profile data      |
| Respiratory health-utilization data   | Facility, daily/weekly         | Variable by country                      | Respiratory hospitalization and ED visit outcomes        |
| Land-degradation and soil-moisture    | 250m-1km, variable             | Usable, publicly available               | Dust-source area identification and land-degradation context |
| ERA5 meteorological data              | 0.25 deg, hourly               | Usable, publicly available               | Wind speed, boundary-layer height for AOD-to-PM10 transfer |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- AOD retrieval accuracy over bright desert surfaces — explicitly document limitations.
- Dust-source toxicology data availability.
- Access conditions and license.
- LMIC arid-region monitor coverage assessment.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., MODIS AOD reduced accuracy over bright surfaces, monitor sparsity) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
