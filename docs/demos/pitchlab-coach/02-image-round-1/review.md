# Round 1 Review

## First API Batch

Generated files:

- `variants/pitchlab-r1-2026-07-07T17-31-08-518Z-01.png`
- `variants/pitchlab-r1-2026-07-07T17-31-08-518Z-02.png`
- `variants/pitchlab-r1-2026-07-07T17-31-08-518Z-03.png`

Verdict: mixed, not directly usable.

The batch proved the seeded API path works, but each image is a contact sheet with multiple
directions in one PNG. That violates the implementation flow because the next stage needs one
selected screen image as a seed, not a board of alternatives.

Useful ideas harvested:

- Focus Card: one dominant daily practice card with a single start action.
- Path Progress: step sequence can work if it is not noisy.
- Sprint Flow: timer can become a strong visual object, but it risks feeling too dark and modal.

Rejected for direct implementation:

- all contact-sheet outputs, because they are not single screen designs.

Action: rerun Round 1 with the prompt amended to require one complete desktop screen per PNG.

## Second API Batch

Generated files:

- `variants/pitchlab-r1-screen-2026-07-07T17-33-39-992Z-01.png`
- `variants/pitchlab-r1-screen-2026-07-07T17-33-39-992Z-02.png`
- `variants/pitchlab-r1-screen-2026-07-07T17-33-39-992Z-03.png`

Verdict: still not directly usable.

The prompt explicitly asked for one screen per PNG, but the model still produced multi-screen
concept boards. These are useful for direction discovery, but not valid as implementation seeds.

Action: run three separate `n=1` seeded calls with one direction per prompt.

## Third API Batch - Single Screen Variants

Generated files:

- `variants/pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png`
- `variants/pitchlab-r1-path-2026-07-07T17-37-34-990Z-01.png`
- `variants/pitchlab-r1-sprint-2026-07-07T17-38-46-342Z-01.png`

### Focused card

High / visual focus / one main workout card and one CTA / this is the strongest correction from the
bad seed / keep this direction for Round 2.

Medium / typography / the H1 is still oversized / it is cleaner than the seed but could become less
shouty / reduce headline scale in Round 2.

Medium / clutter / the three step cards are understandable but slightly generic / make the sequence
feel more like practice flow and less like SaaS onboarding.

### Guided path

High / clutter / the right-side metrics panel brings the old dashboard problem back / it repeats
confidence and filler-word content / reject as implementation direction.

Medium / information value / "Why today" and "What's next" still foreshadow later content / reject
those blocks.

### Speaking sprint

High / product fit / the central microphone/timer gives strong identity / useful visual idea.

Medium / focus / the page may over-index on the timer and feel like a recording app / use only the
microphone-focus idea if Round 2 can keep the learning path visible.

## Selection

Winner: `variants/pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png`

Why: best balance of hierarchy, simplicity, and implementability. It clearly shows one daily workout,
one CTA, and one supporting three-step flow without bringing back dashboard clutter.
