#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/trend-detal"
REPO_URL="https://github.com/agil2406n/trend-detal.git"

if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR"
  git pull --ff-only
else
  mkdir -p "$(dirname "$APP_DIR")"
  git clone "$REPO_URL" "$APP_DIR"
fi

chown -R www-data:www-data "$APP_DIR"
nginx -t
systemctl reload nginx
