/**
 * 小米 SU7 / YU7 轻改材质分类参考。
 *
 * 仅用于页面材质对比展示：材质为分类参考，具体到店看样；价格到店询价（不标价）。
 */

export interface XiaomiMaterialComparisonRow {
  readonly material: string;
  readonly texture: string;
  readonly care: string;
  readonly durability: string;
  readonly typicalProjects: string;
}

export const xiaomiMaterialComparison = [
  {
    material: "干碳纤维",
    texture: "哑光编织纹，轻量、竞技感",
    care: "湿布擦即净",
    durability: "高（抗刮耐老化）",
    typicalProjects: "表台饰板 / 出风口 / 方向盘 / 侧裙 / 后扰流板 / 鸭尾",
  },
  {
    material: "翻毛皮（Alcantara 类）",
    texture: "细腻绒面，豪华、防反光",
    care: "需专用刷 / 清洁剂",
    durability: "中高（怕油污、需养护）",
    typicalProjects: "门板 / ABC 柱 / 表台包裹",
  },
  {
    material: "原厂",
    texture: "塑料 / 织物，低调",
    care: "常规",
    durability: "中",
    typicalProjects: "—",
  },
  {
    material: "真皮皮套",
    texture: "柔软亲肤，商务",
    care: "常规皮质护理",
    durability: "中高",
    typicalProjects: "座椅皮套 / 扶手箱",
  },
] as const satisfies readonly XiaomiMaterialComparisonRow[];
