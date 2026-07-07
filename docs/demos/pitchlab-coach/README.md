# PitchLab Coach Demo

This is a full Agent UI Flow hillclimb.

It starts with a deliberately bad running UI, uses seeded GPT image generation for visual search,
implements the selected direction as a real page, runs another image round from the implementation
screenshot, then finishes with four manual review/fix/compare rounds.

## 1. Bad Seed Screen

The first screen is a real browser screenshot, not an image prompt.

![Bad initial PitchLab screen](01-initial/screenshot.png)

Problems: too many cards, repeated focus copy, competing CTAs, dashboard metrics before action, and
weak product identity.

## 2. Seeded Image Round 1

The first API batch produced contact sheets, which was useful but invalid as an implementation seed.
The flow caught that and reran the round as separate single-screen generations.

Selected Round 1 direction:

![Round 1 selected direction](02-image-round-1/variants/pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png)

Useful rejected alternatives:

![Round 1 path direction](02-image-round-1/variants/pitchlab-r1-path-2026-07-07T17-37-34-990Z-01.png)

![Round 1 sprint direction](02-image-round-1/variants/pitchlab-r1-sprint-2026-07-07T17-38-46-342Z-01.png)

## 3. Seeded Image Round 2

Round 2 used the selected Round 1 image as the actual image seed.

Selected direction:

![Round 2 selected voice-object direction](03-image-round-2/variants/pitchlab-r2-voice-2026-07-07T17-44-58-757Z-01.png)

Why it won: it kept the clean flow, added a clear public-speaking identity, and stayed implementable.

## 4. Faithful Implementation

The selected image became a real static page. The first implementation had icon and badge problems;
those were fixed before continuing.

![Implementation V1](04-implementation-v1/screenshot.png)

Fidelity verdict: pass, 14/16.

## 5. Image Round From Implementation

The running implementation screenshot became the next seed.

Selected improvement signal:

![Implementation-seeded less-clutter variant](05-image-round-3-from-implementation/variants/pitchlab-r3-less-clutter-2026-07-07T18-17-05-190Z-01.png)

Main lesson: keep the current structure, remove leftover decoration, and make the frame quieter.

## 6. Four Manual Rounds

Round 1 removed the redundant focus strip.

![Manual round 1 after](06-implementation-round-1/screenshot-after.png)

Round 2 shortened privacy copy and softened the panel.

![Manual round 2 after](07-implementation-round-2/screenshot-after.png)

Round 3 tightened spacing and typography.

![Manual round 3 after](08-implementation-round-3/screenshot-after.png)

Round 4 polished CTA/card affordances.

![Manual round 4 after](09-implementation-round-4/screenshot-after.png)

## 7. Final

![Final PitchLab screen](10-final/final-screenshot.png)

The final screen is still a static demo, but the process is real:

- real initial screenshot
- real seeded image API calls
- logged reviews and decisions
- real implementation screenshot
- implementation-seeded image generation
- four review/fix/compare rounds

Audit trail:

- [run log](run-log.md)
- [image ledger](image-ledger.md)
- [initial vs final](10-final/initial-vs-final.md)
