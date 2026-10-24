import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BmwSeriesHero } from "@/components/bmw/series/BmwSeriesHero";
import { BmwFaqSection } from "@/components/bmw/series/BmwFaqSection";
import { BmwDouyinCta } from "@/components/bmw/series/BmwDouyinCta";
import { BmwMobileCtaBar } from "@/components/bmw/series/BmwMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { bmwProjects } from "@/lib/bmw-all-models-products";
import { bmwModels } from "@/lib/bmw-model-groups";
import { bmwSeriesFaq } from "@/lib/bmw-series-services";
import {
  bmwModelCards,
  BMW_MODEL_GROUP_LABELS,
  BMW_MODEL_GROUPS,
  BMW_MODEL_CARD_COUNT,
  BMW_SOURCE_ROW_COUNT,
} from "@/lib/bmw-curated-models";
import { bmwProjects as bmwCuratedProjects } from "@/lib/bmw-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";
import { BMW_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "宝马全系保护与升级｜29 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）宝马全系服务：360 软包脚垫、平面尾箱垫、360 全包尾箱 3 类专车适配件。29 款车型按车系分组速览（轿车 8 / 纯电 i 7 / M 高性能 6 / X SUV 7 / 跑车 1），按车型年款对照版本变体与实车要点，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "宝马改装",
    "宝马360软包脚垫",
    "宝马平面尾箱垫",
    "宝马360全包尾箱",
    "宝马3系",
    "宝马5系",
    "宝马X5",
    "宝马i3",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/bmw" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: BMW_SERIES_HERO_IMAGE.src,
      width: BMW_SERIES_HERO_IMAGE.width,
      height: BMW_SERIES_HERO_IMAGE.height,
      alt: BMW_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function NissanBrandPage() {
  const brand = getBrandRoute("bmw");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/bmw");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/bmw");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...bmwModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/bmw#bmw-fitment`,
    })),
    ...bmwProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: bmwModels.length + idx + 1,
      name: p.name,
      url: `/product/bmw#bmw-projects`,
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
      name: "宝马全系适配件",
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
    name: "宝马全系轻改升级",
    brand: { "@type": "Brand", name: "宝马" },
    model: "宝马全系 29 款",
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
    makesOffer: bmwProjects.map((p) => ({
      "@type": "Offer",
      name: `宝马 ${p.name}`,
      description: p.description,
      category: p.tagline,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bmwSeriesFaq.map((faq) => ({
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
        <BmwSeriesHero breadcrumbItems={breadcrumbItems} />
        <BrandModelGroupGrid
          cards={bmwModelCards}
          groupOrder={BMW_MODEL_GROUPS}
          groupLabels={BMW_MODEL_GROUP_LABELS}
          theme="blue"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: BMW_SOURCE_ROW_COUNT, cards: BMW_MODEL_CARD_COUNT, images: 0 }}
        />
        <BrandProjectMatrix
          projects={bmwCuratedProjects}
          cards={bmwModelCards}
          groupOrder={BMW_MODEL_GROUPS}
          groupLabels={BMW_MODEL_GROUP_LABELS}
          brandLabel="宝马"
          theme="blue"
        />
        <BmwFaqSection />
        <BmwDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的宝马车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <BmwMobileCtaBar />
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
