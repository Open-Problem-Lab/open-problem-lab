# Dataset Inventory

## Candidate Sources

| Source                                          | Grain                        | Current status                     | Use                                                   |
| ----------------------------------------------- | ---------------------------- | ---------------------------------- | ----------------------------------------------------- |
| National agricultural survey fertilizer modules | Household/district, periodic | Variable by country                | Sub-national fertilizer-use rates and access data     |
| AfSIS soil nutrient data                        | Point/transect, interpolated | Usable, research-site concentrated | Soil nutrient status and depletion assessment         |
| FAO fertilizer statistics                       | Country, annual              | Usable, publicly available         | National fertilizer consumption and import data       |
| Fertilizer price surveys                        | Market-point, variable       | Sparse, country-specific           | Distribution-infrastructure and price-markup analysis |
| Transport-network and market data               | Network, variable            | Variable by country                | Distribution-infrastructure barrier mapping           |
| Fertilizer-response trial databases             | Site, crop-specific          | Usable, research-station based     | Soil-specific response rate documentation             |
| Soil health program documentation               | Program, variable            | Variable by country                | Soil-specific recommendation and intervention context |
| Crop-yield survey data                          | Household/district, periodic | Variable by country                | Nutrient-balance and response-validation context      |
| Satellite vegetation indices                    | 250m-1km, temporal           | Usable, publicly available         | Crop-condition proxy for soil-fertility context       |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Fertilizer-use data granularity — explicitly document whether national aggregate or sub-national.
- Soil-nutrient data coverage — document AfSIS interpolation limitations.
- Distribution-infrastructure data availability.
- Access conditions and license.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., AfSIS research-site concentration, sparse price surveys) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
