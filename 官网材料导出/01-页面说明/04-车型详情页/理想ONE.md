---
页面名称: 理想 ONE（车型详情页）
页面路由: /product/li-auto/one
页面类型: 车型详情页
实现状态: ✅ 已上线
源文件: src/app/product/li-auto/one/page.tsx
最后更新: 2026-09-14
---

# 理想 ONE（车型详情页）

## 一、页面定位

> 一句话：理想 ONE 的存量车主焕新页，用「8 项实用轻改项目 + 5 大用车场景 + 7 步服务流程 + 9 条 FAQ」覆盖漆面保护、玻璃隔热、外观焕新、后排便利、座舱氛围、上下车辅助与户外自驾拓展。

- **目标用户**：已交付多年的理想 ONE 存量车主。
- **核心诉求**：老车怎么焕新、膜层翻新与外观焕新怎么做、旋转座椅是否安全、车顶平台能否安装。
- **转化目标**：到店评估（确认车型、配置和项目组合后施工）。
- **在导航中的位置**：顶部导航「产品中心 → 理想 → ONE」。

## 二、SEO 元信息

| 项目 | 内容 |
|---|---|
| Title | 理想 ONE 轻改升级方案｜隐形车衣隔热膜电动踏板车顶平台｜蓝辉轻改 |
| Description | 蓝辉轻改整理理想 ONE 专属轻改方案参考，覆盖隐形车衣、隔热膜、改色膜、小桌板、氛围灯、电动踏板、旋转座椅和车顶平台加爬梯等 8 项项目。 |
| Canonical | /product/li-auto/one |
| Keywords / 主题词 | 理想 ONE 轻改、理想 ONE 改装、理想 ONE 车衣、理想 ONE 隔热膜、理想 ONE 改色膜、理想 ONE 小桌板、理想 ONE 电动踏板、理想 ONE 车顶平台、蓝辉轻改 |
| OG 图 | `/images/products/li-auto/one/generated/hero.webp`（1448×1086，alt「理想 ONE 专属轻改方案主视觉」） |
| 结构化数据 | `ItemList`（8 项升级项目，name「理想 ONE 专属轻改方案」）+ `BreadcrumbList` |
| 是否进 sitemap | 是（`product/li-auto/one`，priority 0.8） |

## 三、页面结构（自上而下）

| 序号 | 区块 | 组件 | 作用 |
|---:|---|---|---|
| 1 | 主视觉 Hero | `VehicleHero` | 徽标 + H1 + 副标题 + 说明 + 8/5 统计 + 主视觉图 |
| 2 | 升级项目（含分类 Tab） | `ProjectTabs` → `ProjectGrid` | 8 个项目卡片，按 4 大分类切换 |
| 3 | 使用场景 | `ScenarioMatrix` | 5 大用车场景卡 |
| 4 | 服务流程 | `ServiceFlow` | 7 步流程 |
| 5 | 常见问题 | `FaqSection` | 9 条 FAQ 手风琴 |
| 6 | 底部 CTA | 页面内联 `section` | NEXT STEP + 到店评估 + 返回理想系列 |
| — | 结构化数据 | `<script type="application/ld+json">` | ItemList + BreadcrumbList |

> 说明：本页 config 未设置 `breadcrumbs`，故**不渲染面包屑**。

## 四、逐区块文案

### 1. 主视觉 Hero（组件 `<VehicleHero theme="blue" />`）

- **徽标（badge）**：LI AUTO ONE UPGRADE
- **H1**：理想 ONE 专属轻改方案
- **副标题**：理想 ONE 轻改升级方案
- **说明**：8 项实用轻改项目，覆盖漆面保护、玻璃隔热、外观焕新、后排便利、座舱氛围、上下车辅助和户外自驾拓展 5 大场景；蓝辉轻改顺德大良店到店评估、按标准流程施工。
- **统计**：8 升级项目 ｜ 5 用车场景

### 2. 升级项目（组件 `<ProjectTabs />` + `<ProjectGrid />`）

- **区块标题（H2）**：升级项目
- **分类 Tab**：全部 8 ｜ 新车保护 2 ｜ 外观升级 1 ｜ 内饰座舱 3 ｜ 功能便利 2
- **升级项目清单**：

| 序号 | 项目 | 说明 | 适配场景（原始 key） | 注意事项 |
|---:|---|---|---|---|
| 1 | 隐形车衣 | 漆面保护、日常划痕防护、老车焕新保持质感 | refresh_protection, outdoor, appearance | — |
| 2 | 隔热膜 | 隔热、防晒、隐私与家庭乘坐舒适 | refresh_protection, family_cabin | — |
| 3 | 改色膜 | 车身外观焕新、颜色个性化和视觉辨识度 | refresh_protection, appearance | — |
| 4 | 小桌板 | 后排用餐、办公、儿童使用和长途休息 | family_cabin | — |
| 5 | 氛围灯 | 夜间座舱氛围与内饰观感升级 | family_cabin | — |
| 6 | 电动踏板 | 老人、小孩上下车辅助，提升日常用车便利 | accessibility, outdoor | 需到店确认安装位和电气接口 |
| 7 | 旋转座椅 | 后排座椅旋转，提升座舱使用便利和空间灵活性 | accessibility, family_cabin | 需到店确认座椅结构、安全边界和法规要求 |
| 8 | 车顶平台加爬梯 | 露营、自驾装备扩展，车顶固定点与承重依车型确认 | outdoor, appearance | 需确认固定点、承重和合规边界，不写承重保证 |

> 图片角标：本页 8 项均为 `product-preview`，显示「预览图」。

### 3. 使用场景（组件 `<ScenarioMatrix />`）

- **区块标题（H2）**：使用场景
- **场景卡（5）**：
  1. 老车焕新与基础保护 —— 适合存量车主焕新外观、保护漆面、提升隔热隐私
  2. 家庭座舱舒适 —— 面向家庭乘坐、夜间氛围、后排使用和长途舒适
  3. 上下车便利 —— 面向老人、小孩和高频家庭用车场景
  4. 户外自驾拓展 —— 面向露营、自驾和户外装备扩展
  5. 外观个性 —— 强化车身视觉、户外风格和个性表达

### 4. 服务流程（组件 `<ServiceFlow />`）

- **区块标题（H2）**：服务流程
- **7 步**：01 车型确认 / 02 项目选择 / 03 到店评估 / 04 方案确认 / 05 施工安装 / 06 验收交付 / 07 售后支持。

### 5. 常见问题（组件 `<FaqSection />`）

- **区块标题（H2）**：常见问题
- **9 条 FAQ**：见附录（含「旋转座椅是否安全」「车顶平台加爬梯能否安装」等 ONE 专属问题）。

### 6. 底部 CTA（页面内联 `<section>`）

- **眉标**：NEXT STEP（琥珀色）
- **H2**：理想 ONE 升级方案 · 到店评估
- **正文**：确认车型、配置和项目组合后到店评估，蓝辉轻改团队按标准流程施工。
- **按钮**：返回理想系列

## 五、CTA 与转化路径

| 层级 | 按钮/入口 | 文案 | 跳转目标 |
|---|---|---|---|
| 主 CTA | 底部区链接 | 返回理想系列 | `/product/li-auto` |
| 全站页头 | 导航按钮 | 查看门店 | `/agent`（全站通用） |
| 全站页头 | 导航链接 | 联系我们 | `/contact` |

**转化路径**：首页 → 产品中心 → 理想 → 理想 ONE → 到店评估 → 微信咨询 / 到店施工。

> 页面正文未提供微信咨询按钮或私域入口（源码未提供）。

## 六、图片素材

| 用途 | 路径 | 说明 |
|---|---|---|
| Hero 主视觉 / OG 图 | `public/images/products/li-auto/one/generated/hero.webp` | 1448×1086 |
| 项目图 1 | `public/images/products/li-auto/one/generated/paint-protection-film.webp` | 隐形车衣 |
| 项目图 2 | `public/images/products/li-auto/one/generated/window-film.webp` | 隔热膜 |
| 项目图 3 | `public/images/products/li-auto/one/generated/color-change-film.webp` | 改色膜 |
| 项目图 4 | `public/images/products/li-auto/one/generated/rear-table-tray.webp` | 小桌板 |
| 项目图 5 | `public/images/products/li-auto/one/generated/ambient-light.webp` | 氛围灯 |
| 项目图 6 | `public/images/products/li-auto/one/generated/electric-side-step.webp` | 电动踏板 |
| 项目图 7 | `public/images/products/li-auto/one/generated/rotating-seat.webp` | 旋转座椅 |
| 项目图 8 | `public/images/products/li-auto/one/generated/roof-platform-ladder.webp` | 车顶平台加爬梯 |

## 七、内链与跳转

**本页链出**：`/product/li-auto`（返回理想系列）。顶部导航另链出全站服务页与品牌页。

**链入本页**：顶部导航「产品中心 → 理想 → ONE」；理想品牌系列页（`/product/li-auto`）车型入口卡；产品中心索引页（`/product`）。

## 八、技术实现要点

- **数据来源**：`src/lib/li-auto-one-page-config.ts` + `src/lib/li-auto-one-products.ts`。
- **路由注册**：`brandSlug: "li-auto"`、`modelSlug: "one"`、`status: "live"`、`priority: "P1"`、`projectCount: 8`。
- **组件复用**：`VehiclePageRenderer`（主题 `blue`）+ 共享区块组件。
- **注意事项**：config **未传入 `bundles`**，不渲染「套餐选择」；数据源 `liAutoOneBundles`（4 个组合）已定义但未使用。旋转座椅、车顶平台等含 `caution` 提示，无安全/承重承诺。

## 九、待办 / 风险

- [ ] 价格、质保年限、ONE 车型参数源码未提供，如需展示须业务补充。
- [ ] `liAutoOneBundles`（4 个推荐组合）已定义但页面未渲染。
- [ ] 8 张项目图均为 `product-preview` 预览图。
- [ ] 旋转座椅、车顶平台加爬梯涉及安全/法规，页面只提示「到店评估」，无具体结论。

## 附：页面完整可见文案

```
[眉标] LI AUTO ONE UPGRADE
[H1] 理想 ONE 专属轻改方案
[P] 理想 ONE 轻改升级方案
[P] 8 项实用轻改项目，覆盖漆面保护、玻璃隔热、外观焕新、后排便利、座舱氛围、上下车辅助和户外自驾拓展 5 大场景；蓝辉轻改顺德大良店到店评估、按标准流程施工。
[统计] 8 升级项目 ｜ 5 用车场景

[Tab] 全部 8 / 新车保护 2 / 外观升级 1 / 内饰座舱 3 / 功能便利 2

[H2] 升级项目
[卡] 预览图 · 隐形车衣 · 漆面保护、日常划痕防护、老车焕新保持质感 · [标签] refresh_protection / outdoor / appearance
[卡] 预览图 · 隔热膜 · 隔热、防晒、隐私与家庭乘坐舒适 · [标签] refresh_protection / family_cabin
[卡] 预览图 · 改色膜 · 车身外观焕新、颜色个性化和视觉辨识度 · [标签] refresh_protection / appearance
[卡] 预览图 · 小桌板 · 后排用餐、办公、儿童使用和长途休息 · [标签] family_cabin
[卡] 预览图 · 氛围灯 · 夜间座舱氛围与内饰观感升级 · [标签] family_cabin
[卡] 预览图 · 电动踏板 · 老人、小孩上下车辅助，提升日常用车便利 · [标签] accessibility / outdoor · [警示] 需到店确认安装位和电气接口
[卡] 预览图 · 旋转座椅 · 后排座椅旋转，提升座舱使用便利和空间灵活性 · [标签] accessibility / family_cabin · [警示] 需到店确认座椅结构、安全边界和法规要求
[卡] 预览图 · 车顶平台加爬梯 · 露营、自驾装备扩展，车顶固定点与承重依车型确认 · [标签] outdoor / appearance · [警示] 需确认固定点、承重和合规边界，不写承重保证

[H2] 使用场景
[H3] 老车焕新与基础保护 [P] 适合存量车主焕新外观、保护漆面、提升隔热隐私
[H3] 家庭座舱舒适 [P] 面向家庭乘坐、夜间氛围、后排使用和长途舒适
[H3] 上下车便利 [P] 面向老人、小孩和高频家庭用车场景
[H3] 户外自驾拓展 [P] 面向露营、自驾和户外装备扩展
[H3] 外观个性 [P] 强化车身视觉、户外风格和个性表达

[H2] 服务流程
01 车型确认 —— 确认理想 ONE 的年份、批次、版本和配置
02 项目选择 —— 根据老车焕新、座舱舒适、上下车便利或户外拓展选择项目
03 到店评估 —— 确认安装位、接口、材料、工期和风险提示
04 方案确认 —— 确认项目组合、施工时间和注意事项
05 施工安装 —— 按项目标准施工，并做好车身和内饰保护
06 验收交付 —— 检查外观、功能和安装细节
07 售后支持 —— 提供使用注意事项和后续维护建议

[H2] 常见问题
Q 理想 ONE 的这些项目是否都能安装？
A 不同年份、版本和配置可能不同，需到店评估确认；具体安装可行性以现场车辆情况和施工评估为准。
Q 存量理想 ONE 最推荐先做什么？
A 隐形车衣、隔热膜、改色膜；优先解决漆面保护、隔热隐私和外观焕新。
Q 家庭座舱项目有哪些？
A 小桌板、氛围灯、旋转座椅、隔热膜；适合家庭乘坐、夜间氛围和长途舒适。
Q 户外自驾项目有哪些？
A 车顶平台加爬梯、电动踏板、隐形车衣；适合露营、自驾和装备扩展。
Q 旋转座椅是否安全？
A 旋转座椅涉及座椅结构、安全带、气囊和乘员安全，必须到店评估确认，不做无损或安全承诺。
Q 车顶平台加爬梯能否安装？
A 需确认固定点、承重和法规边界，不写承重保证；具体以车辆结构和到店评估为准。
Q 可以只做单个项目吗？
A 可以，页面项目既支持单项了解，也支持组合方案；具体施工内容以到店评估为准。
Q 是否影响原车质保？
A 不做不影响质保的承诺；具体以车辆情况和项目评估为准，施工前会告知风险与边界。
Q 工期多久？
A 根据项目组合、库存和施工排期确认；不同项目工期差异较大，到店评估后会给出明确工期。

[眉标] NEXT STEP
[H2] 理想 ONE 升级方案 · 到店评估
[P] 确认车型、配置和项目组合后到店评估，蓝辉轻改团队按标准流程施工。
[A] 返回理想系列
```
