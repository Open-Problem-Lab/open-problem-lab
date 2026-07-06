# Dataset Inventory

## Candidate Sources

| Source                                                                  | Grain                           | Current status                    | Use                                                                                       |
| ----------------------------------------------------------------------- | ------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------- |
| WHO Service Availability and Readiness Assessment oxygen indicators     | Facility, service, country      | Limited and country-specific      | Facility readiness snapshots for oxygen source and sometimes pulse oximetry availability  |
| DHS Service Provision Assessment facility modules                       | Facility, service, country      | Limited and survey-dependent      | Cross-check on facility oxygen and pulse oximetry readiness where surveys exist           |
| WHO HeRAMS in emergencies                                               | Facility, sub-national, country | Limited and emergency-specific    | Conflict or crisis facility functionality and service disruption context                  |
| National oxygen assessments and biomedical equipment inventories        | Facility to district, variable  | Limited but high value            | Most direct source for oxygen source type, condition, maintenance, power, and consumables |
| PATH or partner oxygen needs and equipment trackers                     | Country to facility, variable   | Limited and methods-sensitive     | Triage source for demand, gap estimates, or COVID-era procurement follow-up               |
| Health facility electricity and water readiness datasets                | Facility, country               | Limited but relevant              | Context for concentrator and PSA plant feasibility                                        |
| Acute-care, pneumonia, surgery, neonatal, and obstetric service volumes | Facility, district, country     | Limited and denominator-sensitive | Demand-side context for oxygen need estimation                                            |

## Required Properties

- Measure family: need estimate, equipment inventory, facility readiness, functionality, clinical use, cost, or outcome.
- Oxygen source type: cylinder, concentrator, PSA plant, liquid oxygen, manifold, pipeline, or mixed.
- Functionality: working status, uptime, maintenance status, spare parts, consumables, power, and staff capacity.
- Pulse oximetry: availability, working status, and service area.
- Numerator and denominator: facilities assessed, beds, admissions, hypoxemic patients, procedures, births, or disease episodes.
- Time reference and whether the source is routine, survey-based, emergency, or one-off assessment.
- Geographic grain and whether facility identifiers survive public release.
- Access conditions, licensing, and whether data can be independently rerun.

## Rejection Rule

A source is rejected for canonical access-gap comparison if it cannot distinguish oxygen equipment presence from functional oxygen availability. Equipment counts without uptime, power, consumables, maintenance, or clinical-use context may be used as problem framing but not as proof of access. Country-level oxygen need models may support triage only when assumptions, denominators, and uncertainty are explicit.
