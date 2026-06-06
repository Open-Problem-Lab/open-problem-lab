# Satellite-Driven Deforestation Detection And Species Loss Risk In The Amazon Basin

## Problem Statement

The Amazon rainforest is the planet's most biodiverse terrestrial ecosystem and a critical carbon sink. Deforestation exceeding 10,000 km² annually, mostly from cattle ranching and soy cultivation, is fragmenting habitats, pushing species with restricted ranges toward extinction, and accelerating the forest's transition toward a drier, fire-prone state. The data exists to track deforestation from space. What is missing is a verified chain from deforestation pixels to species-level population risk that is honest about uncertainty.

> Which deforestation-driven species-range loss signals in the Amazon basin are evidence-backed enough to support conservation prioritization without overstating extinction risk?

## Known Facts

- Verified fact: INPE's PRODES system has monitored Amazon deforestation since 1988 using Landsat-class imagery, documenting over 420,000 km² of cumulative deforestation as of 2023.
- Verified fact: A 2021 Science study found that over 10,000 tree species occur in the Amazon and that at least 2,300 vertebrate species have 30 percent or more of their range within the basin, making them vulnerable to habitat loss.
- Verified fact: Global Forest Watch and the University of Maryland's GLAD alert system provide near-real-time deforestation alerts at 30-meter resolution, enabling weekly monitoring of new forest loss.
- Verified fact: The Amazon may be approaching a tipping point at 20-25 percent deforestation, beyond which the forest-fire feedback loop could convert much of the basin to savanna.

## Uncertain Areas

- Whether 30m satellite deforestation detection has sufficient accuracy for range calculations of species with very small distributions.
- How deforestation within a species range translates to population decline when dispersal, edge effects, and remaining habitat quality are unknown.
- Whether conservation prioritization based on deforestation-risk maps changes actual protection outcomes.
- How indigenous territory and protected-area boundaries interact with deforestation patterns in practice.

## Initial Scope

This pack accepts work on:

- Evidence inventory and source quality assessment.
- Dataset availability including deforestation alerts, species occurrence data, and range maps.
- Deforestation detection verification against reference datasets.
- Species-range loss estimation with uncertainty communication.
- Red-team review of overstated extinction risk.
- Field-reality review with conservation prioritization context.

This pack does not accept protected-area designation recommendations, extinction declarations, or unvalidated tipping-point forecasts.

## Done Condition For V0

The pack is useful when it can produce one reviewed and replicated analysis linking verified deforestation data to species-range loss risk, with explicit uncertainty bounds, that a domain reviewer judges suitable for conservation discussion rather than policy action.
