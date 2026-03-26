# Agent Workflow & Team Processes

This repository uses agent-oriented execution with strict PR-only delivery, following the **agent-team specification** framework.

## Global Rules

- Never push directly to `master`.
- Always work in a feature branch.
- Always use PR flow for `master` updates.
- Do not create PRs without explicit user approval in the current thread.
- Do not merge PRs without explicit user approval in the current thread.
- Run CI checks before merge.
- Keep code comments in English.
- Prefix every agent-authored message with `[agentName]`.
- **Policy-first execution**: All agent decisions must be grounded in `AGENTS/*.md` and `PROCESSES/*.md` definitions.
- **No unauthorized behavior**: Missing or unclear policy should trigger explicit error and stop.

## Agent Roles (from AGENTS/*)

This workspace defines 7 core agent roles based on **agent-team v1.0.0**:

### 1. **Architect** (`AGENTS/architect.md`)
- Authority: approve architecture, request PoC, reject incompatible designs
- Responsibilities: NFR, system boundaries, ADRs, design guidelines
- Collaboration: with Developer (implementation), Tester (quality), DevOps (deployment)

### 2. **Developer** (`AGENTS/developer.md`)
- Authority: propose optimizations, block release on defects, clarify requirements
- Responsibilities: code, unit tests, code reviews, CI/CD health
- Collaboration: with Architect (alignment), Tester (bug triage), DevOps (deployment)

### 3. **Tester** (`AGENTS/tester.md`)
- Authority: refuse release on critical defects, classify severity, recommend acceptance
- Responsibilities: test plans, test automation, issue tracking, coverage
- Collaboration: with Developer (reproduction), BA (criteria), Orchestrator (gating)

### 4. **Business Analyst** (`AGENTS/business-analyst.md`)
- Authority: authorize scope/MVP, escalate priority conflicts
- Responsibilities: requirements, user stories, acceptance criteria, prioritization
- Collaboration: with Product Owner (goals), Architect (constraints), Tester (validation)

### 5. **Orchestrator** (`AGENTS/orchestrator.md`)
- Authority: manage transitions, enforce gates, adjust timelines
- Responsibilities: workflow coordination, status awareness, gating, escalation
- Collaboration: with all roles for end-to-end orchestration
- **Constraint**: Does NOT make technical design decisions

### 6. **DevOps Engineer** (`AGENTS/devops.md`)
- Authority: define CI/CD rules, execute changes, initiate rollbacks
- Responsibilities: pipelines, infrastructure, monitoring, cost optimization
- Collaboration: with Architect (design), Developer (requirements), Security (policy)

### 7. **Security Engineer** (`AGENTS/security-engineer.md`)
- Authority: halt release for critical security issues, enforce controls
- Responsibilities: threat modeling, vulnerability scans, compliance, secrets mgmt
- Collaboration: with Architect (design review), DevOps (secure CI/CD), Developer (practices)

## SDLC Processes (from PROCESSES/*)

### 1. User Communication (`PROCESSES/user-communication.md`)
- **Goal**: Capture and clarify user needs, feedback, questions
- **Key roles**: BA, Product Owner, Orchestrator
- **KPI**: ACK time < 4h, clarity > 90%, NPS/CSAT

### 2. Analysis and Specification (`PROCESSES/analysis-and-specification.md`)
- **Goal**: Translate business needs into formalized requirements
- **Key roles**: BA, Architect, Product Owner
- **Outputs**: Requirement repo, acceptance criteria, design constraints

### 3. Command Execution (`PROCESSES/command-execution.md`)
- **Goal**: Manage task execution and automation
- **Key roles**: Developer, Orchestrator, DevOps
- **Constraint**: Enforce access control, prevent out-of-scope commands

### 4. Code Development (`PROCESSES/code-development.md`)
- **Goal**: Implement features with high quality and maintainability
- **Key roles**: Developer, Architect, Tester
- **Steps**: branch → code → test → lint → PR → review → merge
- **KPI**: Code review cycle time, test coverage %, post-release bugs

### 5. Release and Monitoring (`PROCESSES/release-and-monitoring.md`)
- **Goal**: Deploy safely and observe production behavior
- **Key roles**: DevOps, Security Engineer, Orchestrator
- **KPI**: Deployment success %, MTTD, MTTR
- **Constraint**: Meet change window, preserve user data integrity

## Default Execution Order for AI Agents

1. **Developer** (implementation) — uses Architect guidance, follows Code Development process
2. **Tester** (verification) — uses code-development KPIs, defect classification authorities
3. **Orchestrator** (coordination) — validates process gates before PR merge

## Angular Project-Specific Routing

- **Frontend features**: Developer + Architect → code-development process → Tester
- **UI/UX changes**: Consult styling standards, accessibility requirements
- **Component tests**: Required by Tester (test coverage KPI)
- **Build validation**: DevOps enforces (`npm run build`, CI checks)

## PR Requirements

- Scope is small and focused.
- Build passes (`npm run build`).
- User-facing changes are described.
- Risks and rollback path are documented.
- **All changes comply with agent authorities and process constraints** (see above).
- Code review performed by Developer agent with Architect consultation on architecture changes.

## Policy Compliance Checklist

Before action, verify:
- ✅ Decision maps to a role in `AGENTS/*.md`
- ✅ Process followed matches `PROCESSES/*.md` steps
- ✅ Constraints and authorities are respected
- ✅ Collaboration chain includes affected roles
- ✅ Trigger conditions met

**If any of the above is uncertain, STOP and clarify in the PR or thread.**
