# Dataset Inventory

## Candidate Sources

| Source                                  | Grain                     | Current status                 | Use                                                          |
| --------------------------------------- | ------------------------- | ------------------------------ | ------------------------------------------------------------ |
| WMO heat-health warning system data     | Country, binary           | Usable, publicly available     | National warning-system existence and coverage baseline      |
| IFRC forecast-based financing data      | Country, program-level    | Usable, publicly available     | Forecast-triggered heat response protocol coverage           |
| National meteorological agency data     | Sub-national, operational | Variable by country            | Warning-system operational status and population reach       |
| Vital registration mortality data       | Sub-national, variable    | Sparse in LMICs                | Heat-mortality trend analysis where registration adequate    |
| Sentinel surveillance mortality data    | Facility/site, variable   | Limited, LMIC pilot programs   | Alternative mortality signal where vital registration absent |
| ERA5-Land temperature reanalysis        | 0.1 deg, hourly           | Usable, publicly available     | Heat exposure estimation and climate-trend adjustment        |
| Burial/cemetery records                 | Site, variable            | Limited, requires local access | Alternative mortality signal in low-registration settings    |
| Ahmedabad Heat Action Plan evaluation   | City, pre-post            | Usable, single-city case study | LMIC effectiveness evaluation methodology reference          |
| Global Burden of Disease heat estimates | Country, modeled          | Usable, modeled not observed   | National heat-mortality burden estimation                    |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Vital registration completeness assessment for mortality data.
- Access conditions and license.
- LMIC data-quality assessment — explicitly document where mortality data is inadequate for effectiveness evaluation.
- Known data gaps and alternative data source availability.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known quality issues (e.g., vital registration below 80 percent completeness) may be listed as limited with explicit quality documentation. Rejected datasets may still be listed as context.
