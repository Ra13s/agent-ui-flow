---
name: onboard
description: Create the product knowledge files needed to use the UI flow skills on a new project.
---

# Onboard Skill

Use when starting a new product or moving this workflow into an existing app.

## Create

Under `env/<project>/`:

- `overview.md`
- `design-system.yaml`
- `pages.yaml`
- `known-problems.md`

## Questions to answer

- What is the product?
- Who is the primary user?
- What are the top 5 flows?
- What does the app deliberately not do?
- What should never be duplicated across pages?
- What visual style should be avoided?
- What is the current biggest UX problem?

## Output

A short onboarding report:

```text
Project: ...
Main flows: ...
Current design risks: ...
First storyboard target: ...
```
