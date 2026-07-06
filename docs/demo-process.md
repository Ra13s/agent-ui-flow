# Demo process

The repo needs one complete, inspectable demo. Not just a README claim. The demo should show the
artifact trail from rough idea to reviewed implementation, so a reader can see why this workflow is
better than "ask AI to make a nice UI."

## Demo artifact chain

Each demo lives under:

```text
docs/demos/<demo-name>/
```

Required files:

```text
00-brief.md
01-storyboard-draft.md
02-storyboard-review.md
03-storyboard-revised.md
04-image-prompts.md
05-image-variants/
06-image-review.md
07-selected-direction.md
08-implementation-notes.md
09-built-screenshots/
10-built-review-round-1.md
11-built-review-round-2.md
12-final.md
```

## Stage 0 - Brief

The brief is intentionally short:

- product type
- target user
- flow goal
- constraints
- non-goals
- existing screen, if any

Example:

```text
Design a first-run tutorial for a photo coaching app. The user should take one ordinary photo, learn
three tools through action, and leave ready to shoot another photo. Avoid welcome pages, generic
account setup, and fake analytics.
```

## Stage 1 - Storyboard draft

Write the first pass honestly, including the mistakes AI normally makes. This is important for the
demo: the reader needs to see the review skill doing real work.

The draft should include:

- too much copy
- at least one dead confirmation beat
- at least one wrong-surface module
- one payoff that tells instead of shows

Do not make the draft intentionally stupid. Make it plausible.

## Stage 2 - Storyboard review

Run the text review panel from `.skills/storyboard/SKILL.md`.

The review file should show:

- findings grouped by reviewer scope
- the strongest overlaps
- accepted vs rejected findings
- what will change

Example format:

```text
Finding: B2 / "Tap the shutter button below..." / obvious text
Decision: accepted
Fix: delete; shutter click already advances
```

## Stage 3 - Revised storyboard

Rewrite the storyboard after review.

This file should be the implementation contract:

- exact visible copy
- exact beat sequence
- branch results
- no extra teaching copy

## Stage 4 - Image generation

Image generation is the exploratory jump.

Generate three variants:

1. conservative
2. polished production
3. wild but plausible

The prompt must include the revised storyboard and must forbid adding product sections that do not
exist in the storyboard.

Image generation can happen before implementation or after a first static build. If it uses a
built screenshot as the seed, say that explicitly in `04-image-prompts.md` and do not claim the
generated image influenced the first build.

## Stage 5 - Visual review: generated variants

Run `visual-review` on each image variant.

Then compare:

```text
variant / focus / clutter / information value / product fit / verdict
```

Do not pick the prettiest image. Pick the image whose ideas make the flow clearer.

## Stage 6 - Selected direction

Extract UI decisions from the winning image:

- layout
- component shapes
- hierarchy
- motion ideas
- rejected visual ideas

This becomes the implementation note.

## Stage 7 - Implementation

Implement the screen as closely as possible to:

1. the revised storyboard
2. the selected visual direction

If implementation needs to differ, write the difference in `08-implementation-notes.md`.

## Stage 8 - Visual review: built screenshots

Take screenshots of the built UI.

Run visual review against:

- the built screenshot
- the selected image variant
- the revised storyboard

Do at least two rounds:

- round 1: major focus/clutter/hierarchy fixes
- round 2: regression check and polish

## Stage 9 - Final writeup

The final file should answer:

- What changed from draft to final?
- Which reviewers caught the biggest issue?
- Which image-gen idea survived into code?
- What was rejected?
- What would be done next?

## Why this demo matters

The selling point is not "AI made a UI." The selling point is that the process creates a chain of
reviewable decisions:

```text
brief -> storyboard -> text review -> revised storyboard -> image variants -> visual review ->
implementation -> built-screenshot review -> final
```

That chain is the product.
