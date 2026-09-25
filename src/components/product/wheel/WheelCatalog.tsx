"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  createWheelCatalogOptions,
  parseWheelCatalogQuery,
  type WheelCatalogItem,
} from "@/lib/wheel-catalog";
import { WheelCatalogView } from "./WheelCatalogView";

/**
 * 目录页图库段的客户端外壳。
 *
 * 站点是 `output: "export"`，查询串筛选无法在构建期预渲染，因此筛选状态只能
 * 在客户端从 URL 解析。`items` 是服务端算好的**紧凑投影**（404 条），
 * 不是 431KB 的 `wheels.data.ts` —— 生成物不进客户端包。
 *
 * ⚠️ 必须包在 `<Suspense>` 里（`useSearchParams` 在静态页面上会触发 CSR 兜底）；
 * 兜底视图用的是同一套展示组件 + 默认筛选，所以预渲染 HTML 里就有真实编号。
 */
export function WheelCatalog({ items }: { items: readonly WheelCatalogItem[] }) {
  const searchParams = useSearchParams();
  const options = useMemo(() => createWheelCatalogOptions(items), [items]);
  const filters = useMemo(
    () => parseWheelCatalogQuery(searchParams, options),
    [searchParams, options]
  );

  return <WheelCatalogView items={items} filters={filters} />;
}
