import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandRoverSeriesHero } from "@/components/land-rover/series/LandRoverSeriesHero";
import { LandRoverModelGrid } from "@/components/land-rover/series/LandRoverModelGrid";
import { LandRoverProjectGrid } from "@/components/land-rover/series/LandRoverProjectGrid";
import { LandRoverFitmentDetails } from "@/components/land-rover/series/LandRoverFitmentDetails";
import { LandRoverFaqSection } from "@/components/land-rover/series/LandRoverFaqSection";
import { LandRoverDouyinCta } from "@/components/land-rover/series/LandRoverDouyinCta";
import { LandRoverMobileCtaBar } from "@/components/land-rover/series/LandRoverMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { landRoverProjects } from "@/lib/land-rover-all-models-products";
import { landRoverModels } from "@/lib/land-rover-model-groups";
import { landRoverSeriesFaq } from "@/lib/land-rover-series-services";
import { land_roverFitment } from "@/lib/fitment/land-rover";
import { FitmentQuickCheck } from "@/components/vehicle-page";
import { LAND_ROVER_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "路虎全系保护与升级｜15 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）路虎全系服务：底盘护板、360 软包脚垫、平面尾箱垫、360 全包尾箱 4 类专车适配件。15 款车型按车系分组速览（揽胜 4 / 发现 5 / 卫士 4 / 神行者 2），按车型年款对照版本变体与实车要点，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "路虎改装",
    "路虎底盘护板",
    "路虎360软包脚垫",
    "路虎平面尾箱垫",
    "路虎360全包尾箱",
    "路虎揽胜",
    "路虎卫士",
    "路虎发现",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/land-rover" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: LAND_ROVER_SERIES_HERO_IMAGE.src,
      width: LAND_ROVER_SERIES_HERO_IMAGE.width,
      height: LAND_ROVER_SERIES_HERO_IMAGE.height,
      alt: LAND_ROVER_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function LandRoverBrandPage() {
  const brand = getBrandRoute("land-rover");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/land-rover");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/land-rover");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...landRoverModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/land-rover#land-rover-fitment`,
    })),
    ...landRoverProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: landRoverModels.length + idx + 1,
      name: p.name,
      url: `/product/land-rover#land-rover-projects`,
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
      name: "路虎全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  // 供应商适配库速查：7 个车型节全部收录；「发现」节覆盖发现3/4/5/运动版/神行，「神行者」节覆盖神行者2/8，「卫士」节覆盖卫士/90/110/130
  const fitmentConfig = {
    heading: "路虎 适配速查：你的车型能装哪些项目？",
    models: land_roverFitment.models
      .filter((m) => [
        "揽胜极光",
        "揽胜运动版",
        "发现",
        "揽胜行政版",
        "神行者",
        "卫士",
        "揽胜星脉",
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
    name: "路虎全系轻改升级",
    brand: { "@type": "Brand", name: "路虎" },
    model: "揽胜系列、发现系列、卫士、神行者全系车型",
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
    makesOffer: landRoverProjects.map((p) => ({
      "@type": "Offer",
      name: `路虎 ${p.name} 升级方案`,
      description: p.description,
      category: p.key,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landRoverSeriesFaq.map((faq) => ({
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
        <LandRoverSeriesHero breadcrumbItems={breadcrumbItems} />
        <LandRoverModelGrid />
        <LandRoverProjectGrid />
        <LandRoverFitmentDetails />
        <FitmentQuickCheck config={fitmentConfig} theme="cyan" />
        <LandRoverFaqSection />
        <LandRoverDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的路虎车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <LandRoverMobileCtaBar />
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
