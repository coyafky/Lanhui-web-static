import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BmwSeriesHero } from "@/components/bmw/series/BmwSeriesHero";
import { BmwModelGrid } from "@/components/bmw/series/BmwModelGrid";
import { BmwProjectGrid } from "@/components/bmw/series/BmwProjectGrid";
import { BmwFitmentDetails } from "@/components/bmw/series/BmwFitmentDetails";
import { BmwFaqSection } from "@/components/bmw/series/BmwFaqSection";
import { BmwDouyinCta } from "@/components/bmw/series/BmwDouyinCta";
import { BmwMobileCtaBar } from "@/components/bmw/series/BmwMobileCtaBar";
import { getBrandRoute } from "@/lib/product-routes";
import {
  getProductBreadcrumbs,
  getProductBreadcrumbSchema,
} from "@/lib/product-breadcrumbs";
import { bmwProjects } from "@/lib/bmw-all-models-products";
import { bmwModels } from "@/lib/bmw-model-groups";
import { bmwSeriesFaq } from "@/lib/bmw-series-services";
import { bmwFitment } from "@/lib/fitment/bmw";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import type { FitmentModel, FitmentSpec } from "@/components/vehicle-page";
import { BMW_SERIES_HERO_IMAGE } from "@/lib/brand-series-hero-images";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { safeJsonLd } from "@/lib/json-ld";

/**
 * 供应商适配库车型节 → 官方车型（bmwModels 29 款名单内）。
 * 精确匹配；或以官方 slug 开头且带车身形式/年款/绒布档位/削边/右呔等细分标记。
 * 「全新X5/全新宝马X6」等全新前缀节、「X4/X4M」跨车型节不收录。
 */
const BMW_FITMENT_REST =
  /^(\s|i\b|Li|L\b|Le\b|EV\b|M\b| m|纯电|纯电动|新能源|GT|轿跑|敞篷|旅行|两厢|三厢|右钛|右呔|原车|前排|高配|低配|高绒|矮绒|削边|2门|高配4座)/;

function bmwFitmentCanon(name: string): string | null {
  const n = name.trim();
  const low = n.toLowerCase();
  const slugs = bmwModels.map((m) => m.slug);
  for (const c of slugs) if (low === c.toLowerCase()) return c;
  for (const c of [...slugs].sort((a, b) => b.length - a.length)) {
    if (low.startsWith(c.toLowerCase())) {
      const rest = n.slice(c.length);
      if (rest === "" || BMW_FITMENT_REST.test(rest)) return c;
    }
  }
  return null;
}

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

function buildBmwFitmentModels(): FitmentModel[] {
  const models: FitmentModel[] = [];
  const index = new Map<string, number>();
  for (const section of bmwFitment.models) {
    const canon = bmwFitmentCanon(section.model);
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
  "宝马全系保护与升级｜29 款车型适配件速查｜顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）宝马全系服务：360 软包脚垫、平面尾箱垫、360 全包尾箱 3 类专车适配件。29 款车型按车系分组速览（轿车 8 / 纯电 i 7 / M 高性能 6 / X SUV 7 / 跑车 1），按车型年款对照版本变体与实车要点，到店施工。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "宝马改装",
    "宝马360软包脚垫",
    "宝马平面尾箱垫",
    "宝马360全包尾箱",
    "宝马3系",
    "宝马5系",
    "宝马X5",
    "宝马i3",
    "顺德汽车改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/bmw" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: BMW_SERIES_HERO_IMAGE.src,
      width: BMW_SERIES_HERO_IMAGE.width,
      height: BMW_SERIES_HERO_IMAGE.height,
      alt: BMW_SERIES_HERO_IMAGE.alt,
    }],
    type: "article",
  },
};

export default function NissanBrandPage() {
  const brand = getBrandRoute("bmw");
  if (!brand || brand.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs("/product/bmw");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/bmw");
  const localStore = stores.find((s) => s.isActive);

  const itemListElement = [
    ...bmwModels.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${m.name} 适配件`,
      url: `/product/bmw#bmw-fitment`,
    })),
    ...bmwProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: bmwModels.length + idx + 1,
      name: p.name,
      url: `/product/bmw#bmw-projects`,
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
      name: "宝马全系适配件",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
    ...(localStore && {
      provider: generateLocalBusinessSchema(localStore),
    }),
  };

  const fitmentConfig = {
    heading: "宝马 适配速查：你的车型能装哪些项目？",
    models: buildBmwFitmentModels(),
    groupByModel: true,
  };

  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "宝马全系轻改升级",
    brand: { "@type": "Brand", name: "宝马" },
    model: "宝马全系 29 款",
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
    makesOffer: bmwProjects.map((p) => ({
      "@type": "Offer",
      name: `宝马 ${p.name}`,
      description: p.description,
      category: p.tagline,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bmwSeriesFaq.map((faq) => ({
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
        <BmwSeriesHero breadcrumbItems={breadcrumbItems} />
        <BmwModelGrid />
        <BmwProjectGrid />
        <BmwFitmentDetails />
        <FitmentQuickCheck config={fitmentConfig} theme="blue" />
        <BmwFaqSection />
        <BmwDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面展示的宝马车型升级服务用于蓝辉轻改服务介绍，品牌与车型名称仅用于说明适配对象。
            适装信息供参考，实际安装以门店现场检查（车型年款、底盘结构、电路走向）为准。
          </p>
        </section>

        <BmwMobileCtaBar />
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
