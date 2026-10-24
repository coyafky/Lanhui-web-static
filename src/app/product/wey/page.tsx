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
  weyModelCards,
  WEY_MODEL_GROUP_LABELS,
  WEY_MODEL_GROUPS,
  WEY_MODEL_CARD_COUNT,
  WEY_SOURCE_ROW_COUNT,
} from "@/lib/wey-curated-models";
import { weyProjects, WEY_PROJECT_COUNT } from "@/lib/wey-curated-projects";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "魏牌全系适配件速查｜蓝山/摩卡 底盘护板/电动踏板/脚垫｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）魏牌全系服务：底盘护板、电动踏板、360软包脚垫、平面尾箱垫、360全包尾箱专车适配件。适配库收录 P8/VV5/VV6/VV7/高山/蓝山/玛奇朵/摩卡/拿铁/V9X，按车型年款与结构对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "魏牌改装",
    "魏牌蓝山",
    "魏牌摩卡",
    "魏牌底盘护板",
    "魏牌电动踏板",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/wey" },
};

const brandFaq: FaqItem[] = [
  {
    question: "魏牌车型能改哪些项目？",
    answer:
      "适配库当前收录魏牌各车型的底盘护板（碳纤5.0mm；塑钢5.0mm；锰钢1.2mm；碳钢1.5mm；铝镁合金2.0mm 等原文材质）、电动踏板（线夹/对插取信号）、360软包脚垫（皮革/丝圈）、平面尾箱垫与360全包尾箱（皮革）。高山车型另有独立专题页，具体项目以适配库收录年款为准，未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改魏牌？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款、动力类型（燃油/插电混动/纯电）与底盘结构对表后再施工。",
  },
  {
    question: "魏牌这些改装需要备案吗？",
    answer:
      "底盘护板、电动踏板、脚垫、尾箱垫属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，门店评估时说明合规边界，页面不做备案承诺。",
  },
  {
    question: "魏牌适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质、年款、动力与保护位置均为原文，实际安装以门店现场检查为准。",
  },
];

export default function WeyBrandPage() {
  const brand = getBrandRoute("wey");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/wey");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/wey");
  const localStore = stores.find((s) => s.isActive);

  // 车系归并数据（脚本生成，与适配库逐字对账：变体行并回车系卡）
  const modelCards = weyModelCards;
  const sourceRowCount = WEY_SOURCE_ROW_COUNT;

  const itemListElement = modelCards.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.displayName} 适配件明细`,
    url: m.subpage ?? "/product/wey#brand-fitment",
  }));

  // 每个车系当前可用的适配产品图（用于 Hero 统计，不手写数字）
  const imageCount = modelCards.reduce((n, c) => n + c.images.length, 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "魏牌全系适配件",
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
    name: "魏牌全系轻改升级",
    brand: { "@type": "Brand", name: "魏牌" },
    model: "魏牌全系（P8/VV5/VV6/VV7/高山/蓝山/玛奇朵/摩卡/拿铁/V9X）",
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
    makesOffer: weyProjects.map((p) => ({
      "@type": "Offer",
      name: `魏牌 ${p.name} 方案（覆盖 ${p.modelCount} 个车系）`,
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
          badge="魏牌 · 适配速查"
          title="魏牌全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="amber"
          stats={{ models: WEY_MODEL_CARD_COUNT, projects: WEY_PROJECT_COUNT }}
        />
        <BrandModelGroupGrid
          cards={modelCards}
          groupOrder={WEY_MODEL_GROUPS}
          groupLabels={WEY_MODEL_GROUP_LABELS}
          theme="amber"
          reconciliation={{ rows: sourceRowCount, cards: WEY_MODEL_CARD_COUNT, images: imageCount }}
        />
        <BrandProjectMatrix
          projects={weyProjects}
          cards={modelCards}
          groupOrder={WEY_MODEL_GROUPS}
          groupLabels={WEY_MODEL_GROUP_LABELS}
          brandLabel="魏牌"
          theme="amber"
        />
        <GenericBrandFaq items={brandFaq} theme="amber" />
        <GenericBrandCta
          title="魏牌升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的魏牌车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、动力类型、底盘结构）为准。
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
