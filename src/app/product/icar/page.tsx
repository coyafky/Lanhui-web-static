import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IcarSeriesHero } from "@/components/icar/series/IcarSeriesHero";
import { IcarModelGrid } from "@/components/icar/series/IcarModelGrid";
import { IcarProjectGrid } from "@/components/icar/series/IcarProjectGrid";
import { IcarFitmentDetails } from "@/components/icar/series/IcarFitmentDetails";
import { IcarFaqSection } from "@/components/icar/series/IcarFaqSection";
import { IcarDouyinCta } from "@/components/icar/series/IcarDouyinCta";
import { IcarMobileCtaBar } from "@/components/icar/series/IcarMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { icarProjects } from "@/lib/icar-all-models-products";
import { icarModels } from "@/lib/icar-model-groups";
import { ICAR_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "iCAR 全系底盘保护｜4 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）iCAR 全系服务：底盘护板专车适配件。4 款车型按动力分组速览（纯电 3 / 增程 1），按车型对照保护部位与材质档位，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "iCAR 改装",
    "iCAR 底盘护板",
    "iCAR 底盘护板",
    "iCAR 专车适配件",
    "iCAR 03",
    "iCAR V27",
    "iCAR V23",
    "iCAR V23S",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/icar" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: ICAR_SERIES_HERO_IMAGE.src,
      width: ICAR_SERIES_HERO_IMAGE.width,
      height: ICAR_SERIES_HERO_IMAGE.height,
      alt: ICAR_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function NissanBrandPage() {
  const brand = getBrandRoute("icar");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/icar");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/icar");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...icarModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/icar#icar-fitment`,
    })),
    ...icarProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: icarModels.length + idx + 1,
      name: p.name,
      url: `/product/icar#icar-projects`,
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
      name: "iCAR 全系适配件",
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
        <IcarSeriesHero breadcrumbItems={breadcrumbItems} />
        <IcarModelGrid />
        <IcarProjectGrid />
        <IcarFitmentDetails />
        <IcarFaqSection />
        <IcarDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的iCAR 车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <IcarMobileCtaBar />
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
