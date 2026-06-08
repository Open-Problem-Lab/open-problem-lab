# Dataset Inventory

## Candidate Sources

| Source                            | Grain                   | Current status                    | Use                                                     |
| --------------------------------- | ----------------------- | --------------------------------- | ------------------------------------------------------- |
| Landsat impervious-surface maps   | 30m, multi-temporal     | Usable, publicly available        | Surface-sealing detection and change-over-time analysis |
| Sentinel-1 SAR flood-extent maps  | 10m, event-based        | Usable, urban-canyon limitations  | Historical flood-extent mapping and risk-map validation |
| CHIRPS rainfall reanalysis        | 0.05 deg, daily         | Usable, publicly available        | Extreme rainfall frequency and intensity analysis       |
| GPM-IMERG satellite precipitation | 0.1 deg, 30-min         | Usable, publicly available        | Sub-daily rainfall intensity for flash-flood context    |
| OpenStreetMap drainage network    | Line, variable          | Variable, city-dependent          | Drainage infrastructure location where mapped           |
| Municipal drainage maps           | Variable, rarely public | Sparse, often outdated            | Drainage capacity assessment where available            |
| WorldPop gridded population       | 100m, gridded           | Usable, publicly available        | Population exposure and informal-settlement context     |
| Informal settlement boundary maps | Polygon, variable       | Variable, often unmapped          | Informal-settlement flood-exposure documentation        |
| Historical flood event reports    | Event, city-specific    | Variable, documentation-dependent | Flood-risk map validation against observed events       |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Drainage-data availability — explicitly document where drainage infrastructure data is absent or outdated.
- SAR accuracy in urban canyons — document radar-shadow and layover limitations.
- Informal-settlement boundary data availability.
- Access conditions and license.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., SAR urban-canyon accuracy, sparse drainage data) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
