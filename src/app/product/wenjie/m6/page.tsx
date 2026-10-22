import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { getWenjieModelHeroImage } from "@/lib/wenjie-preview-images";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { ElectricStepFitmentCard } from "@/components/product/electric-steps/ElectricStepFitmentCard";
import { wenjieM6PageConfig } from "@/lib/wenjie-m6-page-config";
import { wenjieM6UpgradeProjects } from "@/lib/wenjie-m6-upgrade-projects";
import { safeJsonLd } from "@/lib/json-ld";

const CANONICAL_PATH = "/product/wenjie/m6";

const PAGE_TITLE =
  "问界 M6 专属升级方案｜车衣、隔热膜、电动踏板与底盘护板｜蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改整理问界 M6 17 个升级项目，涵盖新车保护、底盘防护、电动踏板、家庭座舱与智能显示 6 大场景。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "问界M6",
    "问界M6改装",
    "车衣",
    "隔热膜",
    "电动踏板",
    "底盘护板",
    "蓝辉轻改",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: getWenjieModelHeroImage("M6").publicPath ?? "",
        width: 1448,
        height: 1086,
        alt: getWenjieModelHeroImage("M6").alt,
      },
    ],
    type: "article",
  },
};

export default function WenjieM6Page() {
  const brand = getBrandRoute("wenjie");
  const model = getModelRoute("wenjie", "m6");
  if (!brand || brand.type !== "vehicle_brand") notFound();
  if (!model || model.type !== "vehicle_model") notFound();

  const breadcrumbItems = getProductBreadcrumbs(CANONICAL_PATH);
  const breadcrumbSchema = getProductBreadcrumbSchema(CANONICAL_PATH);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "问界 M6 专属升级方案",
    numberOfItems: wenjieM6UpgradeProjects.length,
    itemListElement: wenjieM6UpgradeProjects.map((p) => ({
      "@type": "ListItem" as const,
      position: p.order,
      name: p.name,
      category: p.category,
      url: `${CANONICAL_PATH}#wenjie-m6-project-${p.id}`,
    })),
  };

  // GEO 增量 C2：Vehicle + FAQPage 结构化数据，让 AI 能直接回答
  // "M6 能改什么 / 我的配置能装吗 / 佛山哪里能装" 类问题
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "问界 M6 轻改升级",
    brand: { "@type": "Brand", name: "问界" },
    model: "M6",
    category: "汽车轻改升级服务",
    description:
      "蓝辉轻改提供问界 M6 专属轻改方案参考，覆盖底盘护板、电动踏板、后排电视、小桌板、360软包脚垫等轻改项目。",
    url: "https://lanhui.com/product/wenjie/m6",
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
    makesOffer: wenjieM6PageConfig.projects.map((p) => ({
      "@type": "Offer",
      name: `问界 M6 ${p.name} 升级方案`,
      description: p.summary,
      category: p.category,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wenjieM6PageConfig.faq.map((faq) => ({
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
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col bg-zinc-950">
        <VehiclePageRenderer config={wenjieM6PageConfig} />

        <ElectricStepFitmentCard brandSlug="wenjie" modelSlug="m6" />

        {/* 底部 CTA */}
        <section
          className="py-16 md:py-20 bg-black border-t border-zinc-900"
          aria-labelledby="wenjie-m6-bottom-cta"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-widest text-orange-400 mb-3">
              NEXT STEP
            </p>
            <h2
              id="wenjie-m6-bottom-cta"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              问界 M6 升级方案 · 到店评估
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8">
              确认车型、配置和项目组合后到店评估，蓝辉轻改团队按标准流程施工。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/product"
                className="inline-flex items-center px-4 py-2.5 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-sm transition-colors"
              >
                返回产品中心
              </Link>
              <Link
                href="/product/wenjie"
                className="inline-flex items-center px-4 py-2.5 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-orange-700/60 text-sm transition-colors"
              >
                返回问界系列
              </Link>
            </div>
            <p className="text-xs text-zinc-600 mt-6 leading-relaxed">
              本页面展示的问界 M6 升级项目用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。具体项目以到店确认和实际施工评估为准。
            </p>
          </div>
        </section>

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
