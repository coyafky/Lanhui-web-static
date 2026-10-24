/**
 * 地板适配表 → 成品图映射（自动生成，勿手改）
 *
 * 生成：`node scripts/import-flooring-images.mjs --apply`
 * 源：`供应商产品资料/地板成品图_webp/`（供应商营销成品图，1254²）
 * 产物：`public/images/products/flooring/poster/<slug>.webp`（长边 768，webp q82）
 */

export const FLOORING_POSTER_DIR = "/images/products/flooring/poster";

/** 车型名（与 flooringFitmentEntries[].model 逐字一致）→ 成品图路径 */
export const flooringFitmentPosterByModel: Record<string, string> = {
  "埃尔法 30 系": `${FLOORING_POSTER_DIR}/alphard-30.webp`,
  "埃尔法 40 系": `${FLOORING_POSTER_DIR}/alphard-40.webp`,
  "奥德赛 / 艾力绅": `${FLOORING_POSTER_DIR}/honda-odyssey.webp`,
  "奔驰·威霆 V260": `${FLOORING_POSTER_DIR}/benz-v260.webp`,
  "奔驰·威霆 V300": `${FLOORING_POSTER_DIR}/benz-v300.webp`,
  "比亚迪·夏": `${FLOORING_POSTER_DIR}/byd-xia.webp`,
  "别克至境世家": `${FLOORING_POSTER_DIR}/buick-century.webp`,
  "传祺 E8": `${FLOORING_POSTER_DIR}/gac-e8.webp`,
  "传祺 E9": `${FLOORING_POSTER_DIR}/gac-e9.webp`,
  "传祺 M8": `${FLOORING_POSTER_DIR}/gac-m8.webp`,
  "高山 7": `${FLOORING_POSTER_DIR}/gaoshan-7.webp`,
  "高山 8": `${FLOORING_POSTER_DIR}/gaoshan-8.webp`,
  "高山 9": `${FLOORING_POSTER_DIR}/gaoshan-9.webp`,
  "极氪 009": `${FLOORING_POSTER_DIR}/zeekr-009.webp`,
  "极氪 8X": `${FLOORING_POSTER_DIR}/zeekr-8x.webp`,
  "极氪 9X": `${FLOORING_POSTER_DIR}/zeekr-9x.webp`,
  "岚图·梦想家": `${FLOORING_POSTER_DIR}/voyah-dreamer.webp`,
  "岚图泰山": `${FLOORING_POSTER_DIR}/voyah-taishan.webp`,
  "乐道 L90": `${FLOORING_POSTER_DIR}/onvo-l90.webp`,
  "理想 i8": `${FLOORING_POSTER_DIR}/li-i8.webp`,
  "理想 L8": `${FLOORING_POSTER_DIR}/li-l8.webp`,
  "理想 L9": `${FLOORING_POSTER_DIR}/li-l9.webp`,
  "理想 MEGA": `${FLOORING_POSTER_DIR}/li-mega.webp`,
  "领克 900": `${FLOORING_POSTER_DIR}/lynkco-900.webp`,
  "塞纳 / 格瑞维亚": `${FLOORING_POSTER_DIR}/sienna-granvia.webp`,
  "腾势 D9": `${FLOORING_POSTER_DIR}/denza-d9.webp`,
  "腾势 N8L": `${FLOORING_POSTER_DIR}/denza-n8l.webp`,
  "腾势 N9": `${FLOORING_POSTER_DIR}/denza-n9.webp`,
  "蔚来 ES8": `${FLOORING_POSTER_DIR}/nio-es8.webp`,
  "蔚来 ES9": `${FLOORING_POSTER_DIR}/nio-es9.webp`,
  "魏牌 V9X": `${FLOORING_POSTER_DIR}/wey-v9x.webp`,
  "问界 M7": `${FLOORING_POSTER_DIR}/wenjie-m7.webp`,
  "问界 M8": `${FLOORING_POSTER_DIR}/wenjie-m8.webp`,
  "问界 M9": `${FLOORING_POSTER_DIR}/wenjie-m9.webp`,
  "小鹏 GX": `${FLOORING_POSTER_DIR}/xpeng-gx.webp`,
  "小鹏 X9": `${FLOORING_POSTER_DIR}/xpeng-x9.webp`,
  "智界 V9": `${FLOORING_POSTER_DIR}/zhijie-v9.webp`,
  "GL8（陆尚/陆尊）": `${FLOORING_POSTER_DIR}/buick-gl8.webp`,
};
