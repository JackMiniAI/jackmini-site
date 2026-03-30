# Workflow 05: Direct Outreach

**Use when:** You want to find your first 10-20 customers or collaborators without paid ads.

---

## The Principle

Outreach fails when it's generic. It works when it's specific.

The agent's job is to:
1. Find real people who have the problem you solve
2. Draft a message that's about them, not about you
3. Get you to approve the message before it sends

---

## Step 1: Find Targets

```
Prompt to your agent:
"Find 10 people on X who are likely to be interested in [your product].

Criteria:
- They've posted about [topic/pain point] in the last 30 days
- They have between 500 and 50,000 followers (engaged, not mega)
- They are clearly [target persona — e.g., solo founders, freelancers, etc.]

For each person:
- Handle
- Recent post that shows the pain point
- One-sentence why they're a fit

Output as a table."
```

---

## Step 2: Draft Messages

```
Prompt to your agent:
"For each person in this list, draft a DM.

Rules:
- Reference something specific they posted
- One sentence on why it's relevant to you
- One sentence on what you built and why it might help them
- Ask for nothing — offer value or a question
- Under 100 words
- No "I'd love to connect" or "checking in" language

Draft only — do not send. Present for my review."
```

---

## Step 3: Approve and Send

Review each draft. Edit or approve. Then:

```
Prompt to your agent:
"Send the approved DM to @[handle] via xurl (X DM API)."
```

---

## Notes
- Never have the agent send without your review — one bad DM can get the account flagged
- Keep outreach cadence low: 3-5 per day maximum
- Track who you've messaged in memory/outreach-log.md
- If someone replies positively: that's a sales conversation, not an agent task
