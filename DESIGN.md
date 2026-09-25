# DESIGN.md — 蓝辉轻改官网视觉 / 布局 / 交互设计规范

> 最后核对：2026-09-23 · 依据：`src/app/globals.css`、`src/app/layout.tsx`、`src/components/{Header,Footer,Hero}.tsx`、
> `src/lib/product-routes.ts`、`docs/design-reviews/`、`docs/audits/visual-page-audit-lanhui-20260809.md`
>
> 本文件是**约束**，不是灵感板。写页面前先读这里；发现代码与本文冲突，以代码为准并回来改本文。
> 全站视觉的历史评审记录在 [`docs/design-reviews/`](design-reviews/INDEX.md)。

---

## 1. 设计定位

| 项 | 定位 |
|---|---|
| 品牌 | 蓝辉轻改 LANHUI · 汽车轻改装 + 车身膜服务 |
| 主打区域 | 广州 / 佛山 · 顺德大良店 |
| 受众 | 新能源车主（问界 / 小米 / 极氪 / 理想 / 蔚来 / 腾势…），25–45 岁，决策前重度搜索 |
| 气质 | **专业、克制、可信**。卖的是"手艺 + 用料 + 门店"，不是氛围感 |
| 反面 | 不玩炫技 3D、不做大面积亮色块、不用夸张动效、不堆促单话术 |
| 核心目标 | 让访客在 30 秒内确认「这家店懂我的车」并产生咨询动作 |

**一句话视觉主张**：**深色工业底 + 橙色品牌光**。深色锌灰承托实拍车图，橙色只用在「行动」与「强调」上。

---

## 2. 色彩系统

### 2.1 双层实现（重要，先理解再改）

项目里**同时存在两套色彩机制**，职责不同：

| 层 | 位置 | 用途 |
|---|---|---|
| **页面壳层** | Tailwind 原生色（`zinc-950` / `white` / `orange-500`…）直接写在 JSX 里 | 站点实际外观。整站 `bg-zinc-950 text-white` |
| **shadcn token 层** | `src/app/globals.css` 的 `:root` / `.dark` oklch 变量 | 供 `src/components/ui/` 的基础件（button / card / badge / table）使用 |

根布局已经**强制深色**，不存在亮色模式切换：

```tsx
// src/app/layout.tsx
<html lang="zh-CN" className="h-full antialiased dark" suppressHydrationWarning>
  <body className="min-h-full flex flex-col bg-zinc-950 text-white" suppressHydrationWarning>
```

> ⚠️ `:root` 里那套浅色 oklch 值是 shadcn 初始化的残留，**当前不生效**（`.dark` 恒在）。别误以为站点支持双主题。

### 2.2 深色 token 值（`globals.css` `.dark`）

| token | 值 | 用途 |
|---|---|---|
| `--background` | `oklch(0.145 0 0)` | 底（≈ zinc-950） |
| `--foreground` | `oklch(0.985 0 0)` | 主文字 |
| `--card` | `oklch(0.205 0 0)` | 卡片面（≈ zinc-900） |
| `--muted` / `--muted-foreground` | `oklch(0.269 0 0)` / `oklch(0.708 0 0)` | 次级面 / 次级文字 |
| `--border` | `oklch(1 0 0 / 10%)` | 描边（白色 10% 透明） |
| `--primary` / `--primary-foreground` | `oklch(0.922 0 0)` / `oklch(0.205 0 0)` | 主按钮（深色站里的"白底黑字"） |
| `--destructive` | `oklch(0.704 0.191 22.216)` | 错误态 |
| `--ring` | `oklch(0.556 0 0)` | 焦点环 |

### 2.3 品牌橙（站点主强调色）

深色站不用 token 里的 primary 做强调，而是**橙色**。博客正文区把用法定死了，可当全站参考：

| 角色 | 色值 | 出处 |
|---|---|---|
| 主强调 / 引用左边框 / checkbox | `#f97316`（orange-500） | `.prose-article blockquote` |
| 链接 / 次级强调 | `#fb923c`（orange-400） | `.prose-article a` |
| 行内代码文字 | `#fdba74`（orange-300） | `.prose-article code` |
| 渐变 CTA | `from-orange-500 to-amber-500` | `PpfMobileCtaBar` 等 |

**用法纪律**：
- 橙色**只给行动与强调**（主 CTA、当前项、关键数字、图标高亮）。正文段落不上橙。
- 大面积橙色渐变块全站避免；渐变只用于按钮与细线装饰。
- 悬停态优先用**透明度变化**（`bg-white/[0.06]` → hover 提高），而不是换色。

### 2.4 品牌强调色（`AccentColor`）

每个车系/服务页有独立强调色，**唯一权威来源是 `src/lib/product-routes.ts` 的 `accentColor`**：

| 品牌 | accent | 品牌 | accent |
|---|---|---|---|
| 问界 wenjie | `cyan` | 腾势 denza | `pink` |
| 小米 xiaomi | `orange` | 岚图 voyah | `violet` |
| 极氪 zeekr | `orange` | 乐道 ledao | `blue` |
| 理想 li-auto | `amber` | 高山 gaoshan | `teal` |
| 特斯拉 tesla | `red` | 智界 zhijie | `amber` |
| 小鹏 xpeng | `emerald` | 蔚来 nio | `sky` |

枚举全集（`AccentColor`）：`cyan` `orange` `amber` `emerald` `violet` `pink` `blue` `teal` `red` `sky`。

> ⚠️ **两个已知冲突，改色前先看**：
> 1. `AGENTS.md` 里写的旧映射（xiaomi=orange / wenjie=cyan / zeekr=orange / flooring=amber）是**早期版本的简化说法**，`product-routes.ts` 才是事实源。
> 2. `docs/SPEC/INDEX.md` 记的主题色（denza=blue / voyah=cyan / ledao=green / gaoshan=slate / zhijie=indigo）**与代码不一致**，以代码为准。
> 3. **小米与极氪撞色**（都是 orange），是 `docs/design-reviews/scoring/public-product-xiaomi.md` 里已记录的遗留问题（P1）。
>
> 另一个技术债：`accent → className` 的色阶映射在**至少 5 个组件里各写了一份**，新增 accent 时必须全部同步。

---

## 3. 字体与字阶

`globals.css` 的 `@theme inline` 定义：

```
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
--font-heading: var(--font-sans)   /* 标题与正文同族 */
```

- **没有引入 Web 字体**（无 `next/font`、无字体文件）。中文走系统字体栈，是性能上的有意取舍。
- 标题与正文同族，靠**字重 + 字号**拉开层级，不靠字体差异。

| 层级 | 约定 | 示例 |
|---|---|---|
| H1 | `text-3xl md:text-4xl` 量级，`font-bold` | Hero 主标题 |
| H2 | `text-2xl` 量级，`font-bold`，`text-white` | 版块标题 |
| H3 | `text-xl` 量级，`font-semibold` | 卡片标题 |
| 正文 | `text-sm` / `text-base`，`text-zinc-300`/`text-zinc-400` | 段落 |
| 辅助 | `text-xs`，`text-zinc-500` | 注释、免责声明 |

- 中文正文行高取 `leading-relaxed` 一档；博客正文固定 `line-height: 1.85`（`.prose-article`）。
- **中英混排**：数字与英文缩写（SU7 / MEGA / PPF / TEI）保持原写法，其余用中文全角标点。

> 📌 **标点纪律（全站已执行过一轮）**：提交 `7ea2780` 统一了中文标点 ——
> 仅替换纯中文字符之间的英文 `,` `:` `;` `?` `!`，共 75 处。新增文案请遵守同一规则。

---

## 4. 圆角 / 描边 / 阴影

| 元素 | 约定 | 实测使用量 |
|---|---|---|
| 胶囊 / 按钮 / Chip | `rounded-full` | 336 处（**第一大户**） |
| 卡片 | `rounded-xl` / `rounded-2xl` | 124 / 229 处 |
| 小控件 / Badge | `rounded-md` / `rounded-lg` | 262 / 109 处 |
| 大容器 / 图片 | `rounded-2xl` / `rounded-3xl` | 229 / 40 处 |

- **描边优先于阴影**：深色站里主要用 `border-white/5`、`border-white/10` 划边界
  （博客区统一 `rgba(255,255,255,0.08)`）。
- 阴影只用于**浮层**（移动端抽屉 `shadow-2xl`）和**彩色按钮**（`shadow-orange-500/20`），不做普通卡片的投影。
- 圆角基准 token：`--radius: 0.625rem`，阶梯 `sm 0.6× / md 0.8× / lg 1× / xl 1.4× / 2xl 1.8× / 3xl 2.2× / 4xl 2.6×`（主要给 `ui/` 基础件用）。

---

## 5. 布局与栅格

### 5.1 容器

全站主导容器：

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

| 宽度 | 使用量 | 场景 |
|---|---|---|
| `max-w-7xl` | **240 处** | 页面主容器（默认选择） |
| `max-w-2xl` / `max-w-3xl` | 115 / 81 处 | 长文正文栏 |
| `max-w-xl` / `max-w-lg` | 75 / 19 处 | 单列内容块、模态框 |
| `max-w-6xl` | 32 处 | 稍窄的版块 |

**铁律：任何新页面区块都用 `max-w-7xl mx-auto` + 三段式横向内边距（`px-4 sm:px-6 lg:px-8`）。**
不要自造容器宽度，否则版心错位会立刻显形。

### 5.2 断点

Tailwind 默认断点，实测使用频次：`sm:` 966 · `md:` 927 · `lg:` 855 · **`xl:` 仅 14**。

→ **以 `sm` / `md` / `lg` 三档为主**，`xl` 基本不用。站点设计目标是 1280px 宽即达终态。

**必须验证的三个视口**（沿用项目视觉评审标准）：

| 视口 | 宽度 | 说明 |
|---|---|---|
| Mobile | 390 | iPhone 主战场，**第一优先** |
| Tablet | 768 | 平板/竖屏 |
| Desktop | 1440 | 桌面终态 |

### 5.3 Header 与首屏

- Header：`sticky top-0 z-50`，**滚动时高度收缩** `h-20 → h-16`，配 `transition-all duration-300`。
- 页面区块若需吸顶（如车型页 Tab 栏），**必须避开 Header**：`top-16` + `z-40`（低于 Header 的 z-50）。
  这是提交 `0f3ba30` 修复过的真实 bug，别重犯。

---

## 6. 组件视觉规范

- **按钮**：胶囊形（`rounded-full`），触控高度 ≥ 44px。主 CTA 用橙色渐变 + `shadow-orange-500/20`；
  次级用 `bg-white/[0.06]` 幽灵底 + 细描边。按下态 `active:scale-[0.97]`。
- **卡片**：`rounded-2xl` + `border border-white/5`，悬停靠提升透明度而非位移。
- **表格**（车型页项目表）：移动端必须可横向滚动且**不撑破页面**（`overflow-x-auto` + `-webkit-overflow-scrolling: touch`）；
  表头 `whitespace-nowrap`，隔行 `rgba(255,255,255,0.02)`，悬停行淡橙。
- **Badge / Chip**：`rounded-full` + 半透明底 + accent 色文字，用于分类标签与座椅数/车型规格。
- **基础件来源**：`src/components/ui/` 只有 5 个 —— `badge` `button` `card` `sonner` `table`，由 shadcn 生成。
  ⚠️ 这 5 个文件用的是**无分号 + token 配色**风格，与站点手写的 zinc/orange 风格是两套；改动它们要单独验证。

---

## 7. 动效规范

实测：`transition-colors` 324 处（绝对主流）、`transition-transform` 124、`transition-all` 88；
真正的 `animate-*` 只有 `animate-pulse` 3 处 + `animate-spin` 2 处。

**结论：本站几乎不做入场动画。** 这是刻意的（性能 + 克制）。

| 允许 | 说明 |
|---|---|
| 颜色过渡 | `transition-colors`，hover/focus 状态 |
| 位移/缩放 | `transition-transform`，限 `active:scale-[0.97]`、抽屉滑入 |
| 加载态 | `animate-pulse`（骨架屏）、`animate-spin`（LoadingSpinner） |
| 时长 | 200–300ms（`duration-300` 常见） |

**禁止**：滚动视差、元素逐个入场、自动轮播以外的循环动画、`animate-bounce` 类趣味动效。

**必须配 `motion-reduce`**：

```tsx
className="... transition-transform motion-reduce:transition-none"
```

（现有实现参考 `src/components/product/SeriesMobileCtaBar.tsx`。全站目前只在 3 处处理了 reduced-motion，新增动效请补齐。）

---

## 8. 图片规范

- 站点是 `images.unoptimized: true` 的静态导出，**图片全部预处理好**（WebP，构建期用 `sharp`）。
- **比例以 `aspect-[4/3]` 为准**（52 处），配 `object-contain`（产品图不能裁切，整车/产品必须完整可辨）。
  其他在用比例：`16/10`（3）、`8/5`（2）、`3/4`（2）、`9/16`（1）、`5/2`（1）。
- 必须显式给 `sizes`，避免小屏拉全尺寸资源。
- Hero 首屏大图用 Next 16 的 **`preload`**（不是旧的 `priority`），优化 LCP —— 见提交 `c7cc2f9`。
- 所有占位图由 `scripts/generate-placeholders.mjs` / `scripts/generate-wechat-qr-placeholder.mjs` 生成；
  OG 图由 `scripts/gen-og.mjs` 生成（首页 OG 为 1200×630）。
- 图片体积受门禁约束，清理脚本 `scripts/cleanup-unused-images.mjs`，校验脚本 `scripts/verify-static-images.mjs`。

> ⚠️ 历史教训（`docs/design-reviews/scoring/public-product-wenjie.md`）：**30+ 张 pending 占位图**曾把该页评分从 B 拉到 C（73 分）。
> **上线前必须确认零占位图**，这是视觉评审里权重最高的扣分项。

---

## 9. 无障碍（A11y）

全站 182 个组件文件带 `aria-label`。

| 要求 | 实现 / 现状 |
|---|---|
| 跳过导航 | `SkipToContent` 组件 → **需要目标 `<main id="main-content" tabIndex={-1}>`** |
| 焦点管理 | `src/lib/use-focus-trap.ts`，用于移动端导航抽屉与微信咨询弹窗 |
| 语义标签 | `aria-label="主导航"` `aria-label="切换菜单"` `aria-label="移动端导航菜单"` 等均为中文语义标签 |
| 触控目标 | **≥ 44px**（`min-h-11` / `min-h-[44px]` / `min-h-[48px]`） |
| 键盘可达 | 下拉菜单、抽屉、弹窗必须可 Tab 到、可 Esc 关 |
| 焦点可见 | 依赖 `--ring`；不要用 `outline-none` 抹掉焦点环 |
| 图标按钮 | 必须有 `aria-label`（纯图标无文字时） |

**已知缺口（改到相关页面时顺手修）**：
1. `/product/ppf`（`ProductDetail.tsx`）与 `/product/window-film/<slug>`（`WindowFilmPackageDetail.tsx`）
   渲染的 `<main>` **缺 `id="main-content"`** → 跳过链接点了没反应。
2. 门店省/市页、`/brand/history` 的面包屑 `<nav>` **缺 `aria-label`**（门店详情页有，其余漏）。
3. 分页页码 36px、Header 按钮 40px **低于 44px 基线**。

对照标准：`docs/design-reviews/` 的 5 维度评分（D1 Layout / D2 Visual / D3 Color / D4 Typography / D5 A11y），
全站均分曾为 84.7/100，**A11y 是五个维度里最弱的一项（16.1/20）**。

---

## 10. 文案与合规（设计的一部分）

文案是**有法律约束**的，不是文案偏好问题。提交 `3515263` 专门做过一轮合规修复。

**禁用**：极限词 / 绝对化用语 ——「最」「第一」「唯一」「顶级」「旗舰」「独创」「进口同款」等，
以及无法自证的数字化承诺。

**必配**：产品参数页要有免责声明（如窗膜参数）。

**价格纪律**：产品展示页**不标价格**（如 TEI 刹车卡钳 33 款页面刻意无价格），价格由门店确认。

改文案前先看 `docs/audits/copy-review-20260808.md`。

---

## 11. 改设计的标准动作

1. 先看 `docs/design-reviews/INDEX.md` 里该类页面是否已有评分卡与改版建议，别重复踩坑。
2. 改动落在 `src/app/**` 或 `src/components/**`，**样式只写 Tailwind utilities**，不新增 CSS 文件。
3. 三个视口自测：**390 / 768 / 1440**。
4. 过门禁：`npm run lint && npm run typecheck && npm test`（新页面还要跑构建）。
5. 涉及视觉大改，产出截图存 `docs/design-reviews/` 或 `docs/audits/`（沿用其命名规范）。

---

## 12. 已知设计债（2026-09-23 快照）

| # | 问题 | 位置 |
|---|---|---|
| 1 | 小米与极氪**撞色**（同为 orange） | `product-routes.ts` |
| 2 | `accent → className` 映射**至少 5 份重复实现** | 各品牌组件 |
| 3 | 品牌系列页 12 套**手写组件栈**，车型页 19 个共用渲染器 —— 语义重叠却不复用 | `src/components/*/` |
| 4 | accent 与 SPEC 文档记载不一致（denza/voyah/ledao/gaoshan/zhijie） | `docs/SPEC/INDEX.md` |
| 5 | 跳出链接失效 2 处、面包屑 aria 缺失 3 处、触控 44px 缺口 | 见 §9 |
| 6 | Hero 与 `<main>` 嵌套关系不一致（wheels / window-film / color-film 的 H1 在 `<main>` 外） | 见 `docs/PAGE-STRUCTURE.md` |
| 7 | shadcn 基础件风格（无分号 + token）与站点手写风格（分号 + zinc）不统一 | `src/components/ui/` |
| 8 | `OptimizedImage` / `src/lib/images.ts` / `src/lib/image.ts` 等为**零引用死代码** | 见 `docs/COMPONENT-GUIDELINES.md` |
