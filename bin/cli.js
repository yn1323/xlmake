#!/usr/bin/env node
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const demoDir = join(__dirname, "..", "demo");

const command = process.argv[2];

if (command === "demo") {
  spawn("npx", ["vite", demoDir], { stdio: "inherit", shell: true });
} else {
  console.log("Usage: xlkit demo");
}
