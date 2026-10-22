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
import { cadillacFitment } from "@/lib/fitment/cadillac";
import {
  buildBrandFitmentConfig,
  buildBrandGridModels,
} from "@/lib/brand-series/model-page-config";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "凯迪拉克全系适配件速查｜CT5/XT5底盘护板｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）凯迪拉克全系服务：底盘护板、360软包脚垫、平面尾箱垫、360全包尾箱、电动踏板等专车适配件。适配库收录CT4、CT5、CT6、XT4、XT5、XT6、ATS、SRX等车型，按车型年款与底盘结构对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "凯迪拉克改装",
    "凯迪拉克CT5",
    "凯迪拉克XT5",
    "凯迪拉克底盘护板",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/cadillac" },
};

const brandFaq: FaqItem[] = [
  {
    question: "凯迪拉克车型能改哪些项目？",
    answer:
      "适配库当前收录凯迪拉克各车型的底盘护板、360软包脚垫、平面尾箱垫、360全包尾箱、电动踏板等项目，按车型年款、排量（2.0T等）与底盘结构对照。未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改凯迪拉克？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款与底盘结构对表后再施工。",
  },
  {
    question: "凯迪拉克这些改装需要备案吗？",
    answer:
      "底盘护板、电动踏板、脚垫、尾箱垫属车内防护与便利加装件，不涉及外观变更；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "凯迪拉克适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质与规格均为原文，实际安装以门店现场检查为准。",
  },
];

export default function CadillacBrandPage() {
  const brand = getBrandRoute("cadillac");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/cadillac");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/cadillac");
  const localStore = stores.find((s) => s.isActive);

  const gridModels = buildBrandGridModels(cadillacFitment, [
    { name: "ATS" },
    { name: "CT4" },
    { name: "CT5", slug: "ct5" },
    { name: "CT6" },
    { name: "SRX" },
    { name: "XT4" },
    { name: "XT5", slug: "xt5" },
    { name: "XT6" },
    { name: "XTS" },
    { name: "锐歌" },
    { name: "IQ傲歌" },
    { name: "GT4" },
    { name: "CTS" },
    { name: "凯威德" },
    { name: "SLS赛威" },
    { name: "凯雷德" },
  ]);
  const fitmentConfig = buildBrandFitmentConfig("凯迪拉克", cadillacFitment);

  const itemListElement = gridModels.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.display} 适配件明细`,
    url: m.slug ? `/product/cadillac/${m.slug}` : `/product/cadillac#brand-fitment`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "凯迪拉克全系适配件",
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
    name: "凯迪拉克全系轻改升级",
    brand: { "@type": "Brand", name: "凯迪拉克" },
    model: "凯迪拉克全系（CT4、CT5、CT6、XT4、XT5、XT6等）",
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
        name: `凯迪拉克 ${m.model} ${p.name} 方案`,
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
          badge="凯迪拉克 · 适配速查"
          title="凯迪拉克全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="blue"
          stats={{ models: gridModels.length, projects: cadillacFitment.models.reduce((n, m) => n + m.projects.length, 0) }}
        />
        <GenericBrandModelGrid models={gridModels} theme="blue" brandPath="/product/cadillac" />
        <GenericBrandFitment config={fitmentConfig} theme="blue" />
        <GenericBrandFaq items={brandFaq} theme="blue" />
        <GenericBrandCta
          title="凯迪拉克升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的凯迪拉克车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
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
