# Dataset Inventory

Dated source inventory for anaemia prevalence and iron-folic-acid (IFA) supplementation coverage in women and adolescent girls in LMICs. Classification reflects fitness for a sub-national prevalence-and-coverage analysis. Inventory compiled 2026-06-18.

## Sources

| Source                                   | Grain                             | Measure family                     | Status   | Use                                            |
| ---------------------------------------- | --------------------------------- | ---------------------------------- | -------- | ---------------------------------------------- |
| WHO Global Anaemia Estimates (GHO, 2023) | Global / national                 | Modeled prevalence benchmark       | Usable   | Global benchmark for women/children prevalence |
| WHO/Lancet GH pooled estimates (2022)    | National, by severity             | Measured-Hb pooled prevalence      | Usable   | Cross-country prevalence backbone              |
| WHO VMNIS micronutrients database        | National; survey-level entries    | Measured haemoglobin distributions | Usable   | Underlying measured-Hb source layer            |
| GBD 2021 anaemia burden (IHME)           | National + some subnational       | Modeled prevalence/YLD by cause    | Limited  | Burden and cause context                       |
| DHS haemoglobin + iron supplementation   | National + georeferenced clusters | Measured Hb (subset) + IFA recall  | Limited  | Sub-national prevalence and IFA coverage proxy |
| Clinical pallor / exam-only assessment   | Varies                            | Visual clinical assessment         | Rejected | Inaccurate and unreliable (see below)          |

## Classification Reasons

- **Usable** sources rest on measured haemoglobin and provide prevalence at national or finer grain.
- **Limited** sources serve a narrower purpose: GBD outputs are modeled burden by cause rather than direct survey prevalence; DHS measures haemoglobin only in a subset of rounds and records IFA via recall (receipt, not confirmed consumption).
- **Rejected**: clinical pallor / examination-only assessment has wide, inconsistent diagnostic accuracy and poor inter-observer agreement, so it cannot anchor prevalence estimates in place of measured haemoglobin.

## Required Properties

Source methodology, data year, geographic grain, measure family (measured haemoglobin vs clinical vs recall), license, and prevalence/coverage coverage.

## Rejection Rule

Rejected if methodology, grain, date, or license is unverifiable, or if anaemia status is from clinical assessment rather than measured haemoglobin.
