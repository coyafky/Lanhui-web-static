#!/usr/bin/env bash
# =============================================================================
# lanhui-static — atomic deploy script
# =============================================================================
# Usage:
#   bash ops/deploy/deploy.sh <path-to-out-dir>
#   bash ops/deploy/deploy.sh out/                # deploy local build
#   bash ops/deploy/deploy.sh /tmp/lanhui-release/ # deploy CI artifact
#
# Prerequisites on the server:
#   - Nginx installed and running
#   - /var/www/lanhui/ directory with write permission
#   - This script run as root or a user with sudo nginx reload rights
#
# Directory layout:
#   /var/www/lanhui/
#   ├── releases/
#   │   ├── 20260719-120000/
#   │   └── 20260719-150000/
#   └── current -> releases/20260719-150000/
# =============================================================================

set -euo pipefail

# ---- Config ----
SITE_ROOT="/var/www/lanhui"
RELEASES_DIR="${SITE_ROOT}/releases"
CURRENT_LINK="${SITE_ROOT}/current"
REQUIRED_FILES=("index.html" "404.html" "robots.txt" "sitemap.xml")

# ---- Colors ----
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log()  { echo -e "${GREEN}[deploy]${NC} $1"; }
warn() { echo -e "${YELLOW}[deploy]${NC} $1"; }
err()  { echo -e "${RED}[deploy]${NC} $1"; }

# ---- Arg check ----
if [ $# -lt 1 ]; then
    err "Usage: $0 <path-to-out-dir>"
    exit 1
fi

ARTIFACT_DIR="$1"
if [ ! -d "$ARTIFACT_DIR" ]; then
    err "Artifact directory not found: $ARTIFACT_DIR"
    exit 1
fi

# ---- Verify artifact ----
log "Verifying artifact in $ARTIFACT_DIR ..."
for f in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "${ARTIFACT_DIR}/${f}" ]; then
        err "Missing required file: ${f}"
        exit 1
    fi
done
log "All required files present."

# ---- Create release directory ----
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
RELEASE_DIR="${RELEASES_DIR}/${TIMESTAMP}"

mkdir -p "${RELEASES_DIR}"
cp -r "${ARTIFACT_DIR}" "${RELEASE_DIR}"
log "Release copied to ${RELEASE_DIR}"

# ---- Atomic symlink switch ----
if [ -L "${CURRENT_LINK}" ]; then
    OLD_TARGET=$(readlink "${CURRENT_LINK}")
    log "Current release: ${OLD_TARGET}"
else
    log "No existing current symlink (first deploy)."
fi

ln -sfn "${RELEASE_DIR}" "${CURRENT_LINK}"
log "Symlink updated: current -> ${RELEASE_DIR}"

# ---- Nginx reload ----
log "Testing Nginx configuration..."
if nginx -t 2>&1; then
    log "Nginx config OK."
else
    err "Nginx config test FAILED. Rolling back symlink."
    if [ -n "${OLD_TARGET:-}" ]; then
        ln -sfn "${OLD_TARGET}" "${CURRENT_LINK}"
        log "Symlink restored to ${OLD_TARGET}"
    fi
    exit 1
fi

nginx -s reload
log "Nginx reloaded."

# ---- Smoke test ----
log "Running smoke tests..."
SCHEME="http"
BASE_URL="${SCHEME}://localhost"

SMOKE_URLS=(
    "/"
    "/product/"
    "/brand/"
    "/contact/"
    "/404.html"
    "/robots.txt"
    "/sitemap.xml"
)

FAILURES=0
for path in "${SMOKE_URLS[@]}"; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" -H "Host: lanhui.example.com" "${BASE_URL}${path}" || echo "000")
    if [ "$STATUS" = "200" ] || { [ "$path" = "/404.html" ] && [ "$STATUS" = "200" ]; }; then
        log "  OK  ${path} → ${STATUS}"
    else
        err "  FAIL ${path} → ${STATUS}"
        FAILURES=$((FAILURES + 1))
    fi
done

if [ $FAILURES -gt 0 ]; then
    err "${FAILURES} smoke test(s) failed."
    warn "Site is live but some URLs returned unexpected status codes."
else
    log "All smoke tests passed."
fi

log "Deploy complete: ${TIMESTAMP}"
echo ""
echo "Rollback command: bash ops/deploy/rollback.sh"
