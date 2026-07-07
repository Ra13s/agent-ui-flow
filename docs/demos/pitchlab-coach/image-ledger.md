# Image Ledger

| id | round | type | source image | prompt file | review file | verdict | notes |
|---|---|---|---|---|---|---|---|
| initial-seed | 01-initial | implementation screenshot | app/initial.html | n/a | 01-initial/review.md | seed | Deliberately bad running UI used as the first image-generation seed. |
| r1-contact-01 | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt.md | 02-image-round-1/review.md | rejected | Contact sheet, not a single screen. |
| r1-contact-02 | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt.md | 02-image-round-1/review.md | rejected | Contact sheet, not a single screen. |
| r1-contact-03 | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt.md | 02-image-round-1/review.md | rejected | Contact sheet, not a single screen. |
| r1-board-01 | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt.md | 02-image-round-1/review.md | rejected | Multi-screen board, not a single screen. |
| r1-board-02 | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt.md | 02-image-round-1/review.md | rejected | Multi-screen board, not a single screen. |
| r1-board-03 | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt.md | 02-image-round-1/review.md | rejected | Multi-screen board, not a single screen. |
| r1-focused | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt-single-01-focused-card.md | 02-image-round-1/review.md | selected | Best balance of focus, clarity, and implementability. |
| r1-path | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt-single-02-path.md | 02-image-round-1/review.md | rejected | Reintroduced dashboard metrics. |
| r1-sprint | 02-image-round-1 | generated | 01-initial/screenshot.png | 02-image-round-1/prompt-single-03-sprint.md | 02-image-round-1/review.md | used partly | Good voice identity, too timer-dominant. |
| r2-refine | 03-image-round-2 | generated | 02-image-round-1/variants/pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png | 03-image-round-2/prompt-single-01-refine.md | 03-image-round-2/review.md | rejected | Strong but less distinctive than voice-object. |
| r2-premium | 03-image-round-2 | generated | 02-image-round-1/variants/pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png | 03-image-round-2/prompt-single-02-premium.md | 03-image-round-2/review.md | rejected | Too editorial/premium-content, weaker product fit. |
| r2-voice | 03-image-round-2 | generated | 02-image-round-1/variants/pitchlab-r1-focused-2026-07-07T17-36-14-659Z-01.png | 03-image-round-2/prompt-single-03-voice-object.md | 03-image-round-2/review.md | selected | Recommended implementation seed. Strongest speaking-practice identity. |
| implementation-v1 | 04-implementation-v1 | implementation screenshot | 03-image-round-2/variants/pitchlab-r2-voice-2026-07-07T17-44-58-757Z-01.png | 04-implementation-v1/instruction.md | 04-implementation-v1/fidelity-review.md | selected | First faithful running UI implementation. Fidelity pass 14/16. |
| r3-polish | 05-image-round-3-from-implementation | generated | 05-image-round-3-from-implementation/source-screenshot.png | 05-image-round-3-from-implementation/prompt-single-01-polish.md | 05-image-round-3-from-implementation/review.md | used partly | Confirms current structure. |
| r3-less-clutter | 05-image-round-3-from-implementation | generated | 05-image-round-3-from-implementation/source-screenshot.png | 05-image-round-3-from-implementation/prompt-single-02-less-clutter.md | 05-image-round-3-from-implementation/review.md | selected | Best signal for manual cleanup. |
| r3-focus | 05-image-round-3-from-implementation | generated | 05-image-round-3-from-implementation/source-screenshot.png | 05-image-round-3-from-implementation/prompt-single-03-stronger-focus.md | 05-image-round-3-from-implementation/review.md | rejected | Keeps too much decorative focus-strip clutter. |
| manual-r1 | 06-implementation-round-1 | comparison | 04-implementation-v1/screenshot.png | n/a | 06-implementation-round-1/review.md | improved | Removed bottom focus strip. |
| manual-r2 | 07-implementation-round-2 | comparison | 06-implementation-round-1/screenshot-after.png | n/a | 07-implementation-round-2/review.md | improved | Reduced copy and panel weight. |
| manual-r3 | 08-implementation-round-3 | comparison | 07-implementation-round-2/screenshot-after.png | n/a | 08-implementation-round-3/review.md | improved | Tightened spacing and type. |
| manual-r4 | 09-implementation-round-4 | comparison | 08-implementation-round-3/screenshot-after.png | n/a | 09-implementation-round-4/review.md | final | Final polish and interaction affordance. |
| final | 10-final | final | 09-implementation-round-4/screenshot-after.png | n/a | 10-final/initial-vs-final.md | final | Final published demo screenshot. |
