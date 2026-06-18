import { promises as fs } from "node:fs";
import path from "node:path";
import { root, walkFiles } from "./lib/files.mjs";

const fetchWithTimeout = async (url, method) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    return await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "open-problem-lab-source-check/0.1"
      }
    });
  } finally {
    clearTimeout(timeout);
  }
};

const checkUrl = async (url) => {
  const head = await fetchWithTimeout(url, "HEAD").catch((error) => ({ error }));
  if (!head.error && head.status >= 200 && head.status < 400) {
    return { status: head.status, method: "HEAD", ok: true };
  }

  const get = await fetchWithTimeout(url, "GET").catch((error) => ({ error }));
  if (get.error) {
    throw new Error(`${url} failed: ${get.error.message}`);
  }

  if ((get.status >= 200 && get.status < 400) || get.status === 403) {
    return {
      status: get.status,
      method: "GET",
      ok: true,
      note: get.status === 403 ? "reachable but automated access is forbidden" : undefined
    };
  }

  throw new Error(`${url} returned HTTP ${get.status}`);
};

const loadAllowlist = async () => {
  try {
    const raw = await fs.readFile(
      path.join(root, "scripts", "source-check-allowlist.json"),
      "utf8"
    );
    const parsed = JSON.parse(raw);
    return new Set((parsed.allow || []).map((entry) => entry.url));
  } catch {
    return new Set();
  }
};

// A connection-level failure (DNS/TLS/timeout/reset) is reported by checkUrl as
// "<url> failed: ...". A definite HTTP error status is "<url> returned HTTP <n>".
// Only the former is suppressible via the allowlist; real HTTP errors always fail.
const isConnectionFailure = (message) => !/ returned HTTP /.test(message);

const main = async () => {
  const allowlist = await loadAllowlist();
  const evidenceFiles = await walkFiles(
    path.join(root, "problem-packs"),
    (file) => path.basename(file) === "evidence.json"
  );

  const records = [];
  for (const file of evidenceFiles) {
    const evidence = JSON.parse(await fs.readFile(file, "utf8"));
    for (const record of evidence) {
      records.push({ ...record, file: path.relative(root, file) });
    }
  }

  if (records.length === 0) {
    throw new Error("No evidence records found.");
  }

  const failures = [];
  const warnings = [];
  for (const record of records) {
    try {
      const result = await checkUrl(record.source.url);
      const suffix = result.note ? ` (${result.note})` : "";
      console.log(`${record.id}: ${result.method} ${result.status}${suffix}`);
    } catch (err) {
      if (allowlist.has(record.source.url) && isConnectionFailure(err.message)) {
        console.warn(
          `WARN (allowlisted, unreachable by CI): ${record.id} — ${err.message}`
        );
        warnings.push({ id: record.id, url: record.source.url, error: err.message });
        continue;
      }
      console.error(`FAIL: ${record.id} — ${err.message}`);
      failures.push({ id: record.id, url: record.source.url, error: err.message });
    }
  }

  if (warnings.length > 0) {
    console.warn(
      `\n${warnings.length} allowlisted URL(s) were unreachable by CI (verify manually):`
    );
    for (const w of warnings) console.warn(`  ${w.id}: ${w.url}`);
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} URL(s) failed verification:`);
    for (const f of failures) {
      console.error(`  ${f.id}: ${f.url}`);
    }
    throw new Error(`${failures.length} evidence URL(s) failed.`);
  }

  console.log(`Verified ${records.length} evidence source URL(s).`);
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
