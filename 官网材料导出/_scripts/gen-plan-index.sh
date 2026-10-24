#!/usr/bin/env bash
set -euo pipefail
DST="${1:?用法: gen-plan-index.sh <快照根目录>}"
BASE="$DST/03-官网计划与日志"
OUT="$BASE/README-文档索引.md"
mkdir -p "$BASE"
{
  echo '# 规则、规格与记录索引'
  echo
  echo '> 本目录是导出时的本地文档快照；`AGENTS.md` 是项目规则入口，`DOCUMENTATION.md` 是文档地图。历史资料与测试报告不能当作当前验收。当前页面与路由看 `../00-网站架构与说明/`。'
  echo
  echo '| 分区 | 用途 | 文件数 |'
  echo '|---|---|---:|'
  for dir in "$BASE"/*/; do
    [ -d "$dir" ] || continue
    name="$(basename "$dir")"
    case "$name" in
      00-项目入口) purpose='项目规则、目录地图、视觉规范与工程配置' ;;
      01-当前规则) purpose='反复适用的内容、SEO、UI、部署约束' ;;
      02-架构决策) purpose='长期取舍及原因' ;;
      03-当前规格与验收) purpose='仍有效的规格与最近验收' ;;
      04-历史规格与报告) purpose='仅供追溯的历史资料' ;;
      05-协作与发布记录) purpose='协作锁、任务与发布记录' ;;
      06-运行记录) purpose='工具运行产物，按日期与状态核对' ;;
      *) purpose='资料' ;;
    esac
    count="$(find "$dir" -type f ! -name '._*' ! -name '.DS_Store' | wc -l | tr -d ' ')"
    printf '| `%s` | %s | %s |\n' "$name" "$purpose" "$count"
  done
  echo
  echo '使用顺序：`00-项目入口/AGENTS.md` → `DOCUMENTATION.md` → 当前规则与规格 → 本次页面源码/构建证据。旧文档中的服务器命令和版本数须重新核实。'
} > "$OUT"
printf '已生成文档索引：%s\n' "$OUT"
