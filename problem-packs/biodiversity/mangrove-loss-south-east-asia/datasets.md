# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| Global Mangrove Watch (GMW)           | 25m, annual, 1996-present      | Usable, publicly available               | Mangrove-extent change detection and deforestation mapping |
| Landsat archive                       | 30m, 1984-present              | Usable, publicly available               | Pre-1996 mangrove baseline estimation                    |
| Sentinel-2 imagery                    | 10m, 2015-present              | Usable, publicly available               | High-resolution mangrove mapping and validation          |
| WorldPop coastal population           | 100m, gridded                  | Usable, publicly available               | Population at risk from coastal-protection loss          |
| GEBCO bathymetry                      | ~500m, global                  | Usable, publicly available               | Storm-surge model bathymetry input                       |
| FAO aquaculture production data       | Country/province, annual       | Usable, coarse grain                     | Aquaculture-expansion driver context                     |
| National land-use classification      | Variable by country            | Variable, access varies                  | Deforestation driver attribution                         |
| Storm-surge model output (e.g., Delft)| Variable, site-specific        | Limited, requires calibration            | Coastal flood risk and protection-loss modeling          |
| Mangrove species composition maps     | Variable, incomplete coverage  | Limited, LMIC-sparse                     | Species-specific attenuation relationship context        |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Access conditions and license.
- Known detection limitations — particularly GMW resolution for narrow fringing mangroves.
- Bathymetry data quality for storm-surge model input.
- Driver-classification data availability and accuracy.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., GMW narrow-fringe detection, bathymetry resolution) may be listed as limited with explicit gap documentation. Rejected datasets may still be listed as context.
