# Dataset Inventory

## Candidate Sources

| Source                                                     | Grain                                     | Current status                                             | Use                                                                            | Main limitation                                                          |
| ---------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| WHO Global status report on road safety 2023               | Country/global                            | Usable for burden framing and indicator definitions        | Global baseline, country profiles, road-user and policy context                | Not a city event-level registry; mortality estimates are modeled         |
| World Bank WDR 2021 road-data spotlight                    | City case study and LMIC comparison       | Usable for measurement-gap framing                         | Documents the 56% fatality-capture comparison and Nairobi digitization pathway | Not a current harmonized city dataset                                    |
| Police crash records                                       | Event-level, if accessible                | Limited until completeness and case definition are audited | Crash location, time, road-user type, initial severity                         | Reporting and recording bias; may miss hospital deaths and non-reporting |
| Hospital emergency and trauma records                      | Patient or encounter-level, if accessible | Limited until de-identification and linkage are approved   | Non-fatal injury burden, severity, care demand                                 | Catchment bias, repeat visits, coding drift, privacy risk                |
| Death-registration or coroner records                      | Death-level, if accessible                | Limited until cause and 30-day definition are reconciled   | Fatality ascertainment and post-admission deaths                               | Delays, cause-of-death coding, incomplete registration                   |
| Ambulance dispatch records                                 | Call/dispatch-level, if accessible        | Limited                                                    | Response time and prehospital demand                                           | Does not equal unique crashes or unique injured people                   |
| Road network, speed, lighting, and population denominators | Segment/grid-level                        | Limited to usable depending on metadata                    | Exposure denominators and corridor comparison                                  | Boundary changes, missing informal roads, ecological inference           |

## Required Dataset Properties

- Date range and last update.
- Geographic grain and coordinate precision after de-identification.
- Event, encounter, person, or dispatch grain.
- Case definition and injury-severity definition.
- Stable linkage key or documented probabilistic-matching fields.
- Reporting lag and missingness by source and subgroup.
- Data controller, access permission, and retention rule.
- Whether vulnerable road users and people who never reach hospital are represented.
- Administrative-boundary and road-network changes.

## Rejection Rule

A source is rejected for canonical linkage if its controller, grain, case definition, access permission, or de-identification boundary cannot be documented. Aggregate sources may remain usable for framing but cannot be presented as evidence of individual-level capture or causal intervention effect.
