import { Check, Sparkles, Shield, Package, Palette, Droplets, ArrowRight, ChevronDown, Monitor, Scissors, ClipboardCheck, FileBadge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { PpfDouyinCta } from "@/components/product/PpfDouyinCta";
import { PpfMobileCtaBar } from "@/components/product/PpfMobileCtaBar";
import { WeChatConsultButton } from "@/components/WeChatConsultButton";
import { serviceGuarantee, type Product } from "@/lib/products";

const SPEC_COLUMN_MAP = [
  { key: "model", label: "型号" },
  { key: "position", label: "安装位置" },
  { key: "vlt", label: "可见光阻隔率" },
  { key: "uvr", label: "紫外线阻隔率" },
  { key: "irr", label: "红外线阻隔率" },
  { key: "tser", label: "总太阳能阻隔率" },
  { key: "thickness", label: "厚度" },
  { key: "warranty", label: "质保" },
] as const;


type ProductDetailProps = {
  product: Product;
  breadcrumbItems?: readonly BreadcrumbItem[];
};

export function ProductDetail({ product, breadcrumbItems }: ProductDetailProps) {
  const isLightMod = product.group === "light-mod";
  const isChassis = product.slug === "chassis";
  const accentText = isLightMod ? "text-blue-400" : "text-orange-400";
  const accentBg = isLightMod ? "bg-blue-500" : "bg-orange-500";
  const accentGradient = isLightMod
    ? "from-blue-500 to-blue-700"
    : "from-orange-500 to-orange-600";
  const serviceSectionBg =
    product.slug === "ppf"
      ? "bg-black border-y border-zinc-900"
      : "bg-zinc-950";
  const hero = isChassis
    ? {
        title: "底盘升级，先从车况与需求出发",
        description:
          "先检查原车底盘状态与日常驾驶诉求，再围绕避震、连杆和加强件做适度升级，兼顾稳定、舒适与安全边界。",
        image: "/images/producthero/chassis-hero.webp",
        imageAlt: "新能源车型底盘悬挂与加强件施工检查",
      }
    : {
        title: "蓝辉隐形车衣",
        description:
          "脂肪族 TPU、专车专用电脑裁膜、3–12 年质保，按车型与用车场景推荐，不盲目堆参数。",
        image: "/images/producthero/ppf-hero.webp",
        imageAlt: "蓝辉隐形车衣透明保护膜施工效果",
      };
  const trustBadges = isChassis
    ? [
        { icon: Monitor, label: "原车底盘检查" },
        { icon: Scissors, label: "车型数据匹配" },
        { icon: ClipboardCheck, label: "规范扭矩施工" },
        { icon: FileBadge, label: "路试复检交付" },
      ]
    : [
        { icon: Monitor, label: "专车电脑裁膜" },
        { icon: Scissors, label: "尽量不动刀施工" },
        { icon: ClipboardCheck, label: "施工验收标准" },
        { icon: FileBadge, label: "电子质保" },
      ];

  return (
      <main className="flex-grow flex flex-col">
        {/* Hero — desktop left-right, mobile stacked */}
        <section className="relative bg-zinc-950 text-white overflow-hidden">
          <div className="absolute inset-0 -z-0" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900" />
            <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-15 ${accentBg}`} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
            <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 items-center">
              {/* Left: copy + CTAs */}
              <div>
                {breadcrumbItems && <Breadcrumbs items={breadcrumbItems} align="left" className="mb-6" />}
                <p className={`inline-block text-xs tracking-widest mb-4 ${accentText}`}>
                  {product.groupLabel} · 顺德大良施工中心
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-[1.08] tracking-[-0.025em] mb-4">
                  {hero.title}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-white/90 mb-4">
                  {product.tagline}
                </p>
                <p className="text-base sm:text-lg text-zinc-300 max-w-xl text-pretty leading-7 mb-8">
                  {hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <WeChatConsultButton />
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/[0.06] px-6 text-sm font-medium text-white shadow-[0_0_0_1px_oklch(1_0_0/0.1)] hover:bg-white/[0.1] transition-colors"
                  >
                    获取车型方案
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              {/* Right: product image */}
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900/50 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                    preload
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust badges — 4-icon strip */}
        <section className="bg-zinc-900/50 backdrop-blur border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
                    <Icon className="size-4 text-orange-400" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selling Points — 1 main + auxiliary grid */}
        {product.sellingPoints && product.sellingPoints.length > 0 && (() => {
          const [main, ...aux] = product.sellingPoints;
          return (
            <section className="py-16 sm:py-20 bg-zinc-950">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                  <p className="text-xs tracking-widest text-orange-400 mb-3">
                    选膜指南
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    选膜、贴膜，这些坑我们已经帮您踩过了
                  </h2>
                </div>

                {/* Main card */}
                {main && (
                  <div className="mb-6 bg-zinc-900/80 p-6 sm:p-8 rounded-2xl shadow-[0_0_0_1px_oklch(1_0_0/0.06)]">
                    <div className="max-w-3xl">
                      {main.highlight && (
                        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 bg-orange-950/40 text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                          {main.highlight}
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-white mb-3">{main.title}</h3>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed text-pretty">
                        {main.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Auxiliary cards */}
                {aux.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {aux.map((sp) => (
                      <div
                        key={sp.title}
                        className="bg-zinc-900/60 p-5 rounded-xl shadow-[0_0_0_1px_oklch(1_0_0/0.04)] hover:-translate-y-0.5 transition-transform duration-200 motion-safe:transition-all"
                      >
                        {sp.highlight && (
                          <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 bg-orange-950/30 text-orange-300/80">
                            {sp.highlight}
                          </span>
                        )}
                        <h4 className="text-base font-semibold text-white mb-1.5">{sp.title}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">{sp.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })()}

        {/* ====== PPF: Why PPF + Why Lanhui (merged) ====== */}
        {product.slug === "ppf" && product.protectionScenes ? (
          <section className="py-16 sm:py-20 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Section header */}
              <div className="mb-12">
                <p className="text-xs tracking-widest text-orange-400 mb-3">决策梳理</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl text-balance">
                  从漆面威胁到长效保护，一站式解决
                </h2>
                <p className="text-zinc-400 text-sm mt-3 max-w-xl text-pretty">
                  了解车漆每天都在面对什么、隐形车衣如何保护、以及为什么众多车主选择蓝辉。
                </p>
              </div>

              {/* Part 1: Threats — compact 2x2 */}
              <div className="mb-10">
                <h3 className="text-sm font-semibold text-orange-300/80 uppercase tracking-wider mb-4">
                  你的车漆每天都在面对什么
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.protectionScenes.slice(0, 4).map((s) => (
                    <div
                      key={s.scene}
                      className="flex items-start gap-3 bg-zinc-900/50 rounded-xl p-4 shadow-[0_0_0_1px_oklch(1_0_0/0.04)]"
                    >
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-950/30 mt-0.5">
                        <Shield className="size-4 text-red-400/70" />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{s.scene}</h4>
                        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-10" />

              {/* Part 2: PPF solution — centered banner */}
              <div className="mb-10 text-center">
                <h3 className="text-sm font-semibold text-orange-300/80 uppercase tracking-wider mb-4">
                  最有效的解决方案
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-white text-balance mb-5">
                  隐形车衣：把原厂漆，留在新车那一天
                </p>
                <div className="inline-flex flex-wrap items-center justify-center gap-2.5">
                  {[
                    { label: "防刮擦", desc: "日常划痕自修复" },
                    { label: "耐黄变", desc: "脂肪族 TPU 基材" },
                    { label: "长质保", desc: "最长 12 年" },
                  ].map((t) => (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-orange-950/30 px-3.5 py-1.5 text-sm font-medium text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
                      title={t.desc}
                    >
                      <Sparkles className="size-3.5" />
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-10" />

              {/* Part 3: Trust reasons — 2x2 compact */}
              <div className="mb-10">
                <h3 className="text-sm font-semibold text-orange-300/80 uppercase tracking-wider mb-4">
                  为什么选择蓝辉
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.values.map((v) => (
                    <div
                      key={v.title}
                      className="flex items-start gap-3 bg-zinc-900/50 rounded-xl p-4 shadow-[0_0_0_1px_oklch(1_0_0/0.04)]"
                    >
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange-950/30 mt-0.5">
                        <Check className="size-4 text-orange-400" />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{v.title}</h4>
                        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bridge to series selector + callback to selling points */}
              <div className="text-center pt-2">
                <p className="text-sm text-zinc-500 text-balance">
                  上面的选膜指南帮你理清思路，接下来找到匹配你需求的系列
                </p>
                <ChevronDown className="w-5 h-5 text-zinc-600 mx-auto mt-2" />
              </div>
            </div>
          </section>
        ) : (
          /* Non-PPF: original Core Values */
          <section className="py-16 bg-black border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${
                    isLightMod
                      ? "bg-blue-950/40 border-blue-800/50"
                      : "bg-orange-950/40 border-orange-800/50"
                  } mb-4`}
                >
                  <Sparkles className={`w-6 h-6 ${accentText}`} />
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">核心价值</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {product.values.map((v) => (
                  <div
                    key={v.title}
                    className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${
                        isLightMod ? "bg-blue-950/40" : "bg-orange-950/40"
                      }`}
                    >
                      <Check className={`w-5 h-5 ${accentText}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====== PPF: Series Selection Guide ====== */}
        {product.slug === "ppf" && product.series && (() => {
          const tiers = [
            { label: "入门防护", desc: "基础漆面保护，性价比之选", slugs: ["pixiu", "qinglong"] },
            { label: "均衡之选", desc: "性能与价格的最佳平衡", slugs: ["baihu", "zhuque"] },
            { label: "高防护", desc: "更强防护，适合高端车型", slugs: ["xuanwu", "fenghuang"] },
            { label: "旗舰", desc: "顶级材质，全方位漆面守护", slugs: ["qilin", "zhulong"] },
          ];
          const seriesMap = new Map(product.series.map(s => [s.slug, s]));

          return (
            <section className="py-16 sm:py-20 bg-zinc-950">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                  <p className="text-xs tracking-widest text-orange-400 mb-3">如何选择</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    按需求选择适合你的系列
                  </h2>
                  <p className="text-zinc-400 mt-3 text-sm max-w-xl text-pretty">
                    不确定选哪款？根据预算和防护需求快速定位。每档包含两款可选型号，到店看实物再做决定。
                  </p>
                </div>

                {/* Tier cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {tiers.map((tier, i) => {
                    const items = tier.slugs.map(slug => seriesMap.get(slug)).filter(Boolean) as typeof product.series;
                    const isLast = i === tiers.length - 1;
                    return (
                      <div
                        key={tier.label}
                        className={`bg-zinc-900/80 rounded-2xl p-5 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] flex flex-col ${
                          isLast ? "ring-1 ring-orange-500/20 shadow-lg shadow-orange-500/5" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`text-lg font-bold ${isLast ? "text-orange-400" : "text-white"}`}>
                            {tier.label}
                          </h3>
                          {isLast && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-950/50 text-orange-300 shadow-[0_0_0_1px_oklch(1_0_0/0.08)]">
                              推荐
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-500 mb-4">{tier.desc}</p>
                        <div className="space-y-3 flex-1">
                          {items.map(s => (
                            <div key={s!.slug} className="border-t border-white/[0.06] pt-3 first:border-t-0 first:pt-0">
                              <div className="flex items-baseline justify-between mb-1">
                                <span className="text-sm font-semibold text-white">{s!.name}</span>
                                <span className="text-xs text-zinc-500 tabular-nums">{s!.model}</span>
                              </div>
                              <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-zinc-400">
                                <span>{s!.thickness}</span>
                                <span className="text-zinc-600">|</span>
                                <span>{s!.material}</span>
                                <span className="text-zinc-600">|</span>
                                <span>质保 {s!.warranty}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Collapsible full parameter table */}
                <details className="group">
                  <summary className="flex items-center justify-center gap-2 cursor-pointer text-sm text-zinc-500 hover:text-zinc-300 transition-colors py-3 select-none list-none">
                    <span>查看全部参数对比</span>
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="overflow-x-auto mt-4 rounded-xl border border-zinc-800">
                    <table className="w-full min-w-[900px] text-sm">
                      <thead>
                        <tr className="bg-orange-950/30 text-orange-300">
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">系列</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">型号</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">产地</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">材质</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">厚度</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">涂层</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">胶水</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">延伸率</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">耐候性</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">增亮</th>
                          <th className="px-4 py-3 text-left font-semibold border-b border-zinc-800">质保</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.series.map((s) => (
                          <tr key={s.model} className="border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                            <td className="px-4 py-3 text-white font-medium">{s.name}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.model}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.origin ?? "\u2014"}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.material ?? "\u2014"}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.thickness ?? "\u2014"}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.coating ?? "\u2014"}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.glue ?? "\u2014"}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.elongation ?? "\u2014"}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.weathering ?? "\u2014"}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.gloss ?? "\u2014"}</td>
                            <td className="px-4 py-3 text-zinc-300">{s.warranty ?? "\u2014"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>
              </div>
            </section>
          );
        })()}

        {/* ====== Window Film: Packages ====== */}
        {product.slug === "window-film" && product.packages && (
          <section className="py-16 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border bg-orange-950/40 border-orange-800/50 mb-4">
                  <Package className="w-6 h-6 text-orange-400" />
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  太阳膜套餐推荐
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {product.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{pkg.audience}</p>
                    <div className="space-y-3 flex-1">
                      <div>
                        <p className="text-xs text-zinc-500 mb-1">前挡</p>
                        <p className="text-sm text-zinc-200 font-medium">{pkg.frontProduct}</p>
                        <p className="text-xs text-zinc-400 mt-0.5">{pkg.frontParams}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 mb-1">侧后挡</p>
                        <p className="text-sm text-zinc-200 font-medium">{pkg.rearProduct}</p>
                        <p className="text-xs text-zinc-400 mt-0.5">{pkg.rearParams}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-zinc-800">
                      <span className="inline-block bg-orange-950/40 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full">
                        质保 {pkg.warranty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====== Window Film: Specs Table ====== */}
        {product.slug === "window-film" && product.specs && (
          <section className="py-16 bg-black border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  单品参数一览
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-sm">
                  <thead>
                    <tr className="bg-orange-950/40 text-orange-300">
                      {SPEC_COLUMN_MAP.map((col) => (
                        <th key={col.key} className="px-4 py-3 text-left font-semibold border border-zinc-800">
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={spec.model ?? i} className="border-b border-zinc-800">
                        {SPEC_COLUMN_MAP.map((col) => (
                          <td key={col.key} className="px-4 py-3 border-x border-zinc-800 text-zinc-300">
                            {spec[col.key] ?? "\u2014"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ====== Color Film: Series ====== */}
        {product.slug === "color-film" && product.colorSeries && (
          <section className="py-16 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border bg-orange-950/40 border-orange-800/50 mb-4">
                  <Palette className="w-6 h-6 text-orange-400" />
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  改色膜系列
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {product.colorSeries.map((cs) => (
                  <div
                    key={cs.name}
                    className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{cs.name}</h3>
                    <p className="text-xs text-zinc-500 mb-3">{cs.englishName}</p>
                    <p className="text-sm text-zinc-300 mb-2">{cs.style}</p>
                    <p className="text-xs text-zinc-400">适合：{cs.audience}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====== Color Film: Hot Colors ====== */}
        {product.slug === "color-film" && product.hotColors && (
          <section className="py-16 bg-black border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border bg-orange-950/40 border-orange-800/50 mb-4">
                  <Droplets className="w-6 h-6 text-orange-400" />
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  热门颜色推荐
                </h2>
              </div>
              <div className="space-y-8">
                {product.hotColors.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.colors.map((color) => (
                        <span
                          key={color}
                          className="bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm px-3 py-1.5 rounded-full"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====== Shared Film: Service Guarantee ====== */}
        {(product.slug === "ppf" || product.slug === "window-film" || product.slug === "color-film") && (
          <section className={`py-16 ${serviceSectionBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  专车专用施工保障
                </h2>
              </div>
              <div>
                {/* Acceptance standards */}
                <h3 className="text-lg font-semibold text-orange-400 mb-4">
                  验收标准
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-orange-950/40 text-orange-300">
                        <th className="px-4 py-2 text-left font-semibold border border-zinc-800">项目</th>
                        <th className="px-4 py-2 text-left font-semibold border border-zinc-800">标准</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceGuarantee.acceptance.map((a) => (
                        <tr key={a.item} className="border-b border-zinc-800">
                          <td className="px-4 py-2 border-x border-zinc-800 text-zinc-300">{a.item}</td>
                          <td className="px-4 py-2 border-x border-zinc-800 text-zinc-300">{a.standard}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {product.slug === "ppf" && <PpfDouyinCta />}

        {/* Service process */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">服务流程</h2>
              <p className="text-zinc-400 mt-3">到店交付，统一规范</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {product.process.map((p) => (
                <div
                  key={p.step}
                  className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
                >
                  <p
                    className={`text-3xl font-bold ${accentText} mb-3 tracking-wider`}
                  >
                    {p.step}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PPF: Mobile bottom CTA bar */}
        {product.slug === "ppf" && <PpfMobileCtaBar />}

      </main>
  );
}
