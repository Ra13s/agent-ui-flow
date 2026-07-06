# Image Review

Stage: image review.
Consumed: `05-image-variants/iter-01-*.png`.

## Review table

| Variant | Focus | Clutter | Information value | Product fit | Verdict |
| --- | --- | --- | --- | --- | --- |
| A conservative | Good comparison focus | Low | Text corrupted; visual hierarchy useful | Good calm coaching feel | Mixed |
| B production | Photo pair dominates | Medium | Text badly corrupted; CTA still obvious as shape | Too generic camera-promo | Mixed |
| C wild | Strong visual emotion | Medium | Text unusable; style adds drama not learning | Too poster-like | One useful idea |

## Findings

- High / generated text / all variants damage visible copy / the storyboard copy is the contract /
  never copy generated text into implementation.
- Medium / comparison area / variants make the photo pair feel more important than the original
  build / the payoff is supposed to show improvement, not just say it / keep comparison as the
  first-glance object.
- Medium / tone / the wild variant adds energy but shifts the app from quiet coaching to dramatic
  poster / use richer contrast only if the tutorial still feels calm and actionable.
- Low / labels / generated before-after labels are visually useful but unreliable / if labels are
  needed, add them to the storyboard first; do not sneak them in during implementation.

## Decision

Harvest layout direction, not pixels. The image pass proved that the comparison should be the hero,
but none of the variants is implementation-safe because all damage exact copy.
