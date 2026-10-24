import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { XiangjieSeriesHero } from "@/components/xiangjie/series/XiangjieSeriesHero";
import { XiangjieFaqSection } from "@/components/xiangjie/series/XiangjieFaqSection";
import { XiangjieDouyinCta } from "@/components/xiangjie/series/XiangjieDouyinCta";
import { XiangjieMobileCtaBar } from "@/components/xiangjie/series/XiangjieMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { xiangjieProjects } from "@/lib/xiangjie-all-models-products";
import { xiangjieModels } from "@/lib/xiangjie-model-groups";
import { xiangjieSeriesFaq } from "@/lib/xiangjie-series-services";
import { XIANGJIE_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import {
  xiangjieModelCards,
  XIANGJIE_MODEL_GROUP_LABELS,
  XIANGJIE_MODEL_GROUPS,
  XIANGJIE_MODEL_CARD_COUNT,
  XIANGJIE_SOURCE_ROW_COUNT,
} from "@/lib/xiangjie-curated-models";
import { xiangjieProjects as xiangjieCuratedProjects } from "@/lib/xiangjie-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

const PAGE_TITLE =
  "享界 全系保护与升级｜2 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）享界 全系服务：底盘护板、后排娱乐屏专车适配件。2 款车型速览，按车型对照保护部位与材质档位，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "享界 改装",
    "享界 底盘护板",
    "享界 底盘护板",
    "享界 专车适配件",
    "享界 S9",
    "享界 S9T",
    "享界 底盘护板",
    "享界 后排娱乐屏",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/xiangjie" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: XIANGJIE_SERIES_HERO_IMAGE.src,
      width: XIANGJIE_SERIES_HERO_IMAGE.width,
      height: XIANGJIE_SERIES_HERO_IMAGE.height,
      alt: XIANGJIE_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function XiangjieBrandPage() {
  const brand = getBrandRoute("xiangjie");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/xiangjie");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/xiangjie");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...xiangjieModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/xiangjie#xiangjie-fitment`,
    })),
    ...xiangjieProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: xiangjieModels.length + idx + 1,
      name: p.name,
      url: `/product/xiangjie#xiangjie-projects`,
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
      name: "享界 全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "享界 S9 / S9T 轻改升级",
    brand: { "@type": "Brand", name: "享界" },
    model: "享界 S9、S9T 全系车型",
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
    makesOffer: xiangjieProjects.map((p) => ({
      "@type": "Offer",
      name: `享界 ${p.name} 升级方案`,
      description: p.description,
      category: p.key,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: xiangjieSeriesFaq.map((faq) => ({
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
        <XiangjieSeriesHero breadcrumbItems={breadcrumbItems} />
        <BrandModelGroupGrid
          cards={xiangjieModelCards}
          groupOrder={XIANGJIE_MODEL_GROUPS}
          groupLabels={XIANGJIE_MODEL_GROUP_LABELS}
          theme="blue"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: XIANGJIE_SOURCE_ROW_COUNT, cards: XIANGJIE_MODEL_CARD_COUNT, images: 1 }}
        />
        <BrandProjectMatrix
          projects={xiangjieCuratedProjects}
          cards={xiangjieModelCards}
          groupOrder={XIANGJIE_MODEL_GROUPS}
          groupLabels={XIANGJIE_MODEL_GROUP_LABELS}
          brandLabel="享界"
          theme="blue"
        />
        <XiangjieFaqSection />
        <XiangjieDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的享界 车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <XiangjieMobileCtaBar />
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
