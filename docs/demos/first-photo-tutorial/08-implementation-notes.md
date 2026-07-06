# Implementation Notes

Stage: implementation notes.
Consumed: `03-storyboard-revised.md`.

Status: static demo built in `build/`.

## Contract

Implement `03-storyboard-revised.md` first.

## Allowed deviations

- Camera is simulated with CSS objects. No real camera permission is requested.
- Shutter buttons exist as the action affordance even though storyboard copy does not name them.
- `?beat=1..5` can force a beat for deterministic screenshots.
- B4 uses a static visible tick in screenshots; the live page animates it lightly.

## Do not add

- welcome panels
- progress stats
- second CTA on payoff
- explanatory body paragraphs

## Test

Open:

```text
docs/demos/first-photo-tutorial/build/index.html
```

Click the shutter to advance through B1-B4. The final CTA loops back to B1.
