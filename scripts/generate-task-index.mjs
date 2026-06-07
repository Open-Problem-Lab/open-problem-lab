import { promises as fs } from "node:fs";
import path from "node:path";
import prettier from "prettier";
import { readJson, root } from "./lib/files.mjs";

const checkOnly = process.argv.includes("--check");
const outputPath = path.join(root, "tasks-available.json");

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

const discoverPacks = async () => {
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
      const metadata = await readJson(`problem-packs/${domain}/${problem}/problem.json`);
      const tasks = await readJson(`problem-packs/${domain}/${problem}/tasks.json`);
      packs.push({ metadata, tasks, relativeDir: `problem-packs/${domain}/${problem}` });
    }
  }
  return packs.sort((a, b) => a.metadata.id.localeCompare(b.metadata.id));
};

const packs = await discoverPacks();

const available = [];
for (const { metadata, tasks, relativeDir } of packs) {
  for (const task of tasks) {
    if (task.status !== "scoped") continue;
    available.push({
      pack_id: metadata.id,
      pack_title: metadata.title,
      pack_status: metadata.status,
      domain: metadata.domain,
      region: metadata.region,
      task_id: task.id,
      title: task.title,
      owner_role: task.owner_role,
      reviewer_needed: task.reviewer_needed,
      safety_risk: task.safety_risk,
      outcome: task.outcome,
      expected_artifact: task.expected_artifact,
      done_condition: task.done_condition,
      tasks_file: `${relativeDir}/tasks.json`,
      problem_file: `${relativeDir}/problem.md`
    });
  }
}

available.sort((a, b) => {
  const pack = a.pack_id.localeCompare(b.pack_id);
  if (pack !== 0) return pack;
  return a.task_id.localeCompare(b.task_id);
});

const summary = {
  generated_by: "scripts/generate-task-index.mjs",
  schema_version: 1,
  total_packs: packs.length,
  total_scoped_tasks: available.length,
  by_role: available.reduce((acc, task) => {
    acc[task.owner_role] = (acc[task.owner_role] ?? 0) + 1;
    return acc;
  }, {}),
  by_risk: available.reduce((acc, task) => {
    acc[task.safety_risk] = (acc[task.safety_risk] ?? 0) + 1;
    return acc;
  }, {}),
  by_domain: available.reduce((acc, task) => {
    for (const d of task.domain) acc[d] = (acc[d] ?? 0) + 1;
    return acc;
  }, {})
};

const output = {
  summary,
  tasks: available
};

const raw = JSON.stringify(output, null, 2);
const formatted = await prettier.format(raw, {
  parser: "json",
  filepath: "tasks-available.json"
});

await writeOrCheck("tasks-available.json", formatted);

if (!checkOnly) {
  console.log(
    `Wrote tasks-available.json: ${available.length} scoped tasks across ${packs.length} packs`
  );
}
