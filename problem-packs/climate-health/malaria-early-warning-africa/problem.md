# Malaria Early Warning Signals In Sub-Saharan Africa

## Problem Statement

Sub-Saharan Africa carries over 90 percent of global malaria deaths, and transmission is sensitive to rainfall, temperature, and land-surface change. The question is not whether climate affects malaria — it does — but whether those climate signals are strong enough at sub-national scales to improve early warning without creating false confidence.

> Which sub-national malaria-climate signals are evidence-backed enough to deserve replication and district-level operational review?

## Known Facts

- Verified fact: WHO reports 608,000 malaria deaths in 2022, with 95 percent occurring in Sub-Saharan Africa and 76 percent among children under five.
- Verified fact: WHO identifies vector control, chemoprevention, and early diagnosis as the core control strategies and notes that climate variability affects transmission seasonality.
- Verified fact: A 2021 systematic review found that climate-informed malaria early warning systems using rainfall and temperature predictors show moderate skill at seasonal lead times but high false-positive rates at sub-national scales.
- Verified fact: CHIRPS rainfall reanalysis and ERA5-Land temperature data are publicly available at resolutions suitable for district-level exploratory modeling across most of Sub-Saharan Africa.

## Uncertain Areas

- Whether sub-national health management information system data is accessible and reliable enough for model validation.
- Whether seasonal forecast skill degrades to useless levels for specific regions or transmission seasons.
- How local vector control campaigns, drug resistance patterns, and reporting practice interact with climate-driven signals.
- Whether any model output would change an actual district-level resource decision without causing harm.

## Initial Scope

This pack accepts work on:

- Evidence inventory and source quality assessment.
- Dataset availability including health surveillance, climate reanalysis, and population denominators.
- Sub-national baseline construction with documentation of missingness and reporting lag.
- Reproducible exploratory signal models with back-test results.
- Red-team review of false positives, false negatives, and harmful operational use.
- Field-reality review with district-level health operational context.

This pack does not accept direct medical advice, outbreak declarations, deployment commands, or unvalidated alert thresholds.

## Done Condition For V0

The pack is useful when it can produce one reviewed and replicated sub-national malaria-climate signal analysis, with clear limitations, that a domain reviewer judges suitable for further discussion rather than immediate operational use.
