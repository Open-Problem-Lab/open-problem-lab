# Dataset Inventory

## Candidate Sources

| Source                             | Grain             | Current status      | Use                                           |
| ---------------------------------- | ----------------- | ------------------- | --------------------------------------------- |
| IPCC AR6 SLR projections           | Regional, decadal | Usable              | SLR projection baseline for downscaling       |
| NASA SRTM and CoastalDEM elevation | 30m, static       | Usable with caveats | Coastal elevation for inundation mapping      |
| WorldPop SIDS population data      | 100m, annual      | Usable              | Population at risk estimation                 |
| GEBCO bathymetry                   | 15 arc-second     | Usable              | Nearshore bathymetry for storm-surge modeling |
| GMSL satellite altimetry           | Global, monthly   | Usable              | Observed SLR trend verification               |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and coordinate reference system.
- Elevation datum and vertical accuracy.
- SLR projection scenario and model ensemble.
- Population estimate year and methodology.
- License or reuse permission.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, vertical accuracy, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
