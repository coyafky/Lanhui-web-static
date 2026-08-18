import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeslaSeriesHero } from "@/components/tesla/series/TeslaSeriesHero";
import { TeslaScenarioSelector } from "@/components/tesla/series/TeslaScenarioSelector";
import { TeslaBaseServiceGrid } from "@/components/tesla/series/TeslaBaseServiceGrid";
import { TeslaServiceFlow } from "@/components/tesla/series/TeslaServiceFlow";
import { TeslaFaqSection } from "@/components/tesla/series/TeslaFaqSection";
import { TeslaDouyinCta } from "@/components/tesla/series/TeslaDouyinCta";
import { TeslaMobileCtaBar } from "@/components/tesla/series/TeslaMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { teslaBaseServices } from "@/lib/tesla-series-services";
import { TESLA_HERO_IMAGE } from "@/lib/tesla-series-services";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "Tesla 特斯拉贴膜与轻改服务｜车膜、轮毂、脚垫与洗美养护｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）为 Tesla 车主提供车衣、隔热膜、改色膜、轮毂适配、专车脚垫与洗美养护服务。具体方案结合车型、年款和原车状态确认。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "特斯拉贴膜",
    "特斯拉车衣",
    "特斯拉隔热膜",
    "特斯拉轮毂",
    "特斯拉脚垫",
    "Model 3 贴膜",
    "Model Y 贴膜",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/tesla" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: TESLA_HERO_IMAGE.publicPath,
        width: TESLA_HERO_IMAGE.width,
        height: TESLA_HERO_IMAGE.height,
        alt: TESLA_HERO_IMAGE.alt,
      },
    ],
    type: "article",
  },
};

export default function TeslaBrandPage() {
  const brand = getBrandRoute("tesla");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/tesla");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/tesla");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "特斯拉全系基础服务",
      numberOfItems: teslaBaseServices.length,
      itemListElement: teslaBaseServices.map((svc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: svc.title,
        ...(svc.href && { url: svc.href }),
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
        <TeslaSeriesHero breadcrumbItems={breadcrumbItems} />
        <TeslaScenarioSelector />
        <TeslaBaseServiceGrid />
        <TeslaServiceFlow />
        <TeslaFaqSection />
        <TeslaDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的特斯拉升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            具体方案需根据车型、年款、原车状态及施工条件现场确认。非 Tesla
            授权机构的维修如果引发问题，可能影响相应质保范围。
          </p>
        </section>

        <TeslaMobileCtaBar />
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
