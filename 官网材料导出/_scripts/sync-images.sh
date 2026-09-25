#!/usr/bin/env bash
# 蓝辉轻改官网 —— 图片素材归档脚本（可重复执行）
# 用法: bash _scripts/sync-images.sh <目标根目录>
set -euo pipefail

PUB="$(cd "$(dirname "$0")/../.." && pwd)/public"
SRC="$PUB/images"
DST="${1:?用法: sync-images.sh <目标根目录>}"
DEST="$DST/02-图片素材"

copy() {  # copy <源相对路径(相对 public/images，前缀 @ 则相对 public)> <目标相对路径>
  local rel="$1"
  local s d
  case "$rel" in
    @*) s="$PUB/${rel#@}" ;;
    *)  s="$SRC/$rel" ;;
  esac
  d="$DEST/$2"
  [ -e "$s" ] || { echo "  ⚠ 跳过(不存在): $1"; return 0; }
  mkdir -p "$d"
  if [ -d "$s" ]; then
    rsync -a --exclude '.DS_Store' --exclude '._*' "$s/" "$d/"
  else
    rsync -a --exclude '.DS_Store' --exclude '._*' "$s" "$d/"
  fi
  printf "  ✓ %-46s → %s\n" "$1" "$2"
}

echo "▶ 01-首页与品牌"
copy home             "01-首页与品牌/首页区块"
copy brand            "01-首页与品牌/品牌与二维码"
copy logo             "01-首页与品牌/Logo"
copy social           "01-首页与品牌/社媒与OG分享图"

echo "▶ 02-产品大类"
copy producthero      "02-产品大类/00-产品主视觉-Hero"
copy products/Taban   "02-产品大类/01-电动踏板"
copy products/wheel   "02-产品大类/02-轮毂升级"
copy products/dipan   "02-产品大类/03-底盘护板"
copy product/chassis  "02-产品大类/03-底盘护板/产品实拍"
copy products/carmat  "02-产品大类/04-360软包脚垫"
copy products/flooring "02-产品大类/05-汽车地板"
copy products/window-film "02-产品大类/06-汽车窗膜"
copy products/tei     "02-产品大类/07-TEI刹车卡钳"
copy product/car-tv   "02-产品大类/08-车载电视"

echo "▶ 03-车型系列"
copy products/li-auto       "03-车型系列/理想"
copy products/wenjie        "03-车型系列/问界"
copy products/xiaomi        "03-车型系列/小米"
copy products/zeekr         "03-车型系列/极氪/00-通用"
copy products/zeekr-8x      "03-车型系列/极氪/8X"
copy products/zeekr-9x      "03-车型系列/极氪/9X"
copy products/nio-es8       "03-车型系列/蔚来/ES8"
copy products/xpeng-gx      "03-车型系列/小鹏/GX"
copy products/zhijie-v9     "03-车型系列/智界/V9"
copy products/voyah-dreamer "03-车型系列/岚图/梦想家"
copy products/denza-d9      "03-车型系列/腾势/D9"
copy products/gaoshan-8     "03-车型系列/魏牌高山/8"
copy products/ledao-l90     "03-车型系列/乐道/L90"
copy products/tesla         "03-车型系列/特斯拉"
copy products/subaru        "03-车型系列/斯巴鲁"

echo "▶ 04-门店与社媒"
copy stores       "04-门店与社媒/门店实景"

echo "▶ 05-占位与图标"
copy placeholders "05-占位与图标/占位图"
copy @favicon     "05-占位与图标/favicon"

echo "▶ 06-博客配图"
copy blog         "06-博客配图"

echo "✓ 完成 → $DEST"
