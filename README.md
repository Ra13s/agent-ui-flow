# Agent UI Flow

AI can make a beautiful UI screenshot in one shot.

That is not the hard part.

The hard part is getting from a messy product screen to a better real interface without being fooled
by plausible-but-bad mockups, decorative clutter, fake detail, giant typography, or vague "looks
nice" feedback.

Agent UI Flow is a hillclimbing workflow for AI-assisted interface design:

```text
bad screen -> generated variants -> review -> select -> implement -> screenshot -> compare -> improve
```

It is not a UI kit. It is not a prompt pack. It is a repeatable loop for turning AI visual
exploration into reviewed, implemented UI.

## See The Demo

The PitchLab Coach demo shows the full loop end to end.

[Open the full demo](docs/demos/pitchlab-coach/README.md)

### Before

A deliberately bad screen: too many cards, repeated information, fake dashboard weight, weak visual
focus, and several competing actions.

![Bad initial PitchLab screen](docs/demos/pitchlab-coach/01-initial/screenshot.png)

### AI Visual Search

The workflow sends the real screenshot into GPT image editing, generates several directions, reviews
them, selects one, then generates again from the selected image.

![Selected generated direction](docs/demos/pitchlab-coach/03-image-round-2/variants/pitchlab-r2-voice-2026-07-07T17-44-58-757Z-01.png)

### Real Implementation

The selected direction is implemented as a running page, then screenshot-tested against the image it
came from.

![Implemented PitchLab screen](docs/demos/pitchlab-coach/04-implementation-v1/screenshot.png)

### Implementation-Seeded Iteration

The running UI screenshot becomes the next image seed. The model gets to suggest another jump, but
the review loop decides what is actually worth keeping.

![Implementation-seeded generated improvement](docs/demos/pitchlab-coach/05-image-round-3-from-implementation/variants/pitchlab-r3-less-clutter-2026-07-07T18-17-05-190Z-01.png)

### After

Four manual review/fix/compare rounds later:

![Final PitchLab screen](docs/demos/pitchlab-coach/10-final/final-screenshot.png)

The demo includes the [run log](docs/demos/pitchlab-coach/run-log.md), [image ledger](docs/demos/pitchlab-coach/image-ledger.md), prompts, reviews, comparison notes, generated images, and screenshots.

## What This Catches

Agent UI Flow is built to catch the failures that normal "generate a UI" workflows miss:

- a page with no single first-glance object
- repeated information dressed up as structure
- decorative cards that do no work
- huge type where product UI needs normal type
- fake metrics and fake future states
- helper text that explains what the user will discover by doing
- generated screenshots that look impressive but cannot be implemented faithfully
- "inspired by" implementations that silently drift away from the selected design

The point is not to trust the model less. The point is to give the model more chances to help while
forcing every jump through review, comparison, and real screenshots.

## The Workflow

1. **Start with a real problem**
   Capture the current UI or create a deliberately bad baseline. Name the product problem:
   focus conflict, clutter, repetition, weak action, wrong module, low contrast, or unclear flow.

2. **Generate multiple image directions**
   Use real seed images. A seeded round must pass an actual image into the image model. Prompt-only
   generations can be useful for invention, but they do not count as seeded hillclimbing.

3. **Review the variants**
   Judge focus, clutter, contrast, information value, repetition, product fit, and whether the
   result got better or merely prettier.

4. **Select and log**
   Pick a winner or hybrid. Record why it won, why the others lost, and what ideas are safe to keep.

5. **Generate again**
   Use the selected image as the next seed. This gives the workflow a real visual search step, not
   one isolated throw.

6. **Implement with fidelity**
   Build the selected direction as real UI. Compare the implementation screenshot against the source
   image, and record where it matches or fails.

7. **Seed from the implementation**
   Screenshot the running UI and use that as another image seed. This lets the model react to the
   actual implemented page, not an idealized mockup.

8. **Run review/fix/compare rounds**
   Each round has a before screenshot, review findings, implementation changes, after screenshot,
   and explicit improved/regressed/mixed verdict.

## Included Tools

- `.skills/seeded-image-variants` - generate UI variants from real seed images with the OpenAI Images API.
- `.skills/visual-review` - review screenshots and generated batches.
- `.skills/image-to-ui-implementation` - implement a selected image with a 90-95% visual-match target.
- `.skills/implementation-fidelity` - compare a selected generated image against a running UI screenshot.
- `npm run image:batch` - run multiple seeded image jobs in one batched command.
- `npm run capture` - capture static or running pages as screenshots.
- `npm run demo:check` - verify that a demo has the required audit artifacts.

## Why The Repo Uses A Script For Images

Claude Code cannot generate images directly. Codex can, but relying on Codex-only image generation
would make the workflow non-portable.

This repo uses a small OpenAI Images API script so the same process works from Codex, Claude Code,
or a normal terminal:

```cmd
npm run image:batch -- docs\demos\pitchlab-coach\03-image-round-2\batch.json --concurrency 3
```

That command sends real seed images to the API and saves generated files into the demo folder.

## Repo Layout

- `.skills/` - reusable agent skills for the flow.
- `scripts/` - portable helper scripts for image generation, screenshots, and demo checks.
- `docs/demo-process.md` - the strict contract for a publishable demo.
- `docs/demos/pitchlab-coach/` - the first full hillclimb demo.
- `docs/flow.md` - shorter method overview.
- `env/template/` - project knowledge template for adapting the flow to another app.

## What Counts As A Publishable Demo

A demo must show the actual hillclimb:

- bad or mediocre initial screen
- at least three generated variants
- review output
- second generated round
- selected direction
- implemented UI screenshot
- image generation from the implementation screenshot
- before/after screenshots
- comparison review
- four implementation improvement rounds
- final screenshot
- complete run log and image ledger

If an image, review, or code change affected the final UI, it must be logged. If it is not logged,
it does not count.

## License

MIT.
