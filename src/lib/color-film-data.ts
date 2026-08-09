/**
 * 改色膜页面专用数据 — 将 15 个 colorSeries 扩展为带纹理/色系/标签的富数据结构。
 *
 * 与 src/lib/products.ts 中的 ColorFilmSeries 基础字段协同使用，
 * 基础字段 (slug/name/englishName/style/audience) 保持在 products.ts 不动。
 */

export type ColorFilmTexture = "亮光" | "哑光" | "金属" | "珠光" | "变色";
export type ColorFilmFamily = "黑灰" | "白银" | "蓝绿" | "粉紫" | "黄橙";

export type ColorFilmSeriesRich = {
  slug: string;
  name: string;
  englishName: string;
  style: string;
  audience: string;
  /** 质感分类 */
  texture: ColorFilmTexture;
  /** 色系分类 */
  colorFamily: ColorFilmFamily;
  /** 2-3 字中文定位标签 */
  styleLabel: string;
  /** 可感知的风格描述 */
  description: string;
};

/** 15 个改色膜系列的富数据 */
export const colorFilmSeriesRich: ColorFilmSeriesRich[] = [
  {
    slug: "glossy",
    name: "亮光系列",
    englishName: "Glossy",
    style: "亮面质感，接近原厂漆面效果，视觉干净直接",
    audience: "喜欢经典、耐看、接近原车漆质感的车主",
    texture: "亮光",
    colorFamily: "黑灰",
    styleLabel: "经典亮面",
    description: "接近原厂漆质感，干净利落，不挑车型不挑色",
  },
  {
    slug: "macaron",
    name: "马卡龙系列",
    englishName: "Macaron",
    style: "色彩柔和，年轻时尚，偏轻奢与潮流风格",
    audience: "年轻车主、女性车主、新能源车主",
    texture: "亮光",
    colorFamily: "粉紫",
    styleLabel: "柔和甜美",
    description: "低饱和柔和色调，年轻不张扬，受新能源车主欢迎",
  },
  {
    slug: "galaxy",
    name: "电光系列",
    englishName: "Galaxy",
    style: "带有强烈光泽变化，视觉冲击力强",
    audience: "喜欢高辨识度和运动感的车主",
    texture: "金属",
    colorFamily: "蓝绿",
    styleLabel: "运动流光",
    description: "强光泽变化，运动感十足，阳光下层次丰富",
  },
  {
    slug: "crystal",
    name: "水晶系列",
    englishName: "Crystal",
    style: "通透感更强，色彩层次明显",
    audience: "喜欢高级感和细腻色彩变化的车主",
    texture: "珠光",
    colorFamily: "蓝绿",
    styleLabel: "通透层次",
    description: "色彩通透有层次，光线变化下呈现不同质感",
  },
  {
    slug: "prisma",
    name: "镭射系列",
    englishName: "Prisma",
    style: "多角度变色，具有科技感和炫彩效果",
    audience: "追求个性化、潮流化的车主",
    texture: "变色",
    colorFamily: "粉紫",
    styleLabel: "炫彩变色",
    description: "多角度变色，科技感强，每个角度看都不一样",
  },
  {
    slug: "satin-chrome",
    name: "绸缎冰系列",
    englishName: "Satin Chrome",
    style: "半哑光、金属、丝滑质感",
    audience: "喜欢高级、克制、轻奢风格的车主",
    texture: "哑光",
    colorFamily: "白银",
    styleLabel: "丝滑哑光",
    description: "半哑金属丝滑质感，低调中带高级感",
  },
  {
    slug: "starlight",
    name: "星空系列",
    englishName: "Starlight",
    style: "星空闪点效果，视觉更梦幻",
    audience: "喜欢独特色彩和夜间效果的车主",
    texture: "珠光",
    colorFamily: "蓝绿",
    styleLabel: "星空闪点",
    description: "细闪颗粒如星空，夜间灯光下效果出众",
  },
  {
    slug: "midnight",
    name: "午夜系列",
    englishName: "Midnight",
    style: "深色系、黑色系为主，沉稳运动",
    audience: "喜欢低调、运动、黑武士风格的车主",
    texture: "亮光",
    colorFamily: "黑灰",
    styleLabel: "黑武士",
    description: "深色系沉稳有力，黑武士风格的终极选择",
  },
  {
    slug: "white-iridescent",
    name: "白色系列",
    englishName: "White Iridescent",
    style: "白色珠光、幻彩、冰感风格",
    audience: "喜欢干净、简约、高级白色系的车主",
    texture: "珠光",
    colorFamily: "白银",
    styleLabel: "白幻珠光",
    description: "白色不单调，珠光与幻彩让白色系焕发层次",
  },
  {
    slug: "magic",
    name: "幻彩系列",
    englishName: "Magic",
    style: "色彩变化明显，个性化强",
    audience: "喜欢高回头率的车主",
    texture: "变色",
    colorFamily: "粉紫",
    styleLabel: "高调幻彩",
    description: "色彩变化明显，回头率拉满，想低调都难",
  },
  {
    slug: "diamond",
    name: "钻石系列",
    englishName: "Diamond",
    style: "带颗粒闪光质感，视觉更精致",
    audience: "喜欢亮眼、精致、闪粉质感的车主",
    texture: "珠光",
    colorFamily: "白银",
    styleLabel: "碎钻闪光",
    description: "颗粒闪光精致感，阳光下车身星星点点",
  },
  {
    slug: "pearl-metal",
    name: "银河系列",
    englishName: "Pearl Metal",
    style: "珠光金属质感，兼具高级和运动",
    audience: "喜欢金属质感和高级光泽的车主",
    texture: "金属",
    colorFamily: "蓝绿",
    styleLabel: "珠光金属",
    description: "珠光混合金属光泽，高级不冷硬，动态流转",
  },
  {
    slug: "iridescence-chrome",
    name: "彩虹电镀系列",
    englishName: "Iridescence Chrome",
    style: "彩虹变色、电镀质感强",
    audience: "追求强烈个性和视觉冲击的车主",
    texture: "变色",
    colorFamily: "黄橙",
    styleLabel: "电镀虹彩",
    description: "彩虹电镀质感，视觉冲击力拉满，独一无二",
  },
  {
    slug: "metallic",
    name: "极光金属系列",
    englishName: "Metallic",
    style: "金属色泽明显，适合越野和性能车风格",
    audience: "喜欢力量感、机械感的车主",
    texture: "金属",
    colorFamily: "黑灰",
    styleLabel: "机械质感",
    description: "金属本色力量感，越野和性能车的绝配",
  },
  {
    slug: "matt-chrome",
    name: "亚光电镀系列",
    englishName: "Matt Chrome",
    style: "哑光与电镀结合，质感强烈",
    audience: "喜欢低调但有高级质感的车主",
    texture: "哑光",
    colorFamily: "黑灰",
    styleLabel: "哑光电镀",
    description: "哑光朦胧叠加电镀底光，低调但不简单",
  },
];

export const TEXTURE_FILTERS = [
  { key: "all", label: "全部" },
  { key: "亮光", label: "亮光" },
  { key: "哑光", label: "哑光" },
  { key: "金属", label: "金属" },
  { key: "珠光", label: "珠光" },
  { key: "变色", label: "变色" },
] as const;

export const COLOR_FAMILY_FILTERS = [
  { key: "all", label: "全部" },
  { key: "黑灰", label: "黑灰" },
  { key: "白银", label: "白银" },
  { key: "蓝绿", label: "蓝绿" },
  { key: "粉紫", label: "粉紫" },
  { key: "黄橙", label: "黄橙" },
] as const;

/** 色系 → 预览背景色 (Tailwind CSS class) */
export const COLOR_FAMILY_BG: Record<string, string> = {
  "黑灰": "bg-zinc-600",
  "白银": "bg-zinc-300",
  "蓝绿": "bg-teal-700",
  "粉紫": "bg-pink-600",
  "黄橙": "bg-amber-500",
};

/** 4 个风格选择器 → 映射的系列 slug 列表 */
export const STYLE_GROUPS: {
  slug: string;
  label: string;
  description: string;
  icon: "Moon" | "Zap" | "Feather" | "Sparkles";
  seriesSlugs: string[];
}[] = [
  {
    slug: "low-key-premium",
    label: "低调高级",
    description: "低饱和、耐看、不挑车型",
    icon: "Moon",
    seriesSlugs: ["midnight", "satin-chrome", "matt-chrome"],
  },
  {
    slug: "sport-mechanical",
    label: "运动机械",
    description: "力量感、性能风格、高辨识度",
    icon: "Zap",
    seriesSlugs: ["galaxy", "metallic", "diamond"],
  },
  {
    slug: "fresh-soft",
    label: "清新柔和",
    description: "干净简约、柔和色调",
    icon: "Feather",
    seriesSlugs: ["macaron", "white-iridescent", "crystal"],
  },
  {
    slug: "bold-iridescent",
    label: "个性幻彩",
    description: "回头率高、炫彩变化、科技感",
    icon: "Sparkles",
    seriesSlugs: ["prisma", "starlight", "magic", "iridescence-chrome", "glossy", "pearl-metal"],
  },
];

/** 热门案例（从 hotColors 每组中选 1 代表色 + 车型） */
export const HOT_COLOR_CASES: {
  colorName: string;
  texture: string;
  carExample: string;
  colorFamily: string;
}[] = [
  { colorName: "电光深邃灰", texture: "金属质感", carExample: "理想 L9", colorFamily: "黑灰" },
  { colorName: "钻石白", texture: "珠光质感", carExample: "小米 SU7", colorFamily: "白银" },
  { colorName: "超美金属冰莓粉", texture: "金属质感", carExample: "特斯拉 Model Y", colorFamily: "粉紫" },
  { colorName: "水晶冰川蓝", texture: "水晶质感", carExample: "蔚来 ET5", colorFamily: "蓝绿" },
  { colorName: "珠光荧光黄", texture: "珠光质感", carExample: "极氪 001", colorFamily: "黄橙" },
  { colorName: "超亮金属银河蓝", texture: "金属质感", carExample: "问界 M9", colorFamily: "蓝绿" },
];
