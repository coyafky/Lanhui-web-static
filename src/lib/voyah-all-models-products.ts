/**
 * 岚图全系适配件数据 — 数据层
 *
 * 数据来源：specs/active/voyah-products.md（厂方适装表 2026.8 版）
 * 用途：/product/voyah 品牌页 S3「适配件明细」区块（车型 × 项目矩阵，2026-10-05 由项目视角改为车型主视角）
 *
 * 结构：
 *   - voyahFitmentCategories  6 类适配件（脚垫 / 全包尾箱 / 平面尾箱 / 底盘护板 / 电动踏板 / 小桌板）
 *   - VOYAH_MODEL_ORDER       5 车型展示顺序（追光 / FREE / 知音 / 泰山 / 梦想家）
 *
 * 命名规范：
 *   - 「360°」指全包工艺，非品牌名（页面杜绝供应商歧义）
 *   - 全页不含供应商名称；材质（合金 / 锰钢 1.2mm / 铝镁合金 2.0mm）为产品事实，保留
 */

export type VoyahModelKey =
  | "zhuguang" // 岚图追光
  | "free"     // 岚图FREE
  | "zhiyin"   // 岚图知音
  | "taishan"  // 岚图泰山
  | "dreamer"; // 岚图梦想家

export type VoyahFitmentCategoryId =
  | "floor-mats"   // 360° 软包脚垫（全系）
  | "trunk-full"   // 360° 全包尾箱垫（FREE / 梦想家）
  | "trunk-flat"   // 平面尾箱垫（全系）
  | "skid-plate"   // 底盘护板（全系）
  | "power-step"   // 电动踏板（仅泰山）
  | "table";       // 小桌板（仅知音）

export type VoyahFitmentRow = {
  /** 适用年款，如 "22-23 款" / "25 款" */
  year: string;
  /** 型号编码，如 "L2663S" / "BWL667" */
  modelNo: string;
  /** 分片 / 结构 / 适配说明 */
  note?: string;
  /** 底盘护板材质（合金 / 锰钢 1.2mm / 铝镁合金 2.0mm） */
  material?: string;
  /** 底盘护板件套（四件套 / 五件套 / 六件套） */
  setCount?: string;
  /** 底盘护板保护位置 */
  protection?: string;
};

export type VoyahFitmentModelGroup = {
  modelKey: VoyahModelKey;
  modelName: string;
  rows: readonly VoyahFitmentRow[];
};

export type VoyahFitmentCategory = {
  id: VoyahFitmentCategoryId;
  name: string;
  /** 项目功能特性（一句话，说清这个产品是做什么的，供 S3 车型列表展示） */
  feature: string;
  /** "all" = 全系 5 车型；"partial" = 部分车型（scopeNote 说明范围） */
  scope: "all" | "partial";
  /** 部分车型时的范围说明，如 "仅泰山" */
  scopeNote?: string;
  /** 区块级说明（如材质三档口径） */
  intro?: string;
  models: readonly VoyahFitmentModelGroup[];
};

export const VOYAH_MODEL_ORDER: readonly VoyahModelKey[] = [
  "zhuguang",
  "free",
  "zhiyin",
  "taishan",
  "dreamer",
] as const;

export const VOYAH_MODEL_NAMES: Readonly<Record<VoyahModelKey, string>> = {
  zhuguang: "岚图追光",
  free: "岚图FREE",
  zhiyin: "岚图知音",
  taishan: "岚图泰山",
  dreamer: "岚图梦想家",
} as const;

export const voyahFitmentCategories: readonly VoyahFitmentCategory[] = [
  {
    id: "floor-mats",
    name: "360° 软包脚垫",
    feature: "按车型开模的软包脚垫，座椅滑轨和地毯边缘一并包住，雨天、带娃场景好打理，不挡踏板和出风口",
    scope: "all",
    models: [
      {
        modelKey: "zhuguang",
        modelName: "岚图追光",
        rows: [{ year: "23 款", modelNo: "L2829S", note: "皮革 / 丝圈可选" }],
      },
      {
        modelKey: "free",
        modelName: "岚图FREE",
        rows: [{ year: "21 款", modelNo: "L2185S", note: "3 片" }],
      },
      {
        modelKey: "zhiyin",
        modelName: "岚图知音",
        rows: [
          { year: "24 款", modelNo: "L3203S", note: "标准版型" },
          {
            year: "25 款",
            modelNo: "L3423S",
            note: "中控扶手触屏膜、副驾腿托位一并覆盖",
          },
        ],
      },
      {
        modelKey: "taishan",
        modelName: "岚图泰山",
        rows: [
          {
            year: "25 款",
            modelNo: "L3417S",
            note: "5 门 6 座 4 片；二排安全带固定点在座椅上，版型按此开模",
          },
        ],
      },
      {
        modelKey: "dreamer",
        modelName: "岚图梦想家",
        rows: [
          { year: "22-23 款", modelNo: "L2663S", note: "2 片" },
          { year: "22-23 款", modelNo: "L2446S", note: "3 片；二排滑道可盖可不盖" },
          { year: "22-23 款", modelNo: "L2447S", note: "4 片" },
          { year: "25 款", modelNo: "L3181S", note: "4 片" },
        ],
      },
    ],
  },
  {
    id: "trunk-full",
    name: "360° 全包尾箱垫",
    feature: "后备箱地板加侧壁全覆盖，防污防刮，搬大件不怕蹭花，液体洒了也不渗到底部",
    scope: "partial",
    scopeNote: "FREE、梦想家",
    models: [
      {
        modelKey: "free",
        modelName: "岚图FREE",
        rows: [{ year: "21 款", modelNo: "WL659", note: "左侧带音响位开孔" }],
      },
      {
        modelKey: "dreamer",
        modelName: "岚图梦想家",
        rows: [
          { year: "22 款", modelNo: "BWL667", note: "5 门 7 座版；尾箱不带侧包" },
        ],
      },
    ],
  },
  {
    id: "trunk-flat",
    name: "平面尾箱垫",
    feature: "后备箱一体平铺垫，表面好清洁，适合日常轻量防护",
    scope: "all",
    models: [
      {
        modelKey: "zhuguang",
        modelName: "岚图追光",
        rows: [{ year: "23 款", modelNo: "1751", note: "一体平铺" }],
      },
      {
        modelKey: "free",
        modelName: "岚图FREE",
        rows: [
          { year: "21 款", modelNo: "1408", note: "一体平铺" },
          { year: "25 款", modelNo: "2286", note: "一体平铺" },
        ],
      },
      {
        modelKey: "zhiyin",
        modelName: "岚图知音",
        rows: [
          { year: "24 款", modelNo: "2161", note: "一体平铺" },
          { year: "25 款", modelNo: "2333", note: "一体平铺" },
        ],
      },
      {
        modelKey: "taishan",
        modelName: "岚图泰山",
        rows: [
          { year: "26 款", modelNo: "2328 / 2329", note: "2328 分体 · 2329 连体，二选一" },
        ],
      },
      {
        modelKey: "dreamer",
        modelName: "岚图梦想家",
        rows: [
          { year: "22 款", modelNo: "1415", note: "一体平铺" },
          { year: "25 款", modelNo: "2142", note: "一体平铺" },
        ],
      },
    ],
  },
  {
    id: "skid-plate",
    name: "底盘护板",
    feature: "发动机、电池、线束等底盘部件的底部保护，防石子飞溅和托底刮蹭；材质分合金、锰钢 1.2mm、铝镁合金 2.0mm 三档",
    scope: "all",
    intro:
      "护板按车型动力形式与续航区分件套；材质分「合金」「锰钢 1.2mm」「铝镁合金 2.0mm」三档，按年款与配置对应。",
    models: [
      {
        modelKey: "zhuguang",
        modelName: "岚图追光",
        rows: [
          {
            year: "追光 L（410KM 插混）",
            modelNo: "五件套",
            protection: "发动机 / 线束 / 电池 / 油箱 / 后电机",
            material: "合金",
            setCount: "五件套",
          },
          {
            year: "追光 S（740 续航）",
            modelNo: "五件套",
            protection: "前电机 / 线束 / 前电池 / 后电池 / 后电机",
            material: "合金",
            setCount: "五件套",
          },
        ],
      },
      {
        modelKey: "free",
        modelName: "岚图FREE",
        rows: [
          {
            year: "FREE+（混动 196 续航）",
            modelNo: "五件套",
            protection: "发动机 / 线束 / 电池 / 油箱 / 后电机",
            material: "合金",
            setCount: "五件套",
          },
          {
            year: "2025 款（两驱 225 / 318 · 四驱 190 / 259）",
            modelNo: "六件套",
            protection: "按纯电四驱布局对应",
            material: "锰钢 1.2mm / 铝镁合金 2.0mm",
            setCount: "六件套",
          },
        ],
      },
      {
        modelKey: "zhiyin",
        modelName: "岚图知音",
        rows: [
          {
            year: "知音（纯电）",
            modelNo: "四件套",
            protection: "前电机 / 前电池 / 后电池 / 后电机",
            material: "合金",
            setCount: "四件套",
          },
          {
            year: "2025 款（纯电 600 / 650）",
            modelNo: "五件套",
            protection: "含后储物盒位",
            material: "锰钢 1.2mm / 铝镁合金 2.0mm",
            setCount: "五件套",
          },
        ],
      },
      {
        modelKey: "taishan",
        modelName: "岚图泰山",
        rows: [
          {
            year: "泰山 X8",
            modelNo: "五件套",
            protection: "发动机 / 线束 / 电池 / 油箱 / 后电机",
            material: "合金",
            setCount: "五件套",
          },
          {
            year: "泰山 X8（纯电 603 · 98.1 度电）",
            modelNo: "五件套",
            protection: "前电机 / 线束 / 前电池 / 后电池 / 后电机",
            material: "合金",
            setCount: "五件套",
          },
          {
            year: "2026 款（续航 350）",
            modelNo: "六件套",
            protection: "前电机 / 线束 / 电池前 / 电池后 / 油箱 / 后电机",
            material: "锰钢 1.2mm / 铝镁合金 2.0mm",
            setCount: "六件套",
          },
        ],
      },
      {
        modelKey: "dreamer",
        modelName: "岚图梦想家",
        rows: [
          {
            year: "300 续航（22 款）",
            modelNo: "五件套",
            protection: "发动机 / 线束 / 电池 / 油箱 / 后电机",
            material: "合金",
            setCount: "五件套",
          },
          {
            year: "25 / 26 / 27 款（插混 / 油混 / 增程 / 纯电）",
            modelNo: "五件套 / 四件套",
            protection: "按动力形式对应；26 款纯电含电机专用支架",
            material: "锰钢 1.2mm / 铝镁合金 2.0mm",
            setCount: "五件套 / 四件套",
          },
        ],
      },
    ],
  },
  {
    id: "power-step",
    name: "电动踏板",
    feature: "车身两侧的伸缩踏板，老人小孩上下车省力；泰山 2026 款可原厂对插，不动原车线路",
    scope: "partial",
    scopeNote: "仅泰山",
    models: [
      {
        modelKey: "taishan",
        modelName: "岚图泰山",
        rows: [
          {
            year: "2026 款",
            modelNo: "原厂对插",
            note: "不动原车线路；装前确认门体结构、离地间隙与控制逻辑",
          },
        ],
      },
    ],
  },
  {
    id: "table",
    name: "小桌板",
    feature: "装在前排座椅靠背后方的小桌板，展开即用、收起贴合椅背；移动办公、带娃、置物都方便",
    scope: "partial",
    scopeNote: "仅知音",
    models: [
      {
        modelKey: "zhiyin",
        modelName: "岚图知音",
        rows: [
          {
            year: "全系",
            modelNo: "真皮 + 金属饰条",
            note: "米白皮质带杯架；装前排座椅靠背后方，展开即用、收起贴合椅背；移动办公 / 带娃 / 置物",
          },
        ],
      },
    ],
  },
] as const satisfies readonly VoyahFitmentCategory[];

// ---- 数据形状断言（门禁用，防手改漂移）----

function assertVoyahFitmentShape(): void {
  if (voyahFitmentCategories.length !== 6) {
    throw new Error(
      `voyahFitmentCategories expected 6 categories, got ${voyahFitmentCategories.length}`,
    );
  }
  const idSet = new Set(voyahFitmentCategories.map((c) => c.id));
  if (idSet.size !== 6) {
    throw new Error("voyahFitmentCategories: duplicate category id");
  }
  for (const cat of voyahFitmentCategories) {
    for (const group of cat.models) {
      if (group.rows.length === 0) {
        throw new Error(`voyahFitmentCategories: ${cat.id}/${group.modelKey} has no rows`);
      }
    }
  }
  // 全系项目必须覆盖 5 车型
  for (const cat of voyahFitmentCategories) {
    if (cat.scope === "all") {
      const keys = new Set(cat.models.map((g) => g.modelKey));
      for (const k of VOYAH_MODEL_ORDER) {
        if (!keys.has(k)) {
          throw new Error(`voyahFitmentCategories: ${cat.id} (scope=all) missing ${k}`);
        }
      }
    }
  }
}

assertVoyahFitmentShape();
