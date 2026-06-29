# Dataset Inventory

## Candidate Sources

| Source                          | Grain                             | Current status                  | Use                                                       |
| ------------------------------- | --------------------------------- | ------------------------------- | --------------------------------------------------------- |
| IARC monograph on aflatoxins    | Global hazard classification      | Usable for hazard framing       | Carcinogenicity classification and cancer risk context    |
| WHO aflatoxin exposure report   | Regional exposure estimates       | Usable with date caveat         | Population exposure scale and regional burden framing     |
| Codex Alimentarius limits       | International trade standard      | Usable as threshold source      | Contamination limit thresholds for risk classification    |
| CDC Kenya outbreak report       | District-level acute outbreak     | Usable for severity framing     | Acute toxicity evidence and contamination level reference |
| Aflasafe field trials           | Country-level field trial results | Usable as intervention evidence | Biocontrol efficacy and scaling constraints               |
| Published contamination surveys | Market or district-level samples  | Usable per-country with review  | Sub-national contamination data for risk mapping          |

## Required Dataset Properties

- Grain type (maize, groundnuts, sorghum, millet).
- Test method (ELISA, HPLC, fluorometry, lateral flow).
- Detection limit and quantification range.
- Sampling frame (random, convenience, market, household, farm-gate).
- Geographic grain (district, market catchment, village).
- Collection date and storage conditions before testing.
- Missingness patterns and representation of growing versus lean season.
- License or reuse permission.

## Rejection Rule

A contamination survey is rejected for sub-national risk mapping if sampling frame, test method, geographic grain, or collection date cannot be verified. Surveys based on convenience samples from a single market may be listed as context but cannot anchor a district-level risk estimate.
