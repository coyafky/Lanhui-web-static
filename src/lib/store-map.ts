import type { Store } from "@/lib/store";

type NavigableStore = Pick<Store, "name" | "location">;

/**
 * 生成高德 URI API 驾车导航链接。
 *
 * 起点留空时，高德会在移动端使用用户当前位置；PC 端进入路线规划页。
 */
export function getAmapNavigationUrl(store: NavigableStore): string {
  const { longitude, latitude } = store.location;
  const params = new URLSearchParams({
    from: "",
    to: `${longitude},${latitude},${store.name}`,
    mode: "car",
    policy: "1",
    src: "lanhui-website",
    coordinate: "gaode",
    callnative: "1",
  });

  return `https://uri.amap.com/navigation?${params.toString()}`;
}
