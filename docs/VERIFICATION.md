# Verification

Verification is a merge gate, not a polish step.

## Local Checks

`pnpm validate` performs:

- JSON schema validation.
- Problem-pack completeness checks.
- Issue-form YAML checks.
- Markdown heading and local-link checks.
- Example agent submission and review checks.
- Generated Wiki freshness checks.

`pnpm verify:sources` performs live URL checks for evidence records. A `403` from a source is reported as reachable but access-limited because some publishers block automated fetches.

`pnpm reproducibility:check` checks that task artifacts point to real pack files and that high-risk tasks contain replication or back-test language.

## Evidence Standard

Every evidence record needs:

- Claim.
- Evidence type.
- Source title and URL.
- Source date.
- Access date.
- Method.
- Limitations.
- Confidence.

## Replication

Replication is required when a claim is quantitative, safety-sensitive, operational, or likely to change resource allocation.
