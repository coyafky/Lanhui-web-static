#!/usr/bin/env bash
# 完整镜像 public/images，保留源码相对路径；只用于新快照目录。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
DST="${1:?用法: sync-images.sh <快照根目录>}"
mkdir -p "$DST/02-图片素材/public/images"
rsync -a --exclude '.DS_Store' --exclude '._*' "$ROOT/public/images/" "$DST/02-图片素材/public/images/"
if [ -d "$ROOT/public/favicon" ]; then
  mkdir -p "$DST/02-图片素材/public/favicon"
  rsync -a --exclude '.DS_Store' --exclude '._*' "$ROOT/public/favicon/" "$DST/02-图片素材/public/favicon/"
fi
printf '图片镜像完成：%s\n' "$DST/02-图片素材/public/images"
