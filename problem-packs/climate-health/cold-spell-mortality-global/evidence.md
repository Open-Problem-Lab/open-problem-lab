# Evidence Ledger

## Current Evidence Records

The machine-readable ledger is `evidence.json`.

## Evidence Notes

### Gasparrini et al. 2015 Lancet

Use this source for the global cold-vs-heat mortality ratio baseline with the critical caveat that only one of 13 countries (Thailand) was a lower-middle-income country. The temperature-mortality relationship is derived almost entirely from high-income populations with heating, insulation, and health-system access that LMIC populations lack. Extrapolating to Kathmandu, Addis Ababa, or La Paz is epidemiologically invalid without local data. The 20:1 ratio is a global aggregate — individual regions vary substantially. Always document the extrapolation limitation when applying this to LMIC contexts.

### LMIC Cold Mortality Data Gap

Use this source to document the fundamental evidence constraint: cold-spell mortality data is almost universally absent from LMIC vital registration systems. This means any cold-mortality risk map for LMICs must rely on proxy indicators (temperature exposure, housing quality) rather than observed mortality data. The absence of data does not mean the absence of mortality — it means the burden is unmeasured and invisible to policy. Document this gap explicitly in every output.

### DHS Housing Quality Proxies

Use DHS housing-quality data as cold-exposure vulnerability proxies, with the critical caveat that the correlation between housing materials and actual indoor temperature during cold spells has not been systematically validated. A metal-roof household with no insulation may have indoor temperatures nearly identical to outdoor temperatures. DHS does not measure indoor temperature directly. Heated-fuel type does not capture whether fuel is used for space heating or whether it is affordable during cold spells. Always document these proxy limitations.

### ERA5-Land Cold Spell Analysis

Use ERA5-Land for cold-spell frequency and intensity mapping, with the caveat that 0.1-degree resolution (~10km) may not capture valley-scale temperature inversions and cold-air pooling in mountainous terrain. Reanalysis products interpolate between sparse observations in LMIC mountain regions, increasing uncertainty. Daily minimum temperature represents grid-cell averages, not the coldest locations within cells. The product has not been systematically validated against ground stations in most high-altitude LMIC regions.

## Evidence Quality Rule

Evidence is not accepted because it sounds plausible. It is accepted when the source, method, limitations, and confidence are explicit enough for a reviewer to attack.
