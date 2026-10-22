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
import { yangwangFitment } from "@/lib/fitment/yangwang";
import {
  buildBrandFitmentConfig,
  buildBrandGridModels,
} from "@/lib/brand-series/model-page-config";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "仰望全系适配件速查｜U8 底盘护板｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）仰望全系服务：底盘护板专车适配件。适配库收录 U8 车型，按车型年款与底盘结构对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "仰望改装",
    "仰望U8",
    "仰望U8底盘护板",
    "仰望底盘护板",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/yangwang" },
};

const brandFaq: FaqItem[] = [
  {
    question: "仰望车型能改哪些项目？",
    answer:
      "适配库当前收录仰望U8的底盘护板方案（铝镁合金，标准版）。未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改仰望U8？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款与底盘结构对表后再施工。",
  },
  {
    question: "仰望U8加装底盘护板需要备案吗？",
    answer:
      "底盘护板属底盘防护加装件；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "仰望适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质与规格均为原文，实际安装以门店现场检查为准。",
  },
];

export default function YangwangBrandPage() {
  const brand = getBrandRoute("yangwang");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/yangwang");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/yangwang");
  const localStore = stores.find((s) => s.isActive);

  const gridModels = buildBrandGridModels(yangwangFitment, [
    { name: "U8", slug: "u8" },
  ]);
  const fitmentConfig = buildBrandFitmentConfig("仰望", yangwangFitment);

  const itemListElement = gridModels.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.display} 适配件明细`,
    url: `/product/yangwang/${m.slug}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "仰望全系适配件",
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
    name: "仰望全系轻改升级",
    brand: { "@type": "Brand", name: "仰望" },
    model: "仰望全系（U8）",
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
        name: `仰望 ${m.model} ${p.name} 方案`,
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
          badge="仰望 · 适配速查"
          title="仰望全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="cyan"
          stats={{ models: gridModels.length, projects: yangwangFitment.models.reduce((n, m) => n + m.projects.length, 0) }}
        />
        <GenericBrandModelGrid models={gridModels} theme="cyan" brandPath="/product/yangwang" />
        <GenericBrandFitment config={fitmentConfig} theme="cyan" />
        <GenericBrandFaq items={brandFaq} theme="cyan" />
        <GenericBrandCta
          title="仰望升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的仰望车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
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
