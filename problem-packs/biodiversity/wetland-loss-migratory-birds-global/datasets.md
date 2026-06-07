# Dataset Inventory

## Candidate Sources

| Source                               | Grain                          | Current status                           | Use                                                      |
| ------------------------------------ | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| JRC Global Surface Water Explorer    | 30m, monthly, 1984-present     | Usable, publicly available               | Wetland-change detection at stopover sites               |
| International Waterbird Census       | Site-point, annual counts      | Usable, European-biased                  | Waterbird population trends at monitored sites           |
| eBird citizen-science observations   | Site-point, variable           | Limited, spatially biased                | Supplemental bird occurrence data where IWC absent       |
| Ramsar Sites Information Service     | Site polygon, updated          | Usable, publicly available               | Protected wetland boundaries and site documentation      |
| Global Invasive Species Database     | Point, updated                 | Usable, publicly available               | Invasive species threat context at stopover sites        |
| FAO aquaculture production data      | Country/province, annual       | Usable, coarse grain                     | Coastal wetland conversion driver context                |
| Copernicus land-cover change         | 100m, annual, 2015-present     | Usable, publicly available               | Land-use conversion context for wetland loss drivers     |
| Flyway boundary data (EAAFP, AEWA)  | Polygon, updated               | Usable, publicly available               | Flyway-scale spatial framework                           |
| National bird atlas data             | Variable by country            | Variable, LMIC-sparse                    | Species distribution context where available             |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Taxonomic scope (for bird data) or wetland-type classification (for satellite data).
- Access conditions and license.
- Flyway-coverage assessment — explicitly document monitoring asymmetry between European and Asian/African flyways.
- Known spatial and taxonomic biases.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known flyway biases (e.g., IWC European concentration) may be listed as limited with explicit gap documentation. Rejected datasets may still be listed as context.
