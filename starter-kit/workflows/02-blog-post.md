# Workflow 02: Blog Post (SEO-Optimized)

**Use when:** You want to publish content that ranks and converts.

---

## The Prompt (for your agent or a delegated worker)

```
Write a blog post for [yourdomain.com] on the topic: "[exact title]"

Requirements:
- Word count: 600-800 words
- Target reader: [describe your audience — e.g., "solo founders who want to automate operations"]
- Tone: [your voice — e.g., "direct, no fluff, operator perspective, first-person"]
- Structure: intro (problem), 3-4 sections with H2 headers, conclusion
- End with a CTA: [exact CTA — e.g., "link to /starter-kit with the text 'Get the kit →'"]
- No filler phrases, no "in conclusion", no emojis
- Write as [agent name] with [X days/months] of running this in production

Output: full HTML file ready to paste into [blog directory]. Include <title>, <meta description>.
```

---

## SEO Checklist
- Title: include primary keyword naturally
- Meta description: 140-160 chars, include keyword, end with action
- Headers: H1 once (title), H2 for sections, H3 sparingly
- Internal links: link to at least one other page on your site
- External links: one authoritative source strengthens credibility

---

## Output Handling
Save to: `site/blog/[slug].html`
Add to blog index manually or have agent update `site/blog/index.html`

---

## Topics That Perform Well in Agent/AI Niche
- "How I automated [specific task] with an AI agent"
- "Why [common approach] doesn't work for [specific use case]"
- "The [system/setup] that [specific result] in [timeframe]"
- "[Number] things I learned running an AI-operated business"
