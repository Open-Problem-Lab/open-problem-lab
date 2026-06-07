# Dataset Inventory

## Candidate Sources

| Source                                | Grain                          | Current status                           | Use                                                      |
| ------------------------------------- | ------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| National EMIS teacher-qualification data | School/district, annual     | Variable by country, quality varies      | Teacher counts, qualifications, and deployment location  |
| Service Delivery Indicator surveys    | School, periodic               | Usable, limited country coverage         | Teacher-content knowledge and pedagogical-skill assessment |
| SACMEQ learning-outcome assessments   | School, periodic               | Usable, limited to participating countries | Student achievement linked to school-level teacher data |
| PASEC learning-outcome assessments    | School, periodic               | Usable, limited to Francophone Africa    | Student achievement linked to school-level teacher data  |
| ASER citizen-led assessments          | District, annual               | Usable, India and Pakistan               | Foundational learning outcomes at district scale         |
| UNESCO Institute for Statistics       | Country, annual                | Usable, publicly available               | Cross-country teacher and enrollment statistics          |
| DHS education modules                 | Household, periodic            | Usable, publicly available               | Education access and quality indicators from household perspective |
| Teacher-absence survey data           | School, variable               | Sparse, country-specific                 | Effective teaching time documentation                    |
| Rural-incentive program documentation | Program, variable              | Variable by country                      | Deployment-policy context and effectiveness assessment   |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- EMIS data quality — explicitly document update frequency, completeness, and public accessibility.
- Teacher-qualification definition — explicitly document what counts as 'trained' in each country.
- Cross-country comparability assessment — document harmonization methodology.
- Access conditions and license.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., EMIS quality variability, SDI limited country coverage) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
