---
页面名称: 理想 MEGA（车型详情页）
页面路由: /product/li-auto/mega
页面类型: 车型详情页
实现状态: ✅ 已上线
源文件: src/app/product/li-auto/mega/page.tsx
最后更新: 2026-09-14
---

# 理想 MEGA（车型详情页）

## 一、页面定位

> 一句话：理想 MEGA 的轻改项目清单页，用「18 项升级项目 + 5 大用车场景 + 7 步服务流程 + 9 条 FAQ」围绕基础保护、商务座舱、外观个性、行车防护与灯光视觉组织内容，引导车主到店评估。

- **目标用户**：理想 MEGA 车主 / 准车主（大型家庭 MPV、商务接待场景）。
- **核心诉求**：MEGA 能做哪些项目、商务座舱与二排怎么配、电吸门是否需要确认、大灯升级是否合规。
- **转化目标**：到店评估（确认车型、配置和项目组合后施工）。
- **在导航中的位置**：顶部导航「产品中心 → 理想 → MEGA」。

## 二、SEO 元信息

| 项目 | 内容 |
|---|---|
| Title | 理想 MEGA 轻改升级方案｜车衣隔热膜铝地板电吸门小桌板｜蓝辉轻改 |
| Description | 蓝辉轻改整理理想 MEGA 专属升级方案参考，覆盖车衣、隔热膜、彩绘、双拼改色、铝地板、平衡杆、360 软包脚垫、底盘护板、包围、防虫网、尾翼、主副驾电吸门、刹车卡钳、迎宾踏板、小桌板、大灯、轮毂和内饰镀膜等 18 项项目。新车保护、商务座舱、外观个性、行车防护与灯光细节 5 大场景，到店评估、按标准流程施工。 |
| Canonical | /product/li-auto/mega |
| Keywords / 主题词 | 理想 MEGA 轻改、理想 MEGA 改装、理想 MEGA 车衣、理想 MEGA 隔热膜、理想 MEGA 铝地板、理想 MEGA 电吸门、理想 MEGA 小桌板、理想 MEGA 底盘护板、蓝辉轻改 |
| OG 图 | `/images/products/li-auto/mega/generated/hero.webp`（1448×1086，alt「理想 MEGA 专属升级方案主视觉」） |
| 结构化数据 | `ItemList`（18 项升级项目，name「理想 MEGA 专属升级方案」）+ `BreadcrumbList` |
| 是否进 sitemap | 是（`product/li-auto/mega`，priority 0.8） |

## 三、页面结构（自上而下）

| 序号 | 区块 | 组件 | 作用 |
|---:|---|---|---|
| 1 | 主视觉 Hero | `VehicleHero` | 徽标 + H1 + 副标题 + 说明 + 18/5 统计 + 主视觉图 |
| 2 | 升级项目（含分类 Tab） | `ProjectTabs` → `ProjectGrid` | 18 个项目卡片，按 4 大分类切换 |
| 3 | 使用场景 | `ScenarioMatrix` | 5 大用车场景卡 |
| 4 | 服务流程 | `ServiceFlow` | 7 步流程 |
| 5 | 常见问题 | `FaqSection` | 9 条 FAQ 手风琴 |
| 6 | 底部返回入口 | 页面内联 `section` | 仅「返回理想系列」链接（**无 NEXT STEP 文案**） |
| — | 结构化数据 | `<script type="application/ld+json">` | ItemList + BreadcrumbList |

> 说明：本页 config 未设置 `breadcrumbs`，故**不渲染面包屑**。

## 四、逐区块文案

### 1. 主视觉 Hero（组件 `<VehicleHero theme="blue" />`）

- **徽标（badge）**：PROJECTS
- **H1**：理想 MEGA 专属升级方案
- **副标题**：理想 MEGA 轻改升级方案
- **说明**：理想 MEGA 全车轻改方案，覆盖基础保护、商务座舱、外观个性、行车防护与灯光视觉 5 大场景；蓝辉轻改顺德大良店按标准化流程评估与施工。
- **统计**：18 升级项目 ｜ 5 用车场景

### 2. 升级项目（组件 `<ProjectTabs />` + `<ProjectGrid />`）

- **区块标题（H2）**：升级项目
- **分类 Tab**：全部 18 ｜ 新车保护 6 ｜ 外观升级 7 ｜ 内饰座舱 5 ｜ 功能便利 0
- **升级项目清单**：

| 序号 | 项目 | 说明 | 适配场景（原始 key） | 注意事项 |
|---:|---|---|---|---|
| 1 | 车衣 | 大车身漆面保护、日常划痕防护、保持车身质感 | new_car_protection | — |
| 2 | 隔热膜 | 大面积玻璃隔热、防晒、隐私与驾乘舒适 | new_car_protection | — |
| 3 | 彩绘 | 主题化车身视觉，适合个性表达或门店展示 | appearance | — |
| 4 | 双拼改色 | 强化车身层次感和 MEGA 侧面辨识度 | appearance | — |
| 5 | 铝地板 | 二三排和尾箱易清洁，提升耐用与质感 | business_cabin | — |
| 6 | 平衡杆 | 需到店评估安装位，不做性能承诺 | driving_protection | 平衡杆安装需到店确认车身接口和安装位，到店评估适配性 |
| 7 | 360 软包脚垫 | 全包围脚垫、易清洁、保护原车地毯 | new_car_protection, business_cabin | — |
| 8 | 底盘护板 | 加强底部关键区域防护，适合新车基础防护 | new_car_protection, driving_protection | — |
| 9 | 包围 | 提升前后杠、侧裙等区域的视觉完整度 | appearance | — |
| 10 | 防虫网 | 减少虫石杂物进入前部格栅或进风区域 | driving_protection | — |
| 11 | 尾翼 | 车尾视觉装饰，强化尾部层次 | appearance, lighting_detail | — |
| 12 | 主副驾电吸门 | 前排关门便利与高级感，需确认接口和门体结构 | business_cabin | 主副驾电吸门需到店确认接口和门体结构，施工前告知风险与边界 |
| 13 | 刹车卡钳 | 轮毂区域视觉点缀，不做制动性能承诺 | appearance, lighting_detail | 刹车卡钳为外观视觉升级，不做制动性能提升承诺 |
| 14 | 迎宾踏板 | 上下车高频区域防护与迎宾质感 | business_cabin, lighting_detail | — |
| 15 | 小桌板 | 二排办公、用餐、儿童使用和长途出行便利 | business_cabin | — |
| 16 | 大灯 | 灯组外观与视觉升级，需合规确认 | lighting_detail | 大灯项目只涉及视觉方向，需确认合规边界和年检适配 |
| 17 | 轮毂 | 改变侧面姿态和整车视觉风格 | appearance | — |
| 18 | 内饰镀膜 | 皮革、饰板和高频触碰区域防污易清洁 | new_car_protection, business_cabin | — |

> 图片角标：本页 18 项均为 `product-preview`，显示「预览图」。

### 3. 使用场景（组件 `<ScenarioMatrix />`）

- **区块标题（H2）**：使用场景
- **场景卡（5）**：
  1. 新车基础保护 —— 刚提车优先解决漆面、玻璃、地毯、底盘和座舱保护
  2. 商务座舱与便利 —— 面向商务接待、家庭多人出行和二排高频使用
  3. 外观个性升级 —— 强化 MEGA 大车身的视觉辨识度和细节完整感
  4. 行车与底盘防护 —— 关注底部防护、前部格栅和行车环境
  5. 灯光与细节视觉 —— 强化高可见区域细节，但不承诺性能结果

### 4. 服务流程（组件 `<ServiceFlow />`）

- **区块标题（H2）**：服务流程
- **7 步**：01 车型确认 / 02 项目选择 / 03 到店评估 / 04 方案确认 / 05 施工安装 / 06 验收交付 / 07 售后支持。

### 5. 常见问题（组件 `<FaqSection />`）

- **区块标题（H2）**：常见问题
- **9 条 FAQ**：见附录（含「大灯升级合规吗」「电吸门是否无损安装」等 MEGA 专属问题）。

### 6. 底部返回入口（页面内联 `<section>`）

- **唯一内容**：按钮「返回理想系列」（无眉标、无标题、无正文）。

## 五、CTA 与转化路径

| 层级 | 按钮/入口 | 文案 | 跳转目标 |
|---|---|---|---|
| 主 CTA | 底部区链接 | 返回理想系列 | `/product/li-auto` |
| 全站页头 | 导航按钮 | 查看门店 | `/agent`（全站通用） |
| 全站页头 | 导航链接 | 联系我们 | `/contact` |

**转化路径**：首页 → 产品中心 → 理想 → 理想 MEGA → 到店评估 → 微信咨询 / 到店施工。

> 页面正文未提供微信咨询按钮或私域入口（源码未提供）。

## 六、图片素材

| 用途 | 路径 | 说明 |
|---|---|---|
| Hero 主视觉 / OG 图 | `public/images/products/li-auto/mega/generated/hero.webp` | 1448×1086 |
| 项目图 1 | `public/images/products/li-auto/mega/generated/mega-paint-protection-film.webp` | 车衣 |
| 项目图 2 | `public/images/products/li-auto/mega/generated/mega-window-film.webp` | 隔热膜 |
| 项目图 3 | `public/images/products/li-auto/mega/generated/mega-color-graphic.webp` | 彩绘 |
| 项目图 4 | `public/images/products/li-auto/mega/generated/mega-two-tone-color.webp` | 双拼改色 |
| 项目图 5 | `public/images/products/li-auto/mega/generated/mega-aluminum-floor.webp` | 铝地板 |
| 项目图 6 | `public/images/products/li-auto/mega/generated/mega-sway-bar.webp` | 平衡杆 |
| 项目图 7 | `public/images/products/li-auto/mega/generated/mega-floor-mat-360.webp` | 360 软包脚垫 |
| 项目图 8 | `public/images/products/li-auto/mega/generated/mega-skid-plate.webp` | 底盘护板 |
| 项目图 9 | `public/images/products/li-auto/mega/generated/mega-sport-kit.webp` | 包围 |
| 项目图 10 | `public/images/products/li-auto/mega/generated/mega-bug-guard.webp` | 防虫网 |
| 项目图 11 | `public/images/products/li-auto/mega/generated/mega-rear-wing.webp` | 尾翼 |
| 项目图 12 | `public/images/products/li-auto/mega/generated/mega-front-electric-doors.webp` | 主副驾电吸门 |
| 项目图 13 | `public/images/products/li-auto/mega/generated/mega-brake-caliper.webp` | 刹车卡钳 |
| 项目图 14 | `public/images/products/li-auto/mega/generated/mega-welcome-pedal.webp` | 迎宾踏板 |
| 项目图 15 | `public/images/products/li-auto/mega/generated/mega-rear-table.webp` | 小桌板 |
| 项目图 16 | `public/images/products/li-auto/mega/generated/mega-headlight.webp` | 大灯 |
| 项目图 17 | `public/images/products/li-auto/mega/generated/mega-wheels.webp` | 轮毂 |
| 项目图 18 | `public/images/products/li-auto/mega/generated/mega-interior-coating.webp` | 内饰镀膜 |

## 七、内链与跳转

**本页链出**：`/product/li-auto`（返回理想系列）。顶部导航另链出全站服务页与品牌页。

**链入本页**：顶部导航「产品中心 → 理想 → MEGA」；理想品牌系列页（`/product/li-auto`）车型入口卡；产品中心索引页（`/product`）。

## 八、技术实现要点

- **数据来源**：`src/lib/li-auto-mega-page-config.ts` + `src/lib/li-auto-mega-products.ts`。
- **路由注册**：`brandSlug: "li-auto"`、`modelSlug: "mega"`、`status: "live"`、`priority: "P1"`、`projectCount: 18`。
- **组件复用**：`VehiclePageRenderer`（主题 `blue`）+ 共享区块组件。图片项目卡片带「预览图」角标；`caution` 字段渲染为红色「⚠」提示。
- **注意事项**：config **未传入 `bundles`**，不渲染「套餐选择」；数据源 `liAutoMegaBundles`（5 个组合）已定义但未使用。底部区仅一个返回按钮，无 NEXT STEP 语义标题。

## 九、待办 / 风险

- [ ] 价格、质保年限、MEGA 车型参数源码未提供，如需展示须业务补充。
- [ ] `liAutoMegaBundles`（5 个推荐组合）已定义但页面未渲染。
- [ ] 18 张项目图均为 `product-preview` 预览图。
- [ ] 大灯、电吸门等合规敏感项，页面以 FAQ/警示方式提示合规边界，未见具体合规结论。

## 附：页面完整可见文案

```
[眉标] PROJECTS
[H1] 理想 MEGA 专属升级方案
[P] 理想 MEGA 轻改升级方案
[P] 理想 MEGA 全车轻改方案，覆盖基础保护、商务座舱、外观个性、行车防护与灯光视觉 5 大场景；蓝辉轻改顺德大良店按标准化流程评估与施工。
[统计] 18 升级项目 ｜ 5 用车场景

[Tab] 全部 18 / 新车保护 6 / 外观升级 7 / 内饰座舱 5 / 功能便利 0

[H2] 升级项目
[卡] 预览图 · 车衣 · 大车身漆面保护、日常划痕防护、保持车身质感 · [标签] new_car_protection
[卡] 预览图 · 隔热膜 · 大面积玻璃隔热、防晒、隐私与驾乘舒适 · [标签] new_car_protection
[卡] 预览图 · 彩绘 · 主题化车身视觉，适合个性表达或门店展示 · [标签] appearance
[卡] 预览图 · 双拼改色 · 强化车身层次感和 MEGA 侧面辨识度 · [标签] appearance
[卡] 预览图 · 铝地板 · 二三排和尾箱易清洁，提升耐用与质感 · [标签] business_cabin
[卡] 预览图 · 平衡杆 · 需到店评估安装位，不做性能承诺 · [标签] driving_protection · [警示] 平衡杆安装需到店确认车身接口和安装位，到店评估适配性
[卡] 预览图 · 360 软包脚垫 · 全包围脚垫、易清洁、保护原车地毯 · [标签] new_car_protection / business_cabin
[卡] 预览图 · 底盘护板 · 加强底部关键区域防护，适合新车基础防护 · [标签] new_car_protection / driving_protection
[卡] 预览图 · 包围 · 提升前后杠、侧裙等区域的视觉完整度 · [标签] appearance
[卡] 预览图 · 防虫网 · 减少虫石杂物进入前部格栅或进风区域 · [标签] driving_protection
[卡] 预览图 · 尾翼 · 车尾视觉装饰，强化尾部层次 · [标签] appearance / lighting_detail
[卡] 预览图 · 主副驾电吸门 · 前排关门便利与高级感，需确认接口和门体结构 · [标签] business_cabin · [警示] 主副驾电吸门需到店确认接口和门体结构，施工前告知风险与边界
[卡] 预览图 · 刹车卡钳 · 轮毂区域视觉点缀，不做制动性能承诺 · [标签] appearance / lighting_detail · [警示] 刹车卡钳为外观视觉升级，不做制动性能提升承诺
[卡] 预览图 · 迎宾踏板 · 上下车高频区域防护与迎宾质感 · [标签] business_cabin / lighting_detail
[卡] 预览图 · 小桌板 · 二排办公、用餐、儿童使用和长途出行便利 · [标签] business_cabin
[卡] 预览图 · 大灯 · 灯组外观与视觉升级，需合规确认 · [标签] lighting_detail · [警示] 大灯项目只涉及视觉方向，需确认合规边界和年检适配
[卡] 预览图 · 轮毂 · 改变侧面姿态和整车视觉风格 · [标签] appearance
[卡] 预览图 · 内饰镀膜 · 皮革、饰板和高频触碰区域防污易清洁 · [标签] new_car_protection / business_cabin

[H2] 使用场景
[H3] 新车基础保护 [P] 刚提车优先解决漆面、玻璃、地毯、底盘和座舱保护
[H3] 商务座舱与便利 [P] 面向商务接待、家庭多人出行和二排高频使用
[H3] 外观个性升级 [P] 强化 MEGA 大车身的视觉辨识度和细节完整感
[H3] 行车与底盘防护 [P] 关注底部防护、前部格栅和行车环境
[H3] 灯光与细节视觉 [P] 强化高可见区域细节，但不承诺性能结果

[H2] 服务流程
01 车型确认 —— 确认理想 MEGA 的年份、批次、版本和配置
02 项目选择 —— 根据新车保护、商务座舱、外观个性或行车防护场景选择项目
03 到店评估 —— 确认安装位、接口、材料、工期和风险提示
04 方案确认 —— 确认项目组合、施工时间和注意事项
05 施工安装 —— 按项目标准施工，并做好车身和内饰保护
06 验收交付 —— 检查外观、功能和安装细节
07 售后支持 —— 提供使用注意事项和后续维护建议

[H2] 常见问题
Q 理想 MEGA 的这些升级项目是否都能安装？
A 不同年份、版本和配置可能不同，需到店评估确认；具体安装可行性以现场车辆情况和施工评估为准。
Q 新车最推荐先做什么？
A 车衣、隔热膜、360 软包脚垫、底盘护板、内饰镀膜；优先解决漆面、玻璃、地毯、底盘和座舱保护。
Q 商务座舱项目有哪些？
A 铝地板、迎宾踏板、小桌板、主副驾电吸门、360 软包脚垫、内饰镀膜；面向商务接待和二排高频使用。
Q 外观升级项目有哪些？
A 彩绘、双拼改色、包围、尾翼、轮毂、刹车卡钳；强化 MEGA 大车身视觉辨识度。
Q 大灯升级合规吗？
A 只涉及灯组外观视觉方向，需到店确认合规边界和年检适配，不做照明性能提升承诺。
Q 电吸门是否无损安装？
A 需到店确认接口、门体结构和售后边界，不做无损或质保承诺。
Q 可以只做单个项目吗？
A 可以，页面项目既支持单项了解，也支持组合方案；具体施工内容以到店评估为准。
Q 是否影响原车质保？
A 不做不影响质保的承诺；具体以车辆情况和项目评估为准，施工前会告知风险与边界。
Q 工期多久？
A 根据项目组合、库存和施工排期确认；不同项目工期差异较大，到店评估后会给出明确工期。

[A] 返回理想系列
```
