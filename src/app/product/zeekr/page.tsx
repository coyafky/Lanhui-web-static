import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ZeekrSeriesHeroV2 } from "@/components/zeekr/series/ZeekrSeriesHeroV2";
import { ZeekrBaseServiceGrid } from "@/components/zeekr/series/ZeekrBaseServiceGrid";
import {
  ZeekrModelEntryGrid,
  type ZeekrModelEntry,
} from "@/components/zeekr/series/ZeekrModelEntryGrid";
import { ZeekrServiceFlowV2 } from "@/components/zeekr/series/ZeekrServiceFlowV2";
import { ZeekrFaqSectionV2 } from "@/components/zeekr/series/ZeekrFaqSectionV2";
import { ZeekrDouyinCta } from "@/components/zeekr/series/ZeekrDouyinCta";
import { ZeekrMobileCtaBar } from "@/components/zeekr/series/ZeekrMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  zeekrBaseServices,
  ZEEKR_MODEL_COPY,
  type ZeekrModelEntryKey,
} from "@/lib/zeekr-series-services";
import { zeekrTopicMeta } from "@/lib/zeekr-products";
import { ZEEKR_9X_HERO_IMAGE } from "@/lib/zeekr-9x-products";
import { ZEEKR_8X_HERO_IMAGE } from "@/lib/zeekr-8x-products";
import { ZEEKR_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "极氪全系日常保护与个性升级｜车衣、隔热膜、轮毂、踏板、地板与洗美养护｜蓝辉轻改";
const PAGE_DESCRIPTION =
  "极氪 9X、8X 车主服务入口，提供车膜、轮毂、电动踏板、地板总成、专车脚垫和洗美养护，并设有对应车型方案。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "极氪改装",
    "极氪9X",
    "极氪8X",
    "极氪009",
    "车衣",
    "隔热膜",
    "轮毂升级",
    "地板总成",
    "蓝辉轻改",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: ZEEKR_SERIES_HERO_IMAGE.src,
      width: ZEEKR_SERIES_HERO_IMAGE.width,
      height: ZEEKR_SERIES_HERO_IMAGE.height,
      alt: ZEEKR_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

const MODEL_IMAGES: Record<ZeekrModelEntryKey, { src: string; alt: string }> = {
  "9X": {
    src: ZEEKR_9X_HERO_IMAGE.publicPath ?? zeekrTopicMeta.previewImage,
    alt: "极氪 9X 升级方案预览图",
  },
  "8X": {
    src: ZEEKR_8X_HERO_IMAGE.publicPath ?? zeekrTopicMeta.previewImage,
    alt: "极氪 8X 升级方案预览图",
  },
};

function buildModelEntries(): readonly ZeekrModelEntry[] {
  return (["9x", "8x"] as const).map((slug) => {
    const route = getModelRoute("zeekr", slug);
    if (!route) {
      throw new Error(`ZeekrSeriesPage: missing zeekr ${slug} route definition`);
    }
    const modelKey = slug.toUpperCase() as ZeekrModelEntryKey;
    return {
      modelKey,
      modelName: route.modelName,
      canonicalPath: route.canonicalPath,
      scenario: ZEEKR_MODEL_COPY[modelKey].scenario,
      topNeeds: ZEEKR_MODEL_COPY[modelKey].topNeeds,
      image: MODEL_IMAGES[modelKey],
    };
  });
}

export default function ZeekrSeriesPage() {
  const brand = getBrandRoute("zeekr");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
  const breadcrumbItems = getProductBreadcrumbs("/product/zeekr");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/zeekr");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "极氪全系日常保护与个性升级｜蓝辉轻改 LANHUI",
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: zeekrBaseServices.map((svc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: svc.title,
        url: svc.href,
      })),
    },
  };

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <ZeekrSeriesHeroV2 breadcrumbItems={breadcrumbItems} />
        <ZeekrBaseServiceGrid />
        <ZeekrModelEntryGrid entries={modelEntries} />
        <ZeekrServiceFlowV2 />
        <ZeekrFaqSectionV2 />
        <ZeekrDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的极氪车型改装款式用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
          </p>
        </section>

        <ZeekrMobileCtaBar />
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
