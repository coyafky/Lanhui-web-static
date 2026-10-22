# Changelog — 蓝辉轻改官网

> 最后核对：2026-09-23 · 依据：`git log`（仓库共 34 个提交，`8aa226f` 2026-07-19 首提交 → `16bc2c6` 2026-09-10 最新）
>
> **本项目不使用 git tag 做版本发布**（`git tag` 为空），`package.json` 的 `0.3.1` 是模板继承值、不代表站点版本。
> 因此本文件**按日期里程碑组织**，条目全部来自真实提交信息，不做预测性编排。
> 提交格式：`<type>: <中文摘要>`，type 沿用 `feat` / `fix` / `style` / `chore` / `refactor` / `perf` / `seo`。

---

## Unreleased — 工作区未提交（截至 2026-09-23）

⚠️ **这一批变更已写入工作区、但尚未提交，也未部署**（本地 `main` 领先部署源 `gitee/master` **5 个提交**）。

**新增 · 轮毂目录与单品详情（`/product/wheels` 扩写 + `/product/wheels/[model]`）**

- 新增数据管线：`scripts/build-wheel-data.mjs`（生成数据）、`scripts/import-wheel-images.mjs`（导入图片）、
  `scripts/verify-wheel-data.mjs`（校验）；产出 `src/lib/wheels.data.ts`（约 425KB，**生成物，勿手改**）
- 新增运行时模型：`src/lib/wheel-catalog.ts`、`wheel-catalog-projection.ts`（含配套测试）
- 新增组件：`src/components/product/wheel/` 下 `WheelCatalog` / `WheelCatalogCard` /
  `WheelCatalogFilterBar` / `WheelCatalogPagination` / `WheelCatalogView` /
  `WheelDetailAnchorNav` / `WheelDetailCta` / `WheelDetailHero` / `WheelDetailSpecs` / `WheelDetailSummary`
- 新增路由 `src/app/product/wheels/[model]/`

**新增 · 电动踏板适配车型总表（`/product/electric-steps/fitment`）**

- 新增 `src/lib/electric-step-fitment.ts`（+ 测试）、
  `src/components/product/electric-steps/ElectricStepFitmentCard.tsx` / `ElectricStepFitmentEntry.tsx`

**修改**

- 车型页批量调整（denza/d9、gaoshan/8、ledao/l90、li-auto ×5、nio/es8、voyah/dreamer、wenjie m6/m7/m8、
  xiaomi su7/yu7、xpeng/gx、zeekr 8x/9x、zhijie/v9 共 19 个 `page.tsx`）
- 对应产品数据更新：`denza-d9` / `gaoshan` / `voyah` / `wenjie` products 与 page-config
- `src/app/sitemap.ts`（接入轮毂单品与踏板总表）、`src/app/llms.txt/route.ts`、`scripts/cleanup-unused-images.mjs`
- `eslint.config.mjs`、`package.json`（新增 `wheels:data` / `wheels:images` / `wheels:verify` 三个 script）
- 图片资源重命名（6 个 `.webp`：`amxt-body-kit` → `exterior-body-kit`、`bskt-sport-body-kit` → `sport-body-kit`）

**风险提示**

- 本批含 **756 张未跟踪图片**（`public/images/products/wheel/` 等）与大量未跟踪源码。
  **未提交 = Gitee 上没有 = 服务器拉不到**，按现有部署链路（服务器从 Gitee `git pull` 后构建）这批内容无法上线。
- 另有历史遗留未跟踪目录：`geo-seo-hub/`、`outputs/`、`runs/`、`skills/`、`skill-plan/`（性质待确认，未纳入文档范围）。

---

## 2026-09-10

### 内容

- `16bc2c6` **feat(blog)**：新增车衣包边收边标准文章（博客第 **15** 篇）

---

## 2026-09-06

### 新增

- `67a8d2d` **feat**：TEI Racing 刹车卡钳产品展示页（**33 款，无价格**）
- `4a0c18b` **feat**：车主案例文章 —— 斯巴鲁 BRZ 白色改拉力蓝全车改色（含前后对比图）
- `df217ae` **feat**：车主案例文章 —— 蔚来 ES8 内饰地板升级（含 6 张实拍图）

> 🚨 **同日发生一次生产事故**：发布 `67a8d2d` 时一次未受控的 `next build` 造成 2C2G 小机资源饥饿
> （TCP 可连但 SSH banner / TLS / HTTP 首字节全部超时），强制重启后恢复，**旧版线上数据未丢失**。
> 复盘见 [`specs/active/deployment/ssh-handoff-codex.md`](specs/active/deployment/ssh-handoff-codex.md) §9。
> 此后服务器构建改为 **memory cgroup 受限构建**（`MemoryMax=1300M`）。

---

## 2026-08-27

### 内容系统

- `f755a4d` **feat**：博客内容处理升级 —— `markdown-it` 富格式渲染 + 分类 + 分页 + **12 篇真实文章**

---

## 2026-08-18

### SEO / GEO 收口（本日 5 个提交，是全年 SEO 最密集的一天）

- `e12fbf5` **fix**：**URL 唯一正式版本统一为裸域 `lanhuiqinggai.com`**（`www` 全部 301，canonical / sitemap / schema 同步改裸域）
- `90bbb87` **fix**：全站补齐 self-referencing canonical（17 个品牌页 + product / blog / agent 系列），统一裸域
- `c6315dd` **feat**：`robots.txt` 优化 —— 声明敏感路径 `Disallow` + **AI 爬虫显式放行**
  （GPTBot / ClaudeBot / Perplexity / Google-Extended / Bytespider），属 GEO 战略动作
- `b1b1529` **fix**：sitemap **只收录 `live` 状态服务**，排除 planned 占位页 `business-comfort`（修复 noindex 混入），61 条
- `f811db9` **feat**：新增 **`llms.txt`** —— 面向 AI Agent 的品牌知识导航（全真实 URL，自动从数据源生成，
  含 Brand / Stores / Products / VehicleGuides / Knowledge）

---

## 2026-08-09

### 产品线扩张

- `2729fb2` **feat**：新增**车载电视（car-tv）产品线** + PPF 防护原理 + 窗膜体验重构 + 轮毂/电踏/脚垫产品数据更新（39 文件，842 tests 通过）
- `98126c2` **refactor**：清理各品牌 `ScenarioSelector` / 系列服务冗余组件，**新增底盘（chassis）产品线**（73 文件，837 tests 通过）

### 移动端体验攻坚（本日 4 个提交专治 Tab 栏）

- `90bf9d4` **feat**：车型页项目按 category 分组，一次渲染一个分类，吸顶 Tab + 44px 触控（解决移动端滚动疲劳 + 白屏）
- `0f3ba30` **fix**：Tab 栏吸顶位置 `top-16` 避开 Header（64px）+ `z-40` 层级 + `scrollbar-hide`（原 `scrollbar-none` 是无效类）
- `52e29e2` **feat**：Tab 收敛为 **4+1 大分类**（全部 / 新车保护 / 外观升级 / 内饰座舱 / 功能便利），智能归一化兼容中英文 key，移动端一屏放下零横向滚动
- `204c84c` **fix**：Tab 栏移动端最终修复 —— `flex-wrap` 自动换行 + 移除 `-mx-4` 负 margin + `overflow-x-clip`
- `855fc2a` **chore**：清理临时移动端 Tab 测试脚本

### 文案合规与标点

- `3515263` **fix**：**文案合规修复** —— 联系页广告法高危词 / 车衣页 6 处（同款、进口、独创、数字、绝对化）/
  SU7 Ultra 28 处改运动风格 / 门店"旗舰" / 极限词 8 处 / 窗膜参数免责声明 / Hero 中文标点与 H1 关键词
- `7ea2780` **style**：全站中文标点统一（COPY-01）—— 仅替换纯中文字符间的英文逗号/冒号/分号/问号/叹号共 **75 处**，代码零误伤

---

## 2026-08-08

### SEO / 性能

- `282ec3a` **feat**：新增博客展示页 `/blog` + **3 篇真实文章**（Markdown 驱动）+ sitemap 集成 + 导航入口；12 个 Hero 图片迁移 preload
- `d242a71` **seo**：全站 canonical 补齐（17 页 + 动态页）+ 首页 OG 默认图 1200×630 + `og:url` / `siteName` / twitter 卡片
- `c7cc2f9` **perf**：12 个 Hero 图片 `priority` 迁移到 **`preload`**（Next 16 新 API），优化 LCP 预加载
- `999691a` **feat**：sitemap 全量补全（45 → 60+ URL），含品牌系列 / 车型 / 窗膜套餐 / 分类页，`LAST_MOD` 动态化；删 2 个未使用组件清零 lint errors
- `57a855a` **feat**：sitemap 100% 覆盖 57 页面（补 window-film 套餐 / agent / business-comfort / wenjie 车型）；
  清理 22 个 contact-sheet + 26 个 json + 20 个 md + 死图，共 **约 10MB** QA 产物

### 合规与仓库卫生

- `7a8d310` **feat**：挂载 **ICP 备案号 粤ICP备2026102356号-2** 并链接工信部官网，忽略 alma 快照
- `8567041` **chore**：清理误提交的 alma 本地文件并加入 `.gitignore`

---

## 2026-08-01

- `4397194` **feat**：更新品牌 FAQ 与产品数据，新增底盘门店图片，补 Header 测试，清理废弃组件

---

## 2026-07-22

- `83283da` **chore**：配置生产域名与门店图片

---

## 2026-07-20 — 模板 → 静态站收口

- `3aca951` **chore**：最终清理 —— 移除 admin / superpowers 文档与 AI dotfiles，**为静态站重写 `CLAUDE.md` / `AGENTS.md`**
- `4452fa7` **chore**：**重写 `specs/ARCHITECTURE.md` 以匹配静态站**，移除残留 admin / CMS 文档
- `11220c1` / `c5c0faa` **chore**：把 `docs/` 加入 `.gitignore`，并把已跟踪的 docs 从 git 移除

> ⚠️ 这两条正是「`docs/` 不进版本库」的由来 —— 所以本文件所在的 `docs/` 是本地文档区，别处引用时注意。

---

## 2026-07-19 — 项目起点

- `e1f5375` **refactor**：清理动态站残留，加入静态部署工具（`ops/deploy/`、`ops/nginx/`）
- `8aa226f` **feat**：初始化蓝辉静态企业官网

> 📌 **重要背景**：仓库是从开源模板 `ai-website-clone-template` 派生（`package.json` 仍保留该 name / repository 字段），
> 早期形态包含 admin CMS、Prisma、API routes 等，**均已在本日之后陆续删除**。
> 因此 `specs/archive/prd/`、`specs/` 里关于 admin / Prisma / API 的内容都是**模板期遗物**，不代表现状。

---

## 变更记录方式约定

1. 每次部署上线后，在 `## Unreleased` 之上新开一个 `## YYYY-MM-DD` 章节。
2. 条目写**做了什么 + 影响面**，不写"优化了一下"这类无信息量描述。
3. 破坏性变更（URL 契约、方向性 SEO 决策）单独用 `> ⚠️` 标注。
4. 涉及生产事故，写入当日的 `> 🚨` 引用块，并链接复盘文档。
5. 本文件与 `git log` 应保持一致；**以 git 为准**，发现漂移回来修本文件。
