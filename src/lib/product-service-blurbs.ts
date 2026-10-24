/**
 * 产品中心 /product 服务卡短文案（统一来源）
 *
 * 为什么单独成表：Clarity 卡片的副标题与描述原先由 5 个 Map 组件各自维护，
 * 结果出现两类回归 —— ① FilmServiceMap / LightModMap 把 `navLabel` 原样印在
 * `title` 下方，navLabel 与 title 常常相同（如「电动踏板 / 电动踏板」）造成重复；
 * ② TAGLINE_MAP 只覆盖部分 slug，`?? ""` 兜底出空描述，同一网格内卡片高度参差。
 * 集中到这里后，副标题与描述只维护一处。
 *
 * 文案纪律：全部改写自各服务页 `metadata.description` 原文，不新造卖点、不加编号与承诺。
 */

/** slug → 卡片副标题（一句话，不重复 title；无合适内容时留空由组件隐藏） */
export const SERVICE_SUBTITLE: Record<string, string> = {
  // 车膜系列
  ppf: "漆面隔护",
  "window-film": "前挡与侧后挡搭配",
  "color-film": "整车覆膜改色",
  // 轻改装
  "electric-steps": "上下车辅助",
  wheels: "尺寸与外观方案",
  chassis: "底盘防护加装",
  "tei-brake": "街道 / 赛事 / 越野三系",
  "toyota-wheels": "旋压与锻造两线",
  "body-kits": "前后包围与侧裙",
  // 座舱配件
  flooring: "滑轨与尾箱统一升级",
  "floor-mats": "座舱与尾箱覆盖",
  "tray-table": "后排办公与用餐",
  // 后排舒适（car-tv 当前由 BusinessComfortMap 大展区渲染，此处按同一口径保留文案）
  "car-tv": "后排大屏观影",
  // 洗美
  "car-care": "洗车与内饰清洁",
};

/** slug → 卡片描述（改成短句，取自各服务页 metadata.description 原文） */
export const SERVICE_BLURB: Record<string, string> = {
  // 车膜系列
  ppf: "TPU 透明膜，为日常轻微剐蹭增加漆面隔护",
  "window-film": "按透光、隔热与隐私需求选择前挡和侧后挡搭配",
  "color-film": "通过覆膜改变车身颜色，施工前需检查原漆状态",
  // 轻改装
  "electric-steps": "开门展开、收起贴近车身，安装方式按车型确认",
  wheels: "核对原车轮毂数据，再选择尺寸与外观方案",
  chassis: "五段护板覆盖前后电机、电池与线束区域",
  "tei-brake": "街道、赛事与越野三个系列，一体与分体锻造工艺",
  "toyota-wheels": "旋压与锻造两条产品线，按原车数据确认适配",
  "body-kits": "前包围、后包围与侧裙可选，到店评估车漆与安装条件",
  // 座舱配件
  flooring: "地板、滑轨、尾箱区域统一升级，提升座舱完整度",
  "floor-mats": "多款汽车垫覆盖座舱、后排与尾箱，便于日常清洁",
  "tray-table": "后排小桌板，兼顾办公与用餐场景，按车型确认固定方式",
  // 后排舒适
  "car-tv": "为 SUV 与 MPV 后排补充大屏观影、投屏与联网娱乐",
  // 洗美
  "car-care": "提供洗车与内饰清洁等日常养护，具体项目到店沟通",
};

/** 取副标题；未收录时返回空串，由组件隐藏该行（不再回退到 navLabel 造成重复） */
export function getServiceSubtitle(slug: string): string {
  return SERVICE_SUBTITLE[slug] ?? "";
}

/** 取描述；未收录时返回空串，由组件隐藏该行（不再渲染空段落） */
export function getServiceBlurb(slug: string): string {
  return SERVICE_BLURB[slug] ?? "";
}
