# agent-ui-flow

An AI-assisted UI design workflow for product screens.

This repo is intentionally small: no app framework, server, vector database, or agent runtime. The
agent is the AI coding CLI you already use, pointed at this folder.

The useful part is the workflow: storyboard first, generate visual alternatives when useful, review
with focused validators, then implement only after the flow survives critique.

The shape is inspired by file-first agent repos such as `agent-00devops`: skills are Markdown,
environment knowledge is YAML/Markdown, and the artifact trail lives in ordinary files. Git history
can preserve the decision sequence once the repo is committed.

## What this is for

- Designing frontend flows before implementation.
- Catching UX copy bloat early.
- Using image generation as exploration, not as authority.
- Reviewing screens with repeatable visual agents.
- Keeping implementation faithful to a reviewed storyboard.

## Vocabulary

- **Flow**: a user journey with ordered steps.
- **Beat**: one screen or state inside a flow.
- **Surface**: a page the user returns to, such as home, progress, or settings.
- **Module**: a unit on a surface, such as a daily task, progress chart, or saved item.
- **Home surface**: the one place where a module renders fully.
- **Visual review**: critique of a generated image or built screenshot. Use qualifiers when needed:
  generated-variant review, built-screenshot review, before-after review.

## The core loop

1. **Storyboard**
   Write the UI as Markdown before code. Flows use beats: visible objects, exact copy, one action,
   result, and word budget. Main pages use surface contracts: one job, modules with a single
   registered home, exits, and a `NOT HERE` exclusion list.

2. **Text review**
   Attack the storyboard before pixels exist. Remove overexplaining, no-value text, repeated
   instructions, dead click-through beats, and modules squatting on the wrong page.

3. **Visual search**
   Run image generation as an iterative gradient search. Seed it with a real screenshot, a reference
   screen, or a reviewed storyboard. Generate 3+ variants, review them, and feed the winner back as
   the next seed. Iterations are numbered and logged. Winners are harvested into the storyboard as
   text before implementation — pixels propose, text decides.

4. **Visual review**
   Review screenshots or generated variants with separate validators: focus, clutter, contrast,
   repetition, information value, and regression against the previous image.

5. **Implementation**
   Implement the reviewed storyboard as a contract. Do not add helper copy or extra panels during
   build.

6. **Screenshot review**
   Run visual review on the built page. Compare it against the storyboard and the previous
   screenshot. Fix regressions.

7. **Demo trace**
   For public examples, keep the whole artifact trail as docs: draft, reviews, revised storyboard,
   image prompts, image reviews, implementation notes, screenshots, and final review.

## Quick start

Open this folder in your AI CLI (Codex reads `AGENTS.md`, Claude Code reads `CLAUDE.md`, Gemini
reads `GEMINI.md`) and ask:

```text
Use the onboard skill: set up env/ for my product.
```

Then storyboard your first flow:

```text
Use the storyboard skill on our signup flow.
```

Or for an existing screen:

```text
Use the visual-review skill on this screenshot and tell me the top 5 UX issues.
```

To see what the loop produces before trying it, read the two worked examples — each a full draft →
findings → revision pass: [docs/examples/first-photo-tutorial.md](docs/examples/first-photo-tutorial.md)
(a flow) and [docs/examples/library-surface.md](docs/examples/library-surface.md) (a main page,
showing the module registry catching scope creep).

For the publishable end-to-end trace format, see
[docs/demo-process.md](docs/demo-process.md) and `docs/demos/`.

## Reproduce the first demo

Install once:

```sh
npm install
npx playwright install chromium
```

Capture the static tutorial screenshots:

```sh
npm run capture:first-photo
```

Generate image variants from the B5 screenshot:

```sh
OPENAI_API_KEY=... npm run generate:first-photo-variants
```

On Windows `cmd.exe`:

```cmd
set OPENAI_API_KEY=...
npm run generate:first-photo-variants
```

## Repository layout

```text
.skills/
  storyboard/       Text-first design: flows as beats, main pages as surface contracts.
  visual-review/    Generated-variant and built-screenshot critique.
  image-variants/   Prompting and selecting generated UI variants.
  implement-flow/   Implementation handoff rules.
  onboard/          Fill in environment knowledge.
docs/
  flow.md           The end-to-end method.
  demo-process.md   The artifact chain for public demos.
  examples/         Example storyboard and review artifacts.
  demos/            Full process traces.
  img/              Optional screenshots and generated mockups.
env/
  template/         Product knowledge template.
```

See [CONTRIBUTING.md](CONTRIBUTING.md) before adding a new skill, demo, or generated asset.

## Design rules baked into the workflow

- One screen, one job.
- Every sentence must change what the user does next.
- Visual focus must be testable at first glance.
- Color must carry information, not decoration.
- Do not duplicate information across surfaces.
- If a UI element looks important, it must do important work.
- Quiet is not enough; the page still needs a clear focal object.

## License

MIT. See `LICENSE`.
