# Dataset Inventory

## Candidate Sources

| Source                             | Grain                         | Current status                           | Use                                                             |
| ---------------------------------- | ----------------------------- | ---------------------------------------- | --------------------------------------------------------------- |
| MODIS NDVI (MOD13Q1)               | 250m, 16-day, 2000-present    | Usable, publicly available               | Grassland productivity trend analysis and degradation detection |
| Rangeland Analysis Platform        | 30m, annual, 1986-present     | Usable, limited Central Asian validation | Fractional vegetation cover change mapping                      |
| CHIRPS rainfall reanalysis         | 0.05 deg, daily, 1981-present | Usable, publicly available               | Precipitation normalization for climate disambiguation          |
| ERA5-Land temperature and moisture | 0.1 deg, hourly               | Usable, publicly available               | Climate context for drought and dzud analysis                   |
| Mongolia dzud event database       | Province, seasonal            | Usable, government source                | Extreme weather event classification and livestock mortality    |
| National livestock census data     | Province, periodic            | Variable by country, irregular           | Livestock population and pastoral livelihood indicators         |
| FAO grassland assessment           | Country, periodic             | Usable, coarse grain                     | Global degradation baseline and regional comparison             |
| Livestock market price data        | Market-point, weekly/monthly  | Variable, sparse                         | Pastoral livelihood proxy indicator                             |
| Household survey data (LSMS, MICS) | Cluster, periodic             | Sparse, pastoralist coverage limited     | Direct livelihood outcome measurement where available           |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Access conditions and license.
- Known data gaps — particularly livestock census irregularity and pastoralist survey absence across Central Asian countries.
- Climate-event classification methodology (for dzud, drought).

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known sparsity (e.g., livestock census outside Mongolia) may be listed as limited with explicit gap documentation. Rejected datasets may still be listed as context.
