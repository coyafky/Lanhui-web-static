import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LedaoSeriesHero } from "@/components/ledao/series/LedaoSeriesHero";
import { LedaoBaseServiceGrid } from "@/components/ledao/series/LedaoBaseServiceGrid";
import {
  LedaoModelEntryGrid,
  type LedaoModelEntry,
} from "@/components/ledao/series/LedaoModelEntryGrid";
import { LedaoServiceFlow } from "@/components/ledao/series/LedaoServiceFlow";
import { LedaoFaqSection } from "@/components/ledao/series/LedaoFaqSection";
import { LedaoDouyinCta } from "@/components/ledao/series/LedaoDouyinCta";
import { LedaoMobileCtaBar } from "@/components/ledao/series/LedaoMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  ledaoBaseServices,
  ledaoSeriesFaq,
  LEDAO_MODEL_COPY,
} from "@/lib/ledao-series-services";
import { ledaoFitment } from "@/lib/fitment/ledao";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import type { FitmentModel, FitmentSpec } from "@/components/vehicle-page";
import { LEDAO_L90_HERO_IMAGE } from "@/lib/ledao-l90-products";
import { LEDAO_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

/** 适配库 3 节（L60 / L80 / L90）与官方车型精确匹配。 */
const LEDAO_FITMENT_SECTIONS = new Set(["L60", "L80", "L90"]);

function buildLedaoFitmentModels(): FitmentModel[] {
  return ledaoFitment.models
    .filter((section) => LEDAO_FITMENT_SECTIONS.has(section.model))
    .map((section) => ({
      model: section.model,
      projects: section.projects.map((p) => ({
        name: p.name,
        specs: p.specs.map((raw): FitmentSpec => {
          const s = raw as {
            label?: string;
            material?: string;
            year?: string;
            note?: string;
            date?: string;
            dynamics?: string;
          };
          return {
            label: s.label,
            material: s.material,
            year: s.year,
            note: s.note,
            date: s.date,
            dynamics: s.dynamics,
          };
        }),
      })),
    }));
}

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

function buildModelEntries(): readonly LedaoModelEntry[] {
  const route = getModelRoute("ledao", "l90");
  if (!route) {
    throw new Error("LedaoBrandPage: missing ledao l90 route definition");
  }
  return [
    {
      modelKey: "l90",
      modelName: route.modelName,
      canonicalPath: route.canonicalPath,
      scenario: LEDAO_MODEL_COPY.l90.scenario,
      topNeeds: LEDAO_MODEL_COPY.l90.topNeeds,
      projectCount: route.projectCount ?? 21,
      image: {
        src: LEDAO_L90_HERO_IMAGE.publicPath ?? "",
        alt: "乐道 L90 升级方案预览图",
      },
    },
  ];
}

export default function LedaoBrandPage() {
  const brand = getBrandRoute("ledao");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
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
  const fitmentConfig = {
    heading: "乐道 适配速查：你的车型能装哪些项目？",
    models: buildLedaoFitmentModels(),
    groupByModel: true,
  };

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
        <LedaoModelEntryGrid entries={modelEntries} />
        <LedaoServiceFlow />
        <FitmentQuickCheck config={fitmentConfig} theme="blue" />
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
