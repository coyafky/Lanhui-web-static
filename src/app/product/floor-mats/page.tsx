import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarMatHero } from "@/components/product/carmat/CarMatHero";
import { CarMatScenarios } from "@/components/product/carmat/CarMatScenarios";
import { CarMatGallery } from "@/components/product/carmat/CarMatGallery";
import { CarMatSafetyChecklist } from "@/components/product/carmat/CarMatSafetyChecklist";
import { CarMatServiceFlow } from "@/components/product/carmat/CarMatServiceFlow";
import { CarMatDouyinCta } from "@/components/product/carmat/CarMatDouyinCta";
import { carMatGalleryImages } from "@/lib/carmat-products";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "360 软包脚垫｜把每天带进车里的脏，留在更容易清理的一层｜蓝辉轻改 LANHUI",
  description:
    "按车型定制 360 软包脚垫，覆盖主驾到尾箱。可拆洗污染隔离方案，安装前检查主驾踏板安全间隙。",
  alternates: { canonical: "/product/floor-mats" },
  openGraph: {
    title: "360 软包脚垫｜蓝辉轻改 LANHUI",
    description:
      "查看蓝辉轻改 360 软包脚垫安装案例，按车型定制，覆盖主驾到尾箱，可拆洗维护。",
    images: [
      {
        url: carMatGalleryImages[0]!.publicPath,
        width: carMatGalleryImages[0]!.width,
        height: carMatGalleryImages[0]!.height,
        alt: carMatGalleryImages[0]!.alt,
      },
    ],
  },
};

export default function FloorMatsPage() {
  const service = getServiceRoute("floor-mats");
  if (!service || service.type !== "service_category") notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/floor-mats");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/floor-mats");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "360 软包脚垫",
    description: metadata.description,
    url: service.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: carMatGalleryImages.map((image, index) => ({
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
        <CarMatHero breadcrumbItems={breadcrumbItems} />
        <CarMatScenarios />
        <CarMatGallery />
        <CarMatSafetyChecklist />
        <CarMatServiceFlow />
        <CarMatDouyinCta />
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
