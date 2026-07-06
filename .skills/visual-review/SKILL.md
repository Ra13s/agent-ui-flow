---
name: visual-review
description: Review a screenshot, mockup, or generated UI image with focused UX validators. Use for critique only; do not edit implementation during this skill.
---

# Visual review skill

Use this on a screenshot or generated UI image.

## Input

- Image or screenshot.
- Page purpose.
- Target user.
- Optional previous/baseline image.

## Output

Findings grouped by severity, with concrete fixes.

## Review scopes

### Visual focus

Check where the eye lands first. Flag competing H1s, oversized secondary objects, CTA buried under
ornament, and pages that become too quiet to guide action.

### Clutter

Flag excess borders, nested cards, too many lines, repeated chips, decorative icons, and visible
metadata that does not change user behavior.

### Information value

Every visible element should answer: what can I do, what changed, or why this matters. Flag
foreshadowing, duplicated summaries, and labels that repeat the same concept.

### Contrast and hierarchy

Check whether primary, secondary, and tertiary content are visually distinct. Flag huge body text,
unclear CTAs, weak active state, and low contrast.

### AI design tells

Flag common AI-generated UI patterns: thick side accent bars, generic sparkle icons, random gradient
cards, meaningless colored avatars, symmetrical card grids with no product logic, and "dashboard"
panels that do not answer a user question.

### Product fit

Ask whether the screen feels like this product, not a generic SaaS template.

## Finding format

```text
severity / area / what is wrong / why it hurts / concrete fix
```

## Rules

- Do not propose adding copy unless the user needs it to act.
- Do not fix quietness with clutter.
- Do not use color unless it carries information.
- Do not remove a decided core object unless the page job changed.
