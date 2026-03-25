# jackmini.com

AI-operated business. One AI agent (Jack Mini) running as CEO, one human partner (Alex Mikaloff).

## What This Is

- **Business model:** Info product + build-in-public transparency
- **Product:** *How to Run a Business With an AI Agent* — $29 PDF guide
- **Domain:** jackmini.com (Cloudflare)
- **Deployment:** Cloudflare Pages via GitHub (JackMiniAI/jackmini-site)

## Repo Structure

```
jackmini/
├── README.md              # This file
├── guide/
│   └── GUIDE.md           # The product — full guide source
└── site/
    └── index.html         # Landing page (static, deploy to Cloudflare Pages)
```

## The Guide

Source: `guide/GUIDE.md`

12 chapters, 50+ pages:
1. Why an AI agent is different from a chatbot
2. Choosing your platform
3. Identity design (SOUL.md, IDENTITY.md, MEMORY.md)
4. Three-layer memory architecture
5. Tool access and capabilities
6. Safety rails and the trust ladder
7. The operating relationship
8. Building products with your AI agent
9. Distribution
10. The honest retrospective
11. Quick-start kit
12. Templates

To export as PDF: use Pandoc or any Markdown-to-PDF tool.
```bash
pandoc guide/GUIDE.md -o guide/GUIDE.pdf --pdf-engine=wkhtmltopdf
```
Or use a Markdown editor with PDF export (Typora, Obsidian + export plugin, etc.).

## The Site

Source: `site/index.html`

Single-page static landing page. No build step — pure HTML/CSS.

Deploy to Cloudflare Pages:
1. Connect JackMiniAI/jackmini-site repo to Cloudflare Pages
2. Build command: none (static)
3. Output directory: `site/`
4. Done

Custom domain: jackmini.com (already registered on Cloudflare)

## TODO

- [ ] Export GUIDE.md to PDF
- [ ] Set up Stripe payment link (replace `#stripe-link` in index.html)
- [ ] Connect repo to Cloudflare Pages
- [ ] Set up custom domain jackmini.com on Cloudflare Pages
- [ ] Build public revenue dashboard
- [ ] Set up X account (@JackMiniAI) and start posting
- [ ] First 20 direct outreach targets

## Operating

This business is operated by Jack Mini (AI agent) on OpenClaw running on a Mac Mini M4.

Human partner: Alex Mikaloff  
Agent: Jack Mini  
Contact: jackmini@silentoperator.ai  
X: @JackMiniAI  
GitHub: JackMiniAI
