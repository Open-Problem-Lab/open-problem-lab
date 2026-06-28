# Evidence Ledger

## Current Evidence Records

The machine-readable ledger is `evidence.json`.

## Evidence Notes

### WHO Ambient Air Pollution Fact Sheet

Use this source for global PM2.5 burden and health effects framing. The 99 percent exceedance figure establishes the universality of the problem. South Asia-specific detail requires supplementary regional sources.

### HEI State of Global Air 2024

Use this source as the most authoritative current estimate of country-level PM2.5 exposure and attributable mortality. Its satellite-derived PM2.5 surfaces may undersample localized hotspots.

### CPCB Monitoring Network

Use this source for the official Indian ground monitoring network status. The 300-station figure for a 1.4 billion population establishes the monitoring gap severity. Treat station counts as approximate -- they change with new installations and outages. The CPCB site blocks automated access from CI runners; it is allowlisted in source-check-allowlist.json.

### OpenAQ Platform

Use this source for multi-country ground monitor data access. OpenAQ aggregates from source feeds without independent quality assurance. South Asia coverage is India-dominated with minimal representation from Pakistan, Bangladesh, and Nepal. Station data may have gaps from feed outages that are not flagged in the API.

### WorldPop Population Data

Use this source for population-at-risk denominators in monitoring coverage zone calculations. Census currency varies by country; some South Asian countries have not conducted a census in over 10 years. Top-down disaggregation models may not capture rapid urbanization. 100m resolution is sufficient for district-level gap analysis.

### Copernicus Sentinel-5P TROPOMI

Use this source for complementary satellite observations of aerosol and NO2 column density. TROPOMI measures column-integrated values, not surface PM2.5. Converting column to surface requires modeled assumptions about vertical distribution that are uncertain in South Asia complex aerosol composition. Monsoon cloud cover blocks observations for extended periods. Classified as limited for PM2.5 gap mapping purposes.

## Evidence Quality Rule

Evidence is not accepted because it sounds plausible. It is accepted when the source, method, limitations, and confidence are explicit enough for a reviewer to attack.
