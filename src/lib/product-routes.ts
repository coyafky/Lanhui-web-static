/**
 * 产品中心路由注册表 — PRD §12 数据结构。
 * 所有 /product 下路由的 source of truth：导航、SEO、sitemap、redirect 都从这里驱动。
 */

export type ProductRouteType = "service_category" | "vehicle_brand" | "vehicle_model";
export type ProductRouteStatus = "live" | "planned";
export type ProductRoutePriority = "P0" | "P1" | "P2";
export type ServiceGroup = "film" | "light_mod" | "business_comfort" | "practical_accessory" | "car_care";
export type AccentColor =
  | "cyan" | "orange" | "amber" | "emerald" | "violet"
  | "pink" | "blue" | "teal" | "red" | "sky";

export type ProductRoute = {
  type: ProductRouteType;
  canonicalPath: string;
  legacyPaths?: readonly string[];
  title: string;
  navLabel: string;
  status: ProductRouteStatus;
  priority: ProductRoutePriority;
};

export type VehicleBrandRoute = ProductRoute & {
  type: "vehicle_brand";
  brandSlug: string;
  brandName: string;
  accentColor: AccentColor;
  modelSlugs: readonly string[];
};

export type VehicleModelRoute = ProductRoute & {
  type: "vehicle_model";
  brandSlug: string;
  modelSlug: string;
  modelName: string;
  parentPath: string;
  projectCount?: number;
  sourcePrd: string;
};

export type ServiceRoute = ProductRoute & {
  type: "service_category";
  serviceSlug: string;
  group: ServiceGroup;
};

const BRANDS: readonly VehicleBrandRoute[] = [
  { type: "vehicle_brand", brandSlug: "wenjie",  brandName: "问界",  accentColor: "cyan",     status: "live",    priority: "P0", canonicalPath: "/product/wenjie",  title: "问界轻改方案", navLabel: "问界", modelSlugs: ["m6","m7","m8"] },
  { type: "vehicle_brand", brandSlug: "xiaomi",  brandName: "小米",  accentColor: "orange",   status: "live",    priority: "P0", canonicalPath: "/product/xiaomi",  title: "小米轻改方案", navLabel: "小米", modelSlugs: ["su7","yu7"] },
  { type: "vehicle_brand", brandSlug: "zeekr",   brandName: "极氪",  accentColor: "orange",   status: "live",    priority: "P0", canonicalPath: "/product/zeekr",   title: "极氪轻改方案", navLabel: "极氪", modelSlugs: ["9x", "8x"] },
  { type: "vehicle_brand", brandSlug: "li-auto", brandName: "理想",  accentColor: "amber",    status: "live",    priority: "P1", canonicalPath: "/product/li-auto", title: "理想轻改方案", navLabel: "理想", modelSlugs: ["one", "i6", "i8", "l9", "mega"] },
  { type: "vehicle_brand", brandSlug: "tesla",   brandName: "特斯拉", accentColor: "red",     status: "live",    priority: "P1", canonicalPath: "/product/tesla",   title: "特斯拉轻改方案", navLabel: "特斯拉", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "xpeng",   brandName: "小鹏",  accentColor: "emerald",  status: "live",    priority: "P1", canonicalPath: "/product/xpeng",   title: "小鹏轻改方案", navLabel: "小鹏", modelSlugs: ["gx"] },
  { type: "vehicle_brand", brandSlug: "denza",   brandName: "腾势",  accentColor: "pink",     status: "live",    priority: "P1", canonicalPath: "/product/denza",   title: "腾势轻改方案", navLabel: "腾势", modelSlugs: ["d9"] },
  { type: "vehicle_brand", brandSlug: "voyah",   brandName: "岚图",  accentColor: "violet",   status: "live",    priority: "P1", canonicalPath: "/product/voyah",   title: "岚图轻改方案", navLabel: "岚图", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "ledao",   brandName: "乐道",  accentColor: "blue",     status: "live",    priority: "P1", canonicalPath: "/product/ledao",   title: "乐道轻改方案", navLabel: "乐道", modelSlugs: ["l90"] },
  { type: "vehicle_brand", brandSlug: "gaoshan", brandName: "高山",  accentColor: "teal",     status: "live",    priority: "P1", canonicalPath: "/product/gaoshan", title: "高山轻改方案", navLabel: "高山", modelSlugs: ["8"] },
  { type: "vehicle_brand", brandSlug: "zhijie",  brandName: "智界",  accentColor: "amber",    status: "live",    priority: "P1", canonicalPath: "/product/zhijie",  title: "智界轻改方案", navLabel: "智界", modelSlugs: ["v9"] },
  { type: "vehicle_brand", brandSlug: "nio",     brandName: "蔚来",  accentColor: "sky",      status: "live",    priority: "P1", canonicalPath: "/product/nio",     title: "蔚来轻改方案", navLabel: "蔚来", modelSlugs: ["es8"] },
  { type: "vehicle_brand", brandSlug: "toyota",  brandName: "丰田",  accentColor: "red",      status: "live",    priority: "P1", canonicalPath: "/product/toyota",  title: "丰田轻改方案", navLabel: "丰田", modelSlugs: ["land-cruiser", "prado", "highlander", "rav4", "alphard", "corolla"] },
  { type: "vehicle_brand", brandSlug: "mazda",   brandName: "马自达", accentColor: "red",      status: "live",    priority: "P1", canonicalPath: "/product/mazda",   title: "马自达轻改方案", navLabel: "马自达", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "gac",      brandName: "广汽传祺", accentColor: "red",   status: "live",    priority: "P1", canonicalPath: "/product/gac",      title: "广汽传祺轻改方案", navLabel: "广汽传祺", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "nissan",   brandName: "日产",  accentColor: "red",      status: "live",    priority: "P1", canonicalPath: "/product/nissan",  title: "日产轻改方案", navLabel: "日产", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "haval",   brandName: "哈弗",  accentColor: "red",      status: "live",    priority: "P1", canonicalPath: "/product/haval",   title: "哈弗轻改方案", navLabel: "哈弗", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "icar",    brandName: "iCAR",  accentColor: "orange",   status: "live",    priority: "P1", canonicalPath: "/product/icar",    title: "iCAR 轻改方案", navLabel: "iCAR", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "shangjie", brandName: "尚界",  accentColor: "violet",   status: "live",    priority: "P1", canonicalPath: "/product/shangjie", title: "尚界轻改方案", navLabel: "尚界", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "xiangjie", brandName: "享界",  accentColor: "sky",      status: "live",    priority: "P1", canonicalPath: "/product/xiangjie", title: "享界轻改方案", navLabel: "享界", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "bmw",      brandName: "宝马",  accentColor: "blue",     status: "live",    priority: "P1", canonicalPath: "/product/bmw",      title: "宝马轻改方案", navLabel: "宝马", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "hongqi",  brandName: "红旗",  accentColor: "red",      status: "live",    priority: "P1", canonicalPath: "/product/hongqi",  title: "红旗轻改方案", navLabel: "红旗", modelSlugs: ["hs7", "h5"] },
  { type: "vehicle_brand", brandSlug: "volkswagen", brandName: "大众", accentColor: "blue",     status: "live",    priority: "P1", canonicalPath: "/product/volkswagen", title: "大众轻改方案", navLabel: "大众", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "kia",      brandName: "起亚",  accentColor: "red",      status: "live",    priority: "P1", canonicalPath: "/product/kia",      title: "起亚轻改方案", navLabel: "起亚", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "haobo",    brandName: "昊铂",  accentColor: "emerald",  status: "live",    priority: "P1", canonicalPath: "/product/haobo",    title: "昊铂轻改方案", navLabel: "昊铂", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "land-rover", brandName: "路虎",  accentColor: "teal",     status: "live",    priority: "P1", canonicalPath: "/product/land-rover", title: "路虎轻改方案", navLabel: "路虎", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "chery",    brandName: "奇瑞",  accentColor: "cyan",     status: "live",    priority: "P1", canonicalPath: "/product/chery",    title: "奇瑞轻改方案", navLabel: "奇瑞", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "great-wall", brandName: "长城",  accentColor: "pink",     status: "live",    priority: "P1", canonicalPath: "/product/great-wall", title: "长城轻改方案", navLabel: "长城", modelSlugs: [] },
  { type: "vehicle_brand", brandSlug: "chevrolet", brandName: "雪佛兰", accentColor: "blue",     status: "live",    priority: "P1", canonicalPath: "/product/chevrolet", title: "雪佛兰轻改方案", navLabel: "雪佛兰", modelSlugs: [] },
  // ---- 2026-10-21 新增 19 品牌（适配库已接入，B 方案：品牌聚合页 + TOP 车型深页） ----
  { type: "vehicle_brand", brandSlug: "yangwang", brandName: "仰望", accentColor: "cyan",     status: "live",    priority: "P1", canonicalPath: "/product/yangwang", title: "仰望轻改方案", navLabel: "仰望", modelSlugs: ["u8"] },
  { type: "vehicle_brand", brandSlug: "buick", brandName: "别克", accentColor: "red",       status: "live",    priority: "P1", canonicalPath: "/product/buick", title: "别克轻改方案", navLabel: "别克", modelSlugs: ["gl8", "regal", "envision"] },
  { type: "vehicle_brand", brandSlug: "geely", brandName: "吉利", accentColor: "blue",      status: "live",    priority: "P1", canonicalPath: "/product/geely", title: "吉利轻改方案", navLabel: "吉利", modelSlugs: ["xingyue-l", "boyue-l", "emgrand"] },
  { type: "vehicle_brand", brandSlug: "tank", brandName: "坦克", accentColor: "emerald",    status: "live",    priority: "P1", canonicalPath: "/product/tank", title: "坦克轻改方案", navLabel: "坦克", modelSlugs: ["300", "500"] },
  { type: "vehicle_brand", brandSlug: "mercedes", brandName: "奔驰", accentColor: "amber",   status: "live",    priority: "P1", canonicalPath: "/product/mercedes", title: "奔驰轻改方案", navLabel: "奔驰", modelSlugs: ["c-class", "e-class", "s-class"] },
  { type: "vehicle_brand", brandSlug: "audi", brandName: "奥迪", accentColor: "red",        status: "live",    priority: "P1", canonicalPath: "/product/audi", title: "奥迪轻改方案", navLabel: "奥迪", modelSlugs: ["a4", "a6", "q5"] },
  { type: "vehicle_brand", brandSlug: "honda", brandName: "本田", accentColor: "blue",      status: "live",    priority: "P1", canonicalPath: "/product/honda", title: "本田轻改方案", navLabel: "本田", modelSlugs: ["cr-v", "civic", "accord"] },
  { type: "vehicle_brand", brandSlug: "arcfox", brandName: "极狐", accentColor: "cyan",     status: "live",    priority: "P1", canonicalPath: "/product/arcfox", title: "极狐轻改方案", navLabel: "极狐", modelSlugs: ["alpha-s", "alpha-t"] },
  { type: "vehicle_brand", brandSlug: "peugeot", brandName: "标致", accentColor: "red",     status: "live",    priority: "P1", canonicalPath: "/product/peugeot", title: "标致轻改方案", navLabel: "标致", modelSlugs: ["408", "508"] },
  { type: "vehicle_brand", brandSlug: "deepal", brandName: "深蓝", accentColor: "cyan",     status: "live",    priority: "P1", canonicalPath: "/product/deepal", title: "深蓝轻改方案", navLabel: "深蓝", modelSlugs: ["sl03", "s07"] },
  { type: "vehicle_brand", brandSlug: "leapmotor", brandName: "零跑", accentColor: "orange", status: "live",   priority: "P1", canonicalPath: "/product/leapmotor", title: "零跑轻改方案", navLabel: "零跑", modelSlugs: ["c11", "c01", "t03"] },
  { type: "vehicle_brand", brandSlug: "wey", brandName: "魏牌", accentColor: "amber",       status: "live",    priority: "P1", canonicalPath: "/product/wey", title: "魏牌轻改方案", navLabel: "魏牌", modelSlugs: ["lanshan", "mocha"] },
  { type: "vehicle_brand", brandSlug: "fangchengbao", brandName: "方程豹", accentColor: "emerald", status: "live", priority: "P1", canonicalPath: "/product/fangchengbao", title: "方程豹轻改方案", navLabel: "方程豹", modelSlugs: ["bao-5", "bao-8"] },
  { type: "vehicle_brand", brandSlug: "byd", brandName: "比亚迪", accentColor: "red",       status: "live",    priority: "P1", canonicalPath: "/product/byd", title: "比亚迪轻改方案", navLabel: "比亚迪", modelSlugs: ["han", "tang", "seal"] },
  { type: "vehicle_brand", brandSlug: "avatr", brandName: "阿维塔", accentColor: "orange",  status: "live",    priority: "P1", canonicalPath: "/product/avatr", title: "阿维塔轻改方案", navLabel: "阿维塔", modelSlugs: ["11", "12"] },
  { type: "vehicle_brand", brandSlug: "cadillac", brandName: "凯迪拉克", accentColor: "blue", status: "live",   priority: "P1", canonicalPath: "/product/cadillac", title: "凯迪拉克轻改方案", navLabel: "凯迪拉克", modelSlugs: ["ct5", "xt5"] },
  { type: "vehicle_brand", brandSlug: "baic", brandName: "北京汽车", accentColor: "red",    status: "live",    priority: "P1", canonicalPath: "/product/baic", title: "北京汽车轻改方案", navLabel: "北京汽车", modelSlugs: ["bj40", "bj60"] },
  { type: "vehicle_brand", brandSlug: "geely-galaxy", brandName: "吉利银河", accentColor: "cyan", status: "live", priority: "P1", canonicalPath: "/product/geely-galaxy", title: "吉利银河轻改方案", navLabel: "吉利银河", modelSlugs: ["l7", "e8"] },
  { type: "vehicle_brand", brandSlug: "aion", brandName: "广汽埃安", accentColor: "emerald", status: "live", priority: "P1", canonicalPath: "/product/aion", title: "广汽埃安轻改方案", navLabel: "广汽埃安", modelSlugs: ["aion-y", "aion-s"] },
] as const;

const MODELS: readonly VehicleModelRoute[] = [
  { type: "vehicle_model", brandSlug: "xiaomi", modelSlug: "su7",  modelName: "小米 SU7",  parentPath: "/product/xiaomi",  canonicalPath: "/product/xiaomi/su7",  title: "小米 SU7 专属升级方案",  navLabel: "SU7",  status: "live", priority: "P0", projectCount: 12, sourcePrd: "specs/archive/prd/product/XIAOMI_TOPIC_PRD_2026-06-20.md" },
  { type: "vehicle_model", brandSlug: "xiaomi", modelSlug: "yu7",  modelName: "小米 YU7",  parentPath: "/product/xiaomi",  canonicalPath: "/product/xiaomi/yu7",  title: "小米 YU7 专属升级方案",  navLabel: "YU7",  status: "live", priority: "P0", projectCount: 9, sourcePrd: "specs/archive/prd/product/XIAOMI_YU7_UPGRADE_PRD_2026-06-24.md", legacyPaths: ["/product/xiaomi-yu7"] },
  { type: "vehicle_model", brandSlug: "wenjie", modelSlug: "m6",   modelName: "问界 M6",   parentPath: "/product/wenjie",  canonicalPath: "/product/wenjie/m6",   title: "问界 M6 专属升级方案",   navLabel: "M6",   status: "planned", priority: "P0", projectCount: 17, sourcePrd: "specs/archive/prd/product/WENJIE_M6_TOPIC_PRD_2026-06-25.md", legacyPaths: ["/product/wenjie-m6"] },
  { type: "vehicle_model", brandSlug: "wenjie", modelSlug: "m7",   modelName: "问界 M7",   parentPath: "/product/wenjie",  canonicalPath: "/product/wenjie/m7",   title: "问界 M7 专属升级方案",   navLabel: "M7",   status: "planned", priority: "P0", projectCount: 30, sourcePrd: "specs/archive/prd/product/WENJIE_M7_TOPIC_PRD_2026-06-25.md", legacyPaths: ["/product/wenjie-m7"] },
  { type: "vehicle_model", brandSlug: "wenjie", modelSlug: "m8",   modelName: "问界 M8",   parentPath: "/product/wenjie",  canonicalPath: "/product/wenjie/m8",   title: "问界 M8 专属升级方案",   navLabel: "M8",   status: "planned", priority: "P0", projectCount: 30, sourcePrd: "specs/archive/prd/product/WENJIE_M8_TOPIC_PRD_2026-06-25.md", legacyPaths: ["/product/wenjie-m8"] },
  { type: "vehicle_model", brandSlug: "zeekr",  modelSlug: "9x",   modelName: "极氪 9X",   parentPath: "/product/zeekr",   canonicalPath: "/product/zeekr/9x",    title: "极氪 9X 专属升级方案",   navLabel: "9X",   status: "live",    priority: "P0", projectCount: 18, sourcePrd: "specs/archive/prd/product/ZEEKR_9X_UPGRADE_PRD_2026-06-24.md", legacyPaths: ["/product/zeekr-9x"] },
  { type: "vehicle_model", brandSlug: "zeekr",  modelSlug: "8x",   modelName: "极氪 8X",   parentPath: "/product/zeekr",   canonicalPath: "/product/zeekr/8x",    title: "极氪 8X 专属升级方案",   navLabel: "8X",   status: "live",    priority: "P1", projectCount: 17, sourcePrd: "specs/archive/prd/product/ZEEKR_8X_TOPIC_PRD_2026-06-27.md", legacyPaths: ["/product/zeekr-8x"] },
  { type: "vehicle_model", brandSlug: "li-auto", modelSlug: "one", modelName: "理想 ONE", parentPath: "/product/li-auto", canonicalPath: "/product/li-auto/one", title: "理想 ONE 专属轻改方案", navLabel: "ONE", status: "live", priority: "P1", projectCount: 8, sourcePrd: "specs/archive/prd/product/LI_AUTO_ONE_TOPIC_PRD_2026-06-27.md", legacyPaths: ["/product/li-auto-one"] },
  { type: "vehicle_model", brandSlug: "li-auto", modelSlug: "i6",  modelName: "理想 i6",   parentPath: "/product/li-auto", canonicalPath: "/product/li-auto/i6",   title: "理想 i6 专属升级方案",   navLabel: "i6",   status: "live", priority: "P1", projectCount: 20, sourcePrd: "specs/archive/prd/product/LI_AUTO_I6_TOPIC_PRD_2026-06-27.md", legacyPaths: ["/product/li-auto-i6"] },
  { type: "vehicle_model", brandSlug: "li-auto", modelSlug: "i8",  modelName: "理想 i8",   parentPath: "/product/li-auto", canonicalPath: "/product/li-auto/i8",   title: "理想 i8 专属升级方案",   navLabel: "i8",   status: "live", priority: "P1", projectCount: 20, sourcePrd: "specs/archive/prd/product/LI_AUTO_I8_TOPIC_PRD_2026-06-24.md", legacyPaths: ["/product/li-auto-i8"] },
  { type: "vehicle_model", brandSlug: "li-auto", modelSlug: "l9",  modelName: "理想 L9",   parentPath: "/product/li-auto", canonicalPath: "/product/li-auto/l9",   title: "理想 L9 专属升级方案",   navLabel: "L9",   status: "live", priority: "P1", projectCount: 14, sourcePrd: "specs/archive/prd/product/LI_AUTO_L9_TOPIC_PRD_2026-06-27.md", legacyPaths: ["/product/li-auto-l9"] },
  { type: "vehicle_model", brandSlug: "li-auto", modelSlug: "mega", modelName: "理想 MEGA", parentPath: "/product/li-auto", canonicalPath: "/product/li-auto/mega", title: "理想 MEGA 专属升级方案",  navLabel: "MEGA", status: "live", priority: "P1", projectCount: 18, sourcePrd: "specs/archive/prd/product/LI_AUTO_MEGA_TOPIC_PRD_2026-06-27.md", legacyPaths: ["/product/li-auto-mega"] },
  { type: "vehicle_model", brandSlug: "denza",  modelSlug: "d9",   modelName: "腾势 D9",   parentPath: "/product/denza",   canonicalPath: "/product/denza/d9",    title: "腾势 D9 专属升级方案",   navLabel: "D9",   status: "live",    priority: "P1", projectCount: 23, sourcePrd: "specs/archive/prd/product/DENZA_D9_TOPIC_PRD_2026-06-24.md", legacyPaths: ["/product/denza-d9"] },
  { type: "vehicle_model", brandSlug: "xpeng",  modelSlug: "gx",   modelName: "小鹏 GX",   parentPath: "/product/xpeng",   canonicalPath: "/product/xpeng/gx",    title: "小鹏 GX 专属升级方案",   navLabel: "GX",   status: "live",    priority: "P1", projectCount: 22, sourcePrd: "specs/archive/prd/product/XPENG_GX_TOPIC_PRD_2026-06-25.md", legacyPaths: ["/product/xpeng-gx"] },
  { type: "vehicle_model", brandSlug: "ledao",  modelSlug: "l90",  modelName: "乐道 L90",  parentPath: "/product/ledao",   canonicalPath: "/product/ledao/l90",   title: "乐道 L90 专属升级方案",  navLabel: "L90",  status: "live",    priority: "P1", projectCount: 21, sourcePrd: "specs/archive/prd/product/LEDAO_L90_TOPIC_PRD_2026-06-24.md", legacyPaths: ["/product/ledao-l90"] },
  { type: "vehicle_model", brandSlug: "gaoshan", modelSlug: "8",   modelName: "高山 8",    parentPath: "/product/gaoshan", canonicalPath: "/product/gaoshan/8",    title: "高山 8 专属升级方案",    navLabel: "8",    status: "live",    priority: "P1", projectCount: 23, sourcePrd: "specs/archive/prd/product/GAOSHAN_8_TOPIC_PRD_2026-06-25.md", legacyPaths: ["/product/gaoshan-8"] },
  { type: "vehicle_model", brandSlug: "zhijie", modelSlug: "v9",   modelName: "智界 V9",   parentPath: "/product/zhijie",  canonicalPath: "/product/zhijie/v9",   title: "智界 V9 专属升级方案",   navLabel: "V9",   status: "live",    priority: "P1", projectCount: 14, sourcePrd: "specs/archive/prd/product/ZHIJIE_V9_TOPIC_PRD_2026-06-25.md", legacyPaths: ["/product/zhijie-v9"] },
  { type: "vehicle_model", brandSlug: "nio",    modelSlug: "es8",  modelName: "蔚来 ES8", parentPath: "/product/nio",     canonicalPath: "/product/nio/es8",    title: "蔚来 ES8 专属升级方案",   navLabel: "ES8",  status: "live",    priority: "P1", projectCount: 17, sourcePrd: "specs/archive/prd/product/NIO_ES8_TOPIC_PRD_2026-06-27.md", legacyPaths: ["/product/nio-es8"] },
  { type: "vehicle_model", brandSlug: "toyota", modelSlug: "land-cruiser", modelName: "丰田兰德酷路泽", parentPath: "/product/toyota", canonicalPath: "/product/toyota/land-cruiser", title: "兰德酷路泽全系适配件明细", navLabel: "兰德酷路泽", status: "live", priority: "P1", projectCount: 4, sourcePrd: "specs/active/toyota-products.md" },
  { type: "vehicle_model", brandSlug: "toyota", modelSlug: "prado", modelName: "丰田普拉多", parentPath: "/product/toyota", canonicalPath: "/product/toyota/prado", title: "普拉多全系适配件明细", navLabel: "普拉多", status: "live", priority: "P1", projectCount: 4, sourcePrd: "specs/active/toyota-products.md" },
  { type: "vehicle_model", brandSlug: "toyota", modelSlug: "highlander", modelName: "丰田汉兰达", parentPath: "/product/toyota", canonicalPath: "/product/toyota/highlander", title: "汉兰达全系适配件明细", navLabel: "汉兰达", status: "live", priority: "P1", projectCount: 5, sourcePrd: "specs/active/toyota-products.md" },
  { type: "vehicle_model", brandSlug: "toyota", modelSlug: "rav4", modelName: "丰田RAV4荣放", parentPath: "/product/toyota", canonicalPath: "/product/toyota/rav4", title: "RAV4荣放全系适配件明细", navLabel: "RAV4荣放", status: "live", priority: "P1", projectCount: 5, sourcePrd: "specs/active/toyota-products.md" },
  { type: "vehicle_model", brandSlug: "toyota", modelSlug: "alphard", modelName: "丰田埃尔法", parentPath: "/product/toyota", canonicalPath: "/product/toyota/alphard", title: "埃尔法全系适配件明细", navLabel: "埃尔法", status: "live", priority: "P1", projectCount: 3, sourcePrd: "specs/active/toyota-products.md" },
  { type: "vehicle_model", brandSlug: "toyota", modelSlug: "corolla", modelName: "丰田卡罗拉", parentPath: "/product/toyota", canonicalPath: "/product/toyota/corolla", title: "卡罗拉全系适配件明细", navLabel: "卡罗拉", status: "live", priority: "P1", projectCount: 3, sourcePrd: "specs/active/toyota-products.md" },
  { type: "vehicle_model", brandSlug: "hongqi", modelSlug: "hs7", modelName: "红旗HS7", parentPath: "/product/hongqi", canonicalPath: "/product/hongqi/hs7", title: "HS7 全系适配件明细", navLabel: "HS7", status: "live", priority: "P1", projectCount: 5, sourcePrd: "specs/active/hongqi-products.md" },
  { type: "vehicle_model", brandSlug: "hongqi", modelSlug: "h5", modelName: "红旗H5", parentPath: "/product/hongqi", canonicalPath: "/product/hongqi/h5", title: "H5 全系适配件明细", navLabel: "H5", status: "live", priority: "P1", projectCount: 3, sourcePrd: "specs/active/hongqi-products.md" },
  // ---- 2026-10-21 新增 44 车型深页（数据驱动：src/lib/fitment/<brand>.ts，适配库原文） ----
  { type: "vehicle_model", brandSlug: "yangwang", modelSlug: "u8", modelName: "仰望U8", parentPath: "/product/yangwang", canonicalPath: "/product/yangwang/u8", title: "仰望U8 适配速查", navLabel: "U8", status: "live", priority: "P1", projectCount: 1, sourcePrd: "供应商产品资料/车型适配库和文件/仰望.md" },
  { type: "vehicle_model", brandSlug: "buick", modelSlug: "gl8", modelName: "别克GL8", parentPath: "/product/buick", canonicalPath: "/product/buick/gl8", title: "别克GL8 适配速查", navLabel: "GL8", status: "live", priority: "P1", projectCount: 5, sourcePrd: "供应商产品资料/车型适配库和文件/别克.md" },
  { type: "vehicle_model", brandSlug: "buick", modelSlug: "regal", modelName: "别克君威", parentPath: "/product/buick", canonicalPath: "/product/buick/regal", title: "别克君威 适配速查", navLabel: "君威", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/别克.md" },
  { type: "vehicle_model", brandSlug: "buick", modelSlug: "envision", modelName: "别克昂科威", parentPath: "/product/buick", canonicalPath: "/product/buick/envision", title: "别克昂科威 适配速查", navLabel: "昂科威", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/别克.md" },
  { type: "vehicle_model", brandSlug: "geely", modelSlug: "xingyue-l", modelName: "吉利星越L", parentPath: "/product/geely", canonicalPath: "/product/geely/xingyue-l", title: "吉利星越L 适配速查", navLabel: "星越L", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/吉利.md" },
  { type: "vehicle_model", brandSlug: "geely", modelSlug: "boyue-l", modelName: "吉利博越L", parentPath: "/product/geely", canonicalPath: "/product/geely/boyue-l", title: "吉利博越L 适配速查", navLabel: "博越L", status: "live", priority: "P1", projectCount: 5, sourcePrd: "供应商产品资料/车型适配库和文件/吉利.md" },
  { type: "vehicle_model", brandSlug: "geely", modelSlug: "emgrand", modelName: "吉利帝豪", parentPath: "/product/geely", canonicalPath: "/product/geely/emgrand", title: "吉利帝豪 适配速查", navLabel: "帝豪", status: "live", priority: "P1", projectCount: 5, sourcePrd: "供应商产品资料/车型适配库和文件/吉利.md" },
  { type: "vehicle_model", brandSlug: "tank", modelSlug: "300", modelName: "坦克300", parentPath: "/product/tank", canonicalPath: "/product/tank/300", title: "坦克300 适配速查", navLabel: "坦克300", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/坦克.md" },
  { type: "vehicle_model", brandSlug: "tank", modelSlug: "500", modelName: "坦克500", parentPath: "/product/tank", canonicalPath: "/product/tank/500", title: "坦克500 适配速查", navLabel: "坦克500", status: "live", priority: "P1", projectCount: 5, sourcePrd: "供应商产品资料/车型适配库和文件/坦克.md" },
  { type: "vehicle_model", brandSlug: "mercedes", modelSlug: "c-class", modelName: "奔驰C级", parentPath: "/product/mercedes", canonicalPath: "/product/mercedes/c-class", title: "奔驰C级 适配速查", navLabel: "C级", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/奔驰.md" },
  { type: "vehicle_model", brandSlug: "mercedes", modelSlug: "e-class", modelName: "奔驰E级", parentPath: "/product/mercedes", canonicalPath: "/product/mercedes/e-class", title: "奔驰E级 适配速查", navLabel: "E级", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/奔驰.md" },
  { type: "vehicle_model", brandSlug: "mercedes", modelSlug: "s-class", modelName: "奔驰S级", parentPath: "/product/mercedes", canonicalPath: "/product/mercedes/s-class", title: "奔驰S级 适配速查", navLabel: "S级", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/奔驰.md" },
  { type: "vehicle_model", brandSlug: "audi", modelSlug: "a4", modelName: "奥迪A4", parentPath: "/product/audi", canonicalPath: "/product/audi/a4", title: "奥迪A4 适配速查", navLabel: "A4", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/奥迪.md" },
  { type: "vehicle_model", brandSlug: "audi", modelSlug: "a6", modelName: "奥迪A6", parentPath: "/product/audi", canonicalPath: "/product/audi/a6", title: "奥迪A6 适配速查", navLabel: "A6", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/奥迪.md" },
  { type: "vehicle_model", brandSlug: "audi", modelSlug: "q5", modelName: "奥迪Q5", parentPath: "/product/audi", canonicalPath: "/product/audi/q5", title: "奥迪Q5 适配速查", navLabel: "Q5", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/奥迪.md" },
  { type: "vehicle_model", brandSlug: "honda", modelSlug: "cr-v", modelName: "本田CR-V", parentPath: "/product/honda", canonicalPath: "/product/honda/cr-v", title: "本田CR-V 适配速查", navLabel: "CR-V", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/本田.md" },
  { type: "vehicle_model", brandSlug: "honda", modelSlug: "civic", modelName: "本田思域", parentPath: "/product/honda", canonicalPath: "/product/honda/civic", title: "本田思域 适配速查", navLabel: "思域", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/本田.md" },
  { type: "vehicle_model", brandSlug: "honda", modelSlug: "accord", modelName: "本田雅阁", parentPath: "/product/honda", canonicalPath: "/product/honda/accord", title: "本田雅阁 适配速查", navLabel: "雅阁", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/本田.md" },
  { type: "vehicle_model", brandSlug: "arcfox", modelSlug: "alpha-s", modelName: "极狐阿尔法S", parentPath: "/product/arcfox", canonicalPath: "/product/arcfox/alpha-s", title: "极狐阿尔法S 适配速查", navLabel: "阿尔法S", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/极狐.md" },
  { type: "vehicle_model", brandSlug: "arcfox", modelSlug: "alpha-t", modelName: "极狐阿尔法T", parentPath: "/product/arcfox", canonicalPath: "/product/arcfox/alpha-t", title: "极狐阿尔法T 适配速查", navLabel: "阿尔法T", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/极狐.md" },
  { type: "vehicle_model", brandSlug: "peugeot", modelSlug: "408", modelName: "标致408", parentPath: "/product/peugeot", canonicalPath: "/product/peugeot/408", title: "标致408 适配速查", navLabel: "408", status: "live", priority: "P1", projectCount: 1, sourcePrd: "供应商产品资料/车型适配库和文件/标致.md" },
  { type: "vehicle_model", brandSlug: "peugeot", modelSlug: "508", modelName: "标致508", parentPath: "/product/peugeot", canonicalPath: "/product/peugeot/508", title: "标致508 适配速查", navLabel: "508", status: "live", priority: "P1", projectCount: 1, sourcePrd: "供应商产品资料/车型适配库和文件/标致.md" },
  { type: "vehicle_model", brandSlug: "deepal", modelSlug: "sl03", modelName: "深蓝SL03", parentPath: "/product/deepal", canonicalPath: "/product/deepal/sl03", title: "深蓝SL03 适配速查", navLabel: "SL03", status: "live", priority: "P1", projectCount: 2, sourcePrd: "供应商产品资料/车型适配库和文件/深蓝.md" },
  { type: "vehicle_model", brandSlug: "deepal", modelSlug: "s07", modelName: "深蓝S07", parentPath: "/product/deepal", canonicalPath: "/product/deepal/s07", title: "深蓝S07 适配速查", navLabel: "S07", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/深蓝.md" },
  { type: "vehicle_model", brandSlug: "leapmotor", modelSlug: "c11", modelName: "零跑C11", parentPath: "/product/leapmotor", canonicalPath: "/product/leapmotor/c11", title: "零跑C11 适配速查", navLabel: "C11", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/零跑.md" },
  { type: "vehicle_model", brandSlug: "leapmotor", modelSlug: "c01", modelName: "零跑C01", parentPath: "/product/leapmotor", canonicalPath: "/product/leapmotor/c01", title: "零跑C01 适配速查", navLabel: "C01", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/零跑.md" },
  { type: "vehicle_model", brandSlug: "leapmotor", modelSlug: "t03", modelName: "零跑T03", parentPath: "/product/leapmotor", canonicalPath: "/product/leapmotor/t03", title: "零跑T03 适配速查", navLabel: "T03", status: "live", priority: "P1", projectCount: 2, sourcePrd: "供应商产品资料/车型适配库和文件/零跑.md" },
  { type: "vehicle_model", brandSlug: "wey", modelSlug: "lanshan", modelName: "魏牌蓝山", parentPath: "/product/wey", canonicalPath: "/product/wey/lanshan", title: "魏牌蓝山 适配速查", navLabel: "蓝山", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/魏牌.md" },
  { type: "vehicle_model", brandSlug: "wey", modelSlug: "mocha", modelName: "魏牌摩卡", parentPath: "/product/wey", canonicalPath: "/product/wey/mocha", title: "魏牌摩卡 适配速查", navLabel: "摩卡", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/魏牌.md" },
  { type: "vehicle_model", brandSlug: "fangchengbao", modelSlug: "bao-5", modelName: "方程豹豹5", parentPath: "/product/fangchengbao", canonicalPath: "/product/fangchengbao/bao-5", title: "方程豹豹5 适配速查", navLabel: "豹5", status: "live", priority: "P1", projectCount: 2, sourcePrd: "供应商产品资料/车型适配库和文件/方程豹.md" },
  { type: "vehicle_model", brandSlug: "fangchengbao", modelSlug: "bao-8", modelName: "方程豹豹8", parentPath: "/product/fangchengbao", canonicalPath: "/product/fangchengbao/bao-8", title: "方程豹豹8 适配速查", navLabel: "豹8", status: "live", priority: "P1", projectCount: 2, sourcePrd: "供应商产品资料/车型适配库和文件/方程豹.md" },
  { type: "vehicle_model", brandSlug: "byd", modelSlug: "han", modelName: "比亚迪汉", parentPath: "/product/byd", canonicalPath: "/product/byd/han", title: "比亚迪汉 适配速查", navLabel: "汉", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/比亚迪.md" },
  { type: "vehicle_model", brandSlug: "byd", modelSlug: "tang", modelName: "比亚迪唐", parentPath: "/product/byd", canonicalPath: "/product/byd/tang", title: "比亚迪唐 适配速查", navLabel: "唐", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/比亚迪.md" },
  { type: "vehicle_model", brandSlug: "byd", modelSlug: "seal", modelName: "比亚迪海豹", parentPath: "/product/byd", canonicalPath: "/product/byd/seal", title: "比亚迪海豹 适配速查", navLabel: "海豹", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/比亚迪.md" },
  { type: "vehicle_model", brandSlug: "avatr", modelSlug: "11", modelName: "阿维塔11", parentPath: "/product/avatr", canonicalPath: "/product/avatr/11", title: "阿维塔11 适配速查", navLabel: "阿维塔11", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/阿维塔.md" },
  { type: "vehicle_model", brandSlug: "avatr", modelSlug: "12", modelName: "阿维塔12", parentPath: "/product/avatr", canonicalPath: "/product/avatr/12", title: "阿维塔12 适配速查", navLabel: "阿维塔12", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/阿维塔.md" },
  { type: "vehicle_model", brandSlug: "cadillac", modelSlug: "ct5", modelName: "凯迪拉克CT5", parentPath: "/product/cadillac", canonicalPath: "/product/cadillac/ct5", title: "凯迪拉克CT5 适配速查", navLabel: "CT5", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/凯迪拉克.md" },
  { type: "vehicle_model", brandSlug: "cadillac", modelSlug: "xt5", modelName: "凯迪拉克XT5", parentPath: "/product/cadillac", canonicalPath: "/product/cadillac/xt5", title: "凯迪拉克XT5 适配速查", navLabel: "XT5", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/凯迪拉克.md" },
  { type: "vehicle_model", brandSlug: "baic", modelSlug: "bj40", modelName: "北京汽车BJ40", parentPath: "/product/baic", canonicalPath: "/product/baic/bj40", title: "北京汽车BJ40 适配速查", navLabel: "BJ40", status: "live", priority: "P1", projectCount: 1, sourcePrd: "供应商产品资料/车型适配库和文件/北京汽车.md" },
  { type: "vehicle_model", brandSlug: "baic", modelSlug: "bj60", modelName: "北京汽车BJ60", parentPath: "/product/baic", canonicalPath: "/product/baic/bj60", title: "北京汽车BJ60 适配速查", navLabel: "BJ60", status: "live", priority: "P1", projectCount: 1, sourcePrd: "供应商产品资料/车型适配库和文件/北京汽车.md" },
  { type: "vehicle_model", brandSlug: "geely-galaxy", modelSlug: "l7", modelName: "吉利银河L7", parentPath: "/product/geely-galaxy", canonicalPath: "/product/geely-galaxy/l7", title: "吉利银河L7 适配速查", navLabel: "L7", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/吉利银河.md" },
  { type: "vehicle_model", brandSlug: "geely-galaxy", modelSlug: "e8", modelName: "吉利银河E8", parentPath: "/product/geely-galaxy", canonicalPath: "/product/geely-galaxy/e8", title: "吉利银河E8 适配速查", navLabel: "E8", status: "live", priority: "P1", projectCount: 4, sourcePrd: "供应商产品资料/车型适配库和文件/吉利银河.md" },
  { type: "vehicle_model", brandSlug: "aion", modelSlug: "aion-y", modelName: "AION Y", parentPath: "/product/aion", canonicalPath: "/product/aion/aion-y", title: "广汽埃安AION Y 适配速查", navLabel: "AION Y", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/广汽埃安.md" },
  { type: "vehicle_model", brandSlug: "aion", modelSlug: "aion-s", modelName: "AION S", parentPath: "/product/aion", canonicalPath: "/product/aion/aion-s", title: "广汽埃安AION S 适配速查", navLabel: "AION S", status: "live", priority: "P1", projectCount: 3, sourcePrd: "供应商产品资料/车型适配库和文件/广汽埃安.md" },
] as const;

const SERVICES: readonly ServiceRoute[] = [
  { type: "service_category", serviceSlug: "ppf",             title: "隐形车衣",          navLabel: "隐形车衣",     group: "film",                  status: "live",    priority: "P0", canonicalPath: "/product/ppf" },
  { type: "service_category", serviceSlug: "window-film",     title: "汽车窗膜",          navLabel: "汽车窗膜",     group: "film",                  status: "live",    priority: "P0", canonicalPath: "/product/window-film" },
  { type: "service_category", serviceSlug: "color-film",      title: "改色膜",            navLabel: "改色膜",       group: "film",                  status: "live",    priority: "P0", canonicalPath: "/product/color-film" },
  { type: "service_category", serviceSlug: "electric-steps",  title: "电动踏板",          navLabel: "电动踏板",     group: "light_mod",             status: "live",    priority: "P0", canonicalPath: "/product/electric-steps" },
  { type: "service_category", serviceSlug: "wheels",          title: "轮毂升级",          navLabel: "轮毂升级",     group: "light_mod",             status: "live",    priority: "P0", canonicalPath: "/product/wheels" },
  { type: "service_category", serviceSlug: "chassis",         title: "底盘护板",          navLabel: "底盘护板",     group: "light_mod",             status: "live",    priority: "P0", canonicalPath: "/product/chassis" },
  { type: "service_category", serviceSlug: "tei-brake",      title: "TEI 刹车卡钳",       navLabel: "刹车卡钳",     group: "light_mod",             status: "live",    priority: "P1", canonicalPath: "/product/tei-brake" },
  { type: "service_category", serviceSlug: "flooring",        title: "汽车地板",          navLabel: "汽车地板",     group: "practical_accessory",   status: "live",    priority: "P1", canonicalPath: "/product/flooring" },
  { type: "service_category", serviceSlug: "floor-mats",      title: "360 软包脚垫",      navLabel: "360 软包脚垫", group: "practical_accessory",   status: "live",    priority: "P1", canonicalPath: "/product/floor-mats" },
  { type: "service_category", serviceSlug: "tray-table",      title: "小桌板",            navLabel: "小桌板",       group: "practical_accessory",   status: "live",    priority: "P1", canonicalPath: "/product/tray-table" },
  { type: "service_category", serviceSlug: "car-tv",          title: "车载电视",          navLabel: "车载电视",     group: "business_comfort",      status: "live",    priority: "P1", canonicalPath: "/product/car-tv" },
  { type: "service_category", serviceSlug: "business-comfort", title: "商务舒适升级",     navLabel: "商务舒适升级", group: "business_comfort",      status: "planned", priority: "P1", canonicalPath: "/product/business-comfort" },
  { type: "service_category", serviceSlug: "car-care",       title: "洗美养护",          navLabel: "洗美养护",     group: "car_care",              status: "live",    priority: "P0", canonicalPath: "/product/car-care" },
  { type: "service_category", serviceSlug: "toyota-wheels", title: "丰田轮毂（旋压 / 锻造）", navLabel: "丰田轮毂", group: "light_mod", status: "live", priority: "P1", canonicalPath: "/product/toyota/wheels" },
  { type: "service_category", serviceSlug: "body-kits", title: "车身包围", navLabel: "车身包围", group: "light_mod", status: "live", priority: "P1", canonicalPath: "/product/body-kits" },
] as const;

export const ALL_BRANDS: readonly VehicleBrandRoute[] = BRANDS;
export const ALL_MODELS: readonly VehicleModelRoute[] = MODELS;
export const ALL_SERVICES: readonly ServiceRoute[] = SERVICES;

export const ALL_LEGACY_ALIASES: readonly { from: string; to: string }[] = MODELS
  .flatMap((m) => (m.legacyPaths ?? []).map((from) => ({ from, to: m.canonicalPath })));

export function getBrandRoute(brandSlug: string): VehicleBrandRoute | undefined {
  return BRANDS.find((b) => b.brandSlug === brandSlug);
}

export function getModelRoute(brandSlug: string, modelSlug: string): VehicleModelRoute | undefined {
  return MODELS.find((m) => m.brandSlug === brandSlug && m.modelSlug === modelSlug);
}

export function getServiceRoute(serviceSlug: string): ServiceRoute | undefined {
  return SERVICES.find((s) => s.serviceSlug === serviceSlug);
}

export function getCanonicalFor(path: string): string | undefined {
  const alias = ALL_LEGACY_ALIASES.find((a) => a.from === path);
  return alias?.to;
}

export function getModelsByBrand(brandSlug: string): readonly VehicleModelRoute[] {
  return MODELS.filter((m) => m.brandSlug === brandSlug);
}

export function getLiveBrands(): readonly VehicleBrandRoute[] {
  return BRANDS.filter((b) => b.status === "live");
}

export function getLiveServices(): readonly ServiceRoute[] {
  return SERVICES.filter((s) => s.status === "live");
}
