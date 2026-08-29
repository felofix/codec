# codec

Two Claude Code skills, one axis: how much language you spend per unit of meaning.

A codec compresses and it expands. So does this.

| skill | direction | for |
|---|---|---|
| **brevity** | compress | status, debug loops, long agent runs. Prose becomes fixed-field telemetry. |
| **feynman** | expand | understanding something. Concrete case first, jargon last, gaps marked honestly. |

```
DEP:FAIL | CAUSE:DB_POOL_SAT | ACT:POOL+ | VERIFY:P95<200ms
```

that is brevity. feynman is what you invoke when you want to know *why* the pool saturated, explained so you could predict it next time.

## Install

```bash
npx github:felofix/codec
```

Both skills into `~/.claude/skills/`. One only:

```bash
npx github:felofix/codec brevity
```

## Use

Say `brevity` / `feynman`, or `/brevity`, `/feynman`.

Specs: [skills/brevity/SKILL.md](skills/brevity/SKILL.md), [skills/feynman/SKILL.md](skills/feynman/SKILL.md)
