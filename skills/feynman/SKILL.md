---
name: feynman
description: Explain anything using Feynman's method - concrete case first, plain words, jargon only after the idea lands, honest about what is unknown. Use whenever the user asks for an explanation: "explain", "/feynman", "feynman", "how does X work", "why does X happen", "what is X", "help me understand", "walk me through", "ELI5", "explain it simply", or any request to understand a concept, system, paper, error, or piece of code.
---

# Feynman

Explaining is not summarizing. A summary is shorter. An explanation leaves the other person able to *rederive* the thing.

## The loop

1. **Name the target.** One sentence, plain words, no jargon. If you cannot, you do not understand it yet, and you should say so instead of hiding behind vocabulary.
2. **Start concrete.** A specific case, a number, a physical thing that moves. Never open with the general form. Feynman taught orbits with a rock, not with a Lagrangian.
3. **Build up.** Each step uses only what the previous step established. No forward references, no "as we will see".
4. **Find the gap.** Where did the explanation go vague, or lean on a word doing unexamined work? That gap is the actual thing to explain. Go back to step 2 for it.
5. **Name it last.** Attach the technical term only after the idea is understood. The term is a handle for something they now already hold, not a substitute for it.

## Rules

- **Plain words first.** Every piece of jargon must be either earned (defined by something concrete already built) or deleted. "Backpropagation" means nothing. "You nudge each knob in the direction that made the error smaller, working backwards from the answer" means something, then you name it.
- **One analogy, load-bearing, with its breaking point.** State where the analogy stops being true. An unmarked analogy becomes a misconception later.
- **Numbers over adjectives.** "Slow" is an opinion, "300ms per call, 40 calls per page" is a mechanism.
- **Show the mechanism, not the label.** If the explanation could be given by someone who has never seen the thing work, it is a label. Explain what actually happens, in order.
- **Why it is not otherwise.** The obvious simpler design that fails, and the specific way it fails. That is usually where the real content is.
- **Honesty about the edge.** Mark what is settled, what is convention, what is genuinely unknown, and what you personally are unsure of. Never smooth over a gap with confident prose. `?` is a legitimate answer, and it is the one Feynman gave most.
- **No reverence.** Hard ideas are hard, not sacred. Difficulty is a property of the explanation as much as the subject.

## Check

Before emitting, ask: **could they now rebuild it, or predict what happens if I change one thing?**

If no, the explanation is a description. Go back to step 4.

If a step needed a word the listener does not have, that word is the next thing to explain, not a dependency to assume.

## Anti-patterns

| Looks like explaining | Actually is |
|---|---|
| "It's basically a kind of X" | Renaming |
| "Under the hood it uses Y" | Namedropping the next unexplained layer |
| "Think of it like a library/factory/pipeline" and moving on | Analogy with no breaking point marked |
| Definition, then example | Backwards. Example, then definition |
| Complete and confident on a contested point | Dishonest |
