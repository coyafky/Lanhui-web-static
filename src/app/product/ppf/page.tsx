import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct } from "@/lib/products";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { safeJsonLd } from "@/lib/json-ld";
import { productSchema } from "@/lib/schema";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { stores } from "@/lib/store";
import {
  PpfSeriesCompare,
  FilmComparison,
  FilmCases,
  FilmLocalStore,
  FilmFaqSection,
} from "@/components/film";
import { ppfSeries, ppfFaqs } from "@/lib/film-products";

export const metadata: Metadata = {
  alternates: { canonical: "/product/ppf" },
  title: "隐形车衣 | 蓝辉轻改 LANHUI",
  description:
    "蓝辉轻改隐形车衣服务，以透明膜覆盖原车漆面，应对日常剐蹭、碎石冲击与洗车划痕等使用场景；佛山顺德大良可到店施工，广州可预约上门评估。",
  openGraph: {
    title: "隐形车衣 | 蓝辉轻改 LANHUI",
    description:
      "以透明保护膜覆盖原车漆面，按车型与用车场景选择方案，并通过规范施工完整交付。",
    images: [
      {
        url: "/images/producthero/ppf-hero.webp",
        width: 1448,
        height: 1086,
        alt: "蓝辉隐形车衣透明保护膜施工效果",
      },
    ],
  },
};

export default async function PpfPage() {
  const product = getProduct("ppf");
  if (!product) notFound();
  const breadcrumbItems = getProductBreadcrumbs("/product/ppf");
  const breadcrumbSchema = getProductBreadcrumbSchema("/product/ppf");

  const localStore = stores.find((s) => s.isActive);
  const localBusiness = localStore ? generateLocalBusinessSchema(localStore) : null;

  const productJsonLd = productSchema({
    name: product.name,
    slug: product.slug,
    description: product.heroDescription ?? product.cardDescription,
    category: product.groupLabel,
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ppfFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const caseItems = ppfSeries.map((s) => ({
    image: s.image,
    alt: s.imageAlt,
    caption: `${s.name}系列 · ${s.thickness} · ${s.warranty}质保（产品图）`,
  }));

  return (
    <>
      <ProductDetail product={product} breadcrumbItems={breadcrumbItems} />

      <PpfSeriesCompare />

      <FilmComparison active="ppf" />

      <FilmCases items={caseItems} />

      <FilmLocalStore />

      <FilmFaqSection
        title="隐形车衣常见问题：10mil 和 8.5mil 区别、质保多久？"
        intro="关于厚度选择、质保年限、施工与到店方式的常见问题，具体方案以门店现场评估为准。"
        faqs={ppfFaqs}
      />

      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }}
      />
      {localBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusiness) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
    </>
  );
}
