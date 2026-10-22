---
name: lanhui-geo-site-diagnose
description: 对蓝辉轻改官网（lanhuiqinggai.com，汽车改色膜/隐形车衣/轮毂改装）执行全站 GEO 体检：抓取代表性页面、按 8 维度评分、生成离线 HTML 诊断报告与修复积压。用于「兰辉/蓝辉官网GEO诊断」「网站GEO体检」「全站GEO审计」「网站GEO怎么样」等请求，或用户直接给出官网地址要求做全站 GEO 诊断。单个页面诊断用 yao-geo-page-audit，本 SKILL 只做全站级诊断。
metadata:
  owner: Lanhui Brand Team
  family: geo-site-technical
  maturity: beta
  requires_web: true
  engines: geo-seo-hub 0.7.0
  # NOTE: geo-seo-hub is vendored OUTSIDE this repo at ~/Documents/Code/_vendored/geo-seo-hub/
  # (moved 2026-10-06 — it was never tracked by git; .gitignore line /geo-seo-hub/).
  purpose: whole-site GEO readiness baseline & remediation
---

# 蓝辉轻改 GEO 全站诊断

对蓝辉轻改官网（canonical host `https://lanhuiqinggai.com/`）做一次有证据、可复现、边界受控的全站地理生成引擎优化（GEO）体检，产出一份含 8 维度评分、证据账本、修复积压与离线 HTML 报告的完整审计。

## 触发时机

当用户说「对兰辉/蓝辉官网做 GEO 诊断」「网站 GEO 体检」「全站 GEO 审计」「帮我看看官网 GEO 怎么样」，或把网址给出并要求全站级诊断时使用本 SKILL。单页面或小批量诊断走 `yao-geo-page-audit`，本 SKILL 定位全站。

## 前置信息（已内建，无需再问）

- **Canonical host**：`https://lanhuiqinggai.com/`（无 `www.w`，`www` 会 301 到无 www；工具自动跟随 canonical host）
- **行业**：汽车改色膜 / 隐形车衣(PPF) / 汽车窗膜 / 轮毂升级 / 电动踏板
- **品牌实体**：蓝辉轻改 LANHUI；运营品牌「蓝小辉阿波」
- **robots 现状**：已放行 `GPTBot / ClaudeBot / PerplexityBot / Google-Extended / Bytespider`，可被主流 AI 爬虫访问
- **报告 locale**：`zh-CN`

## 工作流

1. 读取 `references/lanhui-site-profile.md`（基线画像）与 `references/remediation-guide.md`（修复指引）。
2. 确认诊断 URL（默认 `https://lanhuiqinggai.com/`；若抛给别的网址则尊重用户输入）。
3. 运行诊断引擎（任选一种）：
   - 推荐：`bash <workspace>/skills/lanhui-geo-site-diagnose/run_diagnose.sh --url <URL> [--max-pages N]`
   - 直接 CLI：`cd <workspace> && ~/Documents/Code/_vendored/geo-seo-hub/.venv/bin/geo-seo-hub site-diagnose --url <URL> --output runs --locale zh-CN --max-pages 10 --render http`
4. 读取运行目录顶层的 `site-diagnosis.json`（overall_score / dimensions / site_checks）、`quality-report.json`（confidence / gaps / warnings，注意 `render_gap` 或抓取超时）、`remediation-backlog.json`（按 priority 排序的修复动作）。
5. **不要照念数字**：把 8 维度得分转成对蓝辉业务的语言（如「AI 可访问性与可回答性优秀，但权威署名与证据引用有短板，会影响 AI 引用采信」）。
6. 对照 `references/lanhui-site-profile.md` 的基线（overall 85），指出**本次相比基线的变化**（进步/回退/持平）。
7. 打开生成的 `report.html` 给用户看，并给出 ≤3 条的优先级修复建议。

## 铁律（证据纪律）

- 得分只描述**观测到的就绪信号**，绝不宣称「AI 已收录/已排名/会引用/带来流量」。
- 页面缺失或抓取超时（如 `/blog`）记作 `render_gap`/`source_gap`，**不得臆测其内容**。
- 每个检查项附带 evidence_id；报告中的数字必须可回溯到 JSON 证据。
- 单选官网 URL，不抓取离站、认证、localhost、内网资源；不修改网站。
- `overall` 是就绪度启发式分数，不是业务结果分。

## 输出契约

交付一个运行目录：`input/sources/`（抓取快照）+ `crawl-manifest.json` + `sampling-plan.json` + 每页一个 `pages/*.json`（含 19 项检查）+ `evidence-ledger.json` + `remediation-backlog.json` + `quality-report.json` + 一份离线 `report.html`（内嵌 ECharts，十模块结构，零 CDN 依赖）。报告 locale 为 `zh-CN`。
