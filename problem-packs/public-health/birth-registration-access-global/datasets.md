# Dataset Inventory

## Candidate Sources

| Source                                         | Grain                            | Current status                         | Use                                                            |
| ---------------------------------------------- | -------------------------------- | -------------------------------------- | -------------------------------------------------------------- |
| UNICEF birth registration database             | Country, some sub-national notes | Usable for global and country framing  | Official cross-country baseline and downloadable indicator set |
| DHS birth-registration indicators or microdata | Household, cluster, sub-national | Usable where country access is granted | Survey-based under-5 registration and certificate possession   |
| MICS birth-registration module and datasets    | Household, cluster, sub-national | Usable where country survey exists     | Survey-based registration, proof, and knowledge-of-process     |
| World Bank WDI `SP.REG.BRTH.ZS`                | Country                          | Usable with metadata caveat            | Comparable SDG 16.9.1 series and official definition           |
| National CRVS administrative tabulations       | Country to district, variable    | Limited and country-specific           | Administrative completeness and timeliness checks              |
| Health facility birth-notification systems     | Facility to district, variable   | Limited and access-constrained         | Registration opportunities at delivery and postnatal contact   |
| Immunization or child-health registries        | Child, facility, district        | Limited and access-constrained         | Missed-opportunity analysis for registration touchpoints       |
| Population denominators and admin boundaries   | District, gridded, national      | Usable but version-sensitive           | Rate construction, district comparisons, and mapping context   |

## Required Properties

- Measure family: under-5 survey registration, certificate possession, or administrative live-birth completeness.
- Data year and time reference.
- Geographic grain and whether sub-national identifiers are preserved.
- Numerator and denominator definition.
- License, access conditions, and whether microdata require approval.
- Known mismatch against other measure families.
- Health-touchpoint relevance, if the source is being used to support service-linkage claims.

## Rejection Rule

A source is rejected for canonical comparison if the measure family, date, grain, or access conditions cannot be verified. Sources that are valid only for framing or only for one country should be listed as limited rather than silently generalized. Administrative and service data without clear denominator or catchment definitions may be used as context but not as proof of sub-national registration performance.
