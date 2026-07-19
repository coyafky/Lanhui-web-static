#!/usr/bin/env bash
# =============================================================================
# lanhui-static — atomic rollback script
# =============================================================================
# Usage:
#   bash ops/deploy/rollback.sh           # rollback to previous release
#   bash ops/deploy/rollback.sh <release> # rollback to specific release
#   bash ops/deploy/rollback.sh --list    # list available releases
#
# Prerequisites:
#   - Deploy script has been run at least once
#   - /var/www/lanhui/releases/ contains at least one release
# =============================================================================

set -euo pipefail

SITE_ROOT="/var/www/lanhui"
RELEASES_DIR="${SITE_ROOT}/releases"
CURRENT_LINK="${SITE_ROOT}/current"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log()  { echo -e "${GREEN}[rollback]${NC} $1"; }
warn() { echo -e "${YELLOW}[rollback]${NC} $1"; }
err()  { echo -e "${RED}[rollback]${NC} $1"; }

# ---- List releases ----
list_releases() {
    if [ ! -d "${RELEASES_DIR}" ]; then
        err "No releases directory found at ${RELEASES_DIR}"
        exit 1
    fi

    CURRENT_TARGET=""
    if [ -L "${CURRENT_LINK}" ]; then
        CURRENT_TARGET=$(readlink "${CURRENT_LINK}")
    fi

    echo "Available releases:"
    echo "-------------------"
    for dir in $(ls -1t "${RELEASES_DIR}"); do
        MARKER=""
        if [ "${RELEASES_DIR}/${dir}" = "${CURRENT_TARGET}" ]; then
            MARKER=" <-- CURRENT"
        fi
        echo "  ${dir}${MARKER}"
    done
}

# ---- Resolve target release ----
resolve_target() {
    if [ ! -d "${RELEASES_DIR}" ]; then
        err "No releases directory found at ${RELEASES_DIR}"
        exit 1
    fi

    if [ ! -L "${CURRENT_LINK}" ]; then
        err "No current symlink — nothing to roll back from."
        exit 1
    fi

    CURRENT_TARGET=$(readlink "${CURRENT_LINK}")
    CURRENT_NAME=$(basename "${CURRENT_TARGET}")

    # Collect sorted releases (newest first)
    RELEASES=($(ls -1t "${RELEASES_DIR}"))

    if [ ${#RELEASES[@]} -lt 2 ]; then
        err "Only one release exists — nothing to roll back to."
        exit 1
    fi

    # Find previous release (the one before current)
    PREV_RELEASE=""
    for rel in "${RELEASES[@]}"; do
        if [ "$rel" != "$CURRENT_NAME" ]; then
            PREV_RELEASE="$rel"
            break
        fi
    done

    if [ -z "$PREV_RELEASE" ]; then
        err "Could not determine previous release."
        exit 1
    fi

    echo "${RELEASES_DIR}/${PREV_RELEASE}"
}

# ---- Main ----
case "${1:-}" in
    --list|-l)
        list_releases
        exit 0
        ;;
esac

if [ $# -ge 1 ]; then
    # Explicit release specified
    TARGET="${RELEASES_DIR}/$1"
    if [ ! -d "$TARGET" ]; then
        err "Release not found: $1"
        echo ""
        list_releases
        exit 1
    fi
else
    # Auto-detect previous release
    TARGET=$(resolve_target)
fi

log "Rolling back to: $(basename "${TARGET}")"

# Verify target has required files
for f in index.html 404.html; do
    if [ ! -f "${TARGET}/${f}" ]; then
        err "Release missing required file: ${f}"
        exit 1
    fi
done

# Switch symlink
ln -sfn "${TARGET}" "${CURRENT_LINK}"
log "Symlink updated: current -> ${TARGET}"

# Nginx reload
log "Testing Nginx configuration..."
if nginx -t 2>&1; then
    log "Nginx config OK."
else
    err "Nginx config test FAILED."
    exit 1
fi

nginx -s reload
log "Nginx reloaded. Rollback complete."
