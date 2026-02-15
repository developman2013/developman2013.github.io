# Agent Workflow

This repository uses agent-oriented execution with strict PR-only delivery.

## Global Rules

- Never push directly to `master`.
- Always work in a feature branch.
- Always open a PR and merge through PR.
- Run CI checks before merge.
- Keep code comments in English.

## Agent Routing

- Use `frontend-agent` for UI/UX, Angular components, styling, localization, and accessibility.
- Use `qa-agent` for validation, regression checks, test strategy, and release risk review.
- Use `release-agent` for branch hygiene, commit quality, changelog discipline, and PR lifecycle.

## Default Execution Order

1. `frontend-agent` (implementation)
2. `qa-agent` (verification and risk scan)
3. `release-agent` (PR and merge flow)

## PR Requirements

- Scope is small and focused.
- Build passes (`npm run build`).
- User-facing changes are described.
- Risks and rollback path are documented.
