# Desert Locust Outbreak Early Warning In East Africa

## Problem Statement

Desert locusts are the world's most dangerous migratory pest, capable of crossing continents and devastating crops across 20 percent of the Earth's land surface. The 2019-2020 East Africa upsurge was the worst in 70 years. Remote sensing of vegetation and soil moisture can help — FAO already uses it — but the gap between a satellite seeing green vegetation and a control team acting effectively remains dangerously wide.

> Which vegetation, soil moisture, and wind-driven locust outbreak signals are evidence-backed enough at sub-national scale to deserve replication and operational review?

## Known Facts

- Verified fact: FAO reports that a single square kilometer of a desert locust swarm can contain up to 80 million locusts and consume the same amount of food in one day as 35,000 people.
- Verified fact: The 2019-2020 East Africa upsurge threatened 23 million people across Ethiopia, Kenya, Somalia, and neighboring countries, requiring over $230 million in control operations.
- Verified fact: FAO's Desert Locust Information Service uses MODIS NDVI and rainfall estimates to flag potential breeding areas and has operationalized this into the Locust Watch platform.
- Verified fact: A 2020 review found that while remote sensing can identify likely breeding habitats, the transition from habitat detection to swarm formation warning remains poorly validated against field reports.
- Verified fact: A 2023 study linked the 2019-2020 upsurge to climate-change-induced cyclone activity in the Arabian Sea, where cyclones Mekunu and Luban (2018) deposited enough rainfall in the Empty Quarter to enable multiple generations of breeding before swarms migrated to East Africa.
- Verified fact: A 2024 spatial analysis found that vegetation green-up preceded by rainfall events explained approximately 60 percent of reported breeding site locations in East Africa, with lead times from green-up to swarm formation ranging from 2 to 8 weeks — too variable for reliable operational warning without field confirmation.

## Uncertain Areas

- Whether vegetation green-up signals provide enough lead time from breeding detection to swarm formation for effective control, given the 2-8 week variability found by Gituku et al. 2024.
- How wind field data at 0.25 degree ERA5 resolution can predict swarm movement trajectories with useful accuracy when terrain-channelled winds operate at finer scales.
- Whether field-survey confirmation capacity in conflict-affected areas of East Africa is sufficient to validate remote sensing alerts.
- How control-operation logistics interact with the timing of remote sensing alerts.
- Whether ERA5-Land soil temperature can serve as a validated predictor of egg development in breeding areas.

## Initial Scope

This pack accepts work on:

- Evidence inventory and source quality assessment.
- Dataset availability including vegetation indices, soil moisture, wind fields, and FAO field reports.
- Breeding-habitat suitability baseline construction.
- Reproducible outbreak signal models with false-alarm profiles by lead time.
- Red-team review of false alarms and harmful operational interpretations.
- Field-reality review with locust-control operational context.

This pack does not accept control-operation orders, pesticide recommendations, deployment commands, or unvalidated outbreak forecasts.

## Done Condition For V0

The pack is useful when it can produce one reviewed and replicated locust outbreak signal analysis, with lead-time distributions and false-alarm profiles, that a domain reviewer judges suitable for further discussion rather than control operations.
