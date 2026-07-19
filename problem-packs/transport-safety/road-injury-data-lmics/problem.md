# Road-Traffic Injury Undercount And Safety Allocation In LMIC Cities

## Problem Statement

Low- and middle-income cities often make road-safety and emergency-care decisions from police crash records that do not share a common identifier or definition with hospital and death-registration systems. The v0 problem is not “predict crashes” or “rank dangerous roads.” It is:

> For one city and a bounded time period, how much road-injury burden is missed or misclassified by police-only data, and does a reproducible linkage of de-identified police, hospital, and death records change a named allocation review?

## Known Facts

- Verified fact: WHO’s Global status report on road safety 2023 estimates 1.19 million annual road-traffic deaths and reports that the global baseline covers 2010–2021.
- Verified fact: The World Bank’s World Development Report 2021 states that official road-crash data captured only 56% of fatalities in low- and middle-income countries on average in its cited comparison.
- Verified fact: WHO identifies road traffic injuries as a major injury burden and states that about 90% of injury-related deaths occur in low- and middle-income countries.
- Verified fact: World Bank documentation describes Nairobi police crash reports being digitized and geolocated because paper records were not being converted into timely policy information.

## Uncertain Areas

- The undercount percentage is not a universal city parameter; it depends on definitions, access to care, reporting incentives, linkage quality, and the period used.
- Police, hospital, ambulance, and death records may refer to different events, time windows, severity definitions, and geographic grains.
- A more complete burden map may not imply that an engineering, enforcement, or trauma-capacity intervention is effective.
- Linkage can create privacy, re-identification, and exclusion risks, especially for undocumented or uninsured road users.

## Candidate Ranking Used For Discovery

| Candidate                                                  | Scale and source                                                                                                                                                                             | Tractability                                                                                                                         | Neglectedness / evidence gap                                                                                                | Why this pack was not chosen instead                                                       |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Road-injury undercount in LMIC cities                      | 1.19 million annual road deaths globally; LMIC official data captured 56% of fatalities on average in the cited World Bank comparison (WHO 2023; World Bank 2021).                           | Linked administrative records, deterministic/probabilistic matching, and a de-identified audit sample can test the measurement gap.  | The decision is city corridor and trauma-capacity prioritization; the missingness and linkage bias are themselves testable. | Selected because it is the strongest uncovered allocation-relevant measurement wedge.      |
| Drowning prevention data in low-income coastal communities | WHO reports a 38% global fall in drowning death rate since 2000 but calls drowning overlooked; the 2024 report is global and does not supply a bounded city linkage wedge.                   | Interventions exist, but the proposed measurement task would require a new geography and exposure frame.                             | Some dedicated prevention funding and a new WHO global report reduce the marginal evidence gap relative to this pack.       | Deprioritized because the first task was less sharply tied to a named allocation decision. |
| Disabling hearing-loss service access                      | WHO estimates 430 million people require rehabilitation, including 34 million children (WHO fact sheet).                                                                                     | Screening and rehabilitation pathways are tractable, but outcome and service-utilization data need a different health-system design. | Large burden, but the immediate missingness is not as tightly coupled to a single undercount mechanism.                     | Deprioritized because scale alone did not beat the road-injury decision wedge.             |
| Agricultural heat exposure and worker injury               | Global burden is plausible but heterogeneous across occupations and countries; this run did not identify a single primary source with a comparable global estimate and decision-ready grain. | Exposure measurement is possible, but attribution and denominator choices are load-bearing.                                          | Evidence gap is real but less bounded for a first pack than linked crash records.                                           | Deprioritized because the quantified case was less source-secure in this run.              |

## Initial Scope

This pack accepts:

- Source inventories for police, hospital, ambulance, death-registration, road-network, and population data.
- Reproducible, de-identified record-linkage and duplicate-audit methods.
- Capture-recapture or coverage-gap analyses with explicit assumptions.
- City-level decision briefs that state whether and how a result would change an allocation review.
- Privacy, equity, red-team, and field-reality review.

This pack does not accept:

- Identifiable patient or vehicle data.
- Public accusations against named drivers, hospitals, police units, or neighborhoods.
- Unvalidated crash-risk forecasts, automated enforcement, or direct infrastructure orders.
- Treating a more complete map as proof that an intervention is causally effective.

## Done Condition For V0

The pack is useful when one city-specific, de-identified linkage artifact has been independently rerun, its capture limitations are quantified, and a field reviewer can state whether it would change one real allocation review without treating the result as causal intervention evidence.
