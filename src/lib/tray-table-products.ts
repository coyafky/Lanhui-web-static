export type TrayTableProduct = {
  filename: string;
  title: string;
  alt: string;
  needsReview?: boolean;
};

const PRODUCTS: readonly [string, string, boolean][] = [
  ["丰田-小桌板.webp", "丰田", false], ["丰田海狮桌板.webp", "丰田海狮", false],
  ["乐道L60小桌板.webp", "乐道 L60", false], ["享界G9小桌板.webp", "享界 G9", false],
  ["传奇ES8小桌板.webp", "传奇 ES8", false], ["蔚来ES6:EC6小桌板.webp", "蔚来 ES6 / EC6", false],
  ["蔚来ES7小桌板.webp", "蔚来 ES7", false], ["蔚来ES8桌板.webp", "蔚来 ES8", false],
  ["蔚来原厂款式小桌板.webp", "蔚来原厂款式", false], ["别克至jing小桌板.webp", "别克至jing", true],
  ["大众9X桌板.webp", "大众 9X", false], ["大众IDX9X桌板.webp", "大众 ID.X 9X", false],
  ["大众揽巡小桌板.webp", "大众揽巡", false], ["小米澎程N70-N90小桌板.webp", "小米澎程 N70–N90", false],
  ["方程豹8桌板.webp", "方程豹 8", false], ["极氪7X桌板.webp", "极氪 7X", false],
  ["极氪9X桌板.webp", "极氪 9X", false], ["极石汽车桌板.webp", "极石汽车", false],
  ["比亚迪唐小桌板.webp", "比亚迪唐", false], ["比亚迪宋Utral小桌板.webp", "比亚迪宋 Utral", true],
  ["汉兰达路放小桌板.webp", "汉兰达路放", false], ["特斯拉modelY-L小桌板.webp", "特斯拉 Model Y / L", false],
  ["理想L6小桌板.webp", "理想 L6", false], ["理想L6桌板.webp", "理想 L6（另一款式）", false],
  ["理想L7桌板.webp", "理想 L7", false], ["理想L8桌板.webp", "理想 L8", false],
  ["理想L9桌板.webp", "理想 L9", false], ["问界M6桌板.webp", "问界 M6", false],
  ["问界M8桌板.webp", "问界 M8", false], ["问界M9小桌板.webp", "问界 M9", false],
  ["魏牌蓝山桌板.webp", "魏牌蓝山", false],
];

export const trayTableProducts: readonly TrayTableProduct[] = PRODUCTS.map(([filename, title, needsReview]) => ({
  filename, title, needsReview, alt: `蓝辉轻改${title}小桌板展示图`,
}));
export const trayTableImagePath = (filename: string) => `/images/products/tray-table/${filename}`;
export const trayTableScenarios = [
  ["临时办公", "给笔记本、平板和文件一个稳定的临时工作台面。"],
  ["途中用餐", "餐盒和水杯有更固定的放置区域，取放更顺手。"],
  ["带娃出行", "绘画、阅读和小零食都能在后排找到操作空间。"],
  ["收起不占用", "不用时收回靠背位置，具体贴合度按车型实车确认。"],
] as const;
export const trayTableUsageSteps = [
  ["01", "收起", "先确认桌板处于收纳位置，检查周围座椅和饰板间隙。"],
  ["02", "展开", "按现场安装结构打开桌板，确认展开路径没有干涉。"],
  ["03", "使用", "根据桌面高度和边缘空间放置物品，实际承载边界以到店说明为准。"],
  ["04", "收回", "使用后清空桌面并收回，检查靠背角度和座椅调节是否正常。"],
] as const;
export const trayTableChecklist = [
  "前排座椅靠背结构与可安装位置。", "座椅前后移动、靠背调节和后排乘坐空间是否受影响。",
  "桌板展开后的水平状态、边缘空间和使用高度。", "杯架、限位结构、折叠/收纳机构是否匹配。",
  "安装固定方式、内饰接触面保护和现场施工边界。", "车型年款、座椅配置及其他后装件造成的适配差异。",
] as const;
export const trayTableFaqs = [
  ["小桌板适合哪些场景？", "适合移动办公、途中用餐、带娃阅读、后排娱乐和临时置物。具体使用体验要结合车型、座椅结构和实际展开空间确认。"],
  ["所有车型都能安装吗？", "不能直接按全车型通用理解。需要核对车型年款、前排座椅靠背结构、座椅配置和现场可安装位置。"],
  ["会不会影响前排座椅调节？", "安装前后会检查座椅前后移动、靠背调节和后排空间；不同车型和调节范围可能有差异，以实车评估结果为准。"],
  ["不使用时能否收起？", "常见方案支持收起贴合靠背，但收纳方式和贴合度取决于车型与安装结构，到店时会一并确认。"],
  ["能否放笔记本和水杯？", "页面图片用于展示同类方案。桌面空间、杯架位置和实际使用边界需要按车型与方案现场确认，不预设承重或尺寸参数。"],
  ["到店前需要提供哪些车型信息？", "建议提供品牌、具体车型、年款、座椅配置和使用场景；如有其他后装件，也请一并说明，方便提前判断适配边界。"],
] as const;
