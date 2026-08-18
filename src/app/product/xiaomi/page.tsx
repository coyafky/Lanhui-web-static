import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { XiaomiSeriesHero } from "@/components/xiaomi/series/XiaomiSeriesHero";
import { XiaomiBaseServiceGrid } from "@/components/xiaomi/series/XiaomiBaseServiceGrid";
import {
  XiaomiModelEntryGrid,
  type XiaomiModelEntry,
} from "@/components/xiaomi/series/XiaomiModelEntryGrid";
import { XiaomiServiceFlow } from "@/components/xiaomi/series/XiaomiServiceFlow";
import { XiaomiFaqSection } from "@/components/xiaomi/series/XiaomiFaqSection";
import { XiaomiDouyinCta } from "@/components/xiaomi/series/XiaomiDouyinCta";
import { XiaomiMobileCtaBar } from "@/components/xiaomi/series/XiaomiMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  xiaomiBaseServices,
  XIAOMI_MODEL_COPY,
} from "@/lib/xiaomi-series-services";
import { XIAOMI_SU7_HERO_IMAGE } from "@/lib/xiaomi-su7-upgrade-projects";
import { XIAOMI_YU7_HERO_IMAGE } from "@/lib/xiaomi-yu7-upgrade-projects";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { XIAOMI_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "小米汽车全系保护与个性升级｜车膜、轮毂、脚垫与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改为小米汽车 SU7、YU7 提供车衣、隔热膜、改色膜、轮毂、电动踏板、专车脚垫与洗美养护服务，并设有 SU7、YU7 专属方案。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "小米汽车改装",
    "小米汽车贴膜",
    "小米 SU7",
    "小米 YU7",
    "SU7 车衣",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/xiaomi" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: XIAOMI_SERIES_HERO_IMAGE.src,
        width: XIAOMI_SERIES_HERO_IMAGE.width,
        height: XIAOMI_SERIES_HERO_IMAGE.height,
        alt: XIAOMI_SERIES_HERO_IMAGE.alt,
      },
    ],
    type: "article",
  },
};

function buildModelEntries(): readonly XiaomiModelEntry[] {
  const su7 = getModelRoute("xiaomi", "su7");
  const yu7 = getModelRoute("xiaomi", "yu7");
  if (!su7 || !yu7) {
    throw new Error("XiaomiBrandPage: missing xiaomi SU7/YU7 route definitions");
  }
  return [
    {
      modelKey: "su7",
      modelName: su7.modelName,
      canonicalPath: su7.canonicalPath,
      scenario: XIAOMI_MODEL_COPY.su7.scenario,
      topNeeds: XIAOMI_MODEL_COPY.su7.topNeeds,
      projectCount: su7.projectCount ?? 12,
      image: {
        src: XIAOMI_SU7_HERO_IMAGE.publicPath,
        alt: XIAOMI_SU7_HERO_IMAGE.alt,
      },
    },
    {
      modelKey: "yu7",
      modelName: yu7.modelName,
      canonicalPath: yu7.canonicalPath,
      scenario: XIAOMI_MODEL_COPY.yu7.scenario,
      topNeeds: XIAOMI_MODEL_COPY.yu7.topNeeds,
      projectCount: yu7.projectCount ?? 9,
      image: {
        src: XIAOMI_YU7_HERO_IMAGE.publicPath,
        alt: XIAOMI_YU7_HERO_IMAGE.alt,
      },
    },
  ];
}

export default function XiaomiBrandPage() {
  const brand = getBrandRoute("xiaomi");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
  const breadcrumbItems = getProductBreadcrumbs("/product/xiaomi");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/xiaomi");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "小米汽车全系基础服务",
      numberOfItems: xiaomiBaseServices.length,
      itemListElement: xiaomiBaseServices.map((svc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: svc.title,
        url: svc.href,
      })),
    },
    hasPart: modelEntries.map((m) => ({
      "@type": "WebPage",
      name: `${m.modelName} 专属升级方案`,
      url: m.canonicalPath,
    })),
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
        <XiaomiSeriesHero breadcrumbItems={breadcrumbItems} />
        <XiaomiBaseServiceGrid />
        <XiaomiModelEntryGrid entries={modelEntries} />
        <XiaomiServiceFlow />
        <XiaomiFaqSection />
        <XiaomiDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的小米汽车升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            具体方案需根据车型、版本、年款、原车状态及施工条件现场确认。
          </p>
        </section>

        <XiaomiMobileCtaBar />
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
