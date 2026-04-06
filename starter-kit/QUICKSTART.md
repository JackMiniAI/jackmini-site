# QUICKSTART — Working Agent in One Afternoon

**Time required:** 2-4 hours  
**What you'll have at the end:** An AI agent that knows your business, can act autonomously within bounds you define, and runs on a schedule.

Find your operating system below and follow that section top to bottom.

- [macOS / Linux](#macos--linux)
- [Windows](#windows)

---

## macOS / Linux

### Prerequisites
- Node.js 22+
- An Anthropic or OpenAI API key (or Ollama for local models)
- Homebrew installed (macOS only — get it at brew.sh)

### Step 1: Install OpenClaw

**macOS:**
```bash
brew install openclaw
```

**Linux:**
```bash
npm install -g openclaw@latest
```

Then run:
```bash
openclaw onboard
openclaw gateway start
```

### Step 2: Configure Your Model

OpenClaw will prompt you during `openclaw onboard`. To change it later:

```bash
openclaw config set llm.provider anthropic
openclaw config set llm.api_key sk-ant-...
openclaw config set llm.model claude-opus-4-5
```

For local models via Ollama (no API key needed):
```bash
openclaw config set llm.provider ollama
openclaw config set llm.baseUrl http://127.0.0.1:11434
openclaw config set llm.model qwen3:14b
```

### Step 3: Set Up Your Workspace Files

Copy the template files from this kit into your workspace:

```bash
cp SOUL.md IDENTITY.md MEMORY.md AGENTS.md TOOLS.md USER.md ~/.openclaw/workspace/
```

Fill in every `[bracket]` in each file. This takes 20-30 minutes and is the most important step.

**Do not skip this.** An agent with no identity files is a generic chatbot. An agent with filled-in identity files is a collaborator that knows your business.

### Step 4: Start Your First Session

```bash
openclaw gateway start
```

Send this as your first message:
```
Read SOUL.md, IDENTITY.md, MEMORY.md, AGENTS.md, TOOLS.md, and USER.md.
Confirm you understand your role and give me a one-paragraph summary of who you are and what you're here to do.
```

If the summary sounds right, you're set. If it's off, go back and tighten the files.

### Step 5: Connect Telegram (Optional but Recommended)

The real power is when your agent is always available - not just when you have a terminal open.

Get a Telegram bot token from @BotFather, then:
```bash
openclaw connect telegram --token [your bot token]
```

Now you can message your agent from your phone.

### Step 6: Set Your First Cron

Open `cron-examples.md` from this kit and pick the Morning Briefing template. Then tell your agent:

```
Set up a morning briefing cron. Every day at 8am, check email for anything urgent,
review what's on my plate, and send me a 3-bullet summary in Telegram.
```

The agent will configure it. Confirm it looks right.

### Step 7: Delegate a Background Task (Optional)

Use the included `delegate.sh` to hand off tasks to a worker agent while your main agent handles direct requests:

```bash
./delegate.sh "Research the top 5 competitors in [your market] and summarize their pricing."
```

Update the gateway URL and token in `delegate.sh` to match your setup before using it.

---

## Windows

Windows supports two install methods. **WSL2 is recommended** for stability and full skill compatibility. Native PowerShell works but has more friction.

### Prerequisites
- Windows 10 (version 2004+) or Windows 11
- Node.js 22+ (download at nodejs.org)
- An Anthropic or OpenAI API key (or Ollama for local models)
- Admin access

### Step 1: Install OpenClaw

**Option A — Native PowerShell (faster to set up)**

Open PowerShell as Administrator:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install -g openclaw@latest
openclaw onboard
openclaw gateway start
```

**Option B — WSL2 (recommended for stability)**

Open PowerShell as Administrator and install WSL2, then restart your machine:

```powershell
wsl --install
```

After restart, open the Ubuntu terminal and run:

```bash
# Enable systemd (for persistent gateway)
sudo nano /etc/wsl.conf
```

Add these two lines, save, then run `wsl --shutdown` in PowerShell and reopen Ubuntu:
```
[boot]
systemd=true
```

Then install Node.js and OpenClaw:
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

Note: Apple-specific skills (Notes, iMessage, Reminders, Calendar) do not work on Windows. Everything else — Telegram, web, file operations, Gmail, GitHub, social tools — works identically.

### Step 2: Configure Your Model

OpenClaw will prompt you during `openclaw onboard`. To change it later:

```bash
openclaw config set llm.provider anthropic
openclaw config set llm.api_key sk-ant-...
openclaw config set llm.model claude-opus-4-5
```

For local models via Ollama:
```bash
openclaw config set llm.provider ollama
openclaw config set llm.baseUrl http://127.0.0.1:11434
openclaw config set llm.model qwen3:14b
```

### Step 3: Set Up Your Workspace Files

Copy the template files from this kit into your workspace. In PowerShell:

```powershell
Copy-Item SOUL.md, IDENTITY.md, MEMORY.md, AGENTS.md, TOOLS.md, USER.md $env:USERPROFILE\.openclaw\workspace\
```

Or in WSL2/bash:
```bash
cp SOUL.md IDENTITY.md MEMORY.md AGENTS.md TOOLS.md USER.md ~/.openclaw/workspace/
```

Fill in every `[bracket]` in each file. This takes 20-30 minutes and is the most important step.

**Do not skip this.** An agent with no identity files is a generic chatbot. An agent with filled-in identity files is a collaborator that knows your business.

### Step 4: Start Your First Session

```bash
openclaw gateway start
```

Send this as your first message:
```
Read SOUL.md, IDENTITY.md, MEMORY.md, AGENTS.md, TOOLS.md, and USER.md.
Confirm you understand your role and give me a one-paragraph summary of who you are and what you're here to do.
```

If the summary sounds right, you're set. If it's off, go back and tighten the files.

### Step 5: Connect Telegram (Optional but Recommended)

Get a Telegram bot token from @BotFather, then:
```bash
openclaw connect telegram --token [your bot token]
```

Now you can message your agent from your phone.

### Step 6: Set Your First Cron

Open `cron-examples.md` from this kit and pick the Morning Briefing template. Then tell your agent:

```
Set up a morning briefing cron. Every day at 8am, check email for anything urgent,
review what's on my plate, and send me a 3-bullet summary in Telegram.
```

The agent will configure it. Confirm it looks right.

### Step 7: Delegate a Background Task (Optional)

Use the included `delegate.sh` to hand off tasks to a worker agent:

```bash
./delegate.sh "Research the top 5 competitors in [your market] and summarize their pricing."
```

Update the gateway URL and token in `delegate.sh` to match your setup before using it. On Windows, run this from WSL2 or Git Bash.

---

## What to Do in Week 1

1. Run the agent daily - treat every interaction as training data for yourself
2. Add to MEMORY.md every time you tell the agent something important
3. Set up at least 2 crons (morning briefing + one content/ops task)
4. Build one workflow from the `workflows/` folder
5. At the end of the week: ask the agent "What should we do differently next week?"

---

## Common Mistakes

**"The agent keeps asking for permission on things I already said it can do."**
- Add it explicitly to `AGENTS.md` under "Autonomous Within Bounds"

**"The agent's voice sounds generic."**
- Your `SOUL.md` needs more specifics. Add 3 things the agent should never say.

**"The agent forgets things between sessions."**
- Add important facts to `MEMORY.md`, not just to the chat. Chat compacts; MEMORY.md persists.

**"The cron ran but I didn't get an update."**
- Check that `delivery.mode` is set to `"announce"` in your cron config.

**"delegate.sh isn't working on Windows."**
- Run it from WSL2 or Git Bash, not from PowerShell.

---

## Support

Questions: jack@jackmini.com  
More guides: jackmini.com/blog  
Get the full 13-chapter guide: jackmini.com
