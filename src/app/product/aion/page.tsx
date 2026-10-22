import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GenericBrandHero } from "@/components/brand-series/GenericBrandHero";
import { GenericBrandModelGrid } from "@/components/brand-series/GenericBrandModelGrid";
import { GenericBrandFitment } from "@/components/brand-series/GenericBrandFitment";
import { GenericBrandFaq } from "@/components/brand-series/GenericBrandFaq";
import { GenericBrandCta } from "@/components/brand-series/GenericBrandCta";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { aionFitment } from "@/lib/fitment/aion";
import {
  buildBrandFitmentConfig,
  buildBrandGridModels,
} from "@/lib/brand-series/model-page-config";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "广汽埃安全系适配件速查｜AION S/Y/V/RT/i60｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）广汽埃安全系服务：底盘护板、360软包脚垫、平面尾箱垫、360全包尾箱。适配库收录i60、N60、RT、S、UT、V、Y、LX，按车型年款、电池类型与续航对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "广汽埃安改装",
    "AION S",
    "AION Y",
    "AION V",
    "埃安底盘护板",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/aion" },
};

const brandFaq: FaqItem[] = [
  {
    question: "广汽埃安车型能改哪些项目？",
    answer:
      "适配库当前收录i60、N60、RT、S、UT、V、Y、LX的底盘护板、360软包脚垫、平面尾箱垫、360全包尾箱；底盘护板材质含锰钢1.2mm/铝镁合金2.0mm（S/V另有碳纤5.0mm、塑钢5.0mm、碳钢1.5mm），年款、电池类型（磷酸铁锂/三元锂/因湃/宁德时代/中创/时代）与续航均按供应商适配库原文收录。未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改广汽埃安？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款、电池类型与续航对表后再施工。",
  },
  {
    question: "广汽埃安这些改装需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属防护加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，门店评估时说明合规边界，页面不做备案承诺。",
  },
  {
    question: "广汽埃安适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质、年款、电池类型与续航均为原文，实际安装以门店现场检查为准。",
  },
];

export default function AionBrandPage() {
  const brand = getBrandRoute("aion");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/aion");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/aion");
  const localStore = stores.find((s) => s.isActive);

  const gridModels = buildBrandGridModels(aionFitment, [
    { name: "i60", display: "AION i60" },
    { name: "N60", display: "AION N60" },
    { name: "RT", display: "AION RT" },
    { name: "S", display: "AION S", slug: "aion-s" },
    { name: "UT", display: "AION UT" },
    { name: "V", display: "AION V" },
    { name: "Y", display: "AION Y", slug: "aion-y" },
    { name: "LX", display: "AION LX" },
  ]);
  const fitmentConfig = buildBrandFitmentConfig("广汽埃安", aionFitment);

  const itemListElement = gridModels.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.display} 适配件明细`,
    url: m.slug ? `/product/aion/${m.slug}` : "/product/aion#brand-fitment",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "广汽埃安全系适配件",
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
    name: "广汽埃安全系轻改升级",
    brand: { "@type": "Brand", name: "广汽埃安" },
    model: "广汽埃安全系（AION S/Y/V/RT/i60等）",
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
    makesOffer: fitmentConfig.models.flatMap((m) =>
      m.projects.map((p) => ({
        "@type": "Offer",
        name: `广汽埃安 ${m.model} ${p.name} 方案`,
        category: "汽车轻改适配件",
      })),
    ),
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
          badge="广汽埃安 · 适配速查"
          title="广汽埃安全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="green"
          stats={{ models: gridModels.length, projects: aionFitment.models.reduce((n, m) => n + m.projects.length, 0) }}
        />
        <GenericBrandModelGrid models={gridModels} theme="green" brandPath="/product/aion" />
        <GenericBrandFitment config={fitmentConfig} theme="green" />
        <GenericBrandFaq items={brandFaq} theme="green" />
        <GenericBrandCta
          title="广汽埃安升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的广汽埃安车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
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
