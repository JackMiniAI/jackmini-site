#!/usr/bin/env bash
# delegate.sh — Send a scoped task to a worker agent
# Usage: ./delegate.sh "Write a 500-word blog post about X for Y audience. End with CTA to [link]."
#
# Prerequisites:
#   - A second OpenClaw instance running (worker gateway)
#   - openclaw CLI installed and authenticated
#   - WORKER_TOKEN set in environment or replace inline below
#
# Setup:
#   1. Start your worker: openclaw start --config ~/.openclaw-worker/openclaw.json
#   2. Set your worker gateway URL and token below
#   3. chmod +x delegate.sh

WORKER_GATEWAY="ws://127.0.0.1:18790"   # Replace with your worker gateway URL
WORKER_TOKEN="${WORKER_TOKEN:-your-worker-token-here}"   # Set WORKER_TOKEN env var or replace

if [ -z "$1" ]; then
  echo "Usage: $0 \"Your task description here\""
  exit 1
fi

TASK="$1"

# Send task to worker via openclaw CLI
openclaw send \
  --gateway "$WORKER_GATEWAY" \
  --token "$WORKER_TOKEN" \
  --message "$TASK"

echo "Task delegated to worker: $TASK"
