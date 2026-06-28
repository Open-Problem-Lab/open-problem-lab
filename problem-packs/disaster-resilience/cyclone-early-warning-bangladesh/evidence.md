# Evidence Ledger

## Current Evidence Records

The machine-readable ledger is `evidence.json`.

## Evidence Notes

### Haque et al. 2012 Mortality Review

Use this source as the landmark evidence for Bangladesh's cyclone mortality reduction success. This establishes the life-saving value of the warning system but does not provide signal-level verification for modern forecast products.

### IFRC Bangladesh CPP Documentation

Use this source for the operational architecture of the Cyclone Preparedness Programme — volunteer numbers, shelter inventory, and warning dissemination methods. The CPP is the bridge between a verified signal and a life-saving action. Operational statistics require direct CPP government data access (cpp.gov.bd).

### Pavani et al. 2023 Track Error Verification

Use this source for the most recent peer-reviewed track forecast error statistics over the North Indian Ocean. The DPE values (68 km at 12h, 92 km at 24h, 150 km at 48h, 232 km at 72h) define the spatial resolution problem for district-level evacuation decisions. These figures supersede the previously cited Mohapatra et al. 2020 study (DOI 10.1007/s00703-020-00745-8), which was retracted or removed and returns HTTP 404 as of 2026-06-28. Note that these are quasi-operational WRF model errors, not official IMD operational forecasts.

### NOAA IBTrACS Archive

Use this source as the historical cyclone track verification baseline. IBTrACS merges all WMO-sanctioned best tracks plus JTWC records at 6-hourly intervals from 1842 to present. Cite the specific version used, as updates can revise historical tracks. Best-track intensity values before the satellite era (pre-1965) are less reliable.

### JTWC Best Track Archive

Use this source as an independent cross-reference for IBTrACS and IMD best tracks in the Bay of Bengal. JTWC uses 1-minute sustained wind averaging while IMD uses 3-minute and BMD uses 10-minute, so intensity comparisons require unit conversion. Not the official WMO record for the Bay of Bengal; use as cross-reference, not as primary track for operational verification.

### WorldPop Bangladesh Population Data

Use this source for coastal population exposure estimates at 100m resolution. Sufficient for union-level exposure analysis. The 2022 Bangladesh census may not yet be fully reflected in WorldPop estimates. Top-down disaggregation may undercount char land and informal settlement populations.

### GEBCO Bathymetry

Use this source for storm surge model bathymetric input. GEBCO provides global ocean depth at 15 arc-second resolution, covering the Bay of Bengal continental shelf. Near-shore depth accuracy degrades in shallow water under 20m due to satellite altimetry limitations. Storm surge models for district-level verification may require higher-resolution local bathymetry from BMD or Bangladesh Inland Water Transport Authority.

## Evidence Quality Rule

Evidence is not accepted because it sounds plausible. It is accepted when the source, method, limitations, and confidence are explicit enough for a reviewer to attack.
