# Evidence Ledger

## Current Evidence Records

The machine-readable ledger is `evidence.json`.

## Evidence Notes

### IPCC AR6 Sea Level Rise

Use this source as the authoritative global and regional SLR projection baseline. The 0.4-0.8 m by 2100 range is the consensus estimate. Regional variation of ±30 percent and ice-sheet deep uncertainty must be carried through to any island-scale analysis.

### World Bank SIDS Vulnerability

Use this source for SIDS exposure framing — maximum elevations, coastal population concentration, and fiscal constraints on adaptation. Elevation statistics depend on DEM quality, which varies across islands.

### Wahl et al. 2021 Extreme Sea Levels

Use this source for the strongest evidence that SLR is already increasing coastal flood frequency. The return-period shift is dramatic but based on sparse tide-gauge data in SIDS regions.

### CoastalDEM (Kulp & Strauss 2019)

Use this source as the best available global coastal elevation model for inundation mapping. The 0.5 m residual vertical error is large relative to projected SLR for atolls under 5 m — any exposure map built on it must carry uncertainty bounds. Validated against US/Australian lidar only; no SIDS-specific validation exists.

### NASA Sea Level Change Portal

Use this source for satellite altimetry observations of global and regional SLR trends. Measures open-ocean sea surface height, not coastal water levels. 0.25 degree resolution is too coarse for individual island exposure. Useful for verifying that regional SLR trends are consistent with IPCC projections.

### WorldPop Population Data

Use this source for gridded population estimates within coastal inundation zones. Census currency varies by SIDS; some estimates are over 10 years old. 100 m resolution is sufficient for island-scale but may miss fine-scale shoreline clustering.

### GEBCO Bathymetry

Use this source for nearshore bathymetry input to storm-surge models. Limited by sparse sonar coverage in SIDS waters and ~450 m resolution. Bathymetry errors propagate into storm-surge model uncertainty. Too coarse for reef-flat scale wave-runup modeling.

### PSMSL Tide Gauge Database

Use this source for local sea-level trend estimation where records exist. SIDS coverage is extremely sparse — fewer than 20 active gauges across all SIDS. Most records are too short for robust trend estimation. Measures relative sea level including local vertical land motion.

## Evidence Quality Rule

Evidence is not accepted because it sounds plausible. It is accepted when the source, method, limitations, and confidence are explicit enough for a reviewer to attack.
