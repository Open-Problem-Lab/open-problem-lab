# Dataset Inventory

## Candidate Sources

| Source                              | Grain                         | Current status       | Use                                                               |
| ----------------------------------- | ----------------------------- | -------------------- | ----------------------------------------------------------------- |
| UNICEF global burden data           | Country                       | Usable for framing   | Global burden and exposure pathway context                        |
| OpenStreetMap industrial land use   | Building/block, global        | Usable               | Proximity-based risk factor identification                        |
| Sentinel-2 imagery                  | 10m, 2015-present             | Usable               | Informal industrial site identification via visual interpretation |
| Published blood-lead studies        | Point samples, variable       | Usable as validation | Ground truth for risk map validation                              |
| Country industrial permit databases | Facility, variable by country | Inconsistent access  | Formal industrial lead source identification                      |

## Required Dataset Properties

- Date range.
- Geographic grain.
- Industrial classification including informal sector when available.
- Soil or blood-lead measurement protocol.
- Sampling methodology and detection limits.
- License or reuse permission.

## Rejection Rule

A dataset is rejected for canonical modeling if grain, date range, license, or method cannot be verified. Rejected datasets may still be listed as context.
