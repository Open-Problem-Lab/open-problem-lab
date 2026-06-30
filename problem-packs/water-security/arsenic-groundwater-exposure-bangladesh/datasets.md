# Dataset Inventory

## Candidate Sources

| Source                           | Grain                              | Status             | Use                                                     |
| -------------------------------- | ---------------------------------- | ------------------ | ------------------------------------------------------- |
| BGS/DPHE Phase 1 survey          | District, well-level (3,534 wells) | Usable             | Baseline arsenic concentration map, depth relationship  |
| EHP systematic review (2024)     | National, upazila-level estimates  | Usable             | Population exposure estimate, dose-response             |
| BAMWSP testing records           | Project-level, upazila (partial)   | Limited            | Historical testing coverage; outdated for current state |
| WorldPop population data         | 100m gridded, upazila, union       | Usable             | Population denominator for exposure estimation          |
| Flanagan et al. well-depth study | Upazila, well-depth intervals      | Usable             | Depth-arsenic relationship for testing prioritisation   |
| WHO arsenic fact sheet           | Global                             | Usable for framing | Guideline value, health-effects classification          |
| National Arsenic Mitigation cell | Upazila (if available)             | Needs verification | Current testing coverage status                         |

## Source Classification Rationale

### Usable

- **BGS/DPHE Phase 1 survey**: The foundational national survey. Provides district-level arsenic statistics and well-depth data for 3,534 wells. Limitation: 1998-1999 data, does not reflect post-2000 well installations.
- **EHP systematic review (2024)**: Peer-reviewed synthesis of exposure estimates and health effects. Provides the most current population-exposure range (35-77 million). Limitation: modeled estimates from aggregated studies.
- **WorldPop**: Open-access population data at 100m resolution. Provides denominators for estimating exposed population at upazila and union grain. Limitation: population, not water-source data.
- **Flanagan et al. (2012)**: Peer-reviewed study of well-depth-arsenic relationship. Critical for prioritising which untested wells to test. Limitation: depth-arsenic relationship varies by geological zone.
- **WHO arsenic fact sheet**: Authoritative source for guideline value and health-effects framing. Limitation: global, not Bangladesh-specific.

### Limited

- **BAMWSP testing records**: The 1.4 million well-testing campaign provides historical coverage data, but the records are 20 years old, coverage is uneven at upazila grain, and no systematic public dataset of current testing status exists. Useful as a historical baseline but not as a current coverage map.

### Needs Verification

- **National Arsenic Mitigation Cell records**: Bangladesh's national arsenic mitigation programme may hold more current testing coverage data at upazila grain. Whether this data is publicly accessible, systematically structured, or available for external analysis has not been verified. A contributor should check accessibility before classifying.

## Required Dataset Properties

For any dataset accepted into canonical arsenic exposure analysis:

- Arsenic measurement method (field kit, laboratory AAS, ICP-MS).
- Geographic grain (district, upazila, union, well-level).
- Temporal coverage and measurement date.
- Well depth and installation date where available.
- Population denominator source and coastal-zone definition (if applicable).
- Testing and marking status (tested, untested, marked red, marked green, mark removed).
- License or reuse permission.

## Rejection Rule

A dataset is rejected for canonical exposure-risk analysis if measurement method, geographic grain, or temporal coverage cannot be verified. Sources that provide only national or global aggregates without sub-national data may be used as context but not as proof of upazila-level exposure risk.
