---
name: implementation-fidelity
description: Review whether an implemented web UI is visually faithful to a selected generated mockup or reference screenshot. Use when Codex claims pixel-perfect, 90-95% faithful, near-exact, or implementation-from-image work; when comparing selected concept vs running implementation; or before publishing a demo that says an image became code.
---

# Implementation Fidelity

Use this as a hard gate between "selected image" and "implemented UI".

The goal is not to judge whether the implementation is pretty. The goal is to decide whether it actually matches the selected direction closely enough to support the claim being made.

## Inputs

- selected concept image
- running implementation screenshot
- page purpose
- allowed deviations, if any

## Review Axes

Score each axis from `0` to `2`.

- Layout geometry: same major regions, alignment, column widths, and vertical rhythm.
- Color fidelity: same dominant palette and accent semantics. A completely different color direction is a failure unless explicitly chosen.
- Component shape: same card/input/button proportions, corner radius, border weight, shadows, and density.
- Typography scale: same hierarchy and body text size relationships.
- Content structure: same visible modules and no invented extras.
- CTA placement: same primary action position and visual weight.
- Spacing: same whitespace strategy, not just roughly similar content.
- Interaction affordance: hover/action controls are present only where expected.

## Verdict

- `pass`: total score >= 14 and no critical mismatch.
- `near`: total score 10-13 with concrete fixes.
- `fail`: total score < 10, or any critical mismatch.

Critical mismatches:

- different core layout
- different color system when color is part of the selected direction
- missing selected hero/module/composer/card structure
- extra modules that change the page job
- typography scale so different that the page reads as another product

## Output

```text
verdict: pass | near | fail
score: N/16

critical mismatches:
- ...

axis scores:
- layout geometry: ...
- color fidelity: ...
- component shape: ...
- typography scale: ...
- content structure: ...
- CTA placement: ...
- spacing: ...
- interaction affordance: ...

required fixes before publishing:
- ...
```

## Rule

If the verdict is `fail`, the demo cannot say "pixel-perfect", "90-95%", "faithful implementation", or "image-to-code" for that stage.

