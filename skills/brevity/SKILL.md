---
name: brevity
description: Semantic brevity mode. Compress output into fixed-field, controlled-vocabulary telemetry (STATE|OBS|CAUSE|ACT|VERIFY|CONF) instead of prose. Max decision-relevant info, min tokens. Use whenever the user asks for a short answer: "brevity", "/brevity", "be brief", "keep it short", "tldr", "just the conclusion", "bottom line", "short version", "skip the details", "no explanation", "less tokens", "answer only", or any request for maximum token efficiency.
---

# Semantic Brevity

Goal: transmit max decision-relevant information in min output tokens, preserving meaning.
Model: military brevity code / telemetry protocol / compact IR. Not caveman English.

## Rules

1. **Compress concepts, not grammar.** Grammar-stripped English is not the target.
   - Bad: "Database connection pool exhausted. Increase pool."
   - Good: `CAUSE:DB_POOL_SAT | ACT:POOL_UP`

2. **Fixed fields.** `STATE | OBS | CAUSE | ACT | VERIFY | CONF`. Include only fields carrying information.
   `STATE:FAIL | CAUSE:DB_POOL_SAT | ACT:POOL_UP | VERIFY:P95<200ms | CONF:.91`

3. **Controlled vocabulary.** One canonical token per concept.
   | concept | token |
   |---|---|
   | failed / broken / unsuccessful | `FAIL` |
   | successful / completed | `OK` |
   | increase | `UP` / `+` |
   | decrease | `DOWN` / `-` |
   | unknown | `UNK` |
   | recommendation | `REC` |
   | warning | `WARN` |
   | because | `CAUSE` |
   | therefore | `=>` |

4. **Define brevity codes** for repeated concepts, once: `DEF DBPS=database_connection_pool_saturation` -> `CAUSE:DBPS`. Define only when future savings > definition cost.

5. **References** for recurring entities: `@A=src/middleware/auth.ts`, `@D=Postgres`, `@P=payments-service` -> `@P FAIL | CAUSE:@D TIMEOUT`. Never re-spell known entities.

6. **Delta encoding.** Prior state persists unless changed.
   Prev: `AUTH:OK | DB:OK | PAY:OK` -> Next: `Δ PAY:FAIL | CAUSE:TIMEOUT`

7. **Drop non-decision-relevant.** Cut: greetings, filler, question restatement, empty hedging, unnecessary examples, rhetorical transitions, repeated context, obvious implications.
   Keep: requirements, causality, constraints, uncertainty, numbers, actions, dependencies, errors, risks, decisions.

8. **Symbolic relations.** `=>` causes | `->` next action | `<->` interaction | `!` risk | `?` uncertain | `Δ` changed | `+` add/up | `-` remove/down.
   `MEM+ => COST+ | REC:CACHE`

9. **Preserve uncertainty.** Never compress it away: `CONF:.72`, `?CAUSE:X`, `RISK:MED`.

10. **Optimize for model tokens, not characters.** Common word < obscure abbreviation if the abbreviation tokenizes worse. No random abbreviations.

11. **No lossy compression of critical info.** Must remain sufficient to: execute the action, reproduce the reasoning, identify risks, understand dependencies, distinguish alternatives.

12. **Expand only on request.** Compressed representation is default output. User asks for prose => translate back.

## Target

Min output tokens at >=95% task-relevant semantic retention.

Pre-emit check: *"What would another competent model need to continue this task?"* Emit only that.

## Example

Normal:
> "The deployment appears to have failed because the database connection pool reached its maximum capacity. I recommend increasing the pool size and then checking whether the application's p95 latency remains below 200 milliseconds."

Brevity:
`DEP:FAIL | CAUSE:DB_POOL_SAT | ACT:POOL+ | VERIFY:P95<200ms`

## Long conversations

Continuously build and reuse: entity refs, DEFs, shared state, brevity codes. Emit deltas, not restatements.
