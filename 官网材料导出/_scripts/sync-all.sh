#!/usr/bin/env bash
# 导出一份当前资料快照到新目录；不覆盖已有交接资料。
# 用法: bash 官网材料导出/_scripts/sync-all.sh /绝对路径/新目录
set -euo pipefail
export COPYFILE_DISABLE=1
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
DEST="${1:?用法: sync-all.sh /绝对路径/新目录（必须不存在或为空）}"
case "$DEST" in /*) ;; *) echo "目标必须是绝对路径" >&2; exit 2 ;; esac
if [ -e "$DEST" ] && [ -n "$(ls -A "$DEST")" ]; then
  echo "目标目录非空，请指定新的快照目录：$DEST" >&2
  exit 2
fi
mkdir -p "$DEST/00-网站架构与说明" "$DEST/01-页面说明"
rsync -a --exclude '.DS_Store' --exclude '._*' "$ROOT/00-网站架构与说明/" "$DEST/00-网站架构与说明/"
rsync -a --exclude '.DS_Store' --exclude '._*' "$ROOT/01-页面说明/" "$DEST/01-页面说明/"
bash "$HERE/sync-images.sh" "$DEST"
bash "$HERE/gen-image-index.sh" "$DEST"
bash "$HERE/sync-plan.sh" "$DEST"
bash "$HERE/gen-plan-index.sh" "$DEST"
cat > "$DEST/README-快照边界.md" <<'NOTE'
# 官网材料快照边界

本目录是导出时本地工作区的材料副本，可能含未提交改动；它不是线上网站备份，也不是发布产物。`00-网站架构与说明/` 为当前整理的交接入口；`01-页面说明/` 含历史逐页资料，先读其 README；`02-图片素材/public/images/` 保留网站源路径；`03-官网计划与日志/` 含当前规则及历史/运行记录，按文件日期与状态使用。

导出脚本不会复制 `.env*`、`out/`、`.next/`、`node_modules/`，也不会发布网站。请把导出日期、Git 版本、本地变更状态和线上发布版本另行记录在交接清单中。
NOTE
printf '完成：%s\n文件数：%s\n' "$DEST" "$(find "$DEST" -type f | wc -l | tr -d ' ')"
