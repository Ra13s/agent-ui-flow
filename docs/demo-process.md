# Demo Process

This repo sells a hillclimbing workflow. A demo must show that workflow end to end.

The public demo page should be readable by itself, with images inline. The raw files are the audit
trail. A reader should not need to open twenty files to understand what happened.

## Publishable Demo Criteria

A demo is publishable only if it contains all of these stages.

## Required Skills And Scripts

Use these repo tools. Do not replace them with informal equivalents.

- `seeded-image-variants`: run image rounds from real image inputs.
- `visual-review`: review screenshots, generated batches, and implementation screenshots.
- `implementation-fidelity`: compare selected generated image vs running UI screenshot.
- `image-to-ui-implementation`: implement the selected image with a 90-95% visual-match target.
- `implement-flow`: implement only after a reviewed direction exists.
- `npm run demo:scaffold -- <demo-name>`: create the required artifact tree.
- `npm run image:edit -- --image <seed> --prompt-file <prompt> --out-dir <out> --name <name> --n 3`: run the OpenAI Images API edit script.
- `npm run image:batch -- docs\demos\<demo>\<round>\batch.json --concurrency 3`: run multiple
  direction-specific image-edit jobs as one batch.
- `npm run demo:check -- <demo-name>`: verify that the demo has the required files before publishing.

If any required script or skill is unavailable, stop and fix the tooling before continuing.

## Hard Gates

### Seed Truth

A generated round is only seeded if the seed image is supplied to the image model as an actual
image input.

Use the bundled script:

```cmd
npm run image:edit -- --image path\to\seed.png --prompt-file path\to\prompt.md --out-dir docs\demos\<demo>\02-image-round-1\variants --name round-1 --n 3
```

The script calls OpenAI's Images API directly with `OPENAI_API_KEY`, so the same process works in
Codex, Claude Code, or a normal terminal. Do not use Codex-only built-in image generation for a
publishable seeded demo.

A text prompt that describes the screenshot is prompt-only generation. It may be logged as wild
exploration, but it does not satisfy any seeded-image requirement.

### Implementation Fidelity

After implementation, compare the selected generated image against the running UI screenshot.

The implementation must preserve:

- major layout geometry
- dominant color direction
- component shapes and proportions
- typography hierarchy
- visible module structure
- CTA placement
- spacing strategy

If the implementation is merely "inspired by" the image, the demo fails. Run
`implementation-fidelity` and log the verdict before publishing.

### Human Validation

A publishable demo must include three human validation checkpoints.

These are not agent reviews. They are explicit user signoffs that the demo is still heading in the
right direction.

Required checkpoints:

1. After Image Generation Round 2, before implementation starts.
2. After the first implemented UI passes or nearly passes implementation fidelity, before
   implementation-seeded image generation starts.
3. At final publish, after `npm run demo:check -- <demo-name>` passes.

Each checkpoint must be logged in `run-log.md` with:

- date/time
- artifact reviewed
- exact user decision: approved, approved with changes, or rejected
- requested changes, if any

If the user rejects a checkpoint, stop the demo flow and revise the selected direction. Do not keep
running the pipeline as if approval happened.

### 1. Initial Problem

Start with a clearly bad or mediocre real UI screenshot.

Before creating demo artifacts, run:

```cmd
npm run demo:scaffold -- <demo-name>
```

Document:

- what screen it is
- what the user is trying to do
- what is wrong in product terms
- why this is a worthwhile hillclimb

Acceptable problems include focus conflict, clutter, duplicated information, weak call to action,
misplaced modules, poor hierarchy, overexplaining, low contrast, and visual drift from the intended
product.

### 2. Image Generation Round 1

Generate at least three UI variants from the initial problem using the seed image as an actual API
image input.

The variants must explore different directions. Do not count small color swaps as separate
directions.

Default command shape:

```cmd
npm run image:edit -- --image docs\demos\<demo>\01-initial\screenshot.png --prompt-file docs\demos\<demo>\02-image-round-1\prompt.md --out-dir docs\demos\<demo>\02-image-round-1\variants --name round-1 --n 3
```

If the image model returns contact sheets or keeps merging directions into one canvas, create three
direction-specific prompt files and run them as one batch:

```cmd
npm run image:batch -- docs\demos\<demo>\02-image-round-1\batch.json --concurrency 3
```

Do not hand-run three separate one-off commands for a normal demo round.

Required:

- source image supplied with `--image`
- command stored verbatim
- prompt stored verbatim
- all generated images saved
- review output for the whole batch
- decision file explaining winner, losers, and harvested ideas

### 3. Image Generation Round 2

Use the selected Round 1 direction as the seed.

Generate at least three more variants using the selected direction image as an actual API image
input.

Use one batch command for this round when prompts are direction-specific:

```cmd
npm run image:batch -- docs\demos\<demo>\03-image-round-2\batch.json --concurrency 3
```

Required:

- source image supplied with `--image`
- command stored verbatim
- prompt stored verbatim
- all generated images saved
- review output
- comparison against the Round 1 winner
- selected direction for implementation
- human validation before implementation starts

### 4. Implementation Pass

Implement the selected direction as actual running UI.

The public demo narrative should show screenshots, not code snippets. Code can exist in the repo,
but the demo story is image-led.

Use `image-to-ui-implementation`. The selected generated image is the source of truth. Do not
redesign it during implementation unless a human validation checkpoint changes the direction.

Required:

- implementation instruction stored
- screenshot of the running UI
- notes on where implementation intentionally differs from the selected image
- fidelity review comparing selected image against running UI
- human validation before using implementation screenshot as the next image seed

### 5. Implementation-Seeded Image Generation

Use the implemented UI screenshot as a new seed.

Generate another set of at least three UI variants that improve the real implementation.

Use one batch command for this round when prompts are direction-specific:

```cmd
npm run image:batch -- docs\demos\<demo>\05-image-round-3-from-implementation\batch.json --concurrency 3
```

Required:

- source screenshot identified
- source screenshot supplied with `--image`
- command stored verbatim
- prompt stored verbatim
- all generated images saved
- review output
- selected changes to apply manually

### 6. Four Improvement Rounds

Run four implementation improvement rounds.

Each round must contain:

- current screenshot
- visual review findings
- before/after comparison against the previous round
- explicit verdict: improved, regressed, or mixed
- implementation changes made
- new screenshot

Suggested round focus:

1. major focus and hierarchy
2. clutter and repeated information
3. spacing, typography, and contrast
4. interaction affordances and final visual consistency

### 7. Final Comparison

Show the initial screenshot beside the final screenshot.

Before publishing, run:

```cmd
npm run demo:check -- <demo-name>
```

Then get final human validation and log it before committing the demo.

Document:

- what improved
- what was intentionally rejected
- what remains weak
- whether the final result is good enough to ship, demo, or continue iterating

## Documentation And Logging Requirements

Every demo must be fully auditable.

### Run Log

Create one `run-log.md` for the whole demo.

It must be chronological and record every major action:

- prompt sent
- images generated
- review run
- selection decision
- implementation change
- screenshot captured
- comparison result

Each entry links to the produced artifact.

### Prompt Log

Store every prompt verbatim:

- image-generation prompts
- reviewer-agent prompts or review scopes
- implementation instructions

Do not replace prompts with summaries.

### Image Ledger

Create `image-ledger.md`.

Required columns:

- id
- round
- type: generated, implementation screenshot, comparison, or final
- source image, if any
- prompt file
- review file
- verdict: rejected, selected, used partly, final
- notes

### Review Outputs

Keep raw review outputs for:

- every generated batch
- every implementation screenshot
- every before/after comparison

Single-screen reviews and comparison reviews are separate artifacts.

### Decision Log

Every selected direction must say why it won.

Every rejected direction must say why it lost.

Every manual implementation change must point back to a review finding or selected image feature.

### No Invisible Work

If an image, review, or code change affected the final UI, it must appear in the log.

If it is not logged, it does not count as part of the demo.

## Required Folder Structure

Use this structure unless there is a clear reason to extend it:

```text
docs/demos/<demo-name>/
  README.md
  run-log.md
  image-ledger.md
  00-brief.md
  01-initial/
    screenshot.png
    review.md
  02-image-round-1/
    prompt.md
    variants/
    review.md
    decision.md
  03-image-round-2/
    prompt.md
    variants/
    review.md
    comparison.md
    decision.md
  04-implementation-v1/
    instruction.md
    screenshot.png
    review.md
    changes.md
  05-image-round-3-from-implementation/
    source-screenshot.png
    prompt.md
    variants/
    review.md
    decision.md
  06-implementation-round-1/
    screenshot-before.png
    review.md
    comparison.md
    changes.md
    screenshot-after.png
  07-implementation-round-2/
    screenshot-before.png
    review.md
    comparison.md
    changes.md
    screenshot-after.png
  08-implementation-round-3/
    screenshot-before.png
    review.md
    comparison.md
    changes.md
    screenshot-after.png
  09-implementation-round-4/
    screenshot-before.png
    review.md
    comparison.md
    changes.md
    screenshot-after.png
  10-final/
    initial-vs-final.md
    final-screenshot.png
    remaining-issues.md
```

## Public Demo README

The demo `README.md` must tell the story with images inline.

It should show:

- initial problem screenshot
- Round 1 generated variants
- Round 2 generated variants
- selected direction
- first implementation screenshot
- implementation-seeded generated variants
- screenshots from the four improvement rounds
- initial vs final comparison

Raw files should be linked as audit trail, not used as the main reading path.
