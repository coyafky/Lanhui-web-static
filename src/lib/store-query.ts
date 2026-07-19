import type { City, Province, Store } from "@/lib/store";
import { getStore, stores } from "@/lib/store";
import {
  MAINLAND_CITIES,
  MAINLAND_PROVINCES,
} from "@/lib/regions/mainland-regions";

/**
 * 333 个地级行政区目录。
 *
 * MAINLAND_CITIES 还包含 4 个直辖市占位项和 31 个省/自治区直管的
 * 县级行政单位；它们不是地级行政区，因此不生成城市落地页。
 */
const PREFECTURE_LEVEL_CITIES = MAINLAND_CITIES.filter(
  (city) =>
    city.type !== "municipality" &&
    !/^(419|429|469|659)/.test(city.code),
);

export interface StoreQuery {
  province?: string;
  city?: string;
  search?: string;
  level?: string | string[];
  limit?: number;
  sort?: "public_featured";
}

export function listStores(query: StoreQuery = {}): Store[] {
  let result = stores.filter((store) => store.isActive !== false);

  if (query.province) {
    result = result.filter((store) => store.province === query.province);
  }
  if (query.city) {
    result = result.filter((store) => store.city === query.city);
  }
  if (query.level) {
    const levels = Array.isArray(query.level) ? query.level : [query.level];
    result = result.filter((store) => levels.includes(store.level ?? "flagship"));
  }
  if (query.search) {
    const search = query.search.toLowerCase();
    result = result.filter(
      (store) =>
        store.name.toLowerCase().includes(search) ||
        store.cityLabel.toLowerCase().includes(search) ||
        store.provinceLabel.toLowerCase().includes(search) ||
        store.district.toLowerCase().includes(search) ||
        store.address.toLowerCase().includes(search) ||
        store.phone.includes(search),
    );
  }
  if (query.limit) {
    result = result.slice(0, query.limit);
  }
  return result;
}

export function findStore(id: string): Store | undefined {
  const store = getStore(id);
  return store?.isActive === false ? undefined : store;
}

export function listProvinces(): Province[] {
  return MAINLAND_PROVINCES.map((province) => ({
    slug: province.slug,
    label: province.label,
    cityCount: PREFECTURE_LEVEL_CITIES.filter(
      (city) => city.provinceSlug === province.slug,
    ).length,
    storeCount: stores.filter(
      (store) =>
        store.isActive !== false && store.province === province.slug,
    ).length,
  }));
}

export function listCities(province?: string): City[] {
  return PREFECTURE_LEVEL_CITIES.filter(
    (city) => !province || city.provinceSlug === province,
  ).map((city) => ({
    slug: city.slug,
    province: city.provinceSlug,
    label: city.label,
    storeCount: stores.filter(
      (store) =>
        store.isActive !== false &&
        store.province === city.provinceSlug &&
        store.city === city.slug,
    ).length,
  }));
}

/**
 * 首期官网只发布存在已开放门店的城市，避免生成没有实际服务能力的地域页。
 */
export function listPublishedCities(province?: string): City[] {
  return listCities(province).filter((city) => city.storeCount > 0);
}

/**
 * 首期官网只发布存在已开放门店的省份。
 *
 * cityCount 在发布视图中表示实际覆盖城市数，而不是行政区目录城市数。
 */
export function listPublishedProvinces(): Province[] {
  const publishedCities = listPublishedCities();

  return listProvinces()
    .filter((province) => province.storeCount > 0)
    .map((province) => ({
      ...province,
      cityCount: publishedCities.filter(
        (city) => city.province === province.slug,
      ).length,
    }));
}

export function listStaticProvinceParams(): Array<{ slug: string }> {
  return listPublishedProvinces().map((province) => ({
    slug: province.slug,
  }));
}

export function listStaticStoreParams(): Array<{ id: string }> {
  return listStores().map((store) => ({ id: store.id }));
}

export function listStaticCityParams(
  provinceSlug: string,
): Array<{ slug: string; city: string }> {
  return listPublishedCities(provinceSlug).map((city) => ({
    slug: provinceSlug,
    city: city.slug,
  }));
}
