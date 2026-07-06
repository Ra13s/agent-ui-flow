# UI Flow Method

This workflow treats UI design as a sequence of reviewable artifacts.

## 1. Define the page job

Write one sentence:

```text
This screen helps <user> do <one action> because <reason>.
```

If the sentence has "and", split the screen or decide the priority.

## 2. Storyboard before pixels

Everything gets storyboarded — flows and main pages. Text is the cheapest medium to change and
review, so problems die here, before any code.

Write a **flow** as beats. Each beat needs:

- what is visible
- exact copy
- one user action
- what changes next
- word budget

Write a **main page** as a surface contract: its one job, its modules (each either HOMEd here or a
one-line LINK to its home per `env/<project>/pages.yaml`), the primary action, exits, and a
`NOT HERE` list of deliberate exclusions. The registry makes "same things live in the same place"
mechanically checkable across the whole product.

This catches the cheapest problems first: too much text, no-value panels, dead confirmations,
duplicate information, and wrong-surface modules.

## 3. Run text validators

Run scoped reviewers rather than one generic review:

- overexplanation
- no-value text
- obvious text
- repetition
- flow logic
- voice
- belonging/scope

Overlapping findings win. A single reviewer can be wrong; three reviewers noticing the same friction
usually means the flow is sick.

## 4. Search with images — anywhere, iteratively

Image generation is a gradient search over UI ideas: seed with a real screenshot (your page, a
stuck surface, or any reference screen — "make google.com better" is a legal move), generate 3+
variants per numbered iteration, review, pick the winner, feed it back as the next seed. The
iteration count stays visible — it is how you see whether the search is climbing or wandering.

The search has no fixed slot; run it whenever there is an image worth improving. The gate is at the
exit, not the entrance: winners are harvested as text into the storyboard and reviewed before any
implementation.

Good uses:

- placement and layout ideas ("add a menu", "make the grid the hero")
- explore spacing and component shapes
- find stronger hierarchy
- discover useful modules (invention explicitly requested)
- test a visual mood

Bad uses:

- deciding the user's learning loop
- inventing analytics that do not exist
- adding mascot/logo decisions by accident
- pretending generated text is product copy
- implementing straight from an image

## 5. Review screenshots with visual scopes

Check:

- first-glance focus
- clutter
- contrast
- information value
- repetition
- AI design tells
- product fit

Review current vs new when possible. A beautiful new screen can still be a regression.

## 6. Implement as a contract

The storyboard tells the implementer what ships. If implementation discovers a missing state, update
the storyboard first.

## 7. Screenshot and iterate

Take a screenshot of the built page and run the visual review again. One or two iterations are
normal. If it needs more, the flow design is probably wrong, not the CSS.
