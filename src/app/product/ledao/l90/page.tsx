import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { ElectricStepFitmentCard } from "@/components/product/electric-steps/ElectricStepFitmentCard";
import { ledaoL90PageConfig } from "@/lib/ledao-l90-page-config";
import {
  LEDAO_L90_HERO_IMAGE,
  ledaoL90UpgradeProjects,
  ledaoL90Scenarios,
} from "@/lib/ledao-l90-products";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import { getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

const PAGE_TITLE = "乐道 L90 轻改项目｜车衣、隔热膜、铝地板、底盘护板与电动踏板｜蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改整理乐道 L90 21 项热门轻改产品：车衣、隔热膜、彩绘、双拼改色、悬浮顶、铝地板、平衡杆、小桌板、运动包围、360脚垫、底盘护板、轮毂、门槛条、钢化膜等。覆盖新车保护、外观个性、座舱防护、底盘与行车防护、高端质感 5 大用车场景，到店评估按标准流程施工。";

export const metadata: Metadata = {
  alternates: { canonical: "/product/ledao/l90" },
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "乐道 L90 轻改",
    "乐道 L90 改装",
    "乐道 L90 车衣",
    "乐道 L90 隔热膜",
    "乐道 L90 铝地板",
    "乐道 L90 底盘护板",
    "蓝辉轻改",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: LEDAO_L90_HERO_IMAGE.publicPath
      ? [
          {
            url: LEDAO_L90_HERO_IMAGE.publicPath,
            width: LEDAO_L90_HERO_IMAGE.width ?? 1448,
            height: LEDAO_L90_HERO_IMAGE.height ?? 1086,
            alt: LEDAO_L90_HERO_IMAGE.alt,
          },
        ]
      : [],
    type: "article",
  },
};

export default function LedaoL90TopicPage() {
  const brand = getBrandRoute("ledao");
  const model = getModelRoute("ledao", "l90");
  if (!brand || brand.type !== "vehicle_brand") notFound();
  if (!model || model.type !== "vehicle_model") notFound();

  const totalProjects = ledaoL90UpgradeProjects.length;
  const totalScenarios = ledaoL90Scenarios.length;
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/ledao/l90");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "乐道 L90 专属升级方案",
    numberOfItems: ledaoL90UpgradeProjects.length,
    itemListElement: ledaoL90UpgradeProjects.map((p) => ({
      "@type": "ListItem" as const,
      position: p.order,
      name: p.name,
      category: p.category,
      url: `/product/ledao/l90#ledao-l90-project-${p.id}`,
    })),
  };

  // GEO 增量 C2：Vehicle + FAQPage 结构化数据，让 AI 能直接回答
  // "L90 能改什么 / 我的配置能装吗 / 佛山哪里能装" 类问题
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "乐道 L90 轻改升级",
    brand: { "@type": "Brand", name: "乐道" },
    model: "L90",
    category: "汽车轻改升级服务",
    description: PAGE_DESCRIPTION,
    url: "https://lanhui.com/product/ledao/l90",
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
    makesOffer: ledaoL90PageConfig.projects.map((p) => ({
      "@type": "Offer",
      name: `乐道 L90 ${p.name} 升级方案`,
      description: p.summary,
      category: p.category,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ledaoL90PageConfig.faq.map((faq) => ({
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


        <VehiclePageRenderer config={ledaoL90PageConfig} />

        <ElectricStepFitmentCard brandSlug="ledao" modelSlug="l90" />

        <section className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-widest text-orange-400 mb-3">
              NEXT STEP
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              乐道 L90 升级方案 · 到店评估
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
                href="/product/ledao"
                className="inline-flex items-center px-4 py-2.5 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-orange-700/60 text-sm transition-colors"
              >
                查看乐道系列
              </Link>
            </div>
            <p className="text-xs text-zinc-600 mt-6 leading-relaxed">
              本页面展示的乐道 L90 升级项目用于蓝辉轻改服务介绍，乐道与 L90
              等商标及车型名称仅用于说明适配对象。
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
