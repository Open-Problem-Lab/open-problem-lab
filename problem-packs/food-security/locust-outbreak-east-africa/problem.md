# Desert Locust Outbreak Early Warning In East Africa

## Problem Statement

Desert locusts are the world's most dangerous migratory pest, capable of crossing continents and devastating crops across 20 percent of the Earth's land surface. The 2019-2020 East Africa upsurge was the worst in 70 years. Remote sensing of vegetation and soil moisture can help — FAO already uses it — but the gap between a satellite seeing green vegetation and a control team acting effectively remains dangerously wide.

> Which vegetation, soil moisture, and wind-driven locust outbreak signals are evidence-backed enough at sub-national scale to deserve replication and operational review?

## Known Facts

- Verified fact: FAO reports that a single square kilometer of a desert locust swarm can contain up to 80 million locusts and consume the same amount of food in one day as 35,000 people.
- Verified fact: The 2019-2020 East Africa upsurge threatened 23 million people across Ethiopia, Kenya, Somalia, and neighboring countries, requiring over $230 million in control operations.
- Verified fact: FAO's Desert Locust Information Service uses MODIS NDVI and rainfall estimates to flag potential breeding areas and has operationalized this into the Locust Watch platform.
- Verified fact: A 2020 review found that while remote sensing can identify likely breeding habitats, the transition from habitat detection to swarm formation warning remains poorly validated against field reports.

## Uncertain Areas

- Whether vegetation green-up signals provide enough lead time from breeding detection to swarm formation for effective control.
- How wind field data at actionable resolution can predict swarm movement trajectories with useful accuracy.
- Whether field-survey confirmation capacity in conflict-affected areas of East Africa is sufficient to validate remote sensing alerts.
- How control-operation logistics interact with the timing of remote sensing alerts.

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
