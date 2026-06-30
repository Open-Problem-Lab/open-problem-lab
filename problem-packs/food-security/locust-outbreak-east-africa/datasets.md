# Dataset Inventory

## Candidate Sources

| Source                           | Grain                          | Status   | Use                                                       |
| -------------------------------- | ------------------------------ | -------- | --------------------------------------------------------- |
| MODIS NDVI (MOD13Q1)             | 250m, 16-day, 2000-present     | Usable   | Vegetation greenness as breeding habitat proxy            |
| CHIRPS rainfall                  | 0.05 deg, daily, 1981-present  | Usable   | Rainfall anomaly for breeding trigger detection           |
| SMAP soil moisture               | 9km, 2-3 day, 2015-present     | Usable   | Soil moisture as egg-laying condition indicator           |
| ERA5 wind fields                 | 0.25 deg, hourly, 1950-present | Usable   | Swarm trajectory modeling at regional scale               |
| FAO Locust Watch bulletins       | Country/region, monthly        | Usable   | Field-reported swarm location and timing as ground truth  |
| Salih et al. 2023                | Regional, single event         | Usable   | Cyclone-breeding linkage for 2019-2020 upsurge mechanism  |
| Gituku et al. 2024               | Sub-regional, 2019-2020        | Usable   | Spatial validation of NDVI-rainfall breeding signals      |
| MODIS NDVI (MOD13A2)             | 1km, 16-day                    | Limited  | Coarser alternative where 250m is not needed              |
| Sentinel-2 NDVI                  | 10m, 5-day, 2017-present       | Limited  | Higher resolution but shorter record and cloud gaps       |
| ERA5-Land soil temperature       | 0.1 deg, hourly, 1950-present  | Limited  | Soil temperature for egg development, not yet validated   |
| FAO eLocust3 digital reports     | Point-level, real-time         | Rejected | Not publicly accessible; restricted to FAO member states  |
| National meteorological stations | Point, daily                   | Rejected | Sparse in breeding areas, not publicly available at scale |

## Source Classification Rationale

### Usable

- **MODIS NDVI (MOD13Q1)**: The primary vegetation index product used in FAO Locust Watch and in peer-reviewed locust studies. 250m resolution and 16-day composites provide the temporal baseline for detecting vegetation green-up in breeding areas. NASA open data, no access restrictions. Limitation: 250m cannot resolve individual egg beds; 16-day composites may miss short green-up events; cloud contamination creates monsoon-season gaps; NDVI does not distinguish palatable from non-palatable vegetation.

- **CHIRPS rainfall**: The primary rainfall product used in locust early warning research. 0.05 degree resolution and daily temporal frequency from 1981 enable long-term anomaly analysis. Public domain, widely validated. Limitation: 5km resolution may miss localized convective events; station density is extremely sparse in remote breeding areas; rainfall is necessary but not sufficient for breeding.

- **SMAP soil moisture**: Provides soil moisture at 9km resolution from 2015, complementing rainfall as a direct measure of egg-laying conditions. NASA open data. Limitation: 9km is coarse for wadi-level conditions; measures only top 5cm while eggs are laid at 5-15cm; no coverage before 2015.

- **ERA5 wind fields**: The standard reanalysis for wind-driven trajectory modeling. 0.25 degree hourly data from 1950 enables long-period hindcasts. Free with Copernicus registration. Limitation: 27km resolution is coarse for terrain-channelled winds; reanalysis wind in data-sparse Horn of Africa relies on model output; represents mean conditions, not gust fronts.

- **FAO Locust Watch bulletins**: The primary ground truth source for validating remote sensing signals. Monthly situation bulletins from 2003 include swarm locations, breeding sites, and control operations. Limitation: PDF format requires manual extraction; reporting gaps in conflict zones; monthly cadence vs weekly breeding cycle; reports observations, not absences; province-level geographic precision.

- **Salih et al. 2023**: Peer-reviewed analysis linking the 2019-2020 upsurge to climate-change-induced cyclone activity. Provides the mechanism for the most recent major outbreak. Limitation: specific to one event; does not provide a generalizable early warning signal.

- **Gituku et al. 2024**: Peer-reviewed spatial analysis of environmental predictors of locust breeding in East Africa. Provides the closest existing validation of NDVI-rainfall signals against FAO reports, including lead-time distributions. Limitation: 60 percent explanation rate; 2-8 week lead-time variability; validation inherits FAO reporting bias; covers only 2019-2020 period.

### Limited

- **MODIS NDVI (MOD13A2)**: The 1km variant of MODIS NDVI. Useful where 250m resolution is unnecessary, reducing data volume. Limited because coarser grain loses spatial detail needed for sub-regional habitat mapping.

- **Sentinel-2 NDVI**: 10m resolution and 5-day revisit provide much finer spatial and temporal detail than MODIS. Limited because the record begins in 2017 (too short for long-term baseline), and cloud gaps in monsoon seasons are more disruptive at higher resolution where each pixel matters more.

- **ERA5-Land soil temperature**: Provides soil temperature at 0.1 degree resolution, relevant for locust egg development which requires 15-40 degrees C. Limited because no peer-reviewed locust study has validated ERA5-Land soil temperature against in-situ measurements in breeding areas; the variable is promising but unvalidated.

### Rejected

- **FAO eLocust3 digital reports**: FAO's digital field reporting system provides real-time, GPS-tagged locust observations from survey teams. This would be the ideal ground truth source. Rejected because eLocust3 data is restricted to FAO and national locust control units; it is not publicly accessible for independent validation or replication. A reviewer with FAO access could promote this to usable, but the pack cannot rely on it for open replication.

- **National meteorological station data**: Ground station rainfall and temperature data from East African national meteorological agencies. Rejected because station coverage in desert locust breeding areas is extremely sparse, and many agencies do not provide data in a machine-readable or openly licensed format. Individual station data may be obtainable through bilateral agreements but not at the scale needed for the pack.

## Required Dataset Properties

For any dataset accepted into canonical locust early warning analysis:

- Vegetation index source, product version, spatial resolution, composite interval, and cloud-gap handling.
- Rainfall product version, spatial resolution, temporal resolution, and station-density documentation.
- Soil moisture product, depth range, spatial resolution, and temporal coverage.
- Wind field source, pressure levels used, and vertical interpolation method.
- Field report source, reporting format, geographic precision, and known coverage gaps.
- Temporal coverage matching breeding cycle timescales (weekly to monthly).
- License or reuse permission.
- Known field-report coverage gaps in conflict zones.

## Rejection Rule

A dataset is rejected for canonical locust early warning analysis if spatial resolution, temporal coverage, access conditions, or methodology cannot be verified. Sources that provide only global or regional aggregates without sub-national grain may be used as context but not as proof of sub-regional breeding or swarm risk.
