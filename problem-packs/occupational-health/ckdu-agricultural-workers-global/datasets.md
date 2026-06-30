# Dataset Inventory

## Candidate Sources

| Source                                                        | Grain                                 | Current status                                            | Use                                                                      |
| ------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| Wesseling et al. 2020 (Mesoamerica review)                    | Multi-country, occupational cohort    | Usable for prevalence framing                             | CKDu prevalence by region and occupation in Mesoamerica                  |
| Jayatilake et al. 2015 (Sri Lanka)                            | Province-level, community survey      | Usable with diagnostic caveat                             | Prevalence and demographic profile in North Central Province             |
| PAHO El Salvador CKD report (2020)                            | National mortality, some sub-national | Usable for mortality framing                              | CKD mortality burden, geographic concentration                           |
| Glaser et al. 2016 (heat-stress hypothesis)                   | Narrative review                      | Usable as mechanism reference                             | Proposed heat-stress dehydration pathway                                 |
| Jayasumana et al. 2015 (glyphosate hypothesis)                | Regional ecological, Sri Lanka        | Limited — ecological design, unreplicated                 | Proposed agrochemical mechanism, hard-water interaction                  |
| Roncal Jimenez et al. 2016 (biomarker study)                  | Single worksite, El Salvador          | Usable as biomarker evidence                              | Acute kidney injury biomarkers in heat-exposed workers                   |
| GBD Study CKD estimates                                       | Country-level, modeled                | Limited — aggregates CKDu under all-cause CKD             | Burden framing only; cannot isolate CKDu                                 |
| National CKD surveillance (El Salvador, Sri Lanka, Nicaragua) | National, variable sub-national       | Limited — most do not separate CKDu from conventional CKD | Where available, surveillance-gap documentation                          |
| ILOSTAT employment-by-industry                                | National, some sub-national           | Limited — informal sector gaps                            | Worker population denominators by industry for endemic regions           |
| ERA5 reanalysis (ECMWF)                                       | 0.25-degree grid, hourly              | Usable for heat exposure derivation                       | Gridded temperature, humidity for WBGT calculation in agricultural zones |

## Required Dataset Properties

- CKD diagnostic criteria (eGFR threshold, albuminuria, biomarker type).
- Study design (cross-sectional, cohort, case-control, experimental).
- Screening method (serum creatinine, dipstick, point-of-care device).
- Geographic grain (country, province, district, community).
- Study population (occupation, age range, sex, employment status).
- Exposure assessment method (self-report, measurement, biomarker, environmental monitoring).
- Whether the source can distinguish heat-stress from agrochemical mechanisms.
- Prevalence or incidence estimate with confidence interval and sample size.
- Temporal coverage and study date.
- License or reuse permission.

## Rejection Rule

A data source is rejected for causal evidence synthesis if study design, diagnostic criteria, or exposure assessment cannot be verified. A prevalence study that does not specify CKD diagnostic criteria is rejected as a prevalence estimate but may be retained as surveillance-gap evidence. A causal hypothesis study that cannot distinguish heat-stress from agrochemical mechanisms must be classified as limited and cannot anchor a dominant-hypothesis claim.
