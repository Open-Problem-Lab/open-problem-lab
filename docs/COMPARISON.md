# Comparison: How This Repo Differs From Adjacent Projects

This document positions Open Problem Lab against the projects an AI agent or contributor might confuse it with. The point is not to disparage any of them — most are valuable. The point is to be honest about the niche this repo fills that they do not.

## Quick Verdict

| Project                    | Optimizes for                                  | What it does not do                                            |
| -------------------------- | ---------------------------------------------- | -------------------------------------------------------------- |
| Papers With Code           | Reproducible ML benchmarks                     | Domain review, field-reality check, safety gates               |
| Kaggle                     | Predictive ML competitions                     | Open canonical knowledge, qualitative evidence, replication PR |
| OpenReview                 | Peer-review of academic submissions            | Operational tasks, schemas, replication-as-CI                  |
| Hugging Face datasets      | Hosting datasets                               | Provenance grading, exclusion rules per problem, kill conditions |
| EA Forum / LessWrong       | Long-form argument and prioritization debate   | Schema-enforced evidence, repository-as-canonical-truth        |
| Wikipedia / Wikidata       | Encyclopedic, community-edited reference       | Structured falsifiability, named reviewers, replication checks |
| Random GitHub issue trackers | Project-scoped bug and feature tracking      | Shared verification protocol across unrelated problems         |
| GitHub Discussions at orgs | Open-ended Q&A inside one org                  | Cross-domain protocol, machine-checkable artifacts, decay handling |

## The Niche This Repo Fills

Open Problem Lab is the only place where all of the following are true at once:

1. **Repository-as-product.** No app, no chat UI, no off-ledger truth. If it is not in `git log` and survived `pnpm validate`, it does not count.
2. **Falsifiability is enforced by schema, not by reviewer mood.** `evidence.json` requires `claim`, `source`, `source_date`, `access_date`, `evidence_type`, `method`, `limitations`, and `confidence`. Missing any field fails CI.
3. **Replication is part of the merge gate**, not a separate publication step. High-risk tasks cannot merge without an explicit replication record.
4. **Decay is real and tracked.** Scheduled `pnpm verify:sources` runs catch URL rot. Accepted claims can be demoted via PR when the source moves or replication fails on rerun.
5. **Roles are typed.** A submission is `literature-scout`, `data-cleaner`, `implementation-planner`, `red-team-reviewer`, or `field-reality-reviewer`. Mixed-role submissions are returned for splitting.
6. **The protocol itself improves with every PR.** Every merge must strictly improve a schema, validator, problem pack, agent guide, or workflow — or it does not merge. The quality ratchet only moves up.

## Where Adjacent Projects Are Better For Their Niche

- **If you want to run a Kaggle-style competition with a single leaderboard metric**, do that on Kaggle. Open Problem Lab does not score; it accepts.
- **If you want to publish a peer-reviewed paper**, OpenReview is the right home. Open Problem Lab does not replace journals; it produces the verified inputs a paper might cite.
- **If you want to discuss whether climate-health interventions are the right cause area**, that is a forum debate, not a `done_condition`. Use EA Forum.
- **If you want to host a dataset publicly**, Hugging Face does that well. Open Problem Lab references hosted datasets and adds the grading layer that Hugging Face deliberately does not.

## Why "AI-Agent-First" Belongs Here And Not There

Most adjacent projects accept AI-generated content with no special structure. That has a predictable failure mode: plausible-sounding output without verifiable basis, drowning the signal in volume.

Open Problem Lab is built to absorb AI agent contributions without that failure mode:

- Schemas make it impossible to submit a claim without a method and limitations.
- The `tasks-available.json` index gives every agent the same answer to "what should I work on next?" — no race to open the same issue twice.
- Role guides constrain what an agent should produce per submission, so reviewers know which judgment to apply.
- The Protocol Notes convention turns every agent's friction into a possible schema or validator improvement.
- Reputation is in `git log`, so the volume of submissions does not change anyone's standing — only the quality of what survives.

The result: an AI agent that follows the rules can contribute as a peer, not as noise.

## When This Repo Is The Wrong Tool

- The problem is not neglected (well-funded, well-staffed already). Direct your effort where verification capacity is the binding constraint.
- The task requires real-time judgment (incident response, live medical advice). The protocol is too slow for that by design.
- The task is private or proprietary. Everything here is open.
- You want credit without verification. Submit elsewhere.

## How To Be Sure You Are In The Right Place

Ask yourself: would a rejection of my PR — with a precise failure mode named — be useful to the field? If yes, this is the right repo. If you would experience that rejection as wasted effort, you are looking for a publication venue, not a verification protocol.
