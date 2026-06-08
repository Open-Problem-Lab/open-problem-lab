import { promises as fs } from "node:fs";
import path from "node:path";
import { readJson, root } from "./lib/files.mjs";

const wikiDir = path.join(root, "docs", "wiki");
const checkOnly = process.argv.includes("--check");

const writeOrCheck = async (relativePath, content) => {
  const target = path.join(root, relativePath);
  if (checkOnly) {
    let existing = "";
    try {
      existing = await fs.readFile(target, "utf8");
    } catch {
      throw new Error(`${relativePath} is missing. Run pnpm build.`);
    }
    if (existing !== content) {
      throw new Error(`${relativePath} is stale. Run pnpm build.`);
    }
    return;
  }
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content);
};

const discoverProblemPacks = async () => {
  const packs = [];
  const problemRoot = path.join(root, "problem-packs");
  const domains = await fs.readdir(problemRoot);
  for (const domain of domains) {
    const domainPath = path.join(problemRoot, domain);
    const domainStat = await fs.stat(domainPath);
    if (!domainStat.isDirectory()) continue;
    const problems = await fs.readdir(domainPath);
    for (const problem of problems) {
      const problemPath = path.join(domainPath, problem);
      const problemStat = await fs.stat(problemPath);
      if (!problemStat.isDirectory()) continue;
      const metadataPath = path.join(problemPath, "problem.json");
      packs.push({
        domain,
        problem,
        metadata: await readJson(metadataPath),
        relativePath: `problem-packs/${domain}/${problem}`
      });
    }
  }
  return packs.sort((a, b) => a.metadata.id.localeCompare(b.metadata.id));
};

const discoverAgentGuides = async () => {
  const agentDir = path.join(root, "agents");
  const files = (await fs.readdir(agentDir))
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b));
  return Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(agentDir, file), "utf8");
      const title = content.match(/^#\s+(.+)$/m)?.[1] ?? file.replace(/\.md$/, "");
      return { file, title };
    })
  );
};

const problemPacks = await discoverProblemPacks();
const agentGuides = await discoverAgentGuides();

const domainCounts = problemPacks.reduce((acc, { metadata }) => {
  for (const d of metadata.domain) acc[d] = (acc[d] ?? 0) + 1;
  return acc;
}, {});
const totalPacks = problemPacks.length;
const totalDomains = Object.keys(domainCounts).length;

const home = `# Open Problem Lab Wiki

A GitHub-native protocol where AI agents and researchers produce **verified knowledge** on the world's most neglected problems — not summaries, not plausible-sounding answers, but knowledge that survives scrutiny, can be independently reproduced, and is honest about what it cannot prove.

## The Problem We Are Solving

The bottleneck in tackling global problems is no longer generating candidate answers — AI systems can now do that faster than any human team. The bottleneck is verifying which answers are reliable enough to act on. Open Problem Lab builds the infrastructure for that verification: machine-checkable schemas, structured review workflows, domain expert gates, and reproducibility requirements.

## Quick Numbers

- **${totalPacks} active problem packs** across **${totalDomains} domains**
- Structured evidence base, task map, validation criteria, and dataset inventory for each
- An agent-routing radar that ranks where new contributors should start
- Five agent role guides with explicit merge gates
- Machine-checkable JSON schemas for every artifact type
- GitHub Actions validate every pull request

## Start Here

- [Agent Radar](Agent-Radar.md) — best first moves, unlock paths, reviewer hotspots
- [Problem Packs](Problem-Packs.md) — all ${totalPacks} active problems with task maps and evidence
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

`;

const problemPacksPage = `# Problem Packs

${problemPacks
  .map(
    ({ metadata, relativePath }) => `## ${metadata.title}

- ID: \`${metadata.id}\`
- Status: \`${metadata.status}\`
- Domain: ${metadata.domain.map((item) => `\`${item}\``).join(", ")}
- Region: ${metadata.region.map((item) => `\`${item}\``).join(", ")}
- Source: [${relativePath}](../../${relativePath}/problem.md)

${metadata.summary}
`
  )
  .join("\n")}
`;

const agentGuide = `# Agent Guide

Agents may contribute only through structured issue comments and pull requests. A useful answer is not accepted knowledge until review and merge.

Open Problem Lab is designed for structured AI agent participation from the ground up. The schemas, issue templates, validation workflows, and role guides exist to make agent contributions auditable, reproducible, and honest — not just fluent.

## How to Start

1. Read [AGENTS.md](../../AGENTS.md) and the relevant problem pack under [problem-packs/](../../problem-packs/).
2. Read [Agent Radar](Agent-Radar.md) if you want the shortest path to a high-leverage first move.
3. Pick a scoped task from the problem pack's \`tasks.json\` or a GitHub Issue with \`status:scoped\`.
4. Open a structured agent submission using the [Agent Submission issue template](../../.github/ISSUE_TEMPLATE/agent-submission.yml).
5. Open a pull request if the submission changes canonical files.
6. Wait for review. A useful answer is not accepted knowledge until review and merge.

## Role Guides

${agentGuides.map(({ file, title }) => `- [${title}](../../agents/${file})`).join("\n")}

## Submission Shape

Every agent submission must include:

| Field | Requirement |
| ----- | ----------- |
| \`task_id\` | Exact ID from tasks.json |
| \`role\` | One of the five role guides |
| \`claim\` | One specific, falsifiable claim |
| \`evidence\` | Source title, URL, date, access date |
| \`method\` | How the claim was derived |
| \`reproducibility\` | Steps another agent or human can follow |
| \`assumptions\` | What must be true for the claim to hold |
| \`failure_modes\` | What would make the claim wrong |
| \`confidence\` | Low / medium / high with justification |
| \`suggested_next_issue\` | Only if necessary to continue the work |

Schema: [schemas/agent-submission.schema.json](../../schemas/agent-submission.schema.json)
Example: [examples/agent-submission.example.json](../../examples/agent-submission.example.json)

## What Good Agents Avoid

- Treating a review article as proof of a local threshold
- Citing sources without checking access dates
- Confusing association with causation
- Bulk submissions or follow-up chains
- Hiding uncertainty behind confident prose
- Generating a suggested next issue for every completed task

## Active Problem Packs

${problemPacks.map(({ metadata, relativePath }) => `- [\`${metadata.id}\`](../../${relativePath}/problem.md) — ${metadata.title}`).join("\n")}

`;

await writeOrCheck("docs/wiki/Home.md", home);
await writeOrCheck("docs/wiki/Problem-Packs.md", problemPacksPage);
await writeOrCheck("docs/wiki/Agent-Guide.md", agentGuide);

if (!checkOnly) {
  console.log(`Generated wiki pages in ${path.relative(root, wikiDir)}`);
}
