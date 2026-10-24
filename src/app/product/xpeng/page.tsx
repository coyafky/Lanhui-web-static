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
import {
  xpengBaseServices,
  xpengSeriesFaq,
} from "@/lib/xpeng-series-services";
import { XPENG_GX_HERO_IMAGE } from "@/lib/xpeng-gx-products";
import { XPENG_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { safeJsonLd } from "@/lib/json-ld";
import {
  xpengModelCards,
  XPENG_MODEL_GROUP_LABELS,
  XPENG_MODEL_GROUPS,
} from "@/lib/xpeng-curated-models";
import { xpengProjects as xpengCuratedProjects } from "@/lib/xpeng-curated-projects";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

/** 适配库 10 节（G6/G7/G9/GX/M03/P5/P7/X9/G3/L03）精确匹配。 */
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
  alternates: { canonical: "/product/xpeng" },
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

  // 供应商适配库速查：G6/G7/G9/GX/M03/P5/P7/X9/G3/L03 精确匹配，按车型分组渲染

  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "小鹏全系轻改升级",
    brand: { "@type": "Brand", name: "小鹏" },
    model: "G6、G7、G9、GX、M03、P5、P7、X9、G3、L03 全系车型",
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
    makesOffer: xpengBaseServices.map((svc) => ({
      "@type": "Offer",
      name: `小鹏 ${svc.title}`,
      description: svc.painPoint,
      category: svc.id,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: xpengSeriesFaq.map((faq) => ({
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
        <XpengSeriesHeroV2 breadcrumbItems={breadcrumbItems} />
        <XpengBaseServiceGrid />
        <XpengGxEntrySection image={gxImage} />
        <XpengServiceFlowV2 />
        <BrandProjectMatrix
          projects={xpengCuratedProjects}
          cards={xpengModelCards}
          groupOrder={XPENG_MODEL_GROUPS}
          groupLabels={XPENG_MODEL_GROUP_LABELS}
          brandLabel="小鹏"
          theme="green"
        />
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
