import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevroletSeriesHero } from "@/components/chevrolet/series/ChevroletSeriesHero";
import { ChevroletFaqSection } from "@/components/chevrolet/series/ChevroletFaqSection";
import { ChevroletDouyinCta } from "@/components/chevrolet/series/ChevroletDouyinCta";
import { ChevroletMobileCtaBar } from "@/components/chevrolet/series/ChevroletMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { chevroletProjects } from "@/lib/chevrolet-all-models-products";
import { chevroletModels } from "@/lib/chevrolet-model-groups";
import { chevroletSeriesFaq } from "@/lib/chevrolet-series-services";
import {
  chevroletModelCards,
  CHEVROLET_MODEL_GROUP_LABELS,
  CHEVROLET_MODEL_GROUPS,
  CHEVROLET_MODEL_CARD_COUNT,
  CHEVROLET_SOURCE_ROW_COUNT,
} from "@/lib/chevrolet-curated-models";
import { chevroletProjects as chevroletCuratedProjects } from "@/lib/chevrolet-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";
import { CHEVROLET_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "雪佛兰全系保护与升级｜16 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）雪佛兰全系服务：底盘护板、电动踏板 2 类专车适配件。16 款车型按车系分组速览（皮卡 1 / SUV 6 / 轿车 5 / 小型家用 4），按车型年款对照版本变体与实车要点，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "雪佛兰改装",
    "雪佛兰底盘护板",
    "雪佛兰电动踏板",
    "雪佛兰探界者",
    "雪佛兰开拓者",
    "雪佛兰科鲁泽",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/chevrolet" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: CHEVROLET_SERIES_HERO_IMAGE.src,
      width: CHEVROLET_SERIES_HERO_IMAGE.width,
      height: CHEVROLET_SERIES_HERO_IMAGE.height,
      alt: CHEVROLET_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function ChevroletBrandPage() {
  const brand = getBrandRoute("chevrolet");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/chevrolet");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/chevrolet");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...chevroletModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/chevrolet#chevrolet-fitment`,
    })),
    ...chevroletProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: chevroletModels.length + idx + 1,
      name: p.name,
      url: `/product/chevrolet#chevrolet-projects`,
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
      name: "雪佛兰全系适配件",
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
    name: "雪佛兰全系保护与升级",
    brand: { "@type": "Brand", name: "雪佛兰" },
    model: "雪佛兰全系 16 款",
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
    makesOffer: chevroletProjects.map((p) => ({
      "@type": "Offer",
      name: `雪佛兰 ${p.name}`,
      description: p.description,
      category: p.tagline,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: chevroletSeriesFaq.map((faq) => ({
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
        <ChevroletSeriesHero breadcrumbItems={breadcrumbItems} />
        <BrandModelGroupGrid
          cards={chevroletModelCards}
          groupOrder={CHEVROLET_MODEL_GROUPS}
          groupLabels={CHEVROLET_MODEL_GROUP_LABELS}
          theme="blue"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: CHEVROLET_SOURCE_ROW_COUNT, cards: CHEVROLET_MODEL_CARD_COUNT, images: 0 }}
        />
        <BrandProjectMatrix
          projects={chevroletCuratedProjects}
          cards={chevroletModelCards}
          groupOrder={CHEVROLET_MODEL_GROUPS}
          groupLabels={CHEVROLET_MODEL_GROUP_LABELS}
          brandLabel="雪佛兰"
          theme="blue"
        />
        <ChevroletFaqSection />
        <ChevroletDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的雪佛兰车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、动力类型、底盘结构、电路走向）为准。
          </p>
        </section>

        <ChevroletMobileCtaBar />
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
