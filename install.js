#!/usr/bin/env node
// ponytail: copy one file, no CLI framework
const { cpSync, mkdirSync } = require("fs");
const { join } = require("path");
const dir = join(process.env.HOME, ".claude", "skills", "brevity");
mkdirSync(dir, { recursive: true });
cpSync(join(__dirname, "SKILL.md"), join(dir, "SKILL.md"));
console.log("installed -> " + dir);
