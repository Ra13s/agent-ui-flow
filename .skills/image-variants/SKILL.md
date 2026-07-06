---
name: image-variants
description: Iterative image-generation search over UI ideas. Seed with a real screenshot or reference screen, generate 3+ variants, review them, and feed the winner into the next iteration.
---

# Image variants skill

A gradient search over UI space. The current image is your position, the prompt is a direction,
the variants are candidate steps, and review picks the next position. Then you step again. The
value is in the iteration, not in any single generation.

## Seeds — where a search can start

- A screenshot of your current built page. Screenshots come from a script (e.g. playwright), real
  pixels — never a described or imagined screen.
- The winner of a previous iteration.
- Any reference screen: a competitor, a page you admire, google.com. "Make this better" is a legal
  opening move on anything.
- A reviewed storyboard, when you want placement ideas for a flow that is already sane.

This means the search has no fixed slot in the workflow. Run it on an existing page before
storyboarding a redesign, on a stuck surface mid-design, or on pure references before the product
exists. The only gate is at the exit (see Harvest rule).

## The loop

Every iteration is numbered. The iteration count is core to the method, not bookkeeping — it is
how you see whether the search is climbing or wandering.

1. Capture or choose the seed image.
2. Write the direction prompt: "make this better", "add a menu", "make the grid the hero",
   "calmer, fewer borders", "more energy near the primary action".
3. Generate 3 or more variants.
4. Review each with `visual-review`. Verdict per variant: better / worse / mixed / one useful idea.
5. Pick the winner, or harvest an idea and stop.
6. The winner becomes the next seed. Increment the iteration. Repeat.

Stop when two consecutive iterations produce no "better", or when a variant is worth harvesting.

## Iteration log

One folder per search, iteration number visible in every filename:

```text
docs/img/<search-name>/
  iter-01-seed.png
  iter-01-a.png  iter-01-b.png  iter-01-c.png
  iter-02-seed.png        <- winner of iter-01
  iter-02-a.png  ...
  search-log.md
```

`search-log.md`, one entry per iteration:

```text
iter 02 / seed: iter-01-b / prompt: "add a menu, keep the grid dominant"
verdicts: a worse (menu ate the hero), b better, c mixed (good tabs, bad density)
chosen: b / carrying forward: top tabs idea from c
```

## Prompt rules

- Direction prompts are allowed to be loose ("make this better") — the review step keeps the
  search honest, not the prompt.
- If you want invention, say so clearly: "Invent useful modules for this product."
- If you want fidelity, give the storyboard and forbid extra product sections.
- Avoid mascots, fake charts, and decorative scenes unless requested.

## Harvest rule

The search runs free; implementation does not. A winning image is harvested as text — modules,
copy, placement notes — into the storyboard, reviewed by the panel, and only then implemented.
An image never goes straight to code: generated screens invent product logic, and the registry
and NOT HERE lists only exist in text. Harvest useful visual ideas into the storyboard before
implementation.

## Output

```markdown
# Image Variant Search: <screen>

## Iterations
- iter 01: <prompt> -> <verdicts> -> <chosen>
- iter 02: <prompt> -> <verdicts> -> <chosen>

## Extracted Ideas
- ...

## Rejected Ideas
- ...

## Selected Direction
...
```
