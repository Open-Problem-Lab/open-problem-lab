# Dataset Inventory

## Candidate Sources

| Source                                | Grain                                  | Current status                               | Use                                                              |
| ------------------------------------- | -------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| ILO climate-labor report (2024)       | Global / country income group          | Usable for framing                           | Exposure scale, DALY estimates, LMIC-vs-HIC gap                  |
| ILOSTAT employment-by-industry        | National / some sub-national           | Usable with coverage caveat                  | Worker population denominators by industry and sex               |
| ERA5 reanalysis (ECMWF)               | 0.25-degree grid, hourly, 1940-present | Usable for WBGT derivation                   | Gridded temperature, humidity, radiation for WBGT calc           |
| ISO 7243:2017 WBGT standard           | International standard                 | Usable as threshold framework                | Work-rest regime thresholds by metabolic rate                    |
| Xu et al. 2021 meta-analysis          | Multi-country pooled                   | Usable as effect-size reference              | Heat-injury dose-response with heterogeneity documentation       |
| Dunne et al. 2013 labor capacity      | Regional / global grid                 | Usable as projection context                 | Future labor capacity loss under climate scenarios               |
| Lopez de Lara et al. 2015 (CKDnt)     | Sub-national, single-country           | Limited — single-country, cross-sectional    | LMIC heat-kidney evidence from Mesoamerican sugarcane workers    |
| WHO/ILO UV joint estimate (2024)      | Global                                 | Usable as methodology precedent              | Counterfactual attribution method for occupational hazards       |
| National labor force surveys (LMIC)   | National, some sub-national            | Limited — informal sector gaps               | Worker population by industry, employment status                 |
| Occupational injury registries (LMIC) | National, variable coverage            | Limited — most LMICs absent                  | Heat-related injury counts where surveillance exists             |
| MERRA-2 reanalysis (NASA GMAO)        | 0.5-degree grid, hourly, 1980-present  | Limited — coarser than ERA5, secondary       | Alternative WBGT derivation where ERA5 validation is needed      |
| Low-cost heat sensors (field studies) | Point-level, study-specific            | Rejected for canonical use — no public scale | Context for future LMIC ground validation but not yet systematic |

## Source Classification Rationale

### Usable

- **ILO climate-labor report (2024)**: Official ILO publication providing the most recent global exposure estimates (2.2 billion workers, 23 million DALYs). Modeled from climate-labor overlap, not direct measurement, but the authoritative source for scale framing. Limitation: national income-group grain, not sub-national.
- **ILOSTAT employment-by-industry**: The primary public source for worker population denominators by industry. National-level for most LMICs with limited sub-national coverage. Informal sector estimates are modeled, not directly surveyed in many countries. Limitation: no outdoor-vs-indoor worker distinction within industries.
- **ERA5 reanalysis (ECMWF)**: The highest-resolution open-access atmospheric reanalysis suitable for WBGT derivation in LMICs lacking ground monitoring. Hourly data at 0.25-degree grid from 1940 to present. Copernicus CDS provides free access with registration. Limitation: reanalysis bias in data-sparse regions, and grid resolution may miss intra-district variation.
- **ISO 7243:2017 WBGT standard**: The internationally recognized threshold framework for heat stress assessment. Defines work-rest regimes by metabolic rate and clothing. Limitation: paywalled beyond abstract; thresholds derived from temperate-climate laboratory studies.
- **Xu et al. 2021 meta-analysis**: The most comprehensive peer-reviewed synthesis of heat-occupational injury epidemiology. Pooled OR 1.21 with documented heterogeneity. Limitation: dominated by high-income country studies.
- **Dunne et al. 2013 labor capacity model**: Key projection study for future labor capacity loss under climate scenarios. Limitation: RCP8.5 scenario, no adaptation modeling, does not distinguish indoor from outdoor workers.
- **WHO/ILO UV joint estimate (2024)**: Methodological precedent for counterfactual attribution of climate-linked occupational hazards. Covers UV radiation, not heat, but demonstrates feasibility of global occupational disease burden estimation. Limitation: not direct evidence for heat stress.

### Limited

- **Lopez de Lara et al. 2015 (CKDnt)**: One of few peer-reviewed studies providing direct LMIC evidence linking occupational heat exposure to a non-injury health outcome (chronic kidney disease of non-traditional etiology in sugarcane workers). Single-country, cross-sectional, from El Salvador. Limitation: Mesoamerican CKDnt epidemiology is distinct; may not generalize to other regions.
- **National labor force surveys (LMIC)**: Provide industry-level employment data for selected LMICs with varying sub-national grain. Limitation: informal sector coverage is inconsistent, and most surveys do not distinguish outdoor from indoor workers within an industry.
- **Occupational injury registries (LMIC)**: Exist in a minority of LMICs with highly variable coverage. Where they exist, heat-related injury coding is rare. Limitation: most LMICs have no systematic occupational injury surveillance, making these sources useful only as evidence of surveillance gaps rather than for burden estimation.
- **MERRA-2 reanalysis (NASA GMAO)**: Alternative atmospheric reanalysis at 0.5-degree grid, coarser than ERA5. Can serve as cross-validation for ERA5-derived WBGT estimates. Limitation: coarser spatial resolution and generally lower performance than ERA5 for near-surface variables relevant to heat stress.

### Rejected

- **Low-cost heat sensors (field studies)**: Individual field studies using low-cost WBGT or temperature sensors provide point-level ground truth but operate at study-specific scale with no public data infrastructure for systematic comparison. Rejected for canonical use because coverage, calibration, and data availability cannot be verified at scale. May be retained as context for future ground validation methodology.

## Required Dataset Properties

- Exposure metric (WBGT, ambient temperature, heat index, apparent temperature).
- Data source type (ground station, reanalysis grid, satellite-derived).
- Temporal resolution (hourly, daily, monthly) and coverage period.
- Geographic grain (grid cell, district, province).
- Worker population denominator by industry and employment status (formal/informal).
- Health outcome type (injury, illness, productivity loss, mortality, CKDnt).
- Outcome data source (surveillance, compensation claims, household survey, study).
- Missingness patterns and representation of peak heat season.
- License or reuse permission.

## Rejection Rule

A data source is rejected for sub-national exposure-outcome mapping if exposure metric, temporal coverage, worker population denominator, or geographic grain cannot be verified. National-level labor force statistics without industry or sub-national breakdown may be listed as context but cannot anchor a district-level exposure estimate. Occupational injury data from countries without systematic surveillance is rejected as a burden estimate, though it may be retained as evidence of surveillance gaps.
