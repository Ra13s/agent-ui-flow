# TODO

Goal: publish one strong demo that proves Agent UI Flow is a hillclimbing workflow, not a static
example gallery.

Read first:

- `docs/demo-process.md`
- `.skills/image-variants/SKILL.md`
- `.skills/visual-review/SKILL.md`
- `.skills/implement-flow/SKILL.md`

## WP1 - Remove weak demos

Status: done.

- Removed the photo tutorial demo.
- Removed the presentation cleanup demo.
- Removed old capture/generation scripts tied to those demos.
- Kept the repo demo-free until a full hillclimb exists.

## WP2 - Choose the first real demo subject

Status: done.

Pick a product/screen that is not private and not too specific to one founder's app.

Requirements:

- has a visibly mediocre or cluttered starting UI
- has one obvious user task
- can be implemented as a small static app
- benefits from image generation exploration
- can show meaningful improvement over four rounds

Candidate types:

- public-speaking practice app
- meal-planning app
- personal finance onboarding
- habit tracker daily page
- photo coaching app only if the start screen is meaningfully messy

Selected: fictional public-speaking practice app, `PitchKit`.

## WP3 - Create the demo scaffold

Status: done.

Create:

```text
docs/demos/<demo-name>/
  README.md
  run-log.md
  image-ledger.md
  00-brief.md
  01-initial/
  02-image-round-1/
  03-image-round-2/
  04-implementation-v1/
  05-image-round-3-from-implementation/
  06-implementation-round-1/
  07-implementation-round-2/
  08-implementation-round-3/
  09-implementation-round-4/
  10-final/
```

Use `docs/demo-process.md` as the exact contract.

## WP4 - Run image generation round 1

Status: done.

- Capture or create the initial bad screen.
- Store it in `01-initial/screenshot.png`.
- Review it in `01-initial/review.md`.
- Generate at least three distinct directions.
- Store prompt verbatim in `02-image-round-1/prompt.md`.
- Store variants in `02-image-round-1/variants/`.
- Review the batch.
- Select a winner or hybrid.
- Update `run-log.md` and `image-ledger.md`.

## WP5 - Run image generation round 2

Status: done.

- Use the selected Round 1 direction as seed.
- Generate at least three more variants.
- Review them.
- Compare against the Round 1 winner.
- Select the implementation direction.
- Log everything.

## WP6 - Implement v1

Status: done.

- Implement the selected direction as a small running UI.
- Store implementation instruction verbatim.
- Capture screenshot from the running UI.
- Review it.
- Log differences from the selected image.

## WP7 - Generate from implementation screenshot

Status: done.

- Use the v1 implementation screenshot as the seed.
- Generate at least three more variants.
- Review them.
- Select safe improvements to apply manually.
- Log decisions.

## WP8 - Run four implementation improvement rounds

Status: done.

Each round must include screenshot, review, comparison, changes, and new screenshot.

Rounds:

1. focus and hierarchy
2. clutter and repeated information
3. spacing, typography, and contrast
4. interaction affordances and final consistency

## WP9 - Final public demo writeup

Status: done.

Create a demo `README.md` that can be read without opening every raw file.

It must show images inline and explain:

- where the UI started
- what generated variants explored
- what reviewers caught
- what was selected
- what changed in implementation
- how each round improved or regressed
- final before/after
- remaining weaknesses

## Guards

- No private product screenshots.
- No API keys or local absolute paths.
- No code snippets in the public demo narrative.
- Every artifact that influences the final UI must be logged.
- If image generation is unavailable, stop. Do not fake it with manual screenshots.

## Next Work

- Run an external review pass on `docs/demos/presentation-hillclimb/README.md`.
- Add a second demo with a different product category after the first demo has been reviewed.
