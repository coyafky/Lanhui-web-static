import type { WheelPcd, WheelProcess, WheelVariant } from "./wheels.data";

/** 生成物的公开类型再导出（`export type` 会被编译期擦除，不会引入数据）。 */
export type { WheelPcd, WheelProcess, WheelVariant };

/**
 * 轮毂目录页 / 详情页的**纯逻辑层**：筛选、分面、分页、分组、URL 状态、规格格式化。
 *
 * ⚠️ 本模块**不得**引入 `./wheels.data` 的运行时依赖。
 * 站点是 `output: "export"`，查询串筛选无法在构建期预渲染，筛选只能走客户端；
 * 而 `wheels.data.ts` 是 431KB 生成物。目录页只把 `WheelCatalogItem` 紧凑投影
 * （`wheel-catalog-projection.ts` 构建）传进客户端组件。
 * 这里允许 `import type`，它在编译期被擦除，不会把数据带进客户端包。
 */

/** 目录页路径（筛选链接与详情页回链的唯一来源）。 */
export const WHEEL_CATALOG_PATH = "/product/wheels";

/** 目录页锚点：翻页 / 改筛选后落回图库段，而不是页面顶端。 */
export const WHEEL_CATALOG_ANCHOR = "wheel-catalog";

/** 目录页分页大小（§9.4：24/页，替换 v1 的「查看全部 21 款」）。 */
export const WHEEL_PAGE_SIZE = 24;

/** 详情页规格表分页大小（§9.4：20 行/页）。 */
export const WHEEL_SPEC_PAGE_SIZE = 20;

/** 默认（无筛选）筛选状态 —— 也是无 JS / 预渲染兜底视图使用的状态。 */
export const DEFAULT_WHEEL_CATALOG_FILTERS: WheelCatalogFilters = {
  process: null,
  diameter: null,
  width: null,
  pcd: null,
  page: 1,
};

/** 组介绍文案：只陈述工艺与数据来源，不做性能承诺。 */
export const WHEEL_PROCESS_GROUPS: Record<
  WheelProcess,
  { title: string; description: string }
> = {
  旋压: {
    title: "旋压工艺",
    description: "旋压成型编号，规格取自供应商产品表。",
  },
  锻造: {
    title: "锻造工艺",
    description: "锻造工艺编号，规格取自供应商产品表。",
  },
};

/** 目录页范围说明（保留「到店确认」口径，不承诺自动适配）。 */
export const WHEEL_CATALOG_DISCLAIMER =
  "编号、工艺、尺寸与孔距均取自供应商产品表，未做推断；实际适配车型年款、轮胎规格、载重、胎压传感器匹配与动平衡参数，仍需按你的车型到店确认。";

/** 详情页免责口径（与目录页一致，不引入询盘表单）。 */
export const WHEEL_DETAIL_DISCLAIMER =
  "本页规格取自供应商产品表，未做任何推断，也不构成适配或性能承诺。适配车型年款、轮胎规格、载重、胎压传感器匹配与动平衡参数以到店确认结果为准。";

/** 详情页页内锚点段落 id（页面与锚点导航共用，避免字面量漂移）。 */
export const WHEEL_DETAIL_SECTION_IDS = {
  gallery: "wheel-detail-gallery",
  summary: "wheel-detail-summary",
  specs: "wheel-detail-specs",
  cta: "wheel-detail-cta",
} as const;

/** 详情页页内锚点段落 id 与标签。 */
export const WHEEL_DETAIL_SECTIONS = [
  { id: WHEEL_DETAIL_SECTION_IDS.gallery, label: "产品图片" },
  { id: WHEEL_DETAIL_SECTION_IDS.summary, label: "规格摘要" },
  { id: WHEEL_DETAIL_SECTION_IDS.specs, label: "完整规格表" },
  { id: WHEEL_DETAIL_SECTION_IDS.cta, label: "到店确认" },
] as const;

export type WheelDetailSection = (typeof WHEEL_DETAIL_SECTIONS)[number];

/**
 * 目录页客户端只接收这份**紧凑投影**（§10 架构约束）。
 * 不含宽度 / ET / 中心孔 / 完整 variant 行 —— 那些只在详情页由 RSC 提供。
 */
export type WheelCatalogItem = {
  id: string;
  process: WheelProcess;
  carSeries: string;
  /** 该编号 variant 直径去重升序（卡片尺寸摘要）；未解析直径不计入 */
  diameters: readonly number[];
  /** 该编号 variant 颜色去重（保持首次出现顺序） */
  colors: readonly string[];
  /** 卡片图路径；缺图编号为 `null`（页面用中性占位块，禁止顶替） */
  cardImage: string | null;
  /** variant 行数 */
  variantCount: number;
  /**
   * 逐 variant 的「直径 × J值 × 孔距」取值组合（去重）。
   * 跨维筛选只在**同一条 variant** 上判命中，因此必须保留逐 variant 的配对，
   * 而不能只给「直径集合 + J值集合 + 孔距集合」再各取其一。
   * 双孔距轮毂会产出两条直径/J值相同、孔距不同的组合，从而在两个孔距条件下都能命中。
   */
  facets: readonly WheelCatalogFacet[];
  /** 该编号 variant 的「直径×J值」去重组合，升序（卡片尺寸摘要，如 `18×8.5`）。 */
  sizes: readonly string[];
};

/** 一条 variant 贡献的可筛选取值组合。 */
export type WheelCatalogFacet = {
  diameterIn: number | null;
  widthIn: number | null;
  /** 已格式化孔距，如 `5×114.3`。 */
  pcd: string;
};

export type WheelCatalogFilters = {
  process: WheelProcess | null;
  /** 尺寸第一步：直径（英寸） */
  diameter: number | null;
  /** 尺寸第二步：J值（宽度，英寸） */
  width: number | null;
  pcd: string | null;
  page: number;
};

/** 合法筛选取值域（用于钳制 URL 里的非法参数）。 */
export type WheelCatalogOptions = {
  diameters: readonly number[];
  widths: readonly number[];
  pcds: readonly string[];
};

export type WheelCatalogFacetOption<T> = {
  value: T;
  /** 当前投影中该取值可命中的编号数（单维，不做交叉过滤） */
  count: number;
};

export type WheelCatalogFacets = {
  processes: readonly WheelCatalogFacetOption<WheelProcess>[];
  diameters: readonly WheelCatalogFacetOption<number>[];
  widths: readonly WheelCatalogFacetOption<number>[];
  pcds: readonly WheelCatalogFacetOption<string>[];
};

/** 通用分页切片（列表 / 规格表共用同一套钳制规则）。 */
export type Page<T> = {
  /** 钳制后的真实页码（非法/越界值回落到合法页） */
  page: number;
  totalPages: number;
  total: number;
  /** 1-based 结果区间；无结果时为 0 */
  rangeStart: number;
  rangeEnd: number;
  items: readonly T[];
};

export type WheelCatalogPage = Page<WheelCatalogItem>;

/** 规格表一行（`index` 为源 variant 下标，用于行级选择的稳定键）。 */
export type WheelSpecRow = {
  index: number;
  variant: WheelVariant;
};

export type WheelCatalogSegment = {
  process: WheelProcess;
  /** 组介绍渲染为该段首格，不占分页名额 */
  showIntro: boolean;
  items: readonly WheelCatalogItem[];
};

export type WheelDetailSummary = {
  process: WheelProcess;
  diameter: string;
  width: string;
  pcd: string;
  offset: string;
  centerBore: string;
  colors: string;
  variantCount: number;
};

/** 只读取值的查询串视图（兼容 `URLSearchParams` 与 `ReadonlyURLSearchParams`）。 */
export type WheelCatalogQuery = {
  get(name: string): string | null;
};

/** ====== 格式化 ====== */

/** 单条孔距 → 展示串，如 `5×114.3`。 */
export function formatPcd(pcd: WheelPcd): string {
  return `${pcd.lugCount}×${pcd.pcdMm}`;
}

/**
 * 多条孔距并列展示，如 `5×100 / 5×114.3`。
 * 双孔距 variant 必须把两个孔距都写出来，不能只显示第一个。
 */
export function formatPcdList(pcds: readonly WheelPcd[]): string {
  const values = pcds.map(formatPcd);
  return [...new Set(values)].join(" / ");
}

/** 去重 + 排序后的孔距串拼接（按孔数、孔距升序）。 */
export function formatPcdValueList(values: readonly string[]): string {
  return sortPcdValues([...new Set(values)]).join(" / ");
}

/** 去重升序后拼接。 */
export function formatNumberList(values: readonly number[]): string {
  return [...new Set(values)].sort((a, b) => a - b).join(" / ");
}

/** 宽度取值域步长：J 值按半档递增（8 / 8.5 / 9 …）。 */
export const WHEEL_WIDTH_STEP_J = 0.5;

/**
 * 单值直接给出；连续区间给 `a–b`；跳号时逐项列出（不虚构中间值）。
 *
 * `step` 是该字段取值域的步长：偏距 / 直径是 1（整数），宽度是 0.5（J 值按半档递增）。
 * 不传步长会把 `8 / 8.5` 这类半档值误判成跳号并逐项列出。
 */
export function formatRange(values: readonly number[], unit: string, step = 1): string {
  const sorted = [...new Set(values)].sort((a, b) => a - b);
  const first = sorted[0];
  if (first === undefined) return "—";
  if (sorted.length === 1) return `${first} ${unit}`;
  const contiguous = sorted.every(
    (value, index) => index === 0 || Math.abs(value - sorted[index - 1] - step) < 1e-9
  );
  if (contiguous) return `${first}–${sorted[sorted.length - 1]} ${unit}`;
  return `${sorted.join(" / ")} ${unit}`;
}

/**
 * 「直径 × J值」组合串，如 `18×8.5`。未知一侧写破折号，不用 0 顶替。
 */
export function formatWheelSize(diameterIn: number | null, widthIn: number | null): string {
  return `${diameterIn === null ? "—" : diameterIn}×${widthIn === null ? "—" : widthIn}`;
}

/** 卡片尺寸摘要：逐 variant 的「直径×J值」组合，超过 `max` 个则折叠计数。 */
export function formatWheelSizeSummary(sizes: readonly string[], max = 4): string {
  if (sizes.length === 0) return "规格待确认";
  if (sizes.length <= max) return sizes.join(" / ");
  return `${sizes.slice(0, max).join(" / ")} 等 ${sizes.length} 种`;
}

/** 卡片尺寸摘要：直径去重后收敛成区间或列举。 */
export function formatDiameterSummary(diameters: readonly number[]): string {
  if (diameters.length === 0) return "规格待确认";
  return formatRange(diameters, "英寸");
}

/** 规格表单元格：未知（`null`）显示破折号，绝不用 0 顶替。 */
export function formatSpecValue(value: number | null, unit: string): string {
  return value === null ? "—" : `${value} ${unit}`;
}

/** 规格表单元格：颜色缺失显示破折号。 */
export function formatSpecText(value: string | null): string {
  return value === null || value === "" ? "—" : value;
}

/**
 * 一条 variant 的一行式描述（无障碍名称与「已选摘要」共用）。
 * 未知值写破折号，不猜、不用 0 顶替。
 */
export function formatWheelVariantLabel(variant: WheelVariant): string {
  const parts = [
    variant.diameterIn === null ? "直径 —" : `${variant.diameterIn} 英寸`,
    variant.widthIn === null ? "宽度 —" : `${variant.widthIn}J`,
    variant.pcd.length === 0 ? "PCD —" : formatPcdList(variant.pcd),
    variant.offsetMm === null ? "ET —" : `ET ${variant.offsetMm}`,
    variant.centerBoreMm === null ? "中心孔 —" : `中心孔 ${variant.centerBoreMm}`,
    variant.color === null ? "颜色 —" : variant.color,
  ];
  return parts.join(" · ");
}

/** 孔距排序：先按孔数，再按孔距。 */
export function sortPcdValues(values: readonly string[]): readonly string[] {
  return [...values].sort((a, b) => {
    const left = parsePcdValue(a);
    const right = parsePcdValue(b);
    if (left.lugCount !== right.lugCount) return left.lugCount - right.lugCount;
    return left.pcdMm - right.pcdMm;
  });
}

function parsePcdValue(value: string): WheelPcd {
  const [lugCount, pcdMm] = value.split("×");
  return { lugCount: Number(lugCount), pcdMm: Number(pcdMm) };
}

/** ====== 筛选 ====== */

function isWheelProcess(value: string | null): value is WheelProcess {
  return value === "旋压" || value === "锻造";
}

export function hasWheelCatalogFilters(filters: WheelCatalogFilters): boolean {
  return (
    filters.process !== null ||
    filters.diameter !== null ||
    filters.width !== null ||
    filters.pcd !== null
  );
}

/** 逐 variant 的三个 facet 维度。 */
const FACET_DIMENSIONS = ["diameter", "width", "pcd"] as const;
export type WheelCatalogFacetDimension = (typeof FACET_DIMENSIONS)[number];

/** 除 `skip` 外是否还有别的 facet 维度在生效。 */
function hasActiveFacetDimension(
  filters: WheelCatalogFilters,
  skip?: WheelCatalogFacetDimension
): boolean {
  return FACET_DIMENSIONS.some(
    (dimension) => dimension !== skip && filters[dimension] !== null
  );
}

/** 单条 facet 是否满足「除 `skip` 外」的全部生效维度。 */
function facetMatches(
  facet: WheelCatalogFacet,
  filters: WheelCatalogFilters,
  skip?: WheelCatalogFacetDimension
): boolean {
  if (skip !== "diameter" && filters.diameter !== null && facet.diameterIn !== filters.diameter) {
    return false;
  }
  if (skip !== "width" && filters.width !== null && facet.widthIn !== filters.width) {
    return false;
  }
  if (skip !== "pcd" && filters.pcd !== null && facet.pcd !== filters.pcd) {
    return false;
  }
  return true;
}

/**
 * 命中判定（§9.4）：
 * - 工艺是编号级维度；
 * - 直径 / J值 / PCD 必须落在**同一条 variant**（`facets` 保留逐 variant 的配对），
 *   因此 `18` + `8.5` 只在「某条 18×8.5 的 variant」上成立，不会被不同行凑出来；
 * - PCD 为包含语义：variant 的孔距数组任一值匹配即命中，
 *   双孔距轮毂（`5×100 / 5×114.3`）在按 `5×100` 与按 `5×114.3` 时都出现。
 */
function itemMatches(
  item: WheelCatalogItem,
  filters: WheelCatalogFilters,
  skip?: WheelCatalogFacetDimension | "process"
): boolean {
  if (skip !== "process" && filters.process !== null && item.process !== filters.process) {
    return false;
  }
  const facetSkip = skip === "process" ? undefined : skip;
  if (!hasActiveFacetDimension(filters, facetSkip)) return true;
  return item.facets.some((facet) => facetMatches(facet, filters, facetSkip));
}

export function filterWheelCatalog(
  items: readonly WheelCatalogItem[],
  filters: WheelCatalogFilters
): readonly WheelCatalogItem[] {
  if (!hasWheelCatalogFilters(filters)) return items;
  return items.filter((item) => itemMatches(item, filters));
}

/** 合法取值域 + 单维计数（选项排序稳定，不受筛选影响）。 */
export function buildWheelCatalogFacets(
  items: readonly WheelCatalogItem[],
  filters: WheelCatalogFilters = DEFAULT_WHEEL_CATALOG_FILTERS
): WheelCatalogFacets {
  const processCounts = new Map<WheelProcess, number>();
  const diameterCounts = new Map<number, number>();
  const widthCounts = new Map<number, number>();
  const pcdCounts = new Map<string, number>();

  for (const item of items) {
    // 工艺计数忽略工艺自身，其余维度照算。
    if (itemMatches(item, filters, "process")) {
      processCounts.set(item.process, (processCounts.get(item.process) ?? 0) + 1);
    }
    if (filters.process !== null && item.process !== filters.process) continue;

    // 其余三维：只取「另两维已满足」的 facet，逐编号去重后再计数。
    const diameters = new Set<number>();
    const widths = new Set<number>();
    const pcds = new Set<string>();
    for (const facet of item.facets) {
      if (facet.diameterIn !== null && facetMatches(facet, filters, "diameter")) {
        diameters.add(facet.diameterIn);
      }
      if (facet.widthIn !== null && facetMatches(facet, filters, "width")) {
        widths.add(facet.widthIn);
      }
      if (facetMatches(facet, filters, "pcd")) pcds.add(facet.pcd);
    }
    for (const value of diameters) {
      diameterCounts.set(value, (diameterCounts.get(value) ?? 0) + 1);
    }
    for (const value of widths) {
      widthCounts.set(value, (widthCounts.get(value) ?? 0) + 1);
    }
    for (const value of pcds) {
      pcdCounts.set(value, (pcdCounts.get(value) ?? 0) + 1);
    }
  }

  return {
    processes: (["旋压", "锻造"] as const)
      .map((value) => ({ value, count: processCounts.get(value) ?? 0 }))
      .filter((option) => option.count > 0),
    diameters: [...diameterCounts.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([value, count]) => ({ value, count })),
    widths: [...widthCounts.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([value, count]) => ({ value, count })),
    pcds: sortPcdValues([...pcdCounts.keys()]).map((value) => ({
      value,
      count: pcdCounts.get(value) ?? 0,
    })),
  };
}

/** 从投影派生合法取值域，用于钳制 URL 参数。 */
export function createWheelCatalogOptions(
  items: readonly WheelCatalogItem[]
): WheelCatalogOptions {
  const facets = buildWheelCatalogFacets(items);
  return {
    diameters: facets.diameters.map((option) => option.value),
    widths: facets.widths.map((option) => option.value),
    pcds: facets.pcds.map((option) => option.value),
  };
}

/** ====== 分页 / 分组 ====== */

/**
 * 页码钳制：非整数、小于 1、超过总页数一律回落到合法页。
 * 空结果集为 1 页（便于空态渲染）。
 */
export function paginateList<T>(
  items: readonly T[],
  page: number,
  pageSize: number
): Page<T> {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Number.isInteger(page) && page >= 1 ? page : 1;
  const current = Math.min(safePage, totalPages);
  const start = (current - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);

  return {
    page: current,
    totalPages,
    total,
    rangeStart: total === 0 ? 0 : start + 1,
    rangeEnd: total === 0 ? 0 : start + pageItems.length,
    items: pageItems,
  };
}

/** 目录页 24/页（§9.4）。 */
export function paginateWheelCatalog(
  items: readonly WheelCatalogItem[],
  page: number,
  pageSize: number = WHEEL_PAGE_SIZE
): WheelCatalogPage {
  return paginateList(items, page, pageSize);
}

/** 规格表行（`index` 保留源顺序：选中状态与筛表、分页无关）。 */
export function buildWheelSpecRows(
  variants: readonly WheelVariant[]
): readonly WheelSpecRow[] {
  return variants.map((variant, index) => ({ index, variant }));
}

/**
 * 按工艺切分当前页，供默认（无筛选）分组态渲染。
 * 组介绍作为段首格渲染，因此不计入分页名额 —— 本函数切分的始终是已分页的条目。
 */
export function groupWheelCatalogPage(
  items: readonly WheelCatalogItem[]
): readonly WheelCatalogSegment[] {
  const segments: {
    process: WheelProcess;
    showIntro: boolean;
    items: WheelCatalogItem[];
  }[] = [];

  for (const item of items) {
    const last = segments[segments.length - 1];
    if (last !== undefined && last.process === item.process) {
      last.items.push(item);
      continue;
    }
    segments.push({ process: item.process, showIntro: true, items: [item] });
  }

  return segments;
}

/** ====== URL 状态 ====== */

/**
 * 解析 `?process&diameter&pcd&page`。
 * 非法取值（不在数据域的工艺 / 直径 / 孔距，非整数页码）一律钳制为未筛选 / 第 1 页。
 */
export function parseWheelCatalogQuery(
  query: WheelCatalogQuery,
  options: WheelCatalogOptions
): WheelCatalogFilters {
  const processRaw = query.get("process");
  const diameterRaw = query.get("diameter");
  const widthRaw = query.get("width");
  const pcdRaw = query.get("pcd");
  const pageRaw = query.get("page");

  const diameterValue = diameterRaw === null ? Number.NaN : Number(diameterRaw);
  const widthValue = widthRaw === null ? Number.NaN : Number(widthRaw);
  const pageValue = pageRaw === null ? 1 : Number(pageRaw);

  return {
    process: isWheelProcess(processRaw) ? processRaw : null,
    diameter: options.diameters.includes(diameterValue) ? diameterValue : null,
    width: options.widths.includes(widthValue) ? widthValue : null,
    pcd: pcdRaw !== null && options.pcds.includes(pcdRaw) ? pcdRaw : null,
    page: Number.isInteger(pageValue) && pageValue >= 1 ? pageValue : 1,
  };
}

/** 生成 `?process&diameter&pcd&page`；默认值不写入（保持 URL 干净）。 */
export function buildWheelCatalogQuery(filters: WheelCatalogFilters): string {
  const params = new URLSearchParams();
  if (filters.process !== null) params.set("process", filters.process);
  if (filters.diameter !== null) params.set("diameter", String(filters.diameter));
  if (filters.width !== null) params.set("width", String(filters.width));
  if (filters.pcd !== null) params.set("pcd", filters.pcd);
  if (filters.page > 1) params.set("page", String(filters.page));
  return params.toString();
}

/** 筛选 / 翻页链接：查询串 + 锚点（翻页保留其他条件）。 */
export function buildWheelCatalogHref(filters: WheelCatalogFilters): string {
  const query = buildWheelCatalogQuery(filters);
  const suffix = `#${WHEEL_CATALOG_ANCHOR}`;
  return query.length > 0
    ? `${WHEEL_CATALOG_PATH}?${query}${suffix}`
    : `${WHEEL_CATALOG_PATH}${suffix}`;
}

/**
 * 改筛选回第 1 页。
 *
 * 直径与 J值 是两级尺寸：改直径时若不同时给出新的 J值，就把 J值清空，
 * 否则会留下「新直径 × 旧 J值」这种不存在的组合（分面选项是依赖式的，会直接空结果）。
 */
export function withWheelCatalogFilter(
  filters: WheelCatalogFilters,
  patch: Partial<Pick<WheelCatalogFilters, "process" | "diameter" | "width" | "pcd">>
): WheelCatalogFilters {
  const next: WheelCatalogFilters = { ...filters, ...patch, page: 1 };
  if (patch.diameter !== undefined && patch.width === undefined) next.width = null;
  return next;
}

/** ====== 详情页 ====== */

/** 详情页摘要：工艺 / 直径区间 / PCD / ET / 中心孔 / 颜色。 */
export function buildWheelDetailSummary(input: {
  process: WheelProcess;
  variants: readonly WheelVariant[];
  colors: readonly string[];
}): WheelDetailSummary {
  const { process, variants, colors } = input;
  const cbs = variants
    .map((variant) => variant.centerBoreMm)
    .filter((value): value is number => value !== null);

  return {
    process,
    diameter: formatRange(
      variants
        .map((variant) => variant.diameterIn)
        .filter((value): value is number => value !== null),
      "英寸"
    ),
    width: formatRange(
      variants
        .map((variant) => variant.widthIn)
        .filter((value): value is number => value !== null),
      "J",
      WHEEL_WIDTH_STEP_J
    ),
    pcd: formatPcdValueList(variants.flatMap((variant) => variant.pcd.map(formatPcd))),
    offset: formatRange(
      variants
        .map((variant) => variant.offsetMm)
        .filter((value): value is number => value !== null),
      "mm"
    ),
    centerBore: cbs.length === 0 ? "—" : `${formatNumberList(cbs)} mm`,
    colors: colors.length === 0 ? "—" : colors.join(" / "),
    variantCount: variants.length,
  };
}

/**
 * 页内锚点：只保留真正有内容的段落，不生成空锚点。
 * - 规格摘要 / 完整规格表：需要至少一条 variant；
 * - 产品图片：无图时渲染中性占位块，段落本身仍然存在；
 * - 到店确认：恒定存在。
 */
export function getWheelDetailSections(input: {
  imageCount: number;
  variantCount: number;
}): readonly WheelDetailSection[] {
  return WHEEL_DETAIL_SECTIONS.filter((section) => {
    if (section.id === WHEEL_DETAIL_SECTION_IDS.gallery) return true;
    if (section.id === WHEEL_DETAIL_SECTION_IDS.cta) return true;
    return input.variantCount > 0;
  });
}
