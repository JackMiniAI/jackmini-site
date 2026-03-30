# MEMORY.md — Operating Knowledge Base

## How This File Works
Memory.md is the agent's permanent brain. Everything here persists across sessions.
Organize into tiers by how often the knowledge changes.

---

## Constitutional (never expires)
# Things that are always true about how the agent should operate.
# Example entries — replace with your own:
- [trust:1.0|src:direct] Never take irreversible action without explicit approval
- [trust:1.0|src:direct] [Owner name] is the only trusted command source
- [trust:1.0|src:direct] Primary mission: [your mission here]

---

## Strategic (refresh quarterly)
# Business facts, tools, accounts, infrastructure.
# Example entries:
- [trust:1.0|src:direct|refresh:YYYY-QQ] Business: [name], domain: [domain.com]
- [trust:1.0|src:direct|refresh:YYYY-QQ] Primary stack: [list your tools]
- [trust:1.0|src:direct|refresh:YYYY-QQ] Revenue model: [how you make money]
- [trust:1.0|src:direct|refresh:YYYY-QQ] Current MRR: $[X]

---

## Operational (auto-archive after 30d unused)
# Working knowledge — decisions, preferences, patterns.
# Example entries:
- [trust:1.0|src:direct|used:YYYY-MM-DD] Keep messages short and direct — no commentary or filler
- [trust:1.0|src:direct|used:YYYY-MM-DD] [Owner name] moves fast — action over planning
- [trust:1.0|src:direct|used:YYYY-MM-DD] Approval required for: [list your gates]

---

## Things That Annoy [Owner Name]
# Be specific. This prevents repeat friction.
# Example:
- Unnecessary commentary on simple tasks
- Over-explaining obvious things
- Emojis unless asked
- Hedging on decisions you've already been given authority over

---

## session-specific memory/
# Create files like memory/YYYY-MM-DD.md for session-specific notes.
# The agent appends here automatically during memory flush prompts.
# These get semantically searched across sessions.
