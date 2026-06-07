# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| Census of India migration data        | District, decadal              | Usable, definition: place of birth       | Internal migration flows for India                       |
| Bangladesh Bureau of Statistics census| District, decadal              | Usable, definition: last residence       | Internal migration flows for Bangladesh                  |
| Nepal CBS census migration            | District, decadal              | Usable, definition: duration of residence| Internal migration flows for Nepal                       |
| MODIS NDVI vegetation trends          | 250m, 16-day                   | Usable, publicly available               | Agricultural land condition and vegetation trends        |
| CHIRPS rainfall reanalysis            | 0.05 deg, daily                | Usable, publicly available               | Rainfall anomalies and drought indicators                |
| Global Flood Monitor                  | 0.1 deg, daily                 | Usable, publicly available               | Flood frequency and inundation mapping                   |
| NSS employment and income surveys     | District, quinquennial         | Usable, publicly available               | Economic confound controls for India                     |
| WorldPop gridded population           | 100m, gridded                  | Usable, publicly available               | Population denominators and urbanization context         |
| IOM displacement tracking             | Site-point, monthly            | Limited, urban-focused                   | Short-term displacement data where available             |

## Required Dataset Properties

- Date range and temporal resolution.
- Migration definition — explicitly document which definition each census uses and harmonization approach.
- Environmental indicator source, resolution, and temporal coverage.
- Economic confound variable availability.
- Cross-country comparability assessment.
- Access conditions and license.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known comparability limitations (e.g., different migration definitions across censuses) may be listed as limited with explicit harmonization documentation. Rejected datasets may still be listed as context.
