/**
 * Schema.org 结构化数据模块
 *
 * 提供各页面类型的 JSON-LD 生成函数
 */

import { brand } from "./brand";

const SITE_URL = "https://lanhui.example.com";

/** 全站 Organization Schema */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.zh,
    alternateName: brand.en,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/lanhui-logo.png`,
    description: brand.shortDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address,
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: brand.phone,
      contactType: "customer service",
      areaServed: "CN",
      availableLanguage: "Chinese",
    },
  };
}

/** 产品页 Product Schema */
export function productSchema(product: {
  name: string;
  slug: string;
  description: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    url: `${SITE_URL}/product/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: brand.zh,
    },
    manufacturer: {
      "@type": "Organization",
      name: brand.zh,
    },
  };
}

/** 门店 LocalBusiness Schema（委托给 geo.ts） */
export { generateLocalBusinessSchema as localBusinessSchema } from "./geo";

/** 面包屑 BreadcrumbList Schema（委托给 geo.ts） */
export { generateBreadcrumbSchema as breadcrumbSchema } from "./geo";
