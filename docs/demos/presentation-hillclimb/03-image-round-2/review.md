# Image Round 2 Review

Stage: generated-variant review.
Consumed: `03-image-round-2/variants/variant-a.png`, `variant-b.png`, `variant-c.png`.

| Variant | Focus | Clutter | Information value | Comparison vs Round 1 winner | Verdict |
| --- | --- | --- | --- | --- | --- |
| A | Strong centered task | Low-medium | Adds useful task details, but also "feedback after recording" | Better hierarchy than R1 A; slightly more clutter | Use partly |
| B | Most product-like recording module | Medium | Recording affordance is clearer; extra footer coaching copy is not | Less poster-like; more functional | Selected implementation base |
| C | Cleanest hero rhythm | Low | Welcome text and feedback unlock copy are wasteful | Visually cleaner, but less task-direct | Use partly |

## Findings

- High / all variants / future-feedback copy keeps returning / this was explicitly rejected because
  the user has not recorded anything yet / implementation must remove it.
- Medium / B / the task feels like a product recording module rather than a marketing hero / use
  this as the implementation base.
- Medium / C / the hero card has a calm, focused composition / harvest the large single task panel
  and soft visual rhythm.
- Low / A / "Today's task unlocked" is clear but slightly gamey / do not carry the literal label
  forward.

## Selected Direction

Implement a hybrid:

- B's product-like recording module
- C's calm single-task visual rhythm
- A's compact skill snapshot

Reject:

- feedback/recap preview text
- "About skills" and progress links
- locked/unlocked labels
