#!/usr/bin/env bash
# 蓝辉轻改 GEO 全站诊断一键脚本
# 用法: bash run_diagnose.sh [--url <URL>] [--max-pages N] [--render http|auto|browser]
set -euo pipefail

WS="${LANHUI_WS:-/Users/fkycoya/Documents/Code/Lanhui-web-static}"
URL="${URL:-https://lanhuiqinggai.com}"
MAX_PAGES=10
RENDER=http

while [[ $# -gt 0 ]]; do
  case "$1" in
    --url) URL="$2"; shift 2;;
    --max-pages) MAX_PAGES="$2"; shift 2;;
    --render) RENDER="$2"; shift 2;;
    *) echo "未知参数: $1"; exit 2;;
  esac
done

HUB="$WS/geo-seo-hub/.venv/bin/geo-seo-hub"
OUT="$WS/runs"

if [[ ! -x "$HUB" ]]; then
  echo "❌ 未找到 geo-seo-hub 引擎: $HUB"
  echo "   请先部署 GEOHub 到 $WS/geo-seo-hub 并建 venv 安装。"
  exit 1
fi

echo "🔍 蓝辉轻改 GEO 全站诊断"
echo "   URL      : $URL"
echo "   Locale   : zh-CN"
echo "   Max pages: $MAX_PAGES"
echo "   Render   : $RENDER"
echo "   Output   : $OUT"
echo ""

"$HUB" site-diagnose \
  --url "$URL" \
  --output "$OUT" \
  --locale zh-CN \
  --max-pages "$MAX_PAGES" \
  --render "$RENDER"

RUNDIR=$(ls -dt "$OUT"/run-* 2>/dev/null | head -1)
echo ""
echo "✅ 诊断完成: $RUNDIR"
[[ -f "$RUNDIR/report.html" ]] && echo "📊 报告: $RUNDIR/report.html"
[[ -f "$RUNDIR/site-diagnosis.json" ]] && echo "📄 评分: python3 -c \"import json;print(json.load(open('$RUNDIR/site-diagnosis.json'))['overall_score'])\""
