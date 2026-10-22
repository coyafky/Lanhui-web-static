/**
 * 车身包围适配库数据层（/product/body-kits）。
 *
 * 口径：双供应商资料合并去重 —— 28 车型 / 151 条产品记录（79 图片记录 + 72 规格记录）。
 * 本文件只收录结构化适配数据、覆盖来源与图片路径；供应商编号、供应商名称不落本文件。
 * 适装声明统一：适配信息以门店现场检查为准，不同批次与配置存在差异。
 */

export type BodyKitCoverage = "image" | "product";

/** 状态角标五类：图片覆盖（待门店复核）/ 产品适配（含规格）/ 已实装 / 开发中 / 年份待门店确认 */
export type BodyKitStatus = "image_pending" | "product_spec" | "installed" | "dev" | "year_pending";

export interface BodyKitCmsRecord {
  /** 部件：前唇 / 后唇 / 侧裙 / 尾翼 / 整套等 */
  part: string;
  /** 产品名称（资料原文） */
  productName: string;
  /** 系列名（流光 / 星际 / 星驰 / 星澜等） */
  series: string;
  /** 年款（资料原文整理，缺失标注未提供） */
  year: string;
  /** 材质 / 工艺 */
  material: string;
  /** 颜色（资料原文，缺失不继承） */
  color: string;
}

export interface BodyKitModel {
  /** 车型展示名 */
  model: string;
  /** 原文变体（如 L8 Lvis / L9 Livis），归入主车型行展示 */
  variants?: string[];
  /** 覆盖来源：image=图片覆盖，product=产品适配（含规格） */
  coverage: BodyKitCoverage[];
  status: BodyKitStatus;
  /** 产品适配规格记录（CMST 口径），图片覆盖车型为空数组 */
  records: BodyKitCmsRecord[];
  /** 图片资料库收录的部件 / 视角清单（BSKT 口径） */
  imageParts: string[];
  /** 本车型已转 webp 的图片公开路径 */
  images: string[];
  note?: string;
}

export interface BodyKitBrand {
  brand: string;
  group: "dual" | "bskt_only" | "cmst_only";
  models: BodyKitModel[];
}

export const BODY_KIT_BRANDS: BodyKitBrand[] = [
  {
    brand: "理想",
    group: "dual",
    models: [
      {
        model: "理想 MEGA",
        coverage: ["image", "product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "理想MEGA前唇",
            series: "理想 MEGA 包围套件",
            year: "年款原文未提供",
            material: "ABS / 吸塑",
            color: "亮黑 / 灰色 / 银色 / 大象灰 / 白色",
          },
          {
            part: "后唇",
            productName: "理想MEGA后唇",
            series: "理想 MEGA 包围套件",
            year: "年款原文未提供",
            material: "ABS / 吸塑",
            color: "亮黑 / 灰色 / 银色 / 大象灰 / 白色",
          },
          {
            part: "侧裙",
            productName: "理想MEGA侧裙",
            series: "理想 MEGA 包围套件",
            year: "年款原文未提供",
            material: "ABS / 吸塑",
            color: "亮黑 / 灰色 / 银色 / 大象灰 / 白色",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "理想 MEGA 包围套件",
            year: "年款原文未提供",
            material: "ABS / 吸塑",
            color: "亮黑 / 灰色 / 银色 / 大象灰 / 白色",
          },
          {
            part: "尾翼",
            productName: "尾翼A款",
            series: "理想 MEGA 包围套件",
            year: "年款原文未提供",
            material: "干碳",
            color: "原文未提供，不继承塑料套件颜色",
          },
          {
            part: "尾翼",
            productName: "尾翼B款",
            series: "理想 MEGA 包围套件",
            year: "年款原文未提供",
            material: "干碳",
            color: "原文未提供，不继承塑料套件颜色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_01.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_02.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_03.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_04.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_05.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_06.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_07.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_08.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_09.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想MEGA_系列02_10.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想mega_侧面_01.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想mega_前包围_01.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想mega_后包围_01.webp", "/images/products/body-kits/理想/理想MEGA/理想_理想mega_细节_01.webp"],
      },
      {
        model: "理想 i6",
        coverage: ["image", "product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "前唇",
            series: "理想I6包围（25款）",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "珍珠白 / 银色 / 亮黑色",
          },
          {
            part: "后唇",
            productName: "后唇",
            series: "理想I6包围（25款）",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "珍珠白 / 银色 / 亮黑色",
          },
          {
            part: "侧裙",
            productName: "侧裙",
            series: "理想I6包围（25款）",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "珍珠白 / 银色 / 亮黑色",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "理想I6包围（25款）",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "珍珠白 / 银色 / 亮黑色",
          },
          {
            part: "选配",
            productName: "尾翼",
            series: "理想I6包围（25款）",
            year: "2025 款",
            material: "碳纤维",
            color: "原文未提供，不继承塑料套件颜色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/理想/理想i6/理想_理想I6_侧面_01.webp", "/images/products/body-kits/理想/理想i6/理想_理想I6_前包围_01.webp", "/images/products/body-kits/理想/理想i6/理想_理想I6_后包围_01.webp", "/images/products/body-kits/理想/理想i6/理想_理想i6_系列12_01.webp", "/images/products/body-kits/理想/理想i6/理想_理想i6_系列12_02.webp", "/images/products/body-kits/理想/理想i6/理想_理想i6_系列12_03.webp", "/images/products/body-kits/理想/理想i6/理想_理想i6_系列12_04.webp", "/images/products/body-kits/理想/理想i6/理想_理想i6_系列12_05.webp", "/images/products/body-kits/理想/理想i6/理想_理想i6_系列12_06.webp"],
      },
      {
        model: "理想 i8",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "侧面", "后包围"],
        images: ["/images/products/body-kits/理想/理想I8/理想_理想I8_侧面_01.webp", "/images/products/body-kits/理想/理想I8/理想_理想I8_前包围_01.webp", "/images/products/body-kits/理想/理想I8/理想_理想I8_后包围_01.webp"],
      },
      {
        model: "理想 L6",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["配色方案总览", "整车", "整车", "整车", "前包围", "后侧", "前视", "后视", "整车", "整车", "整车", "整车", "整车", "整车", "整车", "整车"],
        images: ["/images/products/body-kits/理想/理想L6/理想_理想L6_小象灰冷光漆_图1.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_小象灰冷光漆_图3.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_小象灰冷光漆_图4.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_小象灰冷光漆_图5.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_小象灰冷光漆_图6.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_灰色金属_01.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_灰色金属_02.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_熊猫配色_01.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_熊猫配色_02.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_白色珍珠漆_01.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_配色方案总览_01.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_黑武士_前视_01.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_黑武士_后视_01.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_黑色金属_01.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_黑色金属_02.webp", "/images/products/body-kits/理想/理想L6/理想_理想L6_黑色金属_03.webp"],
      },
      {
        model: "理想 L6 Ultra",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前视", "后视"],
        images: ["/images/products/body-kits/理想/理想L6Utra/理想_理想L6Utra_黑色_前视_01.webp", "/images/products/body-kits/理想/理想L6Utra/理想_理想L6Utra_黑色_后视_01.webp"],
      },
      {
        model: "理想 L7",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围", "侧面", "后部细节", "轮毂细节"],
        images: ["/images/products/body-kits/理想/理想L7/理想_理想L7_侧面_01.webp", "/images/products/body-kits/理想/理想L7/理想_理想L7_前包围_01.webp", "/images/products/body-kits/理想/理想L7/理想_理想L7_后包围_01.webp", "/images/products/body-kits/理想/理想L7/理想_理想L7_后部细节_01.webp", "/images/products/body-kits/理想/理想L7/理想_理想L7_轮毂细节_01.webp"],
      },
      {
        model: "理想 L8",
        variants: ["L8 Lvis"],
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "侧面", "前部细节"],
        images: ["/images/products/body-kits/理想/理想L8/理想_理想L8_侧面_01.webp", "/images/products/body-kits/理想/理想L8/理想_理想L8_前包围_01.webp", "/images/products/body-kits/理想/理想L8/理想_理想L8_前部细节_01.webp"],
      },
      {
        model: "理想 L8 Lvis",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围", "侧面", "细节"],
        images: ["/images/products/body-kits/理想/理想L8Lvis/理想_理想L8Lvis_侧面_01.webp", "/images/products/body-kits/理想/理想L8Lvis/理想_理想L8Lvis_前包围_01.webp", "/images/products/body-kits/理想/理想L8Lvis/理想_理想L8Lvis_后包围_01.webp", "/images/products/body-kits/理想/理想L8Lvis/理想_理想L8Lvis_细节_01.webp"],
      },
      {
        model: "理想 L9",
        variants: ["L9 Livis"],
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围", "侧面"],
        images: ["/images/products/body-kits/理想/理想L9/理想_理想L9_侧面_01.webp", "/images/products/body-kits/理想/理想L9/理想_理想L9_前包围_01.webp", "/images/products/body-kits/理想/理想L9/理想_理想L9_后包围_01.webp"],
      },
      {
        model: "理想 L9 Livis",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围", "侧面"],
        images: ["/images/products/body-kits/理想/理想L9Livis/理想_理想L9Livis_侧面_01.webp", "/images/products/body-kits/理想/理想L9Livis/理想_理想L9Livis_前包围_01.webp", "/images/products/body-kits/理想/理想L9Livis/理想_理想L9Livis_后包围_01.webp"],
      },
    ],
  },
  {
    brand: "问界",
    group: "dual",
    models: [
      {
        model: "问界 M8",
        coverage: ["image", "product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "问界M8前唇",
            series: "问界M8包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "问界M8后唇",
            series: "问界M8包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "侧裙",
            productName: "问界M8侧唇",
            series: "问界M8包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "问界M8包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
        ],
        imageParts: ["前包围", "前包围", "后包围", "侧面", "侧面"],
        images: ["/images/products/body-kits/问界/问界M8/问界_问界M8_侧面_01.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_侧面_02.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_前包围_01.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_前包围_02.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_后包围_01.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_系列09_01.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_系列09_02.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_系列09_03.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_系列09_04.webp", "/images/products/body-kits/问界/问界M8/问界_问界M8_系列09_05.webp"],
      },
      {
        model: "问界 M6",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围", "后包围", "侧面"],
        images: ["/images/products/body-kits/问界/问界M6/问界_问界M6_侧面_01.webp", "/images/products/body-kits/问界/问界M6/问界_问界M6_前包围_01.webp", "/images/products/body-kits/问界/问界M6/问界_问界M6_后包围_01.webp", "/images/products/body-kits/问界/问界M6/问界_问界M6_后包围_02.webp"],
      },
      {
        model: "问界 M7",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "前包围", "后包围", "后包围", "侧面", "前包围", "后包围"],
        images: ["/images/products/body-kits/问界/问界M7/问界_问界M7_26款侧面_01.webp", "/images/products/body-kits/问界/问界M7/问界_问界M7_26款前包围_01.webp", "/images/products/body-kits/问界/问界M7/问界_问界M7_26款前包围_02.webp", "/images/products/body-kits/问界/问界M7/问界_问界M7_26款后包围_01.webp", "/images/products/body-kits/问界/问界M7/问界_问界M7_26款后包围_02.webp", "/images/products/body-kits/问界/问界M7/问界_问界M7_前包围_01.webp", "/images/products/body-kits/问界/问界M7/问界_问界M7_后包围_01.webp"],
      },
      {
        model: "问界 M9",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围", "侧面", "前包围", "后包围", "侧面"],
        images: ["/images/products/body-kits/问界/问界M9/问界_问界M9_26款侧面_01.webp", "/images/products/body-kits/问界/问界M9/问界_问界M9_26款前包围_01.webp", "/images/products/body-kits/问界/问界M9/问界_问界M9_26款后包围_01.webp", "/images/products/body-kits/问界/问界M9/问界_问界M9_侧面_01.webp", "/images/products/body-kits/问界/问界M9/问界_问界M9_前包围_01.webp", "/images/products/body-kits/问界/问界M9/问界_问界M9_后包围_01.webp"],
      },
    ],
  },
  {
    brand: "智界",
    group: "bskt_only",
    models: [
      {
        model: "智界 R7",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围", "侧面", "细节"],
        images: ["/images/products/body-kits/智界/智界R7/智界_智界R7_侧面_01.webp", "/images/products/body-kits/智界/智界R7/智界_智界R7_前包围_01.webp", "/images/products/body-kits/智界/智界R7/智界_智界R7_后包围_01.webp"],
      },
      {
        model: "智界 V9",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围"],
        images: ["/images/products/body-kits/智界/智界V9/智界_智界V9_前包围_01.webp", "/images/products/body-kits/智界/智界V9/智界_智界V9_后包围_01.webp"],
      },
    ],
  },
  {
    brand: "尊界",
    group: "bskt_only",
    models: [
      {
        model: "尊界 S800",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["后包围", "整车效果"],
        images: ["/images/products/body-kits/尊界/尊界S800/尊界_尊界S800_后包围_01.webp", "/images/products/body-kits/尊界/尊界S800/尊界_尊界S800_整车效果_01.webp"],
      },
    ],
  },
  {
    brand: "享界",
    group: "bskt_only",
    models: [
      {
        model: "享界 ST 增程版",
        coverage: ["image"],
        status: "image_pending",
        records: [],
        imageParts: ["前包围", "后包围", "侧面"],
        images: ["/images/products/body-kits/享界/享界ST增程版/享界_享界ST增程版_侧面_01.webp", "/images/products/body-kits/享界/享界ST增程版/享界_享界ST增程版_前包围_01.webp", "/images/products/body-kits/享界/享界ST增程版/享界_享界ST增程版_后包围_01.webp"],
      },
    ],
  },
  {
    brand: "极氪",
    group: "cmst_only",
    models: [
      {
        model: "极氪 001",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "极氪001前唇",
            series: "极氪001包围(24-25款)",
            year: "2024-2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "极氪001后唇",
            series: "极氪001包围(24-25款)",
            year: "2024-2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "侧裙",
            productName: "极氪001侧裙",
            series: "极氪001包围(24-25款)",
            year: "2024-2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "极氪001包围(24-25款)",
            year: "2024-2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/极氪/极氪001/极氪_极氪001_系列01_01.webp", "/images/products/body-kits/极氪/极氪001/极氪_极氪001_系列01_02.webp", "/images/products/body-kits/极氪/极氪001/极氪_极氪001_系列01_03.webp", "/images/products/body-kits/极氪/极氪001/极氪_极氪001_系列01_04.webp", "/images/products/body-kits/极氪/极氪001/极氪_极氪001_系列01_05.webp"],
      },
      {
        model: "极氪 009",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "前唇(26款)",
            series: "极氪009包围（22-25款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "前唇",
            productName: "前唇(22-25款)",
            series: "极氪009包围（22-25款）",
            year: "2022-2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "侧裙",
            productName: "侧裙(22-25款)",
            series: "极氪009包围（22-25款）",
            year: "2022-2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "后唇(22-23款)",
            series: "极氪009包围（22-25款）",
            year: "2022-2023 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "后唇(24-25款)",
            series: "极氪009包围（22-25款）",
            year: "2024-2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "极氪009包围（22-25款）",
            year: "2022-2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/极氪/极氪009/极氪_极氪009_系列10_01.webp", "/images/products/body-kits/极氪/极氪009/极氪_极氪009_系列10_02.webp", "/images/products/body-kits/极氪/极氪009/极氪_极氪009_系列10_03.webp", "/images/products/body-kits/极氪/极氪009/极氪_极氪009_系列10_04.webp", "/images/products/body-kits/极氪/极氪009/极氪_极氪009_系列10_05.webp", "/images/products/body-kits/极氪/极氪009/极氪_极氪009_系列10_06.webp"],
      },
      {
        model: "极氪 8X",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "前唇",
            series: "极氪8X包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 亮黑色",
          },
          {
            part: "后唇",
            productName: "后唇",
            series: "极氪8X包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 亮黑色",
          },
          {
            part: "侧裙",
            productName: "侧裙",
            series: "极氪8X包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 亮黑色",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "极氪8X包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 亮黑色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/极氪/极氪8X/极氪_极氪8X_系列14_01.webp", "/images/products/body-kits/极氪/极氪8X/极氪_极氪8X_系列14_02.webp", "/images/products/body-kits/极氪/极氪8X/极氪_极氪8X_系列14_03.webp", "/images/products/body-kits/极氪/极氪8X/极氪_极氪8X_系列14_04.webp", "/images/products/body-kits/极氪/极氪8X/极氪_极氪8X_系列14_05.webp", "/images/products/body-kits/极氪/极氪8X/极氪_极氪8X_系列14_06.webp"],
      },
      {
        model: "极氪 9X",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "前唇",
            series: "极氪9X包围（25款）",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "白色 / 银色 / 亮黑色",
          },
          {
            part: "后唇",
            productName: "后唇",
            series: "极氪9X包围（25款）",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "白色 / 银色 / 亮黑色",
          },
          {
            part: "侧裙",
            productName: "侧裙",
            series: "极氪9X包围（25款）",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "白色 / 银色 / 亮黑色",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "极氪9X包围（25款）",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "白色 / 银色 / 亮黑色",
          },
          {
            part: "尾翼",
            productName: "尾翼",
            series: "极氪9X包围（25款）",
            year: "2025 款",
            material: "碳纤维",
            color: "原文未提供，不继承塑料套件颜色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/极氪/极氪9X/极氪_极氪9X_系列13_01.webp", "/images/products/body-kits/极氪/极氪9X/极氪_极氪9X_系列13_02.webp", "/images/products/body-kits/极氪/极氪9X/极氪_极氪9X_系列13_03.webp", "/images/products/body-kits/极氪/极氪9X/极氪_极氪9X_系列13_04.webp", "/images/products/body-kits/极氪/极氪9X/极氪_极氪9X_系列13_05.webp", "/images/products/body-kits/极氪/极氪9X/极氪_极氪9X_系列13_06.webp", "/images/products/body-kits/极氪/极氪9X/极氪_极氪9X_系列13_07.webp"],
      },
    ],
  },
  {
    brand: "特斯拉",
    group: "cmst_only",
    models: [
      {
        model: "特斯拉 Model Y",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "焕新Y前唇",
            series: "特斯拉焕新Y包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "焕新Y后唇",
            series: "特斯拉焕新Y包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "侧裙",
            productName: "焕新Y侧裙",
            series: "特斯拉焕新Y包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "特斯拉焕新Y包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "前唇",
            productName: "焕新Y流光前唇",
            series: "特斯拉焕新Y流光款包围(25款)",
            year: "2025 款",
            material: "PP / 注塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "焕新Y后唇",
            series: "特斯拉焕新Y流光款包围(25款)",
            year: "2025 款",
            material: "PP / 注塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "侧裙",
            productName: "焕新Y侧裙",
            series: "特斯拉焕新Y流光款包围(25款)",
            year: "2025 款",
            material: "PP / 注塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "特斯拉焕新Y流光款包围(25款)",
            year: "2025 款",
            material: "PP / 注塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "前唇",
            productName: "星际前小包",
            series: "特斯拉焕新Y星际包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "星际后唇",
            series: "特斯拉焕新Y星际包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "侧裙",
            productName: "星际侧裙",
            series: "特斯拉焕新Y星际包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "特斯拉焕新Y星际包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "前唇",
            productName: "星驰前小包",
            series: "特斯拉Y星驰包围(20-24款)",
            year: "2020-2024 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "星驰后唇",
            series: "特斯拉Y星驰包围(20-24款)",
            year: "2020-2024 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "侧裙",
            productName: "星驰侧裙",
            series: "特斯拉Y星驰包围(20-24款)",
            year: "2020-2024 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "特斯拉Y星驰包围(20-24款)",
            year: "2020-2024 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列03_01.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列03_02.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列03_03.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列03_04.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列03_05.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列03_06.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列03_07.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列04_01.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列04_02.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列04_03.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列04_04.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列04_05.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列05_01.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列05_02.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列05_03.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列05_04.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列05_05.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列06_01.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列06_02.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列06_03.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列06_04.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列06_05.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列06_06.webp", "/images/products/body-kits/特斯拉/特斯拉ModelY/特斯拉_特斯拉ModelY_系列06_07.webp"],
        note: "焕新 25 款与 20-24 款共 4 个系列 16 条记录，年款分开记录不合并。",
      },
    ],
  },
  {
    brand: "蔚来",
    group: "cmst_only",
    models: [
      {
        model: "蔚来 ES6",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "前唇",
            series: "蔚来ES6包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "亮黑色 / 白色",
          },
          {
            part: "后唇",
            productName: "后唇",
            series: "蔚来ES6包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "亮黑色 / 白色",
          },
          {
            part: "整套",
            productName: "前唇/后唇",
            series: "蔚来ES6包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "亮黑色 / 白色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/蔚来/蔚来ES6/蔚来_蔚来ES6_系列16_01.webp", "/images/products/body-kits/蔚来/蔚来ES6/蔚来_蔚来ES6_系列16_02.webp", "/images/products/body-kits/蔚来/蔚来ES6/蔚来_蔚来ES6_系列16_03.webp", "/images/products/body-kits/蔚来/蔚来ES6/蔚来_蔚来ES6_系列16_04.webp", "/images/products/body-kits/蔚来/蔚来ES6/蔚来_蔚来ES6_系列16_05.webp", "/images/products/body-kits/蔚来/蔚来ES6/蔚来_蔚来ES6_系列16_06.webp", "/images/products/body-kits/蔚来/蔚来ES6/蔚来_蔚来ES6_系列16_07.webp"],
      },
      {
        model: "蔚来 ES8",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "前唇",
            series: "蔚来ES8包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 亮黑色",
          },
          {
            part: "后唇",
            productName: "后唇",
            series: "蔚来ES8包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 亮黑色",
          },
          {
            part: "侧裙",
            productName: "侧裙",
            series: "蔚来ES8包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 亮黑色",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "蔚来ES8包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 亮黑色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/蔚来/蔚来ES8/蔚来_蔚来ES8_系列15_01.webp", "/images/products/body-kits/蔚来/蔚来ES8/蔚来_蔚来ES8_系列15_02.webp", "/images/products/body-kits/蔚来/蔚来ES8/蔚来_蔚来ES8_系列15_03.webp", "/images/products/body-kits/蔚来/蔚来ES8/蔚来_蔚来ES8_系列15_04.webp", "/images/products/body-kits/蔚来/蔚来ES8/蔚来_蔚来ES8_系列15_05.webp"],
      },
      {
        model: "蔚来 ET5T",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "星澜前小包",
            series: "ET5T星澜包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "后唇",
            productName: "星澜后唇",
            series: "ET5T星澜包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "侧裙",
            productName: "星澜侧裙",
            series: "ET5T星澜包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "ET5T星澜包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑 / 哑黑",
          },
          {
            part: "尾翼",
            productName: "尾翼",
            series: "ET5T星澜包围(25款)",
            year: "2025 款",
            material: "碳纤维",
            color: "原文未提供，不继承塑料套件颜色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_01.webp", "/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_02.webp", "/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_03.webp", "/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_04.webp", "/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_05.webp", "/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_06.webp", "/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_07.webp", "/images/products/body-kits/蔚来/蔚来ET5T/蔚来_蔚来ET5T_系列07_08.webp"],
      },
    ],
  },
  {
    brand: "小米",
    group: "cmst_only",
    models: [
      {
        model: "小米 YU7（25 款）",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "小米YU7前唇",
            series: "小米YU7包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑",
          },
          {
            part: "后唇",
            productName: "小米YU7后唇",
            series: "小米YU7包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑",
          },
          {
            part: "侧裙",
            productName: "小米YU7侧裙",
            series: "小米YU7包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "小米YU7包围(25款)",
            year: "2025 款",
            material: "ABS / 吸塑",
            color: "亮黑",
          },
          {
            part: "尾翼",
            productName: "尾翼",
            series: "小米YU7包围(25款)",
            year: "2025 款",
            material: "碳纤维",
            color: "原文未提供，不继承塑料套件颜色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/小米/小米YU7/小米_小米YU7_系列08_01.webp", "/images/products/body-kits/小米/小米YU7/小米_小米YU7_系列08_02.webp", "/images/products/body-kits/小米/小米YU7/小米_小米YU7_系列08_03.webp", "/images/products/body-kits/小米/小米YU7/小米_小米YU7_系列08_04.webp", "/images/products/body-kits/小米/小米YU7/小米_小米YU7_系列08_05.webp", "/images/products/body-kits/小米/小米YU7/小米_小米YU7_系列08_06.webp", "/images/products/body-kits/小米/小米YU7/小米_小米YU7_系列08_07.webp"],
      },
    ],
  },
  {
    brand: "小鹏",
    group: "cmst_only",
    models: [
      {
        model: "小鹏 X9（26 款）",
        coverage: ["product"],
        status: "product_spec",
        records: [
          {
            part: "前唇",
            productName: "前唇",
            series: "小鹏X9包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 银色 / 亮黑色",
          },
          {
            part: "后裙",
            productName: "后唇",
            series: "小鹏X9包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 银色 / 亮黑色",
          },
          {
            part: "侧唇",
            productName: "侧裙",
            series: "小鹏X9包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 银色 / 亮黑色",
          },
          {
            part: "整套",
            productName: "前唇/后唇/侧裙",
            series: "小鹏X9包围（26款）",
            year: "2026 款",
            material: "ABS / 吸塑",
            color: "白色 / 银色 / 亮黑色",
          },
          {
            part: "尾翼(选配)",
            productName: "尾翼",
            series: "小鹏X9包围（26款）",
            year: "2026 款",
            material: "碳纤维",
            color: "原文未提供，不继承塑料套件颜色",
          },
        ],
        imageParts: [],
        images: ["/images/products/body-kits/小鹏/小鹏X9/小鹏_小鹏X9_系列11_01.webp", "/images/products/body-kits/小鹏/小鹏X9/小鹏_小鹏X9_系列11_02.webp", "/images/products/body-kits/小鹏/小鹏X9/小鹏_小鹏X9_系列11_03.webp", "/images/products/body-kits/小鹏/小鹏X9/小鹏_小鹏X9_系列11_04.webp", "/images/products/body-kits/小鹏/小鹏X9/小鹏_小鹏X9_系列11_05.webp", "/images/products/body-kits/小鹏/小鹏X9/小鹏_小鹏X9_系列11_06.webp", "/images/products/body-kits/小鹏/小鹏X9/小鹏_小鹏X9_系列11_07.webp"],
      },
    ],
  },
];

/** 页面口径角标 */
export const BODY_KIT_SUMMARY = "双供应商资料核对 · 10 品牌 / 28 车型（合并去重）";

/** S3 产品线计数（CMST 口径）：56 单件 + 16 整套 */
export const BODY_KIT_PRODUCT_LINE_STATS = {
  singlePartRecords: 56,
  kitRecords: 16,
} as const;

/** S4 材质对比表记录数（CMST 口径） */
export const BODY_KIT_MATERIAL_STATS = [
  { material: "ABS / 吸塑", records: 61 },
  { material: "PP / 注塑", records: 4 },
  { material: "碳纤维", records: 5 },
  { material: "干碳", records: 2 },
] as const;

/** 全站适装声明（统一原文） */
export const BODY_KIT_FIT_DISCLAIMER = "适配信息以门店现场检查为准，不同批次与配置存在差异。";
