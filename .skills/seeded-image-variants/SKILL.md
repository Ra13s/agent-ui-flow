---
name: seeded-image-variants
description: Generate UI concept variants from one or more real seed images using the bundled OpenAI Images API edit script. Use when Codex needs screenshot-to-image UI exploration, image-to-image redesign rounds, generated variants based on a current implementation screenshot, or proof that an image-generation round actually used image inputs rather than prompt-only generation.
---

# Seeded Image Variants

Use this skill when image generation must start from actual pixels: a screenshot, mockup, prior generated variant, or reference screen.

This is not prompt-only image generation. A round is only "seeded" if the source image is passed to the script with `--image`.

## Hard Rule

Do not describe a screenshot in text and call the result seeded.

If image-input tooling is unavailable, stop or label the round `prompt-only`. A prompt-only image may be useful for wild exploration, but it is not valid evidence for a seeded hillclimb demo.

## Script

Run from the repo root:

```cmd
node .skills\seeded-image-variants\scripts\openai-image-edit.mjs --image path\to\seed.png --prompt-file path\to\prompt.txt --out-dir docs\demos\<demo>\02-image-round-1\variants --name round-1 --n 3
```

For multiple single-screen directions, use the batch runner instead of hand-running one command per
variant:

```cmd
npm run image:batch -- docs\demos\<demo>\02-image-round-1\batch.json --concurrency 3
```

Use separate jobs in one batch when each direction needs its own prompt. Do not manually run three
near-identical `n=1` commands unless the batch runner is unavailable.

Dry run:

```cmd
node .skills\seeded-image-variants\scripts\openai-image-edit.mjs --image path\to\seed.png --prompt "Improve this UI concept." --dry-run
```

Options:

- `--image <path>`: required seed image. May be repeated for multiple references.
- `--prompt <text>` or `--prompt-file <path>`: required instruction.
- `--out-dir <path>`: output folder.
- `--name <prefix>`: output filename prefix.
- `--n <count>`: default `3`; use `5` for early wild hops, `1` for targeted edits.
- `--model <model>`: default `gpt-image-2`.
- `--size <size>`: default `1536x1024`.
- `--quality <quality>`: default `medium`.
- `--env-file <path>`: file containing `OPENAI_API_KEY`.
- `--dry-run`: validate inputs without calling the API.

## Workflow

1. Capture or choose the seed image.
2. Save the prompt verbatim.
3. Run a batched generation command.
   - Use `npm run image:edit -- ... --n 3` when one prompt can produce the whole batch cleanly.
   - Use `npm run image:batch -- <batch.json>` when the round needs multiple direction-specific prompts.
4. Save generated images in the demo folder.
5. Run visual review on the variants.
6. Record which variant won and why.
7. Use the selected image as the next seed only if the next round is also image-input based.

## Prompt Shape

```text
Edit this desktop web app screenshot into a stronger UI concept.
Preserve the product purpose, current screen task, and important visible content.
Improve hierarchy, spacing, visual rhythm, and clarity of the next action.
Explore a meaningfully different layout direction, not just a color swap.
Avoid decorative filler, fake analytics, generic AI assistant panels, mascot wallpaper, and unreadable generated text.
```

For implementation-seeded rounds:

```text
Use this running implementation screenshot as the source.
Keep the same page purpose and route, but improve the weak areas from the review.
Do not invent new product modules unless they directly solve the reviewed issue.
```

## Required Log

Every seeded generation round must record:

- seed image path
- prompt path
- command used, preferably one batch command for a multi-variant round
- output image paths
- review path
- selected image or rejected status

