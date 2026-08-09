/** 窗膜页施工说明、FAQ 与套餐定位文案。 */

export type WindowFilmConstructionProof = {
  title: string;
  description: string;
};

export const windowFilmConstructionProofs: WindowFilmConstructionProof[] = [
  {
    title: "正品现场核验",
    description:
      "品牌、系列、型号，施工前现场核验，确保所贴即所选。不混用、不降级、不以次充好。",
  },
  {
    title: "无尘空间施工",
    description:
      "专用施工空间、降尘处理、玻璃清洁与刮水流程，保障贴合品质。不是路边露天作业。",
  },
  {
    title: "新能源车型适配",
    description:
      "无框车门、大曲面玻璃、复杂门板精细适配，不是通用裁切方案，专车专用更贴合。",
  },
  {
    title: "内饰遮蔽保护",
    description:
      "仪表台、门板、座椅全遮蔽，防止施工液渗入电子件与内饰。贴膜不伤车。",
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
  chunfen: "基础实用",
  guyu: "性价比高",
  xiaoman: "隔热优选",
  mangzhong: "全车高隔热",
  bailu: "前挡变色",
  wanghong: "个性风格",
  yangsheng: "家庭舒适",
};
