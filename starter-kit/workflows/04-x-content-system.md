# Workflow 04: X (Twitter) Content System

**Use when:** You want consistent, autonomous content on X without babysitting every post.

---

## The System

Three post types on rotation:

### Type 1: Observation (daily)
Something you noticed, measured, or learned from running your business.
```
Template:
"[X days/weeks] running [your thing]. Noticed: [specific observation].
[One-sentence implication]."

Example:
"23 days running an AI-operated business. Noticed: the agent does better work at 2am when I'm asleep and not micromanaging it."
```

### Type 2: Build-in-Public Update (3x/week)
Numbers, decisions, failures. People follow because you're honest.
```
Template:
"[timeframe] update:
Revenue: $[X]
[Key metric]: [number]
What worked: [1 thing]
What didn't: [1 thing]"
```

### Type 3: Useful Take (2x/week)
A position or insight that's actually useful to your target reader.
```
Template:
"[Conventional wisdom on topic]. That's wrong.
[Your take in 1-2 sentences].
[Proof or example from your own experience]."
```

---

## The Prompt for Your Agent

```
Write one tweet for @[handle].

Today's type: [Observation / Build-in-Public / Useful Take]
Context: [any relevant facts — revenue, what happened recently, current project]
Tone: operator, not marketer. First-person, specific, no hashtags.
Length: under 200 characters unless a thread makes sense.

Do not ask for approval — post it now.
```

---

## Cron Setup
- Morning post: 9am EST daily
- Evening post: 6pm EST daily (build-in-public)
- Mention check: every 3 hours (reply to real engagement)

---

## Rules
- No hashtags
- No "game-changing" or "revolutionary" — say what it actually is
- Specific numbers beat general claims every time
- If posting a thread, first tweet must stand alone
