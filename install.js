#!/usr/bin/env node
// ponytail: copy each skill dir, no CLI framework
const { cpSync, readdirSync } = require("fs");
const { join } = require("path");
const src = join(__dirname, "skills");
const dst = join(process.env.HOME, ".claude", "skills");
const only = process.argv.slice(2);
for (const s of readdirSync(src)) {
  if (only.length && !only.includes(s)) continue;
  cpSync(join(src, s), join(dst, s), { recursive: true });
  console.log("installed -> " + join(dst, s));
}
