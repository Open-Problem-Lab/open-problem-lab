# Dataset Inventory

## Candidate Sources

| Source                                                            | Grain                            | Current status                   | Use                                                                                         |
| ----------------------------------------------------------------- | -------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| UN IGME stillbirth estimates                                      | Country, regional, global        | Usable for burden framing        | Official cross-country burden and trend baseline                                            |
| DHS pregnancy histories or reproductive calendars where available | Household, cluster, sub-national | Limited and country-specific     | Survey-based pregnancy outcome measurement with recall and disclosure limits                |
| MICS or other survey modules with pregnancy outcome content       | Household, cluster, sub-national | Limited and uneven availability  | Cross-check on self-reported stillbirth-related outcome measurement                         |
| National CRVS stillbirth or fetal death tabulations               | Country to district, variable    | Limited and definition-sensitive | Registration completeness and legal-definition context                                      |
| Facility maternity registers and perinatal death audit summaries  | Facility to district, variable   | Limited and high-risk            | Signal of service-contact stillbirth burden and intrapartum review workflow                 |
| EmONC or maternity service readiness assessments                  | Facility, district, national     | Limited but relevant             | Context on whether observed stillbirth burden plausibly tracks labor-and-delivery care gaps |
| Population denominators and admin boundaries                      | District, gridded, national      | Usable but version-sensitive     | Rate construction and mapping context                                                       |

## Required Properties

- Definition threshold: gestational age, birthweight, or local stillbirth definition.
- Measure family: survey recall, CRVS registration, facility count, or audit workflow.
- Numerator and denominator definition.
- Time reference and whether the measurement is period-based or event-based.
- Geographic grain and whether sub-national identifiers survive public release.
- Ability or inability to distinguish intrapartum from antepartum stillbirth.
- Access conditions, reporting incentives, and known missingness.

## Rejection Rule

A source is rejected for canonical comparison if the stillbirth definition threshold, denominator, or reporting population cannot be verified. Facility stillbirth counts without clear referral and case-mix context may be used as workflow clues but not as direct quality rankings. Survey sources that cannot distinguish stillbirth from other adverse pregnancy outcomes at the documented question wording should be listed as limited or rejected rather than generalized.
