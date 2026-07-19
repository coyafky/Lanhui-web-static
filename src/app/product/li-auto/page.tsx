import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LiAutoSeriesHero } from "@/components/li-auto/series/LiAutoSeriesHero";
import { LiAutoScenarioSelector } from "@/components/li-auto/series/LiAutoScenarioSelector";
import { LiAutoBaseServiceGrid } from "@/components/li-auto/series/LiAutoBaseServiceGrid";
import {
  LiAutoModelEntryGrid,
  type LiAutoModelEntry,
} from "@/components/li-auto/series/LiAutoModelEntryGrid";
import { LiAutoServiceFlow } from "@/components/li-auto/series/LiAutoServiceFlow";
import { LiAutoFaqSection } from "@/components/li-auto/series/LiAutoFaqSection";
import { LiAutoDouyinCta } from "@/components/li-auto/series/LiAutoDouyinCta";
import { LiAutoMobileCtaBar } from "@/components/li-auto/series/LiAutoMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  liAutoBaseServices,
  LI_AUTO_MODEL_COPY,
  type LiAutoModelEntryKey,
} from "@/lib/li-auto-series-services";
import { LI_AUTO_I6_HERO_IMAGE } from "@/lib/li-auto-i6-products";
import { LI_AUTO_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "理想汽车家庭用车保护与舒适升级｜车膜、踏板、地板与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）为理想汽车 ONE、i6、i8、L9、MEGA 提供车衣、隔热膜、电动踏板、地板总成、专车脚垫与洗美养护服务，施工前确认摄像头、雷达与激光雷达感知区域，五个车型均有独立专车方案。先确认车型、年款与座椅布局，再安排到店施工。";

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

const MODEL_ENTRY_META: Record<
  LiAutoModelEntryKey,
  { fallbackProjectCount: number; imageSrc: string }
> = {
  one: {
    fallbackProjectCount: 8,
    imageSrc:
      "/images/products/li-auto/one/generated/paint-protection-film.webp",
  },
  i6: {
    fallbackProjectCount: 20,
    imageSrc: LI_AUTO_I6_HERO_IMAGE.publicPath,
  },
  i8: {
    fallbackProjectCount: 20,
    imageSrc:
      "/images/products/li-auto/i8/generated/i8-paint-protection-film.webp",
  },
  l9: {
    fallbackProjectCount: 14,
    imageSrc:
      "/images/products/li-auto/l9/generated/paint-protection-film.webp",
  },
  mega: {
    fallbackProjectCount: 18,
    imageSrc:
      "/images/products/li-auto/mega/generated/mega-paint-protection-film.webp",
  },
};

const MODEL_KEYS: readonly LiAutoModelEntryKey[] = [
  "one",
  "i6",
  "i8",
  "l9",
  "mega",
];

function buildModelEntries(): readonly LiAutoModelEntry[] {
  return MODEL_KEYS.map((key) => {
    const route = getModelRoute("li-auto", key);
    if (!route) {
      throw new Error(
        `LiAutoBrandPage: missing li-auto model route definition for "${key}"`,
      );
    }
    const meta = MODEL_ENTRY_META[key];
    const copy = LI_AUTO_MODEL_COPY[key];
    return {
      modelKey: key,
      modelName: route.modelName,
      canonicalPath: route.canonicalPath,
      positioning: copy.positioning,
      scenario: copy.scenario,
      topNeeds: copy.topNeeds,
      projectCount: route.projectCount ?? meta.fallbackProjectCount,
      image: {
        src: meta.imageSrc,
        alt: `${route.modelName} 升级方案效果预览图`,
      },
    };
  });
}

export default function LiAutoBrandPage() {
  const brand = getBrandRoute("li-auto");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
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
        <LiAutoSeriesHero breadcrumbItems={breadcrumbItems} />
        <LiAutoScenarioSelector />
        <LiAutoBaseServiceGrid />
        <LiAutoModelEntryGrid entries={modelEntries} />
        <LiAutoServiceFlow />
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
