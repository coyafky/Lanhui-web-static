# 蓝辉轻改 LANHUI — 官网

> 汽车轻改装 + 车身膜服务品牌官网
> 服务区域：广州 / 佛山 · 顺德大良店
> 线上地址：**https://lanhuiqinggai.com**（裸域为唯一正式版本，`www` 全部 301 过去）

**纯静态站点**：Next.js 构建时静态导出（`output: "export"`）→ `out/` → Nginx 直接伺服。
**没有数据库、没有 API 路由、没有运行时 Node 服务。**

> 最后核对：**2026-10-10** · 依据：`package.json` / `next.config.ts` / `src/lib/product-routes.ts` / 本地构建产物 `out/` / `git status`

---

## 当前状态速览（2026-10-10 实测）

| 维度 | 现状 |
|---|---|
| 线上 | ✅ 可访问，裸域 https://lanhuiqinggai.com，ICP 备案已过（粤ICP备2026102356号-2） |
| 源码 HEAD | `9eac58f`（`chore(product): 产品命名与数据源同步、门禁升级与项目文档`），分支 `main` |
| 工作区 | ⚠️ **204 项未提交**（54 改 / 15 删 / 135 新增未跟踪）—— 推送前务必先 `git status` |
| 构建产物 | `out/` 上次生成于 2026-10-06 20:35（**早于当前工作区改动，需重新 `npm run build` 才反映最新内容**） |
| 门禁 | `lint` 0 错误 · `typecheck` 0 错误 · `build` EXIT=0（563 页）—— 于 10-06 文档重构时实测 |
| 阻塞项 | `check:static` 本地必失败（sitemap 裸域 vs 脚本 `www` 兜底），见 [`TODO.md`](TODO.md) **P0-2** |

---

## 技术栈

| 层 | 技术 | 版本 |
|---|---|---|
| 框架 | Next.js（App Router） | **16.2.1** |
| UI | React + React DOM | **19.2.4** |
| 语言 | TypeScript（strict，禁用 `any`） | 5 |
| 样式 | Tailwind CSS v4（`@theme inline` + oklch token） | 4 |
| 组件 | shadcn/ui（style `base-nova` / icon `lucide`） | — |
| 内容 | `markdown-it` + `markdown-it-task-lists` | 15 |
| 测试 | Vitest（happy-dom）+ Playwright + Testing Library | 3 |
| 运行时 | Node | **24**（`.nvmrc`） |

---

## 快速开始

```bash
npm ci                 # 安装依赖（Node 24）
npm run dev            # 开发服务器 → http://localhost:3000
npm run build          # 静态导出 → out/
npx serve out          # 本地预览构建产物
```

**环境变量**：仓库内**没有任何 `.env*` 文件**，也**不需要**才能开发/构建。
唯一相关的变量是可选覆盖项 `NEXT_PUBLIC_SITE_URL`（不设时生产构建走裸域兜底，见 `src/lib/site-url.ts`）。

---

## 常用命令

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run build` | 静态导出 → `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest 单元测试 |
| `npm run test:e2e` | Playwright E2E |
| `npm run check` | **主门禁**：lint → typecheck → test → verify:zeekr-images → wheels:verify → build |
| `npm run check:static` | **完整静态门禁**（比 `check` 多 3 项，见下） |
| `npm run check:static-output` | 校验 `out/` 产物完整性 |
| `npm run check:static-boundary` | 校验静态导出边界（不得出现动态能力） |
| `npm run verify:static-images` | 校验静态图片资产 |
| `npm run verify:zeekr-images` | 校验极氪车型图片 |
| `npm run wheels:data` / `wheels:images` / `wheels:verify` | 轮毂数据生成 / 图片导入 / 数据校验 |
| `npm run check:viewport` | 视口基线比对（需先起 dev server） |

> ⚠️ `check` 与 `check:static` **不是一回事**：`check` **不含** `verify:static-images`、`check:static-boundary`、`check:static-output`。
> 发布前用 `check:static`。
>
> ✅ **2026-10-22 更新**：`check:static` 的裸域校验已修复，本地完整门禁可通过。视口基线检查需单独启动本项目 3100 端口后运行。

---

## 项目结构

```
├── src/
│   ├── app/                  # 页面路由（App Router，87 个 page.tsx）
│   │   ├── page.tsx          # 首页
│   │   ├── product/          # 产品中心（74 个路由）：品牌系列页 / 车型页 / 服务页 / 子页
│   │   ├── brand/            # 品牌页 + 品牌历程（2）
│   │   ├── agent/            # 门店（4）：索引 / 省 / 市 / 门店详情
│   │   ├── blog/             # 博客（5）：列表 / 详情 / 分类 / 分页
│   │   ├── contact/          # 联系页
│   │   ├── layout.tsx        # 根布局（强制 dark + Header/Footer）
│   │   ├── robots.ts         # robots.txt（构建时生成）
│   │   ├── sitemap.ts        # sitemap.xml（构建时生成，507 条）
│   │   └── llms.txt/route.ts # llms.txt（面向 AI Agent 的品牌知识导航，112 行）
│   ├── components/           # React 组件（477 个 .tsx，按域分组）
│   │   ├── ui/               # shadcn 基础件（badge/button/card/sonner/table）
│   │   ├── shared/           # 通用件（微信弹窗/错误兜底/Loading）
│   │   └── product/, <品牌>/ # 域组件
│   ├── content/articles/     # 博客正文 Markdown（17 篇）
│   ├── lib/                  # 静态数据 + 工具（191 个 .ts）
│   │   ├── product-routes.ts # ⭐ 全站路由注册表（160 行，唯一事实源）
│   │   ├── wheels.data.ts    # 轮毂数据（脚本生成，勿手改）
│   │   └── site-url.ts       # 站点 URL 解析
│   ├── hooks/ · types/ · test/
├── public/images/            # 产品图 / 门店图（1556 个图片资源文件，167MB）
├── scripts/                  # 构建校验、图片处理、数据生成脚本
├── ops/                      # ⚠️ deploy/ 与 nginx/ 是失真的历史模板，生产不用（见 TODO F-5）
├── docs/                     # 本地文档区（已被 .gitignore 忽略，不进版本库）
└── .github/workflows/ci.yml  # CI：只跑门禁并产出 artifact，不自动部署
```

> 测试规模：`src/` 下 **64** 个单测文件 + `e2e/` 下 **5** 个 Playwright 用例。

---

## 内容规模（2026-10-10 实测）

| 项 | 数值 |
|---|---|
| 页面路由 | **87** 个 `page.tsx`（product 74 · blog 5 · agent 4 · brand 2 · 首页 1 · contact 1） |
| 构建页数 | **560** 个静态 HTML（`out/`，生成于 10-06） |
| sitemap URL | **507** 条（构建产物实测） |
| 车型品牌 | **42** 个 `*-products.ts` 数据模块（覆盖品牌系列页与车型页两级） |
| 服务 / 分类页 | 由 `product-routes.ts` 的 `service_category` 驱动（含 `planned` 占位页仅 `notFound()`） |
| 博客文章 | **17** 篇（`src/content/articles/*.md`） |
| 图片资源 | **1556** 个文件（`public/images/`，167MB） |
| 组件 | **477** 个 `.tsx` |
| 数据 / 工具模块 | **191** 个 `.ts`（`src/lib/`） |

> 权威来源：**`src/lib/product-routes.ts`**。导航、SEO、sitemap、旧路径重定向全部由它驱动 ——
> 改路由先改这里，别在页面里硬编码路径。
> 该文件当前有 **72 处 `status`**（68 处 `live` / 5 处 `planned`，含类型定义）。

---

## 文档体系

目录职责、当前项目文件夹地图、图片与评审截图分类，以及按任务复杂度裁剪的开发流程，统一见 [`DOCUMENTATION.md`](DOCUMENTATION.md)。

| 文件/目录 | 用途 |
|---|---|
| [`AGENTS.md`](AGENTS.md) | 项目规则正本与 Agent 导航 |
| [`CLAUDE.md`](CLAUDE.md) | Claude 项目入口与文件夹速览 |
| [`DESIGN.md`](DESIGN.md) | 当前视觉、布局、交互和无障碍约束 |
| `rules/` | 反复适用的内容、前端、UI、SEO、部署规则 |
| `adr/` | 长期架构与业务决策 |
| `specs/active/` | 当前规格、计划、审计和验收报告 |
| `specs/archive/` | 历史规格、已完成报告及相关证据 |
| `work/` / `issues/` | 当前协作交接 / 待解决事项 |
| `docs/agent/` | 本地研究、评审和截图材料，不是规则入口 |

> `specs/`、`adr/`、`rules/`、`work/`、`docs/` 按 ADR-0006 被 `.gitignore` 忽略。它们保留在本地；新 clone 看不到这些目录是当前约定。

---

## 部署

一句话：**本地 `npm run check:static` → push 到 Gitee → 服务器从 Gitee 拉取构建 → 同步到 Nginx 站点根目录**。
手动执行，无 CD、无 Webhook，CI 只产出 artifact。

完整拓扑、受限内存构建命令、冒烟清单与回滚办法：[`specs/DEPLOYMENT.md`](specs/DEPLOYMENT.md)
服务器运维速查：[`specs/active/ops/server-operations.md`](specs/active/ops/server-operations.md)

> ⚠️ **别跑 `ops/deploy/deploy.sh`**：它写死 `/var/www/lanhui` + `releases/` 软链结构，与生产
> （`/www/wwwroot/lanhuiqinggai.com` 普通目录 + 宝塔 Nginx）不符，会把文件发到错误位置。

---

## 许可证

MIT
