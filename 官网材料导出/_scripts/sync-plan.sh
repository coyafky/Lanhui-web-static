#!/usr/bin/env bash
# 蓝辉轻改官网 —— 计划/日志/规划 归档脚本（可重复执行）
# 用法: bash _scripts/sync-plan.sh <目标根目录>
set -euo pipefail

export COPYFILE_DISABLE=1
SRC="$(cd "$(dirname "$0")/../.." && pwd)"
DST="${1:?用法: sync-plan.sh <目标根目录>}"
BASE="$DST/03-官网计划与日志"

r() {  # r <源相对路径> <目标子目录>
  local s="$SRC/$1" d="$BASE/$2"
  [ -e "$s" ] || { echo "  ⚠ 跳过(不存在): $1"; return 0; }
  mkdir -p "$d"
  if [ -d "$s" ]; then
    rsync -a --exclude '.DS_Store' --exclude '._*' "$s/" "$d/"
  else
    rsync -a --exclude '.DS_Store' --exclude '._*' "$s" "$d/"
  fi
  printf "  ✓ %-34s → %s\n" "$1" "$2"
}

echo "▶ 规划与规格"
r docs/PRD            "01-PRD"
r docs/SPEC           "02-SPEC"
r docs/plans          "03-实施计划"
r skill-plan          "03-实施计划/技能方案"

echo "▶ 审计与测试"
r docs/audits         "04-审计报告"
r docs/test-reports   "05-测试报告"
r docs/design-reviews "06-设计评审"

echo "▶ 部署运维与调研"
r docs/deployment     "07-部署与运维/部署方案"
r docs/ops            "07-部署与运维/服务器运维"
r docs/research       "08-调研"

echo "▶ 运行记录"
r runs                "09-运行记录-runs"

echo "▶ 项目根文档"
mkdir -p "$BASE/10-项目根文档"
for f in README.md AGENTS.md CLAUDE.md package.json next.config.ts tsconfig.json \
         vitest.config.ts playwright.config.ts postcss.config.mjs; do
  [ -f "$SRC/$f" ] && cp "$SRC/$f" "$BASE/10-项目根文档/" && echo "  ✓ $f"
done
mkdir -p "$BASE/10-项目根文档/ops"
[ -d "$SRC/ops" ] && rsync -a --exclude '.DS_Store' --exclude '._*' "$SRC/ops/" "$BASE/10-项目根文档/ops/"

echo "▶ docs 根级其余"
mkdir -p "$BASE/_docs根级其余"
find "$SRC/docs" -maxdepth 1 -type f ! -name '._*' ! -name '.DS_Store' -exec cp {} "$BASE/_docs根级其余/" \;

echo "▶ GEO/SEO 工具仓（仅文档与报告）"
rm -rf "$BASE/_geo-seo-hub-文档与报告"
mkdir -p "$BASE/_geo-seo-hub-文档与报告"
for sub in docs reports; do
  [ -d "$SRC/geo-seo-hub/$sub" ] && rsync -a --exclude '.DS_Store' --exclude '._*' \
    "$SRC/geo-seo-hub/$sub/" "$BASE/_geo-seo-hub-文档与报告/$sub/"
done
[ -f "$SRC/geo-seo-hub/README.md" ] && cp "$SRC/geo-seo-hub/README.md" "$BASE/_geo-seo-hub-文档与报告/"
find "$SRC/geo-seo-hub/skills" -name '*.md' ! -name '._*' 2>/dev/null | while read -r f; do
  rel="${f#$SRC/geo-seo-hub/}"
  mkdir -p "$BASE/_geo-seo-hub-文档与报告/skills/$(dirname "$rel")"
  cp "$f" "$BASE/_geo-seo-hub-文档与报告/skills/$rel"
done

echo "▶ 官网专用技能包"
r skills "技能包-lanhui-geo-site-diagnose"

echo "▶ 清理 macOS 元数据"
find "$BASE" -name '._*' -type f -delete 2>/dev/null || true
find "$BASE" -name '.DS_Store' -type f -delete 2>/dev/null || true

echo "✓ 完成 → $BASE（$(find "$BASE" -type f | wc -l | tr -d ' ') 个文件, $(du -sh "$BASE" | cut -f1)）"
