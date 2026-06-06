# Outreach Toolkit

Ready-to-use templates for announcing Open Problem Lab to relevant communities. Customize and post to the channels that match your network.

---

## EA Forum Post

**Title:** Open Problem Lab: verified AI contributions to neglected global problems

**Body:**

> We're launching [Open Problem Lab](https://github.com/Open-Problem-Lab/open-problem-lab) — a GitHub-native protocol for turning AI agent outputs into verified, field-usable knowledge on neglected global problems.
>
> **The problem:** AI can now generate plausible-sounding answers to hard global problems. But plausible is not the same as verified. The world doesn't need more confident-sounding summaries of malaria risk. It needs one verified, reproducible, honest answer that a district health officer can actually trust.
>
> **What we built:** A protocol where every claim has a dated source, every method is documented, every failure mode is stated, and nothing becomes canonical without domain review and replication. 21 problem packs across 11 domains — malaria, dengue, glacial melt, stunting, coral bleaching, locust early warning, and more.
>
> **Why this matters for EA:** These problems are tractable and neglected specifically because the verification infrastructure hasn't existed. We're building it.
>
> **What we need:**
> - Domain reviewers (epidemiologists, climate scientists, water engineers, economists)
> - AI engineers who want to build verified pipelines, not just fluent ones
> - Anyone with expertise in one of the 21 active problem packs
>
> See [REVIEWERS.md](https://github.com/Open-Problem-Lab/open-problem-lab/blob/main/REVIEWERS.md) for what domain expertise is needed and where.
>
> See [SHOWCASE.md](https://github.com/Open-Problem-Lab/open-problem-lab/blob/main/SHOWCASE.md) for what a complete verified contribution looks like.

---

## Climate Research Community (mailing lists, Slack)

**Subject:** Open-source verification protocol for climate-health AI contributions — looking for domain reviewers

> Hi all,
>
> We're building Open Problem Lab — an open protocol where AI agents and researchers produce verified, reproducible knowledge on climate-health problems. We're specifically looking for domain reviewers for:
>
> - Malaria early warning signals in Sub-Saharan Africa
> - Dengue, heat, and rainfall risk in Viet Nam
> - Heat stress mortality risk in urban South Asia
> - Sea-level rise in Small Island Developing States
> - Glacial melt water security in the Hindu Kush Himalaya
>
> The verification standard: every accepted claim must have a dated source, documented method, stated failure modes, and independent replication. Nothing merges without domain review.
>
> If you have expertise in climate-health, remote sensing, or water security and want to contribute 2-3 hours of domain review per month, please open a Discussion at: [https://github.com/Open-Problem-Lab/open-problem-lab/discussions](https://github.com/Open-Problem-Lab/open-problem-lab/discussions)
>
> We specifically need: malaria epidemiology, satellite ocean temperature interpretation, glaciology and basin hydrology, vector control operational context.

---

## AI Research Community (Twitter/X Thread)

```
1/ Open Problem Lab: a GitHub protocol where AI agents produce *verified* knowledge on neglected global problems.

Not outputs. Not summaries. Verified results that survive domain review and can be independently replicated.

21 problems. 11 domains. 0 false confidence.
github.com/Open-Problem-Lab/open-problem-lab

2/ The bottleneck in AI for global problems is not generating candidate answers.

It's verifying which ones are reliable enough to act on.

A malaria early warning signal with a 40% false-positive rate at sub-national scale is not an early warning system. It is a distraction.

3/ Every contribution must:
- Cite dated sources
- State its method
- Name its failure modes
- Pass schema validation
- Survive domain review
- Be independently replicated for quantitative claims

No exceptions. No shortcuts. Nothing that weakens the validator.

4/ 21 active problems open for contributions right now:

- Malaria early warning (Sub-Saharan Africa)
- Dengue risk (Viet Nam)
- Coral bleaching detection (Great Barrier Reef)
- Glacial melt water security (Hindu Kush Himalaya)
- Learning loss measurement (Global)
- ...and 16 more

5/ Built for AI agents and human experts to work together:

Agents: structured JSON submissions, machine-checkable schemas, role guides with good/bad examples
Humans: domain review, replication, field-reality checks

Neither alone is enough. Both together are the protocol.

6/ The code is open. The schemas are open. Every workflow is reproducible.

QUICKSTART in 30 minutes: [QUICKSTART.md]
Worked example: [SHOWCASE.md]
Domain expert call to action: [REVIEWERS.md]

github.com/Open-Problem-Lab/open-problem-lab
```

---

## Academic Email to Research Group

**Subject:** Collaboration opportunity: verified AI contributions to [specific problem area]

> Dear [Research Group Name],
>
> I'm writing about [Open Problem Lab](https://github.com/Open-Problem-Lab/open-problem-lab), an open protocol we've built for producing verified, reproducible AI contributions to neglected global problems.
>
> We have an active problem pack on [specific problem — e.g., malaria early warning in Sub-Saharan Africa] and are specifically looking for domain reviewers with expertise in [your group's area].
>
> The verification standard matches or exceeds what is expected in peer-reviewed publication: every claim must have a dated source, documented method, and stated failure modes. All quantitative claims require independent replication before acceptance. Nothing is accepted from an issue comment alone.
>
> What domain reviewers get:
> - Clear contribution role (review 1-2 PRs per month in your domain)
> - Attribution in git log and PR history
> - Early access to verified results that can inform or cite in your own research
>
> What we need from you:
> - 2-3 hours per month for reviewing contributions in your domain
> - Willingness to write specific, actionable review comments (our review guide is at [docs/REVIEW-GUIDE.md])
>
> Would you be open to a brief call to discuss? I can share the specific open tasks in [problem area] that would benefit most from your group's expertise.
>
> Best,
> [Your name]

---

## Technical AI Community (HN, r/MachineLearning)

**Title:** Show HN: Open Problem Lab – a verification protocol for AI contributions to global problems

**Body:**

> We built a GitHub-native protocol for turning AI agent outputs into verified, auditable knowledge on neglected global problems: github.com/Open-Problem-Lab/open-problem-lab
>
> The problem: AI can generate plausible-sounding answers to hard questions (malaria risk, drought early warning, glacial melt projections) very quickly. But "plausible" and "reliable enough to act on" are different. The infrastructure for the second doesn't exist for AI contributions.
>
> What we built:
> - JSON schemas for problems, tasks, evidence records, agent submissions, and reviews
> - GitHub Actions for schema validation, source verification, reproducibility checks, and wiki generation
> - 5 structured agent role guides (Literature Scout, Data Cleaner, Implementation Planner, Field-Reality Reviewer, Red-Team Reviewer) — each with explicit merge gates
> - 21 active problem packs — each with task maps, evidence records, dataset inventories, and validation criteria
>
> The key design constraint: nothing becomes canonical without domain review and replication. AI agents are first-class contributors to evidence inventory and analysis, but not to acceptance decisions.
>
> Open to questions about the schema design, workflow choices, or the specific problems we've scoped.

---

## Usage Notes

- Customize the specific problem areas to match the community you're addressing.
- Lead with the verification standard, not the AI angle — smart communities are appropriately skeptical of AI hype.
- Always link to SHOWCASE.md and REVIEWERS.md. These are the two documents that convert skeptics: one shows what a contribution looks like, the other shows where expertise is needed.
- The ask should always be specific: a domain reviewer, a specific problem pack, a specific type of expertise. Vague asks get vague responses.
