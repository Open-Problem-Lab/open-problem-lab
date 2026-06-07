# Volcanic Ash Aviation Hazard Detection And Airspace Management Gaps

## Problem Statement

Volcanic ash poses a severe and underestimated hazard to aviation — engine ingestion of ash can cause dual engine failure, abrasion of windshields and surfaces, and contamination of flight systems. The 2010 Eyjafjallajökull eruption caused over 100,000 flight cancellations and $5 billion in economic losses, exposing critical gaps in ash-detection and airspace-management systems. ICAO's nine Volcanic Ash Advisory Centers (VAACs) provide global monitoring, but ash-detection capability varies dramatically by region — the well-instrumented North Atlantic and Pacific have far better coverage than the East African Rift, Central Asian volcanic arcs, and Southeast Asian volcanic belts where monitoring infrastructure is sparse.

Satellite-based ash detection from MODIS, VIIRS, and infrared sounders can identify ash plumes, but distinguishing volcanic ash from meteorological clouds, dust, and smoke remains technically challenging, particularly at night and in multi-layer cloud conditions. Ash-transport models (HYSPLIT, NAME, FLEXPART) forecast plume dispersion but have substantial uncertainty in eruption-source parameters — ash height, mass loading, and particle-size distribution are rarely known in real time. The gap between ash detection and quantitative ash-concentration forecasting is the core operational challenge.

> Which volcanic regions and air-route corridors have the strongest evidence-backed gaps in ash-detection capability and ash-concentration forecasting accuracy?

## Known Facts

- Verified fact: ICAO's nine VAACs provide global volcanic ash monitoring and advisory services, but detection capability varies dramatically by region — the Buenos Aires, Darwin, and Toulouse VAACs cover regions with fewer ground-based volcanic monitoring stations than Anchorage, Tokyo, or Washington VAACs.
- Verified fact: Satellite infrared ash detection (split-window technique using 11 and 12 micron bands) can identify ash plumes but cannot reliably distinguish ash from ice clouds, water clouds, dust, or smoke — false-positive rates of 20-40 percent are documented in multi-source aerosol environments.
- Verified fact: Ash-transport models forecast plume dispersion but have substantial uncertainty from eruption-source parameters — ash column height, mass eruption rate, and particle-size distribution are rarely measured in real time and must be estimated from limited observations.
- Verified fact: The 2010 Eyjafjallajökull and 2011 Grímsvötn eruptions demonstrated that ash-concentration thresholds for safe flight are poorly defined — the 'zero tolerance' approach was replaced by risk-based thresholds, but the relationship between ash concentration and engine damage is still being characterized.

## Uncertain Areas

- Whether satellite ash detection in regions with frequent multi-source aerosol events (Saharan dust, biomass burning, industrial pollution) can achieve false-positive rates low enough for aviation operational use.
- How eruption-source parameter uncertainty propagates through ash-transport models into concentration-forecast uncertainty at specific air-route waypoints.
- Whether the current global volcanic monitoring network is sufficient for ash detection from eruptions in poorly monitored volcanic regions — submarine volcanoes and remote volcanic arcs are particularly challenging.

## Initial Scope

This pack accepts work on:

- Evidence inventory and source-quality assessment for satellite ash-detection products, volcanic monitoring networks, ash-transport models, and aviation operational data.
- Regional ash-detection capability mapping using satellite detection accuracy, ground-monitor density, and VAAC coverage data.
- Ash-concentration forecast uncertainty analysis documenting eruption-source parameter propagation.
- Red-team review of ash-detection overstatement and the risk of false-negative missed detections in poorly monitored regions.
- Field-reality review with aviation safety authorities and airline operations centers.

This pack does not accept airspace closure recommendations, ash-concentration safe-flight thresholds, or unvalidated ash-detection alerts.

## Done Condition For V0

The pack is useful when it can produce one reviewed and replicated regional ash-detection capability and forecast-uncertainty analysis for at least two volcanic regions, with explicit documentation of satellite detection limitations, eruption-source parameter uncertainty, and monitoring-network coverage gaps.
