# Run Log

## 2026-07-07

### 01 - Initial screenshot

- Created a deliberately cluttered static UI for a fictional public-speaking app.
- Captured `01-initial/screenshot.png`.
- Reviewed the screenshot in `01-initial/review.md`.

Decision: proceed to image generation round 1. The page is plausibly bad enough to demonstrate the
workflow.

### 02 - Image generation round 1

- Stored prompt in `02-image-round-1/prompt.md`.
- Generated three image variants:
  - `02-image-round-1/variants/variant-a.png`
  - `02-image-round-1/variants/variant-b.png`
  - `02-image-round-1/variants/variant-c.png`
- Reviewed variants in `02-image-round-1/review.md`.
- Selected Variant A as base direction in `02-image-round-1/decision.md`.

Decision: run a second image round using Variant A as the base and one central-task idea from
Variant C.

### 03 - Image generation round 2

- Stored prompt in `03-image-round-2/prompt.md`.
- Generated three refinement variants:
  - `03-image-round-2/variants/variant-a.png`
  - `03-image-round-2/variants/variant-b.png`
  - `03-image-round-2/variants/variant-c.png`
- Reviewed variants in `03-image-round-2/review.md`.
- Compared against the Round 1 winner in `03-image-round-2/comparison.md`.
- Selected a hybrid implementation direction in `03-image-round-2/decision.md`.

Decision: implement a real static UI from the selected direction, removing generated future-feedback
copy.

### 04 - Implementation v1

- Stored implementation instruction in `04-implementation-v1/instruction.md`.
- Captured the running UI in `04-implementation-v1/screenshot.png`.
- Reviewed it in `04-implementation-v1/review.md`.

Decision: use the implementation screenshot as the seed for image generation round 3.

### 05 - Image generation round 3 from implementation

- Copied `04-implementation-v1/screenshot.png` to
  `05-image-round-3-from-implementation/source-screenshot.png`.
- Stored prompt in `05-image-round-3-from-implementation/prompt.md`.
- Generated three variants:
  - `05-image-round-3-from-implementation/variants/variant-a.png`
  - `05-image-round-3-from-implementation/variants/variant-b.png`
  - `05-image-round-3-from-implementation/variants/variant-c.png`
- Reviewed them in `05-image-round-3-from-implementation/review.md`.
- Selected Variant A in `05-image-round-3-from-implementation/decision.md`.

Decision: use Variant A's compact task card and skill strip as the manual implementation target.

### 06 - Manual implementation round 1

- Reviewed `06-implementation-round-1/screenshot-before.png`.
- Applied scale and color changes.
- Captured `06-implementation-round-1/screenshot-after.png`.
- Compared before/after in `06-implementation-round-1/comparison.md`.

Decision: improved, but lower-card clutter remained.

### 07 - Manual implementation round 2

- Reviewed `07-implementation-round-2/screenshot-before.png`.
- Tightened page width, hero size, and card padding.
- Captured `07-implementation-round-2/screenshot-after.png`.
- Compared before/after in `07-implementation-round-2/comparison.md`.

Decision: improved, but rationale card remained.

### 08 - Manual implementation round 3

- Reviewed `08-implementation-round-3/screenshot-before.png`.
- Reduced CTA and hero scale.
- Captured `08-implementation-round-3/screenshot-after.png`.
- Compared before/after in `08-implementation-round-3/comparison.md`.

Decision: improved, but page still had two lower modules.

### 09 - Manual implementation round 4

- Reviewed `09-implementation-round-4/screenshot-before.png`.
- Removed the explanatory lower card.
- Captured `09-implementation-round-4/screenshot-after.png`.
- Copied final state to `10-final/final-screenshot.png`.

Decision: final screenshot is good enough for the demo.
