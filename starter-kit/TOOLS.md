# TOOLS.md — Machine Setup & Authenticated CLIs

## Machine
- Hostname: [your-hostname]
- OS: [macOS / Ubuntu / etc.]
- User: [username]
- RAM: [amount]

## AI / Model Layer
- Primary model: [e.g., claude-3-5-sonnet, gpt-4o, ollama/qwen3:14b]
- Local LLM endpoint: [e.g., http://127.0.0.1:11434 — if using Ollama]
- Worker model: [e.g., nvidia/moonshotai/kimi-k2.5 — free tier]

## Authenticated CLIs
# List every CLI that's set up and what it can do
- openclaw: [path] — main agent runtime
- gh: [path] — GitHub (issues, PRs, CI)
- [add your own: gcloud, aws, stripe-cli, etc.]

## APIs & Secrets
# Don't put actual keys here — reference where they're stored
- Stripe: restricted key in openclaw secrets, prefix [first 20 chars]
- Resend: API key in openclaw secrets
- [Your other APIs here]

## Key Paths
# Paths the agent needs to reference frequently
- Main workspace: [path]
- Project root: [path]
- Config: [path]

## Email
- Primary: [your email]
- Transactional: [e.g., Resend — from@yourdomain.com]
- CLI: [e.g., gog for Gmail]

## SSH / Remote
- [List any remote servers, SSH aliases, etc.]

---
# Notes
# Update this file whenever you add a new CLI, rotate a key, or change a path.
# The agent uses TOOLS.md to know what it can actually use — gaps here = capability gaps.
