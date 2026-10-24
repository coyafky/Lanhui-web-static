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
import { productSchema } from "@/lib/schema";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { stores } from "@/lib/store";
import {
  WindowPackageCompare,
  HeatTestGallery,
  FilmComparison,
  FilmLocalStore,
  FilmFaqSection,
} from "@/components/film";
import { windowPackageFaqs } from "@/lib/film-products";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/product/window-film" },
  title: "汽车窗膜套餐推荐 | 蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改汽车窗膜服务关注隔热、视野与隐私需求，按车型与实车玻璃状态讨论前挡和侧后挡搭配，并在施工前核对膜材资料。",
  openGraph: {
    title: "汽车窗膜套餐推荐 | 蓝辉轻改 LANHUI",
    description:
      "结合隔热、视野与隐私需求，按车型讨论前挡与侧后挡方案。",
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

  const localStore = stores.find((s) => s.isActive);
  const localBusiness = localStore ? generateLocalBusinessSchema(localStore) : null;

  const productJsonLd = productSchema({
    name: product.name,
    slug: product.slug,
    description: product.heroDescription ?? product.cardDescription,
    category: product.groupLabel,
  });

  const allFaqs = [...windowFilmFaqs, ...windowPackageFaqs];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

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

        {/* ====== 资料 4 款套餐参数对比（无价格） ====== */}
        <WindowPackageCompare />

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
            disclaimer="表内为产品资料标称值，具体指标需核对对应型号与批次的检测报告；实际视野和隔热表现以实车测试为准，质保以书面条款为准。"
          />
        )}

        {/* ====== 隔热实测现场记录 ====== */}
        <HeatTestGallery />

        {/* ====== 抖音案例 CTA ====== */}
        <WindowFilmDouyinCta />

        {/* ====== 三品类对比 ====== */}
        <FilmComparison active="window" />

        {/* ====== 本地服务锚点 ====== */}
        <FilmLocalStore />

        {/* ====== 套餐怎么选补充 FAQ ====== */}
        <FilmFaqSection
          title="套餐怎么选？报价口径与施工养护常见问题"
          intro="资料套餐选择、天窗口径、信号影响与贴后养护，到店按车型确认。"
          faqs={windowPackageFaqs}
        />

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }}
      />
      {localBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusiness) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
    </>
  );
}
