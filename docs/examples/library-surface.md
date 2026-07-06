# Worked example: "Library" surface

The photo-coaching app's library page, storyboarded as a surface contract. Shows how the module
registry turns belonging from opinion into rule. Companion to
[first-photo-tutorial.md](first-photo-tutorial.md), which shows the flow type.

## Registry excerpt (`env/lumen/pages.yaml`)

```yaml
modules:
  camera:          { home: capture,  brief: "live camera with prompt overlay" }
  photo_grid:      { home: library,  brief: "all shots, newest first" }
  before_after:    { home: library,  brief: "cold shot vs latest per subject" }
  streak:          { home: profile,  brief: "practice days" }
  skill_meters:    { home: profile,  brief: "light / angle / timing levels" }
  daily_challenge: { home: capture,  brief: "today's one-shot assignment" }
```

---

## Part 1 — Draft (before review)

## Surface: Library

JOB: Let the user browse their shots and feel their improvement.
ARRIVES FROM: nav, post-shot save toast
MODULES:
  - photo_grid (HOME) — copy: date headers only
  - before_after (HOME) — copy: "Then / Now"
  - daily_challenge (EMBED) — copy: "Today's challenge: shoot a shadow! Don't break your streak!"
  - streak (EMBED) — copy: "4-day streak"
  - tips_panel (new) — copy: "Tip: revisit old photos to see how far you've come. Great photographers review their work regularly!"
PRIMARY ACTION: open a photo
EXITS: photo -> detail view; challenge -> capture
NOT HERE: (empty)
BUDGET: grid 6, before/after 4, challenge 14, streak 3, tips 21

---

## Part 2 — Panel findings

```text
Library / JOB line / navigation logic / "browse AND feel improvement" is two jobs; the page cannot
have one focal object / keep browse as the job; before_after IS how improvement is felt — no
separate mandate needed

Library / daily_challenge (EMBED) / belonging / registry homes it on capture; embedding it here
makes two surfaces compete to start today's shot / replace with LINK -> capture, one line

Library / streak (EMBED) / belonging / registry homes it on profile; a streak counter on a browsing
page nags instead of informs / remove; profile link already in nav

Library / tips_panel / no-value text + overexplanation / unregistered module invented during
drafting; both sentences are motivation filler that change no action / delete the module

Library / "Don't break your streak!" / voice / guilt-pressure register, off-product / dies with the
embed
```

Three of five findings came from the registry check alone — no judgment required.

---

## Part 3 — Revised (after one loop)

## Surface: Library

JOB: Let the user browse their shots.
ARRIVES FROM: nav, post-shot save toast
MODULES:
  - photo_grid (HOME) — copy: date headers only
  - before_after (HOME) — copy: "Then / Now"
  - daily_challenge (LINK -> capture) — copy: "Today's challenge →"
PRIMARY ACTION: open a photo
EXITS: photo -> detail view; challenge link -> capture; nav -> profile for streak and meters
NOT HERE: streak, skill_meters, tips of any kind, daily_challenge module (link only)
BUDGET: grid 6, before/after 4, challenge link 3

---

## What the loop bought

- One job instead of two; the grid is unambiguously the page.
- 48 visible words → 13.
- The `NOT HERE` line now guards the page: streak and tips can't quietly return in an
  implementation pass, because exclusion is recorded as contract, not memory.
