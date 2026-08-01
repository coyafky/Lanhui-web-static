import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WenjieSeriesHeroV2 } from "@/components/wenjie/series/WenjieSeriesHeroV2";
import { WenjieScenarioSelector } from "@/components/wenjie/series/WenjieScenarioSelector";
import { WenjieBaseServiceGrid } from "@/components/wenjie/series/WenjieBaseServiceGrid";
import {
  WenjieModelEntryGrid,
  type WenjieModelEntry,
} from "@/components/wenjie/series/WenjieModelEntryGrid";
import { WenjieServiceFlowV2 } from "@/components/wenjie/series/WenjieServiceFlowV2";
import { WenjieFaqSectionV2 } from "@/components/wenjie/series/WenjieFaqSectionV2";
import { WenjieDouyinCta } from "@/components/wenjie/series/WenjieDouyinCta";
import { WenjieMobileCtaBar } from "@/components/wenjie/series/WenjieMobileCtaBar";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { wenjieBaseServices } from "@/lib/wenjie-series-upgrade-projects";
import { WENJIE_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "问界日常保护与舒适升级｜车衣、隔热膜、踏板、地板、脚垫与洗美养护｜蓝辉轻改";
const PAGE_DESCRIPTION =
  "问界 M6、M7、M8 车主服务入口：先从车膜、轮毂、电动踏板、地板总成、专车脚垫和洗美养护中选择基础服务，再结合车型、年款和配置进入专属方案。先确认、再报价、不盲目叠加项目。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "问界改装",
    "问界M6",
    "问界M7",
    "问界M8",
    "电动踏板",
    "车衣",
    "隔热膜",
    "地板总成",
    "蓝辉轻改",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: WENJIE_SERIES_HERO_IMAGE.src,
      width: WENJIE_SERIES_HERO_IMAGE.width,
      height: WENJIE_SERIES_HERO_IMAGE.height,
      alt: WENJIE_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

const MODEL_COPY: Record<
  "M6" | "M7" | "M8",
  { scenario: string; topNeeds: readonly [string, string, string] }
> = {
  M6: {
    scenario: "城市通勤与家用 SUV，先做好基础防护和日常好打理。",
    topNeeds: ["车衣 / 隔热膜", "专车脚垫", "电动踏板"],
  },
  M7: {
    scenario: "家庭出行 6 座 SUV，围绕老人儿童上下车和后排高频使用。",
    topNeeds: ["电动踏板", "地板总成", "隔热膜"],
  },
  M8: {
    scenario: "商务与高端家庭全尺寸 SUV，兼顾外观姿态与座舱状态维护。",
    topNeeds: ["车膜类", "轮毂升级", "洗美养护"],
  },
};

function buildModelEntries(): readonly WenjieModelEntry[] {
  return (["m6", "m7", "m8"] as const).map((slug) => {
    const route = getModelRoute("wenjie", slug);
    if (!route) {
      throw new Error(`WenjieSeriesPage: missing wenjie ${slug} route definition`);
    }
    const modelKey = slug.toUpperCase() as "M6" | "M7" | "M8";
    return {
      modelKey,
      modelName: route.modelName,
      canonicalPath: route.canonicalPath,
      scenario: MODEL_COPY[modelKey].scenario,
      topNeeds: MODEL_COPY[modelKey].topNeeds,
    };
  });
}

export default function WenjieSeriesPage() {
  const brand = getBrandRoute("wenjie");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
  const breadcrumbItems = getProductBreadcrumbs("/product/wenjie");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/wenjie");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "问界日常保护与舒适升级｜蓝辉轻改 LANHUI",
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: wenjieBaseServices.map((svc, idx) => ({
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
        <WenjieSeriesHeroV2 breadcrumbItems={breadcrumbItems} />
        <WenjieScenarioSelector />
        <WenjieBaseServiceGrid />
        <WenjieModelEntryGrid entries={modelEntries} />
        <WenjieServiceFlowV2 />
        <WenjieFaqSectionV2 />
        <WenjieDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的问界系列升级项目用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
          </p>
        </section>

        <WenjieMobileCtaBar />
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
