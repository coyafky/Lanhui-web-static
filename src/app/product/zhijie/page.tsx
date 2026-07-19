import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ZhijieSeriesHero } from "@/components/zhijie/series/ZhijieSeriesHero";
import { ZhijieScenarioSelector } from "@/components/zhijie/series/ZhijieScenarioSelector";
import { ZhijieBaseServiceGrid } from "@/components/zhijie/series/ZhijieBaseServiceGrid";
import {
  ZhijieModelEntryGrid,
  type ZhijieModelEntry,
} from "@/components/zhijie/series/ZhijieModelEntryGrid";
import { ZhijieServiceFlow } from "@/components/zhijie/series/ZhijieServiceFlow";
import { ZhijieFaqSection } from "@/components/zhijie/series/ZhijieFaqSection";
import { ZhijieDouyinCta } from "@/components/zhijie/series/ZhijieDouyinCta";
import { ZhijieMobileCtaBar } from "@/components/zhijie/series/ZhijieMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  zhijieBaseServices,
  ZHIJIE_MODEL_COPY,
} from "@/lib/zhijie-series-services";
import { ZHIJIE_V9_HERO_IMAGE } from "@/lib/zhijie-v9-products";
import { ZHIJIE_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "智界全系智能车型保护与舒适升级｜车膜、脚垫、地板与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）为智界 S7、R7、V9 等车型提供车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护服务，施工前确认智驾感知区域与原车功能，智界 V9 另有 14 项专车适配方案。先确认车型与年款，再安排到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "智界改装",
    "智界贴膜",
    "智界 S7",
    "智界 R7",
    "智界 V9",
    "智驾车型车衣",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: ZHIJIE_SERIES_HERO_IMAGE.src,
      width: ZHIJIE_SERIES_HERO_IMAGE.width,
      height: ZHIJIE_SERIES_HERO_IMAGE.height,
      alt: ZHIJIE_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

function buildModelEntries(): readonly ZhijieModelEntry[] {
  const route = getModelRoute("zhijie", "v9");
  if (!route) {
    throw new Error("ZhijieBrandPage: missing zhijie v9 route definition");
  }
  return [
    {
      modelKey: "v9",
      modelName: route.modelName,
      canonicalPath: route.canonicalPath,
      scenario: ZHIJIE_MODEL_COPY.v9.scenario,
      topNeeds: ZHIJIE_MODEL_COPY.v9.topNeeds,
      projectCount: route.projectCount ?? 14,
      image: {
        src: ZHIJIE_V9_HERO_IMAGE.publicPath ?? "",
        alt: "智界 V9 升级方案预览图",
      },
    },
  ];
}

export default function ZhijieBrandPage() {
  const brand = getBrandRoute("zhijie");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
  const breadcrumbItems = getProductBreadcrumbs("/product/zhijie");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/zhijie");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "智界全系基础服务",
      numberOfItems: zhijieBaseServices.length,
      itemListElement: zhijieBaseServices.map((svc, idx) => ({
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
        <ZhijieSeriesHero breadcrumbItems={breadcrumbItems} />
        <ZhijieScenarioSelector />
        <ZhijieBaseServiceGrid />
        <ZhijieModelEntryGrid entries={modelEntries} />
        <ZhijieServiceFlow />
        <ZhijieFaqSection />
        <ZhijieDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的智界车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            具体方案需根据车型、年款、配置、原车状态及施工条件现场确认。
          </p>
        </section>

        <ZhijieMobileCtaBar />
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
