import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DenzaSeriesHeroV2 } from "@/components/denza/series/DenzaSeriesHeroV2";
import { DenzaScenarioSelector } from "@/components/denza/series/DenzaScenarioSelector";
import { DenzaBaseServiceGrid } from "@/components/denza/series/DenzaBaseServiceGrid";
import { DenzaD9EntrySection } from "@/components/denza/series/DenzaD9EntrySection";
import { DenzaServiceFlowV2 } from "@/components/denza/series/DenzaServiceFlowV2";
import { DenzaLocalAnswerSection } from "@/components/denza/series/DenzaLocalAnswerSection";
import { DenzaFaqSectionV2 } from "@/components/denza/series/DenzaFaqSectionV2";
import { DenzaDouyinCta } from "@/components/denza/series/DenzaDouyinCta";
import { DenzaMobileCtaBar } from "@/components/denza/series/DenzaMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { denzaBaseServices } from "@/lib/denza-series-services";
import { DENZA_D9_HERO_IMAGE } from "@/lib/denza-d9-products";
import { DENZA_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "腾势汽车贴膜与舒适升级｜顺德大良蓝辉轻改 LANHUI";
const PAGE_DESCRIPTION =
  "蓝辉轻改顺德大良店为腾势车主提供车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护。先按用车需求选择基础服务，再结合车型、年款和座椅配置确认适配；腾势 D9 已整理 23 项专属方案子页。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "腾势贴膜",
    "腾势轻改",
    "腾势改装",
    "腾势 D9",
    "顺德汽车贴膜",
    "顺德大良改装",
    "车衣",
    "隔热膜",
    "铝地板",
    "蓝辉轻改",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: DENZA_SERIES_HERO_IMAGE.src,
      width: DENZA_SERIES_HERO_IMAGE.width,
      height: DENZA_SERIES_HERO_IMAGE.height,
      alt: DENZA_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function DenzaBrandPage() {
  const brand = getBrandRoute("denza");
  if (!brand || brand.status !== "live") notFound();

  const store = stores[0];
  const breadcrumbItems = getProductBreadcrumbs("/product/denza");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/denza");

  const d9Image = {
    src: DENZA_D9_HERO_IMAGE.publicPath ?? "",
    alt: "腾势 D9 升级方案效果预览图",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "腾势全系保护与舒适升级服务｜蓝辉轻改 LANHUI",
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: denzaBaseServices.map((svc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: svc.title,
        url: svc.href,
      })),
    },
    provider: {
      "@type": "AutoRepair",
      name: store.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: store.address,
        addressLocality: store.cityLabel,
        addressRegion: store.provinceLabel,
        addressCountry: "CN",
      },
      telephone: store.phone,
      openingHours: store.businessHours,
    },
  };

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <DenzaSeriesHeroV2 breadcrumbItems={breadcrumbItems} />
        <DenzaScenarioSelector />
        <DenzaBaseServiceGrid />
        <DenzaD9EntrySection image={d9Image} />
        <DenzaServiceFlowV2 />
        <DenzaLocalAnswerSection />
        <DenzaFaqSectionV2 />
        <DenzaDouyinCta />

        {/* 合规说明 + 更新时间 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的腾势车型改装款式用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            最后更新：2026-07-15
          </p>
        </section>

        <DenzaMobileCtaBar />
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
