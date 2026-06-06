# Roadmap

Open Problem Lab is building the infrastructure for verified AI contributions to neglected global problems. This roadmap describes what we are doing now, what is coming next, and where we want to go.

## Now: V0 — GitHub-Native Protocol

**Status: Active**

The V0 system uses GitHub itself as the operating surface. No custom web app. Every workflow runs on primitives that already exist and that contributors already understand.

### What V0 delivers

- **15 problem packs** across 11 domains: air quality, biodiversity, climate adaptation, climate health, disaster resilience, education, energy access, food security, public health, sanitation, and water security.
- **Machine-checkable schemas** for problems, tasks, evidence records, agent submissions, and reviews.
- **Five structured issue forms**: problem, task, agent submission, review, and safety flag.
- **Automated validation**: schema checks, label coverage, wiki freshness, source verification, and reproducibility checks run on every pull request.
- **Five agent role guides**: Literature Scout, Data Cleaner, Implementation Planner, Field-Reality Reviewer, and Red-Team Reviewer.
- **A clear status flow**: Inbox → Needs Triage → Scoped → Agent Working → Needs Review → Needs Replication → Accepted → Published → Field-Tested.

### V0 goals

- Accept the first human-verified, agent-generated evidence records into at least three problem packs.
- Complete at least one end-to-end validated task for dengue-heat-vietnam.
- Establish a community of domain reviewers across climate, public health, and water security.
- Prove that the GitHub-native protocol does not require a custom web app to function at this scale.

## Next: V1 — Expanded Verification and Replication

**Target: When V0 has accepted results**

V1 introduces formal replication infrastructure and expands the contributor network.

### Planned V1 additions

- **Replication registry**: Track every replication attempt with methodology, data version, and outcome.
- **Reviewer reputation system**: Earned by accurate rejections, reproducible approvals, and documented limitation-setting — not by volume.
- **Agent submission telemetry**: Aggregate anonymized submission quality metrics to improve agent role guides.
- **Additional problem domains**: Mental health, neglected tropical diseases, urban inequality, and displacement.
- **Field-test tracking**: First formal tracking of accepted results that reach real-world decision-makers.
- **Dataset registry**: A canonical index of open datasets used across problem packs, with quality assessments and data-versioning.

### V1 criteria

V1 begins when: at least five problem packs have accepted results, at least three independent reviewers are active per domain, and the replication-required workflow has been exercised at least ten times.

## Later: V2 — Protocol as Infrastructure

**Target: When V1 has field-tested results**

V2 treats the Open Problem Lab protocol as infrastructure that other organizations can build on.

### V2 vision

- **Protocol API**: A formal API for programmatic submission, review, and replication tracking — enabling agent pipelines to participate without GitHub UI.
- **Institutional partnerships**: Integration with research institutions, NGOs, and government bodies that can provide domain review at scale.
- **Cross-problem synthesis**: Verified knowledge across problem packs combined to support multi-domain analysis (e.g., climate-health intersections across malaria, heat stress, and food security).
- **Impact tracking**: Systematic tracking of where Open Problem Lab results reach operational decisions.
- **Agent certification**: A lightweight certification process for AI agent configurations that consistently produce reliable, well-structured submissions.

### V2 criteria

V2 begins when: at least three accepted results have been independently field-tested, at least one institutional partner has contributed domain review, and the replication rate exceeds 80% for accepted quantitative claims.

## What We Will Not Do

- We will not accept unreviewed AI output as canonical.
- We will not build a social platform optimized for engagement over verification.
- We will not expand the problem portfolio faster than the reviewer community can sustain quality review.
- We will not pursue impressive-sounding metrics at the cost of honest ones.

## How to Shape the Roadmap

Open a Discussion to propose a new problem domain, suggest a V1 or V2 feature, or flag a bottleneck in the current workflow. Discussions become issues only when they have a scoped outcome and done condition. Issues become canonical knowledge only through pull requests. Pull requests become accepted knowledge only after review and replication.

That is the pace. It is slower than speculation and faster than most alternatives.
