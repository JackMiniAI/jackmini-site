#!/bin/bash
# run-workflow.sh — Run any SEO kit workflow via OpenClaw agent
# Usage: ./run-workflow.sh <workflow-number>
# Example: ./run-workflow.sh 1

WORKFLOW_NUM="$1"
KIT_DIR="$(dirname "$(dirname "$0")")"
CONTEXT_FILE="$KIT_DIR/templates/business-context.md"
WORKFLOW_FILE="$KIT_DIR/workflows/workflow-$(printf '%02d' $WORKFLOW_NUM).md"

if [ -z "$WORKFLOW_NUM" ]; then
  echo "Usage: $0 <workflow-number> (1-8)"
  exit 1
fi

if [ ! -f "$WORKFLOW_FILE" ]; then
  echo "Workflow $WORKFLOW_NUM not found at $WORKFLOW_FILE"
  exit 1
fi

if [ ! -f "$CONTEXT_FILE" ]; then
  echo "Business context not found. Fill in templates/business-context.md first."
  exit 1
fi

TASK=$(cat << EOF
BUSINESS CONTEXT:
$(cat "$CONTEXT_FILE")

---

WORKFLOW TO RUN:
$(cat "$WORKFLOW_FILE")
EOF
)

echo "Running workflow $WORKFLOW_NUM..."
openclaw --profile dima agent --message "$TASK" --agent main 2>&1
