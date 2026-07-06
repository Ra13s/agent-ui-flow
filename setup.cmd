@echo off
rem Registers the .skills workflows with Claude Code (.claude\skills) and Codex (.agents\skills)
rem using directory junctions (no admin rights needed). Idempotent; safe to re-run.

cd /d "%~dp0"

for %%T in (.claude\skills .agents\skills) do (
  if not exist "%%T" mkdir "%%T"
  for /d %%S in (.skills\*) do (
    if exist "%%S\SKILL.md" (
      if not exist "%%T\%%~nxS" mklink /J "%%T\%%~nxS" "%%S"
    )
  )
)

echo Skills registered for Claude Code (.claude\skills) and Codex (.agents\skills).
echo Open this folder in your AI CLI and ask it to use one of the skills.
