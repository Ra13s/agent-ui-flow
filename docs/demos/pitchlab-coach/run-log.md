# Run Log

## 2026-07-07 - Demo scaffold

Created `docs/demos/pitchlab-coach` with:

```cmd
npm run demo:scaffold -- pitchlab-coach
```

## 2026-07-07 - Bad seed implementation

Created a deliberately bad static HTML screen at `app/initial.html`.

Purpose: produce a real running UI screenshot to seed image generation.

## 2026-07-07 - Initial screenshot

Captured the seed screenshot:

```cmd
npm run capture -- docs\demos\pitchlab-coach\app\initial.html docs\demos\pitchlab-coach\01-initial\screenshot.png
```

Output: `01-initial/screenshot.png`

## 2026-07-07 - Initial visual review

Reviewed `01-initial/screenshot.png`.

Output: `01-initial/review.md`

## 2026-07-07 - Round 1 prompt

Prepared the first seeded image-generation prompt.

Output: `02-image-round-1/prompt.md`

## 2026-07-07 - Round 1 dry-run validation

Validated the seeded generation command without calling the API:

```cmd
npm run image:edit:dry -- --image docs\demos\pitchlab-coach\01-initial\screenshot.png --prompt-file docs\demos\pitchlab-coach\02-image-round-1\prompt.md --out-dir docs\demos\pitchlab-coach\02-image-round-1\variants --name pitchlab-r1 --n 3
```

Result: command shape is valid. The seed image is a real file and is supplied with `--image`.

## 2026-07-07 - Round 1 blocked at API gate

Attempted the real seeded image call:

```cmd
npm run image:edit -- --image docs\demos\pitchlab-coach\01-initial\screenshot.png --prompt-file docs\demos\pitchlab-coach\02-image-round-1\prompt.md --out-dir docs\demos\pitchlab-coach\02-image-round-1\variants --name pitchlab-r1 --n 3
```

Result: blocked. `OPENAI_API_KEY` was not available in `.env.local` or the process environment.

Decision: stop here. Do not substitute prompt-only image generation, because that would invalidate
the seeded demo.

## 2026-07-07 - Round 1 blocked by wrong provider key

Retried after `.env.local` was added:

```cmd
npm run image:edit -- --image docs\demos\pitchlab-coach\01-initial\screenshot.png --prompt-file docs\demos\pitchlab-coach\02-image-round-1\prompt.md --out-dir docs\demos\pitchlab-coach\02-image-round-1\variants --name pitchlab-r1 --n 3
```

Result: blocked. The value provided to `OPENAI_API_KEY` was an OpenRouter-style key, and the OpenAI
Images API rejected it.

Decision: stop here again. The seeded image script requires an OpenAI platform API key for
`https://api.openai.com/v1/images/edits`.

## 2026-07-07 - Round 1 generated contact sheets

After adding a valid OpenAI key, reran:

```cmd
npm run image:edit -- --image docs\demos\pitchlab-coach\01-initial\screenshot.png --prompt-file docs\demos\pitchlab-coach\02-image-round-1\prompt.md --out-dir docs\demos\pitchlab-coach\02-image-round-1\variants --name pitchlab-r1 --n 3
```

Output:

- `02-image-round-1/variants/pitchlab-r1-2026-07-07T17-31-08-518Z-01.png`
- `02-image-round-1/variants/pitchlab-r1-2026-07-07T17-31-08-518Z-02.png`
- `02-image-round-1/variants/pitchlab-r1-2026-07-07T17-31-08-518Z-03.png`

Review: the images are real seeded outputs, but they are contact sheets with multiple concepts per
image. They are not suitable as a direct implementation seed.

Decision: keep them as a logged failed batch, amend the prompt, and rerun Round 1 for single-screen
variants.

## 2026-07-07 - Round 1 still produced multi-screen boards

Reran with the amended prompt:

```cmd
npm run image:edit -- --image docs\demos\pitchlab-coach\01-initial\screenshot.png --prompt-file docs\demos\pitchlab-coach\02-image-round-1\prompt.md --out-dir docs\demos\pitchlab-coach\02-image-round-1\variants --name pitchlab-r1-screen --n 3
```

Output:

- `02-image-round-1/variants/pitchlab-r1-screen-2026-07-07T17-33-39-992Z-01.png`
- `02-image-round-1/variants/pitchlab-r1-screen-2026-07-07T17-33-39-992Z-02.png`
- `02-image-round-1/variants/pitchlab-r1-screen-2026-07-07T17-33-39-992Z-03.png`

Review: still multi-screen boards.

Decision: switch to three separate `n=1` calls with one direction per prompt:

- `02-image-round-1/prompt-single-01-focused-card.md`
- `02-image-round-1/prompt-single-02-path.md`
- `02-image-round-1/prompt-single-03-sprint.md`

## 2026-07-07 - Round 1 single-screen variants

Generated three separate seeded variants:

```cmd
npm run image:edit -- --image docs\demos\pitchlab-coach\01-initial\screenshot.png --prompt-file docs\demos\pitchlab-coach\02-image-round-1\prompt-single-01-focused-card.md --out-dir docs\demos\pitchlab-coach\02-image-round-1\variants --name pitchlab-r1-focused --n 1
npm run image:edit -- --image docs\demos\pitchlab-coach\01-initial\screenshot.png --prompt-file docs\demos\pitchlab-coach\02-image-round-1\prompt-single-02-path.md --out-dir docs\demos\pitchlab-coach\02-image-round-1\variants --name pitchlab-r1-path --n 1
npm run image:edit -- --image docs\demos\pitchlab-coach\01-initial\screenshot.png --prompt-file docs\demos\pitchlab-coach\02-image-round-1\prompt-single-03-sprint.md --out-dir docs\demos\pitchlab-coach\02-image-round-1\variants --name pitchlab-r1-sprint --n 1
```

Output:

- `02-image-round-1/variants/pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png`
- `02-image-round-1/variants/pitchlab-r1-path-2026-07-07T17-37-34-990Z-01.png`
- `02-image-round-1/variants/pitchlab-r1-sprint-2026-07-07T17-38-46-342Z-01.png`

Decision: select `pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png` for Round 2.

## 2026-07-07 - Round 2 single-screen variants

Used the selected Round 1 image as the actual seed:

`02-image-round-1/variants/pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png`

Commands:

```cmd
npm run image:edit -- --image docs\demos\pitchlab-coach\02-image-round-1\variants\pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png --prompt-file docs\demos\pitchlab-coach\03-image-round-2\prompt-single-01-refine.md --out-dir docs\demos\pitchlab-coach\03-image-round-2\variants --name pitchlab-r2-refine --n 1
npm run image:edit -- --image docs\demos\pitchlab-coach\02-image-round-1\variants\pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png --prompt-file docs\demos\pitchlab-coach\03-image-round-2\prompt-single-02-premium.md --out-dir docs\demos\pitchlab-coach\03-image-round-2\variants --name pitchlab-r2-premium --n 1
npm run image:edit -- --image docs\demos\pitchlab-coach\02-image-round-1\variants\pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png --prompt-file docs\demos\pitchlab-coach\03-image-round-2\prompt-single-03-voice-object.md --out-dir docs\demos\pitchlab-coach\03-image-round-2\variants --name pitchlab-r2-voice --n 1
```

Output:

- `03-image-round-2/variants/pitchlab-r2-refine-2026-07-07T17-41-42-660Z-01.png`
- `03-image-round-2/variants/pitchlab-r2-premium-2026-07-07T17-43-12-574Z-01.png`
- `03-image-round-2/variants/pitchlab-r2-voice-2026-07-07T17-44-58-757Z-01.png`

Decision: recommend `pitchlab-r2-voice-2026-07-07T17-44-58-757Z-01.png` for implementation.

Human validation checkpoint 1 is now required before implementation.

## 2026-07-07 - Human validation checkpoint 1

Artifact reviewed:

`03-image-round-2/variants/pitchlab-r2-voice-2026-07-07T17-44-58-757Z-01.png`

Decision: approved.

Requested change: proceed with implementation.

## 2026-07-07 - Implementation V1

Implemented the selected image as:

`app/implementation-v1.html`

Captured screenshot:

```cmd
npm run capture -- docs\demos\pitchlab-coach\app\implementation-v1.html docs\demos\pitchlab-coach\04-implementation-v1\screenshot.png 1536 1024
```

Output:

`04-implementation-v1/screenshot.png`

Fidelity review:

`04-implementation-v1/fidelity-review.md`

Verdict: pass, 14/16.

Human validation checkpoint 2 is now required before implementation-seeded image generation.

## 2026-07-07 - Checkpoint 2 fix request

Human review found:

- center microphone icon was not acceptable
- CTA microphone icon was not acceptable
- step number badges were off

Fixes applied:

- replaced microphone drawings with SVG icons
- moved step badges onto icon disks
- recaptured `04-implementation-v1/screenshot.png`

Checkpoint 2 remains pending until the corrected implementation is approved.

## 2026-07-07 - Human validation checkpoint 2

Artifact reviewed:

`04-implementation-v1/screenshot.png`

Decision: approved.

Requested change: proceed without asking again for this checkpoint.

Copied implementation screenshot as the next image seed:

`05-image-round-3-from-implementation/source-screenshot.png`

## 2026-07-07 - Implementation-seeded image round

Used the implementation screenshot as the actual seed.

Commands:

```cmd
npm run image:edit -- --image docs\demos\pitchlab-coach\05-image-round-3-from-implementation\source-screenshot.png --prompt-file docs\demos\pitchlab-coach\05-image-round-3-from-implementation\prompt-single-01-polish.md --out-dir docs\demos\pitchlab-coach\05-image-round-3-from-implementation\variants --name pitchlab-r3-polish --n 1
npm run image:edit -- --image docs\demos\pitchlab-coach\05-image-round-3-from-implementation\source-screenshot.png --prompt-file docs\demos\pitchlab-coach\05-image-round-3-from-implementation\prompt-single-02-less-clutter.md --out-dir docs\demos\pitchlab-coach\05-image-round-3-from-implementation\variants --name pitchlab-r3-less-clutter --n 1
npm run image:edit -- --image docs\demos\pitchlab-coach\05-image-round-3-from-implementation\source-screenshot.png --prompt-file docs\demos\pitchlab-coach\05-image-round-3-from-implementation\prompt-single-03-stronger-focus.md --out-dir docs\demos\pitchlab-coach\05-image-round-3-from-implementation\variants --name pitchlab-r3-focus --n 1
```

Output:

- `05-image-round-3-from-implementation/variants/pitchlab-r3-polish-2026-07-07T18-15-45-566Z-01.png`
- `05-image-round-3-from-implementation/variants/pitchlab-r3-less-clutter-2026-07-07T18-17-05-190Z-01.png`
- `05-image-round-3-from-implementation/variants/pitchlab-r3-focus-2026-07-07T18-18-34-070Z-01.png`

Decision: use the less-clutter variant as improvement guidance for the manual rounds.

## 2026-07-07 - Manual round 1

Focus: focus and hierarchy.

Before: `06-implementation-round-1/screenshot-before.png`
After: `06-implementation-round-1/screenshot-after.png`

Change: removed the bottom focus strip.

Verdict: improved.

## 2026-07-07 - Manual round 2

Focus: clutter and repeated information.

Before: `07-implementation-round-2/screenshot-before.png`
After: `07-implementation-round-2/screenshot-after.png`

Change: shortened privacy copy and softened outer panel border/shadow.

Verdict: improved.

## 2026-07-07 - Manual round 3

Focus: spacing, typography, and contrast.

Before: `08-implementation-round-3/screenshot-before.png`
After: `08-implementation-round-3/screenshot-after.png`

Change: reduced title/subhead scale and tightened step-card spacing.

Verdict: improved.

## 2026-07-07 - Manual round 4

Focus: interaction affordances and final consistency.

Before: `09-implementation-round-4/screenshot-before.png`
After: `09-implementation-round-4/screenshot-after.png`

Change: softened CTA and added step-card hover behavior.

Verdict: improved.

## 2026-07-07 - Final screenshot

Copied final manual-round screenshot to:

`10-final/final-screenshot.png`

## 2026-07-07 - Human validation checkpoint 3

Decision: proceed to publish.

Rationale: user explicitly requested the full demo flow and push to main without further checkpoint
stalls.
