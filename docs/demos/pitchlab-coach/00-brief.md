# Brief

## Screen

PitchLab daily speaking practice entry page.

PitchLab is a fictional public-speaking practice product. The user opens the app to start one short
practice session before a presentation.

## User task

Start today's speaking workout and understand the single thing they are about to practice.

## Initial problem

The first version is deliberately bad. It has duplicate navigation/status, multiple competing start
buttons, a huge page title, repeated "confidence + filler words" messaging, metric cards before the
user has started, and bottom cards that explain what will happen later instead of helping the user
act now.

## Why this is worth hillclimbing

The screen has clear visual failure modes that image generation and review agents can improve:

- focus conflict between the hero, timer, daily plan, and metric cards
- repeated information that looks important but does not change the user's decision
- clutter from bordered cards, badges, progress bars, and side accents
- weak product rhythm: it reads like a dashboard, not a focused practice entry point
- too many CTAs for one primary task
