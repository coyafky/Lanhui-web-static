import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarCareHero } from "@/components/product/car-care/CarCareHero";
import { CarCarePainPoints } from "@/components/product/car-care/CarCarePainPoints";
import { CarCareConditionSelector } from "@/components/product/car-care/CarCareConditionSelector";
import { CarCareServiceGrid } from "@/components/product/car-care/CarCareServiceGrid";
import { CarCareCaseShowcase } from "@/components/product/car-care/CarCareCaseShowcase";
import { CarCareServiceFlow } from "@/components/product/car-care/CarCareServiceFlow";
import { CarCareDeliveryChecklist } from "@/components/product/car-care/CarCareDeliveryChecklist";
import { CarCareDouyinCta } from "@/components/product/car-care/CarCareDouyinCta";
import { carCareServiceDetails } from "@/lib/car-care-products";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "洗美养护｜把干净做到看得见的细节里｜蓝辉轻改 LANHUI",
  description:
    "门缝积灰、轮毂发黑、玻璃油膜、车内异味——先看车况再选清洁方案。外观精洗、内饰深度清洁、轮毂专项、玻璃油膜去除，不盲目叠加项目。",
  openGraph: {
    title: "洗美养护｜把干净做到看得见的细节里｜蓝辉轻改 LANHUI",
    description:
      "蓝辉轻改洗美养护服务：外观精洗、内饰深度清洁、轮毂专项、玻璃油膜去除。先看车况再选方案，不盲目叠加项目。",
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
        <CarCareConditionSelector />
        <CarCareServiceGrid />
        <CarCareCaseShowcase />
        <CarCareServiceFlow />
        <CarCareDeliveryChecklist />
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
