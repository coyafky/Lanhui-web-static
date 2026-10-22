import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarTvHero } from "@/components/product/car-tv/CarTvHero";
import { CarTvTypeSelector } from "@/components/product/car-tv/CarTvTypeSelector";
import { CarTvComparison } from "@/components/product/car-tv/CarTvComparison";
import { CarTvExperience } from "@/components/product/car-tv/CarTvExperience";
import { CarTvSeatback } from "@/components/product/car-tv/CarTvSeatback";
import { CarTvRearview } from "@/components/product/car-tv/CarTvRearview";
import { CarTvSharedFeatures } from "@/components/product/car-tv/CarTvSharedFeatures";
import { CarTvInstallation } from "@/components/product/car-tv/CarTvInstallation";
import { CarTvSpecsFaq } from "@/components/product/car-tv/CarTvSpecsFaq";
import { CarTvFitmentEntry } from "@/components/product/car-tv/CarTvFitmentEntry";
import { CarTvCases } from "@/components/product/car-tv/CarTvCases";
import { CarTvLocalStore } from "@/components/product/car-tv/CarTvLocalStore";
import { carTvImages, roofSpecGroups, carTvFaqs } from "@/lib/car-tv-products";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { getServiceRoute } from "@/lib/product-routes";
import { safeJsonLd } from "@/lib/json-ld";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { stores } from "@/lib/store";

export const metadata: Metadata = {
  alternates: { canonical: "/product/car-tv" },
  title: "后排娱乐系统｜吸顶式·座椅背装式·流媒体后视镜｜蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改后排娱乐系统产品页：吸顶式后排电视、座椅背装式后排电视、流媒体后视镜三种方案，按车型和用车场景选型，覆盖主流 SUV 与 MPV。",
  openGraph: {
    title: "后排娱乐系统｜吸顶式·座椅背装式·流媒体后视镜｜蓝辉轻改 LANHUI",
    description: "三种安装方式，按车型和用车场景选：全车共享、各看各的，还是换一块更清楚的后视镜。",
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
  const additionalProperties = roofSpecGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "PropertyValue",
      name: item.label,
      value: item.value,
    })),
  );
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "后排娱乐系统（吸顶式后排电视 / 座椅背装式后排电视 / 流媒体后视镜）",
    description: metadata.description,
    image: carTvImages.hero.publicPath,
    brand: {
      "@type": "Brand",
      name: "蓝辉轻改 LANHUI",
    },
    category: "汽车后排娱乐系统",
    additionalProperty: additionalProperties,
  };

  const localStore = stores.find((s) => s.isActive) ?? stores[0];
  const localBusinessSchema = localStore
    ? generateLocalBusinessSchema(localStore)
    : null;

  // GEO：Vehicle 结构化数据（覆盖主流 MPV / SUV 车型适装）
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "后排娱乐系统（吸顶电视 / 后排娱乐屏 / 流媒体后视镜）",
    category: "汽车后排娱乐系统安装服务",
    description: metadata.description,
    url: "/product/car-tv",
    makesOffer: [
      {
        "@type": "Offer",
        name: "吸顶式后排电视 安装适配",
        category: "车载娱乐系统",
      },
      {
        "@type": "Offer",
        name: "座椅背装式后排电视 安装适配",
        category: "车载娱乐系统",
      },
      {
        "@type": "Offer",
        name: "流媒体后视镜 安装适配",
        category: "车载娱乐系统",
      },
    ],
    ...(localBusinessSchema && { provider: localBusinessSchema }),
  };

  // GEO：FAQPage 结构化数据（现有 FAQ + 合规 / 未收录车型 / 流量口径）
  const faqEntries = [
    ...carTvFaqs,
    {
      question: "装车载电视会不会改外观？需要备案吗？",
      answer:
        "吸顶电视、后排娱乐屏、流媒体后视镜均属车内加装，不改车身外观与结构，不涉及车辆备案；安装涉及内饰走线与取电，方案以门店实车评估为准。",
    },
    {
      question: "适装库没列到我的车型，还能装吗？",
      answer:
        "适装库未收录不代表不能装，也不在这里打包票。把车型、年款和想装的方案发到门店，按实车结构评估后再答复；适装信息以门店现场检查为准，不同批次与配置存在差异。",
    },
    {
      question: "4G 流量怎么算？",
      answer:
        "内置 4G 通信，首月赠送流量体验，全车可共享 Wi-Fi 热点；后续资费以实际办理套餐为准，日常也可连接双频 Wi-Fi 联网。",
    },
  ];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((faq) => ({
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
      <main id="main-content" tabIndex={-1} className="flex-grow bg-zinc-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(vehicleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
        />
        {localBusinessSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }}
          />
        )}
        <CarTvHero breadcrumbItems={breadcrumbItems} />
        <CarTvTypeSelector />
        <CarTvComparison />
        <CarTvFitmentEntry />
        <CarTvExperience />
        <CarTvSeatback />
        <CarTvRearview />
        <CarTvSharedFeatures />
        <CarTvCases />
        <CarTvInstallation />
        <CarTvLocalStore />
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
