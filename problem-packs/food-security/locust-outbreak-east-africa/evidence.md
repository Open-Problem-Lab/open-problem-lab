# Evidence Ledger

## Current Evidence Records

The machine-readable ledger is `evidence.json`.

## Evidence Notes

### FAO Desert Locust Factsheet

Use this source for global desert locust biology, migration patterns, and FAO's operational early warning framework. Do not use it as proof of signal accuracy at any specific location.

### FAO East Africa Upsurge 2019-2020

Use this source for the scale, timeline, and control costs of the most recent major East Africa upsurge. The crisis response framing provides the why-it-matters context for early warning improvement.

### Ceccato et al. 2020 Remote Sensing Review

Use this source as the strongest initial evidence that remote sensing can detect breeding habitat but has not been validated for swarm formation warning. Treat this as a map of the signal-validation gap this pack targets.

### MODIS NDVI (MOD13Q1)

The primary vegetation index product for locust breeding habitat detection. 250m, 16-day composites from 2000. Used by FAO Locust Watch and in peer-reviewed studies. Do not treat NDVI green-up as proof of breeding; it is a habitat suitability indicator. Cloud contamination creates monsoon-season gaps.

### CHIRPS Rainfall

The primary rainfall product for locust breeding trigger detection. 0.05 degree, daily from 1981. Public domain. Rainfall is necessary but not sufficient for breeding; soil moisture and temperature must also be suitable. Station density is extremely sparse in remote breeding areas.

### SMAP Soil Moisture

Provides soil moisture at 9km from 2015. Complements rainfall as a direct measure of egg-laying conditions. Measures only top 5cm while eggs are laid at 5-15cm depth. No coverage before 2015.

### ERA5 Wind Fields

The standard reanalysis for swarm trajectory modeling. 0.25 degree, hourly from 1950. Free with Copernicus registration. Resolution is coarse for terrain-channelled winds; represents mean conditions, not gust fronts. Copernicus CDS may not be accessible from CI runners.

### FAO Locust Watch Bulletins

The primary ground truth source. Monthly situation bulletins from 2003 with swarm locations, breeding sites, and control operations. PDF format requires manual extraction. Reporting gaps in conflict zones. Monthly cadence vs weekly breeding cycle. Reports observations, not absences.

### Salih et al. 2023

Peer-reviewed analysis linking the 2019-2020 upsurge to climate-change-induced cyclone activity in the Arabian Sea. Provides the mechanism for the most recent major outbreak. Specific to this event; may not generalize to all upsurges.

### Gituku et al. 2024

Peer-reviewed spatial analysis of environmental predictors of locust breeding in East Africa. Closest existing validation of NDVI-rainfall signals against FAO reports. 60 percent explanation rate, 2-8 week lead-time variability. Covers only 2019-2020 upsurge period.

## Evidence Quality Rule

Evidence is not accepted because it sounds plausible. It is accepted when the source, method, limitations, and confidence are explicit enough for a reviewer to attack. Every evidence record must have a stable URL (DOI or archive snapshot preferred). Sources that provide only global aggregates without sub-national grain are context, not proof of sub-regional breeding or swarm risk.
