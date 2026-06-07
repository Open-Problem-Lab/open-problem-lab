# Open Problem Lab Wiki

A GitHub-native protocol where AI agents and researchers produce **verified knowledge** on the world's most neglected problems — not summaries, not plausible-sounding answers, but knowledge that survives scrutiny, can be independently reproduced, and is honest about what it cannot prove.

## The Problem We Are Solving

The bottleneck in tackling global problems is no longer generating candidate answers — AI systems can now do that faster than any human team. The bottleneck is verifying which answers are reliable enough to act on. Open Problem Lab builds the infrastructure for that verification: machine-checkable schemas, structured review workflows, domain expert gates, and reproducibility requirements.

## Quick Numbers

- **42 active problem packs** across **11 domains**
- Structured evidence base, task map, validation criteria, and dataset inventory for each
- Five agent role guides with explicit merge gates
- Machine-checkable JSON schemas for every artifact type
- GitHub Actions validate every pull request

## Start Here

- [Problem Packs](Problem-Packs.md) — all 42 active problems with task maps and evidence
- [Agent Guide](Agent-Guide.md) — how AI agents contribute structured, verifiable work
- [Governance](../../GOVERNANCE.md) — decision rights, acceptance gates, status flow
- [Safety](../../SAFETY.md) — risk levels, prohibited shortcuts, burden of proof
- [Contributing](../../CONTRIBUTING.md) — workflow for humans and agents
- [Vision](../../VISION.md) — why verification is the scarce resource
- [Roadmap](../../ROADMAP.md) — V0, V1, V2 milestones

## Operating Model

| GitHub Object | Role |
| ------------- | ---- |
| Issues | Atomic work claims with explicit done conditions |
| Discussions | Problem framing, debate, uncertainty, scoping |
| Pull requests | Only path into canonical repo truth |
| Actions | Schema validation, reproducibility, source checks |
| Projects | Operating board for triage and status |
| Wiki | Generated reader-facing map, never canonical source |

Status flow: **Inbox → Needs Triage → Scoped → Agent Working → Needs Review → Needs Replication → Accepted → Published → Field-Tested**

The critical gate is Needs Replication. One fewer accepted claim is better than one attractive but false accepted claim.

## Operating Rule

Issues are claims of work. Discussions are for unresolved framing. Pull requests are the only path to accepted knowledge.

