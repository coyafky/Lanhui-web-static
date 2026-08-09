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
} as const;

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

export const carTvSpecGroups: readonly CarTvSpecGroup[] = [
  {
    title: "显示与系统",
    items: [
      { label: "显示屏", value: "18.5 英寸窄边框高清屏" },
      { label: "分辨率", value: "1920 × 1080" },
      { label: "操作系统", value: "Android 14.0" },
      { label: "处理器", value: "车规级八核处理器" },
      { label: "运行与存储", value: "4 GB ＋ 64 GB" },
    ],
  },
  {
    title: "连接与声音",
    items: [
      { label: "联网方式", value: "4G ＋ Wi-Fi" },
      { label: "投屏方式", value: "HDMI ＋ 手机无线投屏" },
      { label: "音频输出", value: "双扬声器＋蓝牙音频输出" },
      { label: "外接接口", value: "USB × 2、HDMI × 1" },
    ],
  },
  {
    title: "媒体与控制",
    items: [
      { label: "音频格式", value: "MP3、WAV、APE、FLAC 等" },
      { label: "视频能力", value: "支持 4K H.265 解码" },
      { label: "视频格式", value: "FLV、MOV、AVI、MKV、MP4 等" },
      { label: "开关屏", value: "遥控器与实体按键" },
      { label: "操控方式", value: "触控、遥控与语音" },
      { label: "锁车联动", value: "支持锁车自动关屏" },
    ],
  },
] as const;

export const carTvFaqs = [
  {
    question: "哪些车型可以安装车载电视？",
    answer:
      "更适合顶棚空间充足的 SUV 与 MPV。施工前需要检查车型、年款、顶棚结构、天窗与遮阳帘活动范围，再确认支架和布面方案。",
  },
  {
    question: "安装后会影响天窗或遮阳帘吗？",
    answer:
      "需要结合原车顶棚布局判断。方案会优先避开遮阳帘运行轨迹和原车功能区域，能否实现以现场检查结果为准。",
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
