# Dataset Inventory

## Candidate Sources

| Source                                | Grain                       | Current status                           | Use                                                         |
| ------------------------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| MODIS fire detection (Terra/Aqua)     | 1km, 2000-present           | Usable, publicly available               | Fire-count spatial distribution during burning season       |
| VIIRS fire detection (SNPP/NOAA-20)   | 375m, 2012-present          | Usable, publicly available               | Improved fire detection in fragmented agricultural areas    |
| GFED emissions database               | 0.25 deg, monthly           | Usable, publicly available               | PM2.5 and black carbon emissions from agricultural burning  |
| CPCB ambient air quality data         | Station-point, daily/hourly | Usable but sparse in rural burning areas | Ground-truth PM2.5 validation during burning season         |
| CHIRPS rainfall reanalysis            | 0.05 deg, 1981-present      | Usable, publicly available               | Meteorological context for dispersion and fire weather      |
| ERA5-Land meteorological data         | 0.1 deg, hourly             | Usable, publicly available               | Wind, temperature, and boundary-layer height for dispersion |
| IARI crop-calendar data               | District, seasonal          | Usable, limited documentation            | Rice harvest timing for burning-window identification       |
| State Pollution Control Board data    | Station-point, variable     | Limited, access varies by state          | Additional PM2.5 monitors beyond CPCB network               |
| Satellite-derived PM2.5 (e.g., SAFAR) | 1-10 km, daily              | Usable, limited validation               | Spatial PM2.5 estimates where ground monitors absent        |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Measurement methodology and known detection limits.
- Access conditions and license.
- Missingness profile, particularly cloud-cover gaps for satellite products.
- Known changes in monitoring network configuration.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known systematic gaps (e.g., MODIS missing small fires) may be listed as limited with explicit gap documentation. Rejected datasets may still be listed as context.
