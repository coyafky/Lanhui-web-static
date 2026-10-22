export type RearDisplayType = "roof" | "seatback" | "rearview";

export type CarTvFeature = {
  title: string;
  description: string;
  metric?: string;
};

export type CarTvSpecGroup = {
  title: string;
  items: readonly {
    label: string;
    value: string;
  }[];
};

export type RearDisplayProduct = {
  type: RearDisplayType;
  name: string;
  en: string;
  tagline: string;
  fitFor: readonly string[];
  scene: string;
  image: {
    publicPath: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const carTvImages = {
  hero: {
    publicPath: "/images/product/car-tv/car-tv-hero.webp",
    width: 1586,
    height: 992,
    alt: "新能源 SUV 后排顶置车载电视展开后的观影效果",
  },
  installation: {
    publicPath: "/images/product/car-tv/car-tv-installation.webp",
    width: 1536,
    height: 1024,
    alt: "车载电视收起后与深色顶棚贴合的安装细节",
  },
  seatback: {
    publicPath: "/images/product/car-tv/seatback.webp",
    width: 1200,
    height: 900,
    alt: "前排座椅靠背安装 13.3 英寸娱乐屏的后排视角效果示意",
  },
  rearview: {
    publicPath: "/images/product/car-tv/rearview.webp",
    width: 1200,
    height: 900,
    alt: "流媒体后视镜实车装车后显示后方路面的效果",
  },
} as const;

/** 三种产品形态（PageSpec S1） */
export const rearDisplayTypes: readonly RearDisplayProduct[] = [
  {
    type: "roof",
    name: "吸顶式后排电视",
    en: "Roof Monitor",
    tagline: "全车共享一块大屏",
    fitFor: [
      "带天窗的 SUV、MPV",
      "经常一车人一起跑长途",
      "顶棚空间够、想省事的",
    ],
    scene: "长途出行、家庭多人观影",
    image: carTvImages.hero,
  },
  {
    type: "seatback",
    name: "座椅背装式后排电视",
    en: "Seatback Display",
    tagline: "每个座位各看各的",
    fitFor: [
      "后排常坐两个人的车",
      "两人想看的内容不一样",
      "原车后排带 LINK 接口的",
    ],
    scene: "儿童娱乐、双屏独立观看",
    image: carTvImages.seatback,
  },
  {
    type: "rearview",
    name: "流媒体后视镜",
    en: "Rearview Upgrade",
    tagline: "换一个更清楚的原车后视镜",
    fitFor: [
      "觉得原车后视镜晚上看不清的",
      "常跑夜间高速、需要防眩目的",
      "想要停车监控的",
    ],
    scene: "夜间行车、雨天、满载遮挡",
    image: carTvImages.rearview,
  },
] as const;

/** 决策对比（PageSpec S2，真实口径） */
export const rearComparisonRows: readonly {
  dimension: string;
  roof: string;
  seatback: string;
  rearview: string;
}[] = [
  { dimension: "观看方式", roof: "全车共享一块大屏", seatback: "每座独立屏幕", rearview: "主驾使用（兼顾后视）" },
  { dimension: "屏幕", roof: "15.6 / 17.3 / 18.5 寸", seatback: "13.3 寸（前后互联）", rearview: "替换原车后视镜" },
  { dimension: "安装位置", roof: "顶棚折叠", seatback: "座椅头枕 / 背装（LINK 接口）", rearview: "原车后视位置" },
  { dimension: "对顶棚要求", roof: "需确认天窗、遮阳帘轨迹", seatback: "基本无", rearview: "无" },
  { dimension: "对座椅要求", roof: "无", seatback: "需确认头枕结构 / 是否可拆卸", rearview: "无" },
  { dimension: "供电走线", roof: "顶棚取电", seatback: "后排 LINK 接口 / 隐藏走线", rearview: "替换原车线束" },
  { dimension: "多人观影", roof: "更适合", seatback: "一般（各看各的）", rearview: "不适用" },
  { dimension: "独立娱乐", roof: "一般", seatback: "更适合", rearview: "不适用" },
] as const;

/** 吸顶式卖点（承接旧页面） */
export const carTvFeatures: readonly CarTvFeature[] = [
  {
    title: "18.5 英寸高清大屏",
    description: "1920 × 1080 分辨率，窄边框设计，让 SUV 与 MPV 后排获得更完整的观影画面。",
    metric: "1080P",
  },
  {
    title: "手机投屏与 HDMI",
    description: "支持手机无线投屏和 HDMI 输入，方便连接移动设备或其他影音设备。",
    metric: "双投屏路径",
  },
  {
    title: "4G 与 Wi-Fi 联网",
    description: "支持 4G 和 Wi-Fi 网络连接，在线内容、应用与本地媒体可以灵活切换。",
    metric: "双网络方式",
  },
  {
    title: "双麦语音交互",
    description: "通过双麦克风降低车内噪声干扰，可进行亮度、音乐和大屏功能等语音操作。",
    metric: "触控＋遥控＋语音",
  },
];

/** 座椅背装式卖点（PageSpec S4） */
export const seatbackFeatures: readonly CarTvFeature[] = [
  { title: "各坐各的，互不打扰", description: "后排两位乘客可以看不同内容，前后屏可互联。", metric: "双屏独立" },
  { title: "原车 LINK 接口取电", description: "后排带 LINK 接口的车型直接取电，不用拆顶棚。", metric: "无损取电" },
  { title: "1 秒安装即插即用", description: "专用支架固定，安装快，不破坏原车结构。", metric: "即插即用" },
  { title: "13.3 寸前后互联", description: "大屏 + 前后屏内容联动，适合带娃家庭与商务接待。", metric: "13.3 英寸" },
];

/** 流媒体后视镜卖点（PageSpec S5） */
export const rearviewFeatures: readonly CarTvFeature[] = [
  { title: "替换原车后视，非捆绑", description: "装在原车后视镜位置，不遮挡视野，线束专用。", metric: "原位替换" },
  { title: "前后双录 1080P", description: "前后摄像头同时记录，行车过程有据可查。", metric: "1080P 双录" },
  { title: "自动感光防眩目", description: "夜间自动调节亮度，抑制后车远光，不晃眼。", metric: "夜间防眩目" },
  { title: "停车监控", description: "熄火后继续监测，异常情况留存记录。", metric: "停车监控" },
];

/** 共有娱乐能力（PageSpec S6，只写一遍） */
export const sharedFeatures: readonly {
  icon: string;
  title: string;
  description: string;
}[] = [
  { icon: "cast", title: "手机投屏", description: "无线投屏 + HDMI 输入，手机、平板内容上大屏。" },
  { icon: "wifi", title: "在线娱乐", description: "4G / 双频 Wi-Fi 联网，在线应用与本地媒体切换。" },
  { icon: "volume", title: "声音输出", description: "蓝牙音频、内置双喇叭，可连车载音响。" },
] as const;

/** 吸顶式规格（三组，PageSpec S8 Tab 1） */
export const roofSpecGroups: readonly CarTvSpecGroup[] = [
  {
    title: "显示与系统",
    items: [
      { label: "屏幕尺寸", value: "15.6 / 17.3 / 18.5 英寸（按车型匹配）" },
      { label: "分辨率", value: "1920 × 1080" },
      { label: "操作系统", value: "Android 14.0 / 13.0" },
      { label: "处理器", value: "车规级八核处理器" },
      { label: "运行与存储", value: "2+16 / 2+32 / 4+64 / 8+128 GB（按型号）" },
    ],
  },
  {
    title: "连接与声音",
    items: [
      { label: "联网方式", value: "4G ＋ Wi-Fi（首月赠不限速流量体验）" },
      { label: "投屏方式", value: "HDMI ＋ 手机无线投屏" },
      { label: "音频输出", value: "双扬声器＋蓝牙音频输出" },
      { label: "外接接口", value: "USB × 2、HDMI × 1" },
    ],
  },
  {
    title: "结构与控制",
    items: [
      { label: "开合方式", value: "微型超薄双电机，低噪耐用" },
      { label: "安装要求", value: "顶棚空间充足，不挡遮阳帘轨迹" },
      { label: "操控方式", value: "触控、遥控与语音" },
      { label: "锁车联动", value: "支持锁车自动关屏（按车型协议）" },
    ],
  },
] as const;

/** 座椅背装式规格（PageSpec S8 Tab 2） */
export const seatbackSpecGroups: readonly CarTvSpecGroup[] = [
  {
    title: "显示与系统",
    items: [
      { label: "屏幕尺寸", value: "13.3 英寸" },
      { label: "分辨率", value: "1920 × 1080（4K 视频播放）" },
      { label: "操作系统", value: "Android 13.0 优化车载系统" },
      { label: "处理器", value: "车规级八核处理器" },
      { label: "运行与存储", value: "4 GB ＋ 64 GB" },
    ],
  },
  {
    title: "连接与声音",
    items: [
      { label: "联网方式", value: "双频 Wi-Fi ＋ 蓝牙音频" },
      { label: "投屏方式", value: "无线投屏" },
      { label: "音频输出", value: "内置双喇叭" },
      { label: "外接接口", value: "HDMI、3.5mm 耳机、USB、Type-C" },
    ],
  },
  {
    title: "安装",
    items: [
      { label: "取电方式", value: "原车后排 LINK 接口 / 隐藏走线" },
      { label: "支架方式", value: "专用支架，1 秒安装即插即用" },
      { label: "座椅要求", value: "头枕可拆卸（通用款）/ 原厂 LINK 接口（专车款）" },
    ],
  },
] as const;

/** 流媒体后视镜规格（PageSpec S8 Tab 3） */
export const rearviewSpecGroups: readonly CarTvSpecGroup[] = [
  {
    title: "显示与记录",
    items: [
      { label: "屏幕", value: "替换原车后视镜，1080P 全屏显示" },
      { label: "录制", value: "前后双录，60 帧流畅（数字款）" },
      { label: "夜视", value: "自动感光，抑制强光防眩目" },
    ],
  },
  {
    title: "功能",
    items: [
      { label: "停车监控", value: "熄火后持续监测，异常留存" },
      { label: "亮度调节", value: "自动感光，屏幕亮度随环境调节" },
    ],
  },
  {
    title: "安装",
    items: [
      { label: "安装方式", value: "替换原车后视（非捆绑式）" },
      { label: "线材", value: "专车专用线材" },
      { label: "车型", value: "按车型专用，具体适配到店确认" },
    ],
  },
] as const;

/** 适装表接入（数据源：specs/active/rear-entertainment-fitment.md） */
export const rearFitment: Record<
  RearDisplayType,
  { summary: string; models: readonly string[] }
> = {
  roof: {
    summary: "24 组车型专用适配，按天窗形式（单天窗 / 双天窗 / 全景天窗 / 横梁）区分，多数车型全系可装。",
    models: [
      "赛那 / 格瑞维亚",
      "奥德赛 / 艾力绅",
      "传祺 M8 宗师 / 新大师 / E9 / E8",
      "腾势 D9 / 二代 D9 / N9 / N8L",
      "比亚迪夏",
      "别克 GL8 陆尊 / 陆尚",
      "理想 L6 / L7 / L8 / i6（含焕新版）",
      "问界 M6 / M7 / M8 / M9",
      "方程豹钛 7",
      "福特探险者",
      "全景天窗系列 / 横梁系列",
    ],
  },
  seatback: {
    summary: "原车后排带 LINK 接口的车型专用，另有可拆卸头枕的通用款。",
    models: [
      "小米 SU7 / YU7",
      "比亚迪（方程豹钛 7 / 豹 8 / 豹 5 / 海豹 08）",
      "丰田铂智 7",
      "腾势（26 款 D9 / N9 闪充 / Z9GT 闪充）",
      "宝马（7 系 / 5 系 / X7 / X5）",
      "鸿蒙智行（问界 M7/M8/M9、享界 S9/S9T、智界 R7/新 S7、尊界 S800、尚界 H5/Z7T）",
      "通用款（可拆卸头枕）",
    ],
  },
  rearview: {
    summary: "专车专用替换式安装，覆盖主流 MPV 与 SUV。",
    models: [
      "赛那 / 格瑞维亚",
      "奥德赛 / 艾力绅",
      "传祺 M8 宗师 / 大师 / E8 / E9",
      "腾势 D9",
      "理想 L6 / L7 / L8",
      "问界 M7 / M9",
    ],
  },
};

/** 装车实拍图（来源：适装表 G 列实拍，已去 logo 裁剪） */
export const fitmentGallery: readonly {
  src: string;
  label: string;
  width: number;
  height: number;
}[] = [
  { src: "/images/product/car-tv/fitment/roof-sienna.webp", label: "赛那 / 格瑞维亚 · 吸顶装车", width: 800, height: 600 },
  { src: "/images/product/car-tv/fitment/roof-d9.webp", label: "腾势 D9 · 吸顶装车", width: 800, height: 600 },
  { src: "/images/product/car-tv/fitment/roof-night.webp", label: "吸顶屏展开 · 米色顶棚", width: 800, height: 600 },
  { src: "/images/product/car-tv/fitment/roof-gray.webp", label: "浅灰内饰 · 吸顶展开", width: 800, height: 599 },
  { src: "/images/product/car-tv/fitment/seatback-brown.webp", label: "座椅背装 · 棕色内饰双屏", width: 800, height: 600 },
  { src: "/images/product/car-tv/fitment/seatback-beige.webp", label: "座椅背装 · 米色内饰双屏", width: 800, height: 600 },
] as const;

/** FAQ（PageSpec S8，6 条） */
export const carTvFaqs = [
  {
    question: "吸顶式、座椅背装式、流媒体后视镜，我该怎么选？",
    answer:
      "想全车一起看、常跑长途的选吸顶式；后排两个人各看各的选座椅背装式；觉得原车后视镜晚上看不清的选流媒体后视镜。拿不准就把车型和年款告诉我们，先帮你判断。",
  },
  {
    question: "哪些车型可以安装？",
    answer:
      "吸顶式更适合顶棚空间充足的 SUV 与 MPV，多数车型全系可装，带天窗的需确认天窗与遮阳帘轨迹；座椅背装式需要原车后排带 LINK 接口，或头枕可拆卸；流媒体后视镜按车型专用。施工前会逐项检查确认。",
  },
  {
    question: "吸顶式安装后会影响天窗或遮阳帘吗？",
    answer:
      "需要结合原车顶棚布局判断。方案会优先避开遮阳帘运行轨迹和原车功能区域，能否实现以现场检查结果为准。",
  },
  {
    question: "座椅背装式需要拆顶棚吗？",
    answer:
      "不用。后排带 LINK 接口的车型直接接口取电，走隐藏线；头枕款式先确认头枕是否可拆卸。",
  },
  {
    question: "可以控制原车空调、座椅和音乐吗？",
    answer:
      "部分车型和协议支持原车功能协同，实际可用项目因车型、年款与车机协议不同而变化，安装前会逐项确认。",
  },
  {
    question: "手机内容怎样投到大屏？",
    answer:
      "产品支持手机无线投屏和 HDMI 输入。具体连接方式会受手机系统、应用版权限制与设备兼容性影响。",
  },
] as const;
