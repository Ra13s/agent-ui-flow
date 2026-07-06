# TODO: real demo traces

Goal: a reader lands on this repo and can inspect a complete, honest artifact trail:

```text
rough idea -> reviewed storyboard -> image variants -> visual reviews -> implementation ->
screenshot review
```

No stub placeholders in a published demo. No extra "demo skill"; the demo is just files produced by
the existing skills.

Read first:

- `docs/demo-process.md` - authoritative artifact chain.
- `.skills/storyboard/SKILL.md` - text-first flow contract and review panel.
- `.skills/image-variants/SKILL.md` - image exploration and comparison.
- `.skills/visual-review/SKILL.md` - screenshot/mockup critique.
- `.skills/implement-flow/SKILL.md` - implementation handoff rules.
- `docs/examples/first-photo-tutorial.md` - worked draft -> review -> revision example.

## WP1 - second demo: `docs/demos/reference-search/`

Shows the image-variant workflow on an existing public page, without product implementation.

1. Use a public page screenshot as seed.
2. Run three image variants.
3. Review variants with `visual-review`.
4. Extract useful layout ideas.
5. Stop before implementation and state why: useful visual ideas must be harvested into a
   storyboard before code.

This demo can use a reduced chain, but its `00-brief.md` must say which stages are intentionally
omitted.

## Guards

- **Image generation must be real.** If no API key is available, stop and say the image stage is
  blocked.
- **No private data.** Do not include customer screenshots, API keys, or product secrets.
- **Repo size discipline.** Compress screenshots and generated assets. Prefer under 15 MB total for
  demo media.
- **Product agnostic.** Before publishing, scan for accidental private/product terms.
- **Every artifact states its input.** The first line should say what stage it is and what it
  consumed.
- **Keep TODO current.** Delete completed sections as work lands.

## First publishable milestone

A stranger can inspect `first-photo-tutorial` as a complete chain:

- storyboard draft
- storyboard review
- revised storyboard
- static implementation
- built screenshots
- real image variants
- visual reviews
- final writeup

That milestone is complete on disk.

## Remaining work

Add `reference-search`: an image-variant search on an existing public page, stopping before
implementation.
