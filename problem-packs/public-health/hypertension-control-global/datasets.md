# Dataset Inventory

Dated source inventory for hypertension detection and control gaps in LMICs. Classification reflects fitness for a sub-national detection-treatment-control cascade analysis. Inventory compiled 2026-06-18.

## Sources

| Source                                   | Grain                             | Measure family                          | Status   | Use                                            |
| ---------------------------------------- | --------------------------------- | --------------------------------------- | -------- | ---------------------------------------------- |
| WHO Global Report on Hypertension (2023) | Global / national                 | Modeled cascade benchmark               | Usable   | Global benchmark for diagnosis/control rates   |
| NCD-RisC pooled analysis (Lancet 2021)   | National, ages 30-79              | Measured-BP cascade by country and sex  | Usable   | Cross-country comparison backbone              |
| WHO STEPS microdata (NCD Microdata Repo) | National; limited sub-national    | Measured-BP survey microdata            | Usable   | Country cascade estimates from raw survey data |
| DHS Program biomarkers                   | National + georeferenced clusters | Measured-BP prevalence (subset)         | Limited  | Supplementary prevalence where BP was measured |
| GBD 2021 high systolic BP burden (IHME)  | National + some subnational       | Modeled attributable burden (DALYs)     | Limited  | Burden context, not a cascade measurement      |
| PURE study (JAMA 2013)                   | Community cohorts, ages 35-70     | Measured-BP cascade, non-representative | Limited  | Historical cross-income comparison only        |
| Self-report-only household surveys       | Varies                            | Self-reported diagnosis                 | Rejected | Underestimates measured prevalence (see below) |

## Classification Reasons

- **Usable** sources provide directly measured blood pressure and a detection/treatment/control cascade at national or finer grain.
- **Limited** sources are usable only for a narrower purpose: DHS BP coverage is survey-specific and cascade items are inconsistent; GBD outputs are attributable burden, not measured control; PURE is non-representative community cohorts from 2003-2009.
- **Rejected**: self-report-only surveys underestimate measured prevalence by ~20% (women) to ~55% (men) per a large Indian comparison study (SSM - Population Health, 2022), so they cannot anchor prevalence or cascade estimates.

## Required Properties

Source methodology, data year, geographic grain, measure family (measured vs self-reported), license, and detection/treatment/control coverage.

## Rejection Rule

Rejected if methodology, grain, date, or license is unverifiable, or if hypertension status is self-reported rather than measured.
