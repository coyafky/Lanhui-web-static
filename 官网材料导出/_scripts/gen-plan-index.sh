#!/usr/bin/env bash
# 生成 03-官网计划与日志/README-计划日志索引.md
set -euo pipefail

DST="${1:?用法: gen-plan-index.sh <目标根目录>}"
BASE="$DST/03-官网计划与日志"
OUT="$BASE/README-计划日志索引.md"
SRC="/Users/fkycoya/Documents/Code/Lanhui-web-static"
today="$(date +%Y-%m-%d)"

count() { find "$1" -type f ! -name '._*' ! -name '.DS_Store' 2>/dev/null | wc -l | tr -d ' '; }
size()  { du -sh "$1" 2>/dev/null | cut -f1; }
mds()   { find "$1" -name '*.md' ! -name '._*' 2>/dev/null | sort; }

cat > "$OUT" <<HEAD
---
文档类型: 官网计划 · 日志 · 记录 · 规划 索引
项目: 蓝辉轻改官网（lanhuiqinggai.com）
源目录: Lanhui-web-static/docs · runs · ops · 项目根文档
生成方式: 官网材料导出/_scripts/gen-plan-index.sh
生成日期: $today
---

# 官网计划 · 日志 · 规划 索引

> 本目录把项目里**散落在各处的规划文档、规格说明、审计报告、测试报告、部署运维资料、运行记录**集中归档，
> 按用途分 10 个区。所有文件均为**原样拷贝**（未改动一个字节），源路径写在下方对照表里。

---

## 一、分区总览

| 分区 | 内容 | 文件数 | 体积 | 原始来源 |
|---|---|---:|---:|---|
HEAD

for d in "$BASE"/*/; do
  n="$(basename "$d")"
  case "$n" in
    01-PRD)            desc="产品需求文档：主 PRD、公共站/产品/横切面 PRD、模板"; src="docs/PRD/" ;;
    02-SPEC)           desc="实现规格：逐页 SPEC、组件规格、数据模型、图片性能、测试体系"; src="docs/SPEC/" ;;
    03-实施计划)      desc="分主题实施计划：理想/问界/小米/特斯拉/蔚来等 + 技能方案"; src="docs/plans/ + skill-plan/" ;;
    04-审计报告)      desc="SEO 审计、品牌诊断、文案评审、ICP 合规、视觉审计、Lighthouse"; src="docs/audits/" ;;
    05-测试报告)      desc="按日期的功能/构建/图片验证报告 + 截图"; src="docs/test-reports/" ;;
    06-设计评审)      desc="视觉审计、框架表达审计、设计与提案、逐页评分表"; src="docs/design-reviews/" ;;
    07-部署与运维)    desc="部署方案、SEO URL 契约、搜索引擎提交手册、服务器运维"; src="docs/deployment/ + docs/ops/" ;;
    08-调研)          desc="外部技术调研（墨小贰等）、调研索引"; src="docs/research/" ;;
    09-运行记录-runs) desc="GEO/SEO 站点诊断运行产物：爬取清单、证据台账、整改 backlog、质量报告"; src="runs/" ;;
    10-项目根文档)    desc="README / AGENTS / CLAUDE 及构建配置文件快照"; src="项目根目录" ;;
    _docs根级其余)    desc="docs/ 根级散落文档（索引、报告等）"; src="docs/ 根级" ;;
    _geo-seo-hub-*)   desc="GEO/SEO 工具仓的文档、报告与技能说明（源码已剔除）"; src="geo-seo-hub/{docs,reports,skills}" ;;
    _技能包-*)        desc="官网专用诊断技能包 lanhui-geo-site-diagnose"; src="skills/" ;;
    *) desc="—"; src="—" ;;
  esac
  printf "| \`%s\` | %s | %s | %s | \`%s\` |\n" "$n" "$desc" "$(count "$d")" "$(size "$d")" "$src"
done

echo "| **合计** | | **$(count "$BASE")** | **$(size "$BASE")** | |" >> "$OUT"

cat >> "$OUT" <<'HEAD'

---

## 二、重点文档导航（建议先看这几篇）

| 想了解什么 | 看哪篇 |
|---|---|
| 整站产品设计总纲 | `01-PRD/00_MASTER_PRD.md` |
| 某个页面怎么实现的规格 | `02-SPEC/public-site/**`（与 `../01-页面说明/` 逐页文档一一对应） |
| 为什么要做 SEO/GEO 改造 | `04-审计报告/seo-audit-lanhui-20260808.md`、`04-审计报告/brand-diagnosis-lanhui-20260811.md` |
| URL 与 canonical 规范 | `07-部署与运维/seo-url-contract.md`、`07-部署与运维/url-canonical-status-20260818.md` |
| 怎么上线、怎么回滚 | `07-部署与运维/`、项目根 `ops/deploy/deploy.sh` |
| 站点诊断跑了什么 | `09-运行记录-runs/run-*/site-diagnosis.json`、`quality-report.json` |

---

## 三、逐目录清单（自动生成）

HEAD

for d in "$BASE"/*/; do
  n="$(basename "$d")"
  echo "### $n（$(count "$d") 个文件）" >> "$OUT"
  echo "" >> "$OUT"
  echo '```' >> "$OUT"
  find "$d" -type f ! -name '._*' ! -name '.DS_Store' | sed "s|$BASE/$n/||" | sort >> "$OUT"
  echo '```' >> "$OUT"
  echo "" >> "$OUT"
done

cat >> "$OUT" <<'TAIL'
---

## 四、说明

- 本目录文件为**历史存档**，反映各时间点的状态，**不代表当前线上现状**。当前现状以 `../00-网站架构与说明/` 为准。
- 文档里出现的域名、路径、服务器信息以文档写作时为准；`../00-网站架构与说明/05-部署与运维链路.md` 已标注与生产环境的差异点。
- 如需更新归档，在项目根目录重新执行 `bash 官网材料导出/_scripts/sync-plan.sh <目标根目录>`。
TAIL

echo "✓ 已生成 $OUT（$(wc -l < "$OUT" | tr -d ' ') 行）"
