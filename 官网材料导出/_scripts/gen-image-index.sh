#!/usr/bin/env bash
# 生成 02-图片素材/README-素材索引与布局说明.md
set -euo pipefail

DST="${1:?用法: gen-image-index.sh <目标根目录>}"
BASE="$DST/02-图片素材"
OUT="$BASE/README-素材索引与布局说明.md"
today="$(date +%Y-%m-%d)"

count() { find "$1" -type f ! -name '._*' ! -name '.DS_Store' 2>/dev/null | wc -l | tr -d ' '; }
size()  { du -sh "$1" 2>/dev/null | cut -f1; }

{
cat <<'HEAD'
---
文档类型: 图片素材索引与布局说明
项目: 蓝辉轻改官网（lanhuiqinggai.com）
生成方式: 由 官网材料导出/_scripts/gen-image-index.sh 自动生成
HEAD
echo "生成日期: $today"
cat <<'HEAD'
---

# 图片素材索引与布局说明

> 本目录是官网 `public/images/` 的完整镜像，**按「页面归属 + 使用场景」重新分区**，而不是按源码目录平铺。
> 目的是让设计/运营能直接找到「改哪个页要换哪张图」，不必翻代码。

---

## 一、分区总览

| 分区 | 内容 | 张数 | 体积 | 对应页面 |
|---|---|---:|---:|---|
HEAD
for d in "$BASE"/*/; do
  n="$(basename "$d")"
  case "$n" in
    01-首页与品牌) page="首页 / 品牌介绍 / 全站页头页脚" ;;
    02-产品大类)   page="12 个产品大类页" ;;
    03-车型系列)   page="12 品牌系列页 + 19 车型详情页" ;;
    04-门店与社媒) page="门店网络 / 联系我们 / 社媒分享" ;;
    05-占位与图标) page="全站兜底与图标" ;;
    06-博客配图)   page="博客文章详情页" ;;
    *) page="—" ;;
  esac
  printf "| \`%s\` | %s | %s | %s | %s |\n" "$n" "" "$(count "$d")" "$(size "$d")" "$page"
done
echo "| **合计** | | **$(count "$BASE")** | **$(size "$BASE")** | |"
cat <<'HEAD'

---

## 二、命名与使用约定

1. **格式**：站内统一使用 **WebP**（体积约为同尺寸 JPG 的 30–50%），仅 Logo / 二维码 / OG 分享图保留 PNG。
2. **命名**：`<车型或产品>-<场景>-<序号>.webp`，如 `xy-04.webp`（小米 YU7 第 4 张）。带 `generated/` 子目录的是**从海报批量切片**导出的项目图。
3. **状态**：部分项目图为 `pending-review`（等品牌方审核），页面会降级为纯文字卡片 —— 补图后即自动显示。
4. **尺寸建议**：Hero 横图 ≥ 1920×1080；项目卡片图 4:3，≥ 1200×900；门店实景 ≥ 1600×1200。
5. **替换流程**：换图 → 保持文件名与路径不变 → 重新构建即可，无需改代码。

---

## 三、逐目录清单（自动生成）

> 路径为相对本目录。带 `generated/` 的是批量切片产物，数量多，按文件夹汇总展示。

HEAD
} > "$OUT"

# 逐分区展开
for d in "$BASE"/*/; do
  n="$(basename "$d")"
  echo "### $n" >> "$OUT"
  echo "" >> "$OUT"
  echo '```' >> "$OUT"
  find "$d" -type d ! -path "$d" | sort | while read -r sub; do
    rel="${sub#$BASE/}"
    cnt="$(count "$sub")"
    printf "%-52s %3s 张\n" "$rel/" "$cnt" >> "$OUT"
  done
  find "$d" -maxdepth 1 -type f ! -name '._*' ! -name '.DS_Store' | sort | while read -r f; do
    printf "%-52s %3s\n" "$(basename "$f")" "$(du -h "$f" | cut -f1)" >> "$OUT"
  done
  echo '```' >> "$OUT"
  echo "" >> "$OUT"
done

cat >> "$OUT" <<'TAIL'

---

## 四、素材 → 页面 对照速查

| 页面 | 用到的素材目录 |
|---|---|
| `/` 首页 | `01-首页与品牌/首页区块` |
| `/brand`、`/brand/history` | `01-首页与品牌/品牌与二维码`、`01-首页与品牌/Logo` |
| `/contact`、`/agent/**` | `04-门店与社媒/门店实景` |
| `/product/ppf` `/color-film` `/window-film` `/flooring` `/chassis` `/wheels` `/car-care` | `02-产品大类/00-产品主视觉-Hero` 及对应产品子目录 |
| `/product/electric-steps` | `02-产品大类/01-电动踏板` |
| `/product/floor-mats` | `02-产品大类/04-360软包脚垫` |
| `/product/tei-brake` `/tei-brake/[slug]` | `02-产品大类/07-TEI刹车卡钳` |
| `/product/car-tv` | `02-产品大类/08-车载电视` |
| `/product/<品牌>` 与 `/product/<品牌>/<车型>` | `03-车型系列/<品牌>/...` |
| `/blog/[slug]` | `06-博客配图/<文章 slug>` |
| 全站 OG / favicon / 兜底 | `01-首页与品牌/社媒与OG分享图`、`05-占位与图标` |

> 图片在每个页面里的**具体位置和用法**，见同级目录 `../01-页面说明/` 对应页面文档的「六、图片素材」章节。
TAIL

echo "✓ 已生成 $OUT（$(wc -l < "$OUT" | tr -d ' ') 行）"
