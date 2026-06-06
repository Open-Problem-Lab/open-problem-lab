# Dataset Inventory

| Source                               | Grain   | Status               | Use                |
| ------------------------------------ | ------- | -------------------- | ------------------ |
| DHS cooking fuel data                | Cluster | Usable               | Primary fuel type  |
| DHS kitchen location/ventilation     | Cluster | Usable               | Ventilation proxy  |
| GBD HAP exposure layer               | 0.1 deg | Usable               | Modeled exposure   |
| Published kitchen PM2.5 measurements | Point   | Usable as validation | Ground truth       |
| Population data                      | 100m    | Usable               | Population at risk |

## Required Properties

Survey year, methodology, fuel classification, ventilation data, license.

## Rejection Rule

Rejected if methodology unverifiable.
