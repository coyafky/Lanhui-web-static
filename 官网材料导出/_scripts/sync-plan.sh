#!/usr/bin/env bash
# 复制当前文档体系，不再引用 2026-10-06 前的 docs/PRD 等旧路径。
set -euo pipefail
export COPYFILE_DISABLE=1
SRC="$(cd "$(dirname "$0")/../.." && pwd)"
DST="${1:?用法: sync-plan.sh <快照根目录>}"
BASE="$DST/03-官网计划与日志"
copy_dir() {
  local source="$1" target="$2"
  [ -d "$SRC/$source" ] || return 0
  mkdir -p "$BASE/$target"
  rsync -a --exclude '.DS_Store' --exclude '._*' "$SRC/$source/" "$BASE/$target/"
}
copy_dir rules '01-当前规则/rules'
copy_dir adr '02-架构决策/adr'
copy_dir specs/active '03-当前规格与验收/specs-active'
copy_dir specs/archive '04-历史规格与报告/specs-archive'
copy_dir work '05-协作与发布记录/work'
copy_dir runs '06-运行记录/runs'
mkdir -p "$BASE/00-项目入口"
for file in AGENTS.md DOCUMENTATION.md DESIGN.md README.md TODO.md package.json next.config.ts tsconfig.json; do
  [ -f "$SRC/$file" ] && cp "$SRC/$file" "$BASE/00-项目入口/"
done
printf '当前文档体系已复制：%s\n' "$BASE"
