import type { Metadata } from "next";
import { FilmPageHero } from "@/components/film/FilmPageHero";
import { SpecsTable } from "@/components/film/SpecsTable";
import { WindowFilmParameterExplainer } from "@/components/window-film/WindowFilmParameterExplainer";
import { WindowFilmPackageCard } from "@/components/window-film/WindowFilmPackageCard";
import { WindowFilmExperiences } from "@/components/window-film/WindowFilmExperiences";
import { WindowFilmScenarioSelector } from "@/components/window-film/WindowFilmScenarioSelector";
import { WindowFilmConstructionProofs } from "@/components/window-film/WindowFilmConstructionProofs";
import { WindowFilmDouyinCta } from "@/components/window-film/WindowFilmDouyinCta";
import { getProduct } from "@/lib/products";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import {
  getAllWindowFilmPackageSlugsWithDetails,
  getWindowFilmPackageWithDetails,
  windowFilmDetails,
} from "@/lib/window-film-details";
import {
  PACKAGE_POSITIONING_LABELS,
  FEATURED_PACKAGE_SLUGS,
  windowFilmFaqs,
} from "@/lib/window-film-experiences";
import { safeJsonLd } from "@/lib/json-ld";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "汽车窗膜套餐推荐 | 蓝辉轻改 LANHUI",
  description:
    "一张好膜不只是隔热。蓝辉轻改汽车窗膜覆盖隔热、清晰视野、隐私、信号与长期稳定，按车型匹配前挡+侧后挡方案，专业施工保障。",
  openGraph: {
    title: "汽车窗膜套餐推荐 | 蓝辉轻改 LANHUI",
    description:
      "兼顾隔热、清晰视野、隐私、信号与长期稳定，按车型匹配前挡与侧后挡方案。",
    images: [
      {
        url: "/images/producthero/window-film-hero.webp",
        width: 1448,
        height: 1086,
        alt: "汽车窗膜施工中的清晰车内视野",
      },
    ],
  },
};

const SPECS_COLUMNS = [
  { key: "model", label: "型号" },
  { key: "position", label: "安装位置" },
  { key: "vlt", label: "可见光阻隔率" },
  { key: "uvr", label: "紫外线阻隔率" },
  { key: "irr", label: "红外线阻隔率" },
  { key: "tser", label: "总太阳能阻隔率" },
  { key: "thickness", label: "厚度" },
  { key: "warranty", label: "质保" },
];

export default function WindowFilmPage() {
  const product = getProduct("window-film");
  if (!product) {
    throw new Error("window-film product not found in products.ts");
  }

  const packages = getAllWindowFilmPackageSlugsWithDetails()
    .map((slug) => getWindowFilmPackageWithDetails(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const breadcrumbItems = getProductBreadcrumbs("/product/window-film");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/window-film");

  const featuredPackages = packages.filter((p) =>
    (FEATURED_PACKAGE_SLUGS as readonly string[]).includes(p.slug)
  );
  const secondaryPackages = packages.filter(
    (p) => !(FEATURED_PACKAGE_SLUGS as readonly string[]).includes(p.slug)
  );

  return (
    <>
      <FilmPageHero breadcrumbItems={breadcrumbItems} />

      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col bg-zinc-950">
        {/* ====== 5 项好膜体验 ====== */}
        <WindowFilmExperiences />

        {/* ====== 3 类用车场景选择 ====== */}
        <WindowFilmScenarioSelector />

        {/* ====== 主推套餐（3 个） ====== */}
        <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 lg:mb-12">
              <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
                推荐方案
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                三个典型方案，先看哪个适合你
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                从日常通勤到家庭出行到新能源全景天幕，先看最贴近你的那套。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredPackages.map((pkg) => (
                <WindowFilmPackageCard
                  key={pkg.slug}
                  pkg={pkg}
                  details={windowFilmDetails[pkg.slug]}
                  variant="featured"
                  positioningLabel={PACKAGE_POSITIONING_LABELS[pkg.slug]}
                  id={`pkg-${pkg.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ====== 参数解释（后移到套餐之后） ====== */}
        <WindowFilmParameterExplainer />

        {/* ====== 4 项施工证据 ====== */}
        <WindowFilmConstructionProofs />

        {/* ====== 全部套餐折叠区 + 参数表 ====== */}
        <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <details className="group">
              <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-lg font-semibold text-white hover:text-orange-300 transition-colors">
                查看全部 7 个套餐
                <ChevronDown className="w-5 h-5 text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {packages.map((pkg) => (
                  <WindowFilmPackageCard
                    key={pkg.slug}
                    pkg={pkg}
                    details={windowFilmDetails[pkg.slug]}
                    variant={
                      (FEATURED_PACKAGE_SLUGS as readonly string[]).includes(pkg.slug)
                        ? "featured"
                        : "secondary"
                    }
                    positioningLabel={PACKAGE_POSITIONING_LABELS[pkg.slug]}
                    id={`pkg-all-${pkg.slug}`}
                  />
                ))}
              </div>
            </details>
          </div>
        </section>

        {/* ====== 单品参数表 ====== */}
        {product.specs && product.specs.length > 0 && (
          <SpecsTable
            title="单品参数一览"
            columns={[...SPECS_COLUMNS]}
            data={product.specs}
          />
        )}

        {/* ====== 抖音案例 CTA ====== */}
        <WindowFilmDouyinCta />

        {/* ====== FAQ ====== */}
        <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs tracking-widest mb-3 text-orange-400 uppercase">
                常见问题
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                还有疑问？这里也许有答案
              </h2>
            </div>

            <div className="space-y-2">
              {windowFilmFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl bg-zinc-900/50 border border-white/[0.06]"
                >
                  <summary className="flex items-center justify-between gap-3 cursor-pointer list-none px-5 py-4">
                    <span className="text-sm sm:text-base font-medium text-white text-left">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-4 h-4 flex-shrink-0 text-zinc-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
