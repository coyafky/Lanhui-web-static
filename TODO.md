# TODO — 蓝辉轻改官网开发计划与当前进度

> 最后核对：**2026-09-23** · 依据：`git status` / `git log` / `npm run check:static-output` 实测 / `docs/` 下审计与交接文档
>
> 维护约定：**任何条目都必须能指向一处证据**（提交、文件、命令输出）。本文件不是愿望清单，
> 没有证据的猜测放「待核实」区，别混进 P0/P1。

---

## 0. 现在站在哪（状态快照）

| 项 | 状态 |
|---|---|
| 本地 HEAD | `16bc2c6`（2026-09-10，`feat(blog): 新增车衣包边收边标准文章（第 15 篇）`） |
| 工作区 | ⚠️ **脏**：31 个已修改、6 个重命名已 staged、**792 项未跟踪**（含 756 张图片） |
| 本地 vs 部署源 | ⚠️ 本地 `main` **领先 `gitee/master` 5 个提交**（那 5 个还没推） |
| 线上站点 | `https://lanhuiqinggai.com`（裸域唯一正式版），正常伺服中；线上跑的是更早的版本 |
| 文档区 | `docs/` 已被 `.gitignore` 忽略 → 本地文档不进版本库 |
| 版本标记 | 无 git tag；`package.json` 的 `0.3.1` 是模板继承值 |

---

## 🔴 P0 — 上线阻塞（不解决就别谈发布）

### P0-1 轮毂目录 / 电踏适配总表整条特性未提交

- **现象**：`/product/wheels/[model]`、`/product/electric-steps/fitment` 两条新路由，
  以及 `wheels.data.ts`（425KB 生成物）、`wheel-catalog*.ts`、`electric-step-fitment.ts`、
  3 个 `scripts/*wheel*.mjs`、`src/components/product/wheel/` 全部处于 **`??` 未跟踪**状态；
  `public/images/` 下另有 **756 张**未跟踪图片。
- **为什么是 P0**：现有部署链路是「服务器从 **Gitee** `git pull` → 构建」。
  **未提交 = Gitee 上没有 = 服务器拉不到**，这批内容永远上不了线。
  这与 `src/lib/wheels.data.ts` 文件头自己写的「必须进 git」直接矛盾。
- **动作**：先跑门禁，再分两个提交推上去（数据管线 / 页面与组件分开更易回滚）：
  ```bash
  npm run check                      # 注意 P0-2 会拦住你，先修
  git add src/lib/wheels.data.ts src/lib/wheel-catalog*.ts scripts/*wheel*.mjs
  git add src/app/product/wheels src/components/product/wheel public/images/products/wheel
  git commit -m "feat: 轮毂目录数据管线与单品详情页"
  git add src/lib/electric-step-fitment.* src/app/product/electric-steps/fitment \
          src/components/product/electric-steps public/images
  git commit -m "feat: 电动踏板适配车型总表"
  git push gitee main:master && git push origin main
  ```
- **风险**：756 张图片入库会让仓库体积显著变大 —— 推之前确认是否该走 CDN/图床（见 P2-2）。

### P0-2 「裸域 vs www」口径不一致，导致本地完整静态门禁恒失败

- **实测**（2026-09-23）：
  ```
  $ npm run check:static-output
  ⚠️  NEXT_PUBLIC_SITE_URL not set — using default https://www.lanhuiqinggai.com for sitemap checks
  ...
  479 error(s) found.        # 退出码 1
  ```
  而本地 `out/sitemap.xml` 的 `<loc>` 全是**裸域** `https://lanhuiqinggai.com`。
- **根因**：`scripts/check-static-output.mjs` 里的兜底默认值**硬编码为 www**，
  与线上已生效的「裸域唯一正式版本」契约冲突 → 每个 URL 匹配失败。
- **影响面**：
  - `npm run check:static`（本地完整静态门禁）**当前提交下根本过不了**，谁跑谁红。
  - `.github/workflows/ci.yml` 里 build 时传了 `NEXT_PUBLIC_SITE_URL=https://www.lanhuiqinggai.com`，
    **恰好**与脚本兜底自洽 → CI 不红。这是**假绿**。
  - 线上不受污染（服务器构建不设该变量，`getSiteUrl()` 落 `NODE_ENV=production` 的裸域兜底）。
- **动作**（两处一起改，别只改一处）：
  1. `scripts/check-static-output.mjs` 兜底值 → `https://lanhuiqinggai.com`
  2. `.github/workflows/ci.yml` 的 `NEXT_PUBLIC_SITE_URL` → `https://lanhuiqinggai.com`
- 依据：`scripts/check-static-output.mjs:80-86`、`src/lib/site-url.ts`、`.github/workflows/ci.yml`

### P0-3 5 个提交未推送

- 本地 `main` 领先 `gitee/master` **5 个提交**，即「TEI 刹车卡钳页 / 3 篇案例文章 / 博客第 15 篇」这批
  代码层面已就绪但**部署源没有**。
- **动作**：与 P0-1 一起推。顺带对齐 `docs/ops/server-operations.md` 与
  `docs/deployment/ssh-handoff-codex.md` 里**互相打架**的推送/拉取写法
  （一边 `git push gitee main:master` + `git pull origin master`，一边 `git push gitee main` + `git pull origin main`）
  —— 实测 `git status` 报的是 `ahead of 'gitee/master'`，即远端分支叫 `master`。

---

## 🟠 P1 — 已知缺陷（可在最近几次改动中顺手修）

| # | 问题 | 位置 | 证据 |
|---|---|---|---|
| P1-1 | **跳过导航链接失效 2 处**：`<main>` 缺 `id="main-content"`，点「跳到主要内容」无目标 | `src/components/ProductDetail.tsx:58`、`src/components/product/window-film/WindowFilmPackageDetail.tsx:23` | `docs/PAGE-STRUCTURE.md` |
| P1-2 | **面包屑 `aria-label` 缺失**：`/agent`、`/agent/[slug]`、`/agent/[slug]/[city]`、`/brand/history` 内联 `<nav>` 无语义标签（门店详情页有） | 对应 `page.tsx` | `docs/COMPONENT-GUIDELINES.md` |
| P1-3 | **触控目标低于 44px 基线**：分页页码 36px、Header 按钮 40px | 分页组件 / `Header.tsx` | `docs/COMPONENT-GUIDELINES.md` |
| P1-4 | **Hero 与 `<main>` 嵌套不一致**：wheels / window-film / color-film 的 H1 落在 `<main>` 之外 | 对应 `page.tsx` | `docs/PAGE-STRUCTURE.md` |
| P1-5 | **小米与极氪撞色**（同为 `orange`） | `src/lib/product-routes.ts` | `docs/design-reviews/scoring/public-product-xiaomi.md` |
| P1-6 | **accent 色阶映射重复实现 ≥5 份**，新增 accent 必须全部同步 | 各品牌组件 | `docs/design-reviews` + `DESIGN.md §12` |
| P1-7 | **文档与代码冲突**：`docs/SPEC/INDEX.md` 的主题色（denza=blue / voyah=cyan / ledao=green / gaoshan=slate / zhijie=indigo）与代码不符；车型项目数（m6=30 / su7=26 / 9x=25）与 `projectCount`（17/12/18）不符 | `docs/SPEC/INDEX.md` | `docs/PROJECT-SPEC.md` |
| P1-8 | **`reduced-motion` 只处理了 3 处**，新增动效未覆盖 | 全站 | `DESIGN.md §7` |
| P1-9 | **魔法数**：`blog/page.tsx` 用 `9` 而别处用 `BLOG_PAGE_SIZE` | `src/app/blog/page.tsx` | `docs/COMPONENT-GUIDELINES.md` |
| P1-10 | **`StickyTabBar` 注释说 3 个 tab，实际只传 2 个** | 对应组件 | `docs/COMPONENT-GUIDELINES.md` |

---

## 🟡 P2 — 技术债清理（择机，别攒）

| # | 项 | 说明 |
|---|---|---|
| P2-1 | **死代码清理** | `OptimizedImage.tsx`、`src/lib/images.ts`、`src/lib/image.ts`、`src/hooks/use-unsaved-changes-guard.ts`、`FeaturedStores.tsx`、`CurrentCopyrightYear.tsx`、`ui/sonner.tsx` 的 `Toaster` 均**零生产引用**；`BLUR_DATA_URL` 在 4 个文件重复定义 |
| P2-2 | **图片资产外置** | 本地图片体积已到需要专门脚本清理/校验的规模（含未跟踪的 756 张），`docs/deployment/COS-image-cdn-plan.md` 已有 COS 100GB + CDN 方案，未启用 |
| P2-3 | **服务页三种范式归一** | 主题型组件栈（10 个）/ `ProductDetail` 单体（`ppf`）/ `notFound()` 占位（`business-comfort`）—— 本项目最大技术债来源 |
| P2-4 | **品牌系列页复用车型页渲染器** | 12 套手写组件栈 vs 19 个共用 `VehiclePageRenderer`，区块语义高度重叠却不复用 |
| P2-5 | **僵尸配置清理** | `package.json` 仍保留 `prisma` / `msw` 配置键，以及 `description` 里的 "and admin CMS"；`name` / `repository` 还是模板的 `ai-website-cloner-template` |
| P2-6 | **`src/components/ui/` 风格统一** | 5 个 shadcn 基础件是无分号 + token 配色，与站点手写的"分号 + zinc/orange"是两套 |
| P2-7 | **12 个校验脚本未被任何地方调用** | `scripts/` 下有 12 个 `check-*/verify-*` 脚本未接进 npm script 或 CI，要么接线要么归档（清单见 `docs/REGISTRY.md`） |

---

## 🔵 待办 · 基建与合规（来自交接文档，未复核时效）

> 依据 `docs/deployment/ssh-handoff-codex.md` §10（成文于 2026-09-06），**执行前先确认是否仍然成立**。

| # | 项 | 现状 |
|---|---|---|
| F-1 | **Gitee Webhook → 服务器自动部署** | 未接。当前是手动「本地推 → 服务器拉 → 构建 → 同步」 |
| F-2 | **COS 100GB 静态托管 / CDN** | 有规划文档，未启用（同 P2-2） |
| F-3 | **公安备案号页脚** | 交接文档记为「备案流程中」 |
| F-4 | **隐私政策页** | 未做 |
| F-5 | **`ops/deploy/*.sh` 与 `ops/nginx/lanhui.conf` 重写或删除** | 三份都是**失真的历史模板**（写死 `/var/www/lanhui` + `current` 软链 + www 域名 + `/etc/nginx/ssl` 证书路径），生产完全不用。要么按真实拓扑重写，要么删掉以免后人误跑 —— 见 `docs/DEPLOYMENT.md` |

---

## ⏳ 待核实（我没能确证，别当结论用）

- `geo-seo-hub/`、`outputs/`、`runs/`、`skills/`、`skill-plan/`、`Volumes/`、`Users/` 这几个未跟踪目录**是什么、要不要入库**
- `docs/design-reviews/` 与 `docs/audits/` 里的评分/审计基于 **2026-06 ~ 2026-08** 的旧版本（那时还有 `/news`、`/admin`），
  结论对今天的**适用边界**需要重新确认
- `docs/SPEC/INDEX.md` 里车型项目数（m6=30 等）与代码 `projectCount` 的差异，**哪边才是对的**
- `docs/deployment/url-canonical-status-20260818.md` 自身矛盾（一处写全站带尾斜杠，§8 又写无尾斜杠），实测 sitemap 无尾斜杠

---

## 怎么用这个文件

1. 只在这里放**能给出证据**的条目；想不出来源的想法先写进「待核实」。
2. 每条至少带三样：**现象 / 影响面 / 动作**。
3. 修完不删行，移到 `CHANGELOG.md` 当日章节，这里标记 `✅ 已修（YYYY-MM-DD）`。
4. P0 清空之前，不要往 P2 上花时间。
