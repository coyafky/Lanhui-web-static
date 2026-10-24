import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GacSeriesHero } from "@/components/gac/series/GacSeriesHero";
import { GacFaqSection } from "@/components/gac/series/GacFaqSection";
import { GacDouyinCta } from "@/components/gac/series/GacDouyinCta";
import { GacMobileCtaBar } from "@/components/gac/series/GacMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { gacProjects } from "@/lib/gac-all-models-products";
import { gacModels } from "@/lib/gac-model-groups";
import { gacSeriesFaq } from "@/lib/gac-series-services";
import { GAC_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import {
  gacModelCards,
  GAC_MODEL_GROUP_LABELS,
  GAC_MODEL_GROUPS,
  GAC_MODEL_CARD_COUNT,
  GAC_SOURCE_ROW_COUNT,
} from "@/lib/gac-curated-models";
import { gacProjects as gacCuratedProjects } from "@/lib/gac-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

const PAGE_TITLE =
  "广汽传祺全系保护与升级｜30 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）广汽传祺全系服务：底盘护板、电动踏板、小桌板、吸顶电视、脚垫尾箱 7 类专车适配件。30 款车型分组速览（轿车 9 / MPV 6 / SUV 15），按车型年款对照适配与材质档位，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "广汽传祺改装",
    "传祺底盘护板",
    "传祺电动踏板",
    "传祺吸顶电视",
    "传祺GS8",
    "传祺M8",
    "传祺GS4",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/gac" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: GAC_SERIES_HERO_IMAGE.src,
      width: GAC_SERIES_HERO_IMAGE.width,
      height: GAC_SERIES_HERO_IMAGE.height,
      alt: GAC_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function GacBrandPage() {
  const brand = getBrandRoute("gac");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/gac");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/gac");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...gacModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/gac#gac-fitment`,
    })),
    ...gacProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: gacModels.length + idx + 1,
      name: p.name,
      url: `/product/gac#gac-projects`,
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
      name: "广汽传祺全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "广汽传祺全系保护与升级",
    brand: { "@type": "Brand", name: "广汽传祺" },
    model: "广汽传祺全系 30 款",
    category: "汽车轻改升级服务",
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    provider: {
      "@type": "AutoRepair",
      name: "蓝辉轻改",
      address: {
        "@type": "PostalAddress",
        addressRegion: "广东省",
        addressLocality: "佛山市顺德区",
      },
      areaServed: "全国",
    },
    makesOffer: gacProjects.map((p) => ({
      "@type": "Offer",
      name: `广汽传祺 ${p.name}`,
      description: p.description,
      category: p.tagline,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gacSeriesFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(vehicleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
        />
        <GacSeriesHero breadcrumbItems={breadcrumbItems} />
        <BrandModelGroupGrid
          cards={gacModelCards}
          groupOrder={GAC_MODEL_GROUPS}
          groupLabels={GAC_MODEL_GROUP_LABELS}
          theme="red"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: GAC_SOURCE_ROW_COUNT, cards: GAC_MODEL_CARD_COUNT, images: 0 }}
        />
        <BrandProjectMatrix
          projects={gacCuratedProjects}
          cards={gacModelCards}
          groupOrder={GAC_MODEL_GROUPS}
          groupLabels={GAC_MODEL_GROUP_LABELS}
          brandLabel="广汽传祺"
          theme="red"
        />
        <GacFaqSection />
        <GacDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的广汽传祺车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <GacMobileCtaBar />
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
