# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| Giga school-connectivity map          | School, 30 countries           | Usable, satellite-classified             | School locations and connectivity-status classification  |
| National school census ICT indicators | School/district, annual        | Variable, data-currency varies           | School-level connectivity verification and device data   |
| GSMA mobile-network coverage maps     | ~1km, updated                  | Usable, publicly available               | Infrastructure availability context for connectivity     |
| WorldPop gridded population           | 100m, gridded                  | Usable, publicly available               | Population without connectivity estimation               |
| ITU ICT statistics                    | Country, annual                | Usable, publicly available               | National connectivity and broadband indicators           |
| Electricity-access data (GEO, DHS)    | Cluster/district, variable     | Usable, publicly available               | Electricity availability as connectivity prerequisite    |
| Device-access survey data             | Household, variable            | Sparse, country-dependent                | Device availability as digital-learning prerequisite     |
| Teacher digital-literacy studies      | School, variable               | Very sparse in LMICs                     | Teacher capacity for digital-learning integration        |
| Connectivity-quality studies          | School, variable               | Sparse, research-dependent               | Bandwidth, reliability, and usage documentation          |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Connectivity-classification methodology — explicitly document satellite-derived vs. survey-based vs. network-coverage proxy.
- Data currency — explicitly document when data was collected and whether it reflects current conditions.
- Cross-validation status between Giga and school census data.
- Access conditions and license.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., outdated school census data, satellite classification uncertainty) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
