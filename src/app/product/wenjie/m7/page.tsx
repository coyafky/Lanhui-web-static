import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModelRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { ElectricStepFitmentCard } from "@/components/product/electric-steps/ElectricStepFitmentCard";
import { wenjieM7PageConfig } from "@/lib/wenjie-m7-page-config";
import { wenjieM7UpgradeProjects } from "@/lib/wenjie-m7-upgrade-projects";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE =
  "问界 M7 专属升级方案｜30 个升级项目（必改、商务、实用）｜蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改整理问界 M7 30 个升级项目，分必改产品、高级商务升级、实用小配件 3 层，覆盖新车保护、商务接待、家庭座舱 7 大场景。";
const HERO_IMAGE = wenjieM7PageConfig.hero.heroImage;

export const metadata: Metadata = {
  alternates: { canonical: "/product/wenjie/m7" },
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "问界M7",
    "问界M7改装",
    "车衣",
    "隔热膜",
    "电动踏板",
    "三防软包脚垫",
    "商务升级",
    "蓝辉轻改",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: HERO_IMAGE.src,
      width: HERO_IMAGE.width,
      height: HERO_IMAGE.height,
      alt: HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function WenjieM7Page() {
  const model = getModelRoute("wenjie", "m7");
  if (!model || model.type !== "vehicle_model") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/wenjie/m7");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/wenjie/m7");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "问界 M7 专属升级方案",
    description: PAGE_DESCRIPTION,
    itemListElement: wenjieM7UpgradeProjects.map((p) => ({
      "@type": "ListItem",
      position: p.order,
      name: `问界 M7 ${p.name} 升级项目`,
      url: `/product/wenjie/m7#${p.id}`,
    })),
  };

  // GEO 增量 C2：Vehicle + FAQPage 结构化数据，让 AI 能直接回答
  // "M7 能改什么 / 我的配置能装吗 / 佛山哪里能装" 类问题
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "问界 M7 轻改升级",
    brand: { "@type": "Brand", name: "问界" },
    model: "M7",
    category: "汽车轻改升级服务",
    description:
      "蓝辉轻改提供问界 M7 专属轻改方案参考，覆盖底盘护板、电动踏板、地板、小桌板、后排电视、360软包脚垫等轻改项目。",
    url: "https://lanhui.com/product/wenjie/m7",
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
    makesOffer: wenjieM7PageConfig.projects.map((p) => ({
      "@type": "Offer",
      name: `问界 M7 ${p.name} 升级方案`,
      description: p.summary,
      category: p.category,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wenjieM7PageConfig.faq.map((faq) => ({
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
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">
        <VehiclePageRenderer config={wenjieM7PageConfig} />

        <ElectricStepFitmentCard brandSlug="wenjie" modelSlug="m7" />

        {/* 底部导航 + 合规说明 */}
        <section className="py-12 md:py-16 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              想为你的问界 M7 选几款升级？
            </h2>
            <p className="text-zinc-400 mb-6">
              按必改、商务和实用小配件三层结构浏览项目，确认适合自己的升级方向。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/product/wenjie"
                className="inline-flex items-center px-4 py-2 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-cyan-700/60 text-sm"
              >
                返回问界系列
              </Link>
            </div>
            <p className="text-xs text-zinc-500 mt-6">
              本页面展示的问界 M7 升级项目用于蓝辉轻改服务介绍，车型名称仅用于说明适配对象。
            </p>
          </div>
        </section>

        {/* JSON-LD 结构化数据 */}
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
