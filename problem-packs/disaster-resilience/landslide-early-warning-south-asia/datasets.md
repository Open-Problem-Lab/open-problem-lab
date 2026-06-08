# Dataset Inventory

## Candidate Sources

| Source                                  | Grain                   | Current status                               | Use                                                       |
| --------------------------------------- | ----------------------- | -------------------------------------------- | --------------------------------------------------------- |
| Sentinel-1 InSAR deformation data       | 5-20m, 6-12 day revisit | Usable, terrain-limited                      | Ground deformation detection for slope-failure precursors |
| NASA Global Landslide Hazard Assessment | 1km, global             | Usable, limited Himalayan validation         | Rainfall-triggered landslide susceptibility mapping       |
| GPM satellite precipitation             | 0.1 deg, 30-min         | Usable, mountainous-terrain accuracy reduced | Rainfall-trigger threshold estimation                     |
| CHIRPS rainfall reanalysis              | 0.05 deg, daily         | Usable, publicly available                   | Historical rainfall-trigger analysis                      |
| Global Landslide Database               | Point, event-based      | Usable, undercounts remote areas             | Landslide inventory for model validation                  |
| National landslide inventories          | Point/polygon, variable | Variable by country                          | Local landslide records for validation                    |
| WorldPop gridded population             | 100m, gridded           | Usable, publicly available                   | Population exposure estimation                            |
| Road network and infrastructure data    | Line/polygon, variable  | Variable by country                          | Critical infrastructure exposure assessment               |
| Nepal DHM landslide pilot data          | District, operational   | Limited, pilot coverage                      | Operational early-warning system context                  |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Terrain-specific validation — explicitly document InSAR performance in steep/forested terrain and rainfall accuracy in mountainous regions.
- Access conditions and license.
- Himalayan country coverage assessment.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known terrain limitations (e.g., InSAR coherence loss in forests, rainfall accuracy in mountains) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
