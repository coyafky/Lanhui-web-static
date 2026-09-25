# 蓝辉轻改 LANHUI — 官网

> 汽车轻改装 + 车身膜服务品牌官网
> 服务区域：广州 / 佛山 · 顺德大良店
> 线上地址：**https://lanhuiqinggai.com**（裸域为唯一正式版本，`www` 全部 301 过去）

**纯静态站点**：Next.js 构建时静态导出（`output: "export"`）→ `out/` → Nginx 直接伺服。
**没有数据库、没有 API 路由、没有运行时 Node 服务。**

> 最后核对：2026-09-23 · 依据：`package.json` / `next.config.ts` / `src/lib/product-routes.ts` / 本地构建产物 `out/`

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

> ⚠️ `check` 与 `check:static` **不是一回事**：`check` **不含** `verify:static-images`、`check:static-boundary`、`check:static-output`。
> 发布前用 `check:static`。
>
> 🔴 **当前已知阻塞**：`check:static` 在本地**必然失败** —— 脚本兜底域名是 `www`，
> 而产物 sitemap 是裸域，导致 479 条全报 `sitemap-url-missing`。根因与修法见 [`TODO.md`](TODO.md) 的 **P0-2**。

---

## 项目结构

```
├── src/
│   ├── app/                  # 页面路由（App Router，61 个 page.tsx）
│   │   ├── page.tsx          # 首页
│   │   ├── product/          # 产品中心：品牌系列页 / 车型页 / 服务页 / 子页
│   │   ├── brand/            # 品牌页 + 品牌历程
│   │   ├── agent/            # 门店：索引 / 省 / 市 / 门店详情
│   │   ├── blog/             # 博客：列表 / 详情 / 分类 / 分页
│   │   ├── contact/          # 联系页
│   │   ├── layout.tsx        # 根布局（强制 dark + Header/Footer）
│   │   ├── robots.ts         # robots.txt（构建时生成）
│   │   ├── sitemap.ts        # sitemap.xml（构建时生成，479 条）
│   │   └── llms.txt/route.ts # llms.txt（面向 AI Agent 的品牌知识导航）
│   ├── components/           # React 组件（354 个文件，按域分组）
│   │   ├── ui/               # shadcn 基础件（badge/button/card/sonner/table）
│   │   ├── shared/           # 通用件（微信弹窗/错误兜底/Loading）
│   │   └── product/, <品牌>/ # 域组件
│   ├── content/articles/     # 博客正文 Markdown（15 篇）
│   ├── lib/                  # 静态数据 + 工具（约 136 个 .ts）
│   │   ├── product-routes.ts # ⭐ 全站路由注册表（唯一事实源）
│   │   ├── wheels.data.ts    # 轮毂数据（425KB，脚本生成，勿手改）
│   │   └── site-url.ts       # 站点 URL 解析
│   ├── hooks/ · types/ · test/
├── public/images/            # 产品图 / 门店图（含 756 张未跟踪的轮毂图）
├── scripts/                  # 构建校验、图片处理、数据生成脚本
├── ops/                      # ⚠️ deploy/ 与 nginx/ 是失真的历史模板，生产不用（见 TODO F-5）
├── docs/                     # 本地文档区（已被 .gitignore 忽略，不进版本库）
└── .github/workflows/ci.yml  # CI：只跑门禁并产出 artifact，不自动部署
```

---

## 内容规模（2026-09-23 实测）

| 项 | 数值 |
|---|---|
| 车型品牌 | **12**（问界 / 小米 / 极氪 / 理想 / 特斯拉 / 小鹏 / 腾势 / 岚图 / 乐道 / 高山 / 智界 / 蔚来） |
| 车型页 | **19**（其中问界 M6/M7/M8 为 `planned`） |
| 服务 / 分类页 | **12**（其中 `business-comfort` 为 `planned` 占位，仅 `notFound()`） |
| 博客文章 | **15** 篇 |
| sitemap URL | **479** 条（本地构建产物实测；其中 404 条为轮毂单品详情页） |

> 权威来源：**`src/lib/product-routes.ts`**。导航、SEO、sitemap、旧路径重定向全部由它驱动 ——
> 改路由先改这里，别在页面里硬编码路径。

---

## 部署

一句话：**本地 `npm run check:static` → push 到 Gitee → 服务器从 Gitee 拉取构建 → 同步到 Nginx 站点根目录**。
手动执行，无 CD、无 Webhook，CI 只产出 artifact。

完整拓扑、受限内存构建命令、冒烟清单与回滚办法：[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)
服务器运维速查：[`docs/ops/server-operations.md`](docs/ops/server-operations.md)

> ⚠️ **别跑 `ops/deploy/deploy.sh`**：它写死 `/var/www/lanhui` + `releases/` 软链结构，与生产
> （`/www/wwwroot/lanhuiqinggai.com` 普通目录 + 宝塔 Nginx）不符，会把文件发到错误位置。

---

## 文档索引

| 文档 | 内容 |
|---|---|
| [`AGENTS.md`](AGENTS.md) | 项目协作与开发规范（含 Next.js 16 注意事项） |
| [`DESIGN.md`](DESIGN.md) | 视觉风格、布局、交互与无障碍规范 |
| [`CHANGELOG.md`](CHANGELOG.md) | 按日期里程碑的变更记录 |
| [`TODO.md`](TODO.md) | 当前进度、阻塞项、技术债与待办 |
| [`docs/PROJECT-SPEC.md`](docs/PROJECT-SPEC.md) | 项目定位、产品目标与功能范围 |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | 系统架构、目录结构与数据组织 |
| [`docs/COMPONENT-GUIDELINES.md`](docs/COMPONENT-GUIDELINES.md) | 组件、样式、依赖与无障碍规范 |
| [`docs/PAGE-STRUCTURE.md`](docs/PAGE-STRUCTURE.md) | 各页面与区块的结构说明 |
| [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) | 开发流程与新增页面/产品线落地流程 |
| [`docs/REGISTRY.md`](docs/REGISTRY.md) | 路由注册表、生成物注册表、校验脚本表 |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | 构建与部署（腾讯云 + 宝塔 + Nginx） |
| [`docs/README.md`](docs/README.md) | ⚠️ 文档工作流索引 —— **部分内容停留在模板期**（还在讲 Prisma/admin CMS），以本表为准 |

---

## 许可证

MIT
