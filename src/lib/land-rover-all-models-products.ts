export type LandRoverProjectKey =
  | "skid-plate"
  | "soft-mat"
  | "trunk-mat"
  | "full-trunk";

export interface LandRoverProject {
  key: LandRoverProjectKey;
  name: string;
  tagline: string;
  description: string;
  coverage: string;
  examples: string;
}

export const landRoverProjects: LandRoverProject[] = [
  {
    key: "skid-plate",
    name: "底盘护板",
    tagline: "护住发动机油箱电池，越野托底不心疼",
    description: "专车开模的底盘护板，覆盖发动机、分动箱、油箱、电池等关键部位，铝镁合金材质轻、耐腐蚀，防托底磕碰与石子飞溅；常跑砂石路、工地、烂路多一层保护。",
    coverage: "覆盖7款车型",
    examples: "发现3/4/5 / 卫士90/110/130 / 神行者8",
  },
  {
    key: "soft-mat",
    name: "360软包脚垫",
    tagline: "全包围脚垫，边角贴合原车绒面与门槛，不翘边",
    description: "全包围汽车脚垫，边角塞进原车绒面与门槛缝隙，贴合不翘边；防尘防水、易清洁，专车开模，油门、刹车位置精准避让，不挡踏板。皮革、丝圈可选。",
    coverage: "覆盖11款车型",
    examples: "揽胜系列 / 发现系列 / 卫士 / 神行者2",
  },
  {
    key: "trunk-mat",
    name: "平面尾箱垫",
    tagline: "后备箱平面垫，防污防刮、耐磨损",
    description: "后备箱平面垫，四边贴合后备箱轮廓，防污防刮、耐磨损、易打理；专车专用，原车行李锚点与开口位保留。",
    coverage: "覆盖10款车型",
    examples: "行政版 / 运动版 / 发现5 / 卫士",
  },
  {
    key: "full-trunk",
    name: "360全包尾箱",
    tagline: "后备箱立体包围垫，防杂物滚落缝隙",
    description: "后备箱立体包围垫，侧面、后壁全覆盖，防污渍渗入绒面、防杂物滚落缝隙；专车开模，遮挡部位按原车结构预留。",
    coverage: "覆盖10款车型",
    examples: "行政版 / 运动版 / 发现5 / 卫士",
  },
];

export interface LandRoverFitmentRow {
  version: string;
  years: string;
  note: string;
}

export interface LandRoverFitmentEntry {
  slug: string;
  name: string;
  group: string;
  rows: { projectName: string; rows: LandRoverFitmentRow[] }[];
}

export const landRoverFitmentEntries: LandRoverFitmentEntry[] = [
  {
    slug: "range-rover-lwb",
    name: "路虎揽胜行政版",
    group: "range-rover",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "标准（油门坐地式，二排不带出风口）", years: "07款--12款", note: "4门5座；片套3片" },
          { version: "四座（二排带出风口）", years: "13款--17款", note: "4门4座；片套4片" },
          { version: "标准（二排不带出风口）", years: "13款--17款", note: "4门5座；片套3片" },
          { version: "加长版四座（二排带出风口）", years: "14款--17款", note: "4门4座；片套4片" },
          { version: "加长版（二排带出风口）", years: "13款--17款 / 18款--22款", note: "4门5座；片套3片" },
          { version: "加长版（二排不带出风口）", years: "13款--17款 / 18款--22款", note: "4门5座；片套3片" },
          { version: "标准（二排不带出风口）", years: "18款--22款", note: "4门5座；片套3片" },
          { version: "加长版4座", years: "23款--", note: "4门4座；片套4片；二排座椅侧边高度17厘米" },
          { version: "不加长版（后排无出风口，扶手箱不塞边）", years: "23款--", note: "4门5座；片套3片；二排外侧高度13CM" },
          { version: "不加长版 削边工艺（扶手箱塞边）", years: "23款--", note: "4门5座；片套3片" },
          { version: "加长版（二排带出风口，无腿拖，扶手箱不塞边）", years: "23款--", note: "4门5座；片套3片" },
          { version: "加长版 削边工艺（扶手箱塞边）", years: "23款--", note: "4门5座；片套3片" },
          { version: "加长版（二排分体，带出风口，带腿托）", years: "23款--", note: "4门5座；片套3片；侧边高度17厘米" },
          { version: "行政加长 7座做5座", years: "23款--", note: "5门7座；片套4片；二排过桥无电源插座，扶手箱不塞边" },
          { version: "行政加长 7座做7座", years: "23款--", note: "5门7座；片套4片；二排过桥无电源插座，扶手箱不塞边" },
          { version: "行政加长 7座做5座 削边工艺", years: "23款--", note: "5门7座；片套4片；扶手箱塞边" },
          { version: "行政加长 7座做7座 削边工艺", years: "23款--", note: "5门7座；片套4片；扶手箱塞边" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准", years: "08款--12款", note: "4门5座" },
          { version: "标准", years: "13款--17款", note: "4门5座" },
          { version: "标准", years: "18款-22款", note: "4门5座" },
          { version: "加长", years: "14款--17款", note: "4门4座 / 4门5座" },
          { version: "加长版", years: "18款-22款", note: "4门5座；部分长度108CM" },
          { version: "加长版4座", years: "23款--", note: "4门4座" },
          { version: "不加长版", years: "23款--", note: "4门5座" },
          { version: "加长版（尾箱前面无挡板，靠门边无滑道）", years: "23款--", note: "4门5座" },
          { version: "加长版（尾箱前面有挡板）", years: "23款--", note: "4门5座" },
          { version: "行政加长 7座做5座", years: "23款--", note: "5门7座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "标准（右侧带倒背机关口）", years: "13款--17款", note: "4门5座；片套8片" },
          { version: "标准（右侧不带倒背机关口）", years: "13款--17款", note: "4门5座；片套8片" },
          { version: "加长版（左侧无电源孔，右侧带倒背机关）", years: "18款--22款", note: "4门5座；片套8片" },
          { version: "加长版（左侧无电源孔，右侧无倒背机关）", years: "18款--22款", note: "4门5座；片套8片" },
          { version: "加长版（右侧倒背机关同长）", years: "18款--22款", note: "4门5座；片套8片" },
          { version: "不加长版", years: "23款--", note: "4门5座" },
          { version: "加长版（尾箱前无挡板，左边无凹位有出风口）", years: "23款--", note: "4门5座" },
          { version: "加长版（尾箱前有挡板）", years: "23款--", note: "4门5座" },
          { version: "行政加长（靠门边有滑道）", years: "23款--", note: "5门7座" },
          { version: "行政加长（靠门边无滑道）", years: "23款--", note: "5门7座" },
        ],
      },
    ],
  },
  {
    slug: "range-rover-sport",
    name: "路虎揽胜运动版",
    group: "range-rover",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "主驾不带电路盒", years: "08款--13款", note: "4门5座；片套3片" },
          { version: "主驾带电路盒", years: "08款--13款", note: "4门5座；片套3片" },
          { version: "7座做5座", years: "14款", note: "5门7座；片套3片" },
          { version: "7座做7座", years: "14款", note: "5门7座；片套4片" },
          { version: "7座做7座（港版右呔）", years: "14款--18款", note: "5门7座；片套4片" },
          { version: "标准（插电混动）", years: "14款--18款", note: "4门5座；片套3片" },
          { version: "标准（插电混动）", years: "18款--22款", note: "4门5座；片套3片" },
          { version: "标准（扶手箱不塞边）", years: "23款--", note: "4门5座；片套3片" },
          { version: "削边工艺（扶手箱塞边）", years: "23款--", note: "4门5座；片套3片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准", years: "08款--13款", note: "4门5座" },
          { version: "7座做5座", years: "14款", note: "5门7座" },
          { version: "7座做7座", years: "14款", note: "5门7座" },
          { version: "标准", years: "14款--18款", note: "4门5座" },
          { version: "标准", years: "18款--", note: "4门5座" },
          { version: "新能源", years: "20款--", note: "4门5座" },
          { version: "标准", years: "23款--", note: "4门5座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "标准", years: "08款--13款", note: "4门5座；片套8片" },
          { version: "标准（背板分三块）", years: "14款--18款", note: "4门5座；片套6片" },
          { version: "标准（背靠两片）", years: "14款--18款", note: "4门5座；片套5片" },
          { version: "标准（左侧无出风口）", years: "18款--22款", note: "4门5座；片套6片；背板分三块" },
          { version: "标准（左侧带出风口）", years: "20款--22款", note: "4门5座" },
          { version: "新能源", years: "20款--22款", note: "4门5座" },
          { version: "标准（左侧不带出风口）", years: "23款--", note: "4门5座" },
        ],
      },
    ],
  },
  {
    slug: "velar",
    name: "路虎揽胜星脉",
    group: "range-rover",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "标准（主驾休息踏板宽8厘米）", years: "17款--20款", note: "4门5座；片套3片" },
          { version: "标准（主驾休息踏板宽11厘米）", years: "21款--", note: "4门5座；片套3片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准（左侧无网兜）", years: "17款--20款", note: "5门5座" },
          { version: "标准（左侧有网兜）", years: "21款--", note: "4门5座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "标准（21款不同）", years: "17款--20款", note: "4门5座；片套7片" },
          { version: "标准", years: "21款--", note: "4门5座" },
        ],
      },
    ],
  },
  {
    slug: "evoque",
    name: "路虎揽胜极光",
    group: "range-rover",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "标准（副驾带鼓包）", years: "11款--18款", note: "4门5座；片套3片" },
          { version: "标准（副驾带鼓包）", years: "15款--19款", note: "4门5座；片套3片" },
          { version: "标准（副驾不带鼓包）", years: "15款--19款", note: "4门5座；片套3片" },
          { version: "标准", years: "20款--", note: "4门5座；片套3片" },
          { version: "2门4座", years: "11款--16款", note: "片套3片" },
          { version: "敞篷", years: "16款--", note: "2门4座；片套3片" },
          { version: "极光L（插电混动）", years: "21款--", note: "4门5座；片套3片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准", years: "11款--18款", note: "4门5座" },
          { version: "标准", years: "15款--19款", note: "4门5座" },
          { version: "标准", years: "20款--", note: "4门5座" },
          { version: "敞篷", years: "16款--", note: "2门4座" },
          { version: "极光L", years: "21款--", note: "4门5座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "标准", years: "20款--", note: "4门5座；片套7片" },
          { version: "极光L（左侧带拉带）", years: "21款--", note: "4门5座" },
          { version: "极光L（左侧无拉带）", years: "21款--", note: "4门5座" },
        ],
      },
    ],
  },
  {
    slug: "discovery-5",
    name: "路虎发现5",
    group: "discovery",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "铝镁合金", years: "通用（原表未标年款）", note: "保护位置：底盘护板（原表未细分部位）；到店按实车确认" },
        ],
      },
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "7座做5座（二排不带氛围灯）", years: "17款--20款", note: "5门7座；片套3片" },
          { version: "7座做7座（二排不带出风口）", years: "17款--20款", note: "5门7座；片套4片" },
          { version: "7座做5座（二排带出风口）", years: "17款--20款", note: "5门7座；片套3片" },
          { version: "7座做7座（二排带出风口）", years: "17款--20款", note: "5门7座；片套4片" },
          { version: "7座做7座（二排不带出风口）", years: "17款--20款", note: "5门7座；片套4片" },
          { version: "7座做5座 高绒布（二排不带氛围灯）", years: "21款--", note: "5门7座；片套3片" },
          { version: "7座做7座 高绒布（二排不带出风口）", years: "21款--", note: "5门7座；片套4片" },
          { version: "7座做5座 高绒布（二排带出风口）", years: "21款--", note: "5门7座；片套3片" },
          { version: "7座做7座 高绒布（二排带出风口）", years: "21款--", note: "5门7座；片套4片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "7座做5座", years: "17款--", note: "5门7座" },
          { version: "7座做7座", years: "17款--", note: "5门7座" },
          { version: "7座做5座（左侧带凹槽，无出风口）", years: "21款--", note: "5门7座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "7座（左侧带出风口）", years: "17款--", note: "5门7座；片套10片" },
          { version: "7座（左侧带凹槽，无出风口）", years: "21款--", note: "5门7座；片套10片" },
        ],
      },
    ],
  },
  {
    slug: "discovery-4",
    name: "路虎发现4",
    group: "discovery",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "铝镁合金", years: "通用（原表未标年款）", note: "保护位置：底盘护板（原表未细分部位）；到店按实车确认" },
        ],
      },
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "7座做5座", years: "10款--17款", note: "5门7座；片套3片" },
          { version: "7座做7座", years: "10款--17款", note: "5门7座；片套4片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "7座做5座", years: "10款--17款", note: "5门7座" },
          { version: "7座做7座", years: "10款--17款", note: "5门7座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "7座", years: "10款--17款", note: "5门7座；片套13片" },
        ],
      },
    ],
  },
  {
    slug: "discovery-3",
    name: "路虎发现3",
    group: "discovery",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "铝镁合金", years: "通用（原表未标年款）", note: "保护位置：底盘护板（原表未细分部位）；到店按实车确认" },
        ],
      },
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "7座做5座", years: "05款--09款", note: "5门7座；片套3片" },
          { version: "7座做7座", years: "05款--09款", note: "5门7座；片套4片" },
        ],
      },
    ],
  },
  {
    slug: "discovery-sport",
    name: "路虎发现运动版",
    group: "discovery",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "5座", years: "20款--", note: "4门5座；片套3片" },
          { version: "7座做5座", years: "20款--", note: "5门7座；片套3片" },
          { version: "7座做7座", years: "20款--", note: "5门7座；片套4片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "5座", years: "20款--", note: "4门5座" },
          { version: "7座做5座（分体）", years: "20款--", note: "5门7座" },
          { version: "7座做7座", years: "20款--", note: "5门7座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "5座（不带侧包）", years: "20款--", note: "4门5座；片套3片" },
          { version: "7座", years: "20款--", note: "5门7座；片套9片" },
        ],
      },
    ],
  },
  {
    slug: "discovery-pure",
    name: "路虎发现神行",
    group: "discovery",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "5座（二排无滑道，不可移动）", years: "16款--", note: "4门5座；片套3片" },
          { version: "7座做5座", years: "16款--", note: "5门7座；片套3片" },
          { version: "7座做7座", years: "16款--", note: "5门7座；片套4片" },
          { version: "5座（二排有滑道，可移动）", years: "15款--", note: "4门5座；片套3片" },
          { version: "7座做5座", years: "15款--", note: "5门7座；片套3片" },
          { version: "7座做7座", years: "15款--", note: "5门7座；片套4片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "5座 / 7座做5座 / 7座做7座", years: "16款--", note: "5门7座" },
          { version: "5座 / 7座做5座 / 7座做7座", years: "15款--", note: "5门7座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "5座", years: "16款--", note: "4门5座" },
        ],
      },
    ],
  },
  {
    slug: "defender",
    name: "路虎卫士",
    group: "defender",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "标准（后排座椅分体，24款连体不同）", years: "20款--23款", note: "4门5座；片套3片" },
          { version: "2门5座（二排座椅连体）", years: "22款--", note: "片套3片" },
          { version: "8位做前5位", years: "23款--", note: "5门8座；片套4片" },
          { version: "8位做8位", years: "23款--", note: "5门8座；片套4片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准", years: "20款--", note: "4门5座" },
          { version: "2门5座", years: "22款--", note: "" },
          { version: "8位做8位", years: "23款--", note: "5门8座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "标准（不带侧包）", years: "20款--", note: "4门5座；片套4片" },
          { version: "2门4座（不带侧包）", years: "22款--", note: "" },
          { version: "8位做8位（不带侧包）", years: "23款--", note: "5门8座" },
        ],
      },
    ],
  },
  {
    slug: "defender-90",
    name: "路虎卫士90",
    group: "defender",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "2.0T / 3.0T", years: "通用（原表未标年款）", note: "保护位置：底盘护板（原表未细分部位）；到店按实车确认" },
        ],
      },
    ],
  },
  {
    slug: "defender-110",
    name: "路虎卫士110",
    group: "defender",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "2.0T / 3.0T", years: "通用（原表未标年款）", note: "保护位置：底盘护板（原表未细分部位）；到店按实车确认" },
        ],
      },
    ],
  },
  {
    slug: "defender-130",
    name: "路虎卫士130",
    group: "defender",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "2.0T / 3.0T", years: "通用（原表未标年款）", note: "保护位置：底盘护板（原表未细分部位）；到店按实车确认" },
        ],
      },
    ],
  },
  {
    slug: "freelander-2",
    name: "路虎神行者2",
    group: "freelander",
    rows: [
      {
        projectName: "360软包脚垫",
        rows: [
          { version: "副驾带电路盒", years: "07款--15款", note: "4门5座；片套3片" },
          { version: "副驾不带电路盒", years: "07款--15款", note: "4门5座；片套3片" },
        ],
      },
      {
        projectName: "平面尾箱垫",
        rows: [
          { version: "标准", years: "07款--15款", note: "4门5座" },
        ],
      },
      {
        projectName: "360全包尾箱",
        rows: [
          { version: "标准（不带侧包）", years: "07款--15款", note: "4门5座" },
        ],
      },
    ],
  },
  {
    slug: "freelander-8",
    name: "路虎神行者8",
    group: "freelander",
    rows: [
      {
        projectName: "底盘护板",
        rows: [
          { version: "铝镁合金", years: "通用（原表未标年款）", note: "保护位置：底盘护板（原表未细分部位）；到店按实车确认" },
        ],
      },
    ],
  },
];
