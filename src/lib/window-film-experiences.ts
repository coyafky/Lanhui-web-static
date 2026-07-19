/**
 * 窗膜页 5 项体验 + 4 项施工证据 + 场景选择 + FAQ 数据
 *
 * 集中管理便于非开发者编辑文案，避免散落在组件中。
 */

export type WindowFilmExperience = {
  title: string;
  oneLiner: string;
  expanded: string;
};

export const windowFilmExperiences: WindowFilmExperience[] = [
  {
    title: "隔热更舒适",
    oneLiner: "减少暴晒后的闷热感与空调负担",
    expanded:
      "高效隔热膜层降低阳光热量进入车内，夏天上车不再像进烤箱，空调降温更快、负担更轻。",
  },
  {
    title: "视野更清晰",
    oneLiner: "兼顾白天、夜间与雨天驾驶视野",
    expanded:
      "合理的前挡透光率保证清晰视线，同时减少强光、逆光带来的眩目干扰，雨天夜间同样安全。",
  },
  {
    title: "信号更稳定",
    oneLiner: "按车型天线和设备选择适合膜材",
    expanded:
      "针对新能源车天线位置与车载设备，推荐不影响信号传输的膜材方案，导航、ETC、手机信号不受影响。",
  },
  {
    title: "隐私不压暗",
    oneLiner: "外部更难直视车内，车内向外依旧清晰",
    expanded:
      "侧后挡隐私膜提供外部遮蔽效果，但从车内向外看仍然清晰通透，不会有\u201C隧道感\u201D。",
  },
  {
    title: "防晒更持久",
    oneLiner: "减少紫外线进入，保护乘员与内饰",
    expanded:
      "99%+ 紫外线阻隔，减少皮肤长期暴晒伤害，延缓内饰褪色老化，尤其适合有小孩的家庭。",
  },
];

export type WindowFilmScenario = {
  slug: string;
  label: string;
  packageSlug: string;
  packageName: string;
  description: string;
};

export const windowFilmScenarios: WindowFilmScenario[] = [
  {
    slug: "daily-commute",
    label: "通勤加强",
    packageSlug: "guyu",
    packageName: "谷雨套餐",
    description:
      "前挡金属膜 + 侧后陶瓷膜，兼顾每日驾驶清晰视线与防晒，适合通勤时间较长的车主。",
  },
  {
    slug: "family-rear",
    label: "家庭高隔热",
    packageSlug: "xiaoman",
    packageName: "小满套餐",
    description:
      "Z70 前挡 + K15 侧后挡，后排儿童和老人更舒适，全车隔热与安全防护一步到位。",
  },
  {
    slug: "ev-large-glass",
    label: "全景天幕适配",
    packageSlug: "mangzhong",
    packageName: "芒种套餐",
    description:
      "Z70 + Z20 组合，针对新能源车大面积玻璃和天幕提供系统化隔热方案。",
  },
];

export type WindowFilmConstructionProof = {
  title: string;
  description: string;
  imageLabel: string;
};

export const windowFilmConstructionProofs: WindowFilmConstructionProof[] = [
  {
    title: "正品现场核验",
    description:
      "品牌、系列、型号，施工前现场核验，确保所贴即所选。不混用、不降级、不以次充好。",
    imageLabel: "膜卷 / 产品标签细节",
  },
  {
    title: "无尘空间施工",
    description:
      "专用施工空间、降尘处理、玻璃清洁与刮水流程，保障贴合品质。不是路边露天作业。",
    imageLabel: "施工空间 / 降尘场景",
  },
  {
    title: "新能源车型适配",
    description:
      "无框车门、大曲面玻璃、复杂门板精细适配，不是通用裁切方案，专车专用更贴合。",
    imageLabel: "车型边角施工细节",
  },
  {
    title: "内饰遮蔽保护",
    description:
      "仪表台、门板、座椅全遮蔽，防止施工液渗入电子件与内饰。贴膜不伤车。",
    imageLabel: "遮蔽保护场景",
  },
];

export type WindowFilmFaq = {
  question: string;
  answer: string;
};

export const windowFilmFaqs: WindowFilmFaq[] = [
  {
    question: "窗膜会影响年检吗？",
    answer:
      "前挡可见光透光率符合国家标准即可通过年检。我们推荐的前挡膜参数均在合规范围内，侧后挡不影响年检。",
  },
  {
    question: "金属膜会影响 ETC / 手机信号吗？",
    answer:
      "我们会根据你的车型天线位置推荐适合的膜材方案。对于天线在挡风玻璃区域的车型，优先推荐陶瓷膜或信号友好型金属膜。",
  },
  {
    question: "贴完多久可以升降车窗？",
    answer:
      "建议施工后 3-5 天内不升降车窗，具体以施工完成后告知的养护时间为准。在此期间膜层水分蒸发、胶层固化后即可正常使用。",
  },
  {
    question: "前挡和侧后挡可以自由组合吗？",
    answer:
      "可以。套餐是经过验证的推荐搭配，但到店沟通后我们会根据你的车型、预算和用车场景给出个性化搭配建议。",
  },
];

/** 套餐名 → 定位标签映射（用于卡片副标题） */
export const PACKAGE_POSITIONING_LABELS: Record<string, string> = {
  chunfen: "入门清晰",
  guyu: "通勤加强",
  xiaoman: "家庭高隔热",
  mangzhong: "强综合隔热",
  bailu: "科技变色",
  wanghong: "个性风格",
  yangsheng: "健康舒适",
};

/** 3 个主推套餐 slug */
export const FEATURED_PACKAGE_SLUGS = ["guyu", "xiaoman", "mangzhong"] as const;
