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
import { tankFitment } from "@/lib/fitment/tank";
import {
  buildBrandFitmentConfig,
  buildBrandGridModels,
} from "@/lib/brand-series/model-page-config";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "坦克全系适配件速查｜300/500底盘护板｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）坦克全系服务：底盘护板、电动踏板、360软包脚垫、尾箱垫等专车适配件。适配库收录坦克300、330、400、500、700，按车型年款与动力对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "坦克改装",
    "坦克300",
    "坦克500",
    "坦克底盘护板",
    "越野改装",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/tank" },
};

const brandFaq: FaqItem[] = [
  {
    question: "坦克车型能改哪些项目？",
    answer:
      "适配库当前收录坦克300/330/400/500/700的底盘护板（含油箱护板、电池包护板、尿素罐护板、推沙板等分项）、电动踏板、360软包脚垫、平面尾箱垫、360全包尾箱等项目，年款、材质与动力说明均按供应商适配库原文收录。未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改坦克？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款、动力（燃油/柴油/Hi4-T/PHEV/Hi4-Z）与座椅布局对表后再施工。",
  },
  {
    question: "坦克这些改装需要备案吗？",
    answer:
      "底盘护板、脚垫、尾箱垫等车内防护与加装件不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，门店评估时说明合规边界，页面不做备案承诺。",
  },
  {
    question: "坦克适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质与规格均为原文，实际安装以门店现场检查为准。",
  },
];

export default function TankBrandPage() {
  const brand = getBrandRoute("tank");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/tank");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/tank");
  const localStore = stores.find((s) => s.isActive);

  const gridModels = buildBrandGridModels(tankFitment, [
    { name: "300", slug: "300" },
    { name: "330" },
    { name: "400" },
    { name: "500", slug: "500" },
    { name: "700" },
  ]);
  const fitmentConfig = buildBrandFitmentConfig("坦克", tankFitment);

  const itemListElement = gridModels.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.display} 适配件明细`,
    url: m.slug ? `/product/tank/${m.slug}` : "/product/tank#brand-fitment",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "坦克全系适配件",
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
    name: "坦克全系轻改升级",
    brand: { "@type": "Brand", name: "坦克" },
    model: "坦克全系（300/330/400/500/700）",
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
        name: `坦克 ${m.model} ${p.name} 方案`,
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
          badge="坦克 · 适配速查"
          title="坦克全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="green"
          stats={{ models: gridModels.length, projects: tankFitment.models.reduce((n, m) => n + m.projects.length, 0) }}
        />
        <GenericBrandModelGrid models={gridModels} theme="green" brandPath="/product/tank" />
        <GenericBrandFitment config={fitmentConfig} theme="green" />
        <GenericBrandFaq items={brandFaq} theme="green" />
        <GenericBrandCta
          title="坦克升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的坦克车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
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
