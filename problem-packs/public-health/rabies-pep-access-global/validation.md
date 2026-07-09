# Validation

## Schema Gates

- `problem.json` must validate against `schemas/problem.schema.json`.
- `tasks.json` must validate against `schemas/task.schema.json`.
- `evidence.json` must validate against `schemas/evidence.schema.json`.
- Any future `claims.json` must validate against `schemas/claim.schema.json` and include a kill condition.

## Component Separation Rule

An artifact fails review if it uses "PEP access" without stating which component is measured:

- wound washing and first-contact counseling
- exposure-category or bite-risk assessment
- human rabies vaccine availability
- route and regimen capacity, especially intradermal delivery
- RIG or monoclonal antibody availability when indicated
- patient cost and travel burden
- reporting cadence and denominator quality
- dog-vaccination and animal-rabies context

## Source Classification Rule

Every source in the inventory must be classified as:

- usable: directly measures at least one named component at a stated grain
- limited: useful for framing or taxonomy but insufficient for component-level analysis
- rejected: cannot verify the target component or has inaccessible, undated, or unstable evidence

## Kill Conditions For Future Claims

Future claims must state the specific observation that would make them false. Examples:

- A claim that a country has a vaccine-procurement bottleneck is false if current public procurement and stock records show sufficient vaccine supply at target facility tiers but persistent lack of RIG, triage, or completion.
- A claim that RIG is the binding bottleneck is false if severe-exposure records show RIG availability and use at target facility tiers while first-dose vaccine delay or patient cost remains the main access barrier.
- A claim that public evidence is sufficient for allocation analysis is false if a replicator cannot recover the source, date, grain, denominator, or component measured.

## Review Gate

Quantitative rankings, patient-facing guidance, facility comparisons, and product-substitution interpretations are high-risk outputs. They require domain review, red-team review, and replication before acceptance.
