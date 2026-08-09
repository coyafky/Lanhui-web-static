import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarTvHero } from "@/components/product/car-tv/CarTvHero";
import { CarTvExperience } from "@/components/product/car-tv/CarTvExperience";
import { CarTvInstallation } from "@/components/product/car-tv/CarTvInstallation";
import { CarTvSpecsFaq } from "@/components/product/car-tv/CarTvSpecsFaq";
import { carTvImages, carTvSpecGroups } from "@/lib/car-tv-products";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { getServiceRoute } from "@/lib/product-routes";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/product/car-tv" },
  title: "18.5 英寸车载电视｜新能源 SUV 与 MPV 后排大屏｜蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改车载电视产品页，介绍 18.5 英寸 1080P 后排大屏、4G 与 Wi-Fi 联网、手机投屏、语音控制、原车功能适配及顶棚安装方案。",
  openGraph: {
    title: "18.5 英寸车载电视｜蓝辉轻改 LANHUI",
    description: "为新能源 SUV 与 MPV 后排提供大屏观影、手机投屏、联网娱乐与语音控制体验。",
    images: [
      {
        url: carTvImages.hero.publicPath,
        width: carTvImages.hero.width,
        height: carTvImages.hero.height,
        alt: carTvImages.hero.alt,
      },
    ],
  },
};

export default function CarTvPage() {
  const service = getServiceRoute("car-tv");
  if (!service || service.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs(service.canonicalPath);
  const breadcrumbSchema = getProductBreadcrumbSchema(service.canonicalPath);
  const additionalProperties = carTvSpecGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "PropertyValue",
      name: item.label,
      value: item.value,
    })),
  );
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "18.5 英寸车载电视",
    description: metadata.description,
    image: carTvImages.hero.publicPath,
    brand: {
      "@type": "Brand",
      name: "蓝辉轻改 LANHUI",
    },
    category: "汽车后排娱乐系统",
    additionalProperty: additionalProperties,
  };

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow bg-zinc-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchema) }}
        />
        <CarTvHero breadcrumbItems={breadcrumbItems} />
        <CarTvExperience />
        <CarTvInstallation />
        <CarTvSpecsFaq />
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
