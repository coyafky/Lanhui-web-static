import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LedaoSeriesHero } from "@/components/ledao/series/LedaoSeriesHero";
import { LedaoBaseServiceGrid } from "@/components/ledao/series/LedaoBaseServiceGrid";
import { LedaoServiceFlow } from "@/components/ledao/series/LedaoServiceFlow";
import { LedaoFaqSection } from "@/components/ledao/series/LedaoFaqSection";
import { LedaoDouyinCta } from "@/components/ledao/series/LedaoDouyinCta";
import { LedaoMobileCtaBar } from "@/components/ledao/series/LedaoMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  ledaoBaseServices,
  ledaoSeriesFaq,
} from "@/lib/ledao-series-services";
import { LEDAO_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import {
  ledaoModelCards,
  LEDAO_MODEL_GROUP_LABELS,
  LEDAO_MODEL_GROUPS,
  LEDAO_MODEL_CARD_COUNT,
  LEDAO_SOURCE_ROW_COUNT,
} from "@/lib/ledao-curated-models";
import { ledaoProjects as ledaoCuratedProjects } from "@/lib/ledao-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

/** 适配库 3 节（L60 / L80 / L90）与官方车型精确匹配。 */
const PAGE_TITLE =
  "乐道全系家庭用车保护与舒适升级｜车膜、踏板、地板与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）为乐道 L60、L80、L90 等车型提供车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护服务，乐道 L90 另有 21 项专车适配方案。先确认车型与年款，再安排到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "乐道改装",
    "乐道贴膜",
    "乐道 L90",
    "乐道 L90 地板",
    "乐道电动踏板",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/ledao" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: LEDAO_SERIES_HERO_IMAGE.src,
      width: LEDAO_SERIES_HERO_IMAGE.width,
      height: LEDAO_SERIES_HERO_IMAGE.height,
      alt: LEDAO_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function LedaoBrandPage() {
  const brand = getBrandRoute("ledao");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/ledao");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/ledao");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "乐道全系基础服务",
      numberOfItems: ledaoBaseServices.length,
      itemListElement: ledaoBaseServices.map((svc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: svc.title,
        url: svc.href,
      })),
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  // 供应商适配库速查：L60 / L80 / L90 精确匹配，按车型分组渲染

  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "乐道全系轻改升级",
    brand: { "@type": "Brand", name: "乐道" },
    model: "L60、L80、L90 全系车型",
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
    makesOffer: ledaoBaseServices.map((svc) => ({
      "@type": "Offer",
      name: `乐道 ${svc.title}`,
      description: svc.painPoint,
      category: svc.id,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ledaoSeriesFaq.map((faq) => ({
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
        <LedaoSeriesHero breadcrumbItems={breadcrumbItems} />
        <LedaoBaseServiceGrid />
        <BrandModelGroupGrid
          cards={ledaoModelCards}
          groupOrder={LEDAO_MODEL_GROUPS}
          groupLabels={LEDAO_MODEL_GROUP_LABELS}
          theme="blue"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: LEDAO_SOURCE_ROW_COUNT, cards: LEDAO_MODEL_CARD_COUNT, images: 0 }}
        />
        <LedaoServiceFlow />
        <BrandProjectMatrix
          projects={ledaoCuratedProjects}
          cards={ledaoModelCards}
          groupOrder={LEDAO_MODEL_GROUPS}
          groupLabels={LEDAO_MODEL_GROUP_LABELS}
          brandLabel="乐道"
          theme="blue"
        />
        <LedaoFaqSection />
        <LedaoDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的乐道车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            具体方案需根据车型、年款、配置、原车状态及施工条件现场确认。
          </p>
        </section>

        <LedaoMobileCtaBar />
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
