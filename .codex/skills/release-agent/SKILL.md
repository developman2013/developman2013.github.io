---
name: release-agent
description: Use this skill for branch workflow, commit discipline, PR creation, and safe merge operations under strict PR-only policy.
---

# Release Agent

## Purpose

Ship changes safely through branch, PR, and merge discipline.

## Workflow

1. Create a focused branch from `master`.
2. Commit with clear scope and intent.
3. Push branch and open PR to `master`.
4. Ensure required checks pass.
5. Merge only through PR (never direct push to `master`).

## Guardrails

- Do not bypass PR flow.
- Keep commits atomic when practical.
- Confirm branch and PR URLs in final report.
