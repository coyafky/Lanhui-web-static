import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBrandRoute, getModelRoute } from "@/lib/product-routes";
import { getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { fangchengbaoBao5PageConfig } from "@/lib/fangchengbao-bao-5-page-config";
import { VehiclePageRenderer } from "@/components/vehicle-page";
import { GenericBrandCta } from "@/components/brand-series/GenericBrandCta";
import { safeJsonLd } from "@/lib/json-ld";

const CANONICAL = "/product/fangchengbao/bao-5";
const PAGE_TITLE = "方程豹豹5 适配速查｜底盘护板（铝镁合金5.0mm）｜佛山顺德大良蓝辉轻改";
const PAGE_DESCRIPTION =
  "蓝辉轻改提供方程豹豹5专车适配参考：底盘护板（铝镁合金5.0mm，2023-2026多续航版本；另有锰钢智驾版长续航六件套）。年款、续航与结构说明以供应商适配库原文为准，实际安装以门店现场检查为准。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["方程豹豹5", "豹5底盘护板", "方程豹改装", "顺德汽车改装", "蓝辉轻改"],
  alternates: { canonical: CANONICAL },
};

export default function FangchengbaoBao5Page() {
  const brand = getBrandRoute("fangchengbao");
  const model = getModelRoute("fangchengbao", "bao-5");
  if (!brand || brand.type !== "vehicle_brand") notFound();
  if (!model || model.type !== "vehicle_model") notFound();

  const breadcrumbSchema = getProductBreadcrumbSchema(CANONICAL);
  const projects = fangchengbaoBao5PageConfig.projects;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "方程豹豹5 适配件",
    url: CANONICAL,
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.summary,
        category: p.category,
      },
    })),
  };

  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "方程豹豹5 适配速查",
    brand: { "@type": "Brand", name: "方程豹" },
    model: "豹5",
    category: "汽车轻改适配件服务",
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
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
    makesOffer: projects.map((p) => ({
      "@type": "Offer",
      name: `方程豹豹5 ${p.name} 适配件方案`,
      category: "汽车轻改适配件",
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fangchengbaoBao5PageConfig.faq.map((faq) => ({
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
        <VehiclePageRenderer config={fangchengbaoBao5PageConfig} />

        <GenericBrandCta
          title="方程豹豹5 升级方案 · 到店评估"
          description="不同批次和配置存在差异，具体适配请到店确认。蓝辉轻改顺德大良店提供到店评估和按标准流程施工服务。"
          primary={{ label: "查看方程豹系列", href: "/product/fangchengbao" }}
          secondary={{ label: "返回产品中心", href: "/product" }}
        />

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
