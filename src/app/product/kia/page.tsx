import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KiaSeriesHero } from "@/components/kia/series/KiaSeriesHero";
import { KiaModelGrid } from "@/components/kia/series/KiaModelGrid";
import { KiaProjectGrid } from "@/components/kia/series/KiaProjectGrid";
import { KiaFeaturedModels } from "@/components/kia/series/KiaFeaturedModels";
import { KiaFaqSection } from "@/components/kia/series/KiaFaqSection";
import { KiaDouyinCta } from "@/components/kia/series/KiaDouyinCta";
import { KiaMobileCtaBar } from "@/components/kia/series/KiaMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { kiaProjects } from "@/lib/kia-all-models-products";
import { kiaModels } from "@/lib/kia-model-groups";
import { KIA_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "起亚全系底盘保护与内饰升级｜30 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）起亚全系服务：底盘护板、电动踏板、小桌板、脚垫、尾箱垫 6 类专车适配件。30 款车型分组速查，按车型年款对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "起亚改装",
    "起亚底盘护板",
    "起亚电动踏板",
    "智跑护板",
    "嘉华小桌板",
    "K5脚垫",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/kia" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: KIA_SERIES_HERO_IMAGE.src,
      width: KIA_SERIES_HERO_IMAGE.width,
      height: KIA_SERIES_HERO_IMAGE.height,
      alt: KIA_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function KiaBrandPage() {
  const brand = getBrandRoute("kia");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/kia");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/kia");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...kiaModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `起亚${m.name}`,
      url: `/product/kia#kia-models`,
    })),
    ...kiaProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: kiaModels.length + idx + 1,
      name: p.name,
      url: `/product/kia#kia-projects`,
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
      name: "起亚全系适配件",
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
        <KiaSeriesHero breadcrumbItems={breadcrumbItems} />
        <KiaModelGrid />
        <KiaProjectGrid />
        <KiaFeaturedModels />
        <KiaFaqSection />
        <KiaDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的起亚车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <KiaMobileCtaBar />
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
