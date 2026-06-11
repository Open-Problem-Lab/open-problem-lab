# Playbooks

## Analyst Playbook

1. Start with `problem.json`, `evidence.json`, and `tasks.json`.
2. Before writing any claim, state which measure family you are using:
   survey-based under-5 registration, certificate possession, or administrative live-birth completeness.
3. Add evidence before claims.
4. Prefer one country with clear measurement discipline over ten countries with fuzzy comparability.
5. Run the cheapest disconfirming test early:
   if survey registration and administrative completeness refer to different numerators, denominators, or time windows, block any simple side-by-side ranking.
6. If you propose a health-service linkage angle, name the touchpoint explicitly:
   facility birth, postnatal care, immunization, community health worker visit, or another concrete workflow.
7. Mark every operational inference as reviewed, replicated, or blocked.

## Reviewer Playbook

Ask six questions:

1. What exact birth-registration measure is being claimed?
2. What source proves it, and is that source survey-based, administrative, or workflow guidance?
3. What numerator, denominator, and time reference are being used?
4. What would make the claim false, especially if survey status and CRVS completeness diverge?
5. Is the artifact naming a real touchpoint or only gesturing vaguely at "health-service linkage"?
6. Who could misuse it, especially to justify punitive enforcement or to blame families for system failures?

## Field-Reality Playbook

Do not ask whether the map looks persuasive. Ask whether it would change a named decision for a named user at a useful time, without creating exclusion incentives.

For this pack, the likely users are:

- a civil registrar deciding where to add service points or notification staff
- an immunization manager deciding whether registration status should be checked or referred during child-health contact
- a health-information officer deciding whether registration and service records can be joined without distorting denominators

Every field-facing note should also state explicit non-use cases:

- not for withholding vaccines, care, or benefits
- not for household-level enforcement
- not for comparing countries or districts when the underlying measure families differ
