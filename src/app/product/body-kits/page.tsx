import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BodyKitHero } from "@/components/product/body-kits/BodyKitHero";
import { BodyKitStyles } from "@/components/product/body-kits/BodyKitStyles";
import { BodyKitCases } from "@/components/product/body-kits/BodyKitCases";
import { BodyKitFitmentEntry } from "@/components/product/body-kits/BodyKitFitmentEntry";
import { BodyKitProductLines } from "@/components/product/body-kits/BodyKitProductLines";
import { BodyKitMaterials } from "@/components/product/body-kits/BodyKitMaterials";
import { BodyKitFaq, bodyKitFaqs } from "@/components/product/body-kits/BodyKitFaq";
import { BodyKitLocalStore } from "@/components/product/body-kits/BodyKitLocalStore";
import { BodyKitDouyinCta } from "@/components/product/body-kits/BodyKitDouyinCta";
import { getServiceRoute } from "@/lib/product-routes";
import { getProductBreadcrumbs, getProductBreadcrumbSchema } from "@/lib/product-breadcrumbs";
import { generateLocalBusinessSchema } from "@/lib/geo";
import { stores } from "@/lib/store";
import { safeJsonLd } from "@/lib/json-ld";
import { BODY_KIT_BRANDS, BODY_KIT_SUMMARY } from "@/lib/body-kit-fitment";

const PAGE_TITLE =
  "车身包围改装｜前包围·后包围·侧裙·尾翼·整套｜蓝辉轻改 LANHUI";
const PAGE_DESCRIPTION =
  "蓝辉轻改（佛山顺德大良）承接车身包围改装：前包围、后包围、侧裙、尾翼、整套均可到店评估。28 款热销车型适配速查，黑武士、熊猫配色、小象灰冷光漆、金属与珍珠白、运动系列任选，新能源与燃油车均可到店检查。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "车身包围",
    "包围改装",
    "前包围",
    "后包围",
    "侧裙",
    "尾翼",
    "佛山包围改装店",
    "顺德包围改装",
    "蓝辉轻改",
  ],
  alternates: { canonical: "/product/body-kits" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "article",
  },
};

export default function BodyKitsPage() {
  const service = getServiceRoute("body-kits");
  if (!service || service.status !== "live") notFound();

  const breadcrumbItems = getProductBreadcrumbs(service.canonicalPath);
  const breadcrumbSchema = getProductBreadcrumbSchema(service.canonicalPath);
  const localStore = stores.find((s) => s.isActive) ?? stores[0];

  // ItemList：品牌 + 车型
  const itemListElement: unknown[] = [];
  let position = 1;
  for (const brand of BODY_KIT_BRANDS) {
    itemListElement.push({
      "@type": "ListItem",
      position: position++,
      name: `${brand.brand}车身包围`,
      url: `${service.canonicalPath}#body-kit-fitment`,
    });
    for (const model of brand.models) {
      itemListElement.push({
        "@type": "ListItem",
        position: position++,
        name: `${brand.brand} ${model.model} 包围适配`,
        url: `${service.canonicalPath}#body-kit-fitment`,
      });
    }
  }

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: service.canonicalPath,
    mainEntity: {
      "@type": "ItemList",
      name: "车身包围适配库（品牌 / 车型）",
      numberOfItems: itemListElement.length,
      itemListElement,
    },
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "车身包围改装（前包围 / 后包围 / 侧裙 / 尾翼 / 整套）",
    description: PAGE_DESCRIPTION,
    brand: {
      "@type": "Brand",
      name: "蓝辉轻改 LANHUI",
    },
    category: "汽车车身包围改装服务",
  };

  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: "车身包围改装适配库",
    brand: { "@type": "Brand", name: "蓝辉轻改 LANHUI" },
    model: "28 款热销车型",
    category: "汽车轻改升级服务",
    description: PAGE_DESCRIPTION,
    url: service.canonicalPath,
    provider: {
      "@type": "AutoRepair",
      name: "蓝辉轻改",
      address: {
        "@type": "PostalAddress",
        addressRegion: "广东省",
        addressLocality: "佛山市顺德区",
      },
      areaServed: "佛山 / 广州 / 珠三角",
    },
    makesOffer: [
      { "@type": "Offer", name: "单件改装（前唇 / 后唇 / 侧裙 / 尾翼）", category: "车身包围" },
      { "@type": "Offer", name: "整套包围（前 + 后 + 侧成套）", category: "车身包围" },
      { "@type": "Offer", name: "材质分级选型（ABS / PP / 碳纤维 / 干碳）", category: "车身包围" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bodyKitFaqs.map((faq) => ({
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
          dangerouslySetInnerHTML={{ __html: safeJsonLd(collectionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(vehicleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(generateLocalBusinessSchema(localStore)),
          }}
        />

        <BodyKitHero breadcrumbItems={breadcrumbItems} />
        <BodyKitStyles />
        <BodyKitCases />
        <BodyKitFitmentEntry />
        <BodyKitProductLines />
        <BodyKitMaterials />
        <BodyKitFaq />
        <BodyKitLocalStore />
        <BodyKitDouyinCta />

        {/* 合规说明 */}
        <section className="py-8 bg-zinc-950 border-t border-white/[0.05]">
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
            本页面用于蓝辉轻改车身包围改装服务介绍，品牌与车型名称仅用于说明适配对象。
            {BODY_KIT_SUMMARY}。适配信息以门店现场检查为准，不同批次与配置存在差异；
            页面效果图均非实拍，不构成装车效果承诺。
          </p>
        </section>
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
