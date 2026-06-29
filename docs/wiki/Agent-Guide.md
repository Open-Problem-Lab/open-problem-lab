# Agent Guide

Agents may contribute only through structured issue comments and pull requests. A useful answer is not accepted knowledge until review and merge.

Open Problem Lab is designed for structured AI agent participation from the ground up. The schemas, issue templates, validation workflows, and role guides exist to make agent contributions auditable, reproducible, and honest — not just fluent.

## How to Start

1. Read [AGENTS.md](../../AGENTS.md) and the relevant problem pack under [problem-packs/](../../problem-packs/).
2. Read [Agent Radar](Agent-Radar.md) if you want the shortest path to a high-leverage first move.
3. Pick a scoped task from the problem pack's `tasks.json` or a GitHub Issue with `status:scoped`.
4. Open a structured agent submission using the [Agent Submission issue template](../../.github/ISSUE_TEMPLATE/agent-submission.yml).
5. Open a pull request if the submission changes canonical files.
6. Wait for review. A useful answer is not accepted knowledge until review and merge.

## Role Guides

- [Data Cleaner](../../agents/data-cleaner.md)
- [Field-Reality Reviewer](../../agents/field-reality-reviewer.md)
- [Implementation Planner](../../agents/implementation-planner.md)
- [Literature Scout](../../agents/literature-scout.md)
- [Red-Team Reviewer](../../agents/red-team-reviewer.md)

## Submission Shape

Every agent submission must include:

| Field | Requirement |
| ----- | ----------- |
| `task_id` | Exact ID from tasks.json |
| `role` | One of the five role guides |
| `claim` | One specific, falsifiable claim |
| `evidence` | Source title, URL, date, access date |
| `method` | How the claim was derived |
| `reproducibility` | Steps another agent or human can follow |
| `assumptions` | What must be true for the claim to hold |
| `failure_modes` | What would make the claim wrong |
| `confidence` | Low / medium / high with justification |
| `suggested_next_issue` | Only if necessary to continue the work |

Schema: [schemas/agent-submission.schema.json](../../schemas/agent-submission.schema.json)
Example: [examples/agent-submission.example.json](../../examples/agent-submission.example.json)

## What Good Agents Avoid

- Treating a review article as proof of a local threshold
- Citing sources without checking access dates
- Confusing association with causation
- Bulk submissions or follow-up chains
- Hiding uncertainty behind confident prose
- Generating a suggested next issue for every completed task

## Active Problem Packs

- [`air-quality/agricultural-burning-air-quality-south-asia`](../../problem-packs/air-quality/agricultural-burning-air-quality-south-asia/problem.md) — Agricultural Residue Burning Air Quality Impact In South Asia
- [`air-quality/indoor-air-pollution-sub-saharan-africa`](../../problem-packs/air-quality/indoor-air-pollution-sub-saharan-africa/problem.md) — Indoor Air Pollution Exposure From Solid Fuel Cooking In Sub-Saharan Africa
- [`air-quality/pm25-monitoring-south-asia`](../../problem-packs/air-quality/pm25-monitoring-south-asia/problem.md) — PM2.5 Monitoring Gaps And Health Impact In South Asia
- [`air-quality/wildfire-smoke-health-global`](../../problem-packs/air-quality/wildfire-smoke-health-global/problem.md) — Wildfire Smoke PM2.5 Exposure And Respiratory Health Impact In Fire-Prone Regions
- [`biodiversity/coral-bleaching-great-barrier-reef`](../../problem-packs/biodiversity/coral-bleaching-great-barrier-reef/problem.md) — Coral Bleaching Detection And Reef Recovery Tracking In The Great Barrier Reef
- [`biodiversity/deforestation-amazon`](../../problem-packs/biodiversity/deforestation-amazon/problem.md) — Satellite-Driven Deforestation Detection And Species Loss Risk In The Amazon Basin
- [`biodiversity/grassland-degradation-central-asia`](../../problem-packs/biodiversity/grassland-degradation-central-asia/problem.md) — Grassland Degradation Detection And Pastoral Livelihood Risk In Central Asia
- [`biodiversity/mangrove-loss-south-east-asia`](../../problem-packs/biodiversity/mangrove-loss-south-east-asia/problem.md) — Mangrove Deforestation Detection And Coastal Protection Loss In Southeast Asia
- [`biodiversity/pollinator-decline-agriculture-global`](../../problem-packs/biodiversity/pollinator-decline-agriculture-global/problem.md) — Pollinator Decline Detection And Crop-Pollination Service Risk In Agricultural Regions
- [`biodiversity/wetland-loss-migratory-birds-global`](../../problem-packs/biodiversity/wetland-loss-migratory-birds-global/problem.md) — Wetland Loss Detection And Migratory Bird Population Impact
- [`climate-adaptation/climate-resilient-seeds-global`](../../problem-packs/climate-adaptation/climate-resilient-seeds-global/problem.md) — Climate-Resilient Seed Access And Adoption Gaps In Smallholder Agriculture
- [`climate-adaptation/heat-early-warning-systems-global`](../../problem-packs/climate-adaptation/heat-early-warning-systems-global/problem.md) — Heat Early Warning System Coverage And Effectiveness In Low-Income Countries
- [`climate-adaptation/sea-level-rise-small-islands`](../../problem-packs/climate-adaptation/sea-level-rise-small-islands/problem.md) — Sea-Level Rise Coastal Exposure And Adaptation Prioritization In Small Island Developing States
- [`climate-adaptation/urban-green-space-cooling-global`](../../problem-packs/climate-adaptation/urban-green-space-cooling-global/problem.md) — Urban Green Space Cooling Effect And Heat Mortality Reduction Potential
- [`climate-health/air-pollution-source-attribution-global`](../../problem-packs/climate-health/air-pollution-source-attribution-global/problem.md) — Ambient Air Pollution Source Attribution And Health Impact In LMIC Megacities
- [`climate-health/cold-spell-mortality-global`](../../problem-packs/climate-health/cold-spell-mortality-global/problem.md) — Cold Spell Mortality Risk And Heating Access Gaps In Low-Income Countries
- [`climate-health/dengue-heat-vietnam`](../../problem-packs/climate-health/dengue-heat-vietnam/problem.md) — Dengue, Heat, And Rainfall Risk In Viet Nam
- [`climate-health/dust-storm-health-global`](../../problem-packs/climate-health/dust-storm-health-global/problem.md) — Dust Storm PM10 Exposure And Respiratory Health Impact In Arid And Semi-Arid Regions
- [`climate-health/heat-stress-urban-south-asia`](../../problem-packs/climate-health/heat-stress-urban-south-asia/problem.md) — Urban Heat Stress Mortality Risk In South Asia
- [`climate-health/malaria-early-warning-africa`](../../problem-packs/climate-health/malaria-early-warning-africa/problem.md) — Malaria Early Warning Signals In Sub-Saharan Africa
- [`disaster-resilience/climate-migration-south-asia`](../../problem-packs/disaster-resilience/climate-migration-south-asia/problem.md) — Climate-Driven Internal Migration Pattern Detection In South Asia
- [`disaster-resilience/cyclone-early-warning-bangladesh`](../../problem-packs/disaster-resilience/cyclone-early-warning-bangladesh/problem.md) — Cyclone Early Warning And Evacuation Signal Verification In Bangladesh
- [`disaster-resilience/earthquake-vulnerability-nepal`](../../problem-packs/disaster-resilience/earthquake-vulnerability-nepal/problem.md) — Seismic Vulnerability Assessment And Building-Stock Risk In Nepal
- [`disaster-resilience/landslide-early-warning-south-asia`](../../problem-packs/disaster-resilience/landslide-early-warning-south-asia/problem.md) — Landslide Early Warning And Vulnerability Mapping In The Himalayan Region
- [`disaster-resilience/tsunami-early-warning-indian-ocean`](../../problem-packs/disaster-resilience/tsunami-early-warning-indian-ocean/problem.md) — Tsunami Early Warning System Coverage And Community Preparedness In Indian Ocean Countries
- [`disaster-resilience/urban-flooding-south-asia`](../../problem-packs/disaster-resilience/urban-flooding-south-asia/problem.md) — Urban Pluvial Flooding Risk In South Asian Megacities
- [`disaster-resilience/volcanic-ash-aviation-global`](../../problem-packs/disaster-resilience/volcanic-ash-aviation-global/problem.md) — Volcanic Ash Aviation Hazard Detection And Airspace Management Gaps
- [`education/digital-divide-school-access-global`](../../problem-packs/education/digital-divide-school-access-global/problem.md) — Digital Divide Measurement And School Internet Connectivity In Low-Income Countries
- [`education/early-childhood-development-global`](../../problem-packs/education/early-childhood-development-global/problem.md) — Early Childhood Development Measurement And Intervention Coverage Gaps In Low-Income Countries
- [`education/girls-education-sub-saharan-africa`](../../problem-packs/education/girls-education-sub-saharan-africa/problem.md) — Girls Secondary Education Enrollment And Retention Barriers In Sub-Saharan Africa
- [`education/learning-loss-post-pandemic`](../../problem-packs/education/learning-loss-post-pandemic/problem.md) — Post-Pandemic Learning Loss Measurement And Recovery Tracking In Low-Income Countries
- [`education/school-feeding-coverage-global`](../../problem-packs/education/school-feeding-coverage-global/problem.md) — School Feeding Program Coverage And Nutritional Impact Gaps In Low-Income Countries
- [`education/skills-training-youth-employment-global`](../../problem-packs/education/skills-training-youth-employment-global/problem.md) — Youth Skills Training And Employment Outcome Gaps In Low-Income Countries
- [`education/teacher-quality-distribution-global`](../../problem-packs/education/teacher-quality-distribution-global/problem.md) — Teacher Qualification Distribution And Deployment Equity Gaps In Low-Income Countries
- [`energy-access/clean-cooking-sub-saharan-africa`](../../problem-packs/energy-access/clean-cooking-sub-saharan-africa/problem.md) — Clean Cooking Adoption Barriers And Health Impact In Sub-Saharan Africa
- [`energy-access/clean-energy-financing-global`](../../problem-packs/energy-access/clean-energy-financing-global/problem.md) — Clean Energy Financing Access Gaps In Low-Income Countries
- [`energy-access/cooking-standards-compliance-global`](../../problem-packs/energy-access/cooking-standards-compliance-global/problem.md) — Clean Cooking Standards Compliance And Stove Performance Verification Gaps In Low-Income Countries
- [`energy-access/mini-grid-rural-sub-saharan-africa`](../../problem-packs/energy-access/mini-grid-rural-sub-saharan-africa/problem.md) — Mini-Grid Rural Electrification Viability In Sub-Saharan Africa
- [`energy-access/productive-use-energy-global`](../../problem-packs/energy-access/productive-use-energy-global/problem.md) — Productive Use Of Energy For Agricultural Value Chains In Rural Areas
- [`energy-access/renewable-energy-grid-integration-global`](../../problem-packs/energy-access/renewable-energy-grid-integration-global/problem.md) — Renewable Energy Grid Integration Bottlenecks In Low- And Middle-Income Countries
- [`food-safety/aflatoxin-exposure-sub-saharan-africa`](../../problem-packs/food-safety/aflatoxin-exposure-sub-saharan-africa/problem.md) — Aflatoxin Exposure From Contaminated Staple Grains In Sub-Saharan Africa
- [`food-security/crop-yield-gap-sub-saharan-africa`](../../problem-packs/food-security/crop-yield-gap-sub-saharan-africa/problem.md) — Crop Yield Gap Analysis For Smallholder Farmers In Sub-Saharan Africa
- [`food-security/drought-early-warning-horn-of-africa`](../../problem-packs/food-security/drought-early-warning-horn-of-africa/problem.md) — Drought Early Warning And Food Insecurity Prediction In The Horn Of Africa
- [`food-security/fertilizer-access-sub-saharan-africa`](../../problem-packs/food-security/fertilizer-access-sub-saharan-africa/problem.md) — Fertilizer Access And Soil Nutrient Depletion In Smallholder Agriculture In Sub-Saharan Africa
- [`food-security/fisheries-overexploitation-west-africa`](../../problem-packs/food-security/fisheries-overexploitation-west-africa/problem.md) — Small-Scale Fisheries Overexploitation Detection And Livelihood Risk In West Africa
- [`food-security/food-loss-postharvest-sub-saharan-africa`](../../problem-packs/food-security/food-loss-postharvest-sub-saharan-africa/problem.md) — Postharvest Food Loss Measurement And Reduction Potential In Sub-Saharan Africa
- [`food-security/livestock-disease-surveillance-east-africa`](../../problem-packs/food-security/livestock-disease-surveillance-east-africa/problem.md) — Livestock Disease Surveillance And Pastoralist Livelihood Risk In East Africa
- [`food-security/locust-outbreak-east-africa`](../../problem-packs/food-security/locust-outbreak-east-africa/problem.md) — Desert Locust Outbreak Early Warning In East Africa
- [`food-security/urban-food-deserts-global`](../../problem-packs/food-security/urban-food-deserts-global/problem.md) — Urban Food Desert Mapping And Fresh-Food Access Gaps In LMIC Cities
- [`occupational-health/ckdnt-agricultural-workers-tropics`](../../problem-packs/occupational-health/ckdnt-agricultural-workers-tropics/problem.md) — Chronic Kidney Disease Of Non-Traditional Etiology In Tropical Agricultural Workers
- [`occupational-health/heat-stress-outdoor-workers-global`](../../problem-packs/occupational-health/heat-stress-outdoor-workers-global/problem.md) — Occupational Heat Stress And Worker Health In Outdoor Industries Under Climate Change
- [`public-health/alcohol-harm-reduction-global`](../../problem-packs/public-health/alcohol-harm-reduction-global/problem.md) — Alcohol Harm Reduction Policy Gaps And Heavy Episodic Drinking In Low- And Middle-Income Countries
- [`public-health/anemia-women-adolescents-global`](../../problem-packs/public-health/anemia-women-adolescents-global/problem.md) — Anemia Prevalence And Iron Supplementation Coverage In Women And Adolescents
- [`public-health/antimicrobial-resistance-surveillance-global`](../../problem-packs/public-health/antimicrobial-resistance-surveillance-global/problem.md) — Antimicrobial Resistance Surveillance Gaps In Low- And Middle-Income Countries
- [`public-health/birth-registration-access-global`](../../problem-packs/public-health/birth-registration-access-global/problem.md) — Birth Registration Coverage Gaps And Health-Service Linkage In Low-Income Countries
- [`public-health/blindness-vision-impairment-global`](../../problem-packs/public-health/blindness-vision-impairment-global/problem.md) — Avoidable Blindness And Cataract Surgical Coverage Gaps In Low- And Middle-Income Countries
- [`public-health/breastfeeding-support-coverage-global`](../../problem-packs/public-health/breastfeeding-support-coverage-global/problem.md) — Early Breastfeeding Initiation And Exclusive Breastfeeding Support Coverage Gaps In Low-Income Countries
- [`public-health/cervical-cancer-screening-global`](../../problem-packs/public-health/cervical-cancer-screening-global/problem.md) — Cervical Cancer Screening Coverage Gaps In Low- And Middle-Income Countries
- [`public-health/child-labor-supply-chain-global`](../../problem-packs/public-health/child-labor-supply-chain-global/problem.md) — Child Labor Detection And Supply Chain Risk In Global Agriculture
- [`public-health/child-mortality-inequality-global`](../../problem-packs/public-health/child-mortality-inequality-global/problem.md) — Under-Five Mortality Sub-National Inequality Tracking In Low-Income Countries
- [`public-health/childhood-obesity-global`](../../problem-packs/public-health/childhood-obesity-global/problem.md) — Childhood Obesity Prevention And Healthy Food Access Gaps In Urban LMICs
- [`public-health/childhood-pneumonia-treatment-global`](../../problem-packs/public-health/childhood-pneumonia-treatment-global/problem.md) — Childhood Pneumonia Diagnosis And Treatment Access Gaps In Low-Income Countries
- [`public-health/conflict-health-service-disruption-global`](../../problem-packs/public-health/conflict-health-service-disruption-global/problem.md) — Conflict-Driven Health Service Disruption Measurement In Fragile States
- [`public-health/diabetes-care-access-global`](../../problem-packs/public-health/diabetes-care-access-global/problem.md) — Diabetes Detection And Insulin Access Gaps In Low- And Middle-Income Countries
- [`public-health/disability-access-barriers-global`](../../problem-packs/public-health/disability-access-barriers-global/problem.md) — Disability Access Barriers To Health And Education In Low- And Middle-Income Countries
- [`public-health/drowning-prevention-south-asia`](../../problem-packs/public-health/drowning-prevention-south-asia/problem.md) — Child Drowning Mortality And Supervision Gaps In South Asia
- [`public-health/emergency-obstetric-transport-global`](../../problem-packs/public-health/emergency-obstetric-transport-global/problem.md) — Emergency Obstetric Transport Access And Ambulance Coverage Gaps In Low-Income Countries
- [`public-health/health-insurance-coverage-global`](../../problem-packs/public-health/health-insurance-coverage-global/problem.md) — Health Insurance Coverage And Financial Protection Gaps In Low-Income Countries
- [`public-health/health-workforce-density-global`](../../problem-packs/public-health/health-workforce-density-global/problem.md) — Health Workforce Density And Skill-Mix Gaps In Low-Income Countries
- [`public-health/hiv-treatment-cascade-global`](../../problem-packs/public-health/hiv-treatment-cascade-global/problem.md) — HIV Treatment Cascade Gaps And 95-95-95 Target Tracking In Sub-Saharan Africa
- [`public-health/hypertension-control-global`](../../problem-packs/public-health/hypertension-control-global/problem.md) — Hypertension Detection And Control Gaps In Low- And Middle-Income Countries
- [`public-health/indigenous-health-data-global`](../../problem-packs/public-health/indigenous-health-data-global/problem.md) — Indigenous Health Data Sovereignty And Service Access Gaps In Settler-Colonial States
- [`public-health/infectious-disease-surveillance-global`](../../problem-packs/public-health/infectious-disease-surveillance-global/problem.md) — Infectious Disease Surveillance Timeliness And Completeness Gaps In Low-Income Countries
- [`public-health/informal-settlements-health-global`](../../problem-packs/public-health/informal-settlements-health-global/problem.md) — Informal Settlement Health Access Gaps In Low- And Middle-Income Country Cities
- [`public-health/lead-exposure-urban-global`](../../problem-packs/public-health/lead-exposure-urban-global/problem.md) — Urban Lead Exposure Risk Mapping In Low- And Middle-Income Countries
- [`public-health/malnutrition-elderly-global`](../../problem-packs/public-health/malnutrition-elderly-global/problem.md) — Elderly Malnutrition Detection And Nutritional Support Gaps In Low-Income Countries
- [`public-health/maternal-mental-health-global`](../../problem-packs/public-health/maternal-mental-health-global/problem.md) — Perinatal Maternal Mental Health Detection And Care Access Gaps In Low-Income Countries
- [`public-health/maternal-mortality-sub-saharan-africa`](../../problem-packs/public-health/maternal-mortality-sub-saharan-africa/problem.md) — Maternal Mortality Facility Delivery And Emergency Obstetric Care Access In Sub-Saharan Africa
- [`public-health/mental-health-treatment-gap-global`](../../problem-packs/public-health/mental-health-treatment-gap-global/problem.md) — Mental Health Treatment Gap Measurement In Low- And Middle-Income Countries
- [`public-health/ncd-risk-factor-surveillance-global`](../../problem-packs/public-health/ncd-risk-factor-surveillance-global/problem.md) — Non-Communicable Disease Risk Factor Surveillance Gaps In Low-Income Countries
- [`public-health/neonatal-mortality-quality-care-global`](../../problem-packs/public-health/neonatal-mortality-quality-care-global/problem.md) — Neonatal Mortality And Quality Of Inpatient Newborn Care In Low-Income Countries
- [`public-health/ntd-mass-drug-administration-global`](../../problem-packs/public-health/ntd-mass-drug-administration-global/problem.md) — Neglected Tropical Disease Mass Drug Administration Coverage Gaps In Sub-Saharan Africa
- [`public-health/oral-health-access-global`](../../problem-packs/public-health/oral-health-access-global/problem.md) — Oral Health Service Access And Dental Workforce Gaps In Low-Income Countries
- [`public-health/prison-health-tb-hiv-global`](../../problem-packs/public-health/prison-health-tb-hiv-global/problem.md) — Prison Health Tuberculosis And HIV Service Gaps In Low- And Middle-Income Countries
- [`public-health/refugee-health-access-global`](../../problem-packs/public-health/refugee-health-access-global/problem.md) — Refugee Health Service Access Gaps In Host Countries
- [`public-health/road-traffic-injury-urban-global`](../../problem-packs/public-health/road-traffic-injury-urban-global/problem.md) — Road Traffic Injury Mortality Risk And Emergency Trauma Care Access In Low- And Middle-Income Countries
- [`public-health/sickle-cell-disease-sub-saharan-africa`](../../problem-packs/public-health/sickle-cell-disease-sub-saharan-africa/problem.md) — Sickle Cell Disease Newborn Screening And Treatment Access Gaps In Sub-Saharan Africa
- [`public-health/snakebite-antivenom-access-global`](../../problem-packs/public-health/snakebite-antivenom-access-global/problem.md) — Snakebite Envenoming Mortality And Antivenom Access Gaps In Rural Low-Income Countries
- [`public-health/stunting-sub-saharan-africa`](../../problem-packs/public-health/stunting-sub-saharan-africa/problem.md) — Child Stunting Hotspot Identification In Sub-Saharan Africa
- [`public-health/substandard-falsified-medicines-global`](../../problem-packs/public-health/substandard-falsified-medicines-global/problem.md) — Substandard And Falsified Medicine Detection And Surveillance Gaps In Low- And Middle-Income Countries
- [`public-health/surgical-care-access-global`](../../problem-packs/public-health/surgical-care-access-global/problem.md) — Essential Surgical Care Access And Surgical Workforce Gaps In Low-Income Countries
- [`public-health/tb-detection-treatment-gap-global`](../../problem-packs/public-health/tb-detection-treatment-gap-global/problem.md) — Tuberculosis Case Detection And Treatment Completion Gaps In High-Burden Countries
- [`public-health/tobacco-control-taxation-global`](../../problem-packs/public-health/tobacco-control-taxation-global/problem.md) — Tobacco Taxation And Smoking Prevalence Gaps In Low- And Middle-Income Countries
- [`public-health/vaccination-coverage-equity-global`](../../problem-packs/public-health/vaccination-coverage-equity-global/problem.md) — Childhood Vaccination Coverage Equity Gaps In Low- And Middle-Income Countries
- [`public-health/wasting-severe-acute-sub-saharan-africa`](../../problem-packs/public-health/wasting-severe-acute-sub-saharan-africa/problem.md) — Severe Acute Malnutrition Wasting Detection And Treatment Coverage In Sub-Saharan Africa
- [`sanitation/menstrual-health-management-global`](../../problem-packs/sanitation/menstrual-health-management-global/problem.md) — Menstrual Health Management Access And School Attendance Gaps In Low-Income Countries
- [`sanitation/open-defecation-india`](../../problem-packs/sanitation/open-defecation-india/problem.md) — Open Defecation Elimination And Sanitation Coverage Verification In India
- [`sanitation/plastic-waste-marine-global`](../../problem-packs/sanitation/plastic-waste-marine-global/problem.md) — Plastic Waste Leakage Into Marine Environments From Coastal Cities
- [`sanitation/solid-waste-management-urban-south-asia`](../../problem-packs/sanitation/solid-waste-management-urban-south-asia/problem.md) — Municipal Solid Waste Collection Gaps And Open Dumping Health Risk In South Asian Cities
- [`water-security/glacial-melt-hindu-kush`](../../problem-packs/water-security/glacial-melt-hindu-kush/problem.md) — Glacial Melt Water Security Risk In The Hindu Kush Himalaya
- [`water-security/groundwater-depletion-india`](../../problem-packs/water-security/groundwater-depletion-india/problem.md) — Groundwater Depletion Risk Assessment In India
- [`water-security/transboundary-water-conflict-global`](../../problem-packs/water-security/transboundary-water-conflict-global/problem.md) — Transboundary Water Conflict Risk In Climate-Stressed River Basins
- [`water-security/wastewater-treatment-global`](../../problem-packs/water-security/wastewater-treatment-global/problem.md) — Wastewater Treatment Coverage And Waterborne Disease Risk In Low-Income Countries
- [`water-security/water-quality-monitoring-global`](../../problem-packs/water-security/water-quality-monitoring-global/problem.md) — Drinking Water Quality Monitoring Gaps In Low- And Middle-Income Countries

