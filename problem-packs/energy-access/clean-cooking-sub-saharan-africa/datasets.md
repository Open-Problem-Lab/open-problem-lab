# Dataset Inventory

## Candidate Sources

| Source                                     | Grain                | Current status      | Use                                                             |
| ------------------------------------------ | -------------------- | ------------------- | --------------------------------------------------------------- |
| WHO Global Health Observatory HAP data     | Country              | Usable              | Aggregate disease burden framing                                |
| DHS household surveys                      | Cluster, periodic    | Usable with caveats | Cooking fuel type, housing characteristics, and health outcomes |
| IEA clean cooking access database          | Country              | Usable              | Adoption rates by technology                                    |
| Clean Cooking Alliance enterprise database | Enterprise, variable | Usable as context   | Enterprise location and scale                                   |
| Global Burden of Disease HAP layer         | 0.1 deg              | Usable              | Modeled exposure and attributable deaths                        |

## Required Dataset Properties

- Date range and survey year.
- Geographic grain.
- Cooking fuel type classification.
- Household ventilation characteristics.
- Health outcome data if available.
- License or reuse permission.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
