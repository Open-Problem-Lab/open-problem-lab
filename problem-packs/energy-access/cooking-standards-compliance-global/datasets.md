# Dataset Inventory

## Candidate Sources

| Source                                     | Grain                         | Current status                        | Use                                                              |
| ------------------------------------------ | ----------------------------- | ------------------------------------- | ---------------------------------------------------------------- |
| ISO 19867-1 laboratory test data           | Stove model, lab              | Usable, laboratory only               | Laboratory performance benchmarks for stove categories           |
| IWA performance tier data                  | Stove model, lab              | Usable, laboratory only               | Performance tier classification and standards reference          |
| Field-performance study database           | Stove/household, variable     | Sparse, research-dependent            | Lab-field gap documentation for specific stove-fuel combinations |
| Global Alliance monitoring data            | Program, variable             | Usable, coverage < 5% deployed stoves | Field-performance monitoring and compliance assessment           |
| National testing-laboratory reports        | Stove model, country-specific | Variable by country                   | Independent compliance verification where infrastructure exists  |
| WHO HAP mortality estimates                | Country, modeled              | Usable, publicly available            | Health-burden baseline for clean-cooking context                 |
| Household survey cooking-fuel data         | Household, periodic           | Usable, publicly available            | Adoption rates and fuel-mix documentation                        |
| Stove-market sales data                    | Market, variable              | Variable, often proprietary           | Market composition and stove-category distribution               |
| Fuel-moisture and cooking-practice studies | Household, variable           | Sparse, research-dependent            | Degradation-factor analysis for lab-field gap                    |

## Required Dataset Properties

- Date range and temporal resolution.
- Geographic grain and spatial resolution.
- Lab-vs-field performance documentation — explicitly state which measurement context.
- Verification-system coverage — document what share of deployed stoves have independent verification.
- Stove-category specificity (improved biomass, LPG, ethanol, biogas, electric).
- Access conditions and license.

## Rejection Rule

A dataset is rejected for canonical analysis if grain, date range, license, or method cannot be verified. Datasets with known limitations (e.g., lab-only data without field validation, < 5% monitoring coverage) may be listed as limited with explicit documentation. Rejected datasets may still be listed as context.
