import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VoyahSeriesHero } from "@/components/voyah/series/VoyahSeriesHero";
import { VoyahBaseServiceGrid } from "@/components/voyah/series/VoyahBaseServiceGrid";
import {
  VoyahModelEntryGrid,
  type VoyahModelEntry,
} from "@/components/voyah/series/VoyahModelEntryGrid";
import { VoyahServiceFlow } from "@/components/voyah/series/VoyahServiceFlow";
import { VoyahFaqSection } from "@/components/voyah/series/VoyahFaqSection";
import { VoyahDouyinCta } from "@/components/voyah/series/VoyahDouyinCta";
import { VoyahMobileCtaBar } from "@/components/voyah/series/VoyahMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  voyahBaseServices,
  VOYAH_MODEL_COPY,
} from "@/lib/voyah-series-services";
import { VOYAH_DREAMER_HERO_IMAGE } from "@/lib/voyah-products";
import { VOYAH_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "岚图全系保护与舒适升级｜车膜、踏板、地板与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）为岚图全系提供车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护服务，岚图梦想家另有 17 项专车适配方案。先确认车型与年款，再安排到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "岚图改装",
    "岚图贴膜",
    "岚图梦想家",
    "岚图梦想家地板",
    "岚图电动踏板",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/voyah" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: VOYAH_SERIES_HERO_IMAGE.src,
      width: VOYAH_SERIES_HERO_IMAGE.width,
      height: VOYAH_SERIES_HERO_IMAGE.height,
      alt: VOYAH_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

function buildModelEntries(): readonly VoyahModelEntry[] {
  const route = getModelRoute("voyah", "dreamer");
  if (!route) {
    throw new Error("VoyahBrandPage: missing voyah dreamer route definition");
  }
  return [
    {
      modelKey: "dreamer",
      modelName: route.modelName,
      canonicalPath: route.canonicalPath,
      scenario: VOYAH_MODEL_COPY.dreamer.scenario,
      topNeeds: VOYAH_MODEL_COPY.dreamer.topNeeds,
      projectCount: route.projectCount ?? 17,
      image: {
        src: VOYAH_DREAMER_HERO_IMAGE.publicPath ?? "",
        alt: "岚图梦想家升级方案预览图",
      },
    },
  ];
}

export default function VoyahBrandPage() {
  const brand = getBrandRoute("voyah");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
  const breadcrumbItems = getProductBreadcrumbs("/product/voyah");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/voyah");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "岚图全系基础服务",
      numberOfItems: voyahBaseServices.length,
      itemListElement: voyahBaseServices.map((svc, idx) => ({
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
        <VoyahSeriesHero breadcrumbItems={breadcrumbItems} />
        <VoyahBaseServiceGrid />
        <VoyahModelEntryGrid entries={modelEntries} />
        <VoyahServiceFlow />
        <VoyahFaqSection />
        <VoyahDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的岚图车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            具体方案需根据车型、年款、配置、原车状态及施工条件现场确认。
          </p>
        </section>

        <VoyahMobileCtaBar />
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
