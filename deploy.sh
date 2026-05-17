#!/bin/bash
# Deploy script — build static site & rsync ke VM
#
# Usage:
#   ./deploy.sh
#
# Required env vars (set di .env atau export sebelum jalanin):
#   DEPLOY_USER  — SSH user (default: ubuntu)
#   DEPLOY_HOST  — VM IP atau hostname (required)
#   DEPLOY_PATH  — Target path di VM (default: /var/www/botfood)

set -e

DEPLOY_USER="${DEPLOY_USER:-ubuntu}"
DEPLOY_HOST="${DEPLOY_HOST:?DEPLOY_HOST is required (e.g. export DEPLOY_HOST=your-vm-ip)}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/botfood}"

echo "═══════════════════════════════════════════════════"
echo "  Botfood Landing Page — Deploy"
echo "═══════════════════════════════════════════════════"
echo "  Target: $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH"
echo ""

echo "→ Installing dependencies (if needed)..."
npm install --silent

echo "→ Building static site..."
npm run generate

echo "→ Uploading via rsync..."
rsync -avz --delete \
  --exclude='.DS_Store' \
  .output/public/ \
  "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/"

echo ""
echo "✅ Deployed! Site live at https://botfood.id"
