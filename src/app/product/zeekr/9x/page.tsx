import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { ElectricStepFitmentCard } from "@/components/product/electric-steps/ElectricStepFitmentCard";
import { zeekr9xPageConfig } from "@/lib/zeekr-9x-page-config";
import {
  ZEEKR_9X_HERO_IMAGE,
  ZEEKR_9X_PROJECT_COUNT,
} from "@/lib/zeekr-9x-products";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import { getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

const CANONICAL_PATH = "/product/zeekr/9x";

const PAGE_TITLE =
  "极氪 9X 轻改升级方案｜车衣隔热膜彩绘双拼底盘护板｜蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改整理极氪 9X 18 项热门轻改产品：车衣、隔热膜、彩绘、双拼改色、360 软包脚垫、铝地板、平衡杆、轮毂、运动包围、刹车卡钳、门槛条、挡泥板、防虫网、钢化膜、底盘护板、硅胶垫套餐、牌照框、内饰镀膜。覆盖新车保护、外观个性、座舱防护、底盘与行车防护、高端质感 5 大用车场景，到店评估按标准流程施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "极氪 9X 轻改",
    "极氪 9X 改装",
    "极氪 9X 车衣",
    "极氪 9X 隔热膜",
    "极氪 9X 铝地板",
    "极氪 9X 彩绘",
    "极氪 9X 双拼改色",
    "蓝辉轻改",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ZEEKR_9X_HERO_IMAGE.publicPath
      ? [
          {
            url: ZEEKR_9X_HERO_IMAGE.publicPath,
            width: ZEEKR_9X_HERO_IMAGE.width ?? 1448,
            height: ZEEKR_9X_HERO_IMAGE.height ?? 1086,
            alt: ZEEKR_9X_HERO_IMAGE.alt,
          },
        ]
      : [],
    type: "article",
  },
};

export default function Zeekr9xPage() {
  const brand = getBrandRoute("zeekr");
  const model = getModelRoute("zeekr", "9x");
  if (!brand || brand.type !== "vehicle_brand") notFound();
  if (!model || model.type !== "vehicle_model") notFound();

  const breadcrumbSchema = getProductBreadcrumbSchema("/product/zeekr/9x");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "极氪 9X 专属升级方案",
    numberOfItems: ZEEKR_9X_PROJECT_COUNT,
    itemListElement: zeekr9xPageConfig.projects.map((p, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: p.name,
      category: p.category,
      url: `${CANONICAL_PATH}#zeekr-9x-project-${p.id}`,
    })),
  };

  // GEO 增量 C2：Vehicle + FAQPage 结构化数据，让 AI 能直接回答
  // "9X 能改什么 / 我的配置能装吗 / 佛山哪里能装" 类问题
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "极氪 9X 轻改升级",
    brand: { "@type": "Brand", name: "极氪" },
    model: "9X",
    category: "汽车轻改升级服务",
    description:
      "蓝辉轻改提供极氪 9X 专属轻改方案参考，覆盖底盘护板、地板、小桌板、包围、全包坐垫、后备箱垫等轻改项目。",
    url: "https://lanhui.com/product/zeekr/9x",
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
    makesOffer: zeekr9xPageConfig.projects.map((p) => ({
      "@type": "Offer",
      name: `极氪 9X ${p.name} 升级方案`,
      description: p.summary,
      category: p.category,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: zeekr9xPageConfig.faq.map((faq) => ({
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


        <VehiclePageRenderer config={zeekr9xPageConfig} />

        <ElectricStepFitmentCard brandSlug="zeekr" modelSlug="9x" />

        {/* Footer CTA */}
        <section className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-widest text-orange-400 mb-3">
              NEXT STEP
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              极氪 9X 升级方案 · 到店评估
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
                href="/product/zeekr"
                className="inline-flex items-center px-4 py-2.5 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-orange-700/60 text-sm transition-colors"
              >
                查看极氪系列
              </Link>
            </div>
            <p className="text-xs text-zinc-600 mt-6 leading-relaxed">
              本页面展示的极氪 9X 升级项目用于蓝辉轻改服务介绍，&ldquo;极氪&rdquo;与&ldquo;9X&rdquo;等商标及车型名称仅用于说明适配对象。
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
