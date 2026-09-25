---
页面名称: TEI卡钳详情模板
页面路由: /product/tei-brake/[slug]
页面类型: 动态路由模板
实现状态: 🔁 动态生成
源文件: src/app/product/tei-brake/[slug]/page.tsx
最后更新: 2026-09-14
---

# TEI 卡钳详情模板（/product/tei-brake/[slug]）

## 一、页面定位

> 一句话：TEI Racing 每款刹车卡钳 / 钛合金配件一个参数页，展示型号、安装位置、活塞数、结构工艺、可选颜色与「适配轮毂 × 碟盘」配置，**全页不含价格**，统一引导「到店按实车核对」。

- **目标用户**：考虑刹车升级、在具体 TEI 型号之间比选的车主。
- **核心诉求**：看清型号规格与轮毂适配配置，判断方向后到店确认。
- **转化目标**：到店咨询（核对盘型 / 桥码 / 电子驻车兼容性）。
- **在导航中的位置**：不在主导航；由「TEI 刹车卡钳」总页（`/product/tei-brake`）进入。

## 二、SEO 元信息（每型号独立生成）

| 项目 | 内容 |
|---|---|
| Title | `{product.model} {product.description}｜TEI 刹车卡钳 - 蓝辉轻改` |
| Description | `TEI Racing {model}，{axle ?? 前后}适用，{pistonCount 活塞，}{construction}。适配配置与颜色详见页面，适配方案请到店确认。` |
| Canonical | `/product/tei-brake/{slug}` |
| Keywords / 主题词 | 源码未单独提供 |
| OG 图 | `/images/products/tei/{slug}.webp`（alt：`TEI Racing {model} 刹车卡钳`） |
| 结构化数据 | 两条 JSON-LD：`Product`（name=TEI Racing {model}、brand=TEI Racing、image、`additionalProperty` 含安装位置/活塞数量/结构工艺；**刻意不含 offers / 价格**）+ `BreadcrumbList` |
| 是否进 sitemap | 否（`src/app/sitemap.ts` 只收录 `/product/tei-brake` 总页，未枚举型号详情页） |

## 三、页面结构（自上而下）

| 序号 | 区块 | 组件 | 作用 |
|---:|---|---|---|
| 1 | 顶部导航 | `<Header />` | 由 `src/app/product/layout.tsx` 统一提供 |
| 2 | 面包屑 | `<Breadcrumbs />` | 首页 / 产品中心 / TEI 刹车卡钳 / 型号 |
| 3 | 核心内容 | `TeiProductDetail` | 左产品图；右侧型号信息 + 规格卡 + 适配表 + 到店 CTA |
| 4 | 同系列其它选择 | 内联 `<section>` | 同 `series` 的最多 4 款推荐卡 |
| 5 | 页脚 | `<Footer />` | 由 `src/app/product/layout.tsx` 统一提供 |
| 6 | JSON-LD | `<script type="application/ld+json">` ×2 | Product + BreadcrumbList |

## 四、逐区块文案

### 1. 面包屑（`<Breadcrumbs />`）

来自 `getProductBreadcrumbs('/product/tei-brake/{slug}')`，通常为 首页 / 产品中心 / TEI 刹车卡钳 / `{model}`。

### 2. 核心内容（`TeiProductDetail`）

**左：产品图**
- 4:3… 实为方形图，`object-contain`；图左上角两个角标：系列码 `{product.series}`（橙底）+ 安装位置 `{product.axle}`。

**右：信息**
- 眉标：`TEI RACING · BRAKE`
- H1：`{product.model}`
- 副标题：`{product.description}`
- 规格卡（`SpecRow`）：
  - 安装位置：`{product.axle ?? "前后通用"}`
  - 活塞数量：`{pistonCount ? pistonCount + " 活塞" : "—"}`
  - 结构工艺：`{product.construction ?? "—"}`
  - 可选颜色：`{product.colors}`（颜色圆点/标签；为空显示「到店选色」）
- 适配轮毂与碟盘（`product.fitments.length > 0` 时）：
  - H2：适配轮毂与碟盘
  - 表格列：适配轮毂尺寸 / 碟盘直径（如 `20 寸 / 400 mm`）
  - 说明：`以上为该套件的轮圈配置，不等同于对您车型的适配承诺。`
- 供应商备注（`product.note` 存在时）：`备注：{note}`（如「专用车型:兰德酷路泽」）
- 到店 CTA 卡：`想确认这台车能不能装？` + `到蓝辉轻改顺德大良店，按实车核对盘型、桥码与电子驻车兼容性，再选颜色与碟盘尺寸。` + 按钮 `到店咨询`（→ `/contact`）
- 型号说明：`型号说明：TEI Racing {model}，资料整理自品牌公开产品信息。`

### 3. 同系列其它选择（内联 `<section>`）

- **H2**：同系列其它选择
- **推荐卡（`getTeiRelated(slug)`，最多 4 个）**：产品图 + `{model}` + `{description}`；点击进 `/product/tei-brake/{其它 slug}`。无同系列其它产品时整段不渲染。

### 4. 页脚（组件 `<Footer />`）

与首页一致。

## 五、CTA 与转化路径

| 层级 | 按钮/入口 | 文案 | 跳转目标 |
|---|---|---|---|
| 主 CTA | 到店咨询按钮 | 到店咨询 | `/contact` |
| 次 CTA | 同系列推荐卡 | 型号名 / 一句话说明 | `/product/tei-brake/{slug}` |
| 导航 CTA | Header | 查看门店 / 联系我们 | `/agent` / 微信咨询弹窗 |
| 私域入口 | Header / Footer | 联系我们 | 微信咨询弹窗 |

**转化路径**：产品中心 → TEI 刹车卡钳 → 型号详情 → 到店咨询（`/contact`）→ 到店核对适配

## 六、图片素材

| 用途 | 路径 | 说明 |
|---|---|---|
| 主产品图 / 推荐图 | `public/images/products/tei/{slug}.webp` | 命名规则：`slug` 即图片文件名；已转 WebP |
| Header / Footer Logo | `public/images/logo/lanhui-logo.png` | 统一引用 |

## 七、内链与跳转

**本页链出**：`/contact`（到店咨询）、同系列 `/product/tei-brake/{slug}`、面包屑 `/` `/product` `/product/tei-brake`。
**链入本页**：`/product/tei-brake` 总页产品卡；同型号的「同系列其它选择」互链；sitemap 未收录。

## 八、技术实现要点

- **generateStaticParams 数据来源**：`TEI_PRODUCTS.map((p) => ({ slug: p.slug }))`，直接枚举 `src/lib/tei-brake.ts` 的 `TEI_PRODUCTS` 常量。当前 **33 个详情页**（含 2 个钛合金配件：`ti-lug-bolts`、`ti-lug-nuts`）。
- **路由注册**：`src/app/product/tei-brake/[slug]/page.tsx`；渲染主体组件 `src/components/product/tei-brake/TeiProductDetail.tsx`（`"use client"`）。
- **布局复用**：`src/app/product/layout.tsx` 统一注入 `<Header />` / `<Footer />`。
- **数据/结构复用**：`getTeiProduct`（按 slug 查）、`getTeiRelated`（同系列推荐，最多 4）、`TEI_SERIES`（系列元数据，总页用）。
- **新增一页要改哪里**：**在 `src/lib/tei-brake.ts` 的 `TEI_PRODUCTS` 数组新增一条产品对象**（`model` / `slug` / `series` / `axle` / `description` / `construction` / `pistonCount` / `colors` / `fitments` / `note`），并把对应图片放到 `public/images/products/tei/{slug}.webp`。`generateStaticParams` 自动生成详情页；若新增了新系列，还需在 `TEI_SERIES` 补充系列元数据。
- **系列码说明**：`S` 街道特调 S / `P` 街道特调 P / `REAR` 后轮套装 / `T` 越野皮卡 / `GT` 赛事 / `HARDWARE` 钛合金配件。
- **注意事项**：数据层**不含任何报价字段**；结构化数据 `Product` 刻意不输出 `offers`。轮毂尺寸仅为套件轮圈配置，不是车型适配承诺（页面已加免责说明）。

## 九、待办 / 风险

- [ ] 33 个型号详情页未进 sitemap，抓取依赖总页内链。
- [ ] 无「车型适配查询」，用户仍得到店确认（数据本就不含车型适配）。
- [ ] `series`/`pistonCount` 为 `null` 的型号（如钛合金配件、T-Small）会显示「—」，可评估更好的缺省表达。

## 附：页面完整可见文案

> 典型实例：`/product/tei-brake/s-x`（S-X旗舰版，S 系列）

```
【面包屑】首页 / 产品中心 / TEI 刹车卡钳 / S-X    【图角标】S · 前轮
【眉标】TEI RACING · BRAKE    【H1】S-X旗舰版    【副标题】一体锻造十活塞套件
安装位置：前轮 ｜ 活塞数量：10 活塞 ｜ 结构工艺：一体锻造 ｜ 可选颜色：红色 / 黄色 / 淡绿 / 竞技灰 / 银色
【适配轮毂与碟盘】适配轮毂尺寸 / 碟盘直径：20 寸→400 mm ｜ 21 寸→420 mm ｜ 22 寸→440 mm
以上为该套件的轮圈配置，不等同于对您车型的适配承诺。
【到店 CTA】想确认这台车能不能装？ 到蓝辉轻改顺德大良店，按实车核对盘型、桥码与电子驻车兼容性，再选颜色与碟盘尺寸。 [到店咨询]
型号说明：TEI Racing S-X旗舰版，资料整理自品牌公开产品信息。
【同系列其它选择】S60 Explore — 竞技一体锻造六活塞套件 ｜ S60 Plus — 一体结构大六活塞套件 ｜ SR8 — 分体锻造八活塞套件 ｜ SR10 — 分体锻造十活塞套件
【Footer】（与首页一致，略）
```
