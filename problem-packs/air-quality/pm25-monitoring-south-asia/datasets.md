# Dataset Inventory

## Candidate Sources

| Source                                    | Grain             | Status             | Use                                          | Reason for classification                                                                                                                                                                                                                            |
| ----------------------------------------- | ----------------- | ------------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WHO Ambient Air Pollution Fact Sheet      | Global            | Usable             | Burden framing, guideline exceedance         | WHO primary source for global PM2.5 burden and health effects. Country-level framing only.                                                                                                                                                           |
| HEI State of Global Air 2024              | Country, 0.01 deg | Usable             | Population-weighted PM2.5 exposure estimates | Most authoritative current estimate of country-level PM2.5 exposure and attributable mortality. Satellite-derived surfaces may undersample localized hotspots.                                                                                       |
| CPCB Continuous Monitoring Network        | Station, hourly   | Usable, sparse     | Ground-truth PM2.5 reference measurements    | Official Indian ground monitoring network. Approximately 300 stations for 1.4 billion people. Concentrated in major cities. Already allowlisted for CI source verification (blocks automated access).                                                |
| OpenAQ Platform                           | Station, variable | Usable, aggregated | Multi-country ground monitor data access     | Aggregates 12,000+ stations globally. South Asia coverage is India-dominated with minimal Pakistan, Bangladesh, Nepal stations. No independent quality assurance.                                                                                    |
| Copernicus Sentinel-5P TROPOMI            | ~5.5 km, daily    | Limited            | Column aerosol and NO2, not surface PM2.5    | Daily global observations but column-integrated, not surface PM2.5. Conversion requires modeled assumptions with uncertain accuracy in South Asia complex aerosol composition. Monsoon cloud cover blocks observations.                              |
| WorldPop Population Data                  | 100m, annual      | Usable             | Population-at-risk denominator               | Gridded population estimates for coverage zone calculations. Census currency varies by country. 100m resolution sufficient for district-level analysis.                                                                                              |
| Low-cost sensor networks (PurpleAir etc.) | Variable          | Rejected (current) | Insufficient validation data for South Asia  | Low-cost PM2.5 sensors have not been systematically validated against reference monitors in South Asian high-humidity, high-temperature conditions. Co-located validation studies are sparse. Rejected for gap mapping until validation data exists. |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and coordinate reference system.
- PM2.5 measurement method including reference-grade, low-cost, or satellite-derived.
- Quality assurance and calibration status.
- License or reuse permission.

## Rejection Rule

A dataset is rejected for canonical modeling if measurement method, date range, calibration, or license cannot be verified. Rejected datasets may still be listed as context.
