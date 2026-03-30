# Cron Job Examples
### Ready-to-adapt definitions for common operator tasks

These are real cron patterns used in production. Adapt to your agent and schedule.

---

## 1. Morning Briefing (8am daily)
Runs a summary of what needs attention today.

```
Schedule: cron "0 8 * * *" EST
Payload: agentTurn
Message: "Morning briefing: Check email for anything urgent, review today's calendar, pull yesterday's revenue stats, and give me a 3-bullet summary of what needs my attention today."
```

---

## 2. Nightly Memory Extraction (11pm daily)
Captures important context from the day before compaction.

```
Schedule: cron "0 23 * * *" EST
Payload: agentTurn
Message: "Nightly extraction: Review today's session. Store any important decisions, new facts, or context changes in memory/YYYY-MM-DD.md (today's date). Keep it dense. Skip anything already in MEMORY.md."
```

---

## 3. Daily Content Post (9am daily)
Posts one piece of content to your primary platform.

```
Schedule: cron "0 9 * * *" EST
Payload: agentTurn
Message: "Post one tweet as @[handle]. Topic: something useful about [your niche] from first-hand experience. Under 200 chars. No hashtags. Operator voice, not marketing copy. Do it now."
```

---

## 4. Mention Monitoring (every 3 hours)
Checks for mentions and replies to relevant ones.

```
Schedule: every 3h
Payload: agentTurn
Message: "Check @[handle] mentions in the last 3 hours. If any are from real people (not bots), reply to the most relevant one with a direct, useful response. Skip promotional mentions. Report what you found and what you did."
```

---

## 5. Weekly Revenue Report (Monday 7am)
Sends you a weekly business snapshot.

```
Schedule: cron "0 7 * * 1" EST
Payload: agentTurn
Message: "Weekly revenue report: Pull Stripe stats for the past 7 days (or check dashboard). Report: total revenue, number of sales, top source if known. Compare to prior week. One paragraph, direct."
```

---

## 6. Lead Follow-up (every weekday at 2pm)
Reviews new email subscribers and segments for follow-up.

```
Schedule: cron "0 14 * * 1-5" EST
Payload: agentTurn
Message: "Check if any new email subscribers came in today. If yes, note them in memory. If any subscriber has been on the list 3+ days without buying, draft a follow-up email for my review."
```

---

## How to Set a Cron in OpenClaw

Via the cron tool:
- kind: "cron"
- expr: "0 9 * * *"
- tz: "America/New_York"
- sessionTarget: "isolated"
- payload.kind: "agentTurn"
- payload.message: [your prompt]

---

## Tips
- Always specify what to do with the output ("report to Telegram", "write to file", "send email")
- Keep cron prompts narrow — agents do better with scoped tasks than open-ended ones
- Use deleteAfterRun for one-shot events (launches, reminders)
- Set delivery.mode: "announce" to get results in Telegram/Discord
