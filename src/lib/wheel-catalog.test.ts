import { describe, expect, it } from "vitest";
import {
  buildWheelCatalogFacets,
  buildWheelCatalogHref,
  buildWheelCatalogQuery,
  buildWheelDetailSummary,
  createWheelCatalogOptions,
  DEFAULT_WHEEL_CATALOG_FILTERS,
  filterWheelCatalog,
  formatDiameterSummary,
  formatPcdList,
  formatRange,
  formatWheelSize,
  formatWheelSizeSummary,
  formatWheelVariantLabel,
  getWheelDetailSections,
  groupWheelCatalogPage,
  hasWheelCatalogFilters,
  paginateWheelCatalog,
  parseWheelCatalogQuery,
  WHEEL_CATALOG_ANCHOR,
  WHEEL_PAGE_SIZE,
  withWheelCatalogFilter,
  type WheelCatalogFacet,
  type WheelCatalogFilters,
  type WheelCatalogItem,
} from "./wheel-catalog";
import { wheelCatalogItems, wheelCatalogOptions } from "./wheel-catalog-projection";
import type { WheelVariant } from "./wheels.data";

/**
 * 契约：specs/active/plans/wheel-page-prototype-migration-2026-09-21.md §9.4
 * 覆盖：跨维同 variant / PCD 包含语义 / 双孔距 / 分页钳制 / 空态 / 非法参数 / 分组不占名额。
 */

const filtersOf = (patch: Partial<WheelCatalogFilters> = {}): WheelCatalogFilters => ({
  ...DEFAULT_WHEEL_CATALOG_FILTERS,
  ...patch,
});

const facetOf = (
  diameterIn: number | null,
  widthIn: number | null,
  pcd: string
): WheelCatalogFacet => ({ diameterIn, widthIn, pcd });

const itemOf = (
  input: Pick<WheelCatalogItem, "id" | "process" | "facets"> & Partial<WheelCatalogItem>
): WheelCatalogItem => ({
  carSeries: "测试车系",
  diameters: [],
  sizes: [],
  colors: ["黑色车面"],
  cardImage: null,
  variantCount: input.facets.length,
  ...input,
});

const variantOf = (patch: Partial<WheelVariant> = {}): WheelVariant => ({
  diameterIn: 18,
  widthIn: 8,
  pcd: [{ lugCount: 5, pcdMm: 114.3 }],
  offsetMm: 35,
  centerBoreMm: 73.1,
  color: "黑色车面",
  ...patch,
});

describe("wheel-catalog 跨维同 variant 匹配", () => {
  // 直径 18 与 5×100 同属一条 variant；直径 19 与 5×112 同属另一条。
  const item = itemOf({
    id: "T001",
    process: "旋压",
    facets: [
      facetOf(18, 8, "5×100"),
      facetOf(19, 8.5, "5×112"),
    ],
  });

  it("命中：直径与 PCD 落在同一条 variant", () => {
    expect(filterWheelCatalog([item], filtersOf({ diameter: 18, pcd: "5×100" }))).toHaveLength(1);
    expect(filterWheelCatalog([item], filtersOf({ diameter: 19, pcd: "5×112" }))).toHaveLength(1);
  });

  it("不命中：两个维度都存在但不在同一条 variant 上", () => {
    expect(filterWheelCatalog([item], filtersOf({ diameter: 18, pcd: "5×112" }))).toHaveLength(0);
    expect(filterWheelCatalog([item], filtersOf({ diameter: 19, pcd: "5×100" }))).toHaveLength(0);
  });

  it("单维筛选分别生效", () => {
    expect(filterWheelCatalog([item], filtersOf({ diameter: 18 }))).toHaveLength(1);
    expect(filterWheelCatalog([item], filtersOf({ pcd: "5×112" }))).toHaveLength(1);
    expect(filterWheelCatalog([item], filtersOf({ diameter: 20 }))).toHaveLength(0);
    expect(filterWheelCatalog([item], filtersOf({ pcd: "6×139.7" }))).toHaveLength(0);
  });

  it("工艺为单维匹配，且与其它维度取交集", () => {
    expect(filterWheelCatalog([item], filtersOf({ process: "旋压" }))).toHaveLength(1);
    expect(filterWheelCatalog([item], filtersOf({ process: "锻造" }))).toHaveLength(0);
    expect(
      filterWheelCatalog([item], filtersOf({ process: "锻造", diameter: 18 }))
    ).toHaveLength(0);
  });

  it("无筛选时原样返回（保持引用，避免无谓重算）", () => {
    const items = [item];
    expect(filterWheelCatalog(items, DEFAULT_WHEEL_CATALOG_FILTERS)).toBe(items);
    expect(hasWheelCatalogFilters(DEFAULT_WHEEL_CATALOG_FILTERS)).toBe(false);
    expect(hasWheelCatalogFilters(filtersOf({ diameter: 19 }))).toBe(true);
  });
});

describe("wheel-catalog PCD 包含语义（双孔距）", () => {
  // 一只轮毂两条 variant 都支持两个孔距（源数据 5*100/114.3 的真实形态）。
  const dual = itemOf({
    id: "T101",
    process: "锻造",
    facets: [
      // 同一条 variant 支持两个孔距：直径与 J值 相同，孔距两条。
      facetOf(17, 7.5, "5×100"),
      facetOf(17, 7.5, "5×114.3"),
      facetOf(18, 8, "5×100"),
      facetOf(18, 8, "5×114.3"),
    ],
  });

  it("两个孔距条件下都命中，且与直径交叉仍落在同一条 variant", () => {
    expect(filterWheelCatalog([dual], filtersOf({ pcd: "5×100" }))).toHaveLength(1);
    expect(filterWheelCatalog([dual], filtersOf({ pcd: "5×114.3" }))).toHaveLength(1);
    expect(
      filterWheelCatalog([dual], filtersOf({ diameter: 18, pcd: "5×100" }))
    ).toHaveLength(1);
    expect(
      filterWheelCatalog([dual], filtersOf({ diameter: 18, pcd: "5×114.3" }))
    ).toHaveLength(1);
    expect(filterWheelCatalog([dual], filtersOf({ pcd: "5×112" }))).toHaveLength(0);
  });

  it("真实数据：GZ032（5×100 / 5×114.3）在两个 PCD 条件下都出现", () => {
    const gz032 = wheelCatalogItems.find((item) => item.id === "GZ032");
    expect(gz032).toBeDefined();
    if (gz032 === undefined) return;

    // 未被拆成两条 variant：同一 variant 的两条 facet 直径相同。
    const facetPcds = gz032.facets.map((facet) => facet.pcd);
    expect(facetPcds).toContain("5×100");
    expect(facetPcds).toContain("5×114.3");

    for (const pcd of ["5×100", "5×114.3"]) {
      const matched = filterWheelCatalog(wheelCatalogItems, filtersOf({ pcd }));
      expect(matched.map((item) => item.id), pcd).toContain("GZ032");
    }
  });

  it("真实数据：GZ081（4×100 / 4×114.3）同样在两个孔距条件下命中", () => {
    for (const pcd of ["4×100", "4×114.3"]) {
      const matched = filterWheelCatalog(wheelCatalogItems, filtersOf({ pcd }));
      expect(matched.map((item) => item.id), pcd).toContain("GZ081");
    }
  });

  it("真实数据：跨维筛选结果全部满足同一条 variant", () => {
    const diameter = 19;
    const pcd = "5×114.3";
    const matched = filterWheelCatalog(
      wheelCatalogItems,
      filtersOf({ diameter, pcd })
    );

    expect(matched.length).toBeGreaterThan(0);
    for (const item of matched) {
      expect(
        item.facets.some((facet) => facet.diameterIn === diameter && facet.pcd === pcd),
        item.id
      ).toBe(true);
    }
  });
});

describe("wheel-catalog 分页", () => {
  const items = wheelCatalogItems;

  it("按 24/页切分，页数与区间正确", () => {
    const first = paginateWheelCatalog(items, 1);
    expect(first.total).toBe(items.length);
    expect(first.totalPages).toBe(Math.ceil(items.length / WHEEL_PAGE_SIZE));
    expect(first.items).toHaveLength(WHEEL_PAGE_SIZE);
    expect(first.rangeStart).toBe(1);
    expect(first.rangeEnd).toBe(WHEEL_PAGE_SIZE);

    const last = paginateWheelCatalog(items, first.totalPages);
    expect(last.rangeEnd).toBe(items.length);
    expect(last.items).toHaveLength(items.length - (first.totalPages - 1) * WHEEL_PAGE_SIZE);
  });

  it("越界页码钳制到最后一页", () => {
    const totalPages = Math.ceil(items.length / WHEEL_PAGE_SIZE);
    const page = paginateWheelCatalog(items, 9999);
    expect(page.page).toBe(totalPages);
    expect(page.rangeEnd).toBe(items.length);
  });

  it("非法页码（0 / 负数 / 小数 / NaN）回落到第 1 页", () => {
    for (const value of [0, -3, 2.5, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(paginateWheelCatalog(items, value).page).toBe(1);
    }
  });

  it("空结果集是 1 页且区间为 0（供空态渲染）", () => {
    const empty = paginateWheelCatalog([], 1);
    expect(empty.total).toBe(0);
    expect(empty.totalPages).toBe(1);
    expect(empty.page).toBe(1);
    expect(empty.rangeStart).toBe(0);
    expect(empty.rangeEnd).toBe(0);
    expect(empty.items).toEqual([]);
  });

  it("空态：不可能命中的组合给出空结果", () => {
    const matched = filterWheelCatalog(
      items,
      filtersOf({ process: "旋压", diameter: 23, pcd: "6×139.7" })
    );
    expect(matched).toHaveLength(0);
    expect(paginateWheelCatalog(matched, 1).total).toBe(0);
  });
});

describe("wheel-catalog 分组（组介绍不占分页名额）", () => {
  it("真实数据：第 1 页只有旋压，1 个组介绍 + 24 个编号", () => {
    const page = paginateWheelCatalog(wheelCatalogItems, 1);
    const segments = groupWheelCatalogPage(page.items);

    expect(segments).toHaveLength(1);
    expect(segments[0]?.process).toBe("旋压");
    expect(segments[0]?.showIntro).toBe(true);
    // 组介绍是额外的首格，不占用 24 个名额。
    expect(segments.reduce((sum, segment) => sum + segment.items.length, 0)).toBe(
      WHEEL_PAGE_SIZE
    );
  });

  it("跨工艺的页会切成两段，各有一个组介绍，编号总数仍等于分页名额", () => {
    const mixed = [
      itemOf({ id: "M1", process: "旋压", facets: [facetOf(18, 8, "5×100")] }),
      itemOf({ id: "M2", process: "旋压", facets: [facetOf(18, 8, "5×100")] }),
      itemOf({ id: "M3", process: "锻造", facets: [facetOf(18, 8, "5×100")] }),
    ];

    const segments = groupWheelCatalogPage(mixed);
    expect(segments.map((segment) => segment.process)).toEqual(["旋压", "锻造"]);
    expect(segments.every((segment) => segment.showIntro)).toBe(true);
    expect(segments.reduce((sum, segment) => sum + segment.items.length, 0)).toBe(3);
  });

  it("同一工艺的编号只出现一次组介绍", () => {
    const segments = groupWheelCatalogPage([
      itemOf({ id: "M1", process: "锻造", facets: [facetOf(18, 8, "5×100")] }),
      itemOf({ id: "M2", process: "锻造", facets: [facetOf(18, 8, "5×100")] }),
    ]);
    expect(segments).toHaveLength(1);
    expect(segments[0]?.items.map((item) => item.id)).toEqual(["M1", "M2"]);
  });
});

describe("wheel-catalog 分面与取值域", () => {
  it("分面计数是单维计数，且取值域来自真实数据", () => {
    const facets = buildWheelCatalogFacets(wheelCatalogItems);
    expect(facets.processes.map((option) => option.value)).toEqual(["旋压", "锻造"]);
    expect(
      facets.processes.reduce((sum, option) => sum + option.count, 0)
    ).toBe(wheelCatalogItems.length);

    const totalDiameterSlots = facets.diameters.reduce(
      (sum, option) => sum + option.count,
      0
    );
    const expectedSlots = wheelCatalogItems.reduce(
      (sum, item) => sum + item.diameters.length,
      0
    );
    expect(totalDiameterSlots).toBe(expectedSlots);

    expect(facets.diameters.map((option) => option.value)).toEqual(
      [...facets.diameters.map((option) => option.value)].sort((a, b) => a - b)
    );
    // 每个直径选项都至少能命中一个编号。
    expect(facets.diameters.every((option) => option.count > 0)).toBe(true);
    expect(facets.pcds.every((option) => option.count > 0)).toBe(true);
  });

  it("PCD 选项按孔数、孔距排序（4×… 在 5×… 前，5×100 在 5×114.3 前）", () => {
    const pcds = buildWheelCatalogFacets(wheelCatalogItems).pcds.map(
      (option) => option.value
    );
    expect(pcds.indexOf("4×100")).toBeLessThan(pcds.indexOf("5×100"));
    expect(pcds.indexOf("5×100")).toBeLessThan(pcds.indexOf("5×114.3"));
    expect(pcds.indexOf("5×150")).toBeLessThan(pcds.indexOf("6×139.7"));
  });

  it("取值域可反推出非法参数是否在域内", () => {
    const options = createWheelCatalogOptions(wheelCatalogItems);
    expect(options).toEqual(wheelCatalogOptions);
    expect(options.diameters).toContain(19);
    expect(options.diameters).not.toContain(30);
    expect(options.pcds).toContain("5×114.3");
    expect(options.pcds).not.toContain("5×999");
  });
});

describe("wheel-catalog URL 状态", () => {
  it("解析合法查询串", () => {
    const params = new URLSearchParams({
      process: "锻造",
      diameter: "19",
      pcd: "5×114.3",
      page: "3",
    });
    expect(parseWheelCatalogQuery(params, wheelCatalogOptions)).toEqual({
      process: "锻造",
      diameter: 19,
      width: null,
      pcd: "5×114.3",
      page: 3,
    });
  });

  it("非法参数一律钳制为未筛选 / 第 1 页", () => {
    const params = new URLSearchParams({
      process: "铸造",
      diameter: "30",
      pcd: "5×999",
      page: "-2",
    });
    expect(parseWheelCatalogQuery(params, wheelCatalogOptions)).toEqual(
      DEFAULT_WHEEL_CATALOG_FILTERS
    );

    const junk = new URLSearchParams({ diameter: "abc", page: "2.5" });
    expect(parseWheelCatalogQuery(junk, wheelCatalogOptions).diameter).toBeNull();
    expect(parseWheelCatalogQuery(junk, wheelCatalogOptions).page).toBe(1);
  });

  it("空查询串 = 默认筛选", () => {
    expect(
      parseWheelCatalogQuery(new URLSearchParams(), wheelCatalogOptions)
    ).toEqual(DEFAULT_WHEEL_CATALOG_FILTERS);
  });

  it("生成查询串时省略默认值，page=1 不写入", () => {
    expect(buildWheelCatalogQuery(DEFAULT_WHEEL_CATALOG_FILTERS)).toBe("");
    expect(
      buildWheelCatalogQuery(filtersOf({ process: "旋压", diameter: 18, page: 2 }))
    ).toBe("process=%E6%97%8B%E5%8E%8B&diameter=18&page=2");
  });

  it("解析 → 生成 可往返", () => {
    const query = "process=%E9%94%BB%E9%80%A0&diameter=19&pcd=5%C3%97114.3&page=2";
    const parsed = parseWheelCatalogQuery(new URLSearchParams(query), wheelCatalogOptions);
    expect(buildWheelCatalogQuery(parsed)).toBe(query);
  });

  it("链接带锚点，改筛选回第 1 页，翻页保留其它条件", () => {
    const current = filtersOf({ process: "旋压", diameter: 19, pcd: "5×114.3", page: 4 });
    expect(buildWheelCatalogHref(current)).toContain(`#${WHEEL_CATALOG_ANCHOR}`);

    const filtered = withWheelCatalogFilter(current, { diameter: 20 });
    expect(filtered).toEqual({
      process: "旋压",
      diameter: 20,
      // 改直径会清空 J值（原来是未选，清空后仍为 null）。
      width: null,
      pcd: "5×114.3",
      page: 1,
    });

    const next = filtersOf({ ...current, page: current.page + 1 });
    expect(buildWheelCatalogQuery(next)).toContain("process=");
    expect(buildWheelCatalogQuery(next)).toContain("diameter=19");
    expect(buildWheelCatalogQuery(next)).toContain("pcd=");
    expect(buildWheelCatalogQuery(next)).toContain("page=5");
  });
});

describe("wheel-catalog 格式化", () => {
  it("尺寸摘要：单值 / 连续区间 / 跳号列举 / 空值", () => {
    expect(formatDiameterSummary([19])).toBe("19 英寸");
    expect(formatDiameterSummary([17, 18, 19])).toBe("17–19 英寸");
    expect(formatDiameterSummary([17, 19, 18])).toBe("17–19 英寸");
    expect(formatDiameterSummary([16, 18, 20])).toBe("16 / 18 / 20 英寸");
    expect(formatDiameterSummary([])).toBe("规格待确认");
  });

  it("区间格式化不虚构中间值", () => {
    expect(formatRange([], "mm")).toBe("—");
    expect(formatRange([35], "mm")).toBe("35 mm");
    expect(formatRange([40, 35, 36], "mm")).toBe("35 / 36 / 40 mm");
    expect(formatRange([35, 38, 40], "mm")).toBe("35 / 38 / 40 mm");
    // 半档域（J 值）相邻值算连续：8 → 8.5 之间没有别的可选宽度。
    expect(formatRange([9, 8.5, 8], "J", 0.5)).toBe("8–9 J");
    // 步长不匹配时不得收敛成区间（防止把整数域的半档规则泄漏到其它字段）。
    expect(formatRange([8, 8.5], "J")).toBe("8 / 8.5 J");
  });

  it("双孔距并列写出两个孔距", () => {
    expect(
      formatPcdList([
        { lugCount: 5, pcdMm: 100 },
        { lugCount: 5, pcdMm: 114.3 },
      ])
    ).toBe("5×100 / 5×114.3");
    expect(formatPcdList([{ lugCount: 4, pcdMm: 100 }])).toBe("4×100");
  });

  it("一条 variant 的一行式描述：未知值写破折号", () => {
    expect(formatWheelVariantLabel(variantOf())).toBe(
      "18 英寸 · 8J · 5×114.3 · ET 35 · 中心孔 73.1 · 黑色车面"
    );
    expect(
      formatWheelVariantLabel(
        variantOf({ diameterIn: null, widthIn: null, color: null })
      )
    ).toBe("直径 — · 宽度 — · 5×114.3 · ET 35 · 中心孔 73.1 · 颜色 —");
  });
});

describe("wheel-catalog 详情摘要与页内锚点", () => {
  it("汇总工艺 / 直径区间 / PCD / ET / 中心孔 / 颜色", () => {
    const summary = buildWheelDetailSummary({
      process: "旋压",
      variants: [
        variantOf(),
        variantOf({
          diameterIn: 19,
          widthIn: 8.5,
          pcd: [
            { lugCount: 5, pcdMm: 100 },
            { lugCount: 5, pcdMm: 114.3 },
          ],
          offsetMm: 40,
          centerBoreMm: 64.1,
        }),
      ],
      colors: ["黑色车面", "钛空银"],
    });

    expect(summary.process).toBe("旋压");
    expect(summary.diameter).toBe("18–19 英寸");
    expect(summary.width).toBe("8–8.5 J");
    expect(summary.pcd).toBe("5×100 / 5×114.3");
    // ET 只有 35 与 40 两个可选值，中间没有 36–39，收敛成区间会虚构可选项。
    expect(summary.offset).toBe("35 / 40 mm");
    expect(summary.centerBore).toBe("64.1 / 73.1 mm");
    expect(summary.colors).toBe("黑色车面 / 钛空银");
    expect(summary.variantCount).toBe(2);
  });

  it("无内容不生成空锚点：没有 variant 时去掉规格摘要与规格表", () => {
    expect(
      getWheelDetailSections({ imageCount: 2, variantCount: 5 }).map((s) => s.id)
    ).toEqual(["wheel-detail-gallery", "wheel-detail-summary", "wheel-detail-specs", "wheel-detail-cta"]);

    expect(
      getWheelDetailSections({ imageCount: 0, variantCount: 0 }).map((s) => s.id)
    ).toEqual(["wheel-detail-gallery", "wheel-detail-cta"]);
  });

  it("真实数据：404 个编号全部都有可展示的段落", () => {
    for (const item of wheelCatalogItems) {
      const sections = getWheelDetailSections({
        imageCount: item.cardImage === null ? 0 : 1,
        variantCount: item.variantCount,
      });
      expect(sections.length, item.id).toBeGreaterThanOrEqual(3);
    }
  });
});

describe("wheel-catalog 投影与客户端包边界", () => {
  it("投影条数与基础字段和生成物一致", () => {
    expect(wheelCatalogItems).toHaveLength(404);
    expect(wheelCatalogItems.every((item) => item.id.length > 0)).toBe(true);
    expect(wheelCatalogItems.every((item) => item.variantCount > 0)).toBe(true);
    // 26 个缺图编号：cardImage 为 null，不做替代图。
    expect(wheelCatalogItems.filter((item) => item.cardImage === null)).toHaveLength(26);
    expect(
      wheelCatalogItems.filter((item) => item.cardImage !== null).every((item) =>
        item.cardImage?.endsWith(`/${item.id}-card.webp`)
      )
    ).toBe(true);
  });

  it("facets 的直径集合与投影的尺寸摘要一致（未解析直径不计入）", () => {
    for (const item of wheelCatalogItems) {
      const fromFacets = [
        ...new Set(
          item.facets
            .map((facet) => facet.diameterIn)
            .filter((diameter): diameter is number => diameter !== null)
        ),
      ].sort((a, b) => a - b);
      expect(fromFacets, item.id).toEqual([...item.diameters]);
    }
  });
});

describe("wheel-catalog 尺寸两级筛选（直径 × J值）", () => {
  it("直径与 J值 必须落在同一条 variant", () => {
    const items = [
      itemOf({
        id: "SAME-DIFF",
        process: "旋压",
        facets: [facetOf(18, 8, "5×112"), facetOf(19, 8.5, "5×114.3")],
      }),
    ];
    expect(filterWheelCatalog(items, filtersOf({ diameter: 18, width: 8 }))).toHaveLength(1);
    expect(filterWheelCatalog(items, filtersOf({ diameter: 19, width: 8.5 }))).toHaveLength(1);
    // 18×8.5 与 19×8 都是跨行拼出来的组合，必须落空。
    expect(filterWheelCatalog(items, filtersOf({ diameter: 18, width: 8.5 }))).toHaveLength(0);
    expect(filterWheelCatalog(items, filtersOf({ diameter: 19, width: 8 }))).toHaveLength(0);
  });

  it("尺寸与 PCD 三维也必须同 variant", () => {
    const items = [
      itemOf({
        id: "M",
        process: "旋压",
        facets: [facetOf(18, 8, "5×112"), facetOf(19, 8, "5×114.3")],
      }),
    ];
    expect(
      filterWheelCatalog(items, filtersOf({ diameter: 19, width: 8, pcd: "5×114.3" }))
    ).toHaveLength(1);
    expect(
      filterWheelCatalog(items, filtersOf({ diameter: 18, width: 8, pcd: "5×114.3" }))
    ).toHaveLength(0);
  });

  it("J值 可单维筛选（不要求先选直径）", () => {
    const items = [
      itemOf({ id: "W85", process: "旋压", facets: [facetOf(18, 8.5, "5×112")] }),
      itemOf({ id: "W80", process: "旋压", facets: [facetOf(18, 8, "5×112")] }),
    ];
    expect(filterWheelCatalog(items, filtersOf({ width: 8.5 })).map((i) => i.id)).toEqual(["W85"]);
  });

  it("J值选项与计数依赖已选直径，不会给出选了就空的组合", () => {
    const items = [
      itemOf({ id: "A", process: "旋压", facets: [facetOf(15, 6, "5×100")] }),
      itemOf({ id: "B", process: "旋压", facets: [facetOf(18, 8.5, "5×112")] }),
    ];
    const all = buildWheelCatalogFacets(items, filtersOf());
    expect(all.widths.map((option) => option.value)).toEqual([6, 8.5]);

    const at15 = buildWheelCatalogFacets(items, filtersOf({ diameter: 15 }));
    expect(at15.widths.map((option) => option.value)).toEqual([6]);
    // 直径自身的选择范围不受自己影响。
    expect(at15.diameters.map((option) => option.value)).toEqual([15, 18]);

    const withPcd = buildWheelCatalogFacets(items, filtersOf({ pcd: "5×112" }));
    expect(withPcd.diameters.map((option) => option.value)).toEqual([18]);
    expect(withPcd.widths.map((option) => option.value)).toEqual([8.5]);
  });

  it("改直径会清空 J值，避免留下不存在的组合", () => {
    const next = withWheelCatalogFilter(
      filtersOf({ diameter: 18, width: 8.5, page: 3 }),
      { diameter: 19 }
    );
    expect(next.diameter).toBe(19);
    expect(next.width).toBeNull();
    expect(next.page).toBe(1);

    const both = withWheelCatalogFilter(filtersOf(), { diameter: 19, width: 8.5 });
    expect(both.width).toBe(8.5);

    const widthOnly = withWheelCatalogFilter(filtersOf({ diameter: 18 }), { width: 9 });
    expect(widthOnly.diameter).toBe(18);
    expect(widthOnly.width).toBe(9);
  });

  it("尺寸两级都进 URL 并可往返", () => {
    const query = buildWheelCatalogQuery(
      filtersOf({ diameter: 19, width: 8.5, pcd: "5×114.3" })
    );
    expect(query).toContain("diameter=19");
    expect(query).toContain("width=8.5");
    const parsed = parseWheelCatalogQuery(new URLSearchParams(query), wheelCatalogOptions);
    expect(parsed.diameter).toBe(19);
    expect(parsed.width).toBe(8.5);
    expect(buildWheelCatalogQuery(parsed)).toBe(query);
  });

  it("非法 J值 被钳制成未筛选", () => {
    const parsed = parseWheelCatalogQuery(new URLSearchParams("width=99.5"), wheelCatalogOptions);
    expect(parsed.width).toBeNull();
    expect(wheelCatalogOptions.widths.length).toBeGreaterThan(0);
  });

  it("尺寸组合串与卡片摘要", () => {
    expect(formatWheelSize(18, 8.5)).toBe("18×8.5");
    expect(formatWheelSize(18, null)).toBe("18×—");
    expect(formatWheelSizeSummary([])).toBe("规格待确认");
    expect(formatWheelSizeSummary(["18×8", "18×8.5"])).toBe("18×8 / 18×8.5");
    expect(formatWheelSizeSummary(["a", "b", "c", "d", "e"])).toBe("a / b / c / d 等 5 种");
  });

  it("真实数据：卡片尺寸摘要与 facets 一致，且都带 J值", () => {
    let withSizes = 0;
    for (const item of wheelCatalogItems) {
      // 直径与 J值 都未知的 facet 仍要留给 PCD 筛选用，但它不构成一个「尺寸组合」。
      const fromFacets = [
        ...new Set(
          item.facets
            .filter((facet) => facet.diameterIn !== null || facet.widthIn !== null)
            .map((facet) => formatWheelSize(facet.diameterIn, facet.widthIn))
        ),
      ].sort();
      expect([...item.sizes].sort(), item.id).toEqual(fromFacets);
      for (const size of item.sizes) {
        expect(size, item.id).toMatch(/^(\d+|—)×(\d+(?:\.\d+)?|—)$/);
      }
      if (item.sizes.length > 0) withSizes += 1;
    }
    // 只有源表规格完全为空的极少数编号没有尺寸组合。
    expect(withSizes).toBeGreaterThan(wheelCatalogItems.length - 10);
  });
});
