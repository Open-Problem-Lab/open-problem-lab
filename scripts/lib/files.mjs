import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

export const readJson = async (filePath) => {
  const resolved = path.isAbsolute(filePath) ? filePath : path.join(root, filePath);
  return JSON.parse(await fs.readFile(resolved, "utf8"));
};

export const walkFiles = async (dir, predicate = () => true) => {
  const output = [];
  const visit = async (current) => {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      if (entry.isDirectory()) await visit(fullPath);
      else if (predicate(fullPath)) output.push(fullPath);
    }
  };
  await visit(dir);
  return output.sort((a, b) => a.localeCompare(b));
};
