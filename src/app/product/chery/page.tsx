import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CherySeriesHero } from "@/components/chery/series/CherySeriesHero";
import { CheryModelGrid } from "@/components/chery/series/CheryModelGrid";
import { CheryProjectGrid } from "@/components/chery/series/CheryProjectGrid";
import { CheryFitmentDetails } from "@/components/chery/series/CheryFitmentDetails";
import { CheryFaqSection } from "@/components/chery/series/CheryFaqSection";
import { CheryDouyinCta } from "@/components/chery/series/CheryDouyinCta";
import { CheryMobileCtaBar } from "@/components/chery/series/CheryMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { cheryProjects } from "@/lib/chery-all-models-products";
import { cheryModels } from "@/lib/chery-model-groups";
import { CHERY_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "奇瑞全系保护与升级｜28 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）奇瑞全系服务：底盘护板、电动踏板 2 类专车适配件。28 款车型按车系分组速览（艾瑞泽 6 / 风云 6 / 瑞虎 11 / 经典轿车 3 / 新能源 2），按车型年款对照版本变体与实车要点，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "奇瑞改装",
    "奇瑞底盘护板",
    "奇瑞电动踏板",
    "奇瑞艾瑞泽",
    "奇瑞风云",
    "奇瑞瑞虎",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/chery" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: CHERY_SERIES_HERO_IMAGE.src,
      width: CHERY_SERIES_HERO_IMAGE.width,
      height: CHERY_SERIES_HERO_IMAGE.height,
      alt: CHERY_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function CheryBrandPage() {
  const brand = getBrandRoute("chery");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/chery");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/chery");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...cheryModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/chery#chery-fitment`,
    })),
    ...cheryProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: cheryModels.length + idx + 1,
      name: p.name,
      url: `/product/chery#chery-projects`,
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
      name: "奇瑞全系适配件",
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
        <CherySeriesHero breadcrumbItems={breadcrumbItems} />
        <CheryModelGrid />
        <CheryProjectGrid />
        <CheryFitmentDetails />
        <CheryFaqSection />
        <CheryDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的奇瑞车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、动力类型、底盘结构、电路走向）为准。
          </p>
        </section>

        <CheryMobileCtaBar />
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
