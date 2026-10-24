import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VoyahSeriesHero } from "@/components/voyah/series/VoyahSeriesHero";
import { VoyahBaseServiceGrid } from "@/components/voyah/series/VoyahBaseServiceGrid";
import { VoyahServiceFlow } from "@/components/voyah/series/VoyahServiceFlow";
import { VoyahFaqSection } from "@/components/voyah/series/VoyahFaqSection";
import { VoyahDouyinCta } from "@/components/voyah/series/VoyahDouyinCta";
import { VoyahMobileCtaBar } from "@/components/voyah/series/VoyahMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  voyahBaseServices,
  voyahSeriesFaq,
} from "@/lib/voyah-series-services";
import { voyahFitmentCategories } from "@/lib/voyah-all-models-products";
import { VOYAH_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";
import {
  voyahModelCards,
  VOYAH_MODEL_GROUP_LABELS,
  VOYAH_MODEL_GROUPS,
  VOYAH_MODEL_CARD_COUNT,
  VOYAH_SOURCE_ROW_COUNT,
} from "@/lib/voyah-curated-models";
import { voyahProjects as voyahCuratedProjects } from "@/lib/voyah-curated-projects";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";

const PAGE_TITLE =
  "岚图全系保护与舒适升级｜追光 FREE 知音 泰山 梦想家｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）为岚图全系提供车衣、隔热膜、改色膜、轮毂、电动踏板、地板总成、专车脚垫与洗美养护服务。追光、FREE、知音、泰山、梦想家 5 款车型的专车适配件（软包脚垫、全包尾箱、平面尾箱垫、底盘护板、电动踏板、小桌板）型号与年款明细在本页可查。先确认车型与年款，再安排到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "岚图改装",
    "岚图贴膜",
    "岚图追光",
    "岚图FREE",
    "岚图知音",
    "岚图泰山",
    "岚图梦想家",
    "岚图脚垫",
    "岚图底盘护板",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/voyah" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: VOYAH_SERIES_HERO_IMAGE.src,
      width: VOYAH_SERIES_HERO_IMAGE.width,
      height: VOYAH_SERIES_HERO_IMAGE.height,
      alt: VOYAH_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function VoyahBrandPage() {
  const brand = getBrandRoute("voyah");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/voyah");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/voyah");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...voyahBaseServices.map((svc, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: svc.title,
      url: svc.href,
    })),
    ...voyahFitmentCategories.map((cat, idx) => ({
      "@type": "ListItem",
      position: voyahBaseServices.length + idx + 1,
      name: cat.name,
      url: `/product/voyah#voyah-fitment`,
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
      name: "岚图全系升级服务与适配件",
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
    name: "岚图全系轻改升级",
    brand: { "@type": "Brand", name: "岚图" },
    model: "追光、FREE、知音、泰山、梦想家 全系车型",
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
    makesOffer: voyahFitmentCategories.map((cat) => ({
      "@type": "Offer",
      name: `岚图 ${cat.name} 方案`,
      description: cat.feature,
      category: cat.id,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: voyahSeriesFaq.map((faq) => ({
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
        <VoyahSeriesHero breadcrumbItems={breadcrumbItems} />
        <VoyahBaseServiceGrid />
        <BrandModelGroupGrid
          cards={voyahModelCards}
          groupOrder={VOYAH_MODEL_GROUPS}
          groupLabels={VOYAH_MODEL_GROUP_LABELS}
          theme="blue"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: VOYAH_SOURCE_ROW_COUNT, cards: VOYAH_MODEL_CARD_COUNT, images: 6 }}
        />
        <BrandProjectMatrix
          projects={voyahCuratedProjects}
          cards={voyahModelCards}
          groupOrder={VOYAH_MODEL_GROUPS}
          groupLabels={VOYAH_MODEL_GROUP_LABELS}
          brandLabel="岚图"
          theme="blue"
        />
        <VoyahServiceFlow />
        <VoyahFaqSection />
        <VoyahDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的岚图车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、座椅布局、底盘结构、电路走向）为准。
          </p>
        </section>

        <VoyahMobileCtaBar />
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
