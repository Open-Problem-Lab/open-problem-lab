# Dataset Inventory

## Candidate Sources

| Source                                     | Grain                     | Current status                     | Use                                                             |
| ------------------------------------------ | ------------------------- | ---------------------------------- | --------------------------------------------------------------- |
| MODIS and VIIRS infrared ash detection     | 1km-375m, near-real-time  | Usable, 20-40% false-positive rate | Satellite ash-plume detection and spatial mapping               |
| IASI/CrIS infrared sounder ash profiles    | Variable, along-track     | Usable, limited spatial coverage   | Ash altitude profiling and composition estimation               |
| ICAO VAAC advisory archives                | Regional, event-based     | Usable, publicly available         | Historical ash advisory coverage and operational data           |
| Ground volcanic monitoring networks        | Station-point, continuous | Sparse in many regions             | Seismic, gas, and deformation monitoring for eruption detection |
| HYSPLIT ash-transport model                | Variable, configurable    | Usable, publicly available         | Ash plume dispersion forecasting                                |
| NAME ash-transport model                   | Variable, UK Met Office   | Usable, operational at London VAAC | Ash concentration forecasting for North Atlantic routes         |
| FLEXPART ash-transport model               | Variable, configurable    | Usable, publicly available         | Ensemble ash-dispersion forecasting                             |
| Global Volcanism Program eruption database | Volcano, event-based      | Usable, publicly available         | Historical eruption records and ash-plume documentation         |
| Aviation ash encounter reports             | Flight-path, event-based  | Sparse, reporting-dependent        | Engine damage and flight-encounter case studies                 |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Detection-sensitivity documentation — explicitly state minimum detectable ash mass loading.
- False-positive and false-negative rate documentation.
- Access conditions and license.
- Regional coverage assessment — explicitly document monitoring gaps for each volcanic region.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., satellite 20-40% false-positive rate, sparse ground monitoring) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
