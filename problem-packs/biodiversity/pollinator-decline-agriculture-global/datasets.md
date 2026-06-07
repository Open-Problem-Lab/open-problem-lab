# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| MapSPAM crop-production maps          | ~10km, global                  | Usable, publicly available               | Crop-pollination dependence mapping by sub-national unit |
| Sentinel-2 land-cover change          | 10m, 2015-present             | Usable, publicly available               | Habitat fragmentation and agricultural intensification   |
| Landsat land-cover change             | 30m, 1985-present             | Usable, publicly available               | Long-term habitat trend analysis                         |
| GBIF pollinator occurrence data       | Point, variable                | Usable but LMIC-sparse                   | Pollinator species occurrence where available            |
| iNaturalist observations              | Point, citizen-science         | Limited, spatially biased                | Opportunistic pollinator occurrence in LMIC regions      |
| FAO pesticide-use statistics          | Country, annual                | Usable, coarse                           | National pesticide-exposure proxy                        |
| National agricultural census data     | Sub-national, periodic         | Variable by country                      | Crop-area and production validation                      |
| Floral resource calendar data         | Regional, seasonal             | Sparse, LMIC-limited                     | Pollinator forage availability context                   |
| Managed honeybee colony statistics    | Country, variable              | Variable, LMIC-limited                   | Managed vs. wild pollinator interaction context           |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Taxonomic scope (for pollinator data) or crop classification (for production data).
- Access conditions and license.
- LMIC coverage assessment — explicitly document where data is absent.
- Known spatial and taxonomic biases.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known LMIC gaps (e.g., GBIF pollinator data) may be listed as limited with explicit gap documentation. Rejected datasets may still be listed as context.
