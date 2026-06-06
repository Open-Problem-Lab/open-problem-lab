import { promises as fs } from "node:fs";
import path from "node:path";
import { readJson, root, walkFiles } from "./lib/files.mjs";

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const main = async () => {
  const taskFiles = await walkFiles(
    path.join(root, "problem-packs"),
    (file) => path.basename(file) === "tasks.json"
  );

  let taskCount = 0;
  for (const taskFile of taskFiles) {
    const packDir = path.dirname(taskFile);
    const relative = path.relative(root, taskFile);
    const tasks = await readJson(taskFile);
    const knownPackFiles = new Set(await fs.readdir(packDir));

    for (const task of tasks) {
      taskCount += 1;
      const artifactFiles = [...task.expected_artifact.matchAll(/\b[a-z0-9-]+\.md\b/g)].map(
        (match) => match[0]
      );
      for (const artifact of artifactFiles) {
        assert(
          knownPackFiles.has(artifact),
          `${relative}:${task.id} references missing artifact ${artifact}`
        );
      }

      if (task.safety_risk === "high") {
        const reviewText = `${task.validation_method} ${task.done_condition}`.toLowerCase();
        assert(
          /replicat|back-test/.test(reviewText),
          `${relative}:${task.id} is high risk and needs replication or back-test language.`
        );
      }
    }
  }

  assert(taskCount > 0, "No reproducibility tasks found.");
  console.log(`Reproducibility check passed for ${taskCount} task(s).`);
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
