import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GacSeriesHero } from "@/components/gac/series/GacSeriesHero";
import { GacModelGrid } from "@/components/gac/series/GacModelGrid";
import { GacProjectGrid } from "@/components/gac/series/GacProjectGrid";
import { GacFitmentDetails } from "@/components/gac/series/GacFitmentDetails";
import { GacFaqSection } from "@/components/gac/series/GacFaqSection";
import { GacDouyinCta } from "@/components/gac/series/GacDouyinCta";
import { GacMobileCtaBar } from "@/components/gac/series/GacMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { gacProjects } from "@/lib/gac-all-models-products";
import { gacModels } from "@/lib/gac-model-groups";
import { gacSeriesFaq } from "@/lib/gac-series-services";
import { gacFitment } from "@/lib/fitment/gac";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import type { FitmentModel, FitmentSpec } from "@/components/vehicle-page";
import { GAC_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

/**
 * 适配库节名 → 官方传祺车型（gacModels 30 款名单内）。
 * Aion/埃安/昊铂/世锐/祺智 等他品牌节、GS4 MAX/GM8 名单外车型、跨车型节不收录。
 */
const GAC_FITMENT_ALIAS: Record<string, string> = {
  "影速GS3": "GS3影速",
  "向往 M8宗师-136续航": "向往M8",
  "向往E8-281续航": "E8",
  "M8大师": "M8",
  "M8宗师": "M8",
  "向往M8插混-235续航-PHEVL": "向往M8",
  "向往M8插混248续航": "向往M8",
  "向往S7增程": "向往S7",
};

const GAC_FITMENT_EXCLUDE = new Set(["GS4 MAX", "GM8"]);

type FitmentRawSpec = {
  label?: string;
  material?: string;
  year?: string;
  note?: string;
  date?: string;
  dynamics?: string;
};

function toFitmentSpec(s: unknown): FitmentSpec {
  const r = s as FitmentRawSpec;
  return {
    label: r.label,
    material: r.material,
    year: r.year,
    note: r.note,
    date: r.date,
    dynamics: r.dynamics,
  };
}

function gacFitmentCanon(name: string): string | null {
  const n = name.trim();
  if (GAC_FITMENT_EXCLUDE.has(n)) return null;
  if (GAC_FITMENT_ALIAS[n]) return GAC_FITMENT_ALIAS[n];
  const compact = n.replace(/\s+/g, "");
  for (const m of gacModels) {
    if (compact === m.name.replace(/\s+/g, "")) return m.name;
  }
  return null;
}

function buildGacFitmentModels(): FitmentModel[] {
  const models: FitmentModel[] = [];
  const index = new Map<string, number>();
  for (const section of gacFitment.models) {
    const canon = gacFitmentCanon(section.model);
    if (!canon) continue;
    const projects = section.projects.map((p) => ({
      name: p.name,
      specs: p.specs.map(toFitmentSpec),
    }));
    const idx = index.get(canon);
    if (idx === undefined) {
      index.set(canon, models.length);
      models.push({ model: canon, projects });
    } else {
      models[idx].projects.push(...projects);
    }
  }
  return models;
}

const PAGE_TITLE =
  "广汽传祺全系保护与升级｜30 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）广汽传祺全系服务：底盘护板、电动踏板、小桌板、吸顶电视、脚垫尾箱 7 类专车适配件。30 款车型分组速览（轿车 9 / MPV 6 / SUV 15），按车型年款对照适配与材质档位，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "广汽传祺改装",
    "传祺底盘护板",
    "传祺电动踏板",
    "传祺吸顶电视",
    "传祺GS8",
    "传祺M8",
    "传祺GS4",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/gac" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: GAC_SERIES_HERO_IMAGE.src,
      width: GAC_SERIES_HERO_IMAGE.width,
      height: GAC_SERIES_HERO_IMAGE.height,
      alt: GAC_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function GacBrandPage() {
  const brand = getBrandRoute("gac");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/gac");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/gac");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...gacModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/gac#gac-fitment`,
    })),
    ...gacProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: gacModels.length + idx + 1,
      name: p.name,
      url: `/product/gac#gac-projects`,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: brand.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "广汽传祺全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  const fitmentConfig = {
    heading: "广汽传祺 适配速查：你的车型能装哪些项目？",
    models: buildGacFitmentModels(),
    groupByModel: true,
  };

  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "广汽传祺全系保护与升级",
    brand: { "@type": "Brand", name: "广汽传祺" },
    model: "广汽传祺全系 30 款",
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
    makesOffer: gacProjects.map((p) => ({
      "@type": "Offer",
      name: `广汽传祺 ${p.name}`,
      description: p.description,
      category: p.tagline,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gacSeriesFaq.map((faq) => ({
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
        <GacSeriesHero breadcrumbItems={breadcrumbItems} />
        <GacModelGrid />
        <GacProjectGrid />
        <GacFitmentDetails />
        <FitmentQuickCheck config={fitmentConfig} theme="red" />
        <GacFaqSection />
        <GacDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的广汽传祺车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <GacMobileCtaBar />
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
