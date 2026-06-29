# Dataset Inventory

## Candidate Sources

| Source                           | Grain                | Current status                                   | Use                                                           |
| -------------------------------- | -------------------- | ------------------------------------------------ | ------------------------------------------------------------- |
| Murray et al. 2022 (Lancet)      | National, modeled    | Usable as burden reference                       | AMR-attributable mortality estimates by region                |
| WHO GLASS program                | National, aggregated | Usable with caveats                              | Enrollment scope, resistance proportions, consumption data    |
| WHO AMR fact sheet               | Global summary       | Usable for framing                               | Global burden and surveillance rationale                      |
| IHME GBD Compare                 | National, modeled    | Limited — wide uncertainty for LMICs             | Cross-country AMR burden comparison; not sub-national         |
| Global-PPS                       | Hospital facility    | Limited — LMIC underrepresentation               | Antibiotic prescribing patterns; not resistance rates         |
| ResistanceMap (One Health Trust) | National, aggregated | Limited — sparse LMIC data, inconsistent updates | Country-level resistance rates for pathogen-drug combinations |

## Source Classification Rationale

### Usable

- **Murray et al. 2022 (Lancet)**: Peer-reviewed systematic analysis with transparent methods. Provides the most cited AMR mortality estimates. Limitation: model-based, not directly measured in most LMICs.
- **WHO GLASS program page**: Official WHO source for AMR surveillance system description. Provides enrollment data and program scope. Limitation: does not provide downloadable sub-national data.
- **WHO AMR fact sheet**: Official WHO summary of global AMR burden and surveillance rationale. Limitation: secondary presentation of Murray et al. estimates.

### Limited

- **IHME GBD Compare**: Provides country-level AMR burden estimates with uncertainty intervals, but estimates are model-based and carry wide uncertainty for low-surveillance countries. No sub-national grain. Depends on the same framework as Murray et al.
- **Global-PPS**: Provides hospital-level antibiotic prescribing data from 50+ countries, but LMIC hospital participation is limited and the dataset covers prescribing, not resistance. Useful for consumption context, not surveillance-gap mapping.
- **ResistanceMap**: Provides country-level resistance rates from 2000 onward, but LMIC data is sparse and may be outdated. Heterogeneous surveillance methodologies make cross-country comparison imprecise.

### Rejected

No sources were rejected outright. All candidate sources provide useful information within their stated limitations. The GLASS report URL used in the prior evidence record (`who-glass-report-2023`) was replaced with the GLASS program page because the fact sheet URL did not point to the GLASS report itself.

## Required Dataset Properties

For any dataset accepted into canonical surveillance-gap analysis:

- Date range.
- Geographic grain (national, sub-national, facility).
- Case definition (pathogen, specimen type, resistance mechanism).
- Reporting lag.
- Missingness.
- License or reuse permission.
- Denominator source (population, admissions, isolates).
- Known changes in surveillance methodology.

## Rejection Rule

A dataset is rejected for canonical surveillance-gap analysis if grain, date range, license, or surveillance methodology cannot be verified. Rejected datasets may still be listed as context.
