# Image Prompts

Stage: image prompts.
Consumed: `03-storyboard-revised.md` and `09-built-screenshots/b5.png`.

Status: generated three real variants from the B5 screenshot.

Note: this demo uses a post-build image search. The static tutorial was implemented first from the
reviewed storyboard, then B5 was used as a seed to explore whether the payoff screen could become
clearer. The variants are reviewed as visual suggestions, not as the source of the initial build.

## Shared constraints

- Desktop or mobile app concept for a photo-coaching tutorial.
- Use the revised storyboard only.
- Do not add account setup, fake progress, social sharing, or analytics.
- One instruction per screen.
- Show camera-first learning.
- Clean, focused, low clutter.

## Variant 1 - Conservative

```text
Design a high-fidelity mobile UI concept for a photo-coaching app tutorial. Show a five-step flow:
cold shot, light, angle, timing, payoff. The UI starts in the camera. Each teaching step has one
short instruction only. The payoff compares cold shot and final shot side by side. Use a restrained
premium app style, near-white surfaces, soft black text, one accent color, no dashboard cards, no
fake stats, no social sharing.
```

## Variant 2 - Polished production

```text
Design a polished production UI concept for a first-run photo tutorial. The flow teaches light,
angle, and timing by making the user reshoot the same subject. Use subtle overlays: a light arrow,
a height cue, and a timing tick. Keep the screen camera-first. The final screen is a strong
before/after comparison with one CTA: Shoot your next one. Avoid welcome pages, analytics, and
generic AI assistant panels.
```

## Variant 3 - Wild but plausible

```text
Design a more expressive but still usable UI concept for a camera-first photo coaching tutorial.
Use cinematic step transitions and minimal overlays. The app should feel like a tiny director
guiding the shot without text-heavy teaching. The final payoff should feel satisfying and visual:
same subject, improved shot, three learned tools. Keep it clean; no gamified clutter, no badges, no
fake charts.
```

## Output files

```text
05-image-variants/iter-01-a-conservative.png
05-image-variants/iter-01-b-polished-production.png
05-image-variants/iter-01-c-wild-plausible.png
```
