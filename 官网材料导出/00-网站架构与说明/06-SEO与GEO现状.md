---
文档名称: SEO 与 GEO 现状
文档类型: 网站架构与说明
读者: 品牌方非技术团队 + 未来接手的开发 / 运营
数据来源: src/app/sitemap.ts、src/app/robots.ts、src/app/llms.txt/route.ts、src/lib/site-url.ts、src/lib/schema.ts、src/lib/geo.ts、scripts/gen-og.mjs、docs/SPEC/图片性能.md、docs/audits/*
最后更新: 2026-09-14
---

# SEO 与 GEO 现状

> SEO = 传统搜索引擎可见度；GEO = 让 AI 搜索/问答（豆包、元宝、Kimi、DeepSeek 等）能读到并引用官网。本站两条线共用同一套「URL 单源 + 结构化数据 + 内容」基础设施。

## 一、URL 单源与 canonical 策略

### 1.1 URL 单源（`src/lib/site-url.ts`）

```ts
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit).toString().replace(/\/$/, "");
  if (process.env.NODE_ENV === "production") return "https://lanhuiqinggai.com";
  return "http://localhost:3000";
}
```

优先级：环境变量 `NEXT_PUBLIC_SITE_URL` → 生产默认裸域 → 本地 `localhost:3000`。**sitemap / robots / llms.txt / schema / geo 都引用它**，改域名只需改一处。

### 1.2 Canonical 策略（据 `docs/deployment/seo-url-contract.md`）

| 项目 | 标准 |
|---|---|
| Protocol | `https` |
| Host | `lanhuiqinggai.com`（裸域，不用 www） |
| HTTP→HTTPS / www→裸域 | 301（保留 path，一跳完成） |
| Trailing Slash | 全站统一带斜杠（`trailingSlash: true`） |
| Canonical | **Self-referencing**（每页 canonical 指向自己） |
| Sitemap | 只出现正式 URL（裸域 + 尾斜杠） |
| 内链 | 站内相对路径 `/xxx`，由 `metadataBase` 解析 |
| Schema `@id` | 围绕 `https://lanhuiqinggai.com` identity namespace |

`layout.tsx` 的 `metadataBase` = `NEXT_PUBLIC_SITE_URL ?? "https://lanhuiqinggai.com"`；各页面在 `metadata.alternates.canonical` 声明自己的路径（如 `/product/wheels`）。

## 二、sitemap（`src/app/sitemap.ts`）

- 构建时生成，`export const dynamic = "force-static"`
- 9 组来源：静态核心路由 + `ALL_BRANDS` + `ALL_MODELS` + live `ALL_SERVICES` + 窗膜套餐 + 旧 slug 归一 + 省市 + 门店 + 博客文章
- **实测 `out/sitemap.xml` = 74 条 URL**（详见 `03-页面清单与路由地图.md` 第七节）
- priority 映射：P0→0.9、P1→0.8、P2→0.7；`lastmod` = 构建时间 `new Date()`
- 不收录：TEI 33 个型号详情页、博客分类/分页页（共 12）、`business-comfort`（planned）、错误页

## 三、robots.txt（`src/app/robots.ts`）

```
User-Agent: *           Allow: /     Disallow: /api/ /admin/ /preview/
User-Agent: GPTBot      Allow: /
User-Agent: ClaudeBot   Allow: /
User-Agent: PerplexityBot Allow: /
User-Agent: Google-Extended Allow: /
User-Agent: Bytespider  Allow: /
Host: https://lanhuiqinggai.com
Sitemap: https://lanhuiqinggai.com/sitemap.xml
```

设计原则（源码注释）：① 绝不写 `Disallow: /`；② `Allow: /` 放行全站；③ 预声明未来敏感路径；④ **AI 爬虫明确放行**（GEO 战略：AI 引用 = 免费流量）；⑤ Sitemap + Host 用裸域。

## 四、llms.txt（`src/app/llms.txt/route.ts`）

### 4.1 作用

`/llms.txt` 是**面向 AI Agent 的品牌知识导航文件**（llms.txt v2 提案），与 sitemap/robots/schema 各司其职：

| 文件 | 职责 |
|---|---|
| `sitemap.xml` | URL 清单 |
| `robots.txt` | crawler 权限 |
| `schema.org` | 实体语义（结构化数据） |
| **`llms.txt`** | **Agent 导航**（经人工选择、适合 LLM 快速了解品牌的入口） |

### 4.2 结构与内容（实测产物 11,672 字节）

按 `Brand → Stores → Products → Vehicle Guides → Knowledge → Optional` 组织，所有 URL **从数据源生成（禁止硬编码虚构路径）**：

- **Brand**：官网 / 品牌介绍 / 品牌动态 / 联系我们
- **Stores**：省份门店 + 门店条目（含地址、描述）
- **Products**：按分组列出 live 服务——膜系 / 轻改装备 / 座舱与内饰 / 养护与美容 + 窗膜 7 套餐
- **Vehicle Guides**：12 个品牌 + 各自适配车型链接
- **Knowledge**：已发布博客文章
- **Optional**：产品中心、品牌历史

响应头：`Content-Type: text/plain; charset=utf-8`、`Cache-Control: public, max-age=3600`。

### 4.3 对 AI 搜索（GEO）的意义

- 给 AI 一份**权威、去噪、可引用的官方入口清单**，降低「读到二手/错误信息」的概率
- 明确「引用品牌/产品/门店信息时应优先使用本文件指向的官方资料」
- 是「让 AI 能读到我们」的基础设施之一（配合 robots 放行 AI 爬虫）

## 五、结构化数据（JSON-LD）分布

> 下列为 `src/app/**/page.tsx` 内联 `@type` 的实测扫描结果 + `src/lib/schema.ts`/`geo.ts` 提供的 schema。

| Schema 类型 | 用在哪些页面 | 提供者 |
|---|---|---|
| **Organization** | 全站（`layout.tsx` 注入） | `schema.ts` `organizationSchema()` |
| **BreadcrumbList** | 产品/品牌/车型/门店/博客文章页 | `geo.ts` `generateBreadcrumbSchema()`、`product-breadcrumbs.ts` |
| **CollectionPage + ItemList + ListItem** | 产品中心总览、全部产品大类页、全部品牌系列页 | 各页面内联 |
| **ItemList + ListItem** | 全部车型页、部分品牌页（denza/gaoshan/ledao/nio/voyah/wenjie/zeekr/zhijie） | 各页面内联 |
| **Product** | `/product/car-tv`、`/product/chassis`、`/product/tei-brake/[slug]`；`xiaomi/su7`、`xiaomi/yu7` 的 ItemList 子项 | 内联 / `schema.ts` `productSchema()` |
| **Article** | `/blog/[slug]`（含 author/publisher = Organization） | `blog/[slug]/page.tsx` 内联 |
| **LocalBusiness** | `/agent/store/[id]`；品牌页（xiaomi/li-auto/voyah/gaoshan/tesla/xpeng/ledao）作为 `provider` | `geo.ts` `generateLocalBusinessSchema()` |
| **AutoRepair + PostalAddress** | `/product/denza`、`/product/xpeng` | 页面内联 |
| **WebPage** | `/product/xiaomi`、`/product/li-auto` | 页面内联 |
| **Brand / PropertyValue** | TEI 卡钳详情、car-tv、chassis（品牌与参数属性） | 页面内联 |

序列化统一走 `safeJsonLd()`（`src/lib/json-ld.ts`，转义 `</` 防 script 注入）。

> 缺口（据 SEO 审计）：**首页只有 Organization**，缺 `LocalBusiness` + `FAQPage`；产品大类页多数缺 `Product`（仅 car-tv/chassis 有）。详见待办章节。

## 六、OG 图与图片性能

### 6.1 OG 图生成（`scripts/gen-og.mjs`）

- 用 `sharp` 把一段内联 SVG 渲染为 `public/images/social/og-default.png`
- 尺寸 **1200×630**，浅蓝底渐变 + 橙色底条，文字「蓝辉轻改 LANHUI / 汽车轻改装 · 车膜服务 / 让爱车更有型，也更好用」
- `layout.tsx` 的 `openGraph.images` 与 `twitter.images` 默认指向它；各动态页会覆盖为自身主图（如 TEI 详情用 `/images/products/tei/<slug>.webp`）

### 6.2 图片性能策略（`docs/SPEC/图片性能.md`）

该文件是一份 **P1-4 图片性能修复规格**（含问题背景与目标），记录了当时的性能问题：

| 页面 | 记录值 |
|---|---|
| `/product/flooring` | Lighthouse Performance ≈ 59，LCP ≈ 6.6s |
| `/brand/certifications` | Lighthouse Performance ≈ 63，LCP ≈ 6.0s |
| `/product/wenjie` | 30+ 产品图，存在 `generated-preview`/`pending-review` 状态 |

规格要求：审计图片资产、生成 WebP 变体、修正首屏 `priority`/`sizes`、建立图片性能预算脚本。现状：`next.config.ts` 配 `unoptimized: true` + `formats: ["image/avif","image/webp"]`；产品图统一 1448×1086；`scripts/` 下有 `verify-static-images.mjs`、`cleanup-unused-images.mjs`、`convert-product-images-to-webp.py` 等工具。（该规格的落地完成度**待核实**。）

## 七、审计结论与待办（如实引用，未编造分数）

### 7.1 `docs/audits/seo-audit-lanhui-20260808.md`（2026-08-08）

- **总体健康度：良好（7/10）**；当时 sitemap 约 **61 页**（现已增至 74）
- 技术 SEO 实测：robots ✅、sitemap 200 ✅、HTTPS 全站 301 ✅、安全头 ✅、TTFB 0.40s ✅、HTML 首页 160KB ✅、移动端 ✅、WebP + alt ✅、canonical 全站 ✅、单 H1 ✅、title 唯一 ✅、HSTS ⚠️未开
- **Lighthouse 移动端实测**：Performance 97、Accessibility 96、Best Practices 100、SEO 100；CWV：LCP 2.4s、CLS 0、TBT 30ms、FCP 1.4s（结论：性能无需额外投入）
- 高优先级问题：① **未提交任何搜索引擎站长平台**（收录 = 0）；② NAP 电话不一致为**误报**（13377650377 是邮箱前缀）
- 中优先级问题：**本地 SEO 结构化数据缺口**（首页缺 LocalBusiness、FAQ 缺 FAQPage）；内容深度偏薄（车型页约 2000 字符）；**博客无运营节奏**（当时仅 3 篇）

### 7.2 `docs/audits/brand-diagnosis-lanhui-20260811.md`（2026-08-11）

品牌健康度评分卡（原文分数）：

| 维度 | 评分 |
|---|---:|
| 品牌定位清晰度 | 6/10 |
| 产品品类策略 | 6/10 |
| 官网技术/合规 | 9/10 |
| 官网转化说服力 | 5/10 |
| 搜索可见度 | 3/10（最大短板） |
| GEO/AI 可见度 | 4/10 |
| 内容引擎（抖音/小红书/公众号） | 4/10 |
| 私域/转化闭环 | 5/10 |
| 品牌 IP 资产 | 8/10 |

结论原话：「品牌不是缺能力，是缺『开火』」——90 天路线：先让搜索能看到你（提交站长平台 1 小时）→ 再让内容跑起来 → 最后让流量回到店里。

## 八、GEO 基础设施现状小结

| 能力 | 状态 |
|---|---|
| canonical/裸域统一 | ✅ 已上线（URL Contract 2026-08-18） |
| sitemap 自动生成 | ✅ 74 条 |
| robots 放行 AI 爬虫 | ✅ GPTBot/ClaudeBot/PerplexityBot/Google-Extended/Bytespider |
| llms.txt | ✅ 已上线，11.6KB，数据源驱动 |
| 结构化数据 | 🟡 覆盖较广，但首页缺 LocalBusiness/FAQPage、多产品页缺 Product |
| 站长平台提交/收录 | ⚠️ 审计记录显示当时收录为 0（需业务跟进，**待核实最新状态**） |
| 内容产出节奏 | ⚠️ 已有 15 篇博客，运营节奏仍在建设 |

## 九、一句话总结

官网的 **SEO/GEO 地基已经打好**（URL 单源、canonical、74 条 sitemap、AI 爬虫放行、llms.txt、较完整的结构化数据）；**真正的短板在「站外动作」**——提交站长平台、持续内容产出、本地 SEO（LocalBusiness/FAQPage）与真实案例素材。
