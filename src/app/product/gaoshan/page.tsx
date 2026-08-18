import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GaoshanSeriesHero } from "@/components/gaoshan/series/GaoshanSeriesHero";
import { GaoshanBaseServiceGrid } from "@/components/gaoshan/series/GaoshanBaseServiceGrid";
import {
  GaoshanModelEntryGrid,
  type GaoshanModelEntry,
} from "@/components/gaoshan/series/GaoshanModelEntryGrid";
import { GaoshanServiceFlow } from "@/components/gaoshan/series/GaoshanServiceFlow";
import { GaoshanFaqSection } from "@/components/gaoshan/series/GaoshanFaqSection";
import { GaoshanDouyinCta } from "@/components/gaoshan/series/GaoshanDouyinCta";
import { GaoshanMobileCtaBar } from "@/components/gaoshan/series/GaoshanMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  gaoshanBaseServices,
  GAOSHAN_MODEL_COPY,
} from "@/lib/gaoshan-series-services";
import { GAOSHAN_8_HERO_IMAGE } from "@/lib/gaoshan-products";
import { GAOSHAN_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "高山全系保护与舒适升级｜车膜、踏板、地板与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）为魏牌高山全系提供车膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护服务，高山 8 另有 23 项专车适配方案。先确认车型与年款，再安排到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "高山改装",
    "魏牌高山",
    "高山 8",
    "高山贴膜",
    "高山电动踏板",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/gaoshan" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: GAOSHAN_SERIES_HERO_IMAGE.src,
      width: GAOSHAN_SERIES_HERO_IMAGE.width,
      height: GAOSHAN_SERIES_HERO_IMAGE.height,
      alt: GAOSHAN_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

function buildModelEntries(): readonly GaoshanModelEntry[] {
  const route = getModelRoute("gaoshan", "8");
  if (!route) {
    throw new Error("GaoshanBrandPage: missing gaoshan 8 route definition");
  }
  return [
    {
      modelKey: "8",
      modelName: route.modelName,
      canonicalPath: route.canonicalPath,
      scenario: GAOSHAN_MODEL_COPY["8"].scenario,
      topNeeds: GAOSHAN_MODEL_COPY["8"].topNeeds,
      projectCount: route.projectCount ?? 23,
      image: {
        src: GAOSHAN_8_HERO_IMAGE.publicPath ?? "",
        alt: "高山 8 升级方案预览图",
      },
    },
  ];
}

export default function GaoshanBrandPage() {
  const brand = getBrandRoute("gaoshan");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
  const breadcrumbItems = getProductBreadcrumbs("/product/gaoshan");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/gaoshan");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "高山全系基础服务",
      numberOfItems: gaoshanBaseServices.length,
      itemListElement: gaoshanBaseServices.map((svc, idx) => ({
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

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <GaoshanSeriesHero breadcrumbItems={breadcrumbItems} />
        <GaoshanBaseServiceGrid />
        <GaoshanModelEntryGrid entries={modelEntries} />
        <GaoshanServiceFlow />
        <GaoshanFaqSection />
        <GaoshanDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的高山车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            具体方案需根据车型、年款、配置、原车状态及施工条件现场确认。
          </p>
        </section>

        <GaoshanMobileCtaBar />
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
