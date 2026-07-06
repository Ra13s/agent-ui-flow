# Worked example: "First Photo" tutorial

A photo-coaching app teaches three tools (light, angle, timing) through one guided shot. This file
shows the full storyboard loop: the first draft, the panel findings, and the revised version. The
draft's diseases are real ones — they are what first drafts actually look like.

## User

First-time user, opened the app after installing it, phone in hand, willing to take one photo.

---

## Part 1 — Draft (before review)

The draft below intentionally includes bloated tutorial copy so the review findings have real
material to remove.

### B1 - Welcome

SCREEN: Logo, welcome headline, a paragraph about the app, a Get Started button. A small stats
widget shows "0 photos improved".
COPY:
  - title: "Welcome to Lumen!"
  - body: "Lumen is your personal photo coach. In this quick tutorial, we'll walk you through the three essential tools every great photo uses: light, angle, and timing. Ready to become a better photographer?"
  - stats: "0 photos improved"
  - button: "Get Started"
ACTION: User taps Get Started.
RESULT: Go to B2.
BUDGET: 46 / 40

### B2 - Cold Shot

SCREEN: Camera view. Prompt overlay on top.
COPY:
  - prompt: "First, take a photo of anything near you. Don't worry about making it good — this is just to see where you're starting from. Tap the shutter button below to take your photo."
  - button: "I took it"
ACTION: User takes a photo.
RESULT: Go to B3.
BUDGET: 36 / 40

### B3 - Light

SCREEN: The user's photo, with a brightness overlay. A tip card explains light.
COPY:
  - title: "Tool 1: Light"
  - body: "Light is the most important tool in photography. Great photographers always check where the light comes from before shooting. Side light creates depth, backlight creates silhouettes."
  - prompt: "Turn so your light comes from the side, then reshoot."
  - button: "Reshoot"
ACTION: User reshoots.
RESULT: Go to B4.
BUDGET: 43 / 40

### B4 - Angle

SCREEN: Both photos side by side. A tip card explains angles.
COPY:
  - title: "Tool 2: Angle"
  - body: "Great job! Now let's talk about angle. Most people shoot from eye level, which is boring."
  - prompt: "Crouch or raise your phone. Shoot the same thing from a new height."
  - button: "Reshoot"
ACTION: User reshoots.
RESULT: Go to B5.
BUDGET: 33 / 40

### B5 - Done

SCREEN: Final photo large. Confirmation text. Two buttons.
COPY:
  - title: "Tutorial complete!"
  - body: "Great job! You've learned about light and angle. Keep practicing to become a better photographer."
  - button: "Continue"
  - button: "View my photos"
ACTION: User taps Continue.
RESULT: Home screen.
BUDGET: 22 / 40

---

## Part 2 — Panel findings

```text
B1 / entire beat / no-value text / "Welcome to Lumen!" and the paragraph delay the camera; nothing
the user does next changes because of them / cut the beat, open in the camera

B1 / "we'll walk you through the three essential tools..." / overexplanation / announces the
curriculum the user is about to experience beat by beat / delete; let B3-B5 introduce each tool at
the moment of use

B1 / stats: "0 photos improved" / belonging / a progress module on a tutorial screen, and a zero
stat on first open reads as an insult / stats live on the profile; remove

B2 / "Tap the shutter button below to take your photo." / obvious text / the shutter button is the
only affordance on a camera screen / delete the sentence

B2 / button: "I took it" / flow logic / dead confirmation — the shutter already fired; this click
does no work / advance on shutter, remove the button

B3 / body paragraph / overexplanation / two facts about light before the user may act; the reshoot
instruction already carries the usable half / keep the prompt, cut the body to one clause at most

B4 + B5 / "Great job!" twice / repetition + voice / same form-letter praise in consecutive beats /
praise once, at the end, naming what they actually did

B5 / "You've learned about light and angle." / flow logic / timing was promised (B1 draft) and never
taught; the payoff also tells instead of shows / show the cold shot next to the final shot — the
before/after IS the payoff

B5 / two buttons / flow logic / a tutorial payoff with two CTAs splits the next step / one CTA
```

Overlaps that decided the fixes: B1 died because three scopes hit it (no-value + overexplanation +
belonging). B2's confirmation died to flow logic + obvious text. The B5 rewrite came from flow logic
+ voice pointing at the same weakness: the ending tells instead of shows.

---

## Part 3 — Revised (after one loop)

### B1 - Cold Shot

SCREEN: Camera view, live. One prompt line overlaid. No other UI.
COPY:
  - prompt: "Take a photo of anything near you. First try, no pressure."
ACTION: User takes a photo. Shutter advances automatically.
RESULT: Go to B2.
BUDGET: 11 / 40

### B2 - Light

SCREEN: The user's photo with a light-direction arrow overlaid. One prompt line.
COPY:
  - prompt: "Turn so the light hits your subject from the side, then reshoot."
MOTION:
  - light arrow sweeps from flat to side as the user turns
ACTION: User reshoots. Shutter advances.
RESULT: Go to B3.
BUDGET: 12 / 40

### B3 - Angle

SCREEN: Live camera again. One prompt line.
COPY:
  - prompt: "Now change your height. Crouch low or go high — same subject."
ACTION: User reshoots. Shutter advances.
RESULT: Go to B4.
BUDGET: 12 / 40

### B4 - Timing

SCREEN: Live camera. One prompt line. A subtle 3-2-1 tick appears when the scene has motion.
COPY:
  - prompt: "One more. Wait for the moment — a gap, a gesture, a pause — then shoot."
ACTION: User reshoots. Shutter advances.
RESULT: Go to B5.
BUDGET: 15 / 40

### B5 - Payoff

SCREEN: Cold shot and final shot side by side, full width. One title, one CTA.
COPY:
  - title: "Same phone. Four shots. Light, angle, timing."
  - button: "Shoot your next one"
ACTION: User taps the CTA.
RESULT: Home camera. Tutorial completion saved.
BUDGET: 8 / 40

---

## What the loop bought

- Roughly two-thirds of the visible copy disappeared. Five beats stayed five beats, but every one now starts with the camera.
- Zero teaching panels; each tool is one instruction at its moment of use.
- The payoff shows the before/after instead of claiming improvement.
- Total review cost: one panel pass, nine findings, one revision.
