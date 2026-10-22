import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VoyahSeriesHero } from "@/components/voyah/series/VoyahSeriesHero";
import { VoyahBaseServiceGrid } from "@/components/voyah/series/VoyahBaseServiceGrid";
import {
  VoyahModelEntryGrid,
  type VoyahModelEntry,
} from "@/components/voyah/series/VoyahModelEntryGrid";
import { VoyahFitmentMatrix } from "@/components/voyah/series/VoyahFitmentMatrix";
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
  VOYAH_MODEL_COPY,
  type VoyahModelEntryKey,
} from "@/lib/voyah-series-services";
import {
  voyahFitmentCategories,
  VOYAH_MODEL_NAMES,
} from "@/lib/voyah-all-models-products";
import { voyahFitment } from "@/lib/fitment/voyah";
import { FitmentQuickCheck } from "@/components/vehicle-page";
import { VOYAH_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

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

function buildModelEntries(): readonly VoyahModelEntry[] {
  return (Object.keys(VOYAH_MODEL_COPY) as VoyahModelEntryKey[]).map((key) => ({
    modelKey: key,
    modelName: VOYAH_MODEL_NAMES[key],
    scenario: VOYAH_MODEL_COPY[key].scenario,
    topNeeds: VOYAH_MODEL_COPY[key].topNeeds,
    fitmentCount: VOYAH_MODEL_COPY[key].fitmentCount,
  }));
}

export default function VoyahBrandPage() {
  const brand = getBrandRoute("voyah");
  if (!brand || brand.status !== "live") notFound();

  const modelEntries = buildModelEntries();
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

  // 供应商适配库速查：梦想家/泰山/知音/追光/FREE 五款车型节全部精确匹配
  const fitmentConfig = {
    heading: "岚图 适配速查：你的车型能装哪些项目？",
    models: voyahFitment.models
      .filter((m) => ["梦想家", "泰山", "知音", "追光", "FREE"].includes(m.model))
      .map((m) => ({
        model: m.model,
        projects: m.projects.map((p) => ({
          name: p.name,
          specs: [...p.specs],
        })),
      })),
    groupByModel: true,
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
        <VoyahModelEntryGrid entries={modelEntries} />
        <VoyahBaseServiceGrid />
        <VoyahFitmentMatrix categories={voyahFitmentCategories} />
        <FitmentQuickCheck config={fitmentConfig} theme="blue" />
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
