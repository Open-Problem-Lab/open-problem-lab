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

Sub-national landslide-susceptibility analyses must document:

- Satellite slope-stability product used (InSAR) with resolution, revisit cycle, and terrain-specific performance limitations.
- Rainfall-trigger model documentation with precipitation product source, threshold methodology, and mountainous-terrain accuracy assessment.
- Landslide inventory data used for model validation with completeness assessment for remote Himalayan valleys.
- Population and infrastructure exposure data with settlement-detection methodology.
- Susceptibility-vs-prediction distinction — explicitly state that maps are probabilistic, not predictive.

## Susceptibility-Mapping Requirements

No susceptibility claim may be called actionable until it includes:

- InSAR performance documentation for the specific terrain type — document coherence loss in forests, geometric distortions on steep slopes, and atmospheric phase delays.
- Rainfall-threshold methodology with mountainous-terrain accuracy caveats and micro-climate variation documentation.
- Comparison with at least one published landslide inventory for validation, with explicit documentation of inventory completeness limitations.
- Sensitivity analysis showing how susceptibility classification changes under alternative rainfall thresholds or InSAR processing parameters.
- Non-prediction disclaimer — explicitly state that susceptibility maps do not indicate when or where specific landslides will occur.

## Early-Warning Requirements

No early-warning claim based on susceptibility analysis may be merged without:

- Operational-system documentation — explicitly state whether an operational early-warning system exists for the analyzed region and its coverage limitations.
- Warning-to-evacuation pipeline assessment — document whether the warning can reach communities and trigger protective action in useful time.
- Terrain-specific warning limitations — document how steep terrain, micro-climate variation, and sparse monitoring affect warning reliability.
- Non-use case documentation (not for village-relocation decisions, not for road-closure without ground verification, not for deterministic prediction claims).
