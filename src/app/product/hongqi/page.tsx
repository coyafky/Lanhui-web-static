import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HongqiSeriesHero } from "@/components/hongqi/series/HongqiSeriesHero";
import { HongqiSubpageCards } from "@/components/hongqi/series/HongqiSubpageCards";
import { HongqiFaqSection } from "@/components/hongqi/series/HongqiFaqSection";
import { HongqiDouyinCta } from "@/components/hongqi/series/HongqiDouyinCta";
import { HongqiMobileCtaBar } from "@/components/hongqi/series/HongqiMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { hongqiProjects } from "@/lib/hongqi-all-models-products";
import { hongqiModels } from "@/lib/hongqi-model-groups";
import { hongqiSeriesFaq } from "@/lib/hongqi-series-services";
import { HONGQI_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import {
  hongqiModelCards,
  HONGQI_MODEL_GROUP_LABELS,
  HONGQI_MODEL_GROUPS,
  HONGQI_MODEL_CARD_COUNT,
  HONGQI_SOURCE_ROW_COUNT,
} from "@/lib/hongqi-curated-models";
import { hongqiProjects as hongqiCuratedProjects } from "@/lib/hongqi-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

/** 适配库 17 节与官方车型名单精确匹配，无变体节。 */
const PAGE_TITLE =
  "红旗全系保护与舒适升级｜17 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）红旗全系服务：脚垫、尾箱垫、底盘护板、电动踏板 5 类专车适配件。17 款车型分组速查，HS7 / H5 单独明细页，按车型年款对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "红旗改装",
    "红旗脚垫",
    "红旗底盘护板",
    "红旗电动踏板",
    "红旗HS7",
    "红旗H5",
    "红旗E-HS9",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/hongqi" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: HONGQI_SERIES_HERO_IMAGE.src,
      width: HONGQI_SERIES_HERO_IMAGE.width,
      height: HONGQI_SERIES_HERO_IMAGE.height,
      alt: HONGQI_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function HongqiBrandPage() {
  const brand = getBrandRoute("hongqi");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/hongqi");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/hongqi");
  const localStore = stores.find((s) => s.isActive);
  const featured = hongqiModels.filter((m) => m.subpage);

  const itemListElement = [
    ...featured.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `红旗${m.name} 适配件明细`,
      url: `/product/hongqi/${m.slug}`,
    })),
    ...hongqiProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: featured.length + idx + 1,
      name: p.name,
      url: `/product/hongqi#hongqi-projects`,
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
      name: "红旗全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "红旗全系轻改升级",
    brand: { "@type": "Brand", name: "红旗" },
    model: "红旗全系 17 款车型",
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
    makesOffer: hongqiProjects.map((p) => ({
      "@type": "Offer",
      name: `红旗 ${p.name} 方案`,
      description: p.feature,
      category: p.id,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hongqiSeriesFaq.map((faq) => ({
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
        <HongqiSeriesHero breadcrumbItems={breadcrumbItems} />
        <BrandModelGroupGrid
          cards={hongqiModelCards}
          groupOrder={HONGQI_MODEL_GROUPS}
          groupLabels={HONGQI_MODEL_GROUP_LABELS}
          theme="red"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: HONGQI_SOURCE_ROW_COUNT, cards: HONGQI_MODEL_CARD_COUNT, images: 0 }}
        />
        <BrandProjectMatrix
          projects={hongqiCuratedProjects}
          cards={hongqiModelCards}
          groupOrder={HONGQI_MODEL_GROUPS}
          groupLabels={HONGQI_MODEL_GROUP_LABELS}
          brandLabel="红旗"
          theme="red"
        />
        <HongqiSubpageCards />
        <HongqiFaqSection />
        <HongqiDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的红旗车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、座椅布局、底盘结构、电路走向）为准。
            文中「360°」指全包工艺，非品牌名。
          </p>
        </section>

        <HongqiMobileCtaBar />
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
