#!/usr/bin/env bash
set -euo pipefail
DST="${1:?用法: gen-image-index.sh <快照根目录>}"
BASE="$DST/02-图片素材/public/images"
OUT="$DST/02-图片素材/README-图片索引.md"
[ -d "$BASE" ] || { echo "缺少图片镜像：$BASE" >&2; exit 1; }
{
  echo '# 图片索引'
  echo
  echo '> 导出自 `public/images/`，保持原路径；图片具体对应页面须按当前源码引用核对。授权原件、供应商素材与 QA 截图不在本目录。'
  echo
  echo '| 源码目录 | 文件数 |'
  echo '|---|---:|'
  for dir in "$BASE"/*/; do
    [ -d "$dir" ] || continue
    name="$(basename "$dir")"
    count="$(find "$dir" -type f ! -name '._*' ! -name '.DS_Store' | wc -l | tr -d ' ')"
    printf '| `public/images/%s/` | %s |\n' "$name" "$count"
  done
  total="$(find "$BASE" -type f ! -name '._*' ! -name '.DS_Store' | wc -l | tr -d ' ')"
  printf '| **合计** | **%s** |\n' "$total"
  echo
  echo '换图时先查页面引用、图片授权、alt 与尺寸；保持原路径仍需重新构建并验证页面。旧文件是否可清理要由引用检查决定。'
} > "$OUT"
printf '已生成图片索引：%s\n' "$OUT"
