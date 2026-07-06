# Repo Guide

This repo is a publishable, file-first workflow for AI-assisted UI design.

## Core idea

The AI CLI reads Markdown skills and product knowledge files. It does not need a custom app,
framework, database, or daemon. The repo should stay readable by a designer or product person.

## Safety

- Do not put private product data, API keys, screenshots with secrets, or customer data in this repo.
- Do not run destructive commands.
- Keep examples generic unless the user explicitly wants a product-specific example.
- Prefer small Markdown edits over scripts.
- Use git history as the audit trail.

## Authoring rules

- Skills must be specific enough that two agents run them similarly.
- Every skill should say what it consumes, what it produces, and what it must not do.
- Avoid vague reviewer roles like "make it better"; define concrete scopes.
- Keep implementation separate from review. A review skill should not silently edit code.

## Current skills

- `storyboard`: make a screen-by-screen Markdown contract before implementation.
- `visual-review`: critique an image or screenshot with focused UX validators.
- `image-variants`: generate and compare visual concepts.
- `implement-flow`: implement only after the storyboard is reviewed.
- `onboard`: fill in product knowledge for a new project.

## Output conventions

Reviewed storyboards go in `docs/examples/` or a project-specific `docs/storyboards/` folder.
Screenshots and generated images go in `docs/img/`.
Product knowledge lives under `env/<project>/`.
