import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ElectricStepHero } from "@/components/product/electric-steps/ElectricStepHero";
import { ElectricStepScenarios } from "@/components/product/electric-steps/ElectricStepScenarios";
import { ElectricStepGallery } from "@/components/product/electric-steps/ElectricStepGallery";
import { ElectricStepServiceFlow } from "@/components/product/electric-steps/ElectricStepServiceFlow";
import { ElectricStepDouyinCta } from "@/components/product/electric-steps/ElectricStepDouyinCta";
import { electricStepImages } from "@/lib/electric-step-products";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "电动踏板方案｜高底盘的距离，交给一块会收起的踏板｜蓝辉轻改 LANHUI",
  description:
    "开门展开为老人、小孩提供更低落脚位置，关门收回保留原车线条。三款方案可选，到店确认车型、底盘和电路适配。",
  openGraph: {
    title: "电动踏板方案｜蓝辉轻改 LANHUI",
    description:
      "查看蓝辉轻改电动踏板方案，无灯款、单流光、大灯带三款可选，适合 SUV、MPV 和高底盘车型。",
    images: [
      {
        url: electricStepImages[0]!.publicPath,
        width: electricStepImages[0]!.width,
        height: electricStepImages[0]!.height,
        alt: electricStepImages[0]!.alt,
      },
    ],
  },
};

export default function ElectricStepsPage() {
  const service = getServiceRoute("electric-steps");
  if (!service || service.type !== "service_category") notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/electric-steps");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/electric-steps");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "电动踏板方案",
    description: metadata.description,
    url: service.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: electricStepImages.map((image, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: image.title,
        image: image.publicPath,
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
        <ElectricStepHero breadcrumbItems={breadcrumbItems} />
        <ElectricStepScenarios />
        <ElectricStepGallery />
        <ElectricStepServiceFlow />
        <ElectricStepDouyinCta />
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
