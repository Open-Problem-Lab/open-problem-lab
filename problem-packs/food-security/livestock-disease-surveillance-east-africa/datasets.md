# Dataset Inventory

## Candidate Sources

| Source                                       | Grain                              | Status           | Use                                                             |
| -------------------------------------------- | ---------------------------------- | ---------------- | --------------------------------------------------------------- |
| WOAH WAHIS disease reports                   | Country, event-level when reported | Usable with gaps | Official disease outbreak notifications and six-monthly reports |
| MODIS NDVI (Terra/Aqua)                      | 250m, 16-day, 2000-present         | Usable           | Forage condition monitoring, IBLI index input                   |
| CHIRPS rainfall (Funk et al. 2014)           | 0.05 deg, daily, 1981-present      | Usable           | Rainfall anomaly detection for RVF risk and drought monitoring  |
| IBLI NDVI-mortality model (Mude et al. 2009) | District, seasonal                 | Usable           | NDVI-livestock mortality proxy validated in Marsabit pilot      |
| FAO livestock sector briefs                  | Country, irregular                 | Usable           | Livestock GDP contribution, pastoralist population framing      |
| PPR GEP eradication reports (FAO/WOAH)       | Country, annual                    | Limited          | Vaccination coverage and PPR endemicity status                  |
| Livestock market price data                  | Market, weekly                     | Variable         | Price anomaly detection; no standardized cross-country system   |
| Livestock population census                  | District                           | Variable, dated  | Herd size denominator; census recency varies by country         |

## Source Classification Rationale

### Usable

- **WOAH WAHIS**: The primary global animal disease reporting system. Provides event-level outbreak notifications with coordinates when reported, plus six-monthly country summaries. Limitation: reporting depends on national veterinary surveillance capacity, which is uneven across East African pastoralist regions. Many remote areas lack the field surveillance needed to trigger reports. Six-monthly reports aggregate at country level and do not provide sub-national disease maps.
- **MODIS NDVI**: 250m resolution vegetation index from NASA Terra/Aqua satellites, available 2000-present at 16-day intervals. Standard input for forage condition monitoring and the IBLI insurance index. Limitation: NDVI measures vegetation greenness, not biomass or forage quality; cloud contamination affects some tropical regions.
- **CHIRPS rainfall**: Quasi-global precipitation dataset at 0.05 degree resolution, 1981-present, blending satellite and station data (Funk et al. 2014, USGS Data Series 832). Standard input for drought monitoring in East Africa. Limitation: performance degrades where station networks are sparse, which includes much of pastoralist East Africa.
- **IBLI NDVI-mortality model**: Demonstrated in Marsabit, Kenya that satellite NDVI predicts livestock mortality at index scale (Mude et al. 2009). Provides the methodological bridge between satellite forage conditions and pastoralist livelihood risk. Limitation: validated for drought-related mortality in one Kenyan district; disease-related mortality requires a separate detection approach.
- **FAO livestock sector briefs**: Provide country-level livestock GDP contribution estimates (30-50 percent of agricultural GDP in East Africa) and pastoralist population estimates (20 million). Useful for problem framing and scale. Limitation: modeled estimates with uncertain denominators; not sub-national.

### Limited

- **PPR GEP eradication reports**: The FAO-WOAH Global Eradication Programme publishes country-level vaccination coverage and PPR endemicity status. Useful for tracking control progress. Limitation: coverage data is country-aggregated; pastoralist area-specific vaccination rates are not systematically reported. The programme targets eradication by 2030 but mid-term assessments indicate insufficient coverage in remote pastoralist zones.
- **Livestock market price data**: Weekly market prices exist for some East African livestock markets (e.g., Ethiopia, Kenya) but there is no standardized cross-country system. Useful for price anomaly detection where available. Limitation: market coverage is spatially uneven, price reporting is inconsistent, and market closure during outbreaks creates data gaps exactly when information is most needed.
- **Livestock population census**: District-level livestock population data from national censuses. Provides herd size denominators. Limitation: census recency varies by country (some >10 years old), pastoralist mobility makes point-in-time counts unreliable, and species composition (cattle, sheep, goats, camels) is not always disaggregated.

### Rejected

- **Community syndromic surveillance**: No systematic, cross-country syndromic surveillance system exists for livestock diseases in East African pastoralist areas. Individual NGO or research projects have piloted mobile-based syndromic reporting, but these are not sustained or comparable across regions. This is the core data gap between satellite-based environmental risk and ground-level disease confirmation.

## Required Dataset Properties

For any dataset accepted into canonical livestock disease and livelihood risk analysis:

- Disease case definition and reporting protocol (confirmed vs suspected, laboratory confirmation rate).
- Outbreak reporting date and location precision (coordinates, district, or country only).
- NDVI product version, composite period, and cloud-contamination handling.
- Rainfall dataset version, spatial resolution, and station density in the target region.
- Market price source, frequency, and species coverage.
- Livestock population denominator source, census year, and species disaggregation.
- License or reuse permission.

## Rejection Rule

A dataset is rejected for canonical disease-livelihood risk analysis if disease reporting methodology, forage index construction, or geographic grain cannot be verified. Sources that provide only country-level aggregates without sub-national data may be used as context but not as proof of pastoralist-area risk. Syndromic surveillance data from pilot projects without sustained coverage is insufficient for risk mapping.
