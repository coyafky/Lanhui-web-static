import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VolkswagenSeriesHero } from "@/components/volkswagen/series/VolkswagenSeriesHero";
import { VolkswagenModelGrid } from "@/components/volkswagen/series/VolkswagenModelGrid";
import { VolkswagenProjectGrid } from "@/components/volkswagen/series/VolkswagenProjectGrid";
import { VolkswagenFeaturedModels } from "@/components/volkswagen/series/VolkswagenFeaturedModels";
import { VolkswagenFaqSection } from "@/components/volkswagen/series/VolkswagenFaqSection";
import { VolkswagenDouyinCta } from "@/components/volkswagen/series/VolkswagenDouyinCta";
import { VolkswagenMobileCtaBar } from "@/components/volkswagen/series/VolkswagenMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { volkswagenProjects } from "@/lib/volkswagen-all-models-products";
import { volkswagenModels } from "@/lib/volkswagen-model-groups";
import { volkswagenSeriesFaq } from "@/lib/volkswagen-series-services";
import { volkswagenFitment } from "@/lib/fitment/volkswagen";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import type { FitmentModel, FitmentSpec } from "@/components/vehicle-page";
import { VOLKSWAGEN_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

type FitmentRawSpec = {
  label?: string;
  material?: string;
  year?: string;
  note?: string;
  date?: string;
  dynamics?: string;
};

function toFitmentSpec(s: unknown): FitmentSpec {
  const r = s as FitmentRawSpec;
  return {
    label: r.label,
    material: r.material,
    year: r.year,
    note: r.note,
    date: r.date,
    dynamics: r.dynamics,
  };
}

/** 供应商适配库车型节仅收录 volkswagenModels 名单内的精确匹配车型。 */
function buildVolkswagenFitmentModels(): FitmentModel[] {
  const official = new Set(volkswagenModels.map((m) => m.name));
  return volkswagenFitment.models
    .filter((section) => official.has(section.model.trim()))
    .map((section) => ({
      model: section.model.trim(),
      projects: section.projects.map((p) => ({
        name: p.name,
        specs: p.specs.map(toFitmentSpec),
      })),
    }));
}

const PAGE_TITLE =
  "大众全系底盘保护与上下车升级｜42 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）大众全系服务：底盘护板、电动踏板 2 类专车适配件。42 款车型分组速查，按车型年款对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "大众改装",
    "大众底盘护板",
    "大众电动踏板",
    "途锐护板",
    "途昂踏板",
    "途观L护板",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/volkswagen" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: VOLKSWAGEN_SERIES_HERO_IMAGE.src,
      width: VOLKSWAGEN_SERIES_HERO_IMAGE.width,
      height: VOLKSWAGEN_SERIES_HERO_IMAGE.height,
      alt: VOLKSWAGEN_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function VolkswagenBrandPage() {
  const brand = getBrandRoute("volkswagen");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/volkswagen");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/volkswagen");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...volkswagenModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `大众${m.name}`,
      url: `/product/volkswagen#volkswagen-models`,
    })),
    ...volkswagenProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: volkswagenModels.length + idx + 1,
      name: p.name,
      url: `/product/volkswagen#volkswagen-projects`,
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
      name: "大众全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  const fitmentConfig = {
    heading: "大众 适配速查：你的车型能装哪些项目？",
    models: buildVolkswagenFitmentModels(),
    groupByModel: true,
  };

  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "大众全系底盘保护与上下车升级",
    brand: { "@type": "Brand", name: "大众" },
    model: "大众全系 42 款",
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
    makesOffer: volkswagenProjects.map((p) => ({
      "@type": "Offer",
      name: `大众 ${p.name}`,
      description: p.feature,
      category: p.name,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: volkswagenSeriesFaq.map((faq) => ({
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
        <VolkswagenSeriesHero breadcrumbItems={breadcrumbItems} />
        <VolkswagenModelGrid />
        <VolkswagenProjectGrid />
        <VolkswagenFeaturedModels />
        <FitmentQuickCheck config={fitmentConfig} theme="blue" />
        <VolkswagenFaqSection />
        <VolkswagenDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的大众车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <VolkswagenMobileCtaBar />
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
