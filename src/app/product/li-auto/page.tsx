import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LiAutoSeriesHero } from "@/components/li-auto/series/LiAutoSeriesHero";
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
  liAutoSeriesFaq,
  LI_AUTO_MODEL_COPY,
  type LiAutoModelEntryKey,
} from "@/lib/li-auto-series-services";
import { li_autoFitment } from "@/lib/fitment/li-auto";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import type { FitmentModel, FitmentSpec } from "@/components/vehicle-page";
import { LI_AUTO_I6_HERO_IMAGE } from "@/lib/li-auto-i6-products";
import { LI_AUTO_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

/**
 * 适配库节过滤：8 个官方基础车型 + 焕新/年款/续航变体节；
 * 排除跨车型节（L7/L8、焕新版L7/L8）、编码节（TJ100xx）、通用适配节。
 */
const LI_AUTO_FITMENT_SECTIONS = new Set([
  "i6",
  "i8",
  "L6",
  "L7",
  "L8",
  "L9",
  "ONE",
  "MEGA",
  "焕新版L6",
  "25款理想 i6",
  "L6 300续航",
  "L8-Livis-430续航",
  "L9livis",
  "i6-720续航",
  "i8-720续航",
]);

function buildLiAutoFitmentModels(): FitmentModel[] {
  return li_autoFitment.models
    .filter((section) => LI_AUTO_FITMENT_SECTIONS.has(section.model))
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
  "理想汽车家庭用车保护与舒适升级｜车膜、踏板、地板与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改为理想汽车 ONE、i6、i8、L9、MEGA 提供车衣、隔热膜、电动踏板、地板总成、专车脚垫与洗美养护服务，并设有五个车型的专属方案。";

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
  alternates: { canonical: "/product/li-auto" },
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

  // 供应商适配库速查：官方车型 + 焕新/年款/续航变体节，按车型分组渲染
  const fitmentConfig = {
    heading: "理想 适配速查：你的车型能装哪些项目？",
    models: buildLiAutoFitmentModels(),
    groupByModel: true,
  };

  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "理想汽车全系轻改升级",
    brand: { "@type": "Brand", name: "理想" },
    model: "ONE、i6、i8、L6、L7、L8、L9、MEGA 及焕新/续航变体",
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
    makesOffer: liAutoBaseServices.map((svc) => ({
      "@type": "Offer",
      name: `理想 ${svc.title}`,
      description: svc.painPoint,
      category: svc.id,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: liAutoSeriesFaq.map((faq) => ({
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
        <LiAutoSeriesHero breadcrumbItems={breadcrumbItems} />
        <LiAutoBaseServiceGrid />
        <LiAutoModelEntryGrid entries={modelEntries} />
        <LiAutoServiceFlow />
        <FitmentQuickCheck config={fitmentConfig} theme="amber" />
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
