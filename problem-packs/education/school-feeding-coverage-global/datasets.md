# Dataset Inventory

## Candidate Sources

| Source                                  | Grain                       | Current status             | Use                                                    |
| --------------------------------------- | --------------------------- | -------------------------- | ------------------------------------------------------ |
| WFP school feeding annual survey        | Country, annual             | Usable, self-reported      | National coverage and program-design data              |
| National school feeding program reports | District/school, variable   | Variable by country        | Sub-national coverage where available                  |
| Education EMIS school-level data        | School, annual              | Variable by country        | School-level feeding program status and enrollment     |
| DHS anthropometric data                 | Household/cluster, periodic | Usable, publicly available | Child nutrition outcomes (height-for-age, BMI-for-age) |
| MICS child nutrition modules            | Household, periodic         | Usable, publicly available | Dietary diversity and micronutrient status indicators  |
| WFP meal-quality assessment data        | School, variable            | Sparse, program-specific   | Nutritional content and meal adequacy documentation    |
| School feeding cost data                | Program, variable           | Variable, self-reported    | Cost-effectiveness analysis                            |
| Enrollment and attendance data          | School/district, annual     | Variable by country        | Enrollment and attendance effect assessment            |
| Household food-security surveys         | Household, periodic         | Usable, publicly available | Food-security context for targeting analysis           |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Coverage-data granularity — explicitly document whether national aggregate or sub-national.
- Meal-quality data availability — document whether nutritional content is measured.
- Access conditions and license.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., national-only coverage, self-reported data, no meal-quality measurement) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
