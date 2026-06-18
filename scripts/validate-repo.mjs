import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { readJson, root, walkFiles } from "./lib/files.mjs";

const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);

const requiredProblemFiles = [
  "problem.md",
  "problem.json",
  "evidence.md",
  "evidence.json",
  "task-map.md",
  "tasks.json",
  "datasets.md",
  "playbooks.md",
  "validation.md",
  "outputs.md"
];

const issueTemplateFields = ["Outcome", "Why this matters", "Done condition"];
const STATIC_LABELS = [
  "type:problem",
  "type:task",
  "type:evidence",
  "type:dataset",
  "type:model",
  "type:playbook",
  "type:review",
  "type:safety",
  "type:agent-task",
  "good-first-agent-task",
  "role:literature-scout",
  "role:data-cleaner",
  "role:implementation-planner",
  "role:red-team-reviewer",
  "role:field-reality-reviewer",
  "status:open-claim",
  "status:needs-triage",
  "status:scoped",
  "status:agent-working",
  "status:needs-review",
  "status:needs-replication",
  "status:accepted",
  "status:field-tested",
  "risk:low",
  "risk:medium",
  "risk:high"
];

const discoverDynamicLabels = async () => {
  const labels = [];
  const problemRoot = path.join(root, "problem-packs");
  const problemJsonFiles = await walkFiles(
    problemRoot,
    (file) => path.basename(file) === "problem.json"
  );
  for (const file of problemJsonFiles) {
    const problem = JSON.parse(await fs.readFile(file, "utf8"));
    for (const domain of problem.domain) {
      labels.push(`domain:${domain}`);
    }
    for (const region of problem.region) {
      labels.push(`region:${region}`);
    }
  }
  return labels;
};

const loadSchema = async (name) => readJson(`schemas/${name}.schema.json`);

const formatErrors = (errors = []) =>
  errors.map((error) => `${error.instancePath || "/"} ${error.message}`).join("; ");

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const validateJson = (validator, data, label) => {
  if (!validator(data)) {
    throw new Error(`${label} failed schema validation: ${formatErrors(validator.errors)}`);
  }
};

const compileSchemas = async () => ({
  problem: ajv.compile(await loadSchema("problem")),
  task: ajv.compile(await loadSchema("task")),
  evidence: ajv.compile(await loadSchema("evidence")),
  agentSubmission: ajv.compile(await loadSchema("agent-submission")),
  review: ajv.compile(await loadSchema("review"))
});

const validateProblemPacks = async (schemas) => {
  const problemRoot = path.join(root, "problem-packs");
  const problemJsonFiles = await walkFiles(
    problemRoot,
    (file) => path.basename(file) === "problem.json"
  );
  assert(problemJsonFiles.length > 0, "At least one problem pack is required.");

  for (const problemJson of problemJsonFiles) {
    const packDir = path.dirname(problemJson);
    const relativeDir = path.relative(root, packDir);
    const problem = JSON.parse(await fs.readFile(problemJson, "utf8"));
    validateJson(schemas.problem, problem, `${relativeDir}/problem.json`);

    for (const required of requiredProblemFiles) {
      const filePath = path.join(packDir, required);
      try {
        await fs.access(filePath);
      } catch {
        throw new Error(`${relativeDir} is missing ${required}`);
      }
    }

    const canonicalFiles = [...problem.canonical_files].sort((a, b) => a.localeCompare(b));
    const expectedFiles = [...requiredProblemFiles].sort((a, b) => a.localeCompare(b));
    assert(
      JSON.stringify(canonicalFiles) === JSON.stringify(expectedFiles),
      `${relativeDir}/problem.json canonical_files must match required problem-pack files.`
    );

    const tasks = JSON.parse(await fs.readFile(path.join(packDir, "tasks.json"), "utf8"));
    assert(Array.isArray(tasks), `${relativeDir}/tasks.json must be an array.`);
    assert(tasks.length > 0, `${relativeDir}/tasks.json must contain at least one task.`);
    for (const task of tasks) {
      validateJson(schemas.task, task, `${relativeDir}/tasks.json:${task.id ?? "unknown"}`);
      assert(
        task.problem_id === problem.id,
        `${task.id} problem_id must match ${problem.id}`
      );
    }

    const evidence = JSON.parse(
      await fs.readFile(path.join(packDir, "evidence.json"), "utf8")
    );
    assert(Array.isArray(evidence), `${relativeDir}/evidence.json must be an array.`);
    assert(
      evidence.length > 0,
      `${relativeDir}/evidence.json must contain at least one record.`
    );
    for (const record of evidence) {
      validateJson(
        schemas.evidence,
        record,
        `${relativeDir}/evidence.json:${record.id ?? "unknown"}`
      );
      assert(
        record.problem_id === problem.id,
        `${record.id} problem_id must match ${problem.id}`
      );
    }
  }
};

const validateExamples = async (schemas) => {
  validateJson(
    schemas.agentSubmission,
    await readJson("examples/agent-submission.example.json"),
    "examples/agent-submission.example.json"
  );
  validateJson(
    schemas.review,
    await readJson("examples/review.example.json"),
    "examples/review.example.json"
  );
};

const validateIssueTemplates = async () => {
  const templateDir = path.join(root, ".github", "ISSUE_TEMPLATE");
  const templates = await walkFiles(templateDir, (file) => file.endsWith(".yml"));
  const issueForms = templates.filter((file) => path.basename(file) !== "config.yml");
  assert(issueForms.length === 5, "Exactly five v0 issue forms are required.");

  for (const file of issueForms) {
    const relative = path.relative(root, file);
    const content = await fs.readFile(file, "utf8");
    for (const field of ["name", "description", "title", "labels", "body"]) {
      assert(
        new RegExp(`^${field}:`, "m").test(content),
        `${relative} is missing ${field}.`
      );
    }
    for (const field of issueTemplateFields) {
      assert(content.includes(field), `${relative} must include ${field}.`);
    }
  }
};

const validateLabels = async () => {
  const dynamicLabels = await discoverDynamicLabels();
  const requiredLabels = [...STATIC_LABELS, ...dynamicLabels];
  const labelsPath = path.join(root, ".github", "labels.yml");
  const content = await fs.readFile(labelsPath, "utf8");
  const labelNames = new Set(
    [...content.matchAll(/^\s*-\s+name:\s*"?([^"\n]+)"?\s*$/gm)].map((match) => match[1])
  );
  for (const label of requiredLabels) {
    assert(labelNames.has(label), `.github/labels.yml is missing required label ${label}.`);
  }
};

const validateAgentIssueGenerator = async () => {
  const { loadTasks, issueTitle, issueLabels, issueBody } =
    await import("./generate-agent-issues.mjs");
  const labelsPath = path.join(root, ".github", "labels.yml");
  const labelsContent = await fs.readFile(labelsPath, "utf8");
  const knownLabels = new Set(
    [...labelsContent.matchAll(/^\s*-\s+name:\s*"?([^"\n]+)"?\s*$/gm)].map((m) => m[1])
  );
  const tasks = loadTasks();
  assert(tasks.length > 0, "Agent issue generator found no tasks in tasks-available.json.");
  for (const task of tasks) {
    const title = issueTitle(task);
    assert(
      title.startsWith("[AGENT-TASK] ") && title.length > 14,
      `Agent issue title is empty or malformed for ${task.pack_id}.`
    );
    const labels = issueLabels(task);
    assert(labels.length >= 4, `Agent issue for ${task.pack_id} has too few labels.`);
    for (const label of labels) {
      assert(
        knownLabels.has(label),
        `Agent issue for ${task.pack_id} uses label "${label}" not defined in .github/labels.yml.`
      );
    }
    const body = issueBody(task);
    assert(
      body.includes(task.done_condition) && body.includes(task.problem_file),
      `Agent issue body for ${task.pack_id} is missing its done condition or problem link.`
    );
  }
};

const validateMarkdown = async () => {
  const markdownFiles = await walkFiles(root, (file) => file.endsWith(".md"));
  assert(markdownFiles.length > 0, "Markdown documentation is required.");

  for (const file of markdownFiles) {
    const relative = path.relative(root, file);
    const content = await fs.readFile(file, "utf8");
    assert(/^#\s+/m.test(content), `${relative} must include a top-level heading.`);
    assert(
      !/\b(TODO|TBD|FIXME)\b/i.test(content),
      `${relative} contains unresolved placeholder text.`
    );

    const links = [...content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
    for (const link of links) {
      if (/^(https?:|mailto:|#)/.test(link)) continue;
      const [target] = link.split("#");
      if (!target) continue;
      const resolved = path.resolve(path.dirname(file), target);
      try {
        await fs.access(resolved);
      } catch {
        throw new Error(`${relative} has a broken local link: ${link}`);
      }
    }
  }
};

const runGenerator = (script, label) =>
  new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, "--check"], {
      cwd: root,
      stdio: "pipe"
    });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(stderr.trim() || `${label} freshness check failed.`));
    });
  });

const validateWikiFreshness = async () => runGenerator("scripts/generate-wiki.mjs", "Wiki");

const validateTaskIndexFreshness = async () =>
  runGenerator("scripts/generate-task-index.mjs", "Task index");

const validateAgentRadarFreshness = async () =>
  runGenerator("scripts/generate-agent-radar.mjs", "Agent radar");

const validateFormatting = async () =>
  new Promise((resolve, reject) => {
    const child = spawn("pnpm", ["--silent", "exec", "prettier", "--check", "."], {
      cwd: root,
      stdio: "pipe"
    });
    let stderr = "";
    let stdout = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        const offending = stdout
          .split("\n")
          .filter((line) => line.includes("[warn]"))
          .slice(0, 10)
          .join("\n");
        reject(
          new Error(
            `Formatting check failed. Run \`pnpm format\` before committing.\n${offending}\n${stderr.trim()}`.trim()
          )
        );
      }
    });
  });

const main = async () => {
  const schemas = await compileSchemas();
  await validateProblemPacks(schemas);
  await validateExamples(schemas);
  await validateIssueTemplates();
  await validateLabels();
  await validateAgentIssueGenerator();
  await validateMarkdown();
  await validateWikiFreshness();
  await validateTaskIndexFreshness();
  await validateAgentRadarFreshness();
  await validateFormatting();
  console.log("Open Problem Lab validation passed.");
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
