import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GenericBrandHero } from "@/components/brand-series/GenericBrandHero";
import { BrandModelGroupGrid } from "@/components/brand-series/BrandModelGroupGrid";
import { BrandProjectMatrix } from "@/components/brand-series/BrandProjectMatrix";
import { GenericBrandFaq } from "@/components/brand-series/GenericBrandFaq";
import { GenericBrandCta } from "@/components/brand-series/GenericBrandCta";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import {
  buickModelCards,
  BUICK_MODEL_GROUP_LABELS,
  BUICK_MODEL_GROUPS,
  BUICK_MODEL_CARD_COUNT,
  BUICK_SOURCE_ROW_COUNT,
} from "@/lib/buick-curated-models";
import { buickProjects, BUICK_PROJECT_COUNT } from "@/lib/buick-curated-projects";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "别克全系适配件速查｜GL8/君威/昂科威｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）别克全系服务：底盘护板、电动踏板、360软包脚垫、尾箱垫、吸顶电视等专车适配件。适配库收录昂科拉、昂科威、君威、GL8 等车型，按车型年款与结构对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "别克改装",
    "别克GL8",
    "别克君威",
    "别克昂科威",
    "别克底盘护板",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/buick" },
};

const brandFaq: FaqItem[] = [
  {
    question: "别克车型能改哪些项目？",
    answer:
      "适配库当前收录别克各车型的底盘护板、电动踏板、360软包脚垫、平面尾箱垫、360全包尾箱，以及25款GL8陆尊/陆尚吸顶电视等项目，年款、材质与保护部位均按供应商适配库原文收录。未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改别克？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款、动力与座椅布局对表后再施工。",
  },
  {
    question: "别克这些改装需要备案吗？",
    answer:
      "车内防护与加装件（底盘护板、脚垫、尾箱垫等）不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，门店评估时说明合规边界，页面不做备案承诺。",
  },
  {
    question: "别克适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质与规格均为原文，实际安装以门店现场检查为准。",
  },
  {
    question: "别克车型年款怎么对照？",
    answer:
      "到店时提供车型年款、动力（燃油/混动/纯电）与座椅布局信息，门店按适配库年款栏逐项核对，同车型不同年款版型可能不通用。",
  },
];

export default function BuickBrandPage() {
  const brand = getBrandRoute("buick");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/buick");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/buick");
  const localStore = stores.find((s) => s.isActive);

  // 车系归并数据（脚本生成，与适配库逐字对账：41 个数据行 → 20 个车系卡）
  const modelCards = buickModelCards;
  const sourceRowCount = BUICK_SOURCE_ROW_COUNT;
  const imageCount = modelCards.reduce((n, c) => n + c.images.length, 0);

  const itemListElement = modelCards.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.displayName} 适配件明细`,
    url: m.subpage ?? "/product/buick#brand-fitment",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "别克全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "别克全系轻改升级",
    brand: { "@type": "Brand", name: "别克" },
    model: "别克全系（GL8/君威/昂科威等）",
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
    makesOffer: buickProjects.map((p) => ({
      "@type": "Offer",
      name: `别克 ${p.name} 方案（覆盖 ${p.modelCount} 个车系）`,
      category: "汽车轻改适配件",
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brandFaq.map((faq) => ({
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
        <GenericBrandHero
          breadcrumbItems={breadcrumbItems}
          badge="别克 · 适配速查"
          title="别克全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="red"
          stats={{ models: BUICK_MODEL_CARD_COUNT, projects: BUICK_PROJECT_COUNT }}
        />
        <BrandModelGroupGrid
          cards={modelCards}
          groupOrder={BUICK_MODEL_GROUPS}
          groupLabels={BUICK_MODEL_GROUP_LABELS}
          theme="red"
          eyebrow="适配库收录车系"
          reconciliation={{ rows: sourceRowCount, cards: BUICK_MODEL_CARD_COUNT, images: imageCount }}
        />
        <BrandProjectMatrix
          projects={buickProjects}
          cards={modelCards}
          groupOrder={BUICK_MODEL_GROUPS}
          groupLabels={BUICK_MODEL_GROUP_LABELS}
          brandLabel="别克"
          theme="red"
        />
        <GenericBrandFaq items={brandFaq} theme="red" />
        <GenericBrandCta
          title="别克升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的别克车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>
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
