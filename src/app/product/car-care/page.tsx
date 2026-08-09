import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarCareHero } from "@/components/product/car-care/CarCareHero";
import { CarCarePainPoints } from "@/components/product/car-care/CarCarePainPoints";
import { CarCareServiceGrid } from "@/components/product/car-care/CarCareServiceGrid";
import { CarCareServiceFlow } from "@/components/product/car-care/CarCareServiceFlow";
import { CarCareDouyinCta } from "@/components/product/car-care/CarCareDouyinCta";
import { carCareServiceDetails } from "@/lib/car-care-products";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "洗美养护｜把干净做到看得见的细节里｜蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改顺德大良店提供普洗、精洗与轮毂定向清洗。服务前沟通车况、清洁范围、预计时间与费用，再按确认内容施工。",
  openGraph: {
    title: "洗美养护｜把干净做到看得见的细节里｜蓝辉轻改 LANHUI",
    description:
      "蓝辉轻改洗美养护提供普洗、精洗与轮毂定向清洗，服务范围、预计时间和费用会在施工前确认。",
    images: [
      {
        url: "/images/producthero/car-care-hero.webp",
        width: 1448,
        height: 1086,
        alt: "汽车漆面精细养护与检查施工",
      },
    ],
  },
};

export default function CarCarePage() {
  const service = getServiceRoute("car-care");
  if (!service || service.type !== "service_category") notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/car-care");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/car-care");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "洗美养护｜把干净做到看得见的细节里｜蓝辉轻改 LANHUI",
    description: metadata.description,
    url: service.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: carCareServiceDetails.map((svc, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: svc.title,
        description: svc.description,
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
        <CarCareHero breadcrumbItems={breadcrumbItems} />
        <CarCarePainPoints />
        <CarCareServiceGrid />
        <CarCareServiceFlow />
        <CarCareDouyinCta />
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
