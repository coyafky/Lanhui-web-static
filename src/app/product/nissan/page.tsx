import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NissanSeriesHero } from "@/components/nissan/series/NissanSeriesHero";
import { NissanModelGrid } from "@/components/nissan/series/NissanModelGrid";
import { NissanProjectGrid } from "@/components/nissan/series/NissanProjectGrid";
import { NissanFitmentDetails } from "@/components/nissan/series/NissanFitmentDetails";
import { NissanFaqSection } from "@/components/nissan/series/NissanFaqSection";
import { NissanDouyinCta } from "@/components/nissan/series/NissanDouyinCta";
import { NissanMobileCtaBar } from "@/components/nissan/series/NissanMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { nissanProjects } from "@/lib/nissan-all-models-products";
import { nissanModels } from "@/lib/nissan-model-groups";
import { NISSAN_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "日产全系保护与升级｜29 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）日产全系服务：底盘护板、360 软包脚垫、平面尾箱垫、360 全包尾箱、电动踏板、锻造轮毂 6 类专车适配件。29 款车型分组速览（轿车 13 / MPV 3 / SUV 13），按车型年款对照适配与材质档位，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "日产改装",
    "日产底盘护板",
    "日产电动踏板",
    "日产脚垫",
    "轩逸",
    "奇骏",
    "天籁",
    "途乐",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/nissan" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: NISSAN_SERIES_HERO_IMAGE.src,
      width: NISSAN_SERIES_HERO_IMAGE.width,
      height: NISSAN_SERIES_HERO_IMAGE.height,
      alt: NISSAN_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function NissanBrandPage() {
  const brand = getBrandRoute("nissan");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/nissan");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/nissan");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...nissanModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/nissan#nissan-fitment`,
    })),
    ...nissanProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: nissanModels.length + idx + 1,
      name: p.name,
      url: `/product/nissan#nissan-projects`,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "日产全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
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
        <NissanSeriesHero breadcrumbItems={breadcrumbItems} />
        <NissanModelGrid />
        <NissanProjectGrid />
        <NissanFitmentDetails />
        <NissanFaqSection />
        <NissanDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的日产车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <NissanMobileCtaBar />
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
