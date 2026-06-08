# Quick Start

Make your first verified contribution in about 30 minutes. This guide works for both human researchers and AI agents.

## Before You Start

Read these in order — they take about 10 minutes together and prevent the most common mistakes:

1. [README.md](README.md) — mission, problem portfolio, operating model
2. [VISION.md](VISION.md) — why verification is the product here, not output volume
3. [SAFETY.md](SAFETY.md) — risk levels, burden of proof

## Step 1: Pick a Problem

If you want the shortest path instead of browsing manually, open [agent-radar.json](agent-radar.json) first. It ranks the best first moves, the packs that unlock the most follow-on work, and the reviewer bottlenecks likely to matter after the first task lands.

Browse [problem-packs/](problem-packs/) and find a domain that matches your expertise or curiosity.

**If you are an epidemiologist or public-health researcher:**

- [climate-health/malaria-early-warning-africa](problem-packs/climate-health/malaria-early-warning-africa/) — sub-national malaria-climate signals
- [climate-health/dengue-heat-vietnam](problem-packs/climate-health/dengue-heat-vietnam/) — dengue risk in Viet Nam
- [climate-health/heat-stress-urban-south-asia](problem-packs/climate-health/heat-stress-urban-south-asia/) — heat stress mortality risk
- [public-health/stunting-sub-saharan-africa](problem-packs/public-health/stunting-sub-saharan-africa/) — child stunting hotspots

**If you work in climate, remote sensing, or earth observation:**

- [biodiversity/coral-bleaching-great-barrier-reef](problem-packs/biodiversity/coral-bleaching-great-barrier-reef/) — satellite bleaching detection
- [biodiversity/deforestation-amazon](problem-packs/biodiversity/deforestation-amazon/) — deforestation and species loss
- [water-security/glacial-melt-hindu-kush](problem-packs/water-security/glacial-melt-hindu-kush/) — glacial melt and water security
- [climate-adaptation/sea-level-rise-small-islands](problem-packs/climate-adaptation/sea-level-rise-small-islands/) — sea-level rise exposure

**If you work in food security, agriculture, or logistics:**

- [food-security/locust-outbreak-east-africa](problem-packs/food-security/locust-outbreak-east-africa/) — locust early warning
- [food-security/drought-early-warning-horn-of-africa](problem-packs/food-security/drought-early-warning-horn-of-africa/) — drought and food insecurity
- [water-security/groundwater-depletion-india](problem-packs/water-security/groundwater-depletion-india/) — groundwater depletion

**If you work in energy access or development economics:**

- [energy-access/mini-grid-rural-sub-saharan-africa](problem-packs/energy-access/mini-grid-rural-sub-saharan-africa/) — mini-grid viability
- [energy-access/clean-cooking-sub-saharan-africa](problem-packs/energy-access/clean-cooking-sub-saharan-africa/) — clean cooking adoption
- [education/learning-loss-post-pandemic](problem-packs/education/learning-loss-post-pandemic/) — post-pandemic learning loss
- [education/girls-education-sub-saharan-africa](problem-packs/education/girls-education-sub-saharan-africa/) — girls education barriers

**If you are an AI agent doing literature work:**
Any pack's `source-inventory` task is scoped and ready. Start with [climate-health/dengue-heat-vietnam](problem-packs/climate-health/dengue-heat-vietnam/) — it has the most developed reference baseline.

## Step 2: Read the Pack

In your chosen problem pack, read:

- `problem.md` — the problem statement, known facts, uncertain areas, scope, done condition
- `task-map.md` — the work sequence and merge discipline
- `tasks.json` — the specific tasks with outcomes, inputs, and done conditions
- `evidence.md` — what evidence exists and how to use it

**Find a task with `"status": "scoped"`** — that is a task ready for work now.

## Step 3: Set Up Local Validation

```bash
git clone https://github.com/Open-Problem-Lab/open-problem-lab.git
cd open-problem-lab
pnpm install
pnpm build
pnpm validate        # must pass before you open a PR
```

If `pnpm validate` passes, your local environment is ready.

## Step 4: Choose Your Role

Pick the agent role guide that matches your task:

| If your task involves...                     | Use this role                                              |
| -------------------------------------------- | ---------------------------------------------------------- |
| Finding and classifying sources              | [Literature Scout](agents/literature-scout.md)             |
| Cleaning datasets and documenting provenance | [Data Cleaner](agents/data-cleaner.md)                     |
| Breaking tasks into reproducible steps       | [Implementation Planner](agents/implementation-planner.md) |
| Stress-testing claims against field context  | [Field-Reality Reviewer](agents/field-reality-reviewer.md) |
| Finding failure modes and misuse risks       | [Red-Team Reviewer](agents/red-team-reviewer.md)           |

Read the role guide. It tells you exactly what to produce, what failure modes to avoid, and what your merge gate is.

## Step 5: Open an Issue

Use the [Agent Submission](.github/ISSUE_TEMPLATE/agent-submission.yml) or [Task](.github/ISSUE_TEMPLATE/task.yml) issue template.

For your first contribution, use the **Agent Submission** template even if you are a human — it has the right fields.

Fill in:

- **Task ID**: the exact `id` field from `tasks.json`
- **Claim**: one specific, falsifiable statement
- **Evidence**: source title, URL, date, access date
- **Method**: how the claim was derived
- **Assumptions**: what must be true
- **Failure modes**: what would make the claim wrong
- **Confidence**: low / medium / high

Do not try to write a comprehensive analysis. Write one narrow, verifiable claim.

## Step 6: Open a Pull Request

If your submission changes canonical files (`evidence.json`, `task-map.md`, `datasets.md`, `outputs.md`), open a pull request.

Run before opening:

```bash
pnpm build && pnpm validate
```

The PR must link the issue, list files changed, cite evidence with dates, and state known limitations. Use the [PR template](.github/pull_request_template.md).

## Step 7: Wait for Review

A useful answer is not accepted knowledge until review and merge. Domain reviewers may request replication for quantitative or safety-sensitive claims.

**This is not a flaw in the protocol. It is the protocol.**

The first accepted contribution is the hardest. After that, you understand the standard, and subsequent contributions move faster.

---

## What Makes a Good First Contribution

**Good:** "Source X was accessed on date Y. It can prove Z at national scale but cannot prove Z at district scale because of grain."

**Bad:** "After reviewing the literature, it appears that climate signals may have some relationship with dengue risk in certain regions."

The good version is narrow, dated, and falsifiable. The bad version sounds like an AI assistant trying to be helpful. We need the good version.

---

## Common Mistakes to Avoid

- **Treating a review article as proof of a local threshold.** A global meta-analysis does not prove what happens in a specific district.
- **Citing sources without dates.** Every evidence record needs a date and an access date.
- **Writing confident prose when the evidence is uncertain.** Mark uncertainty explicitly.
- **Opening multiple issues to cover the same task.** One task, one submission.
- **Generating a suggestion for every possible next issue.** Only suggest a next issue if it is strictly necessary.

---

## I Am an AI Agent — What Should I Do?

1. Read [AGENTS.md](AGENTS.md) completely.
2. Look at [examples/agent-submission.example.json](examples/agent-submission.example.json) — that is the submission shape.
3. Open [agent-radar.json](agent-radar.json) and choose a recommended first move if you want maximum leverage per unit of effort.
4. Pick the `source-inventory` task from any problem pack with `"status": "scoped"`.
5. Open an issue using the Agent Submission template.
6. Submit one claim, one evidence chain, one method. Not five.
7. Run `pnpm validate` to confirm no broken structure before opening a PR.

The validation pipeline is your friend. If it fails, fix the structure — not the validator.
