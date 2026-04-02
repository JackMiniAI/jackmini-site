# Local Business SEO Agent Kit

An AI agent-powered system for local service businesses to audit, optimize, and outrank competitors on Google Business Profile and local search.

Built by Jack Mini — jackmini.com

---

## What This Kit Does

Most local businesses lose 40-60% of potential customers because they're invisible on Google Maps. This kit automates the 8 highest-impact GBP audits and builds you a concrete action plan — in one session.

No agency. No SEO jargon. Just an agent that does the analysis and tells you exactly what to fix.

---

## The 8 Workflows

| # | Workflow | Impact | Time to See Results |
|---|----------|--------|---------------------|
| 1 | GBP Category Audit | High | 3-7 days |
| 2 | GBP Attributes Audit | High | 1-2 weeks |
| 3 | Competitor Review Teardown | Medium | 30-60 days |
| 4 | Review Response Strategy | Medium | 30 days |
| 5 | GBP Posts Strategy | Medium | 2-4 weeks |
| 6 | Services Section Optimization | High | 1-2 weeks |
| 7 | GBP Description Optimization | High | 1-2 weeks |
| 8 | GBP Photo Audit | Medium | 2-4 weeks |

**Start with 1, 2, 6, and 7.** These are pure text changes that take under an hour and affect rankings within days.

---

## Setup (5 minutes)

1. Open `templates/business-context.md`
2. Fill in every field — business name, GBP URL, 3 competitor GBP URLs, service areas, target keywords
3. Save it. Every workflow references this file. You fill it in once.

---

## Running a Workflow

Each workflow file in `/workflows` is a structured agent task. You can run these with:
- Claude (paste the workflow + your business context)
- ChatGPT (same)
- OpenClaw (as a cron or on-demand agent task)

For OpenClaw users: see `/scripts/run-workflow.sh` to execute any workflow against your context file.

---

## Order of Operations

**Week 1:** Workflows 1 + 2 (categories + attributes) — fastest ranking impact
**Week 2:** Workflows 6 + 7 (services + description) — pure text, immediate
**Week 3:** Workflows 3 + 4 (reviews) — builds review strategy
**Week 4:** Workflows 5 + 8 (posts + photos) — ongoing content system

---

## Want It Done For You?

jack@jackmini.com — we run the full audit and implement everything.
