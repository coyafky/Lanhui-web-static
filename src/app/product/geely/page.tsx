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
import { geelyFitment } from "@/lib/fitment/geely";
import {
  buildBrandFitmentConfig,
  buildBrandGridModels,
} from "@/lib/brand-series/model-page-config";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "吉利全系适配件速查｜星越L/博越L/帝豪｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）吉利全系服务：底盘护板、电动踏板、360软包脚垫、尾箱垫等专车适配件。适配库收录星越L、博越L、帝豪、缤越、博越等车型，按车型年款与结构对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "吉利改装",
    "吉利星越L",
    "吉利博越L",
    "吉利帝豪",
    "吉利底盘护板",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/geely" },
};

const brandFaq: FaqItem[] = [
  {
    question: "吉利车型能改哪些项目？",
    answer:
      "适配库当前收录吉利各车型的底盘护板、电动踏板、360软包脚垫、平面尾箱垫、360全包尾箱等项目，年款、材质与动力说明均按供应商适配库原文收录。未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改吉利？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款、动力（燃油/混动/纯电/增程）与座椅布局对表后再施工。",
  },
  {
    question: "吉利这些改装需要备案吗？",
    answer:
      "车内防护与加装件（底盘护板、脚垫、尾箱垫等）不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，门店评估时说明合规边界，页面不做备案承诺。",
  },
  {
    question: "吉利适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质与规格均为原文，实际安装以门店现场检查为准。",
  },
  {
    question: "吉利车型年款怎么对照？",
    answer:
      "到店时提供车型年款、动力与电池/混动形式，门店按适配库年款栏逐项核对，同车系不同年款版型可能不通用。",
  },
];

export default function GeelyBrandPage() {
  const brand = getBrandRoute("geely");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/geely");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/geely");
  const localStore = stores.find((s) => s.isActive);

  const gridModels = buildBrandGridModels(geelyFitment, [
    { name: "缤瑞" },
    { name: "缤越" },
    { name: "博瑞" },
    { name: "博越" },
    { name: "博越L", slug: "boyue-l" },
    { name: "帝豪", slug: "emgrand" },
    { name: "功夫牛" },
    { name: "豪越" },
    { name: "几何C" },
    { name: "几何E" },
    { name: "嘉际" },
    { name: "金刚" },
    { name: "星瑞" },
    { name: "星愿" },
    { name: "星越" },
    { name: "星越L", slug: "xingyue-l" },
    { name: "星越S" },
    { name: "熊猫EV" },
    { name: "远景" },
    { name: "远景X1" },
    { name: "远景X3" },
    { name: "远景X6" },
    { name: "GX7" },
    { name: "GX9" },
    { name: "ICON" },
    { name: "SX7" },
    { name: "星舰7" },
  ]);
  const fitmentConfig = buildBrandFitmentConfig("吉利", geelyFitment);

  const itemListElement = gridModels.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.display} 适配件明细`,
    url: m.slug ? `/product/geely/${m.slug}` : "/product/geely#brand-fitment",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "吉利全系适配件",
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
    name: "吉利全系轻改升级",
    brand: { "@type": "Brand", name: "吉利" },
    model: "吉利全系（星越L/博越L/帝豪等）",
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
        name: `吉利 ${m.model} ${p.name} 方案`,
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
          badge="吉利 · 适配速查"
          title="吉利全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="blue"
          stats={{ models: gridModels.length, projects: geelyFitment.models.reduce((n, m) => n + m.projects.length, 0) }}
        />
        <GenericBrandModelGrid models={gridModels} theme="blue" brandPath="/product/geely" />
        <GenericBrandFitment config={fitmentConfig} theme="blue" />
        <GenericBrandFaq items={brandFaq} theme="blue" />
        <GenericBrandCta
          title="吉利升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的吉利车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
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
