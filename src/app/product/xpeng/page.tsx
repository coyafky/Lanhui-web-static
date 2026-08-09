import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { XpengSeriesHeroV2 } from "@/components/xpeng/series/XpengSeriesHeroV2";
import { XpengBaseServiceGrid } from "@/components/xpeng/series/XpengBaseServiceGrid";
import { XpengGxEntrySection } from "@/components/xpeng/series/XpengGxEntrySection";
import { XpengServiceFlowV2 } from "@/components/xpeng/series/XpengServiceFlowV2";
import { XpengFaqSectionV2 } from "@/components/xpeng/series/XpengFaqSectionV2";
import { XpengDouyinCta } from "@/components/xpeng/series/XpengDouyinCta";
import { XpengMobileCtaBar } from "@/components/xpeng/series/XpengMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { xpengBaseServices } from "@/lib/xpeng-series-services";
import { XPENG_GX_HERO_IMAGE } from "@/lib/xpeng-gx-products";
import { XPENG_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "小鹏汽车贴膜与轻改服务｜顺德大良蓝辉轻改 LANHUI";
const PAGE_DESCRIPTION =
  "蓝辉轻改为小鹏车主提供车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护服务，小鹏 GX 已整理专属方案。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "小鹏贴膜",
    "小鹏轻改",
    "小鹏改装",
    "小鹏 GX",
    "顺德汽车贴膜",
    "顺德大良改装",
    "车衣",
    "隔热膜",
    "轮毂升级",
    "蓝辉轻改",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: XPENG_SERIES_HERO_IMAGE.src,
      width: XPENG_SERIES_HERO_IMAGE.width,
      height: XPENG_SERIES_HERO_IMAGE.height,
      alt: XPENG_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function XpengBrandPage() {
  const brand = getBrandRoute("xpeng");
  if (!brand || brand.status !== "live") notFound();

  const store = stores[0];
  const breadcrumbItems = getProductBreadcrumbs("/product/xpeng");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/xpeng");

  const gxImage = {
    src: XPENG_GX_HERO_IMAGE.publicPath ?? "",
    alt: "小鹏 GX 升级方案效果预览图",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "小鹏全系保护与轻改服务｜蓝辉轻改 LANHUI",
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: xpengBaseServices.map((svc, idx) => ({
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
        <XpengSeriesHeroV2 breadcrumbItems={breadcrumbItems} />
        <XpengBaseServiceGrid />
        <XpengGxEntrySection image={gxImage} />
        <XpengServiceFlowV2 />
        <XpengFaqSectionV2 />
        <XpengDouyinCta />

        {/* 合规说明 + 更新时间 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的小鹏车型改装款式用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            最后更新：2026-07-15
          </p>
        </section>

        <XpengMobileCtaBar />
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
