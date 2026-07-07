# Agent UI Flow

Agent UI Flow is a hillclimbing workflow for AI-assisted interface design.

It is not a UI kit. It is not a prompt pack. It is not "ask the model for a nice screen and hope."

The core idea:

```text
generate several directions -> review them -> select the best parts -> implement -> screenshot the
real UI -> review again -> compare -> improve -> repeat
```

The product is the loop.

## Why This Exists

AI is good at producing plausible UI. Plausible is the problem.

Plausible UI often has:

- no single first-glance object
- repeated information
- decorative cards that do no work
- giant type where normal product type belongs
- fake progress and fake future states
- helper text that explains things the user will discover by doing
- generated screenshots that look impressive but collapse under review

Agent UI Flow makes those failures visible. It forces every generated image, every review, every
selection, and every implementation pass to leave a trail.

## The Hillclimb

Each serious UI pass should look like this:

1. **Start with a real problem**
   Capture the current UI or write a precise screen brief. Name the problem in product terms:
   focus conflict, clutter, repetition, weak action, wrong module, low contrast, or unclear flow.

2. **Generate multiple directions**
   Produce at least three UI images. They should explore different layout strategies, not just
   color variants.

3. **Review the images**
   Run visual review. Judge focus, clutter, contrast, information value, repetition, and whether the
   design got better or just prettier.

4. **Select and log**
   Pick a winner or hybrid. Record why it won, why the others lost, and which parts are safe to
   carry forward.

5. **Generate again**
   Use the selected direction as the seed for another image round. Review and compare again.

6. **Implement**
   Build the selected direction in real UI. Do not show code in the public demo narrative; the
   proof is the screenshot.

7. **Use the implementation as a new seed**
   Screenshot the running UI. Generate another set of variants based on the implementation itself.
   This catches opportunities the first mockups missed.

8. **Run four improvement rounds**
   Each round has a current screenshot, review findings, comparison against the previous round,
   implementation changes, and a new screenshot.

9. **Final comparison**
   Show the initial screen beside the final screen. Explain what improved, what was rejected, and
   what remains weak.

## What Counts As A Real Demo

A demo is publishable only if it shows the full hillclimb:

- bad or mediocre initial screen
- image generation round 1 with at least 3 variants
- review output for round 1
- image generation round 2 with at least 3 variants
- selection decision
- implemented UI screenshot
- image generation round from the implementation screenshot
- four implementation improvement rounds
- before/after comparison review
- final screenshot
- complete run log and image ledger

If an image, review, or code change affected the final UI, it must be logged. If it is not logged,
it does not count.

## Repo Layout

- `.skills/` - agent instructions for storyboard, image variants, visual review, implementation,
  and onboarding
- `docs/flow.md` - method overview
- `docs/demo-process.md` - strict demo artifact contract
- `docs/demos/` - publishable demos only
- `docs/examples/` - small text examples that are not demos
- `env/template/` - product knowledge template for new projects

## Demo

No demo is currently published.

The first public demo must use the portable path this repo is built around:

- real screenshots or reference images as seed images
- the bundled OpenAI Images API script, so Claude Code and Codex can run the same workflow
- generated image files saved in the repo
- visual review on each batch
- implementation from the selected generated direction
- fidelity review comparing the selected image against the running UI
- four screenshot/review/fix/compare rounds

A prompt-only generated image is allowed for early invention, but it cannot be called a seeded
image round.

## Current Status

The workflow docs and skills are in place. The first publishable demo is still to be run.

## License

MIT.
