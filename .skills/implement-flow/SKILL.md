---
name: implement-flow
description: Implement a reviewed storyboard into a frontend while preserving the reviewed flow and copy.
---

# Implement flow skill

Use only after a storyboard has survived review.

## Inputs

- Reviewed storyboard.
- Existing app/component conventions.
- Design tokens or theme notes.

## Rules

- Treat storyboard `COPY` as a contract.
- Do not add helper text during implementation.
- Do not add new states unless the storyboard is updated first.
- Keep success moving. Avoid new confirmation screens.
- Preserve one job per screen.
- After implementation, take screenshots and run `visual-review`.

## Output

- Changed files.
- Route or URL to test.
- Verification commands.
- Known deviations from storyboard, if any.

## Checklist

- [ ] All storyboard beats are represented.
- [ ] All visible copy matches or has a documented reason to differ.
- [ ] Fail paths are reachable.
- [ ] Primary CTA is unambiguous.
- [ ] No unrelated page modules were introduced.
- [ ] Screenshot review completed.
