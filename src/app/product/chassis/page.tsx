import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChassisCoverage } from "@/components/product/chassis/ChassisCoverage";
import { ChassisFitment } from "@/components/product/chassis/ChassisFitment";
import { ChassisHero } from "@/components/product/chassis/ChassisHero";
import { ChassisSpecsFaq } from "@/components/product/chassis/ChassisSpecsFaq";
import { ChassisVariants } from "@/components/product/chassis/ChassisVariants";
import { SkidPlateCases } from "@/components/product/chassis/SkidPlateCases";
import { SkidPlateFaq, SKID_PLATE_FAQS } from "@/components/product/chassis/SkidPlateFaq";
import { SkidPlateFitmentEntry } from "@/components/product/chassis/SkidPlateFitmentEntry";
import { SkidPlateKits } from "@/components/product/chassis/SkidPlateKits";
import { SkidPlateLocalStore } from "@/components/product/chassis/SkidPlateLocalStore";
import { SkidPlateMaterials } from "@/components/product/chassis/SkidPlateMaterials";
import { chassisImages, chassisSpecGroups } from "@/lib/chassis-products";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { getServiceRoute } from "@/lib/product-routes";
import { safeJsonLd } from "@/lib/json-ld";
import { stores } from "@/lib/store";
import { generateLocalBusinessSchema } from "@/lib/geo";
import {
  SKID_PLATE_BRAND_COUNT,
  SKID_PLATE_MODEL_COUNT,
  SKID_PLATE_SCHEME_COUNT,
} from "@/lib/skid-plate-fitment";

export const metadata: Metadata = {
  alternates: { canonical: "/product/chassis" },
  title: "铝镁合金底盘护板｜新能源车五段式底盘防护｜蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改铝镁合金底盘护板产品页，介绍前电机、线束、前后电池与后电机五段分区结构、黑色与银色外观，以及 121 品牌 / 1532 车型清洗后适配库、材质对比、套装构成和佛山顺德大良到店安装。",
  openGraph: {
    title: "铝镁合金底盘护板｜蓝辉轻改 LANHUI",
    description: "五段分区覆盖前后电机、电池与线束区域，为新能源车底盘增加外部隔护。",
    images: [
      {
        url: chassisImages.hero.publicPath,
        width: chassisImages.hero.width,
        height: chassisImages.hero.height,
        alt: chassisImages.hero.alt,
      },
    ],
  },
};

export default function ChassisPage() {
  const service = getServiceRoute("chassis");
  if (!service || service.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs(service.canonicalPath);
  const breadcrumbSchema = getProductBreadcrumbSchema(service.canonicalPath);
  const additionalProperties = chassisSpecGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "PropertyValue",
      name: item.label,
      value: item.value,
    })),
  );
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "铝镁合金五段式底盘护板",
    description: metadata.description,
    image: [chassisImages.hero.publicPath, chassisImages.black.publicPath, chassisImages.silver.publicPath],
    brand: {
      "@type": "Brand",
      name: "蓝辉轻改 LANHUI",
    },
    category: "汽车底盘护板",
    material: "铝镁合金",
    additionalProperty: additionalProperties,
  };

  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: `底盘护板适配库（${SKID_PLATE_BRAND_COUNT} 品牌 / ${SKID_PLATE_MODEL_COUNT} 车型 / ${SKID_PLATE_SCHEME_COUNT} 方案）`,
    category: "汽车底盘护板适配件服务",
    description: metadata.description,
    url: "/product/chassis",
    provider: {
      "@type": "AutoRepair",
      name: "蓝辉轻改",
      areaServed: ["佛山", "顺德", "广州"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SKID_PLATE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const localStore = stores[0];
  const localBusinessSchema = localStore ? generateLocalBusinessSchema(localStore) : null;

  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-grow bg-zinc-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(vehicleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
        {localBusinessSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }}
          />
        )}
        <ChassisHero breadcrumbItems={breadcrumbItems} />
        <ChassisCoverage />
        <ChassisVariants />
        <SkidPlateFitmentEntry />
        <SkidPlateMaterials />
        <SkidPlateKits />
        <SkidPlateCases />
        <ChassisFitment />
        <SkidPlateFaq />
        <SkidPlateLocalStore />
        <ChassisSpecsFaq />
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
