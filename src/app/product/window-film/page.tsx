import type { Metadata } from "next";
import { FilmPageHero } from "@/components/film/FilmPageHero";
import { SpecsTable } from "@/components/film/SpecsTable";
import { WindowFilmParameterExplainer } from "@/components/window-film/WindowFilmParameterExplainer";
import { WindowFilmPackageCard } from "@/components/window-film/WindowFilmPackageCard";
import { WindowFilmBenefits } from "@/components/window-film/WindowFilmBenefits";
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
  windowFilmFaqs,
} from "@/lib/window-film-experiences";
import { safeJsonLd } from "@/lib/json-ld";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/product/window-film" },
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

  return (
    <>
      <FilmPageHero breadcrumbItems={breadcrumbItems} />

      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col bg-zinc-950">
        {/* ====== 全部 7 个套餐 ====== */}
        <section className="py-16 sm:py-20 bg-zinc-950 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                七套窗膜组合，按侧重点选择
              </h2>
              <p className="mt-4 text-zinc-300 max-w-2xl leading-relaxed">
                每套方案都标明前挡、侧后挡组合与侧重方向，进入详情可继续查看产品特性和完整规格。
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.slug}
                  className="min-w-0 md:last:col-span-2 md:last:mx-auto md:last:w-[calc(50%-0.625rem)] xl:col-span-2 xl:last:col-start-3 xl:last:w-auto"
                >
                  <WindowFilmPackageCard
                    pkg={pkg}
                    details={windowFilmDetails[pkg.slug]}
                    variant="featured"
                    positioningLabel={PACKAGE_POSITIONING_LABELS[pkg.slug]}
                    id={`pkg-${pkg.slug}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== 窗膜核心作用 ====== */}
        <WindowFilmBenefits />

        {/* ====== 参数解释（后移到套餐之后） ====== */}
        <WindowFilmParameterExplainer />

        {/* ====== 4 项施工证据 ====== */}
        <WindowFilmConstructionProofs />

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
