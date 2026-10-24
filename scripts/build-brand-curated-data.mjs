#!/usr/bin/env node
/**
 * 品牌「车系归并 + 项目矩阵」数据层生成器（当前用于 wey）
 *
 * 输入：`src/lib/fitment/<brand>.ts`（现有数据，勿改）
 * 输出：
 *   - `src/lib/<brand>-model-groups.ts` —— 车系卡（含变体备注、图、子页）
 *   - `src/lib/<brand>-project-matrix.ts` —— 项目 → 车系 → 年款/材质备注
 *
 * 规则（全部严格，任一步不唯一即拒绝写入）：
 *   1. 分组映射是**硬编码确定性字典**，不做模糊匹配
 *   2. 每个 fitment 里的 model 必须**恰好**被分到一组；漏一个或重复即拒写
 *   3. 图片只在 `src/lib/fitment/<brand>-fitment-images.ts` 登记过的才引用（不猜路径）
 *   4. 子页只在 `src/lib/product-routes.ts` 登记的才给入口
 *
 * 用法：
 *   node scripts/build-brand-curated-data.mjs wey            # dry-run
 *   node scripts/build-brand-curated-data.mjs wey --apply
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const PROJECT_ROOT = resolve(import.meta.dirname, "..");

/**
 * 分组口径。**每个品牌的依据不同，必须可核**：
 * - wey：源资料《车型适配库和文件/魏牌.md》「款式与版本」的门/座数（4门5座=SUV，5门6–7座=MPV）
 * - buick：源资料**没有可靠的车身形式字段**（只有零星「两厢/三厢」备件备注），
 *   且 5门7座 同时出现在 GL8(MPV) 与昂科雷(大型SUV) 上 → **门/座启发式在别克失效**。
 *   因此改按**车系名族**分组（完全确定、来自车型名本身，不推断车身形式）。
 */
const GROUP_PLANS = {
  chevrolet: {
    brandName: "雪佛兰",
    groups: [
      { key: "pickup", label: "皮卡系列" },
      { key: "suv", label: "SUV 系列" },
      { key: "sedan", label: "轿车系列" },
      { key: "compact", label: "小型家用" },
    ],
    overrides: {},
    merges: {},
    /** 沿用既有 `src/lib/chevrolet-model-groups.ts` 的权威分组（pickup / suv / sedan / compact）*/
    groupPatterns: [
      { key: "pickup", match: "^(索罗德|库罗德)" },
      { key: "suv", match: "^(创界|创酷|开拓者|科帕奇|探界者|沃兰多|巡领者)" },
      { key: "compact", match: "^(爱唯欧|赛欧|乐风|乐骋|斯帕可)" },
      { key: "sedan", match: "^(科鲁泽|科鲁兹|科沃兹|迈锐宝|景程|畅巡)" },
    ],
    projectNotes: {},
  },
  haobo: {
    brandName: "昊铂",
    groups: [
      { key: "sports", label: "超跑" },
      { key: "sedan", label: "轿跑与轿车" },
      { key: "suv", label: "SUV" },
      { key: "mpv", label: "MPV" },
    ],
    overrides: {},
    merges: {},
    /** 沿用既有 `src/lib/haobo-model-groups.ts` 的权威分组（sports / sedan / suv / mpv）*/
    groupPatterns: [
      { key: "sports", match: "^SSR" },
      { key: "sedan", match: "^(GT|HL)" },
      { key: "suv", match: "^(HT|A800)" },
      { key: "mpv", match: "^(S600)" },
    ],
    projectNotes: {},
  },
  shangjie: {
    brandName: "尚界",
    groups: [{ key: "all", label: "尚界全系" }],
    overrides: {},
    merges: {},
    /** 沿用既有 `src/lib/shangjie-model-groups.ts`（只有 all 一组）；用 mergeRules 把同车续航变体并回车系 */
    mergeRules: [
      { match: "^H5", label: "H5", group: "all", note: "含 200 续航 / 纯电 535 续航版本" },
      { match: "^Z7", label: "Z7", group: "all", note: "含 Z7T 与纯电 Max 732 续航版本" },
      { match: "^鸿蒙智行系列", label: "鸿蒙智行系列", group: "all", note: "原始资料中的通用条目" },
    ],
    projectNotes: {},
  },
  xiangjie: {
    brandName: "享界",
    groups: [{ key: "all", label: "享界全系" }],
    overrides: {},
    merges: {},
    /** 沿用既有 `src/lib/xiangjie-model-groups.ts`（只有 all 一组）*/
    mergeRules: [
      { match: "^S9", label: "S9", group: "all", note: "含 S9T / 增程 / 纯电版本" },
      { match: "^鸿蒙智行系列", label: "鸿蒙智行系列", group: "all", note: "原始资料中的通用条目" },
    ],
    projectNotes: {},
  },
  tesla: {
    brandName: "特斯拉",
    groups: [
      { key: "model-3-y", label: "Model 3 / Y 系列" },
      { key: "model-s-x", label: "Model S / X 系列" },
    ],
    overrides: {},
    merges: {},
    /** 无既有分组文件 → 按车型名分两组（Model 3/Y 与 Model S/X），完全确定 */
    mergeRules: [
      { match: "^Model\\s*3", label: "Model 3", group: "model-3-y", note: "含 3/Y 通用条目" },
      { match: "^Model\\s*Y", label: "Model Y", group: "model-3-y", note: "含 Y-L 长续航版本" },
      { match: "^Model\\s*S", label: "Model S", group: "model-s-x", note: "" },
      { match: "^Model\\s*X", label: "Model X", group: "model-s-x", note: "" },
    ],
    projectNotes: {},
  },
  voyah: {
    brandName: "岚图",
    groups: [
      { key: "mpv", label: "MPV" },
      { key: "suv", label: "SUV" },
      { key: "sedan", label: "轿车" },
    ],
    overrides: {},
    merges: {},
    /** 无既有分组文件 → 按车型定位分三组（梦想家 MPV / 泰山·FREE SUV / 追光·知音 轿车系）*/
    groupPatterns: [
      { key: "mpv", match: "^梦想家" },
      { key: "suv", match: "^(泰山|FREE)" },
      { key: "sedan", match: "^(追光|知音)" },
    ],
    projectNotes: {},
  },
  ledao: {
    brandName: "乐道",
    groups: [{ key: "all", label: "乐道全系" }],
    overrides: {}, merges: {},
    /** 3 行数据、3 个车系，无需归并；用 groupPatterns 保证覆盖 */
    groupPatterns: [{ key: "all", match: "^L" }],
    projectNotes: {},
  },
  xpeng: {
    brandName: "小鹏",
    groups: [
      { key: "sedan", label: "轿车" },
      { key: "suv", label: "SUV" },
      { key: "mpv", label: "MPV" },
    ],
    overrides: {}, merges: {},
    /** 10 行 10 车系，按车型代号直接分组（G/P=轿车，GX/X=SUV，X9=MPV）*/
    groupPatterns: [
      { key: "mpv", match: "^X9" },
      { key: "suv", match: "^(GX|G6|G7|G9|G3)" },
      { key: "sedan", match: "^(M03|P5|P7|L03)" },
    ],
    projectNotes: {},
  },
  honda: {
    brandName: "本田",
    groups: [
      { key: "sedan", label: "轿车" },
      { key: "suv", label: "SUV / 跨界" },
      { key: "mpv", label: "MPV" },
      { key: "nev", label: "新能源（e:NS / 绎乐 / M-NV）" },
    ],
    overrides: {}, merges: {},
    /** 34 行 34 车系，按车型名分组（中文名 + 代号双轨）*/
    groupPatterns: [
      { key: "mpv", match: "^(艾力绅|奥德赛)" },
      { key: "nev", match: "^(e:NS1|EA6|M-NV|X-NV|理念VE)" },
      { key: "suv", match: "^(缤智|冠道|皓影|CR-V|HR-V|UR-V|XR-V|ZR-V|歌诗图)" },
      { key: "sedan", match: "^(飞度|锋范|哥瑞|杰德|竞瑞|理念S1|凌派|思铂睿|思迪|思铭|思域|享域|型格|雅阁|英仕派|INSPIRE|LIFE|P7)" },
    ],
    projectNotes: {},
  },
  "li-auto": {
    brandName: "理想",
    groups: [
      { key: "L-series", label: "L 系列 · 增程 SUV" },
      { key: "i-series", label: "i 系列 · 纯电" },
      { key: "special", label: "MEGA / ONE" },
    ],
    overrides: {}, merges: {},
    /**
     * 21 行 → 归并：L7/L8、焕新版、续航版本、TJ 编码条目都要收拢。
     * ⚠️ 必须先匹配「焕新版」「L7/L8」「续航版本」，再匹配单车型前缀。
     */
    mergeRules: [
      { match: "^焕新版\\s*L7|^焕新版L7", label: "焕新版 L7 / L8", group: "L-series", note: "含 2025 焕新版 L7 与 L8" },
      { match: "^焕新版\\s*L6|^焕新版L6", label: "焕新版 L6", group: "L-series", note: "2025 焕新版 L6" },
      { match: "^L7\\s*/\\s*L8$", label: "L7 / L8（通用条目）", group: "L-series", note: "原始资料中的合并写法" },
      { match: "^L8-Livis", label: "L8", group: "L-series", note: "含 Livis 430 续航版本" },
      { match: "^L9livis|^L9\\s*livis", label: "L9", group: "L-series", note: "含 Livis 版本" },
      { match: "^L6\\s*300", label: "L6", group: "L-series", note: "含 300 续航版本" },
      { match: "^L6", label: "L6", group: "L-series", note: "" },
      { match: "^L7", label: "L7", group: "L-series", note: "" },
      { match: "^L8", label: "L8", group: "L-series", note: "" },
      { match: "^L9", label: "L9", group: "L-series", note: "" },
      { match: "^i6-720|^i6\\s*-?\\s*720", label: "i6", group: "i-series", note: "含 720 续航版本" },
      { match: "^i6", label: "i6", group: "i-series", note: "" },
      { match: "^25款理想\\s*i6", label: "i6（25 款）", group: "i-series", note: "" },
      { match: "^i8-720", label: "i8", group: "i-series", note: "含 720 续航版本" },
      { match: "^i8", label: "i8", group: "i-series", note: "" },
      { match: "^MEGA", label: "MEGA", group: "special", note: "" },
      { match: "^ONE", label: "ONE", group: "special", note: "" },
      { match: "^(TJ\\d+|通用适配)", label: "通用适配条目", group: "special", note: "原始资料中的通用 / 编码条目" },
    ],
    projectNotes: {},
  },
  geely: {
    brandName: "吉利",
    groups: [
      { key: "sedan", label: "轿车" },
      { key: "suv", label: "SUV / 跨界" },
      { key: "nev", label: "新能源（几何 / 星愿 / 熊猫）" },
      { key: "mpv", label: "MPV" },
    ],
    overrides: {}, merges: {},
    /** 47 行 → 归并同族（缤瑞/缤越/博瑞/博越/帝豪/远景/星越 各含多版本）*/
    mergeRules: [
      { match: "^缤瑞", label: "缤瑞", group: "sedan", note: "含 COOL 版本" },
      { match: "^缤越", label: "缤越", group: "suv", note: "含 COOL / L / Pro 版本" },
      { match: "^博瑞", label: "博瑞", group: "sedan", note: "含 GE 版本" },
      { match: "^博越", label: "博越", group: "suv", note: "含 COOL / L / Pro / X 与「智享型」版本" },
      { match: "^帝豪", label: "帝豪", group: "sedan", note: "含 EC7 / GL / GS / GSE / L / S 版本" },
      { match: "^远景", label: "远景", group: "sedan", note: "含 S1 / X1 / X3 / X6 版本" },
      { match: "^星越", label: "星越", group: "suv", note: "含 L / S / 智擎星云版 / Hi-P 增程电动版" },
      { match: "^星瑞", label: "星瑞", group: "sedan", note: "" },
      { match: "^星愿", label: "星愿", group: "nev", note: "含 310/410 续航版本" },
      { match: "^星舰7", label: "星舰 7", group: "suv", note: "" },
      { match: "^豪越", label: "豪越", group: "suv", note: "含 L 版本" },
      { match: "^几何", label: "几何系列", group: "nev", note: "含几何 C / E" },
      { match: "^嘉际", label: "嘉际", group: "mpv", note: "" },
      { match: "^金刚", label: "金刚", group: "sedan", note: "" },
      { match: "^功夫牛", label: "功夫牛", group: "nev", note: "" },
      { match: "^熊猫EV", label: "熊猫 EV", group: "nev", note: "" },
      { match: "^(GX7|GX9|SX7|ICON)", label: "早期车型（GX7 / GX9 / SX7 / ICON）", group: "suv", note: "原始资料中的早期车型条目" },
    ],
    projectNotes: {},
  },
  mercedes: {
    brandName: "奔驰",
    groups: [
      { key: "sedan", label: "轿车（A/C/E/S 级等）" },
      { key: "suv", label: "SUV（G/GL 系）" },
      { key: "eq", label: "EQ 纯电系列" },
      { key: "mpv", label: "MPV / 商务（V 级 / 威霆 / 唯雅诺）" },
      { key: "smart", label: "smart" },
      { key: "amg", label: "AMG 高性能" },
      { key: "wheel", label: "轮毂款式（库存款式）" },
    ],
    overrides: {}, merges: {},
    /**
     * 115 行 → 归并。⚠️ 44 行「款式N」只含「轮毂」项目，**不是车型**（原始资料把轮毂 SKU 混进了车型列表）
     * → 单独成一组「轮毂款式」，不污染车系卡。
     */
    mergeRules: [
      // 轮毂款式（非车型，最优先，避免被其它规则抢走）
      { match: "^款式\\d", label: "轮毂款式（库存款式）", group: "wheel", note: "原始资料中的轮毂库存款式条目，非具体车型" },
      { match: "^SUV-EQE", label: "EQE SUV", group: "eq", note: "" },
      // smart（大小写两种写法都在数据里）
      { match: "^(smart|SMART)\\s*forfour", label: "smart forfour", group: "smart", note: "" },
      { match: "^(smart|SMART)\\s*fortwo", label: "smart fortwo", group: "smart", note: "" },
      { match: "^(smart|SMART)\\s*精灵", label: "smart 精灵系列", group: "smart", note: "含精灵 #1 / #3 / #5" },
      // AMG
      { match: "^AMG", label: "AMG GT", group: "amg", note: "含 AMG-GT 写法" },
      // MPV / 商务
      { match: "^威霆", label: "威霆", group: "mpv", note: "含 MPV 与「不盖滑道」版本" },
      { match: "^唯雅诺", label: "唯雅诺", group: "mpv", note: "含 MPV 与「不盖滑道」版本" },
      { match: "^V260", label: "V260", group: "mpv", note: "含低配 / 高配 / V260L 版本" },
      { match: "^V级", label: "V 级", group: "mpv", note: "" },
      // EQ 纯电
      { match: "^EQA", label: "EQA", group: "eq", note: "" },
      { match: "^EQB", label: "EQB", group: "eq", note: "含 EQB260 版本" },
      { match: "^EQC", label: "EQC", group: "eq", note: "" },
      { match: "^EQE", label: "EQE", group: "eq", note: "含「EV 轿车」与 SUV 版本" },
      { match: "^EQS", label: "EQS", group: "eq", note: "含轿车与 SUV 版本" },
      // SUV
      { match: "^G级|^G\\s*级", label: "G 级", group: "suv", note: "含右呔 / 二排带杯架 / 适配右tai 版本" },
      // ⚠️ 不要用 ^GL[ABCESK]?$ 把 GLA/GLB/GLC/GLE/GLK/GLS 并成一张卡 —— 它们是**独立车系**，下面各有单条规则
      { match: "^GL$", label: "GL", group: "suv", note: "" },
      { match: "^GLA", label: "GLA", group: "suv", note: "含 GLA200" },
      { match: "^GLB", label: "GLB", group: "suv", note: "含 GLB200" },
      { match: "^GLC", label: "GLC", group: "suv", note: "含 GLC260L" },
      { match: "^GLE", label: "GLE", group: "suv", note: "" },
      { match: "^GLK", label: "GLK", group: "suv", note: "含 GLK 级" },
      { match: "^GLS", label: "GLS", group: "suv", note: "" },
      { match: "^ML", label: "ML", group: "suv", note: "" },
      // 轿车
      { match: "^A级|^A200", label: "A 级", group: "sedan", note: "含 A200L" },
      { match: "^B级|^B200", label: "B 级", group: "sedan", note: "含 B200" },
      { match: "^C级|^C260", label: "C 级", group: "sedan", note: "含 C260L" },
      { match: "^E级|^E300", label: "E 级", group: "sedan", note: "含 E300L" },
      { match: "^S级|^S450", label: "S 级", group: "sedan", note: "含 S450L" },
      { match: "^CLA", label: "CLA", group: "sedan", note: "含 CLA200" },
      { match: "^CLE", label: "CLE", group: "sedan", note: "含硬顶轿跑" },
      { match: "^R级", label: "R 级", group: "mpv", note: "含原车 6/7 座布局版本" },
      { match: "^SL级", label: "SL 级", group: "sedan", note: "" },
      { match: "^通用适配", label: "通用适配", group: "suv", note: "通用适配条目" },
    ],
    projectNotes: {},
  },
  hongqi: {
    brandName: "红旗",
    groups: [
      { key: "suv", label: "SUV" },
      { key: "sedan", label: "轿车" },
      { key: "nev", label: "新能源" },
      { key: "mpv", label: "MPV" },
    ],
    overrides: {}, merges: {},
    /** 17 行 17 车系，与既有 `hongqi-model-groups.ts` 的归属完全一致（suv 5 / sedan 4 / nev 7 / mpv 1）*/
    groupPatterns: [
      { key: "mpv", match: "^HQ9" },
      { key: "suv", match: "^(HS[0-9]|LS7)" },
      { key: "nev", match: "^(E-|EH7|天工)" },
      { key: "sedan", match: "^(H[0-9])" },
    ],
    projectNotes: {},
  },
  toyota: {
    brandName: "丰田",
    groups: [
      { key: "sedan", label: "轿车" },
      { key: "suv", label: "SUV" },
      { key: "mpv", label: "MPV" },
      { key: "pickup", label: "皮卡 / 越野" },
    ],
    overrides: {},
    merges: {},
    /**
     * 分组沿用既有 `src/lib/toyota-model-groups.ts`（sedan 17 / suv 21 / mpv 7 / pickup 4 = 49），
     * 但 fitment 有 94 行 → 45 行是变体/异写（19 个兰德酷路泽底盘代号、9 个轮毂「款式N」、塞纳/塞那、超霸/穿越者…）。
     * 规则按**从具体到宽泛**：先唯一车系，再同族归并，最后「款式N」单列成轮毂区。
     */
    mergeRules: [
      // ── 兰德酷路泽家族（20 行 → 1）：底盘代号 + 各地写法 + 座椅布局变体 ──
      { match: "酷路泽|陆地巡洋舰|LC\\d", label: "兰德酷路泽", group: "suv", note: "含 LC71–LC300 各代底盘代号、FJ 酷路泽右呔、以及原车 5/7 座布局版本" },
      // ── 4Runner / 穿越者家族（8 行 → 1）──
      { match: "RUNNER|超霸|穿越者", label: "4Runner 超霸 / Fortuner 穿越者", group: "pickup", note: "含超霸 4Runner、Fortuner 穿越者、SR5 版本及原车 7 座布局版本" },
      // ── 塞纳（3 行 → 1）──
      { match: "赛那|塞纳|塞那", label: "赛那 SIENNA", group: "mpv", note: "原始资料中「塞纳 / 塞那 / 赛那SIENNA」为同一车系的不同写法" },
      // ── YARiS L（3 行 → 1）──
      { match: "^YARiS", label: "YARiS L", group: "sedan", note: "含致炫 / 致享版本" },
      // ── bZ 纯电系 ──
      { match: "^bZ4X|^bz4x", label: "bZ4X", group: "suv", note: "含「左边带音响」配置版本" },
      { match: "^bZ3", label: "bZ3", group: "sedan", note: "" },
      { match: "^bZ5", label: "bZ5", group: "suv", note: "" },
      { match: "^铂智", label: "铂智系列", group: "suv", note: "含铂智 3X / 铂智 7" },
      // ── iA5 纯电 ──
      { match: "^iA5", label: "iA5", group: "sedan", note: "含纯电动版本" },
      // ── 海拉克斯 ──
      { match: "^海拉克斯", label: "海拉克斯 Hilux", group: "pickup", note: "" },
      // ── 佳美（凯美瑞旧称）──
      { match: "^佳美", label: "凯美瑞（佳美）", group: "sedan", note: "原始资料中「佳美」为凯美瑞的旧称" },
      // ── 普瑞维亚 ──
      { match: "^普瑞维亚", label: "普瑞维亚", group: "mpv", note: "" },
      // ── 单车型（显式列出，避免被上面的宽泛规则抢走）──
      { match: "^埃尔法", label: "埃尔法", group: "mpv", note: "" },
      { match: "^威尔法", label: "威尔法", group: "mpv", note: "" },
      { match: "^格瑞维亚", label: "格瑞维亚", group: "mpv", note: "" },
      { match: "^格兰维亚", label: "格兰维亚", group: "mpv", note: "" },
      { match: "^海狮", label: "海狮", group: "mpv", note: "" },
      { match: "^坦途", label: "坦途", group: "pickup", note: "" },
      { match: "^Tacoma", label: "Tacoma 塔库玛", group: "pickup", note: "" },
      { match: "^兰德酷路泽$", label: "兰德酷路泽", group: "suv", note: "" },
      { match: "^普拉多", label: "普拉多", group: "suv", note: "" },
      { match: "^汉兰达", label: "汉兰达", group: "suv", note: "" },
      { match: "^RAV4", label: "RAV4 荣放", group: "suv", note: "" },
      { match: "^锋兰达", label: "锋兰达", group: "suv", note: "" },
      { match: "^红杉", label: "红杉", group: "suv", note: "" },
      { match: "^奕泽", label: "奕泽", group: "suv", note: "" },
      { match: "^威兰达", label: "威兰达", group: "suv", note: "" },
      { match: "^凌放", label: "凌放", group: "suv", note: "" },
      { match: "^C-HR", label: "C-HR", group: "suv", note: "" },
      { match: "^威飒", label: "威飒", group: "suv", note: "" },
      { match: "^FJ Cruiser", label: "FJ Cruiser", group: "suv", note: "" },
      { match: "^特锐", label: "特锐", group: "suv", note: "" },
      { match: "^Veloz", label: "Veloz 维洛兹", group: "suv", note: "" },
      // ⚠️ 「卡罗拉锐放」在 SUV 组 → 必须先于「^卡罗拉」匹配（从具体到宽泛）
      { match: "^卡罗拉锐放", label: "卡罗拉锐放", group: "suv", note: "" },
      { match: "^卡罗拉", label: "卡罗拉", group: "sedan", note: "" },
      { match: "^凯美瑞", label: "凯美瑞", group: "sedan", note: "" },
      // ⚠️ 「皇冠陆放」在 SUV 组 → 必须先于「^皇冠」匹配
      { match: "^皇冠陆放", label: "皇冠陆放", group: "suv", note: "" },
      { match: "^皇冠", label: "皇冠", group: "sedan", note: "" },
      { match: "^亚洲龙", label: "亚洲龙", group: "sedan", note: "" },
      { match: "^亚洲狮", label: "亚洲狮", group: "sedan", note: "" },
      { match: "^雷凌", label: "雷凌", group: "sedan", note: "" },
      { match: "^威驰", label: "威驰", group: "sedan", note: "" },
      { match: "^锐志", label: "锐志", group: "sedan", note: "" },
      { match: "^花冠", label: "花冠", group: "sedan", note: "" },
      { match: "^凌尚", label: "凌尚", group: "sedan", note: "" },
      { match: "^雅力士", label: "雅力士", group: "sedan", note: "" },
      { match: "^逸致", label: "逸致", group: "sedan", note: "" },
      { match: "^普锐斯", label: "普锐斯", group: "sedan", note: "" },
      { match: "^86", label: "86", group: "sedan", note: "" },
      // ── 轮毂款式（非车型，单列成一轮毂区，归 suv 组末尾）──
      { match: "^款式\\d", label: "轮毂款式（库存款式）", group: "suv", note: "原始资料中的轮毂库存款式条目，非具体车型" },
      // ── 兜底：通用适配 ──
      { match: "^通用适配", label: "通用适配", group: "suv", note: "通用适配条目" },
    ],
    projectNotes: {},
  },
  volkswagen: {
    brandName: "大众",
    groups: [
      { key: "suv", label: "SUV" },
      { key: "sedan", label: "轿车" },
      { key: "mpv", label: "MPV / 旅行" },
      { key: "nev", label: "新能源" },
    ],
    overrides: {},
    merges: {},
    /**
     * 并行分组。分组口径**沿用既有 `src/lib/volkswagen-model-groups.ts`** 的权威归属
     * （`volkswagenModels[].group`：suv 14 / sedan 19 / mpv 8 / nev 1）。
     * 正则按车名前缀构造、互相**互斥**（`途安` 归 MPV，`途观/途昂/途锐/途岳/途铠` 归 SUV）。
     * 断言保证 34 行全覆盖；命中多条即拒写。
     */
    groupPatterns: [
      { key: "suv", match: "^(途锐|途昂|途观|途岳|探岳|探歌|探影|途铠|揽巡|揽境)" },
      { key: "mpv", match: "^(途安|夏朗|威然|蔚揽|蔚领|开迪)" },
      { key: "nev", match: "^ID\\." },
      { key: "sedan", match: "^(高尔夫|凌渡|速腾|迈腾|帕萨特|CC|尚酷|甲壳虫|Polo|宝来|朗逸|朗行|朗境|桑塔纳|捷达|辉昂|R36)" },
    ],
    projectNotes: {},
  },
  haval: {
    brandName: "哈弗",
    groups: [
      { key: "h-series", label: "H系 / M系 · 城市SUV" },
      { key: "f-series", label: "F系与入门 · 轿跑SUV" },
      { key: "dog-series", label: "狗系 · 轻越野" },
      { key: "hi4", label: "Hi4 新能源" },
    ],
    overrides: {},
    merges: {},
    /**
     * 并行分组（每组一条互斥正则）。分组口径**直接沿用既有 `src/lib/haval-model-groups.ts`**
     * 的权威归属（`havalModels[].group`），只是把该文件里手写的车型清单换成对 fitment
     * 数据行的正则匹配，并用断言保证 19 行全被覆盖。
     */
    groupPatterns: [
      { key: "h-series", match: "^(H\\d|M6)" },
      { key: "f-series", match: "^(F\\d|赤兔|初恋|神兽)" },
      { key: "dog-series", match: "^(大狗|酷狗)" },
      { key: "hi4", match: "^(枭龙|猛龙)" },
    ],
    projectNotes: {},
  },
  "land-rover": {
    brandName: "路虎",
    groups: [
      { key: "range-rover", label: "揽胜系列" },
      { key: "discovery", label: "发现系列" },
      { key: "defender", label: "卫士系列" },
      { key: "freelander", label: "神行者系列" },
    ],
    overrides: {},
    merges: {},
    /** 沿用既有 `src/lib/land-rover-model-groups.ts` 的权威归属 */
    groupPatterns: [
      { key: "range-rover", match: "揽胜" },
      { key: "discovery", match: "发现" },
      { key: "defender", match: "卫士" },
      { key: "freelander", match: "神行者" },
    ],
    projectNotes: {},
  },
  gac: {
    brandName: "广汽传祺",
    groups: [
      { key: "aion", label: "新能源 · 埃安 / 昊铂 / 传祺智电" },
      { key: "mpv", label: "MPV" },
      { key: "suv", label: "SUV" },
      { key: "sedan", label: "轿车" },
    ],
    overrides: {},
    merges: {},
    /**
     * 规则折叠（GAC 的 78 行里同车异写极多：`Aion S` / `Aion S/S PLUS` / `Aion S （埃安S）`、
     * `Aion V （埃安V）PLUS` / `埃安V PLUS 7座做5座` …）。按**从具体到宽泛**排列，
     * 每行配到第一条命中的规则；未覆盖即拒写。
     */
    mergeRules: [
      // ── 埃安 / 昊铂（新能源电驱线）──
      { match: "Aion\\s*(埃安\\s*)?S|^埃安\\s*S", label: "Aion S", group: "aion", note: "含 S / S PLUS / S MAX 等版本（原始资料多种写法）" },
      { match: "Aion\\s*(埃安\\s*)?V|^埃安\\s*V", label: "Aion V", group: "aion", note: "含 霸王龙 / PLUS / 7座做5座 / 7座做7座 等版本" },
      { match: "Aion\\s*(埃安\\s*)?Y|^埃安\\s*Y", label: "Aion Y", group: "aion", note: "含 Y PLUS 版本" },
      { match: "Aion\\s*(埃安\\s*)?LX|^埃安\\s*LX", label: "Aion LX", group: "aion", note: "含 LX PLUS 版本" },
      { match: "Aion\\s*RT", label: "Aion RT", group: "aion", note: "" },
      { match: "Aion\\s*UT", label: "Aion UT", group: "aion", note: "" },
      { match: "Aion\\s*i60", label: "Aion i60", group: "aion", note: "" },
      { match: "Aion\\s*N60", label: "Aion N60", group: "aion", note: "" },
      { match: "昊铂", label: "埃安昊铂", group: "aion", note: "含 GT / HT / HL / HL 增程 / SSR 等车型" },
      { match: "世锐", label: "新能源世锐 PHEV", group: "aion", note: "" },
      { match: "祺智", label: "传奇祺智 PHEV", group: "aion", note: "" },
      // ── MPV ──
      { match: "^向往\\s*M8|^M8", label: "M8 系列", group: "mpv", note: "含 宗师 / 大师 / 24 款新大师 / 向往 M8 及续航版本" },
      { match: "^M6", label: "M6", group: "mpv", note: "含 M6 Pro 版本" },
      { match: "^向往\\s*E8|^E8", label: "E8", group: "mpv", note: "含 向往 E8 及续航版本" },
      { match: "^E9", label: "E9", group: "mpv", note: "" },
      { match: "^ES9", label: "ES9", group: "mpv", note: "" },
      { match: "^GM8", label: "GM8", group: "mpv", note: "" },
      { match: "^[(（]?\\s*E8/M8", label: "E8 / M8 宗师 / M8 大师 / E9（合并条目）", group: "mpv", note: "原始资料中的合并写法" },
      // ── SUV ──
      { match: "^向往\\s*S7", label: "向往 S7", group: "suv", note: "含增程版本" },
      { match: "^向往\\s*S9", label: "向往 S9", group: "suv", note: "" },
      { match: "^GS3|^影速", label: "GS3", group: "suv", note: "含 GS3 POWER / GS3 影速 / 影速 GS3 等版本" },
      { match: "^GS4", label: "GS4", group: "suv", note: "含 Coupe / PLUS / MAX 版本" },
      { match: "^GS5", label: "GS5", group: "suv", note: "" },
      { match: "^GS7", label: "GS7", group: "suv", note: "" },
      { match: "^GS8", label: "GS8", group: "suv", note: "含 GS8S 版本" },
      { match: "^GE3", label: "GE3", group: "suv", note: "" },
      { match: "^影豹", label: "影豹", group: "suv", note: "" },
      { match: "^影酷", label: "影酷", group: "suv", note: "" },
      // ── 轿车 ──
      { match: "^GA3", label: "GA3", group: "sedan", note: "含 GA3S 与 GA3S 新能源版本" },
      { match: "^GA4", label: "GA4", group: "sedan", note: "含 GA4 Plus 版本" },
      { match: "^GA5", label: "GA5", group: "sedan", note: "" },
      { match: "^GA6", label: "GA6", group: "sedan", note: "" },
      { match: "^GA8", label: "GA8", group: "sedan", note: "" },
    ],
    projectNotes: {},
  },
  bmw: {
    brandName: "宝马",
    groups: [
      { key: "sedan-series", label: "数字系 · 轿车 / 轿跑", hint: "1–8 系" },
      { key: "x-series", label: "X 系 · SUV / SAV", hint: "X1–X7 / XM" },
      { key: "i-series", label: "i 系 · 纯电", hint: "i3 / i4 / i5 / i7 / iX" },
      { key: "m-z-series", label: "M 与 Z · 性能车", hint: "M2–M8 / Z4 / X3M" },
    ],
    overrides: {},
    merges: {},
    /**
     * 规则折叠（bmw 的 147 行里绝大多数是「同一车系的材质/座椅/工艺变体」：
     * 矮绒布 / 高绒布 / 削边工艺 / 右呔版 / 原车N座做M座 / Li / Le / EV 等）。
     * 规则按**从具体到宽泛**排列；脚本自动把每行配到第一条命中的规则，
     * 并保证覆盖全部数据行（漏一行即拒写）。**不做模糊匹配，全部是显式正则**。
     * 说明：每条规则的 label 是车系名，note 记录被折叠掉的变体类型，
     * 保证「同一车系下的差异」可读，而不是把 100+ 行摊在页面上。
     */
    mergeRules: [
      // ── X5 / X6 / X7 / 全新 X 系（变体最多，先收）──
      { match: "^X5", label: "X5", group: "x-series", note: "含原车 5/7 座、右钛版、前排内侧与绒布/削边工艺等版本" },
      { match: "^X6|^全新宝马X6", label: "X6", group: "x-series", note: "含前排内侧绒布与削边工艺版本" },
      { match: "^X7", label: "X7", group: "x-series", note: "含原车 6/7 座做 4/5/6/7 座、绒布与削边工艺版本" },
      { match: "^全新X5|^X4/X4M", label: "全新 X5 / X4M", group: "x-series", note: "含国产版与绒布/削边工艺版本" },
      { match: "^X1", label: "X1", group: "x-series", note: "含新能源与 iX1 版本" },
      { match: "^X2", label: "X2", group: "x-series", note: "" },
      { match: "^X3", label: "X3", group: "x-series", note: "含 X3 M 版本" },
      { match: "^X4", label: "X4", group: "x-series", note: "" },
      { match: "^XM", label: "XM", group: "x-series", note: "含矮绒/高绒削边工艺版本" },
      // ── i 系纯电 ──
      { match: "^i3", label: "i3", group: "i-series", note: "含纯电 SUV / EV / 纯电动等条目（原始资料中同款多写法）" },
      { match: "^i4", label: "i4", group: "i-series", note: "含 EV 版本" },
      { match: "^i5", label: "i5", group: "i-series", note: "" },
      { match: "^i7", label: "i7", group: "i-series", note: "含 EV 削边工艺版本" },
      { match: "^IX|^iX", label: "iX", group: "i-series", note: "含 EV 版本（原始资料中 IX / iX 两种写法）" },
      // ── 数字系轿车/轿跑 ──
      { match: "^1系", label: "1 系", group: "sedan-series", note: "含 2 门轿跑与两厢/三厢版本" },
      { match: "^2系", label: "2 系", group: "sedan-series", note: "含旅行版与 2 门轿跑版本" },
      { match: "^3系", label: "3 系", group: "sedan-series", note: "含右钛车与硬顶版本" },
      { match: "^4系", label: "4 系", group: "sedan-series", note: "含硬顶/软顶版本" },
      { match: "^全新5系|^5系", label: "5 系", group: "sedan-series", note: "含全新版 Li / i / i GT / Le 与绒布、削边工艺、右呔版" },
      { match: "^6系", label: "6 系", group: "sedan-series", note: "含 i GT 版本" },
      { match: "^7系", label: "7 系", group: "sedan-series", note: "含 Li / 高配四座 / 后排带灯孔 / 绒布与削边工艺版本" },
      { match: "^8系", label: "8 系", group: "sedan-series", note: "含 i 版本" },
      // ── M 与 Z 性能车 ──
      { match: "^M2", label: "M2", group: "m-z-series", note: "" },
      { match: "^M3", label: "M3", group: "m-z-series", note: "含旅行车版本" },
      { match: "^M4", label: "M4", group: "m-z-series", note: "含轿跑/敞篷版本" },
      { match: "^M5", label: "M5", group: "m-z-series", note: "" },
      { match: "^M8", label: "M8", group: "m-z-series", note: "" },
      { match: "^Z4", label: "Z4", group: "m-z-series", note: "" },
    ],
    projectNotes: {},
  },
  buick: {
    brandName: "别克",
    groups: [
      { key: "gl-series", label: "GL / 世纪 · 商务车系", hint: "GL6 / GL8 各版本", members: ["GL6", "GL8", "25款别克GL8 陆尊/陆尚", "GL8 25S", "GL8 652T", "GL8 ES燃油", "GL8/PHEV", "世纪"] },
      { key: "encore-series", label: "昂科系列", hint: "昂科拉 / 昂科旗 / 昂科威 / 昂科雷", members: ["昂科拉", "昂科拉GX", "昂科旗", "昂科威", "昂科威Plus", "昂科威S", "昂科威PLUS", "昂科威S-25T", "昂科雷 低配 原车7座做5座", "昂科雷 低配 原车7座做7座", "昂科雷 原车7座做5座"] },
      { key: "zhijing-series", label: "至境系列", hint: "世家 / E7 / L7", members: ["至境世家", "至境世家EV601", "至境E7", "至境E7 136续航", "至境L7", "至镜L7"] },
      { key: "ev-series", label: "微蓝 / 电驱系列", hint: "微蓝 / VELITE / E 系", members: ["微蓝6", "VELITE（微蓝5）", "VELITE （微蓝7）", "VELITE7", "E4 EV", "E5"] },
      { key: "classic-series", label: "经典车系", hint: "君威 / 君越 / 凯越 / 威朗 等", members: ["昂扬", "君威", "君越", "君越20", "凯越", "威朗", "威朗Pro", "英朗", "阅朗", "林荫大道"] },
    ],
    overrides: {},
    merges: {
      昂科威: { members: ["昂科威", "昂科威Plus", "昂科威S", "昂科威PLUS", "昂科威S-25T"], note: "含 Plus / S 及其年款版本，配置与年款差异见适配速查" },
      GL8: { members: ["GL8", "25款别克GL8 陆尊/陆尚", "GL8 25S", "GL8 652T", "GL8 ES燃油", "GL8/PHEV"], note: "含 陆尊 / 陆尚 / 25S / 652T / ES燃油 / PHEV 等版本，年款差异见适配速查" },
      昂科雷: { members: ["昂科雷 低配 原车7座做5座", "昂科雷 低配 原车7座做7座", "昂科雷 原车7座做5座"], note: "含「原车7座改5座 / 保留7座」两种座椅布局版本" },
      至境: { members: ["至境世家", "至境世家EV601", "至境E7", "至境E7 136续航", "至境L7", "至镜L7"], note: "含 世家 / E7 / L7 及续航版本（原始资料中「至镜L7」为「至境L7」的同款条目）" },
      "微蓝 / VELITE": { members: ["微蓝6", "VELITE（微蓝5）", "VELITE （微蓝7）", "VELITE7"], note: "含 微蓝5 / 微蓝6 / 微蓝7 与 VELITE 系列" },
      威朗: { members: ["威朗", "威朗Pro"], note: "含 威朗 Pro 版本" },
      君越: { members: ["君越", "君越20"], note: "含 20 款版本" },
    },
    projectNotes: {},
  },
  wey: {
    brandName: "魏牌",
    groups: [
      {
        key: "vv-series",
        label: "早期 SUV · VV 系列",
        hint: "4 门 5 座",
        members: ["P8", "VV5", "VV6", "VV7"],
      },
      {
        key: "coffee-series",
        label: "咖啡系列 · 城市 SUV",
        hint: "4 门 5 座",
        members: ["玛奇朵", "摩卡", "拿铁"],
      },
      {
        key: "mpv-series",
        label: "六 / 七座 MPV",
        hint: "5 门 6–7 座",
        members: ["高山", "蓝山", "V9X"],
      },
    ],
    /**
     * 车系级备注与显示名。displayName 用于合并同一车系的多个数据行；
     * note 只在**同一车系有多个数据行**时渲染（把配置差异压成一行）。
     */
    overrides: {
      高山: { displayName: "高山", subpage: "/product/gaoshan", note: "" },
      蓝山: { displayName: "蓝山", subpage: "/product/wey/lanshan", note: "" },
      摩卡: { displayName: "摩卡", subpage: "/product/wey/mocha", note: "" },
    },
    /**
     * 同一车系的多数据行 → 合并成一个车系卡，并给出变体备注。
     * key = 车系显示名，value = { members: 原始数据行名, note: 压成一行的差异说明 }
     */
    merges: {},

    /** 该项目为何在这里没有覆盖说明（空 = 无补充） */
    projectNotes: {},
  },
};

function readFitment(brand) {
  const src = join(PROJECT_ROOT, "src", "lib", "fitment", `${brand}.ts`);
  if (!existsSync(src)) throw new Error(`找不到 ${relative(PROJECT_ROOT, src)}`);
  const out = execFileSync(process.execPath, [
    "-e",
    `const fs=require("fs");
     const t=fs.readFileSync(${JSON.stringify(src)},"utf8");
     const parts=t.split(/model:\\s*"([^"]+)",/);
     const models=[];
     for(let i=1;i<parts.length;i+=2){
       const seg=parts[i+1]||"";
       const projRe=/name:\\s*"([^"]+)",\\s*\\n?\\s*specs:\\s*\\[([\\s\\S]*?)\\n\\s*\\]/g;
       const projects=[]; let m;
       while((m=projRe.exec(seg))){
         const body=m[2];
         const specs=[...body.matchAll(/\\{\\s*([\\s\\S]*?)\\n\\s*\\}/g)].map(s=>{
           const g=(k)=>{const r=new RegExp(k+':\\\\s*"([^"]*)"').exec(s[1]);return r?r[1]:"";};
           return { material:g("material"), year:g("year"), note:g("note"), label:g("label"), dynamics:g("dynamics") };
         });
         projects.push({ name:m[1], specs });
       }
       models.push({ model:parts[i], projects });
     }
     process.stdout.write(JSON.stringify(models));`,
  ]).toString();
  return JSON.parse(out);
}

function readImageManifest(brand) {
  const src = join(PROJECT_ROOT, "src", "lib", "fitment", `${brand}-fitment-images.ts`);
  if (!existsSync(src)) return [];
  const t = readFileSync(src, "utf8");
  const rows = [];
  // 逐对象块取字段（字段顺序可能变，且中间夹着 label —— 不能用一条长正则串起来）
  const blockRe = /\{\s*([\s\S]*?)\n\s*\},/g;
  let b;
  while ((b = blockRe.exec(t))) {
    const body = b[1];
    const model = /model:\s*"([^"]+)"/.exec(body)?.[1];
    const project = /project:\s*"([^"]+)"/.exec(body)?.[1];
    const path = /path:\s*"([^"]+)"/.exec(body)?.[1];
    if (model && project && path) rows.push({ model, project, path });
  }
  return rows;
}

/**
 * 车系子页是否真的存在：既认 `product-routes.ts` 里登记的 vehicle_model 子页，
 * 也认**独立顶级产品页**（如 `/product/gaoshan`）—— 后者不在 vehicle_model 表里。
 */
function readLiveSubpages(brandSlug) {
  const ok = new Set();
  const src = join(PROJECT_ROOT, "src", "lib", "product-routes.ts");
  const t = readFileSync(src, "utf8");
  const re = /type:\s*"vehicle_model",\s*brandSlug:\s*"([^"]+)",\s*modelSlug:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(t))) if (m[1] === brandSlug) ok.add(m[2]);
  return ok;
}

/** 路径对应的页面目录是否存在于磁盘（抓独立顶级页，如 /product/gaoshan） */
function pageDirExists(pathname) {
  const dir = join(PROJECT_ROOT, "src", "app", ...pathname.split("/").filter(Boolean));
  return existsSync(join(dir, "page.tsx"));
}

/**
 * 🛑 防覆盖守卫：`src/lib/<brand>-model-groups.ts` 在部分品牌**早已存在**
 * （手写/别脚本生成，页面正在 import）。本脚本曾把 `bmw-model-groups.ts` 覆盖掉，
 * 靠 `git checkout` 才救回来 —— 所以这里**硬性拒绝**覆盖未经本脚本声明的文件。
 *
 * 本脚本的输出统一带命名空间：`<brand>-curated-models.ts` / `<brand>-curated-projects.ts`，
 * 与既有的 `<brand>-model-groups.ts` 物理分开，互不干扰。
 */
const CURATED_SUFFIX = { models: "-curated-models.ts", projects: "-curated-projects.ts" };

function main() {
  const brand = process.argv[2];
  const APPLY = process.argv.includes("--apply");
  const plan = GROUP_PLANS[brand];
  if (!plan) {
    console.error(`✖ 未配置品牌的归并方案：${brand}（可选：${Object.keys(GROUP_PLANS).join(", ")}）`);
    process.exit(1);
  }

  const camel = brand.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const snake = brand.replace(/-/g, "_");
  const models = readFitment(brand);
  const images = readImageManifest(brand);
  const liveSubpages = readLiveSubpages(brand);

  const problems = [];

  const dataNames = models.map((m) => m.model);
  const assigned = new Map();
  // 1) 方案形状校验（**只校验，不建卡** —— 建卡在 buildCard 定义之后）
  if (plan.groupPatterns || plan.mergeRules) {
    // 规则折叠 / 并行分组：成员由规则决定，这里只校验 key 与正则合法
    const validGroups = new Set(plan.groups.map((g) => g.key));
    for (const r of plan.mergeRules ?? []) {
      if (!validGroups.has(r.group)) problems.push(`mergeRules 的 label「${r.label}」指向未知分组「${r.group}」`);
      try { new RegExp(r.match); } catch { problems.push(`mergeRules 正则非法：${r.match}`); }
    }
    for (const r of plan.groupPatterns ?? []) {
      if (!validGroups.has(r.key)) problems.push(`groupPatterns 的 key「${r.key}」不在 groups 里`);
      try { new RegExp(r.match, "i"); } catch { problems.push(`groupPatterns 正则非法：${r.match}`); }
    }
  } else {
    // 逐行分组：每个数据行恰好进一组
    for (const g of plan.groups) {
      for (const m of g.members ?? []) {
        if (assigned.has(m)) problems.push(`车型「${m}」被分到多个组（${assigned.get(m)} / ${g.key}）`);
        assigned.set(m, g.key);
      }
    }
    const unassigned = dataNames.filter((n) => !assigned.has(n));
    const notInData = [...assigned.keys()].filter((n) => !dataNames.includes(n));
    if (unassigned.length) problems.push(`数据里有车型没被分组：${unassigned.join(" / ")}`);
    if (notInData.length) problems.push(`分组里写了但数据里没有的车型：${notInData.join(" / ")}`);
  }

  // 2) 合并方案校验
  const mergedNames = new Set();
  for (const [cardName, cfg] of Object.entries(plan.merges ?? {})) {
    for (const m of cfg.members) {
      if (!dataNames.includes(m)) problems.push(`合并「${cardName}」引用了不存在的车型「${m}」`);
      if (mergedNames.has(m)) problems.push(`车型「${m}」被多个合并引用`);
      mergedNames.add(m);
    }
  }

  if (problems.length) {
    console.error(`✖ 校验不通过，拒绝写入：`);
    for (const p of problems) console.error(`   ${p}`);
    process.exit(1);
  }

  const byName = new Map(models.map((m) => [m.model, m]));

  /** 车系卡：合并成员的项目并集 + spec 并集 */
  const buildCard = (cardName, sourceNames, groupKey, note) => {
    const sources = sourceNames.map((n) => byName.get(n)).filter(Boolean);
    const projectNames = [...new Set(sources.flatMap((s) => s.projects.map((p) => p.name)))];
    const specCount = sources.reduce(
      (n, s) => n + s.projects.reduce((x, p) => x + p.specs.length, 0),
      0,
    );
    const override = plan.overrides?.[cardName] ?? {};
    const cardImages = images.filter((i) => sourceNames.includes(i.model));
    const subpage = override.subpage;
    return {
      displayName: override.displayName ?? cardName,
      group: groupKey,
      sourceModels: sourceNames,
      note: note ?? override.note ?? "",
      projects: projectNames,
      specCount,
      images: cardImages,
      // 子页必须真实存在：路由登记（wey/lanshan、wey/mocha）或独立顶级页（/product/gaoshan）
      subpage: subpage && (liveSubpages.has(subpage.split("/").pop()) || pageDirExists(subpage)) ? subpage : undefined,
      bareSubpage: subpage && !(liveSubpages.has(subpage.split("/").pop()) || pageDirExists(subpage)) ? subpage : undefined,
    };
  };

  const cards = [];

  if (plan.groupPatterns) {
    // ─── 并行分组：每组一条**互斥**正则，覆盖性由断言保证，不依赖规则顺序
    //     （避免「1系 vs 118i」那类顺序敏感）───
    const rules = plan.groupPatterns.map((r) => ({ ...r, re: new RegExp(r.match, "i") }));
    const auto = rules.map(() => []);
    for (const name of dataNames) {
      const hits = [];
      for (let i = 0; i < rules.length; i++) if (rules[i].re.test(name)) hits.push(i);
      if (hits.length === 0) { problems.push(`groupPatterns 未覆盖的数据行：「${name}」`); continue; }
      if (hits.length > 1) { problems.push(`数据行「${name}」命中多条分组规则：${hits.map((i) => rules[i].label ?? rules[i].key).join(" / ")}`); continue; }
      auto[hits[0]].push(name);
    }
    if (problems.length) {
      console.error(`✖ 并行分组校验不通过，拒绝写入：`);
      for (const p of problems) console.error(`   ${p}`);
      process.exit(1);
    }
    // 每个数据行一张卡，按正则归到所属组（组的价值是分节组织，不是把成员压成一张卡）
    for (let i = 0; i < rules.length; i++) {
      for (const name of auto[i]) cards.push(buildCard(name, [name], rules[i].key, ""));
    }
  } else if (plan.mergeRules) {
    // ─── 规则折叠模式：适合「同名车系被材质/座椅/工艺变体后缀炸开」的品牌（bmw / gac / haval / vw）───
    // 维护成本远低于硬编码上百条映射；安全性由**自动配置**保证：
    // 每条规则是 { match 正则, label 卡名, group 组key, note 变体备注 }，脚本自动把
    // 每个数据行配到**第一条命中的规则**，并按前一条规则自动截断扫描范围。
    const rules = plan.mergeRules.map((r) => ({ ...r, re: new RegExp(r.match) }));
    const auto = rules.map(() => []);
    // ⚠️ 不再用「游标 + 回扫」：当规则间存在前缀包含关系（`^卡罗拉锐放` 与 `^卡罗拉`）时，
    // 游标会停在宽规则上，把本应归给具体规则的数据行抢走（实测 toyota 的「卡罗拉锐放 / 皇冠陆放」）。
    // 改为**每条数据行都从第一条规则开始扫** → 命中第一条即止，完全服从「从具体到宽泛」的书写顺序。
    for (const name of dataNames) {
      let hit = -1;
      for (let i = 0; i < rules.length; i++) {
        if (rules[i].re.test(name)) { hit = i; break; }
      }
      if (hit === -1) {
        problems.push(`mergeRules 未覆盖的数据行：「${name}」`);
        continue;
      }
      auto[hit].push(name);
    }
    if (problems.length) {
      console.error(`✖ 规则折叠未覆盖全部数据行，拒绝写入（补一条规则或用 tailLabel 兜底）：`);
      for (const p of problems) console.error(`   ${p}`);
      process.exit(1);
    }
    for (let i = 0; i < rules.length; i++) {
      const r = rules[i];
      if (auto[i].length === 0) continue; // 允许规则存在但当前无命中（如某类变体本轮不存在）
      cards.push(buildCard(r.label, auto[i], r.group, r.note ?? ""));
    }
  } else {
    for (const g of plan.groups) {
      // 先处理本组内的合并卡
      const mergedHere = Object.entries(plan.merges ?? {}).filter(([, cfg]) =>
        cfg.members.some((m) => g.members.includes(m)),
      );
      const consumed = new Set();
      for (const [cardName, cfg] of mergedHere) {
        cards.push(buildCard(cardName, cfg.members, g.key, cfg.note));
        for (const m of cfg.members) consumed.add(m);
      }
      for (const m of g.members) {
        if (consumed.has(m)) continue;
        cards.push(buildCard(m, [m], g.key, undefined));
      }
    }
  }

  // 3) 项目矩阵：项目 → 车系 → 备注
  const projectMap = new Map();
  for (const m of models) {
    for (const p of m.projects) {
      if (!projectMap.has(p.name)) projectMap.set(p.name, []);
      projectMap.get(p.name).push({
        model: m.model,
        specs: p.specs,
      });
    }
  }
  const projects = [...projectMap.entries()]
    .map(([name, list]) => ({
      name,
      modelCount: list.length,
      models: list.sort((a, b) => a.model.localeCompare(b.model, "zh")),
    }))
    .sort((a, b) => b.modelCount - a.modelCount || a.name.localeCompare(b.name, "zh"));

  console.log(`品牌：${brand}（${plan.brandName}）`);
  console.log(`数据行：${models.length}  ｜ 车系卡：${cards.length}  ｜ 项目：${projects.length}`);
  console.log(`可引用图：${images.length} 张（登记在 <brand>-fitment-images.ts）`);
  console.log(`\n车系卡：`);
  for (const c of cards) {
    const flag = c.subpage ? `子页 ${c.subpage}` : "";
    const reg = c.bareSubpage ? ` ⚠ 子页不存在: ${c.bareSubpage}` : "";
    console.log(`   ${c.displayName.padEnd(8)} [${c.group.padEnd(14)}] ${String(c.projects.length)} 项 / ${String(c.specCount).padStart(2)} 条 ｜ ${String(c.images.length)} 图 ${flag}${reg}`);
  }
  console.log(`\n项目矩阵（按覆盖车系数）：`);
  for (const p of projects) console.log(`   ${String(p.modelCount).padStart(3)}  ${p.name}`);

  if (!APPLY) {
    console.log(`\n[dry-run] 未写入。加 --apply 实跑。`);
    return;
  }

  // ---- 写 model-groups ----
  const gLines = [
    "/**",
    ` * ${plan.brandName} 车系归并与分组（自动生成，勿手改）`,
    " *",
    ` * 生成：\`node scripts/build-brand-curated-data.mjs ${brand} --apply\``,
    ` * 源：\`src/lib/fitment/${brand}.ts\`（数据行）+ 源资料《车型适配库和文件/${plan.brandName}.md》的「款式与版本」门/座数`,
    " *",
    " * 分组依据（可核）：4 门 5 座 → SUV；5 门 6–7 座 → MPV。不推断未标注的车型。",
    " */",
    "",
    `export type ${cap(brand)}ModelGroupKey = ${plan.groups.map((g) => JSON.stringify(g.key)).join(" | ")};`,
    "",
    `export const ${snake.toUpperCase()}_MODEL_GROUP_LABELS: Record<${cap(brand)}ModelGroupKey, string> = {`,
    ...plan.groups.map((g) => `  ${JSON.stringify(g.key)}: ${JSON.stringify(`${g.label} · ${g.hint}`)},`),
    "};",
    "",
    `export const ${snake.toUpperCase()}_MODEL_GROUPS: ${cap(brand)}ModelGroupKey[] = [`,
    ...plan.groups.map((g) => `  ${JSON.stringify(g.key)},`),
    "];",
    "",
    "export interface CuratedModelCard {",
    "  /** 车系显示名 */",
    "  readonly displayName: string;",
    "  /** 所属分组 */",
    "  readonly group: " + cap(brand) + "ModelGroupKey;",
    "  /** 合并进来的原始数据行（用于与适配库逐字对账） */",
    "  readonly sourceModels: readonly string[];",
    "  /** 变体备注：配置差异压成一行，无则为空串 */",
    "  readonly note: string;",
    "  /** 该车系支持的项目名 */",
    "  readonly projects: readonly string[];",
    "  /** 适配备注条数 */",
    "  readonly specCount: number;",
    "  /** 已登记的适配产品图 */",
    "  readonly images: readonly { model: string; project: string; path: string }[];",
    "  /** 车系子页（仅在 product-routes.ts 登记过才给） */",
    "  readonly subpage?: string;",
    "}",
    "",
    `export const ${camel}ModelCards: readonly CuratedModelCard[] = [`,
  ];
  for (const c of cards) {
    gLines.push("  {");
    gLines.push(`    displayName: ${JSON.stringify(c.displayName)},`);
    gLines.push(`    group: ${JSON.stringify(c.group)},`);
    gLines.push(`    sourceModels: [${c.sourceModels.map((s) => JSON.stringify(s)).join(", ")}],`);
    gLines.push(`    note: ${JSON.stringify(c.note)},`);
    gLines.push(`    projects: [${c.projects.map((p) => JSON.stringify(p)).join(", ")}],`);
    gLines.push(`    specCount: ${c.specCount},`);
    gLines.push(`    images: [`);
    for (const i of c.images) {
      gLines.push(`      { model: ${JSON.stringify(i.model)}, project: ${JSON.stringify(i.project)}, path: ${JSON.stringify(i.path)} },`);
    }
    gLines.push(`    ],`);
    if (c.subpage) gLines.push(`    subpage: ${JSON.stringify(c.subpage)},`);
    gLines.push("  },");
  }
  gLines.push("];", "");
  gLines.push(`/** 车系数（S0 统计 / S1 卡片数 / S2 分组数 同源） */`);
  gLines.push(`export const ${snake.toUpperCase()}_MODEL_CARD_COUNT = ${cards.length};`);
  gLines.push(`/** 合并前的原始数据行数（用于与适配库对账） */`);
  gLines.push(`export const ${snake.toUpperCase()}_SOURCE_ROW_COUNT = ${models.length};`);
  gLines.push("");

  // ---- 写 project-matrix ----
  const pLines = [
    "/**",
    ` * ${plan.brandName} 项目矩阵（自动生成，勿手改）`,
    " *",
    ` * 生成：\`node scripts/build-brand-curated-data.mjs ${brand} --apply\``,
    " * 源：`src/lib/fitment/" + brand + ".ts`",
    " *",
    " * 年款/材质/备注均为适配库原文，不换算不推断。",
    " */",
    "",
    "export interface CuratedProjectVariant {",
    "  readonly material: string;",
    "  readonly year: string;",
    "  readonly note: string;",
    "}",
    "",
    "export interface CuratedProjectModel {",
    "  readonly model: string;",
    "  readonly variants: readonly CuratedProjectVariant[];",
    "}",
    "",
    "export interface CuratedProject {",
    "  readonly name: string;",
    "  /** 覆盖车系数 */",
    "  readonly modelCount: number;",
    "  readonly models: readonly CuratedProjectModel[];",
    "}",
    "",
    `/** 按覆盖车系数降序 */`,
    `export const ${camel}Projects: readonly CuratedProject[] = [`,
  ];
  for (const p of projects) {
    pLines.push("  {");
    pLines.push(`    name: ${JSON.stringify(p.name)},`);
    pLines.push(`    modelCount: ${p.modelCount},`);
    pLines.push(`    models: [`);
    for (const m of p.models) {
      pLines.push(`      { model: ${JSON.stringify(m.model)}, variants: [`);
      for (const s of m.specs) {
        // ⚠️ 刻意不落 `label`：那是**供应商型号编号**（如 934 / BWC211），
        // 按 docs/agent/page-specs/INDEX.md 纪律 5「型号编号不上页面，仅留档数据层」。
        pLines.push(
          `        { material: ${JSON.stringify(s.material ?? "")}, year: ${JSON.stringify(s.year ?? "")}, note: ${JSON.stringify(s.note ?? "")} },`,
        );
      }
      pLines.push(`      ] },`);
    }
    pLines.push(`    ],`);
    pLines.push("  },");
  }
  pLines.push("];", "");
  pLines.push(`export const ${snake.toUpperCase()}_PROJECT_COUNT = ${projects.length};`);
  pLines.push("");

  const gPath = join(PROJECT_ROOT, "src", "lib", `${brand}${CURATED_SUFFIX.models}`);
  const pPath = join(PROJECT_ROOT, "src", "lib", `${brand}${CURATED_SUFFIX.projects}`);

  // 🛑 防覆盖守卫（硬性）：若目标已存在且不是本脚本的产物，直接拒绝写
  for (const target of [gPath, pPath]) {
    if (existsSync(target)) {
      const head = readFileSync(target, "utf8").slice(0, 400);
      if (!head.includes("build-brand-curated-data.mjs")) {
        console.error(`✖ 拒绝覆盖：${relative(PROJECT_ROOT, target)} 不是本脚本的产物（可能手写或被页面引用）`);
        process.exit(1);
      }
    }
  }
  writeFileSync(gPath, gLines.join("\n"));
  writeFileSync(pPath, pLines.join("\n"));
  console.log(`\n✅ 已写：`);
  console.log(`   ${relative(PROJECT_ROOT, gPath)}`);
  console.log(`   ${relative(PROJECT_ROOT, pPath)}`);
}

/** "wey" → "Wey" ｜ "geely-galaxy" → "GeelyGalaxy" ｜ camel 形式用于变量前缀 */
function cap(s) {
  return s.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
}

main();
