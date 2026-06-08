# Dataset Inventory

## Candidate Sources

| Source                            | Grain                          | Current status                           | Use                                                      |
| --------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| NOAA HMS smoke plumes             | Daily polygons, ~1km, 2006-now | Usable, publicly available               | Smoke-presence indicator and spatial extent mapping      |
| GEOS-Chem PM2.5 composition       | 0.25 deg, daily                | Usable, publicly available               | Smoke-specific black carbon and organic carbon fractions |
| MODIS AOD retrievals              | 1km, daily, 2000-present       | Usable, cloud gaps                       | Aerosol optical depth for smoke exposure estimation      |
| EPA AQS ground monitors           | Point, hourly/daily            | Usable, dense in US                      | Ground-truth PM2.5 validation in smoke events            |
| PurpleAir low-cost sensors        | Point, 10-min                  | Usable with calibration, citizen-science | Supplemental ground validation during smoke events       |
| HMIS respiratory ED data          | Facility, daily/weekly         | Variable by country                      | Respiratory emergency visit outcomes                     |
| Global wildfire emissions (GFED)  | 0.25 deg, monthly              | Usable, publicly available               | Fire-emissions input for chemical-transport models       |
| ERA5 meteorological data          | 0.25 deg, hourly               | Usable, publicly available               | Temperature, humidity, and boundary-layer confounds      |
| LMIC air-quality monitor networks | Point, variable                | Sparse, access varies by country         | Ground validation in fire-prone LMIC regions             |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Measurement methodology and known detection limits.
- Access conditions and license.
- Smoke-detection gaps (cloud cover, nighttime, bright surfaces).
- Known changes in monitoring network configuration over time.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known systematic gaps (e.g., HMS missing smoke under clouds, LMIC monitor sparsity) may be listed as limited with explicit gap documentation. Rejected datasets may still be listed as context.
