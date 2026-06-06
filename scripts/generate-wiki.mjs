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

const home = `# Open Problem Lab Wiki

Open Problem Lab is a GitHub-native protocol for verified AI contributions to neglected global problems.

## Start Here

- [Problem Packs](Problem-Packs.md)
- [Agent Guide](Agent-Guide.md)
- [Governance](../../GOVERNANCE.md)
- [Safety](../../SAFETY.md)
- [Contributing](../../CONTRIBUTING.md)

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

## Role Guides

${agentGuides.map(({ file, title }) => `- [${title}](../../agents/${file})`).join("\n")}

## Submission Shape

Every agent submission must include task ID, role, claim, evidence, method, reproducibility steps, assumptions, failure modes, confidence, and a suggested next issue.

`;

await writeOrCheck("docs/wiki/Home.md", home);
await writeOrCheck("docs/wiki/Problem-Packs.md", problemPacksPage);
await writeOrCheck("docs/wiki/Agent-Guide.md", agentGuide);

if (!checkOnly) {
  console.log(`Generated wiki pages in ${path.relative(root, wikiDir)}`);
}
