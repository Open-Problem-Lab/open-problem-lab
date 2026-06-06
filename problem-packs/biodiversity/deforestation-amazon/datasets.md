# Dataset Inventory

## Candidate Sources

| Source                    | Grain                         | Current status            | Use                                      |
| ------------------------- | ----------------------------- | ------------------------- | ---------------------------------------- |
| INPE PRODES deforestation | 6.25 ha, annual, 1988-present | Usable, reference dataset | Long-term deforestation baseline         |
| GLAD forest alerts        | 30m, weekly, 2019-present     | Usable                    | Near-real-time new forest loss detection |
| GBIF species occurrence   | Point, variable               | Usable with caveats       | Species occurrence for range estimation  |
| IUCN Red List range maps  | Polygon, species-level        | Usable                    | Species range for conservation status    |
| MapBiomas land cover      | 30m, annual, 1985-present     | Usable                    | Land cover change classification         |

## Required Dataset Properties

- Date range.
- Geographic grain.
- Deforestation detection method including minimum mapping unit.
- Species occurrence data including collection date and location precision.
- License or reuse permission.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
