# TODO

Goal: publish one real demo that proves Agent UI Flow is a hillclimbing workflow, not a static
example gallery.

Read first:

- `docs/demo-process.md`
- `.skills/seeded-image-variants/SKILL.md`
- `.skills/visual-review/SKILL.md`
- `.skills/implementation-fidelity/SKILL.md`
- `.skills/image-to-ui-implementation/SKILL.md`
- `.skills/implement-flow/SKILL.md`

## WP1 - Clean Invalid Demo

Status: done.

- Removed the failed demo artifacts.
- Removed stale demo scripts.
- Removed public claims that a complete demo exists.
- Kept the repo demo-free until a valid hillclimb is run.

Why: the removed demo did not use real seed images for the generated rounds, and the implementation
was not visually faithful to the selected image.

## WP2 - Make Image Generation Portable

Status: done.

- Copied the OpenAI Images API edit script into `.skills/seeded-image-variants/scripts/`.
- Made the script repo-generic.
- Documented that Claude Code and Codex both use the same API script.
- Added the hard rule: prompt-only generation is not seeded generation.

## WP3 - Add Implementation Fidelity Gate

Status: done.

- Added `.skills/implementation-fidelity/`.
- The gate compares selected generated image vs running implementation screenshot.
- It checks layout, color, component shape, typography, module structure, CTA placement, spacing,
  and interaction affordance.

## WP3b - Add Image-To-UI Implementation Skill

Status: done.

- Added `.skills/image-to-ui-implementation/`.
- It turns a selected image into a running page with a 90-95% visual-match target.
- It explicitly forbids redesign during implementation.
- It requires screenshot capture and `implementation-fidelity` before the demo can continue.

## WP4 - Choose New Demo Subject

Status: pending.

Pick a fictional product with a bad initial screen that is visually obvious in screenshots.

Requirements:

- not Banta-specific
- not a generic dashboard
- one clear user task
- enough visual clutter to make improvement obvious
- suitable for image generation and later static implementation

Possible directions:

- language-practice lesson page
- public-speaking practice app
- meal-planning onboarding
- workout form-coaching screen
- habit-tracker daily page

After choosing, run:

```cmd
npm run demo:scaffold -- <demo-name>
```

## WP5 - Run True Seeded Image Round 1

Status: pending.

- Create or capture the bad initial screen.
- Store it in `01-initial/screenshot.png`.
- Review it.
- Run:

```cmd
npm run image:edit -- --image docs\demos\<demo>\01-initial\screenshot.png --prompt-file docs\demos\<demo>\02-image-round-1\prompt.md --out-dir docs\demos\<demo>\02-image-round-1\variants --name round-1 --n 3
```

- Review the generated batch.
- Select a direction and log why.

## WP6 - Run True Seeded Image Round 2

Status: pending.

- Use the selected Round 1 image as the actual `--image` seed.
- Generate at least three variants with `npm run image:edit`.
- Review and compare against Round 1.
- Select implementation direction.
- Human validation checkpoint 1: ask the user to approve, reject, or change the selected direction
  before implementation starts. Log the decision in `run-log.md`.

## WP7 - Implement With Fidelity

Status: pending.

- Use `image-to-ui-implementation` to implement the selected direction as running UI.
- Capture screenshot.
- Run implementation-fidelity against the selected image.
- Fix until verdict is `pass` or document why the selected direction changed.
- Human validation checkpoint 2: ask the user to approve, reject, or change the implemented
  direction before using it as the next image seed. Log the decision in `run-log.md`.

## WP8 - Implementation-Seeded Image Round

Status: pending.

- Use the running implementation screenshot as the actual `--image` seed.
- Generate at least three variants with `npm run image:edit`.
- Review.
- Select concrete improvements to apply manually.

## WP9 - Four Manual Improvement Rounds

Status: pending.

Each round must include:

- before screenshot
- visual review
- implementation changes
- after screenshot
- before/after comparison verdict

Rounds:

1. focus and hierarchy
2. clutter and repeated information
3. spacing, typography, and contrast
4. interaction affordances and final consistency

## WP10 - Publish Demo

Status: pending.

- Write demo `README.md` as an image-led story.
- Link raw prompt, review, decision, and ledger files.
- Show initial vs final clearly.
- Run final doc review.
- Run:

```cmd
npm run demo:check -- <demo-name>
```

- Human validation checkpoint 3: ask the user for final publish approval after the contract check
  passes. Log the decision in `run-log.md`.
- Commit and push only after every artifact is present.

## Guards

- No private product screenshots.
- No API keys or local absolute paths.
- No code snippets in public demo narrative.
- Every artifact that influences the final UI must be logged.
- If image-input generation is unavailable, stop. Do not fake it.
