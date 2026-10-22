# CLAUDE.md — 蓝辉轻改 LANHUI Static Website

> **本文件是指针，不是规则正本。**
> **唯一正本：[`AGENTS.md`](AGENTS.md)** —— 开工前先读它。

## 一句话

纯静态品牌官网。Next.js `output: "export"` + Nginx，无数据库、无运行时服务。
业务：汽车轻改装 + 车身膜服务（顺德大良店）。

## 必读顺序

1. [`AGENTS.md`](AGENTS.md) —— 宪法：身份、红线、索引、命令
2. [`DOCUMENTATION.md`](DOCUMENTATION.md) —— 当前项目目录地图、文档分类与轻量开发流程
3. [`specs/active/agent-workflow-playbook.md`](specs/active/agent-workflow-playbook.md) —— 用户如何下达任务、分阶段实现、要求审查和验收
4. [`specs/active/commercial-website-readiness-roadmap.md`](specs/active/commercial-website-readiness-roadmap.md) —— 商业化现状、路线图和技术选型触发条件
5. `rules/` 下对应文件 —— 怎么做（前端 / UI / 文案 / SEO / 部署）
6. `specs/active/` 下对应规格 —— 做什么；历史材料只查 `specs/archive/`
7. [`DESIGN.md`](DESIGN.md) —— 改 UI 时查阅当前视觉规范

## 当前项目文件夹

```text
src/app/                 页面与路由
src/components/          页面和共享组件
src/lib/                 路由、静态数据与业务逻辑
src/content/articles/    网站博客内容
public/images/           网站图片资源
scripts/  e2e/           校验脚本与端到端场景
skills/                  可复用技能
.agents/skills/           项目专属 Agent 档案
specs/active/            当前规格、计划、审计、验收报告
specs/archive/           历史规格、旧报告与证据
adr/                     长期决策（为什么）
rules/                   长期规则（怎么做）
work/                    当前协作和任务交接
issues/                  待处理问题清单
docs/agent/              本地研究、评审和截图证据（不进 Git）
官网材料导出/             对外交付的网站说明快照
```

详细归档口径、图片/截图分类和报告状态见 [`DOCUMENTATION.md`](DOCUMENTATION.md)。

## 技术栈

Next.js 16.2.1 · React 19.2.4 · TypeScript strict（禁用 `any`）· Tailwind CSS v4
shadcn/ui（style `base-nova` / icon `lucide`）· Vitest + Playwright · Node 24

## 常用命令

`npm run dev` / `build` / `lint` / `typecheck` / `test` / `check`
发布前跑 **`npm run check:static`**（≠ `check`）

## 注意

- **Next.js 16 有 breaking changes**，写码前读 `node_modules/next/dist/docs/`
- **Dark-only**：没有亮色模式
- 品牌主题色的事实源是 `src/lib/product-routes.ts`，不要在入口文档复制一份容易过期的映射
