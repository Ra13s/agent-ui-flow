---
name: image-to-ui-implementation
description: Implement a web page from a selected UI image with a 90-95% visual-match goal, then capture a screenshot and run implementation-fidelity. Use when Codex or Claude Code must turn a generated/reference UI image into actual frontend code without redesigning it.
---

# Image To UI Implementation

Use this after a generated or reference UI image has been selected.

The task is reconstruction, not redesign. The selected image is the visual source of truth until a
human explicitly changes direction.

## Implementation Prompt

Use this instruction shape:

```text
Implement this selected UI image as a running web page.

Target: 90-95% visual match.

Preserve:
- overall layout geometry
- dominant colors and accent semantics
- card/input/button shape and proportions
- typography hierarchy and body text scale
- visible module structure
- primary CTA placement and visual weight
- spacing rhythm and page density

Do not redesign.
Do not add modules that are not visible in the image.
Do not replace the color direction unless explicitly instructed.
Do not use generated-image artifacts such as unreadable fake text; replace text with clean product copy while preserving the same visual weight and layout.

After implementation:
1. run the app
2. capture a screenshot
3. compare selected image vs screenshot with implementation-fidelity
4. fix mismatches until verdict is pass or near
```

## Required Process

1. Read the selected image and any decision notes.
2. Inspect existing app conventions.
3. Implement the page.
4. Capture the running UI screenshot.
5. Run `implementation-fidelity`.
6. If verdict is `fail`, fix before moving on.
7. Log deviations in the demo folder.

## Stop Conditions

Stop and ask for human validation if:

- the selected image is internally inconsistent or impossible to implement faithfully
- the implementation would require a different product flow
- the fidelity review fails twice for the same core mismatch
- color/layout direction needs to change

## Output

- changed files
- screenshot path
- fidelity review path
- known deviations from the selected image

