/**
 * 改色膜色卡分组数据（由 docs/product-image-map.json 生成，勿手改）。
 * 每张色卡仅为色板参考，实际效果以实车为准；不收录供应商名称与膜材型号。
 */

export type FilmColorCard = {
  code: string;
  image: string;
  kind: "色卡";
};

export type FilmColorGroup = {
  id: string;
  label: string;
  description: string;
  cards: FilmColorCard[];
};

export const filmColorGroup_a: FilmColorGroup = {
  id: "a",
  label: "色卡 A 组",
  description: "基础单色与常见改色方向色板",
  cards: [
  { code: "A-001", image: "/images/products/color-film/MGS-A/A-001-measurement-1.webp", kind: "色卡" as const },
  { code: "A-003", image: "/images/products/color-film/MGS-A/A-003-measurement-25.webp", kind: "色卡" as const },
  { code: "A-004", image: "/images/products/color-film/MGS-A/A-004-measurement-26.webp", kind: "色卡" as const },
  { code: "A-005", image: "/images/products/color-film/MGS-A/A-005-measurement-19.webp", kind: "色卡" as const },
  { code: "A-005", image: "/images/products/color-film/MGS-A/A-005-measurement-27.webp", kind: "色卡" as const },
  { code: "A-006", image: "/images/products/color-film/MGS-A/A-006-measurement-20.webp", kind: "色卡" as const },
  { code: "A-006", image: "/images/products/color-film/MGS-A/A-006-measurement-28.webp", kind: "色卡" as const },
  { code: "A-007", image: "/images/products/color-film/MGS-A/A-007-measurement-29.webp", kind: "色卡" as const },
  { code: "A-008", image: "/images/products/color-film/MGS-A/A-008-measurement-30.webp", kind: "色卡" as const },
  { code: "A-009", image: "/images/products/color-film/MGS-A/A-009-measurement-31.webp", kind: "色卡" as const },
  { code: "A-010", image: "/images/products/color-film/MGS-A/A-010-measurement-32.webp", kind: "色卡" as const },
  { code: "A-011", image: "/images/products/color-film/MGS-A/A-011-measurement-33.webp", kind: "色卡" as const },
  { code: "A-012", image: "/images/products/color-film/MGS-A/A-012-measurement-34.webp", kind: "色卡" as const },
  { code: "A-013", image: "/images/products/color-film/MGS-A/A-013-measurement-35.webp", kind: "色卡" as const },
  { code: "A-014", image: "/images/products/color-film/MGS-A/A-014-measurement-36.webp", kind: "色卡" as const },
  { code: "A-015", image: "/images/products/color-film/MGS-A/A-015-measurement-37.webp", kind: "色卡" as const },
  { code: "A-016", image: "/images/products/color-film/MGS-A/A-016-measurement-38.webp", kind: "色卡" as const },
  { code: "A-017", image: "/images/products/color-film/MGS-A/A-017-measurement-39.webp", kind: "色卡" as const },
  { code: "A-018", image: "/images/products/color-film/MGS-A/A-018-measurement-40.webp", kind: "色卡" as const },
  { code: "A-019", image: "/images/products/color-film/MGS-A/A-019-measurement-41.webp", kind: "色卡" as const },
  { code: "A-020", image: "/images/products/color-film/MGS-A/A-020-measurement-42.webp", kind: "色卡" as const },
  { code: "A-021", image: "/images/products/color-film/MGS-A/A-021-measurement-43.webp", kind: "色卡" as const },
  { code: "A-022", image: "/images/products/color-film/MGS-A/A-022-measurement-44.webp", kind: "色卡" as const },
  { code: "A-023", image: "/images/products/color-film/MGS-A/A-023-measurement-45.webp", kind: "色卡" as const },
  { code: "A-024", image: "/images/products/color-film/MGS-A/A-024-measurement-46.webp", kind: "色卡" as const },
  { code: "A-025", image: "/images/products/color-film/MGS-A/A-025-measurement-47.webp", kind: "色卡" as const },
  { code: "A-026", image: "/images/products/color-film/MGS-A/A-026-measurement-48.webp", kind: "色卡" as const },
  { code: "A-027", image: "/images/products/color-film/MGS-A/A-027-measurement-49.webp", kind: "色卡" as const },
  { code: "A-029", image: "/images/products/color-film/MGS-A/A-029-measurement-50.webp", kind: "色卡" as const },
  { code: "A-030", image: "/images/products/color-film/MGS-A/A-030-measurement-51.webp", kind: "色卡" as const },
  { code: "A-031", image: "/images/products/color-film/MGS-A/A-031-measurement-52.webp", kind: "色卡" as const },
  { code: "A-032", image: "/images/products/color-film/MGS-A/A-032-measurement-53.webp", kind: "色卡" as const },
  { code: "A-033", image: "/images/products/color-film/MGS-A/A-033-measurement-54.webp", kind: "色卡" as const },
  ],
};

export const filmColorGroup_b: FilmColorGroup = {
  id: "b",
  label: "色卡 B 组",
  description: "进阶单色与质感色板",
  cards: [
  { code: "B-002", image: "/images/products/color-film/MGS-B/B-002-measurement-15.webp", kind: "色卡" as const },
  { code: "B-002", image: "/images/products/color-film/MGS-B/B-002-measurement-17.webp", kind: "色卡" as const },
  { code: "B-101", image: "/images/products/color-film/MGS-B/B-101-measurement-55.webp", kind: "色卡" as const },
  { code: "B-102", image: "/images/products/color-film/MGS-B/B-102-measurement-56.webp", kind: "色卡" as const },
  { code: "B-102", image: "/images/products/color-film/MGS-B/B-102-measurement-57.webp", kind: "色卡" as const },
  { code: "B-104", image: "/images/products/color-film/MGS-B/B-104-measurement-58.webp", kind: "色卡" as const },
  { code: "B-105", image: "/images/products/color-film/MGS-B/B-105-measurement-59.webp", kind: "色卡" as const },
  { code: "B-106", image: "/images/products/color-film/MGS-B/B-106-measurement-60.webp", kind: "色卡" as const },
  { code: "B-107", image: "/images/products/color-film/MGS-B/B-107-measurement-61.webp", kind: "色卡" as const },
  { code: "B-109", image: "/images/products/color-film/MGS-B/B-109-measurement-62.webp", kind: "色卡" as const },
  { code: "B-110", image: "/images/products/color-film/MGS-B/B-110-measurement-63.webp", kind: "色卡" as const },
  { code: "B-111", image: "/images/products/color-film/MGS-B/B-111-measurement-64.webp", kind: "色卡" as const },
  { code: "B-112", image: "/images/products/color-film/MGS-B/B-112-measurement-65.webp", kind: "色卡" as const },
  { code: "B-113", image: "/images/products/color-film/MGS-B/B-113-measurement-66.webp", kind: "色卡" as const },
  { code: "B-114", image: "/images/products/color-film/MGS-B/B-114-measurement-67.webp", kind: "色卡" as const },
  { code: "B-117", image: "/images/products/color-film/MGS-B/B-117-measurement-21.webp", kind: "色卡" as const },
  { code: "B-118", image: "/images/products/color-film/MGS-B/B-118-measurement-22.webp", kind: "色卡" as const },
  { code: "B-120", image: "/images/products/color-film/MGS-B/B-120-measurement-23.webp", kind: "色卡" as const },
  { code: "B-121", image: "/images/products/color-film/MGS-B/B-121-measurement-24.webp", kind: "色卡" as const },
  { code: "B-122", image: "/images/products/color-film/MGS-B/B-122-measurement-68.webp", kind: "色卡" as const },
  { code: "B-123", image: "/images/products/color-film/MGS-B/B-123-measurement-69.webp", kind: "色卡" as const },
  { code: "B-124", image: "/images/products/color-film/MGS-B/B-124-measurement-70.webp", kind: "色卡" as const },
  { code: "B-125", image: "/images/products/color-film/MGS-B/B-125-measurement-71.webp", kind: "色卡" as const },
  { code: "B-126", image: "/images/products/color-film/MGS-B/B-126-measurement-72.webp", kind: "色卡" as const },
  { code: "B-127", image: "/images/products/color-film/MGS-B/B-127-measurement-73.webp", kind: "色卡" as const },
  { code: "B-128", image: "/images/products/color-film/MGS-B/B-128-measurement-74.webp", kind: "色卡" as const },
  { code: "B-129", image: "/images/products/color-film/MGS-B/B-129-measurement-75.webp", kind: "色卡" as const },
  { code: "B-130", image: "/images/products/color-film/MGS-B/B-130-measurement-76.webp", kind: "色卡" as const },
  { code: "B-131", image: "/images/products/color-film/MGS-B/B-131-measurement-77.webp", kind: "色卡" as const },
  { code: "B-132", image: "/images/products/color-film/MGS-B/B-132-measurement-78.webp", kind: "色卡" as const },
  ],
};

export const filmColorGroup_c: FilmColorGroup = {
  id: "c",
  label: "色卡 C 组",
  description: "彩色与流行方向色板",
  cards: [
  { code: "C-201", image: "/images/products/color-film/MGS-C/C-201-measurement-79.webp", kind: "色卡" as const },
  { code: "C-202", image: "/images/products/color-film/MGS-C/C-202-measurement-80.webp", kind: "色卡" as const },
  { code: "C-203", image: "/images/products/color-film/MGS-C/C-203-measurement-81.webp", kind: "色卡" as const },
  { code: "C-204", image: "/images/products/color-film/MGS-C/C-204-measurement-82.webp", kind: "色卡" as const },
  { code: "C-205", image: "/images/products/color-film/MGS-C/C-205-measurement-83.webp", kind: "色卡" as const },
  { code: "C-206", image: "/images/products/color-film/MGS-C/C-206-measurement-84.webp", kind: "色卡" as const },
  { code: "C-207", image: "/images/products/color-film/MGS-C/C-207-measurement-85.webp", kind: "色卡" as const },
  { code: "C-208", image: "/images/products/color-film/MGS-C/C-208-measurement-86.webp", kind: "色卡" as const },
  { code: "C-209", image: "/images/products/color-film/MGS-C/C-209-measurement-87.webp", kind: "色卡" as const },
  { code: "C-210", image: "/images/products/color-film/MGS-C/C-210-measurement-88.webp", kind: "色卡" as const },
  { code: "C-212", image: "/images/products/color-film/MGS-C/C-212-measurement-89.webp", kind: "色卡" as const },
  { code: "C-213", image: "/images/products/color-film/MGS-C/C-213-measurement-90.webp", kind: "色卡" as const },
  { code: "C-215", image: "/images/products/color-film/MGS-C/C-215-measurement-91.webp", kind: "色卡" as const },
  { code: "C-216", image: "/images/products/color-film/MGS-C/C-216-measurement-92.webp", kind: "色卡" as const },
  { code: "C-217", image: "/images/products/color-film/MGS-C/C-217-measurement-93.webp", kind: "色卡" as const },
  { code: "C-218", image: "/images/products/color-film/MGS-C/C-218-measurement-94.webp", kind: "色卡" as const },
  { code: "C-219", image: "/images/products/color-film/MGS-C/C-219-measurement-95.webp", kind: "色卡" as const },
  { code: "C-220", image: "/images/products/color-film/MGS-C/C-220-measurement-96.webp", kind: "色卡" as const },
  { code: "C-222", image: "/images/products/color-film/MGS-C/C-222-measurement-97.webp", kind: "色卡" as const },
  { code: "C-223", image: "/images/products/color-film/MGS-C/C-223-measurement-98.webp", kind: "色卡" as const },
  { code: "C-224", image: "/images/products/color-film/MGS-C/C-224-measurement-99.webp", kind: "色卡" as const },
  { code: "C-225", image: "/images/products/color-film/MGS-C/C-225-measurement-100.webp", kind: "色卡" as const },
  { code: "C-226", image: "/images/products/color-film/MGS-C/C-226-measurement-101.webp", kind: "色卡" as const },
  ],
};

export const filmColorGroup_d: FilmColorGroup = {
  id: "d",
  label: "色卡 D 组",
  description: "深色与特殊质感色板",
  cards: [
  { code: "D-301", image: "/images/products/color-film/MGS-D/D-301-measurement-102.webp", kind: "色卡" as const },
  { code: "D-302", image: "/images/products/color-film/MGS-D/D-302-measurement-103.webp", kind: "色卡" as const },
  { code: "D-303", image: "/images/products/color-film/MGS-D/D-303-measurement-104.webp", kind: "色卡" as const },
  { code: "D-304", image: "/images/products/color-film/MGS-D/D-304-measurement-105.webp", kind: "色卡" as const },
  { code: "D-305", image: "/images/products/color-film/MGS-D/D-305-measurement-106.webp", kind: "色卡" as const },
  { code: "D-306", image: "/images/products/color-film/MGS-D/D-306-measurement-107.webp", kind: "色卡" as const },
  { code: "D-307", image: "/images/products/color-film/MGS-D/D-307-measurement-108.webp", kind: "色卡" as const },
  { code: "D-308", image: "/images/products/color-film/MGS-D/D-308-measurement-109.webp", kind: "色卡" as const },
  { code: "D-309", image: "/images/products/color-film/MGS-D/D-309-measurement-110.webp", kind: "色卡" as const },
  { code: "D-310", image: "/images/products/color-film/MGS-D/D-310-measurement-111.webp", kind: "色卡" as const },
  { code: "D-312", image: "/images/products/color-film/MGS-D/D-312-measurement-112.webp", kind: "色卡" as const },
  { code: "D-312", image: "/images/products/color-film/MGS-D/D-312-measurement-113.webp", kind: "色卡" as const },
  { code: "D-313", image: "/images/products/color-film/MGS-D/D-313-measurement-114.webp", kind: "色卡" as const },
  { code: "D-314", image: "/images/products/color-film/MGS-D/D-314-measurement-115.webp", kind: "色卡" as const },
  { code: "D-315", image: "/images/products/color-film/MGS-D/D-315-measurement-116.webp", kind: "色卡" as const },
  { code: "D-316", image: "/images/products/color-film/MGS-D/D-316-measurement-117.webp", kind: "色卡" as const },
  { code: "D-317", image: "/images/products/color-film/MGS-D/D-317-measurement-118.webp", kind: "色卡" as const },
  { code: "D-318", image: "/images/products/color-film/MGS-D/D-318-measurement-119.webp", kind: "色卡" as const },
  { code: "D-319", image: "/images/products/color-film/MGS-D/D-319-measurement-120.webp", kind: "色卡" as const },
  { code: "D-320", image: "/images/products/color-film/MGS-D/D-320-measurement-121.webp", kind: "色卡" as const },
  { code: "D-321", image: "/images/products/color-film/MGS-D/D-321-measurement-122.webp", kind: "色卡" as const },
  { code: "D-322", image: "/images/products/color-film/MGS-D/D-322-measurement-123.webp", kind: "色卡" as const },
  { code: "D-323", image: "/images/products/color-film/MGS-D/D-323-measurement-124.webp", kind: "色卡" as const },
  { code: "D-324", image: "/images/products/color-film/MGS-D/D-324-measurement-125.webp", kind: "色卡" as const },
  { code: "D-325", image: "/images/products/color-film/MGS-D/D-325-measurement-126.webp", kind: "色卡" as const },
  ],
};

export const filmColorGroup_iridescent: FilmColorGroup = {
  id: "iridescent",
  label: "幻彩系列",
  description: "光线变化下呈现幻彩效果的色板",
  cards: [
  { code: "幻彩 01", image: "/images/products/color-film/曼格斯幻彩/LC11602DC-08-measurement-140.webp", kind: "色卡" as const },
  { code: "幻彩 02", image: "/images/products/color-film/曼格斯幻彩/LC127-01-measurement-130.webp", kind: "色卡" as const },
  { code: "幻彩 03", image: "/images/products/color-film/曼格斯幻彩/LC165-01-measurement-129.webp", kind: "色卡" as const },
  { code: "幻彩 04", image: "/images/products/color-film/曼格斯幻彩/LC304-01-measurement-127.webp", kind: "色卡" as const },
  { code: "幻彩 05", image: "/images/products/color-film/曼格斯幻彩/LC304-01-measurement-128.webp", kind: "色卡" as const },
  { code: "幻彩 06", image: "/images/products/color-film/曼格斯幻彩/LC30401D-08-measurement-131.webp", kind: "色卡" as const },
  ],
};

export const filmColorGroup_metal: FilmColorGroup = {
  id: "metal",
  label: "金属系列",
  description: "金属颗粒质感色板",
  cards: [
  { code: "金属 01", image: "/images/products/color-film/曼格斯金属/LC11602DC-08-measurement-140.webp", kind: "色卡" as const },
  { code: "金属 02", image: "/images/products/color-film/曼格斯金属/LC127-01-measurement-130.webp", kind: "色卡" as const },
  { code: "金属 03", image: "/images/products/color-film/曼格斯金属/LC165-01-measurement-129.webp", kind: "色卡" as const },
  { code: "金属 04", image: "/images/products/color-film/曼格斯金属/LC304-01-measurement-127.webp", kind: "色卡" as const },
  { code: "金属 05", image: "/images/products/color-film/曼格斯金属/LC304-01-measurement-128.webp", kind: "色卡" as const },
  { code: "金属 06", image: "/images/products/color-film/曼格斯金属/LC30401D-08-measurement-131.webp", kind: "色卡" as const },
  ],
};

export const filmColorGroups: FilmColorGroup[] = [
  filmColorGroup_a,
  filmColorGroup_b,
  filmColorGroup_c,
  filmColorGroup_d,
  filmColorGroup_iridescent,
  filmColorGroup_metal,
];
