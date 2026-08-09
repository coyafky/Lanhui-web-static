import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NioSeriesHero } from "@/components/nio/series/NioSeriesHero";
import { NioBaseServiceGrid } from "@/components/nio/series/NioBaseServiceGrid";
import {
  NioModelEntryGrid,
  type NioModelEntry,
} from "@/components/nio/series/NioModelEntryGrid";
import { NioServiceFlow } from "@/components/nio/series/NioServiceFlow";
import { NioFaqSection } from "@/components/nio/series/NioFaqSection";
import { NioDouyinCta } from "@/components/nio/series/NioDouyinCta";
import { NioMobileCtaBar } from "@/components/nio/series/NioMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  nioBaseServices,
  NIO_MODEL_COPY,
} from "@/lib/nio-series-services";
import { nioEs8UpgradeProjects } from "@/lib/nio-products";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import { NIO_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";

const PAGE_TITLE =
  "蔚来全系智能车型保护与舒适升级｜车膜、脚垫、地板与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）为蔚来 ES8、ES6、ET5、ET7、EC6 等车型提供车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护服务，施工前确认智驾感知区域与换电底盘结构，蔚来 ES8 另有 17 项专车适配方案。先确认车型与年款，再安排到店施工。";

const heroImage = nioEs8UpgradeProjects.find((p) => p.key === "hero");

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "蔚来改装",
    "蔚来贴膜",
    "蔚来 ES8",
    "蔚来 ES6",
    "换电车型车衣",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: NIO_SERIES_HERO_IMAGE.src,
      width: NIO_SERIES_HERO_IMAGE.width,
      height: NIO_SERIES_HERO_IMAGE.height,
      alt: NIO_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

function buildModelEntries(): readonly NioModelEntry[] {
  const route = getModelRoute("nio", "es8");
  if (!route) {
    throw new Error("NioBrandPage: missing nio es8 route definition");
  }
  return [
    {
      modelKey: "es8",
      modelName: route.modelName,
      canonicalPath: route.canonicalPath,
      scenario: NIO_MODEL_COPY.es8.scenario,
      topNeeds: NIO_MODEL_COPY.es8.topNeeds,
      projectCount: route.projectCount ?? 17,
      image: {
        src: heroImage?.publicPath ?? "",
        alt: "蔚来 ES8 升级方案预览图",
      },
    },
  ];
}

export default function NioBrandPage() {
  const brand = getBrandRoute("nio");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
  const breadcrumbItems = getProductBreadcrumbs("/product/nio");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/nio");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "蔚来全系基础服务",
      numberOfItems: nioBaseServices.length,
      itemListElement: nioBaseServices.map((svc, idx) => ({
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
        <NioSeriesHero breadcrumbItems={breadcrumbItems} />
        <NioBaseServiceGrid />
        <NioModelEntryGrid entries={modelEntries} />
        <NioServiceFlow />
        <NioFaqSection />
        <NioDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的蔚来车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            具体方案需根据车型、年款、配置、原车状态及施工条件现场确认。
          </p>
        </section>

        <NioMobileCtaBar />
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
