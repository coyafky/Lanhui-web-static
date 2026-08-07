import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";
import {
  getLiveBrands,
  getLiveServices,
  getModelsByBrand,
  getCanonicalFor,
} from "@/lib/product-routes";
import {
  listStores,
  listPublishedProvinces,
  listPublishedCities,
} from "@/lib/store-query";
import { getSiteUrl } from "@/lib/site-url";

const SITE_URL = getSiteUrl();

// 构建时动态生成，避免硬编码过期
const LAST_MOD = new Date();

export const dynamic = "force-static";

/** 依据路由优先级映射 sitemap priority */
function priorityOf(priority: string): number {
  switch (priority) {
    case "P0":
      return 0.9;
    case "P1":
      return 0.8;
    case "P2":
      return 0.7;
    default:
      return 0.6;
  }
}

function routeEntry(
  path: string,
  priority: number,
  changeFrequency: "weekly" | "monthly" | "yearly"
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MOD,
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    routeEntry("/", 1.0, "weekly"),
    routeEntry("/product", 0.9, "weekly"),
    routeEntry("/brand", 0.7, "monthly"),
    routeEntry("/brand/history", 0.5, "yearly"),
    routeEntry("/contact", 0.6, "yearly"),
  ];

  // 品牌系列页（vehicle_brand L1）
  const brandRoutes: MetadataRoute.Sitemap = getLiveBrands().map((b) =>
    routeEntry(b.canonicalPath, priorityOf(b.priority), "monthly")
  );

  // 车型页（vehicle_model L2）：从品牌数据枚举全部车型
  const modelRoutes: MetadataRoute.Sitemap = [];
  for (const brand of getLiveBrands()) {
    for (const model of getModelsByBrand(brand.brandSlug)) {
      if (model.status !== "live") continue;
      modelRoutes.push(
        routeEntry(model.canonicalPath, priorityOf(model.priority), "monthly")
      );
    }
  }

  // 服务/分类页（film / light_mod / car_care 等）
  const serviceRoutes: MetadataRoute.Sitemap = getLiveServices().map((s) =>
    routeEntry(s.canonicalPath, priorityOf(s.priority), "monthly")
  );

  // 旧版 getAllProductSlugs 覆盖的历史服务页（保留以兼容）
  const legacyProductRoutes: MetadataRoute.Sitemap = getAllProductSlugs()
    .map((slug) => getCanonicalFor(`/product/${slug}`))
    .filter((canonical): canonical is string => Boolean(canonical))
    .filter(
      (canonical: string, idx: number, arr: string[]) =>
        arr.findIndex((c) => c === canonical) === idx
    )
    .map((canonical: string) => routeEntry(canonical, 0.8, "monthly"));

  // 门店页（省/市/店）
  const provinceRoutes: MetadataRoute.Sitemap = listPublishedProvinces().map(
    (province) => routeEntry(`/agent/${province.slug}`, 0.7, "monthly")
  );

  const cityRoutes: MetadataRoute.Sitemap = [];
  for (const p of listPublishedProvinces()) {
    for (const c of listPublishedCities(p.slug)) {
      cityRoutes.push(routeEntry(`/agent/${p.slug}/${c.slug}`, 0.6, "monthly"));
    }
  }

  const storeRoutes: MetadataRoute.Sitemap = listStores().map((s) =>
    routeEntry(`/agent/store/${s.id}`, 0.7, "monthly")
  );

  return [
    ...staticRoutes,
    ...brandRoutes,
    ...modelRoutes,
    ...serviceRoutes,
    ...legacyProductRoutes,
    ...provinceRoutes,
    ...cityRoutes,
    ...storeRoutes,
  ];
}
