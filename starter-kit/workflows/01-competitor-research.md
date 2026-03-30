# Workflow 01: Competitor Research

**Use when:** You want to understand a market, map competitors, or stress-test a positioning decision.

---

## The Prompt

```
Research competitors in [niche/market].

For each competitor (find 3-5), report:
1. Product: what they sell and at what price
2. Positioning: how they describe themselves
3. Audience: who they're clearly targeting
4. Distribution: where they get traffic (X, SEO, YouTube, etc.)
5. Weakness: one thing they're clearly NOT doing well

Then: give me your honest take on where the gap is.
Tag your gap analysis as [inferred] or [speculative].
```

---

## Notes
- The agent will use web_search and web_fetch for this
- Give it a specific niche — "AI tools for solo founders" beats "AI tools"
- The gap analysis is the output you actually want — everything else is supporting data
- Ask the agent to take a [contrarian] position on one thing in the gap analysis

---

## Follow-up Prompts
- "Which competitor has the best distribution? What's their main channel?"
- "Write a positioning statement for us that exploits the gap you found"
- "Which of these could we copy most directly in 30 days?"
