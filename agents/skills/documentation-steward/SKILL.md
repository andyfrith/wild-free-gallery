---
name: documentation-steward
description: Use when maintaining Wild Free Gallery documentation consistency, updating the project dashboard or current state, tracking decisions, audits, milestones, phases, deliverables, risks, open questions, and next actions across repository artifacts.
---

# Documentation Steward

## Purpose

Keep Wild Free Gallery project artifacts consistent, current, and decision-aware.

Use this skill when project status changes, milestones complete, decisions are made, audits are created, or documentation may have drifted across files.

## Core Responsibilities

- Keep artifacts consistent
- Update the project dashboard
- Update current state
- Track decisions
- Track audits
- Track milestones

## Source Of Truth Order

When artifacts conflict, resolve inconsistencies using this order:

1. Accepted decisions in `agents/decisions.md`
2. Current operational state in `agents/current-state.md`
3. Active dashboard in `docs/dashboard/`
4. Approved strategy and product artifacts in `docs/`
5. Completed audits in `docs/audits/`
6. Git history
7. Conversation context

Repository artifacts are authoritative. Chat history is not authoritative unless captured in the repository.

## Required Context

Before making documentation updates, review:

1. `agents/project-context.md`
2. `agents/current-state.md`
3. `agents/decisions.md`
4. The relevant dashboard file
5. Any artifact directly affected by the update

For milestone, audit, or roadmap changes, also review:

- `docs/roadmap/`
- `docs/audits/`

## Stewardship Triggers

Invoke this skill when:

- A milestone starts, changes, or completes
- A project phase changes
- A major artifact is created, approved, revised, or deprecated
- A decision is accepted, superseded, rejected, or reopened
- An audit is created or completed
- The dashboard no longer matches current state
- The roadmap no longer matches active work
- A document references outdated phase, milestone, or status information
- A new agent needs reliable project context

## Standard Workflow

1. Read the required context files.
2. Identify what changed.
3. Determine which artifacts must be updated.
4. Update only the files required to restore consistency.
5. Preserve historical decisions unless they are explicitly superseded.
6. Add new decisions when a meaningful project choice has been accepted.
7. Update dashboard and current state together when operational status changes.
8. Verify that phase, milestone, objective, deliverables, risks, open questions, and next actions agree across documents.
9. Report the exact files updated and any remaining inconsistencies.

## Dashboard Updates

Update the dashboard when:

- Project health changes
- Schedule, scope, technical, narrative, or portfolio health changes
- A milestone changes status
- Deliverables move between planned, in progress, and complete
- Risks are added, removed, or re-rated
- Upcoming work changes

The dashboard should answer:

- What is happening now?
- What was recently completed?
- What is next?
- What is at risk?

## Current State Updates

Update `agents/current-state.md` when:

- Current phase changes
- Current milestone changes
- Current objective changes
- Current deliverables change
- Recently completed work changes
- Active risks change
- Open questions change
- Next actions change

`current-state.md` should remain a short operational snapshot. It should not become a full history or duplicate the dashboard.

## Decision Tracking

Update `agents/decisions.md` when a significant decision is accepted.

Significant decisions include:

- Product strategy decisions
- Scope decisions
- Technology stack decisions
- Hosting or deployment decisions
- Analytics decisions
- Governance decisions
- Workflow decisions
- Launch decisions

Each decision should include:

- Decision ID
- Title
- Status
- Decision date
- Summary
- Implications

Do not delete historical decisions. If a decision changes, mark the prior decision as superseded and add a replacement decision.

## Audit Tracking

Track audits when:

- A phase completes
- A major artifact set is approved
- A launch milestone completes
- A meaningful review is performed

Audit updates should ensure:

- Audit files are discoverable
- Audit status is reflected in current state
- Audit status is reflected in the dashboard
- Audit outcomes are reflected in next actions
- Audit recommendations are not lost

Audits should live under `docs/audits/`.

## Milestone Tracking

Milestones should be tracked consistently across:

- `agents/current-state.md`
- `docs/dashboard/`
- `docs/roadmap/`
- Relevant audit files

For each milestone, track:

- Name
- Phase
- Status
- Key deliverables
- Success criteria
- Next milestone

Avoid creating milestone names that differ slightly across documents. Use one canonical name everywhere.

## Consistency Checklist

Before finishing stewardship work, verify:

- Current phase matches across current state, dashboard, and roadmap
- Current milestone matches across current state and dashboard
- Completed deliverables are not listed as next actions
- Open questions are still genuinely open
- Decisions mentioned as accepted are recorded in `agents/decisions.md`
- Audit paths are accurate
- Dashboard version references are accurate
- No document requires chat history to be understood
- New files are linked from the appropriate index, dashboard, roadmap, or artifact list

## Output Expectations

When reporting back, summarize:

- Files updated
- Consistency issues resolved
- Decisions added or changed
- Audits added or changed
- Milestones updated
- Remaining open questions

Keep the report brief and specific.

## Stewardship Principle

Documentation should create momentum, not bureaucracy.

Keep the repository coherent enough for humans and AI agents to act quickly, confidently, and without hidden context.
