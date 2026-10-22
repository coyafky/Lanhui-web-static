import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HaoboSeriesHero } from "@/components/haobo/series/HaoboSeriesHero";
import { HaoboModelGrid } from "@/components/haobo/series/HaoboModelGrid";
import { HaoboProjectGrid } from "@/components/haobo/series/HaoboProjectGrid";
import { HaoboFitmentDetails } from "@/components/haobo/series/HaoboFitmentDetails";
import { HaoboFaqSection } from "@/components/haobo/series/HaoboFaqSection";
import { HaoboDouyinCta } from "@/components/haobo/series/HaoboDouyinCta";
import { HaoboMobileCtaBar } from "@/components/haobo/series/HaoboMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { haoboProjects } from "@/lib/haobo-all-models-products";
import { haoboModels } from "@/lib/haobo-model-groups";
import { haoboSeriesFaq } from "@/lib/haobo-series-services";
import { haoboFitment } from "@/lib/fitment/haobo";
import { FitmentQuickCheck } from "@/components/vehicle-page";
import { HAOBO_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "昊铂全系保护与升级｜6 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）昊铂全系服务：底盘护板、360 软包脚垫、平面尾箱垫、360 全包尾箱 4 类专车适配件。6 款车型按车系分组速览（超跑 1 / 轿跑与轿车 2 / SUV 2 / MPV 1），按车型年款对照版本变体与实车要点，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "昊铂改装",
    "昊铂底盘护板",
    "昊铂360软包脚垫",
    "昊铂平面尾箱垫",
    "昊铂360全包尾箱",
    "昊铂GT",
    "昊铂HT",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/haobo" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: HAOBO_SERIES_HERO_IMAGE.src,
      width: HAOBO_SERIES_HERO_IMAGE.width,
      height: HAOBO_SERIES_HERO_IMAGE.height,
      alt: HAOBO_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function HaoboBrandPage() {
  const brand = getBrandRoute("haobo");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/haobo");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/haobo");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...haoboModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/haobo#haobo-fitment`,
    })),
    ...haoboProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: haoboModels.length + idx + 1,
      name: p.name,
      url: `/product/haobo#haobo-projects`,
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
      name: "昊铂全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  // 供应商适配库速查：官方 SSR/GT/S600/HT/HL/A800；S600 无精确节，收录其增程/纯电两个细分节
  const fitmentConfig = {
    heading: "昊铂 适配速查：你的车型能装哪些项目？",
    models: haoboFitment.models
      .filter((m) => [
        "A800",
        "GT",
        "HL",
        "HT",
        "SSR",
        "S600增程.四驱",
        "S600纯电660续航后驱",
      ].includes(m.model))
      .map((m) => ({
        model: m.model,
        projects: m.projects.map((p) => ({
          name: p.name,
          specs: [...p.specs],
        })),
      })),
    groupByModel: true,
  };

  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "昊铂全系轻改升级",
    brand: { "@type": "Brand", name: "昊铂" },
    model: "SSR、GT、S600、HT、HL、A800 全系车型",
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
    makesOffer: haoboProjects.map((p) => ({
      "@type": "Offer",
      name: `昊铂 ${p.name} 升级方案`,
      description: p.description,
      category: p.key,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: haoboSeriesFaq.map((faq) => ({
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
        <HaoboSeriesHero breadcrumbItems={breadcrumbItems} />
        <HaoboModelGrid />
        <HaoboProjectGrid />
        <HaoboFitmentDetails />
        <FitmentQuickCheck config={fitmentConfig} theme="green" />
        <HaoboFaqSection />
        <HaoboDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的昊铂车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <HaoboMobileCtaBar />
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
