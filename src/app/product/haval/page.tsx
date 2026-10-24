import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HavalSeriesHero } from "@/components/haval/series/HavalSeriesHero";
import { HavalFaqSection } from "@/components/haval/series/HavalFaqSection";
import { HavalDouyinCta } from "@/components/haval/series/HavalDouyinCta";
import { HavalMobileCtaBar } from "@/components/haval/series/HavalMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { havalProjects } from "@/lib/haval-all-models-products";
import { havalModels } from "@/lib/haval-model-groups";
import { havalSeriesFaq } from "@/lib/haval-series-services";
import { HAVAL_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import {
  havalModelCards,
  HAVAL_MODEL_GROUP_LABELS,
  HAVAL_MODEL_GROUPS,
  HAVAL_MODEL_CARD_COUNT,
  HAVAL_SOURCE_ROW_COUNT,
} from "@/lib/haval-curated-models";
import { havalProjects as havalCuratedProjects } from "@/lib/haval-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

const PAGE_TITLE =
  "哈弗全系保护与升级｜26 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）哈弗全系服务：底盘护板、360 软包脚垫、平面尾箱垫、360 全包尾箱、电动踏板 5 类专车适配件。26 款车型按车系分组速览（H系/M系 13 / F系与入门 6 / 狗系 3 / Hi4 新能源 4），按车型年款对照适配与材质档位，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "哈弗改装",
    "哈弗底盘护板",
    "哈弗电动踏板",
    "哈弗脚垫",
    "哈弗H6",
    "哈弗H9",
    "哈弗大狗",
    "哈弗猛龙",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/haval" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: HAVAL_SERIES_HERO_IMAGE.src,
      width: HAVAL_SERIES_HERO_IMAGE.width,
      height: HAVAL_SERIES_HERO_IMAGE.height,
      alt: HAVAL_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function NissanBrandPage() {
  const brand = getBrandRoute("haval");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/haval");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/haval");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...havalModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/haval#haval-fitment`,
    })),
    ...havalProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: havalModels.length + idx + 1,
      name: p.name,
      url: `/product/haval#haval-projects`,
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
      name: "哈弗全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  // 供应商适配库速查：仅收录适配库中存在的 19 个精确车型节；官方名单中 H2S/H6L/H6S/F7X/大狗PLUS/枭龙MAX/猛龙PLUS 无对应节，不展示
  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "哈弗全系轻改升级",
    brand: { "@type": "Brand", name: "哈弗" },
    model: "H系、F系、狗系、Hi4 新能源全系车型",
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
    makesOffer: havalProjects.map((p) => ({
      "@type": "Offer",
      name: `哈弗 ${p.name} 升级方案`,
      description: p.description,
      category: p.key,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: havalSeriesFaq.map((faq) => ({
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
        <HavalSeriesHero breadcrumbItems={breadcrumbItems} />
        <BrandModelGroupGrid
          cards={havalModelCards}
          groupOrder={HAVAL_MODEL_GROUPS}
          groupLabels={HAVAL_MODEL_GROUP_LABELS}
          theme="red"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: HAVAL_SOURCE_ROW_COUNT, cards: HAVAL_MODEL_CARD_COUNT, images: 0 }}
        />
        <BrandProjectMatrix
          projects={havalCuratedProjects}
          cards={havalModelCards}
          groupOrder={HAVAL_MODEL_GROUPS}
          groupLabels={HAVAL_MODEL_GROUP_LABELS}
          brandLabel="哈弗"
          theme="red"
        />
        <HavalFaqSection />
        <HavalDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的哈弗车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <HavalMobileCtaBar />
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
