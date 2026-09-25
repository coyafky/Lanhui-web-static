#!/usr/bin/env bash
# 蓝辉轻改官网材料库 —— 一键同步（模块 ①②③④）
# 用法: bash _scripts/sync-all.sh [目标根目录]
#   默认目标: /Volumes/usb/蓝辉轻改资料库/官网材料
set -euo pipefail

export COPYFILE_DISABLE=1
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
DEST="${1:-/Volumes/usb/蓝辉轻改资料库/官网材料}"

echo "═══════════════════════════════════════════"
echo " 蓝辉轻改 · 官网材料库 同步"
echo " 源 → $ROOT"
echo " 目标 → $DEST"
echo "═══════════════════════════════════════════"

[ -d "$DEST" ] || { echo "✗ 目标目录不存在: $DEST"; exit 1; }

echo
echo "【模块④】网站架构与说明"
mkdir -p "$DEST/00-网站架构与说明"
rsync -a --exclude '.DS_Store' --exclude '._*' "$ROOT/00-网站架构与说明/" "$DEST/00-网站架构与说明/"
echo "  ✓ $(find "$DEST/00-网站架构与说明" -name '*.md' | wc -l | tr -d ' ') 篇"

echo
echo "【模块①】逐页说明"
mkdir -p "$DEST/01-页面说明"
rsync -a --exclude '.DS_Store' --exclude '._*' "$ROOT/01-页面说明/" "$DEST/01-页面说明/"
echo "  ✓ $(find "$DEST/01-页面说明" -name '*.md' | wc -l | tr -d ' ') 篇"

echo
echo "【模块②】图片素材"
bash "$HERE/sync-images.sh" "$DEST"
bash "$HERE/gen-image-index.sh" "$DEST"

echo
echo "【模块③】计划与日志"
bash "$HERE/sync-plan.sh" "$DEST"
bash "$HERE/gen-plan-index.sh" "$DEST"

echo
echo "【清理 macOS 元数据】"
find "$DEST" -name '._*' -type f -delete 2>/dev/null || true
find "$DEST" -name '.DS_Store' -type f -delete 2>/dev/null || true
echo "  ✓ 完成"

echo
echo "═══════════════════════════════════════════"
echo " ✓ 全部完成"
echo " 文件总数: $(find "$DEST" -type f ! -name '._*' | wc -l | tr -d ' ')"
echo " 总体积  : $(du -sh "$DEST" | cut -f1)"
echo "═══════════════════════════════════════════"
