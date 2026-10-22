import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlooringHero } from "@/components/product/flooring/FlooringHero";
import { FlooringScenarioSection } from "@/components/product/flooring/FlooringScenarioSection";
import { FlooringStructureGrid } from "@/components/product/flooring/FlooringStructureGrid";
import { FlooringFitmentBrowser } from "@/components/product/flooring/FlooringFitmentBrowser";
import { FlooringAccessories } from "@/components/product/flooring/FlooringAccessories";
import { FlooringCaseShowcase } from "@/components/product/flooring/FlooringCaseShowcase";
import { FlooringFaqSection } from "@/components/product/flooring/FlooringFaqSection";
import { FlooringLocalStore } from "@/components/product/flooring/FlooringLocalStore";
import { FlooringDouyinCta } from "@/components/product/flooring/FlooringDouyinCta";
import {
  flooringVehicleGroups,
  flooringFaqs,
  flooringServiceFaqs,
  flooringFitmentEntries,
} from "@/lib/flooring-products";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "汽车地板改装｜把难打理的后排，变成每天都好收拾的空间｜蓝辉轻改 LANHUI",
  description:
    "孩子零食、雨天泥水、滑轨积灰——原车织物地毯难清理。蓝辉轻改地板总成按车型、年款和座椅布局确认适配方案，38 个车系（SUV 17 + MPV 21）适配速查，佛山顺德大良可到店评估，让地板、滑轨、脚踏和尾箱形成完整统一的使用空间。",
  alternates: { canonical: "/product/flooring" },
  openGraph: {
    title: "汽车地板改装｜把难打理的后排，变成每天都好收拾的空间｜蓝辉轻改 LANHUI",
    description:
      "按 38 个主流 MPV / SUV 车系查看地板总成方案，先确认适配，再决定是否到店。",
    images: [
      {
        url: "/images/producthero/flooring-hero.webp",
        width: 1448,
        height: 1086,
        alt: "六座新能源 MPV 木纹汽车地板装车效果",
      },
    ],
  },
};

export default function FlooringPage() {
  const service = getServiceRoute("flooring");
  if (!service || service.type !== "service_category") notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/flooring");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/flooring");

  const store = stores[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "汽车地板改装｜蓝辉轻改 LANHUI",
    description: metadata.description,
    url: service.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: flooringVehicleGroups.map((group, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: `${group.brandName}地板总成`,
        description: group.headline,
      })),
    },
  };

  // GEO 增量：Vehicle 结构化数据（38 车系适配服务）
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "汽车地板总成适配服务（38 车系）",
    description: metadata.description,
    url: service.canonicalPath,
    provider: {
      "@type": "AutoRepair",
      name: store.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: store.address,
        addressLocality: store.cityLabel,
        addressRegion: store.provinceLabel,
        addressCountry: "CN",
      },
      telephone: store.phone,
      areaServed: ["佛山", "广州", "珠三角"],
    },
    makesOffer: [
      { "@type": "Offer", name: "地板总成", category: "floor" },
      { "@type": "Offer", name: "脚托（钢琴键 / 一体木 / 分体木 / 铝合金 / 星钻）", category: "footrest" },
      { "@type": "Offer", name: "风口件（碳纤钢 / 大风口件）", category: "airvent" },
      { "@type": "Offer", name: "迎宾踏板", category: "door-sill" },
    ],
    itemListElement: flooringFitmentEntries.map((entry, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: entry.model,
      item: entry.composition,
    })),
  };

  // GEO 增量：FAQPage 结构化数据
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...flooringFaqs, ...flooringServiceFaqs].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // GEO 增量：LocalBusiness 门店实体
  const localBusinessJsonLd = generateLocalBusinessSchema(store);

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessJsonLd) }}
        />
        <FlooringHero breadcrumbItems={breadcrumbItems} />
        <FlooringScenarioSection />
        <FlooringStructureGrid />
        <FlooringFitmentBrowser />
        <FlooringAccessories />
        <FlooringCaseShowcase />
        <FlooringFaqSection />
        <FlooringLocalStore />
        <FlooringDouyinCta />
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
