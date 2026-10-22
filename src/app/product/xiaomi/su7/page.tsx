import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import { getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import {
  XIAOMI_SU7_PROJECT_COUNT,
  XIAOMI_SU7_HERO_IMAGE,
} from "@/lib/xiaomi-su7-upgrade-projects";
import { xiaomiSu7PageConfig } from "@/lib/xiaomi-su7-page-config";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { ElectricStepFitmentCard } from "@/components/product/electric-steps/ElectricStepFitmentCard";
import { safeJsonLd } from "@/lib/json-ld";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";

export const metadata: Metadata = {
  title: "小米 SU7 轻改项目｜车衣隔热膜运动机盖方向盘｜蓝辉轻改",
  description:
    "蓝辉轻改提供小米 SU7 专属轻改方案参考，共 42 项轻改项目，覆盖碳纤维内饰、翻毛皮包裹、包围尾翼、干碳侧裙、电动尾翼、车衣、隔热膜、360软包脚垫、底盘护板、运动方向盘等。",
  alternates: {
    canonical: "/product/xiaomi/su7",
  },
  openGraph: {
    title: "小米 SU7 轻改项目｜车衣隔热膜运动机盖方向盘｜蓝辉轻改",
    description:
      "蓝辉轻改提供小米 SU7 专属轻改方案参考，共 42 项轻改项目，覆盖碳纤维内饰、翻毛皮包裹、包围尾翼、干碳侧裙、电动尾翼、车衣、隔热膜、360软包脚垫、底盘护板、运动方向盘等。",
    images: [
      {
        url: XIAOMI_SU7_HERO_IMAGE.publicPath,
        width: XIAOMI_SU7_HERO_IMAGE.width,
        height: XIAOMI_SU7_HERO_IMAGE.height,
        alt: XIAOMI_SU7_HERO_IMAGE.alt,
      },
    ],
    type: "article",
  },
};

export default async function XiaomiSu7Page() {
  const brand = getBrandRoute("xiaomi");
  const model = getModelRoute("xiaomi", "su7");
  if (!brand || brand.type !== "vehicle_brand") notFound();
  if (!model || model.type !== "vehicle_model") notFound();

  const breadcrumbSchema = getProductBreadcrumbSchema("/product/xiaomi/su7");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "小米 SU7 轻改项目",
    url: "https://lanhui.com/product/xiaomi/su7",
    numberOfItems: XIAOMI_SU7_PROJECT_COUNT,
    itemListElement: xiaomiSu7PageConfig.projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.summary,
        category: p.category,
      },
    })),
  };

  // GEO 增量 C2：Vehicle + FAQPage 结构化数据，让 AI 能直接回答
  // "SU7 能改什么 / 我的配置能装吗 / 佛山哪里能装" 类问题
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "小米 SU7 轻改升级",
    brand: { "@type": "Brand", name: "小米" },
    model: "SU7",
    category: "汽车轻改升级服务",
    description:
      "蓝辉轻改提供小米 SU7 专属轻改方案参考，共 42 项轻改项目，覆盖碳纤维内饰、翻毛皮包裹、包围尾翼、干碳侧裙、电动尾翼、车衣、隔热膜、360软包脚垫、底盘护板等。",
    url: "https://lanhui.com/product/xiaomi/su7",
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
    makesOffer: xiaomiSu7PageConfig.projects.map((p) => ({
      "@type": "Offer",
      name: `小米 SU7 ${p.name} 升级方案`,
      description: p.summary,
      category: p.category,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: xiaomiSu7PageConfig.faq.map((faq) => ({
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
        <VehiclePageRenderer config={xiaomiSu7PageConfig} />

        <ElectricStepFitmentCard brandSlug="xiaomi" modelSlug="su7" />

        <section className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-widest text-orange-400 mb-3">
              NEXT STEP
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              佛山哪里能改小米 SU7 / YU7 内饰？
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              蓝辉轻改顺德大良店 · 电话 18825425068 · 服务品类「小米 SU7 / YU7 轻改：碳纤维内饰、翻毛皮包裹、包围尾翼、全车项目」。不同批次和配置存在差异，具体适配请到店确认，门店提供到店评估和按标准流程施工服务。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/product/xiaomi"
                className="inline-flex items-center px-4 py-2 rounded-md border border-orange-900/60 bg-orange-950/30 text-orange-300 hover:text-orange-200 hover:border-orange-700/60 text-sm transition-colors"
              >
                查看小米系列
              </a>
              <a
                href="/product"
                className="inline-flex items-center px-4 py-2 rounded-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-sm transition-colors"
              >
                返回产品中心
              </a>
            </div>
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
        {localStore && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: safeJsonLd(generateLocalBusinessSchema(localStore)),
            }}
          />
        )}
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
