# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| ERA5-Land temperature reanalysis      | 0.1 deg, daily, 1950-present   | Usable, publicly available               | Cold-spell frequency and intensity mapping               |
| Ground weather-station data           | Point, daily                   | Sparse in LMIC high-altitude regions     | ERA5-Land validation where available                     |
| DHS housing-quality modules           | Household, sub-national        | Usable, publicly available               | Cold-exposure vulnerability proxies                      |
| Census housing and energy data        | Household, sub-national        | Variable by country                      | Housing-quality and heating-fuel indicators              |
| Gasparrini et al. 2015 temperature-mortality data | Location, daily     | Usable, limited LMIC coverage           | Temperature-mortality relationship reference              |
| National cold-weather mortality reports| Country, variable              | Variable, LMIC-sparse                    | Cold-mortality context where available                   |
| Digital elevation models (SRTM)       | 30m, static                    | Usable, publicly available               | Altitude context for high-elevation cold exposure        |
| Energy-poverty survey data            | Household, variable            | Variable by country                      | Heating-fuel affordability and availability              |
| Housing construction material data    | Household, variable            | Variable by country                      | Thermal insulation proxy indicators                      |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- High-altitude validation status — explicitly document where ERA5-Land has not been validated against ground stations.
- Housing-quality proxy validation — document correlation with indoor temperature where available.
- Access conditions and license.
- LMIC coverage assessment.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., ERA5-Land unvalidated in high-altitude LMIC regions, housing proxies not correlated with indoor temperature) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
