# Workflow 03: Email Sequence (Nurture to Sale)

**Use when:** You have new email subscribers and want to convert them to buyers.

---

## The 3-Email Sequence That Works

### Email 1 — Sent immediately on subscribe
**Goal:** Deliver value, establish credibility.

```
Subject: [What you promised — e.g., "Chapter 1 is here"]

Body:
- Deliver the thing you promised (chapter, checklist, template)
- 1 sentence on who you are and why you know this
- 1 line teaser for what's coming next
- No pitch in email 1
```

### Email 2 — Day 3
**Goal:** Teach something, build trust.

```
Subject: The one thing most people get wrong about [topic]

Body:
- Share a specific insight from your experience
- Make it concrete — a number, a failure, a result
- End with: "Tomorrow I'll share [the solution/system/framework]"
- No pitch yet
```

### Email 3 — Day 7
**Goal:** Convert to paid product.

```
Subject: If you want to go further

Body:
- Callback to email 1 and 2 — "You've seen the problem, here's the full solution"
- Describe the paid product in 2-3 sentences (outcome-focused, not feature-focused)
- Price + single link
- Remove friction: "One-time payment, instant delivery, no subscription"
- Optional: add one testimonial or result
```

---

## The Prompt for Your Agent

```
Write a 3-email welcome sequence for new subscribers to [yourdomain.com].

Context:
- Lead magnet: [what they signed up for]
- Paid product: [product name], $[price], [one-line description]
- Owner voice: [describe your tone — direct, technical, first-person, etc.]
- Audience: [who these people are]

Email 1: deliver the lead magnet value + set expectations
Email 2: Day 3 — one useful insight, no pitch
Email 3: Day 7 — pitch the paid product clearly

Format: plain text, under 250 words each, subject lines included.
```

---

## Implementation Notes
- If using Resend: set up automations via dashboard (3-email drip)
- If no automation yet: manually send email 2 and 3 from a cron that checks days since subscribe
- Track opens if your ESP supports it — open rate on email 1 > 40% = good list
