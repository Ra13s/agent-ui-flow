@AGENTS.md

## Claude Code specific

- The workflows live in `.skills/<name>/SKILL.md`. When the user names a skill ("storyboard this
  flow", "visual-review this screenshot"), read that skill file first and follow it exactly.
- Review skills (`storyboard` panel, `visual-review`) are read-only: report findings, do not edit
  code or images during the review.
- When a review panel defines separate scopes, run them as separate subagents when available;
  otherwise run them sequentially in isolation and say so.
