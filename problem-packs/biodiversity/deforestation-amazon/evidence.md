# Evidence Ledger

## Current Evidence Records

The machine-readable ledger is `evidence.json`.

## Evidence Notes

### INPE PRODES

Use this source as the gold-standard reference dataset for Amazon deforestation. PRODES is the official Brazilian monitoring system and the most authoritative long-term deforestation record. Its 6.25 ha minimum mapping unit means small clearings are missed. Brazilian Amazon only — other Amazon countries lack an equivalent system.

### Barlow et al. 2016 Nature

Use this source for the combined effect of deforestation and disturbance on Amazon biodiversity across multiple taxonomic groups. The original evidence record for this slot (Albert et al. 2021, DOI 10.1126/science.abf3872) was found to have a broken URL during verify:sources on 2026-06-07 and was replaced. This is the verify:sources protocol working correctly — broken URLs are caught and evidence records are updated.

### Hansen/GLAD Alerts

Use this source for near-real-time deforestation detection. GLAD enables weekly monitoring but detects tree cover loss generically — it does not distinguish between deforestation, fire, and selective logging.

### GBIF Occurrence Data

Use this source for species occurrence records to estimate ranges and intersect with deforestation. Occurrence density is severely biased toward accessible areas near research stations and rivers. Vast Amazon interior is under-sampled. Records reflect sampling effort, not species distribution. Cannot establish population decline without repeated survey data.

### IUCN Red List Range Maps

Use this source for expert-drawn species range polygons to intersect with deforestation data. Range maps are extent-of-occurrence polygons that overestimate actual occupancy. Static snapshots may not reflect recent range contractions. Intersection with 30 m deforestation data implies false precision at range edges. Biased toward vertebrates; many Amazon species are not assessed.

### MapBiomas Land Cover

Use this source for land cover classification and deforestation-to-land-use transition analysis. Brazil-only coverage. 30 m resolution with 25+ classes and a transition matrix. ML classification can produce temporal inconsistencies. Accuracy varies by biome and year. Does not attribute causal drivers.

### Hansen et al. 2013 Global Forest Change

Use this source as the global 30 m forest change baseline. Measures tree cover loss, not deforestation. Plantation harvest, fire, and natural dieback all counted as loss. Forest definition threshold (canopy cover percentage) affects results. Annual updates available via Global Forest Watch.

### Global Forest Watch Platform

Use this source for integrated access to multiple forest monitoring datasets. Aggregates Hansen loss maps, GLAD alerts, GLAD-S2 alerts, and fire alerts with different definitions, resolutions, and update frequencies. These products must not be conflated in analysis. Does not provide land cover classification.

## Evidence Quality Rule

Evidence is not accepted because it sounds plausible. It is accepted when the source, method, limitations, and confidence are explicit enough for a reviewer to attack.
