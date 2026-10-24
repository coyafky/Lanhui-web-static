import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShangjieSeriesHero } from "@/components/shangjie/series/ShangjieSeriesHero";
import { ShangjieFaqSection } from "@/components/shangjie/series/ShangjieFaqSection";
import { ShangjieDouyinCta } from "@/components/shangjie/series/ShangjieDouyinCta";
import { ShangjieMobileCtaBar } from "@/components/shangjie/series/ShangjieMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { shangjieProjects } from "@/lib/shangjie-all-models-products";
import { shangjieModels } from "@/lib/shangjie-model-groups";
import { shangjieSeriesFaq } from "@/lib/shangjie-series-services";
import { SHANGJIE_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import {
  shangjieModelCards,
  SHANGJIE_MODEL_GROUP_LABELS,
  SHANGJIE_MODEL_GROUPS,
  SHANGJIE_MODEL_CARD_COUNT,
  SHANGJIE_SOURCE_ROW_COUNT,
} from "@/lib/shangjie-curated-models";
import { shangjieProjects as shangjieCuratedProjects } from "@/lib/shangjie-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

const PAGE_TITLE =
  "尚界 全系保护与升级｜3 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）尚界 全系服务：底盘护板、后排娱乐屏、小桌板专车适配件。3 款车型速览，按车型对照保护部位与材质档位，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "尚界 改装",
    "尚界 底盘护板",
    "尚界 底盘护板",
    "尚界 专车适配件",
    "尚界 H5",
    "尚界 Z7",
    "尚界 Z7T",
    "尚界 后排娱乐屏",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/shangjie" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: SHANGJIE_SERIES_HERO_IMAGE.src,
      width: SHANGJIE_SERIES_HERO_IMAGE.width,
      height: SHANGJIE_SERIES_HERO_IMAGE.height,
      alt: SHANGJIE_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function ShangjieBrandPage() {
  const brand = getBrandRoute("shangjie");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/shangjie");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/shangjie");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...shangjieModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/shangjie#shangjie-fitment`,
    })),
    ...shangjieProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: shangjieModels.length + idx + 1,
      name: p.name,
      url: `/product/shangjie#shangjie-projects`,
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
      name: "尚界 全系适配件",
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
    name: "尚界 H5 / Z7 / Z7T 轻改升级",
    brand: { "@type": "Brand", name: "尚界" },
    model: "尚界 H5、Z7、Z7T 全系车型",
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
    makesOffer: shangjieProjects.map((p) => ({
      "@type": "Offer",
      name: `尚界 ${p.name} 升级方案`,
      description: p.description,
      category: p.key,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: shangjieSeriesFaq.map((faq) => ({
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
        <ShangjieSeriesHero breadcrumbItems={breadcrumbItems} />
        <BrandModelGroupGrid
          cards={shangjieModelCards}
          groupOrder={SHANGJIE_MODEL_GROUPS}
          groupLabels={SHANGJIE_MODEL_GROUP_LABELS}
          theme="blue"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: SHANGJIE_SOURCE_ROW_COUNT, cards: SHANGJIE_MODEL_CARD_COUNT, images: 4 }}
        />
        <BrandProjectMatrix
          projects={shangjieCuratedProjects}
          cards={shangjieModelCards}
          groupOrder={SHANGJIE_MODEL_GROUPS}
          groupLabels={SHANGJIE_MODEL_GROUP_LABELS}
          brandLabel="尚界"
          theme="blue"
        />
        <ShangjieFaqSection />
        <ShangjieDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的尚界 车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <ShangjieMobileCtaBar />
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
