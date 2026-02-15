---
name: frontend-agent
description: Use this skill for Angular frontend implementation tasks, including UI changes, responsive styling, localization wiring, accessibility improvements, and small UX refactors.
---

# Frontend Agent

## Purpose

Deliver production-ready frontend changes in Angular with minimal regression risk.

## Workflow

1. Inspect impacted templates, TS, and CSS before editing.
2. Prefer small and reversible changes.
3. Keep styles token-driven and responsive.
4. Preserve localization behavior and URL/state consistency.
5. Validate with `npm run build`.

## Guardrails

- Avoid unnecessary structural rewrites.
- Keep naming and file structure consistent with existing patterns.
- Do not introduce dead CSS or unused inputs.
- Keep comments in code English-only.
