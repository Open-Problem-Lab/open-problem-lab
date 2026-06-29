# Dataset Inventory

## Candidate Sources

| Source                                     | Grain                          | Etiology hypothesis    | Status              | Use                                             |
| ------------------------------------------ | ------------------------------ | ---------------------- | ------------------- | ----------------------------------------------- |
| Correa-Rotter et al. 2019 review           | Mesoamerica, multi-study       | All hypotheses         | Usable for framing  | Epidemiology, case definition, etiology review  |
| Gonzalez-Quiroz et al. 2018 cohort         | Nicaragua, individual-level    | Heat-dehydration       | Usable              | Prospective eGFR decline in young adults        |
| Wesseling et al. 2020 RPSP review          | Mesoamerica, regional          | Heat-dehydration       | Usable with caution | Argument-driven heat-stress hypothesis review   |
| Jayasumana et al. 2023 glyphosate study    | Sri Lanka, water source-level  | Agrochemical           | Usable with caution | Ecological water contaminant association        |
| Haas et al. 2018 pathology study           | Mesoamerica, individual biopsy | Disease classification | Usable              | Histopathological evidence for distinct disease |
| Environmental Health pesticide review 2017 | Multi-region, systematic       | Agrochemical           | Usable              | Systematic review of pesticide-CKDu association |
| Garcia-Trabanino et al. 2015 dialysis      | Guatemala, regional registry   | Burden                 | Usable              | Dialysis enrollment as lower-bound burden       |
| Osborne et al. 2026 environmental review   | Multi-region, narrative        | All hypotheses         | Usable              | Recent synthesis of environmental factors       |
| ERA5 climate reanalysis                    | Grid, hourly                   | Heat-dehydration       | Usable              | Heat exposure mapping for affected regions      |
| GBD CKD mortality estimates                | Global, country-level          | Baseline comparison    | Usable              | Conventional CKD baseline for excess mortality  |

## Required Dataset Properties

- Case definition used (CKDnt vs conventional CKD exclusion criteria).
- Geographic grain (country, department, community, individual).
- Worker population definition (crop, employment type, informal vs formal).
- Exposure measurement method (individual-level vs ecological).
- Outcome measurement (eGFR, serum creatinine, urinary biomarkers, mortality).
- Time period and follow-up duration.
- Confounders measured and unmeasured.
- License or reuse permission.

## Rejection Rule

A dataset is rejected for causal inference if exposure measurement is ecological and no individual-level validation exists, or if the case definition does not exclude conventional CKD causes. Rejected datasets may still be listed as context for burden estimation.
