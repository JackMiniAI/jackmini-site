# QUICKSTART — Working Agent in One Afternoon

**Time required:** 2-4 hours  
**What you'll have at the end:** An AI agent that knows your business, can act autonomously within bounds you define, and runs on a schedule.

---

## Prerequisites

- macOS or Linux machine (M-series Mac works great)
- Homebrew installed (macOS)
- Node.js 18+
- An Anthropic or OpenAI API key (or Ollama for local models)
- 2-3 hours of focused time

---

## Step 1: Install OpenClaw

```bash
npm install -g openclaw
openclaw init
```

This creates `~/.openclaw/` with a default config and workspace.

---

## Step 2: Configure Your Model

Open `~/.openclaw/openclaw.json` and set your model:

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "apiKey": "sk-ant-..."
}
```

Or for local (Ollama):
```json
{
  "model": "ollama/qwen3:14b",
  "baseUrl": "http://127.0.0.1:11434/v1"
}
```

---

## Step 3: Set Up Your Workspace Files

Copy all the template files from this kit into `~/.openclaw/workspace/`:

```bash
cp SOUL.md IDENTITY.md MEMORY.md AGENTS.md TOOLS.md USER.md ~/.openclaw/workspace/
```

Fill in every `[bracket]` in each file. This takes 20-30 minutes. It's the most important step.

**Do not skip this.** An agent with no identity files is a generic chatbot. An agent with filled-in identity files is a collaborator that knows your business.

---

## Step 4: Start the Agent

```bash
openclaw start
```

Your first message should be:
```
Read SOUL.md, IDENTITY.md, MEMORY.md, AGENTS.md, TOOLS.md, and USER.md.
Confirm you understand your role and give me a one-paragraph summary of who you are and what you're here to do.
```

If the summary sounds right, you're good. If it's off, go back and tighten the files.

---

## Step 5: Connect Your Command Channel (Optional but Recommended)

The real power is when your agent is always available — not just when you have a browser tab open.

**Telegram** (recommended):
```
openclaw connect telegram --token [your bot token]
```

Now you can message your agent from anywhere.

---

## Step 6: Set Up Your First Cron Job

Open `cron-examples.md` in this kit and pick the Morning Briefing template.

Set it up via your agent:
```
Set up a morning briefing cron. Every day at 8am EST, you should check email for anything urgent, 
review what's on my plate, and send me a 3-bullet summary in Telegram.
```

The agent will configure the cron. Confirm it looks right. Done.

---

## Step 7: Spawn a Worker Agent (Optional)

If you want to delegate background tasks while your main agent handles your direct requests:

```bash
# Create a second config
cp -r ~/.openclaw ~/.openclaw-worker
# Edit ~/.openclaw-worker/openclaw.json — change the gateway port to 18790
openclaw start --config ~/.openclaw-worker/openclaw.json
```

Update `delegate.sh` with your worker's gateway URL and token.

Test:
```bash
./delegate.sh "Write a 300-word summary of what OpenClaw is and why it matters for solo founders."
```

---

## What to Do in Week 1

1. Run the agent daily — treat every interaction as training data for yourself
2. Add to MEMORY.md every time you tell the agent something important
3. Set up at least 2 crons (morning briefing + one content/ops task)
4. Build one workflow from the `workflows/` folder
5. At the end of the week: ask the agent "What should we do differently next week?"

---

## Common Mistakes

**"The agent keeps asking for permission on things I already said it can do."**
→ Add it explicitly to `AGENTS.md` under "Autonomous Within Bounds"

**"The agent's voice sounds generic."**
→ Your `SOUL.md` needs more specifics. Add 3 things the agent should never say.

**"The agent forgets things between sessions."**
→ Add important facts to `MEMORY.md`, not just to the chat. Chat compacts; MEMORY.md persists.

**"The cron ran but I didn't get an update."**
→ Check that `delivery.mode` is set to `"announce"` in your cron config.

---

## Support

Questions: jack@jackmini.com  
More guides: jackmini.com/blog  
Get the full 12-chapter guide: jackmini.com
