import {
  getWheelModel,
  wheelCardImagePath,
  wheelModels,
  type WheelModel,
} from "./wheels.data";
import {
  buildWheelDetailSummary,
  createWheelCatalogOptions,
  formatWheelSize,
  formatPcd,
  getWheelDetailSections,
  type WheelCatalogFacet,
  type WheelCatalogItem,
  type WheelCatalogOptions,
  type WheelDetailSection,
  type WheelDetailSummary,
} from "./wheel-catalog";

/**
 * 生成物 → 目录页紧凑投影 / 详情页内容。
 *
 * ⚠️ 本模块**只能被 RSC（服务端）引用**：它把 431KB 的 `wheels.data.ts` 变成
 * 客户端可消费的投影。客户端组件只接收函数返回值，绝不 import 本模块，
 * 否则整份生成物会被打进客户端包（见 `wheel-catalog-projection.test.ts` 的守卫断言）。
 */

function toCatalogItem(model: WheelModel): WheelCatalogItem {
  const diameters = [
    ...new Set(
      model.variants
        .map((variant) => variant.diameterIn)
        .filter((diameter): diameter is number => diameter !== null)
    ),
  ].sort((a, b) => a - b);

  // 逐 variant 的「直径 × J值 × 孔距」组合（去重），跨维匹配的唯一依据。
  const facets = new Map<string, WheelCatalogFacet>();
  const sizePairs = new Map<string, { diameterIn: number | null; widthIn: number | null }>();
  for (const variant of model.variants) {
    const sizeKey = `${variant.diameterIn ?? "null"}|${variant.widthIn ?? "null"}`;
    // 两侧都未解析（源表规格为空）不算一个尺寸组合，卡片会走「规格待确认」。
    if (
      (variant.diameterIn !== null || variant.widthIn !== null) &&
      !sizePairs.has(sizeKey)
    ) {
      sizePairs.set(sizeKey, {
        diameterIn: variant.diameterIn,
        widthIn: variant.widthIn,
      });
    }
    for (const pcd of variant.pcd) {
      const value = formatPcd(pcd);
      const key = `${sizeKey}|${value}`;
      if (!facets.has(key)) {
        facets.set(key, {
          diameterIn: variant.diameterIn,
          widthIn: variant.widthIn,
          pcd: value,
        });
      }
    }
  }

  const sizes = [...sizePairs.values()]
    .sort(
      (a, b) =>
        (a.diameterIn ?? -1) - (b.diameterIn ?? -1) ||
        (a.widthIn ?? -1) - (b.widthIn ?? -1)
    )
    .map((pair) => formatWheelSize(pair.diameterIn, pair.widthIn));

  return {
    id: model.modelId,
    process: model.process,
    carSeries: model.carSeries,
    diameters,
    colors: model.colors,
    cardImage: model.images.length > 0 ? wheelCardImagePath(model.modelId) : null,
    variantCount: model.variants.length,
    facets: [...facets.values()],
    sizes,
  };
}

/** 全量目录投影（404 条，构建期算一次；客户端只拿到这份）。 */
export const wheelCatalogItems: readonly WheelCatalogItem[] = wheelModels.map(toCatalogItem);

/** 合法筛选取值域（工艺 / 直径 / 孔距）。 */
export const wheelCatalogOptions: WheelCatalogOptions =
  createWheelCatalogOptions(wheelCatalogItems);

export type WheelDetailContent = {
  model: WheelModel;
  summary: WheelDetailSummary;
  /** 只含有内容的段落 —— 页内锚点导航直接用这份，不生成空锚点 */
  sections: readonly WheelDetailSection[];
};

export function getWheelDetailContent(modelId: string): WheelDetailContent | undefined {
  const model = getWheelModel(modelId);
  if (model === undefined) return undefined;

  return {
    model,
    summary: buildWheelDetailSummary({
      process: model.process,
      variants: model.variants,
      colors: model.colors,
    }),
    sections: getWheelDetailSections({
      imageCount: model.images.length,
      variantCount: model.variants.length,
    }),
  };
}
