import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlooringHero } from "@/components/product/flooring/FlooringHero";
import { FlooringScenarioSection } from "@/components/product/flooring/FlooringScenarioSection";
import { FlooringStructureGrid } from "@/components/product/flooring/FlooringStructureGrid";
import { FlooringVehicleSelector } from "@/components/product/flooring/FlooringVehicleSelector";
import { FlooringCaseShowcase } from "@/components/product/flooring/FlooringCaseShowcase";
import { FlooringFaqSection } from "@/components/product/flooring/FlooringFaqSection";
import { FlooringDouyinCta } from "@/components/product/flooring/FlooringDouyinCta";
import { flooringVehicleGroups } from "@/lib/flooring-products";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "汽车地板改装｜把难打理的后排，变成每天都好收拾的空间｜蓝辉轻改 LANHUI",
  description:
    "孩子零食、雨天泥水、滑轨积灰——原车织物地毯难清理。蓝辉轻改地板总成按车型、年款和座椅布局确认适配方案，让地板、滑轨、脚踏和尾箱形成完整统一的使用空间。",
  alternates: { canonical: "/product/flooring" },
  openGraph: {
    title: "汽车地板改装｜把难打理的后排，变成每天都好收拾的空间｜蓝辉轻改 LANHUI",
    description:
      "按理想、问界、极氪、小鹏等热门车型查看地板总成方案。先确认适配，再决定是否到店。",
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

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <FlooringHero breadcrumbItems={breadcrumbItems} />
        <FlooringScenarioSection />
        <FlooringStructureGrid />
        <FlooringVehicleSelector />
        <FlooringCaseShowcase />
        <FlooringFaqSection />
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
