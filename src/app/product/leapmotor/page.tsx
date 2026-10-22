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
import { leapmotorFitment } from "@/lib/fitment/leapmotor";
import {
  buildBrandFitmentConfig,
  buildBrandGridModels,
} from "@/lib/brand-series/model-page-config";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "零跑全系适配件速查｜C11/C01/T03 底盘护板脚垫尾箱垫｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）零跑全系服务：底盘护板、360软包脚垫、平面尾箱垫、360全包尾箱、电动踏板专车适配件。适配库收录 A05/A10/B01/B10/C01/C10/C11/C16/D19/D99/Lafa5/T03/S01，按车型年款与结构对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "零跑改装",
    "零跑C11",
    "零跑C01",
    "零跑T03",
    "零跑底盘护板",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/leapmotor" },
};

const brandFaq: FaqItem[] = [
  {
    question: "零跑车型能改哪些项目？",
    answer:
      "适配库当前收录零跑各车型的底盘护板（锰钢1.2mm；铝镁合金2.0mm）、360软包脚垫、平面尾箱垫、360全包尾箱，C16、D19 另有电动踏板方案。具体项目以适配库收录年款为准，未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改零跑？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款、续航版本与底盘结构对表后再施工。",
  },
  {
    question: "零跑这些改装需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫属车内防护与加装件，不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，门店评估时说明合规边界，页面不做备案承诺。",
  },
  {
    question: "零跑适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质、年款、续航与保护位置均为原文，实际安装以门店现场检查为准。",
  },
];

export default function LeapmotorBrandPage() {
  const brand = getBrandRoute("leapmotor");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/leapmotor");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/leapmotor");
  const localStore = stores.find((s) => s.isActive);

  const gridModels = buildBrandGridModels(leapmotorFitment, [
    { name: "A05" },
    { name: "A10" },
    { name: "B01" },
    { name: "B10" },
    { name: "C01", slug: "c01" },
    { name: "C10" },
    { name: "C11", slug: "c11" },
    { name: "C16" },
    { name: "D19" },
    { name: "D99" },
    { name: "Lafa5" },
    { name: "T03", slug: "t03" },
    { name: "S01" },
  ]);
  const fitmentConfig = buildBrandFitmentConfig("零跑", leapmotorFitment);

  const itemListElement = gridModels.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.display} 适配件明细`,
    url: m.slug ? `/product/leapmotor/${m.slug}` : "/product/leapmotor#brand-fitment",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "零跑全系适配件",
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
    name: "零跑全系轻改升级",
    brand: { "@type": "Brand", name: "零跑" },
    model: "零跑全系（A05/A10/B01/B10/C01/C10/C11/C16/D19/D99/Lafa5/T03/S01）",
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
        name: `零跑 ${m.model} ${p.name} 方案`,
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
          badge="零跑 · 适配速查"
          title="零跑全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="orange"
          stats={{ models: gridModels.length, projects: leapmotorFitment.models.reduce((n, m) => n + m.projects.length, 0) }}
        />
        <GenericBrandModelGrid models={gridModels} theme="orange" brandPath="/product/leapmotor" />
        <GenericBrandFitment config={fitmentConfig} theme="orange" />
        <GenericBrandFaq items={brandFaq} theme="orange" />
        <GenericBrandCta
          title="零跑升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的零跑车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、续航版本、底盘结构）为准。
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
