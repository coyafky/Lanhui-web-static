<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 蓝辉轻改 LANHUI — Static Website

Pure static brand site. Next.js 16 (App Router) · React 19 · TS strict · Tailwind v4 · `output: "export"` · No database · No API routes. Node **24** (`.nvmrc`).

---

## Read these first

| 文档 | 什么时候看 |
|---|---|
| [`TODO.md`](TODO.md) | **开工前必看** —— 当前阻塞项（P0）、已知缺陷（P1）、技术债（P2） |
| [`README.md`](README.md) | 项目概览、命令、结构、真实内容规模 |
| [`DESIGN.md`](DESIGN.md) | 改任何 UI 之前 —— 色彩/字体/圆角/动效/a11y 约束 |
| [`docs/PAGE-STRUCTURE.md`](docs/PAGE-STRUCTURE.md) | 加页面、改页面区块顺序之前 |
| [`docs/COMPONENT-GUIDELINES.md`](docs/COMPONENT-GUIDELINES.md) | 写组件之前 —— 分层、命名、Server/Client 划分、图片约定 |
| [`docs/REGISTRY.md`](docs/REGISTRY.md) | 改路由 / 动生成物 / 加校验脚本之前 |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | 部署之前 |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) · [`docs/PROJECT-SPEC.md`](docs/PROJECT-SPEC.md) | 需要全局理解时 |

---

## Commands

| Command | What |
|---------|------|
| `npm run dev` | dev server → :3000 |
| `npm run build` | static export → `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | vitest (happy-dom) |
| `npm run check` | lint → typecheck → test → verify:zeekr-images → wheels:verify → build |
| `npm run check:static` | 完整静态门禁：上面这些 **再加** `verify:static-images` + `check:static-boundary` + `check:static-output` |

> ⚠️ `check` ≠ `check:static`。发布前跑 `check:static`。
> 🔴 **已知阻塞**：`check:static` 在本地当前必然失败（脚本兜底 `www` vs 产物裸域，479 条误报）——
> 详见 `TODO.md` **P0-2**。别以为自己改坏了。

---

## Architecture

- **Static-only**: All pages prerendered at build time (SSG). No runtime server, no API routes, no database.
  唯一例外是 `src/app/llms.txt/route.ts`（构建期生成 `llms.txt`）。
- **Route registry is the source of truth**: **`src/lib/product-routes.ts`** 驱动导航、SEO、sitemap 与旧路径重定向。
  **加品牌/车型/服务只改这一个文件**，别在页面里硬编码路径。
- **Data**: Static data in `src/lib/*.ts`, inlined at build time.
  注意 `src/lib/wheels.data.ts`（约 425KB）是 **`npm run wheels:data` 的生成物，禁止手改**。
- **Dark-only**: `<html className="... dark">` + `bg-zinc-950 text-white` 是硬编码的，**不存在亮色模式**。
- **Error handling**: `console.error` only (no Sentry, no pino).
- **Deploy**: 服务器从 Gitee 拉取后构建 → Nginx。见 `docs/DEPLOYMENT.md`。

---

## Topic-page pattern（车型页，19 个共用）

1. `src/lib/<topic>-products.ts` — static data + literal types for image specs
2. `src/lib/<topic>-page-config.ts` — 页面配置，喂给共享渲染器
3. `src/components/<topic>/` — 域组件
4. `src/app/product/<brand>/<model>/page.tsx` — RSC 页面
5. 在 `src/lib/product-routes.ts` 的 `ALL_MODELS` 登记；sitemap 自动跟进
6. 有图片资产就接进 CI verify 脚本

> ⚠️ **品牌系列页没有走这个模式** —— 12 个品牌页是 12 套手写组件栈。
> 已知技术债（`TODO.md` P2-4），别以为该模式已经全站统一。

- **主题色**：**唯一权威来源是 `src/lib/product-routes.ts` 的 `accentColor`**（10 色枚举）。
  ⚠️ 旧版本文档里的映射（xiaomi=orange / wenjie=cyan / zeekr=orange / flooring=amber）是早期简化说法，
  `docs/SPEC/INDEX.md` 里记的（denza=blue / voyah=cyan / …）与代码不符 —— **以代码为准**。
- **图片容器**：`aspect-[4/3] + object-contain` + `sizes`。产品图不裁切。
  Hero 首屏用 Next 16 的 **`preload`**（不是旧的 `priority`）。

---

## Code style

TS strict, `any` forbidden · named exports · PascalCase components · camelCase utils · Tailwind utilities only · 2-space · mobile-first

**必须验证的三个视口：390 / 768 / 1440。** 样式只写 Tailwind utilities，不新增 CSS 文件。

---

## 不要踩的坑（都是真踩过的）

1. **`docs/` 被 `.gitignore` 忽略** —— 文档不进版本库，`git add docs/` 是无效的（也**不要**擅自改 `.gitignore`）。
2. **别跑 `ops/deploy/deploy.sh` / `ops/rollback.sh`** —— 写死 `/var/www/lanhui` + `releases/` 软链，
   与生产（`/www/wwwroot/lanhuiqinggai.com`）不符。`ops/nginx/lanhui.conf` 同样是失真模板。
3. **URL 唯一正式版本是裸域** `https://lanhuiqinggai.com`，`www` 一律 301。写 canonical / sitemap / schema 时用裸域。
4. **服务器是 2C2G 小机** —— 不许同时跑多个 `next build`，服务器构建必须限内存
   （命令见 `docs/DEPLOYMENT.md`）。2026-09-06 因未受控构建整机资源饥饿过一次。
5. **产品展示页不标价格**，价格由门店确认。
6. **文案有法律约束**：禁用「最/第一/唯一/顶级/旗舰/独创/进口同款」等极限词与绝对化用语，
   参数页必须带免责声明。改文案前看 `docs/audits/copy-review-20260808.md`。
7. **吸顶元素要避开 Header**：`top-16` + `z-40`（Header 是 `z-50` / `h-16`）。
8. **`scrollbar-hide`** 是本项目自定义类（Tailwind 4 无内置 `scrollbar-none`）。
9. **提交前确认工作区状态**：本仓库长期有大量未跟踪文件，`git status --porcelain` 先看一眼再动手。
10. **别把别的项目混进来**：`/gallery`、`/course-list`、`/tools/*`、`119.91.205.130` 属于另一个项目（PersonalWebsite），
    本项目没有这些路由。

---

## 多 Agent 协作（Alma · Codex · OpenChamber/opencode）

这个仓库同时被三个 Agent 操作，**共享同一份工作副本，没有 worktree 隔离**。

- **开工前必读**：[`docs/agent/COLLAB.md`](docs/agent/COLLAB.md) —— 分工判据、单写者锁、交接包格式、任务台账
- **单写者锁**：同一时刻只允许一个 Agent 写。写之前先在 COLLAB.md 登记，收工释放。
- **红线**：不改 `src/lib/wheels.data.ts`（生成物）｜ 不动 `out/` `.next/` ｜ 不 `git push` ｜ 不部署 ｜ 不碰 `.env*`
- **门禁要带退出码**：`npm run build > /tmp/b.log 2>&1; echo EXIT=$?` —— **别用管道**，`| tail` 会把退出码换成 tail 的
- opencode 项目配置在 `opencode.json` + `.opencode/agents/`（本仓库专用，不进 git）
