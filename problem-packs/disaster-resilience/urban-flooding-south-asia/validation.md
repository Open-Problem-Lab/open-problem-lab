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

Sub-national urban pluvial flooding analyses must document:

- Satellite impervious-surface product used (Landsat) with classification methodology, accuracy assessment, and temporal coverage.
- Drainage-data availability assessment — explicitly state whether drainage infrastructure data exists for the analyzed city or whether impervious-surface proxies are used.
- Rainfall-extreme data source and temporal resolution — document whether sub-daily rainfall data is available for flash-flood analysis.
- SAR flood-extent validation methodology — document urban-canyon limitations (radar shadow, layover) and accuracy reduction in dense areas.
- Informal-settlement boundary data availability and flood-exposure documentation.

## Flood-Risk Mapping Requirements

No flood-risk claim may be called actionable until it includes:

- Data-integration methodology for impervious surface, drainage capacity, and rainfall extremes — document which layers use direct data vs. proxies.
- Historical flood-extent validation — compare risk map against at least one observed flood event from Sentinel-1 SAR, with documented SAR accuracy limitations.
- Drainage-data limitation documentation — explicitly state what drainage information is available and what is assumed or absent.
- Neighborhood-scale results with informal-settlement exposure assessment.
- Comparison with at least one published flood-risk study for a similar South Asian megacity.

## Eviction-Safety Requirements

No flood-risk output may be published without:

- Informal-settlement exposure documentation — explicitly state what share of flood-exposed population lives in informal settlements.
- Eviction-risk disclaimer — explicitly state that flood maps must not be used to justify eviction without providing alternative housing and drainage improvement.
- Infrastructure-investment framing — present flood-risk maps as tools for drainage-upgrade prioritization, not displacement.
- Non-use case documentation (not for informal-settlement eviction, not for land-use regulation without drainage improvement, not for presenting proxy-based risk as verified drainage inadequacy).
