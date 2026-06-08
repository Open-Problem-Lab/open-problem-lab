import { promises as fs } from "node:fs";
import path from "node:path";
import prettier from "prettier";
import { readJson, root } from "./lib/files.mjs";

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

const riskOrder = { low: 0, medium: 1, high: 2 };

const reviewerLabels = [
  "domain-reviewer",
  "replicator",
  "red-team-reviewer",
  "field-reality-reviewer"
];

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

      const relativeDir = `problem-packs/${domain}/${problem}`;
      const metadata = await readJson(`${relativeDir}/problem.json`);
      const tasks = await readJson(`${relativeDir}/tasks.json`);
      const evidence = await readJson(`${relativeDir}/evidence.json`);

      packs.push({
        relativeDir,
        metadata,
        tasks,
        evidenceCount: evidence.length
      });
    }
  }

  return packs.sort((a, b) => a.metadata.id.localeCompare(b.metadata.id));
};

const increment = (map, key, amount = 1) => {
  map[key] = (map[key] ?? 0) + amount;
  return map;
};

const packs = await discoverPacks();
const taskRecords = [];
const protocolAlerts = [];

for (const pack of packs) {
  const taskPath = `${pack.relativeDir}/tasks.json`;
  for (const task of pack.tasks) {
    const reviewerNeededIsKnown = reviewerLabels.includes(task.reviewer_needed);
    if (!reviewerNeededIsKnown) {
      protocolAlerts.push({
        type: "reviewer-needed-enum-drift",
        severity: "high",
        message: `Task ${task.id} uses unknown reviewer label ${task.reviewer_needed}.`,
        pack_id: pack.metadata.id,
        task_id: task.id,
        reviewer_needed: task.reviewer_needed,
        tasks_file: taskPath
      });
    }

    taskRecords.push({
      ...task,
      pack_id: pack.metadata.id,
      pack_title: pack.metadata.title,
      pack_summary: pack.metadata.summary,
      pack_status: pack.metadata.status,
      domain: pack.metadata.domain,
      region: pack.metadata.region,
      evidence_count: pack.evidenceCount,
      tasks_file: taskPath,
      problem_file: `${pack.relativeDir}/problem.md`
    });
  }
}

const scopedTasks = taskRecords.filter((task) => task.status === "scoped");
const latentTasks = taskRecords.filter((task) => task.status !== "scoped");
const statusCounts = taskRecords.reduce((acc, task) => increment(acc, task.status), {});
const ownerRoleCounts = taskRecords.reduce(
  (acc, task) => increment(acc, task.owner_role),
  {}
);
const scopedRoleCounts = scopedTasks.reduce(
  (acc, task) => increment(acc, task.owner_role),
  {}
);
const reviewerNeededCounts = taskRecords.reduce(
  (acc, task) => increment(acc, task.reviewer_needed),
  {}
);
const safetyRiskCounts = taskRecords.reduce(
  (acc, task) => increment(acc, task.safety_risk),
  {}
);

const packLanes = packs.map((pack) => {
  const scoped = pack.tasks.filter((task) => task.status === "scoped");
  const downstream = pack.tasks.filter((task) => task.status !== "scoped");
  const downstreamByRole = downstream.reduce(
    (acc, task) => increment(acc, task.owner_role),
    {}
  );
  const downstreamByRisk = downstream.reduce(
    (acc, task) => increment(acc, task.safety_risk),
    {}
  );
  const downstreamReviewers = downstream.reduce(
    (acc, task) => increment(acc, task.reviewer_needed),
    {}
  );
  const scopedRisk = scoped.reduce(
    (lowest, task) => Math.min(lowest, riskOrder[task.safety_risk] ?? 99),
    99
  );

  return {
    pack_id: pack.metadata.id,
    pack_title: pack.metadata.title,
    pack_summary: pack.metadata.summary,
    problem_file: `${pack.relativeDir}/problem.md`,
    tasks_file: `${pack.relativeDir}/tasks.json`,
    evidence_count: pack.evidenceCount,
    scoped_tasks: scoped.length,
    downstream_tasks: downstream.length,
    downstream_high_risk_tasks: downstream.filter((task) => task.safety_risk === "high")
      .length,
    downstream_medium_risk_tasks: downstream.filter((task) => task.safety_risk === "medium")
      .length,
    downstream_by_role: downstreamByRole,
    downstream_by_risk: downstreamByRisk,
    downstream_reviewers_needed: downstreamReviewers,
    entry_roles: [...new Set(scoped.map((task) => task.owner_role))],
    scoped_risk_floor: scopedRisk
  };
});

const firstMoves = scopedTasks
  .map((task) => {
    const lane = packLanes.find((entry) => entry.pack_id === task.pack_id);
    return {
      pack_id: task.pack_id,
      pack_title: task.pack_title,
      task_id: task.id,
      title: task.title,
      owner_role: task.owner_role,
      reviewer_needed: task.reviewer_needed,
      safety_risk: task.safety_risk,
      done_condition: task.done_condition,
      evidence_count: task.evidence_count,
      downstream_tasks_unlocked: lane?.downstream_tasks ?? 0,
      downstream_high_risk_tasks: lane?.downstream_high_risk_tasks ?? 0,
      problem_file: task.problem_file,
      tasks_file: task.tasks_file,
      why_pick_now:
        (lane?.downstream_tasks ?? 0) > 0
          ? `Completing this scoped task opens ${lane?.downstream_tasks ?? 0} follow-on tasks across ${Object.keys(lane?.downstream_by_role ?? {}).length} additional roles.`
          : "Scoped and ready now, with no hidden multi-role dependency behind the first move."
    };
  })
  .sort((a, b) => {
    const risk = (riskOrder[a.safety_risk] ?? 99) - (riskOrder[b.safety_risk] ?? 99);
    if (risk !== 0) return risk;
    const unlocks = b.downstream_tasks_unlocked - a.downstream_tasks_unlocked;
    if (unlocks !== 0) return unlocks;
    const evidence = b.evidence_count - a.evidence_count;
    if (evidence !== 0) return evidence;
    return a.pack_id.localeCompare(b.pack_id);
  })
  .slice(0, 12);

const unlockPaths = packLanes
  .filter((lane) => lane.scoped_tasks > 0)
  .sort((a, b) => {
    const downstream = b.downstream_tasks - a.downstream_tasks;
    if (downstream !== 0) return downstream;
    const highRisk = b.downstream_high_risk_tasks - a.downstream_high_risk_tasks;
    if (highRisk !== 0) return highRisk;
    const evidence = b.evidence_count - a.evidence_count;
    if (evidence !== 0) return evidence;
    return a.pack_id.localeCompare(b.pack_id);
  })
  .slice(0, 12)
  .map((lane) => ({
    pack_id: lane.pack_id,
    pack_title: lane.pack_title,
    scoped_tasks: lane.scoped_tasks,
    downstream_tasks: lane.downstream_tasks,
    downstream_high_risk_tasks: lane.downstream_high_risk_tasks,
    downstream_by_role: lane.downstream_by_role,
    downstream_reviewers_needed: lane.downstream_reviewers_needed,
    evidence_count: lane.evidence_count,
    problem_file: lane.problem_file,
    tasks_file: lane.tasks_file
  }));

const reviewerHotspots = packLanes
  .filter((lane) => Object.keys(lane.downstream_reviewers_needed).length > 0)
  .sort((a, b) => {
    const reviewLoad =
      Object.values(b.downstream_reviewers_needed).reduce((sum, count) => sum + count, 0) -
      Object.values(a.downstream_reviewers_needed).reduce((sum, count) => sum + count, 0);
    if (reviewLoad !== 0) return reviewLoad;
    const highRisk = b.downstream_high_risk_tasks - a.downstream_high_risk_tasks;
    if (highRisk !== 0) return highRisk;
    return a.pack_id.localeCompare(b.pack_id);
  })
  .slice(0, 12)
  .map((lane) => ({
    pack_id: lane.pack_id,
    pack_title: lane.pack_title,
    downstream_reviewers_needed: lane.downstream_reviewers_needed,
    downstream_high_risk_tasks: lane.downstream_high_risk_tasks,
    downstream_tasks: lane.downstream_tasks,
    problem_file: lane.problem_file
  }));

const roleBacklog = Object.entries(ownerRoleCounts)
  .map(([role, total]) => {
    const scopedCount = scopedRoleCounts[role] ?? 0;
    const latentCount = total - scopedCount;
    return {
      owner_role: role,
      scoped_tasks: scopedCount,
      latent_tasks: latentCount,
      share_of_all_tasks: Number((total / taskRecords.length).toFixed(3)),
      share_of_latent_tasks:
        latentTasks.length === 0 ? 0 : Number((latentCount / latentTasks.length).toFixed(3))
    };
  })
  .sort((a, b) => {
    const latent = b.latent_tasks - a.latent_tasks;
    if (latent !== 0) return latent;
    return a.owner_role.localeCompare(b.owner_role);
  });

const radar = {
  summary: {
    generated_by: "scripts/generate-agent-radar.mjs",
    schema_version: 1,
    total_packs: packs.length,
    total_tasks: taskRecords.length,
    scoped_tasks: scopedTasks.length,
    latent_tasks: latentTasks.length,
    status_counts: statusCounts,
    owner_role_counts: ownerRoleCounts,
    scoped_role_counts: scopedRoleCounts,
    reviewer_needed_counts: reviewerNeededCounts,
    safety_risk_counts: safetyRiskCounts,
    protocol_alert_count: protocolAlerts.length
  },
  protocol_alerts: protocolAlerts,
  contributor_lanes: {
    first_moves: firstMoves,
    unlock_paths: unlockPaths,
    reviewer_hotspots: reviewerHotspots,
    role_backlog: roleBacklog
  }
};

const formatCountMap = (counts) =>
  Object.entries(counts)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([label, count]) => `\`${label}\`: ${count}`)
    .join(", ");

const markdown =
  `# Agent Radar

This page is generated from live task metadata. Its job is not inspiration. Its job is routing: where a new agent should start, which packs unlock the most follow-on work, where reviewer scarcity will bottleneck progress, and which protocol drifts need fixing before they spread.

## Why This Exists

` +
  "```text\n" +
  `tasks-available.json answers: "What is scoped right now?"
agent-radar.json answers: "What is the highest-leverage way to enter the system?"
` +
  "```\n\n" +
  `Without routing, a new agent sees a flat task list and misses the actual shape of the backlog: one hundred scoped literature tasks guarding a much larger multi-role pipeline behind them.

## Current Shape

- **${radar.summary.total_packs} problem packs**
- **${radar.summary.total_tasks} total tasks**
- **${radar.summary.scoped_tasks} scoped now**
- **${radar.summary.latent_tasks} follow-on tasks still latent**
- **Owner roles:** ${formatCountMap(ownerRoleCounts)}
- **Reviewer demand:** ${formatCountMap(reviewerNeededCounts)}
- **Safety mix:** ${formatCountMap(safetyRiskCounts)}

## First Moves

These are the best entry tasks for a fresh contributor. Ranking favors lower-risk scoped work first, then packs where a successful first move unlocks the most downstream tasks.

${firstMoves
  .map(
    (task, index) => `### ${index + 1}. ${task.pack_title}

- Pack: [\`${task.pack_id}\`](../../${task.problem_file})
- Task: \`${task.task_id}\` — ${task.title}
- Risk: \`${task.safety_risk}\`
- Reviewer needed: \`${task.reviewer_needed}\`
- Existing evidence records: ${task.evidence_count}
- Downstream tasks unlocked: ${task.downstream_tasks_unlocked}
- Downstream high-risk tasks: ${task.downstream_high_risk_tasks}
- Why pick now: ${task.why_pick_now}
- Done condition: ${task.done_condition}
`
  )
  .join("\n")}

## Unlock Paths

These packs have a scoped front door and the deepest follow-on queue behind it. If your goal is not just one contribution but opening a sustained lane, start here.

${unlockPaths
  .map(
    (lane) => `### ${lane.pack_title}

- Pack: [\`${lane.pack_id}\`](../../${lane.problem_file})
- Scoped tasks at front door: ${lane.scoped_tasks}
- Follow-on tasks behind it: ${lane.downstream_tasks}
- High-risk follow-on tasks: ${lane.downstream_high_risk_tasks}
- Follow-on roles: ${formatCountMap(lane.downstream_by_role)}
- Reviewer types needed later: ${formatCountMap(lane.downstream_reviewers_needed)}
- Existing evidence records: ${lane.evidence_count}
`
  )
  .join("\n")}

## Reviewer Hotspots

These are the packs most likely to stall after the first scoped task because reviewer load becomes the bottleneck.

${reviewerHotspots
  .map(
    (lane) => `### ${lane.pack_title}

- Pack: [\`${lane.pack_id}\`](../../${lane.problem_file})
- Follow-on tasks: ${lane.downstream_tasks}
- High-risk follow-on tasks: ${lane.downstream_high_risk_tasks}
- Reviewer load: ${formatCountMap(lane.downstream_reviewers_needed)}
`
  )
  .join("\n")}

## Role Backlog

This is the actual pipeline shape. The flat scoped list hides it.

| Role | Scoped now | Latent backlog | Share of all tasks | Share of latent tasks |
| ---- | ---------- | -------------- | ------------------ | --------------------- |
${roleBacklog
  .map(
    (role) =>
      `| \`${role.owner_role}\` | ${role.scoped_tasks} | ${role.latent_tasks} | ${role.share_of_all_tasks} | ${role.share_of_latent_tasks} |`
  )
  .join("\n")}

## Protocol Alerts

${
  protocolAlerts.length === 0
    ? "No protocol drift detected in task metadata."
    : protocolAlerts
        .map(
          (alert) =>
            `- **${alert.type}** in [\`${alert.pack_id}\`](../../${alert.problem_file ?? alert.tasks_file.replace("/tasks.json", "/problem.md")}): task \`${alert.task_id}\` uses \`${alert.reviewer_needed}\`. Fix the enum drift before it spreads.`
        )
        .join("\n")
}
`;

const jsonFormatted = await prettier.format(JSON.stringify(radar, null, 2), {
  parser: "json",
  filepath: "agent-radar.json"
});

const markdownFormatted = await prettier.format(markdown, {
  parser: "markdown",
  filepath: "docs/wiki/Agent-Radar.md"
});

await writeOrCheck("agent-radar.json", jsonFormatted);
await writeOrCheck("docs/wiki/Agent-Radar.md", markdownFormatted);

if (!checkOnly) {
  console.log(
    `Wrote agent-radar.json and docs/wiki/Agent-Radar.md for ${scopedTasks.length} scoped tasks`
  );
}
