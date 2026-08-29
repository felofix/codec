# brevity

Claude Code skill: semantic brevity mode. Output becomes fixed-field, controlled-vocabulary telemetry instead of prose.

`DEP:FAIL | CAUSE:DB_POOL_SAT | ACT:POOL+ | VERIFY:P95<200ms`

Not caveman English. Concepts compress, meaning doesn't.

## Install

```bash
git clone https://github.com/felofix/brevity.git ~/.claude/skills/brevity
```

## Use

Say `brevity mode`, `/brevity`, or ask for max token efficiency. Ask for prose to get expansion back.

See [SKILL.md](SKILL.md) for the full spec.

## npm

```bash
npx brevity-skill
```

Copies `SKILL.md` into `~/.claude/skills/brevity/`.
