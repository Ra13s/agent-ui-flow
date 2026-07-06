#!/usr/bin/env sh
set -eu

# Registers the .skills workflows with Claude Code (.claude/skills) and Codex (.agents/skills)
# by symlinking each skill folder. Idempotent; safe to re-run. No framework install required.

cd "$(dirname "$0")"

[ -d .skills ] || {
  echo ".skills missing"
  exit 1
}

for target in .claude/skills .agents/skills; do
  mkdir -p "$target"
  for skill in .skills/*/; do
    [ -d "$skill" ] || continue
    [ -f "$skill/SKILL.md" ] || continue
    name=$(basename "$skill")
    if [ ! -e "$target/$name" ] && [ ! -L "$target/$name" ]; then
      ln -s "../../.skills/$name" "$target/$name"
      echo "linked $target/$name"
    fi
  done
done

echo "Skills registered for Claude Code (.claude/skills) and Codex (.agents/skills)."
echo "Open this folder in your AI CLI and ask it to use one of the skills."
