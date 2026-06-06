# Cyclone Early Warning And Evacuation Signal Verification In Bangladesh

## Problem Statement

Bangladesh's cyclone early warning system is among the world's most effective, having reduced mortality from 300,000 in 1970 to single digits in modern cyclones. The Cyclone Preparedness Programme, 76,000 volunteers, and over 14,000 cyclone shelters form the backbone. But every false alarm costs trust and money, and every under-warning costs lives. The question is not whether forecasting works — it does — but which signals at which lead times are reliable enough to trigger which evacuation actions.

> Which cyclone track, storm surge, and population exposure signals at which lead times are evidence-backed enough to support evacuation decision thresholds in coastal Bangladesh?

## Known Facts

- Verified fact: The 1970 Bhola cyclone killed an estimated 300,000-500,000 people. Cyclone Sidr (2007) killed 3,406. Cyclone Amphan (2020) killed 26. This mortality reduction is attributed to the Cyclone Preparedness Programme, early warning dissemination, and cyclone shelter construction.
- Verified fact: The Bangladesh Meteorological Department and the Joint Typhoon Warning Center provide cyclone track and intensity forecasts at 24, 48, and 72-hour lead times with varying skill.
- Verified fact: A 2020 study found that cyclone track forecast errors in the Bay of Bengal average 80-120 km at 48 hours and 50-80 km at 24 hours, meaning the difference between a direct hit and a near-miss for coastal districts.
- Verified fact: Storm surge height predictions remain challenging in the shallow, funnel-shaped Bay of Bengal, with significant underestimation in several major cyclones.

## Uncertain Areas

- What specific track error thresholds make an evacuation warning useful vs. harmful for a given coastal district.
- How storm surge model skill at district scale degrades with lead time.
- Whether population exposure data at the union level is current and accurate enough for evacuation planning.
- How many false alarms a community can absorb before evacuation compliance erodes.

## Initial Scope

This pack accepts work on:

- Evidence inventory and source quality assessment.
- Dataset availability including cyclone track data, storm surge models, population data, and shelter location data.
- Cyclone track forecast verification by lead time.
- Storm surge model verification against observed water levels.
- False-alarm profiling at evacuation-relevant lead times.
- Red-team review of false-confidence evacuation signals.
- Field-reality review with Bangladesh CPP operational context.

This pack does not accept direct evacuation orders, shelter construction recommendations, or unvalidated alert thresholds.

## Done Condition For V0

The pack is useful when it can produce one reviewed and replicated cyclone early warning signal analysis, with false-alarm profiles by lead time, that a domain reviewer and field-reality reviewer judge suitable for discussion with Bangladesh disaster management authorities.
