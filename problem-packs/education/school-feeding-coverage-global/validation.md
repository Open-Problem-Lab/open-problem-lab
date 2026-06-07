# Validation

## Validation Layers

| Layer           | Gate                                                                 |
| --------------- | -------------------------------------------------------------------- |
| Structure       | `pnpm validate` passes schemas and problem-pack completeness checks  |
| Evidence        | Every claim has a dated evidence record                              |
| Reproducibility | Quantitative artifacts include rerunnable steps                      |
| Review          | Required reviewer roles approve or request changes                   |
| Replication     | Safety-sensitive or quantitative claims are independently reproduced |

## Baseline Requirements

Sub-national school feeding analyses must document:

- Coverage data source (WFP survey, national program reports) with sub-national granularity assessment.
- Meal-quality data availability — explicitly document whether nutritional content is measured.
- Enrollment and attendance data source for effect estimation.
- Nutrition-outcome data source (DHS, MICS) with anthropometric indicator documentation.
- Concurrent nutrition intervention documentation — explicitly state what other nutrition programs operate in the analyzed context.

## Coverage-Mapping Requirements

No coverage claim may be called actionable until it includes:

- Sub-national granularity — explicitly state whether data is national aggregate or district-level.
- Coverage-gap documentation — state where sub-national data is absent.
- Program-quality context — document what type of feeding (cooked meals, snacks, take-home rations) the coverage represents.
- Comparison with at least one published school feeding coverage analysis for a similar low-income country context.

## Nutritional-Impact Requirements

No nutritional-impact claim may be merged without:

- Meal-quality and nutritional-content documentation — explicitly state whether meal adequacy is measured.
- Enrollment-vs-nutrition distinction — explicitly state whether the claimed effect is on enrollment/attendance (strong evidence) or nutrition (weaker evidence).
- Concurrent-intervention confounds — document what other nutrition programs may explain observed outcomes.
- Non-use case documentation (not for claiming nutritional impact without meal-quality data, not for program expansion without outcome evidence, not for conflating enrollment effects with nutrition effects).
