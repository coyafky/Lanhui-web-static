import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MazdaSeriesHero } from "@/components/mazda/series/MazdaSeriesHero";
import { MazdaModelGrid } from "@/components/mazda/series/MazdaModelGrid";
import { MazdaProjectGrid } from "@/components/mazda/series/MazdaProjectGrid";
import { MazdaFitmentDetails } from "@/components/mazda/series/MazdaFitmentDetails";
import { MazdaFaqSection } from "@/components/mazda/series/MazdaFaqSection";
import { MazdaDouyinCta } from "@/components/mazda/series/MazdaDouyinCta";
import { MazdaMobileCtaBar } from "@/components/mazda/series/MazdaMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { mazdaProjects } from "@/lib/mazda-all-models-products";
import { mazdaModels } from "@/lib/mazda-model-groups";
import { MAZDA_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "马自达全系底盘保护与舒适升级｜12 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）马自达全系服务：底盘护板、电动踏板 2 类专车适配件。12 款车型分组速览（轿车 5 / MPV 1 / SUV 6），按车型年款对照适配与材质档位，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "马自达改装",
    "马自达底盘护板",
    "马自达电动踏板",
    "马自达CX-5",
    "马自达阿特兹",
    "马自达3",
    "EZ-60",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/mazda" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: MAZDA_SERIES_HERO_IMAGE.src,
      width: MAZDA_SERIES_HERO_IMAGE.width,
      height: MAZDA_SERIES_HERO_IMAGE.height,
      alt: MAZDA_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function MazdaBrandPage() {
  const brand = getBrandRoute("mazda");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/mazda");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/mazda");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...mazdaModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/mazda#mazda-fitment`,
    })),
    ...mazdaProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: mazdaModels.length + idx + 1,
      name: p.name,
      url: `/product/mazda#mazda-projects`,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "马自达全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <MazdaSeriesHero breadcrumbItems={breadcrumbItems} />
        <MazdaModelGrid />
        <MazdaProjectGrid />
        <MazdaFitmentDetails />
        <MazdaFaqSection />
        <MazdaDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的马自达车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <MazdaMobileCtaBar />
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
