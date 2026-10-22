import type { Metadata } from "next";
import Link from "next/link";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { ElectricStepFitmentCard } from "@/components/product/electric-steps/ElectricStepFitmentCard";
import { liAutoMegaPageConfig } from "@/lib/li-auto-mega-page-config";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import {
  liAutoMegaUpgradeProjects,
  LI_AUTO_MEGA_PROJECT_COUNT,
} from "@/lib/li-auto-mega-products";
import { safeJsonLd } from "@/lib/json-ld";

const MODEL_KEY = "MEGA" as const;
const MODEL_NAME = "理想 MEGA";
const CANONICAL_PATH = "/product/li-auto/mega";

const PAGE_TITLE =
  "理想 MEGA 轻改升级方案｜车衣隔热膜铝地板电吸门小桌板｜蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改整理理想 MEGA 专属升级方案参考，覆盖车衣、隔热膜、彩绘、双拼改色、铝地板、平衡杆、360 软包脚垫、底盘护板、包围、防虫网、尾翼、主副驾电吸门、刹车卡钳、迎宾踏板、小桌板、大灯、轮毂和内饰镀膜等 18 项项目。新车保护、商务座舱、外观个性、行车防护与灯光细节 5 大场景，到店评估、按标准流程施工。";
const HERO_IMAGE = liAutoMegaPageConfig.hero.heroImage;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "理想 MEGA 轻改",
    "理想 MEGA 改装",
    "理想 MEGA 车衣",
    "理想 MEGA 隔热膜",
    "理想 MEGA 铝地板",
    "理想 MEGA 电吸门",
    "理想 MEGA 小桌板",
    "理想 MEGA 底盘护板",
    "蓝辉轻改",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
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

export default function LiAutoMegaPage() {
  const breadcrumbItems = getProductBreadcrumbs(CANONICAL_PATH);
  const breadcrumbSchema = getProductBreadcrumbSchema(CANONICAL_PATH);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${MODEL_NAME} 专属升级方案`,
    numberOfItems: liAutoMegaUpgradeProjects.length,
    itemListElement: liAutoMegaUpgradeProjects.map((p) => ({
      "@type": "ListItem" as const,
      position: p.order,
      name: p.name,
      category: p.category,
      url: `${CANONICAL_PATH}#project-${p.key}`,
    })),
  };

  // GEO 增量 C2：Vehicle + FAQPage 结构化数据，让 AI 能直接回答
  // "MEGA 能改什么 / 我的配置能装吗 / 佛山哪里能装" 类问题
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "理想 MEGA 轻改升级",
    brand: { "@type": "Brand", name: "理想" },
    model: "MEGA",
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
    makesOffer: liAutoMegaPageConfig.projects.map((p) => ({
      "@type": "Offer",
      name: `理想 MEGA ${p.name} 升级方案`,
      description: p.summary,
      category: p.category,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: liAutoMegaPageConfig.faq.map((faq) => ({
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


        <VehiclePageRenderer config={liAutoMegaPageConfig} />

        <ElectricStepFitmentCard brandSlug="li-auto" modelSlug="mega" />

        <section className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/product/li-auto"
              className="inline-flex items-center px-4 py-2.5 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-amber-700/60 text-sm transition-colors"
            >
              返回理想系列
            </Link>
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
