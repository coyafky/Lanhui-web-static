/** 窗膜页施工说明、FAQ 与套餐定位文案。 */

export type WindowFilmConstructionProof = {
  title: string;
  description: string;
};

export const windowFilmConstructionProofs: WindowFilmConstructionProof[] = [
  {
    title: "正品现场核验",
    description:
      "施工前与车主核对品牌、系列和型号，并记录实际使用的膜材信息，交付时可再次核对。",
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
      "施工前遮蔽仪表台、门板和座椅，减少施工液接触电子件与内饰的风险；交付前检查车内状态。",
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
      "前挡与侧后挡的透光、视野要求应按现行标准及当地检验要求核对。页面资料使用的「可见光阻隔率」不能直接当作透光率，施工前需结合实车玻璃与膜材的检测数据确认。",
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
