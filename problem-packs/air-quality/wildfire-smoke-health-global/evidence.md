# Evidence Ledger

## Current Evidence Records

The machine-readable ledger is `evidence.json`.

## Evidence Notes

### Burke et al. 2021 Lancet Planetary Health

Use this source for the global wildfire-smoke mortality burden and differential toxicity framing. The 339,000 annual premature deaths figure is modeled, not observed — it depends on satellite AOD-derived exposure estimates, population data, and concentration-response functions that each carry uncertainty. The 2-3x differential toxicity finding is based on oxidative-potential measurements from a limited number of fire types and is not yet a consensus finding. Do not use the 25 percent, 2-3x, or 339,000 figures without noting their methodology-dependent uncertainty and the fact that concentration-response functions are derived primarily from North American and Australian studies.

### NOAA HMS Smoke Plumes

Use HMS as a smoke-presence indicator, not a quantitative PM2.5 proxy. Smoke-density categories (light, medium, heavy) are analyst-assigned, not calibrated to ground-level PM2.5. HMS cannot detect smoke under clouds or at night. For epidemiological analysis, HMS plume data must be combined with chemical-transport model output and validated against ground monitors — do not use HMS plume polygons alone as an exposure metric.

### GEOS-Chem Composition

GEOS-Chem provides the best available global estimate of smoke-specific PM2.5 fractions, but model resolution (approximately 25 km) smooths local smoke gradients. Model performance varies by region — better validated in North America than in Southeast Asia or Sub-Saharan Africa. Smoke-specific fractions depend on assumed organic-matter-to-organic-carbon ratios that vary by fuel type. Always document which fire-emissions inventory (GFED vs. GFAS) was used and report model-vs-monitor validation results for the specific region analyzed.

### Respiratory Emergency Visit Meta-Analysis

Use this source for the pooled effect estimate range (5-15 percent respiratory visit increase) with the critical caveat that over 80 percent of included studies are from high-income countries. LMIC fire-prone regions — Southeast Asia peat fires, Sub-Saharan African savanna fires, South American cerrado fires — are severely underrepresented. Do not extrapolate North American effect estimates to LMIC populations without explicit transferability caveats and documentation of the evidence gap.

## Evidence Quality Rule

Evidence is not accepted because it sounds plausible. It is accepted when the source, method, limitations, and confidence are explicit enough for a reviewer to attack.
