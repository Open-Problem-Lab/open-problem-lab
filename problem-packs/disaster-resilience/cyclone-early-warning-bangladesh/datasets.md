# Dataset Inventory

## Candidate Sources

| Source                          | Grain                        | Current status             | Use                                            |
| ------------------------------- | ---------------------------- | -------------------------- | ---------------------------------------------- |
| IBTrACS cyclone track archive   | Per storm, 6-hourly          | Usable, publicly available | Historical cyclone track verification baseline |
| JTWC best track data            | Per storm, 6-hourly          | Usable                     | Operational track and intensity records        |
| BMD warning bulletins           | District, per event          | Restricted access          | Operational warning content analysis           |
| WorldPop population data        | 100m, annual                 | Usable                     | Coastal population exposure estimates          |
| OpenStreetMap shelter locations | Point, community-contributed | Usable with gaps           | Shelter location and capacity analysis         |
| GEBCO bathymetry                | 15 arc-second                | Usable                     | Storm surge model input                        |

## Required Dataset Properties

- Date range.
- Geographic grain.
- Storm identifier and observation time.
- Intensity metric and units.
- Population estimate year and methodology.
- Shelter capacity and condition information.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
