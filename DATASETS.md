# Global Dataset Registry

A cross-problem reference to open datasets used across Open Problem Lab problem packs. Every entry here is or should be documented in the relevant pack's `datasets.md` and `evidence.json`.

This file is maintained as a discovery aid. It is not canonical — the canonical dataset record lives in the problem pack. When a dataset is accepted into a pack, update the pack's `datasets.md` and `evidence.json`, then update this index.

---

## Climate and Earth Observation

| Dataset | What it covers | Packs |
|---------|---------------|-------|
| **ERA5-Land** (Copernicus/ECMWF) | Temperature, rainfall reanalysis globally at 9km, monthly/hourly from 1950 | malaria-early-warning-africa, dengue-heat-vietnam, heat-stress-urban-south-asia, drought-early-warning-horn-of-africa |
| **CHIRPS** (Climate Hazards Group) | Rainfall estimates at 0.05°, daily from 1981, strong Sub-Saharan Africa coverage | malaria-early-warning-africa, locust-outbreak-east-africa, drought-early-warning-horn-of-africa |
| **MODIS LST** (NASA) | Land surface temperature at 1km, Terra/Aqua 8-day and monthly | heat-stress-urban-south-asia, coral-bleaching-great-barrier-reef |
| **Sentinel-2 / Landsat** (ESA / USGS) | Multispectral land cover, 10m–30m, free access | deforestation-amazon, locust-outbreak-east-africa |
| **PROBA-V / MODIS NDVI** | Vegetation indices weekly/monthly for drought and locust monitoring | locust-outbreak-east-africa, drought-early-warning-horn-of-africa |
| **NOAA Coral Reef Watch (CRW)** | Sea surface temperature, thermal stress alerts for bleaching | coral-bleaching-great-barrier-reef |
| **NASA GRACE / GRACE-FO** | Satellite gravimetry for groundwater mass changes monthly | groundwater-depletion-india, glacial-melt-hindu-kush |
| **ICIMOD glacier inventories** | Hindu Kush Himalaya glacier mass balance and extent | glacial-melt-hindu-kush |
| **NASA WorldWind / Copernicus DEMs** | Digital elevation models for sea-level and flood exposure | sea-level-rise-small-islands, cyclone-early-warning-bangladesh |
| **ECMWF SEAS5** | 7-month seasonal forecast ensemble for rainfall and temperature | malaria-early-warning-africa, drought-early-warning-horn-of-africa |

## Health Surveillance

| Dataset | What it covers | Packs |
|---------|---------------|-------|
| **WHO Global Health Observatory** | Country-level mortality, disease burden, intervention coverage | malaria-early-warning-africa, dengue-heat-vietnam, stunting-sub-saharan-africa |
| **DHIS2** | Sub-national health management information systems, varies by country | malaria-early-warning-africa, dengue-heat-vietnam |
| **DHS (Demographic and Health Surveys)** | Nationally representative household surveys, 90+ countries | stunting-sub-saharan-africa, open-defecation-india, indoor-air-pollution-sub-saharan-africa |
| **WHO Global Database on Child Growth** | Stunting, wasting, underweight estimates by country and year | stunting-sub-saharan-africa |
| **WHO/UNICEF JMP** | Water, sanitation, hygiene coverage at country and sub-national level | open-defecation-india |
| **AIMS (Australian Institute of Marine Science)** | Great Barrier Reef monitoring including bleaching surveys | coral-bleaching-great-barrier-reef |
| **NHMRC Lead Exposure Databases** | Blood lead level surveys in LMICs | lead-exposure-urban-global |

## Food Security and Agriculture

| Dataset | What it covers | Packs |
|---------|---------------|-------|
| **FEWS NET** | Food security early warning for Sub-Saharan Africa, Central America, South Asia | drought-early-warning-horn-of-africa, locust-outbreak-east-africa |
| **IPC (Integrated Food Security Phase Classification)** | Food security phases at country and sub-national scale | drought-early-warning-horn-of-africa |
| **FAO GIEWS** | Global crop monitoring and early warning | drought-early-warning-horn-of-africa, locust-outbreak-east-africa |
| **ECMWF CAMS** | Atmospheric dust and wind for locust wind trajectory modeling | locust-outbreak-east-africa |
| **World Food Programme VAM** | Market prices, food access monitoring | drought-early-warning-horn-of-africa |
| **APHLIS** | Post-harvest loss data for Sub-Saharan Africa cereals | food-security context |

## Education

| Dataset | What it covers | Packs |
|---------|---------------|-------|
| **USAID EdData** | Learning assessments in LMICs | learning-loss-post-pandemic |
| **PASEC / SACMEQ** | Regional learning assessments in Sub-Saharan Africa | learning-loss-post-pandemic, girls-education-sub-saharan-africa |
| **UNESCO Institute for Statistics (UIS)** | Enrollment, completion, literacy rates nationally | girls-education-sub-saharan-africa, learning-loss-post-pandemic |
| **World Bank MICS** | Multiple Indicator Cluster Surveys including education | girls-education-sub-saharan-africa |

## Energy Access

| Dataset | What it covers | Packs |
|---------|---------------|-------|
| **Global Solar Atlas** (World Bank) | Long-run average solar irradiance globally | mini-grid-rural-sub-saharan-africa |
| **ESMAP / SE4All Global Tracking Framework** | Electrification rates and access tiers nationally | mini-grid-rural-sub-saharan-africa, clean-cooking-sub-saharan-africa |
| **WHO Household Energy Database** | Fuel type and cooking technology surveys | indoor-air-pollution-sub-saharan-africa, clean-cooking-sub-saharan-africa |
| **Open Street Map settlements** | Rural settlement location data | mini-grid-rural-sub-saharan-africa |
| **WorldPop** | Population distribution at 100m globally | mini-grid-rural-sub-saharan-africa, cyclone-early-warning-bangladesh |

## Population and Poverty

| Dataset | What it covers | Packs |
|---------|---------------|-------|
| **WorldPop** | Gridded population at 100m globally | most packs |
| **GPW (Gridded Population of the World)** | Population count and density globally | most packs |
| **World Bank PovcalNet / Poverty and Inequality Platform** | Poverty rates and distribution | stunting-sub-saharan-africa, lead-exposure-urban-global |
| **GHSL (Global Human Settlement Layer)** | Built-up area, urban form globally | heat-stress-urban-south-asia, lead-exposure-urban-global |

## Disaster Risk

| Dataset | What it covers | Packs |
|---------|---------------|-------|
| **NOAA IBTrACS** | Global tropical cyclone track archive | cyclone-early-warning-bangladesh |
| **GEBCO / ETOPO** | Bathymetry and coastal topography | sea-level-rise-small-islands, cyclone-early-warning-bangladesh |
| **Global Earthquake Model (GEM) OpenQuake** | Seismic hazard models globally | earthquake-vulnerability-nepal |
| **NDRRMA Nepal building surveys** | Post-Gorkha earthquake building damage classification | earthquake-vulnerability-nepal |
| **NASA SRTM / Copernicus DEM** | Elevation for flood and surge exposure | cyclone-early-warning-bangladesh, sea-level-rise-small-islands |

## Air Quality

| Dataset | What it covers | Packs |
|---------|---------------|-------|
| **Atmospheric Composition Analysis Group (ACAG)** | Global PM2.5 satellite-derived estimates | pm25-monitoring-south-asia |
| **OpenAQ** | Aggregated low-cost sensor and reference monitor data | pm25-monitoring-south-asia |
| **WHO Global Ambient Air Quality Database** | Country-level PM2.5 concentrations and monitoring coverage | pm25-monitoring-south-asia, indoor-air-pollution-sub-saharan-africa |
| **Global Burden of Disease (IHME)** | Health burden estimates attributable to air pollution | pm25-monitoring-south-asia, indoor-air-pollution-sub-saharan-africa |

---

## Dataset Quality Requirements

Before a dataset is accepted into a problem pack's `evidence.json`, it must have:
- Verified URL with permanent or archived access
- Source date and access date
- Geographic grain documented
- Case definition or variable definitions documented
- License or reuse permission documented
- Known limitations listed
- Denominator source (where applicable)

Use `pnpm verify:sources` to check URL availability after adding or modifying evidence records.

## Adding a Dataset

1. Add the dataset to the relevant pack's `datasets.md` with source, grain, status, and intended use.
2. Add an `evidence.json` record with URL, date, method, and limitations.
3. Update this file under the appropriate category.
4. Run `pnpm validate` and `pnpm verify:sources`.
