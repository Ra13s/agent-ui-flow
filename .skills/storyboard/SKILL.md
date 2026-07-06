---
name: storyboard
description: Write and review a Markdown UI storyboard before implementation. Two types: flow storyboards (sequential beats) for tutorials/onboarding/checkout, and surface storyboards (page contracts) for main pages. Use before writing any UI code.
---

# Storyboard skill

Use this before implementation. Text is the cheapest place to find and fix UX problems: everything
gets storyboarded and reviewed before pixels — flows AND main pages.

## Two storyboard types

- **Flow storyboard** — a sequence the user moves through (tutorial, onboarding, checkout). Unit:
  the beat. Order matters; each beat has one action.
- **Surface storyboard** — a place the user returns to (home, progress, library, settings). Unit:
  the module. There is no sequence; there is a job, modules, and exits.

A product is storyboarded when its main surfaces and its core flows both have reviewed files.

## Input

- Product context from `env/<project>/overview.md`.
- The module registry from `env/<project>/pages.yaml` (surface storyboards require it).
- Optional existing screen screenshots or page notes.
- The flow goal, or the surface's job.
- The target user.

## Flow format

One beat per screen/state:

```markdown
## B1 - <beat name>
SCREEN: <what is visible, focal object first>
COPY:
  - title: "..."
  - prompt: "..."
  - button: "..."
ACTION: <one user action>
RESULT: <what changes next>
BUDGET: <visible words> / <limit>
```

## Surface format

One file (or section) per page:

```markdown
## Surface: <page name>
JOB: <one sentence: this page helps <user> do <one thing>. If it has "and", split or prioritize.>
ARRIVES FROM: <entry points>
MODULES:
  - <module> (HOME) — copy: <the strings, verbatim or by named group>
  - <module> (LINK -> <home surface>) — <the one-line teaser + where it leads>
PRIMARY ACTION: <the one thing most users should do here>
EXITS: <where each module/action leads>
NOT HERE: <deliberate exclusions — modules this page must never grow>
BUDGET: <visible words per module>
```

## The module registry

`env/<project>/pages.yaml` assigns every module exactly ONE home surface. Rules:

- A module renders fully only on its HOME surface.
- Every other appearance is a LINK: one line plus navigation, never the module itself.
- A surface storyboard that embeds a module homed elsewhere is a violation, not a style choice.
- `NOT HERE` records deliberate exclusions so removed modules stay removed. Reviewers and
  implementers treat it as binding; changing it is a storyboard edit, reviewed like any other.

## Rules

- Every visible string must be listed verbatim.
- One beat has one job; one surface has one job.
- One beat has one action unless it is a real choice.
- Do not add a teaching panel if the next action can teach the same thing.
- Default word budget: 40 visible words per beat; 15 for a small drill beat; 60 for scene setup.
  Surfaces:
  budget per module, and the whole page must be scannable in one glance-pass.
- Success should usually unlock the next action immediately. Avoid dead `Next` clicks.

## Review panel

Run these scopes separately and aggregate overlapping findings:

1. Overexplanation: teaching before doing.
2. No-value text: filler, welcome mats, generic praise.
3. Obvious text: copy that repeats what the UI already shows.
4. Repetition and rhythm: repeated labels, repeated sentence shapes, budget overruns.
5. Flow logic: dead ends, click-through confirmations, choices without consequence.
   On surfaces this is navigation logic: orphan pages, exits that lead nowhere, two-job pages.
6. Voice: AI-ish wording, form-letter praise, register drift.
7. Belonging and scope: modules from the wrong surface. On surfaces, this scope reads the module
   registry and enforces it mechanically: embedded module + foreign HOME = finding, every time.

Finding format:

```text
beat-or-surface / quoted text or module / disease / why it hurts the next action / concrete fix
```

## Done means

- The storyboard is reviewed.
- Surface storyboards agree with `pages.yaml` (or the registry was updated deliberately).
- Accepted risks are named.
- The implementer knows the one thing they must not "improve" during build.
