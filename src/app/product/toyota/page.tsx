import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToyotaSeriesHero } from "@/components/toyota/series/ToyotaSeriesHero";
import { ToyotaModelGrid } from "@/components/toyota/series/ToyotaModelGrid";
import { ToyotaProjectGrid } from "@/components/toyota/series/ToyotaProjectGrid";
import { ToyotaSubpageCards } from "@/components/toyota/series/ToyotaSubpageCards";
import { ToyotaWheelsEntry } from "@/components/toyota/series/ToyotaWheelsEntry";
import { ToyotaFaqSection } from "@/components/toyota/series/ToyotaFaqSection";
import { ToyotaDouyinCta } from "@/components/toyota/series/ToyotaDouyinCta";
import { ToyotaMobileCtaBar } from "@/components/toyota/series/ToyotaMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { toyotaProjects } from "@/lib/toyota-all-models-products";
import { toyotaModels } from "@/lib/toyota-model-groups";
import { toyotaSeriesFaq } from "@/lib/toyota-series-services";
import { toyotaFitment } from "@/lib/fitment/toyota";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import type { FitmentModel, FitmentSpec } from "@/components/vehicle-page";
import { TOYOTA_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

/**
 * 适配库节过滤：官方车型名（toyotaModels）精确匹配 + 座椅布局/年款变体节；
 * 跨车型、编码、无意义（款式01-09）与官方名单外拼写节不收录。
 */
const TOYOTA_VARIANT_SECTIONS = new Set([
  "超霸4RUNNER",
  "超霸4RUNNER 原车7座做5座",
  "超霸4RUNNER 原车7座做7座",
  "iA5 纯电动",
  "酷路泽 原车7座做5座",
  "酷路泽 原车7座做7座",
  "酷路泽 7位做5位",
  "陆地巡洋舰 原车7座做5座",
  "陆地巡洋舰 原车5座",
  "兰德酷路泽LC100",
  "兰德酷路泽LC120",
  "兰德酷路泽LC150",
  "兰德酷路泽LC200",
  "兰德酷路泽LC250",
  "兰德酷路泽LC300",
  "兰德酷路泽LC71",
  "兰德酷路泽LC76",
  "兰德酷路泽LC78",
  "兰德酷路泽LC79",
  "兰德酷路泽LC80",
  "兰德酷路泽LC95",
]);

function buildToyotaFitmentModels(): FitmentModel[] {
  const official = new Set(toyotaModels.map((m) => m.name));
  // 适配库存在同名重复节（如 iA5），按节名合并项目，避免渲染重复 key
  const merged = new Map<string, FitmentModel>();
  for (const section of toyotaFitment.models) {
    if (!official.has(section.model) && !TOYOTA_VARIANT_SECTIONS.has(section.model)) {
      continue;
    }
    const projects = section.projects.map((p) => ({
      name: p.name,
      specs: p.specs.map((raw): FitmentSpec => {
        const s = raw as {
          label?: string;
          material?: string;
          year?: string;
          note?: string;
          date?: string;
          dynamics?: string;
        };
        return {
          label: s.label,
          material: s.material,
          year: s.year,
          note: s.note,
          date: s.date,
          dynamics: s.dynamics,
        };
      }),
    }));
    const existing = merged.get(section.model);
    if (existing) {
      existing.projects.push(...projects);
    } else {
      merged.set(section.model, { model: section.model, projects });
    }
  }
  return [...merged.values()];
}

const PAGE_TITLE =
  "丰田全系保护与舒适升级｜49 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）丰田全系服务：脚垫、尾箱垫、底盘护板、电动踏板、小桌板、吸顶电视、后排娱乐屏 8 类专车适配件 + 轮毂两线（旋压 / 锻造）。49 款车型分组速览，按车型年款对照适配，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "丰田改装",
    "丰田脚垫",
    "丰田底盘护板",
    "丰田电动踏板",
    "丰田轮毂",
    "卡罗拉",
    "汉兰达",
    "RAV4荣放",
    "普拉多",
    "兰德酷路泽",
    "埃尔法",
    "顺德汽车贴膜",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/toyota" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: TOYOTA_SERIES_HERO_IMAGE.src,
      width: TOYOTA_SERIES_HERO_IMAGE.width,
      height: TOYOTA_SERIES_HERO_IMAGE.height,
      alt: TOYOTA_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function ToyotaBrandPage() {
  const brand = getBrandRoute("toyota");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/toyota");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/toyota");
  const localStore = stores.find((s) => s.isActive);
  const featured = toyotaModels.filter((m) => m.subpage);

  const itemListElement = [
    ...featured.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件明细`,
      url: `/product/toyota/${m.slug}`,
    })),
    ...toyotaProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: featured.length + idx + 1,
      name: p.name,
      url: `/product/toyota#toyota-projects`,
    })),
    {
      "@type": "ListItem",
      position: featured.length + toyotaProjects.length + 1,
      name: "丰田轮毂（旋压 / 锻造）",
      url: `/product/toyota/wheels`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "丰田全系适配件与轮毂",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  // 供应商适配库速查：官方车型精确匹配 + 座椅布局/年款变体节，按车型分组渲染
  const fitmentConfig = {
    heading: "丰田 适配速查：你的车型能装哪些项目？",
    models: buildToyotaFitmentModels(),
    groupByModel: true,
  };

  // GEO 增量：Vehicle + FAQPage 结构化数据
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "丰田全系轻改升级",
    brand: { "@type": "Brand", name: "丰田" },
    model: "丰田全系 49 款车型",
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
    makesOffer: toyotaProjects.map((p) => ({
      "@type": "Offer",
      name: `丰田 ${p.name} 方案`,
      description: p.feature,
      category: p.id,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: toyotaSeriesFaq.map((faq) => ({
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
        <ToyotaSeriesHero breadcrumbItems={breadcrumbItems} />
        <ToyotaModelGrid />
        <ToyotaProjectGrid />
        <ToyotaSubpageCards />
        <ToyotaWheelsEntry />
        <FitmentQuickCheck config={fitmentConfig} theme="red" />
        <ToyotaFaqSection />
        <ToyotaDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的丰田车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、座椅布局、底盘结构、电路走向）为准。
            文中「360°」指全包工艺，非品牌名。
          </p>
        </section>

        <ToyotaMobileCtaBar />
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
