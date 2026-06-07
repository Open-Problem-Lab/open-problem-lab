# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| Landsat thermal-infrared LST          | 30-100m, 16-day, 1984-present  | Usable, publicly available               | Intra-urban heat-island mapping and green-space cooling  |
| MODIS LST                             | 1km, daily                     | Usable, publicly available               | Temporal heat-island pattern analysis                    |
| NDVI vegetation indices (Landsat/S2)  | 10-30m, variable               | Usable, publicly available               | Green-space density and vegetation-type classification   |
| WorldPop gridded population           | 100m, gridded                  | Usable, publicly available               | Population exposure and vulnerability estimation         |
| Informal settlement boundary maps     | Variable by city               | Variable, LMIC coverage improving        | Informal-settlement vulnerability documentation          |
| Urban tree canopy products            | Variable, city-specific        | Variable, LMIC-limited                   | Green-space-type differentiation                        |
| Ground weather-station data           | Point, hourly/daily            | Sparse in LMIC cities                    | LST-to-air-temperature validation                        |
| Municipal green-space inventory       | Polygon, variable              | Variable, LMIC-limited                   | Green-space-type and irrigation-status documentation     |
| Water-scarcity and irrigation data    | City/sub-national, variable    | Variable, LMIC-limited                   | Irrigation-feasibility and cooling-constraint assessment |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- LST-to-air-temperature validation status for the specific climate zone.
- Green-space-type differentiation capability.
- Access conditions and license.
- LMIC city coverage assessment — explicitly document where ground validation is absent.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., LST-to-air-temperature transfer uncalibrated for tropical cities) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
