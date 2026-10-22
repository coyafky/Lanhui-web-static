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
import { hondaFitment } from "@/lib/fitment/honda";
import {
  buildBrandFitmentConfig,
  buildBrandGridModels,
} from "@/lib/brand-series/model-page-config";
import type { FaqItem } from "@/components/vehicle-page";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "本田全系适配件速查｜CR-V 思域 雅阁 脚垫底盘护板｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）本田全系服务：360软包脚垫、360全包尾箱、平面尾箱垫、底盘护板、电动踏板、吸顶电视等专车适配件。适配库收录艾力绅、奥德赛、CR-V、思域、雅阁等车型，按车型年款与结构对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "本田改装",
    "本田CR-V",
    "本田思域",
    "本田雅阁",
    "本田底盘护板",
    "本田脚垫",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/honda" },
};

const brandFaq: FaqItem[] = [
  {
    question: "本田车型能改哪些项目？",
    answer:
      "适配库收录的本田车型以360软包脚垫、360全包尾箱、平面尾箱垫、底盘护板为主，艾力绅另收录吸顶电视，冠道、皓影、UR-V、CR-V另收录电动踏板。未收录的车型与配置以门店现场检查为准。",
  },
  {
    question: "佛山本地哪里能改本田？",
    answer:
      "蓝辉轻改门店位于佛山顺德大良，可到店评估并安排施工，到店按车型年款与底盘结构对表后再施工。",
  },
  {
    question: "本田这些改装需要备案吗？",
    answer:
      "车内防护与加装件不涉及外观变更的不需要备案；涉及外观变更的项目（如包围、改色、轮毂）按当地交管规定执行，到店评估时门店会说明合规边界，页面不做备案承诺。",
  },
  {
    question: "本田适配数据以什么为准？",
    answer:
      "页面适配件信息来自蓝辉供应商适配库原文，材质与规格均为原文，实际安装以门店现场检查为准。",
  },
];

export default function HondaBrandPage() {
  const brand = getBrandRoute("honda");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/honda");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/honda");
  const localStore = stores.find((s) => s.isActive);

  const gridModels = buildBrandGridModels(hondaFitment, [
    { name: "艾力绅" },
    { name: "奥德赛" },
    { name: "缤智" },
    { name: "飞度" },
    { name: "锋范" },
    { name: "哥瑞" },
    { name: "歌诗图" },
    { name: "冠道" },
    { name: "皓影" },
    { name: "杰德" },
    { name: "竞瑞" },
    { name: "理念S1" },
    { name: "理念VE-1" },
    { name: "凌派" },
    { name: "思铂睿" },
    { name: "思迪" },
    { name: "思铭" },
    { name: "思域", slug: "civic" },
    { name: "享域" },
    { name: "型格" },
    { name: "雅阁", slug: "accord" },
    { name: "英仕派" },
    { name: "CR-V", slug: "cr-v" },
    { name: "e:NS1" },
    { name: "EA6绎乐" },
    { name: "HR-V" },
    { name: "INSPIRE" },
    { name: "LIFE" },
    { name: "M-NV" },
    { name: "P7" },
    { name: "UR-V" },
    { name: "X-NV" },
    { name: "XR-V" },
    { name: "ZR-V致在" },
  ]);
  const fitmentConfig = buildBrandFitmentConfig("本田", hondaFitment);

  const itemListElement = gridModels.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${m.display} 适配件明细`,
    url: m.slug ? `/product/honda/${m.slug}` : "/product/honda#brand-fitment",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "本田全系适配件",
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
    name: "本田全系轻改升级",
    brand: { "@type": "Brand", name: "本田" },
    model: "本田全系",
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
        name: `本田 ${m.model} ${p.name} 方案`,
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
          badge="本田 · 适配速查"
          title="本田全系适配件速查"
          subtitle="适配库收录车型速览 · 数据来自蓝辉供应商适配库"
          description={PAGE_DESCRIPTION}
          theme="blue"
          stats={{ models: gridModels.length, projects: hondaFitment.models.reduce((n, m) => n + m.projects.length, 0) }}
        />
        <GenericBrandModelGrid models={gridModels} theme="blue" brandPath="/product/honda" />
        <GenericBrandFitment config={fitmentConfig} theme="blue" />
        <GenericBrandFaq items={brandFaq} theme="blue" />
        <GenericBrandCta
          title="本田升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "返回产品中心", href: "/product" }}
        />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的本田车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
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
