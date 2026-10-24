import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LiAutoSeriesHero } from "@/components/li-auto/series/LiAutoSeriesHero";
import { LiAutoBaseServiceGrid } from "@/components/li-auto/series/LiAutoBaseServiceGrid";
import { LiAutoServiceFlow } from "@/components/li-auto/series/LiAutoServiceFlow";
import { LiAutoFaqSection } from "@/components/li-auto/series/LiAutoFaqSection";
import { LiAutoDouyinCta } from "@/components/li-auto/series/LiAutoDouyinCta";
import { LiAutoMobileCtaBar } from "@/components/li-auto/series/LiAutoMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  liAutoBaseServices,
  liAutoSeriesFaq,
} from "@/lib/li-auto-series-services";
import { LI_AUTO_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import {
  liAutoModelCards,
  LI_AUTO_MODEL_GROUP_LABELS,
  LI_AUTO_MODEL_GROUPS,
  LI_AUTO_MODEL_CARD_COUNT,
  LI_AUTO_SOURCE_ROW_COUNT,
} from "@/lib/li-auto-curated-models";
import { liAutoProjects as liAutoCuratedProjects } from "@/lib/li-auto-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

/**
 * 适配库节过滤：8 个官方基础车型 + 焕新/年款/续航变体节；
 * 排除跨车型节（L7/L8、焕新版L7/L8）、编码节（TJ100xx）、通用适配节。
 */
const PAGE_TITLE =
  "理想汽车家庭用车保护与舒适升级｜车膜、踏板、地板与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改为理想汽车 ONE、i6、i8、L9、MEGA 提供车衣、隔热膜、电动踏板、地板总成、专车脚垫与洗美养护服务，并设有五个车型的专属方案。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "理想汽车改装",
    "理想汽车贴膜",
    "理想 L9 电动踏板",
    "理想 MEGA 地板",
    "理想 i6 车衣",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/li-auto" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: LI_AUTO_SERIES_HERO_IMAGE.src,
        width: LI_AUTO_SERIES_HERO_IMAGE.width,
        height: LI_AUTO_SERIES_HERO_IMAGE.height,
        alt: LI_AUTO_SERIES_HERO_IMAGE.alt,
      },
    ],
    type: "article",
  },
};

export default function LiAutoBrandPage() {
  const brand = getBrandRoute("li-auto");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/li-auto");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/li-auto");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "理想汽车全系基础服务",
      numberOfItems: liAutoBaseServices.length,
      itemListElement: liAutoBaseServices.map((svc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: svc.title,
        url: svc.href,
      })),
    },
    hasPart: liAutoModelCards.map((m) => ({
      "@type": "WebPage",
      name: `${m.displayName} 专属升级方案`,
      url: m.subpage ?? "/product/li-auto#brand-fitment",
    })),
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  // 供应商适配库速查：官方车型 + 焕新/年款/续航变体节，按车型分组渲染

  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "理想汽车全系轻改升级",
    brand: { "@type": "Brand", name: "理想" },
    model: "ONE、i6、i8、L6、L7、L8、L9、MEGA 及焕新/续航变体",
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
    makesOffer: liAutoBaseServices.map((svc) => ({
      "@type": "Offer",
      name: `理想 ${svc.title}`,
      description: svc.painPoint,
      category: svc.id,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: liAutoSeriesFaq.map((faq) => ({
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
        <LiAutoSeriesHero breadcrumbItems={breadcrumbItems} />
        <LiAutoBaseServiceGrid />
        <BrandModelGroupGrid
          cards={liAutoModelCards}
          groupOrder={LI_AUTO_MODEL_GROUPS}
          groupLabels={LI_AUTO_MODEL_GROUP_LABELS}
          theme="amber"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: LI_AUTO_SOURCE_ROW_COUNT, cards: LI_AUTO_MODEL_CARD_COUNT, images: 0 }}
        />
        <LiAutoServiceFlow />
        <BrandProjectMatrix
          projects={liAutoCuratedProjects}
          cards={liAutoModelCards}
          groupOrder={LI_AUTO_MODEL_GROUPS}
          groupLabels={LI_AUTO_MODEL_GROUP_LABELS}
          brandLabel="理想"
          theme="amber"
        />
        <LiAutoFaqSection />
        <LiAutoDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的理想汽车升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            具体方案需根据车型、年款、座椅布局、原车状态及施工条件现场确认。
          </p>
        </section>

        <LiAutoMobileCtaBar />
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
