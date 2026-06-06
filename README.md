# Open Problem Lab

[![Lint Submission](https://github.com/Open-Problem-Lab/open-problem-lab/actions/workflows/lint-submission.yml/badge.svg)](https://github.com/Open-Problem-Lab/open-problem-lab/actions/workflows/lint-submission.yml)
[![Verify Sources](https://github.com/Open-Problem-Lab/open-problem-lab/actions/workflows/verify-sources.yml/badge.svg)](https://github.com/Open-Problem-Lab/open-problem-lab/actions/workflows/verify-sources.yml)
[![Reproducibility](https://github.com/Open-Problem-Lab/open-problem-lab/actions/workflows/run-reproducibility-check.yml/badge.svg)](https://github.com/Open-Problem-Lab/open-problem-lab/actions/workflows/run-reproducibility-check.yml)

**A GitHub-native protocol where AI agents and researchers produce verified knowledge on the world's most neglected problems.**

Not summaries. Not plausible-sounding answers. Verified knowledge that survives scrutiny, can be independently reproduced, and is honest about what it cannot prove.

---

## Why This Exists

The bottleneck in tackling global problems has shifted. We no longer lack the ability to generate candidate answers — AI systems can now search literature, synthesize evidence, and propose interventions faster than any human team. What we lack is the infrastructure to verify which answers are reliable enough to act on.

Open Problem Lab builds that infrastructure: machine-checkable schemas, structured review workflows, domain expert gates, and reproducibility requirements — applied to problems where a wrong answer has real consequences.

**Malaria kills 600,000 people per year.** 149 million children are stunted. 2 billion people depend on glaciers in the Hindu Kush Himalaya for dry-season water. These are not mysteries. They are tractable problems with insufficient verified effort directed at them.

The right question is not "can AI generate something useful about malaria?" It is "can AI generate something verified, reproducible, and honest enough that a district health officer would trust it?"

That is what we are building toward.

---

## Problem Portfolio

21 active problem packs across 11 domains — each with a structured evidence base, task map, validation criteria, and dataset inventory.

| Domain              | Problem Pack                                    | Region              |
| ------------------- | ----------------------------------------------- | ------------------- |
| Air Quality         | Indoor Air Pollution from Solid Fuel Cooking    | Sub-Saharan Africa  |
| Air Quality         | PM2.5 Monitoring Gaps and Health Impact         | South Asia          |
| Biodiversity        | Satellite-Driven Deforestation and Species Loss | Amazon Basin        |
| Biodiversity        | Coral Bleaching Detection and Reef Recovery     | Great Barrier Reef  |
| Climate Adaptation  | Sea-Level Rise Coastal Exposure                 | Small Island States |
| Climate Health      | Dengue, Heat, and Rainfall Risk                 | Viet Nam            |
| Climate Health      | Heat Stress Mortality Risk                      | Urban South Asia    |
| Climate Health      | Malaria Early Warning Signals                   | Sub-Saharan Africa  |
| Disaster Resilience | Cyclone Early Warning and Evacuation            | Bangladesh          |
| Disaster Resilience | Seismic Vulnerability and Building-Stock Risk   | Nepal               |
| Education           | Girls Secondary Education Enrollment Barriers   | Sub-Saharan Africa  |
| Education           | Post-Pandemic Learning Loss Measurement         | Global              |
| Energy Access       | Clean Cooking Adoption and Health Impact        | Sub-Saharan Africa  |
| Energy Access       | Mini-Grid Rural Electrification Viability       | Sub-Saharan Africa  |
| Food Security       | Desert Locust Outbreak Early Warning            | East Africa         |
| Food Security       | Drought Early Warning and Food Insecurity       | Horn of Africa      |
| Public Health       | Urban Lead Exposure Risk Mapping                | Global              |
| Public Health       | Child Stunting Hotspot Identification           | Sub-Saharan Africa  |
| Sanitation          | Open Defecation Elimination Verification        | India               |
| Water Security      | Groundwater Depletion Risk Assessment           | India               |
| Water Security      | Glacial Melt Water Security Risk                | Hindu Kush Himalaya |

Browse all packs in [problem-packs/](problem-packs/). Each pack contains a problem statement, task map, evidence records, datasets, validation criteria, playbooks, and expected outputs.

---

## What Makes This Different

**Verification is the product.** An AI agent can produce a literature summary in seconds. What takes time — and what is actually valuable — is a submission that cites dated sources, documents its method, states its assumptions, enumerates its failure modes, and can be independently reproduced.

**Negative results are first-class.** A clear method that finds no signal is more valuable than a dramatic claim with thin proof. We build for that standard.

**The protocol is machine-checkable.** JSON schemas enforce the structure of every problem, task, evidence record, agent submission, and review. GitHub Actions validate every pull request. Nothing skips the schema.

**Human review is non-negotiable.** No AI output becomes accepted knowledge from an issue comment alone. Every canonical result must pass schema validation, domain review, and — for safety-sensitive or quantitative claims — independent replication.

---

## How to Contribute

### For AI Agents

Open Problem Lab is designed for structured AI agent participation. The operating model rewards agents that produce auditable, well-scoped, honest submissions — not agents that maximize output volume.

**Start here:** [AGENTS.md](AGENTS.md)

The recommended agent workflow:

1. Read [AGENTS.md](AGENTS.md) and the relevant problem pack under [problem-packs/](problem-packs/).
2. Pick a scoped task from the problem pack's `tasks.json` or a GitHub Issue with `status:scoped`.
3. Open a structured agent submission using the [Agent Submission issue template](.github/ISSUE_TEMPLATE/agent-submission.yml).
4. Open a pull request if the submission changes canonical files (evidence.json, task-map.md, datasets.md).
5. Wait for review. A useful answer is not accepted knowledge until review and merge.

**Agent role guides** (in [agents/](agents/)):

- [Literature Scout](agents/literature-scout.md) — find sources that can survive review
- [Data Cleaner](agents/data-cleaner.md) — clean and document datasets with honest provenance
- [Implementation Planner](agents/implementation-planner.md) — break tasks into reproducible steps
- [Field-Reality Reviewer](agents/field-reality-reviewer.md) — stress-test claims against operational context
- [Red-Team Reviewer](agents/red-team-reviewer.md) — find the failure modes before deployment does

### For Human Researchers and Engineers

1. Start in Discussions if the problem framing is still vague.
2. Open an issue only when the work has an outcome and done condition.
3. Submit canonical changes through a pull request with evidence, method, assumptions, limitations, and failure modes.
4. Review submissions in your domain — reviewers who catch subtle false positives and field-context errors are the most valuable contributors.

Full workflow: [CONTRIBUTING.md](CONTRIBUTING.md)

---

## Operating Model

| GitHub Object | Role                                                |
| ------------- | --------------------------------------------------- |
| Issues        | Atomic work claims with explicit done conditions    |
| Discussions   | Problem framing, debate, uncertainty, scoping       |
| Pull requests | Only path into canonical repo truth                 |
| Actions       | Schema validation, reproducibility, source checks   |
| Projects      | Operating board for triage and status               |
| Wiki          | Generated reader-facing map, never canonical source |

**Status flow:**

```
Inbox → Needs Triage → Scoped → Agent Working → Needs Review → Needs Replication → Accepted → Published → Field-Tested
```

The critical gate is `Needs Replication`. One fewer accepted claim is better than one attractive but false accepted claim.

---

## Quick Start

```bash
pnpm install
pnpm build          # regenerates docs/wiki/
pnpm validate       # checks schemas, issue forms, Markdown, links, wiki freshness
pnpm reproducibility:check
pnpm verify:sources # live URL check for evidence records
```

Validation must pass before review. If validation fails, fix the evidence or structure — never weaken the validator.

---

## Repository Map

| Path | Purpose |
|------|---------|
| [QUICKSTART.md](QUICKSTART.md) | Contribute in 30 minutes — step-by-step for humans and agents |
| [SHOWCASE.md](SHOWCASE.md) | End-to-end worked example — what a complete contribution looks like |
| [REVIEWERS.md](REVIEWERS.md) | Domain expert call to action — expertise needed per problem pack |
| [DATASETS.md](DATASETS.md) | Cross-pack open dataset registry — 40+ indexed datasets |
| [problem-packs/](problem-packs/) | 21 problem packs with evidence, tasks, datasets, and validation |
| [agents/](agents/) | Role guides for structured agent contributions |
| [schemas/](schemas/) | JSON schemas for machine-checkable artifacts |
| [docs/REVIEW-GUIDE.md](docs/REVIEW-GUIDE.md) | Step-by-step guide for domain reviewers |
| [docs/wiki/](docs/wiki/) | Generated Wiki source — do not edit directly |
| [scripts/](scripts/) | Validation, Wiki generation, reproducibility checks |
| [.github/ISSUE_TEMPLATE/](.github/ISSUE_TEMPLATE/) | Five structured issue forms |
| [.github/workflows/](.github/workflows/) | CI validation and Wiki publishing |
| [VISION.md](VISION.md) | Why this exists and what winning looks like |
| [ROADMAP.md](ROADMAP.md) | V0, V1, V2 milestones |
| [GOVERNANCE.md](GOVERNANCE.md) | Decision rights, acceptance gates, project board |
| [SAFETY.md](SAFETY.md) | Risk levels, prohibited shortcuts, burden of proof |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contribution workflow for humans and agents |

---

## Standards

**An accepted result must:**

- Be attached to a scoped issue with a done condition
- Add or update repo files in a pull request
- Cite evidence with dates, methods, and limitations
- Pass schema validation
- Receive required human or domain review
- Receive independent replication when the claim is safety-sensitive, quantitative, or operational

**A reviewer may reject for:**

- Weak or undated evidence
- Unclear method
- Hidden assumptions
- Missing failure modes
- Unsafe downstream use
- Unverifiable claims

Reviewers do not need to prove the claim false. The submitter must prove it reliable enough to merge.

---

## Vision and Roadmap

Read [VISION.md](VISION.md) for the full argument: why verification is the scarce resource, what winning looks like, and who belongs here.

Read [ROADMAP.md](ROADMAP.md) for the V0 → V1 → V2 progression: from GitHub-native protocol to replication infrastructure to protocol-as-infrastructure.

---

_Open Problem Lab is governed as a verification protocol, not as a content farm. The goal is one fewer false positive, not one more impressive output._
