import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GreatWallSeriesHero } from "@/components/great-wall/series/GreatWallSeriesHero";
import { GreatWallModelGrid } from "@/components/great-wall/series/GreatWallModelGrid";
import { GreatWallProjectGrid } from "@/components/great-wall/series/GreatWallProjectGrid";
import { GreatWallFitmentDetails } from "@/components/great-wall/series/GreatWallFitmentDetails";
import { GreatWallFaqSection } from "@/components/great-wall/series/GreatWallFaqSection";
import { GreatWallDouyinCta } from "@/components/great-wall/series/GreatWallDouyinCta";
import { GreatWallMobileCtaBar } from "@/components/great-wall/series/GreatWallMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { greatWallProjects } from "@/lib/great-wall-all-models-products";
import { greatWallModels } from "@/lib/great-wall-model-groups";
import { GREAT_WALL_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "长城全系保护与升级｜11 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）长城全系服务：底盘护板、电动踏板 2 类专车适配件。11 款车型按车系分组速览（皮卡 4 / 轿车 2 / 小型车 4 / 新能源 1），按车型年款对照版本变体与实车要点，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "长城改装",
    "长城底盘护板",
    "长城电动踏板",
    "长城炮",
    "长城风骏",
    "长城金刚炮",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/great-wall" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: GREAT_WALL_SERIES_HERO_IMAGE.src,
      width: GREAT_WALL_SERIES_HERO_IMAGE.width,
      height: GREAT_WALL_SERIES_HERO_IMAGE.height,
      alt: GREAT_WALL_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function GreatWallBrandPage() {
  const brand = getBrandRoute("great-wall");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/great-wall");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/great-wall");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...greatWallModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/great-wall#great-wall-fitment`,
    })),
    ...greatWallProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: greatWallModels.length + idx + 1,
      name: p.name,
      url: `/product/great-wall#great-wall-projects`,
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
      name: "长城全系适配件",
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
        <GreatWallSeriesHero breadcrumbItems={breadcrumbItems} />
        <GreatWallModelGrid />
        <GreatWallProjectGrid />
        <GreatWallFitmentDetails />
        <GreatWallFaqSection />
        <GreatWallDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的长城车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、动力类型、底盘结构、电路走向）为准。
          </p>
        </section>

        <GreatWallMobileCtaBar />
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
