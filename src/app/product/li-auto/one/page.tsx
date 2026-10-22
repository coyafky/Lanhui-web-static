import type { Metadata } from "next";
import Link from "next/link";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { ElectricStepFitmentCard } from "@/components/product/electric-steps/ElectricStepFitmentCard";
import { liAutoOnePageConfig } from "@/lib/li-auto-one-page-config";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import {
  liAutoOneUpgradeProjects,
  LI_AUTO_ONE_PROJECT_COUNT,
} from "@/lib/li-auto-one-products";
import { safeJsonLd } from "@/lib/json-ld";

const MODEL_KEY = "ONE" as const;
const MODEL_NAME = "理想 ONE";
const CANONICAL_PATH = "/product/li-auto/one";

const PAGE_TITLE = "理想 ONE 轻改升级方案｜隐形车衣隔热膜电动踏板车顶平台｜蓝辉轻改";
const PAGE_DESCRIPTION = "蓝辉轻改整理理想 ONE 专属轻改方案参考，覆盖隐形车衣、隔热膜、改色膜、小桌板、氛围灯、电动踏板、旋转座椅和车顶平台加爬梯等 8 项项目。";
const HERO_IMAGE = liAutoOnePageConfig.hero.heroImage;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "理想 ONE 轻改", "理想 ONE 改装", "理想 ONE 车衣",
    "理想 ONE 隔热膜", "理想 ONE 改色膜", "理想 ONE 小桌板",
    "理想 ONE 电动踏板", "理想 ONE 车顶平台", "蓝辉轻改",
  ],
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: HERO_IMAGE
      ? [{
          url: HERO_IMAGE.src,
          width: HERO_IMAGE.width,
          height: HERO_IMAGE.height,
          alt: HERO_IMAGE.alt,
        }]
      : [],
    type: "article",
  },
};

export default function LiAutoOnePage() {
  const breadcrumbItems = getProductBreadcrumbs(CANONICAL_PATH);
  const breadcrumbSchema = getProductBreadcrumbSchema(CANONICAL_PATH);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${MODEL_NAME} 专属轻改方案`,
    numberOfItems: liAutoOneUpgradeProjects.length,
    itemListElement: liAutoOneUpgradeProjects.map((p) => ({
      "@type": "ListItem" as const,
      position: p.order,
      name: p.name,
      category: p.category,
      url: `${CANONICAL_PATH}#${p.key}`,
    })),
  };

  // GEO 增量 C2：Vehicle + FAQPage 结构化数据，让 AI 能直接回答
  // "ONE 能改什么 / 我的配置能装吗 / 佛山哪里能装" 类问题
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "理想 ONE 轻改升级",
    brand: { "@type": "Brand", name: "理想" },
    model: "ONE",
    category: "汽车轻改升级服务",
    description: PAGE_DESCRIPTION,
    url: `https://lanhui.com${CANONICAL_PATH}`,
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
    makesOffer: liAutoOnePageConfig.projects.map((p) => ({
      "@type": "Offer",
      name: `理想 ONE ${p.name} 升级方案`,
      description: p.summary,
      category: p.category,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: liAutoOnePageConfig.faq.map((faq) => ({
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


        <VehiclePageRenderer config={liAutoOnePageConfig} />

        <ElectricStepFitmentCard brandSlug="li-auto" modelSlug="one" />

        <section className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-widest text-amber-400 mb-3">NEXT STEP</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{`${MODEL_NAME} 升级方案 · 到店评估`}</h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8">确认车型、配置和项目组合后到店评估，蓝辉轻改团队按标准流程施工。</p>
            <Link href="/product/li-auto" className="inline-flex items-center px-4 py-2.5 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-amber-700/60 text-sm transition-colors">
              返回理想系列
            </Link>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
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
