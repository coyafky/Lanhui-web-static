import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import {
  XIAOMI_YU7_PROJECT_COUNT,
  XIAOMI_YU7_HERO_IMAGE,
} from "@/lib/xiaomi-yu7-upgrade-projects";
import { xiaomiYu7PageConfig } from "@/lib/xiaomi-yu7-page-config";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { ElectricStepFitmentCard } from "@/components/product/electric-steps/ElectricStepFitmentCard";
import { safeJsonLd } from "@/lib/json-ld";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";

export const metadata: Metadata = {
  title: "小米 YU7 轻改项目｜碳纤维内饰翻毛皮包裹包围尾翼｜蓝辉轻改",
  description:
    "蓝辉轻改提供小米 YU7 轻改项目参考，共 30 项，覆盖碳纤维表台饰板、碳纤维出风口、碳纤维方向盘等碳纤维内饰，四门门板翻毛皮、中控仪表台包裹等翻毛皮包裹，以及干碳侧裙、碳纤维后扰流板、运动包围等包围尾翼外观件，具体适配以门店实车评估为准。",
  alternates: {
    canonical: "/product/xiaomi/yu7",
  },
  openGraph: {
    title: "小米 YU7 轻改项目｜碳纤维内饰翻毛皮包裹包围尾翼｜蓝辉轻改",
    description:
      "蓝辉轻改提供小米 YU7 轻改项目参考，共 30 项，覆盖碳纤维表台饰板、碳纤维出风口、碳纤维方向盘等碳纤维内饰，四门门板翻毛皮、中控仪表台包裹等翻毛皮包裹，以及干碳侧裙、碳纤维后扰流板、运动包围等包围尾翼外观件，具体适配以门店实车评估为准。",
    images: [
      {
        url: XIAOMI_YU7_HERO_IMAGE.publicPath,
        width: XIAOMI_YU7_HERO_IMAGE.width,
        height: XIAOMI_YU7_HERO_IMAGE.height,
        alt: XIAOMI_YU7_HERO_IMAGE.alt,
      },
    ],
    type: "article",
  },
};

export default async function XiaomiYu7Page() {
  const brand = getBrandRoute("xiaomi");
  const model = getModelRoute("xiaomi", "yu7");
  if (!brand || brand.type !== "vehicle_brand") notFound();
  if (!model || model.type !== "vehicle_model") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/xiaomi/yu7");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/xiaomi/yu7");
  const localStore = stores.find((s) => s.isActive);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "小米 YU7 轻改项目",
    url: "https://lanhui.com/product/xiaomi/yu7",
    numberOfItems: XIAOMI_YU7_PROJECT_COUNT,
    itemListElement: xiaomiYu7PageConfig.projects.map((p, i) => ({
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
  // "YU7 能改什么 / 我的配置能装吗 / 佛山哪里能装" 类问题
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "小米 YU7 轻改升级",
    brand: { "@type": "Brand", name: "小米" },
    model: "YU7",
    category: "汽车轻改升级服务",
    description:
      "蓝辉轻改提供小米 YU7 专属轻改方案参考，覆盖底盘护板、干碳件、车衣、隔热膜、360软包脚垫等轻改项目。",
    url: "https://lanhui.com/product/xiaomi/yu7",
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
    makesOffer: xiaomiYu7PageConfig.projects.map((p) => ({
      "@type": "Offer",
      name: `小米 YU7 ${p.name} 升级方案`,
      description: p.summary,
      category: p.category,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: xiaomiYu7PageConfig.faq.map((faq) => ({
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
        <VehiclePageRenderer config={xiaomiYu7PageConfig} />

        <ElectricStepFitmentCard brandSlug="xiaomi" modelSlug="yu7" />

        {/* CTA section */}
        <section className="py-16 md:py-20 bg-black border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-widest text-orange-400 mb-3">
              NEXT STEP
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              佛山哪里能改小米 SU7 / YU7 内饰？
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-3">
              蓝辉轻改顺德大良店 · 电话 18825425068 · 服务品类「小米 SU7 / YU7 轻改：碳纤维内饰、翻毛皮包裹、包围尾翼、全车项目」。
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              不同批次和配置存在差异，具体适配请到店评估确认，按标准流程施工。
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

        {/* JSON-LD */}
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
