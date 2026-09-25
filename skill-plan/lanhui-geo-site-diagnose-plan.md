# 实施计划：蓝辉轻改 GEO 全站诊断 SKILL

## 背景与目标
为蓝辉轻改官网（canonical host `https://lanhuiqinggai.com/`，行业：汽车改色膜/隐形车衣/轮毂改装）定制一个基于开源 `geo-site-diagnose`（GEOHub v0.7.0）的专用 GEO 全站诊断 SKILL。让后续可一键对官网做全站 GEO 体检，输出「8 维度评分 + 修复积压 + 离线 HTML 报告」，并对蓝辉特有的 GAP（权威署名、证据引用、lastmod）给出针对性建议。

## 现状基线（2026-08-31 实测）
- **overall 85 / confidence 84**，8 维度首页表现优秀（access/answerability/architecture/entity/structured 均 90-100）
- **主要短板**：authority_trust 50（缺可追责作者/机构）、evidence_citation 各页 50-83（缺数据来源注解）、freshness 部分页 50（sitemap lastmod 解释性弱）
- blog 抓取**超时**（render_gap）→ 需关注/单独复审
- 修复动作：P60 加证据注解、P45 加作者/审核者、P30 URL-H1 对齐、P30 lastmod 解释

## SKILL 结构
- `skills/lanhui-geo-site-diagnose/SKILL.md` —— 主 SKILL，frontmatter + 触发场景 + 工作流 + 铁律
- `skills/lanhui-geo-site-diagnose/references/lanhui-site-profile.md` —— 蓝辉官网画像（canonical host、行业实体、robots 状态、基线得分）
- `skills/lanhui-geo-site-diagnose/references/remediation-guide.md` —— 针对蓝辉 4 个 GAP 的落地修复指引
- `skills/lanhui-geo-site-diagnose/run_diagnose.sh` —— 一键诊断脚本（venv + CLI 封装）
- `skills/lanhui-geo-site-diagnose/evals/trigger_cases.json` —— 触发用例（中文指令→正确路由）

## 运行依赖
- 引擎：`geo-seo-hub` v0.7.0（部署于 `<workspace>/geo-seo-hub/`，venv 于同目录 `.venv`）
- 调用：`./geo-seo-hub/.venv/bin/geo-seo-hub site-diagnose --url https://lanhuiqinggai.com ...`

## 验收标准
- [ ] SKILL.md 通过 frontmatter 规范（name=目录名、description≤1024、含触发词）
- [ ] 工作流可直接调用 venv 引擎跑通
- [ ] references 覆盖蓝辉真实基线数据（85/100 与 4 个 GAP）
- [ ] 脚本参数与 CLI 一致（--url/--output/--locale/--max-pages/--render）
