# Contributing

This repo is a workflow repo, not an app template. Contributions should make the workflow easier to
run, inspect, or trust.

## Add a skill

- Put source skills under `.skills/<name>/SKILL.md`.
- Include what the skill consumes, what it produces, and what it must not do.
- Keep review skills read-only. They can recommend changes, but they should not silently edit.
- Re-run `setup.cmd` or `setup.sh` locally if you want `.claude/skills` or `.agents/skills`
  registrations.

## Add a demo

- Put full traces under `docs/demos/<demo-name>/`.
- Follow `docs/demo-process.md`, or explain which stages are intentionally omitted in
  `00-brief.md`.
- Use real screenshots and real generated images if the demo claims to include them.
- Every artifact should name what it consumed.

## Add generated media

- Keep private product screenshots and customer data out of the repo.
- Keep generated images and screenshots small enough to review in GitHub.
- Demo-owned media should live inside the demo folder. Ad hoc visual searches can use `docs/img/`.

## Before a PR

- Run the relevant review skill on the changed artifact.
- If a demo changed, verify the demo-specific capture/generation scripts listed in that demo's
  `run-log.md`.
- If image variants changed, record the prompt, outputs, review, decision, and image-ledger entry in
  the demo folder.
