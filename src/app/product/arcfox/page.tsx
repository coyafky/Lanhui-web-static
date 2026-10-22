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
import { arcfoxFitment } from "@/lib/fitment/arcfox";
import {
  buildBrandFitmentConfig,
  buildBrandGridModels,
} from "@/lib/brand-series/model-page-config";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "极狐全系适配件速查｜阿尔法S 阿尔法T 脚垫尾箱垫｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）极狐全系服务：360软包脚垫、360全包尾箱、平面尾箱垫、底盘护板等专车适配件。适配库收录阿尔法S、阿尔法T、阿尔法S5、阿尔法T5、考拉、T1、T6等车型，按车型年款与结构对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "极狐改装",
    "极狐阿尔法S",
    "极狐阿尔法T",
    "极狐脚垫",
    "极狐底盘护板",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/arcfox" },
};

const brandFaq: FaqItem[] = [
  {
    question: "极狐车型能改哪些项目？",
    answer:
      "适配库收录阿尔法S、阿尔法T、阿尔法S5、阿尔法T5、考拉、考拉S、T1、T6的360软包脚垫、360全包尾箱、平面尾箱垫；阿尔法S5、阿尔法T5、T1、贝塔S3、问道V9另收录底盘护板。未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改极狐？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款与底盘结构对表后再施工。",
  },
  {
    question: "极狐这些改装需要备案吗？",
    answer:
      "车内防护与加装件不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "极狐适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质与规格均为原文，实际安装以门店现场检查为准。",
  },
];

export default function ArcfoxBrandPage() {
  const brand = getBrandRoute("arcfox");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/arcfox");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/arcfox");
  const localStore = stores.find((s) => s.isActive);

  const gridModels = buildBrandGridModels(arcfoxFitment, [
    { name: "阿尔法S", slug: "alpha-s" },
    { name: "阿尔法S5" },
    { name: "阿尔法T", slug: "alpha-t" },
    { name: "阿尔法T5" },
    { name: "贝塔S3" },
    { name: "考拉" },
    { name: "考拉S" },
    { name: "问道V9" },
    { name: "T1" },
    { name: "T6" },
  ]);
  const fitmentConfig = buildBrandFitmentConfig("极狐", arcfoxFitment);

  const itemListElement = gridModels.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.display} 适配件明细`,
    url: m.slug ? `/product/arcfox/${m.slug}` : "/product/arcfox#brand-fitment",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "极狐全系适配件",
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
    name: "极狐全系轻改升级",
    brand: { "@type": "Brand", name: "极狐" },
    model: "极狐全系",
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
        name: `极狐 ${m.model} ${p.name} 方案`,
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
          badge="极狐 · 适配速查"
          title="极狐全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="cyan"
          stats={{ models: gridModels.length, projects: arcfoxFitment.models.reduce((n, m) => n + m.projects.length, 0) }}
        />
        <GenericBrandModelGrid models={gridModels} theme="cyan" brandPath="/product/arcfox" />
        <GenericBrandFitment config={fitmentConfig} theme="cyan" />
        <GenericBrandFaq items={brandFaq} theme="cyan" />
        <GenericBrandCta
          title="极狐升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的极狐车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
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
