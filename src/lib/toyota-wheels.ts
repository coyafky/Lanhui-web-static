// 生成物：丰田轮毂数据（旋压 / 锻造 两线款式），轮毂子页 S1 Tabs 数据源。
// 依据：specs/active/toyota-products.md §四（厂方适装表 2026.8 轮毂表）。禁止手改。

export type ToyotaWheelFinish = "spun" | "forged";

export type ToyotaWheelSpec = {
  sizeColor: string;   // "17*7.5 高亮黑"
  params: string;      // "ET40 PCD5*114.3 CB60.1"
  modelNo?: string;    // 锻造型号，如 "TJ07002"
  port?: string;       // "平口" / "锥口"（锻造）
};

export type ToyotaWheelStyle = {
  styleNo: string;      // "款式01"
  finish: ToyotaWheelFinish;
  specs: readonly ToyotaWheelSpec[];
};

export const TOYOTA_WHEEL_FINISH_LABELS: Record<ToyotaWheelFinish, string> = {
  spun: "旋压轮毂",
  forged: "锻造轮毂",
};

export const toyotaWheelStyles: readonly ToyotaWheelStyle[] = [
  { styleNo: "款式01", finish: "spun", specs: [
    { sizeColor: "17*7.5 高亮黑", params: "ET40 PCD5*114.3 CB60.1" },
    { sizeColor: "18*8 高亮黑", params: "ET40 PCD5*114.3 CB60.1" },
  ] },
  { styleNo: "款式02", finish: "spun", specs: [
    { sizeColor: "18*8 高亮黑", params: "ET40 PCD5*114.3 CB60.1" },
  ] },
  { styleNo: "款式03", finish: "spun", specs: [
    { sizeColor: "18*8 黑电镀", params: "ET40 PCD5*114.3 CB60.1" },
    { sizeColor: "19*8.5 黑电镀", params: "ET38 PCD5*114.3 CB60.1" },
  ] },
  { styleNo: "款式04", finish: "spun", specs: [
    { sizeColor: "18*8 高亮黑", params: "ET38 PCD5*114.3 CB60.1" },
    { sizeColor: "18*8 黑电镀", params: "ET38 PCD5*114.3 CB60.1" },
  ] },
  { styleNo: "款式05", finish: "spun", specs: [
    { sizeColor: "18*7.5 黑色车面", params: "ET40 PCD5*114.3 CB60.1" },
  ] },
  { styleNo: "款式06", finish: "spun", specs: [
    { sizeColor: "18*8 黑色车面", params: "ET45 PCD5*114.3 CB60.1" },
    { sizeColor: "18*8 枪灰车面", params: "ET45 PCD5*114.3 CB60.1" },
  ] },
  { styleNo: "款式07", finish: "spun", specs: [
    { sizeColor: "18*8 高亮黑", params: "ET45 PCD5*114.3 CB60.1" },
  ] },
  { styleNo: "款式01", finish: "forged", specs: [
    { sizeColor: "17*7.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07002", port: "平口" },
    { sizeColor: "18*8 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07002", port: "平口" },
    { sizeColor: "18*8 黑电镀", params: "ET35 PCD5*120 CB67.1", modelNo: "TJ24005", port: "锥口" },
    { sizeColor: "19*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07002", port: "平口" },
    { sizeColor: "19*8.5 黑电镀", params: "ET35 PCD5*120 CB60.1", modelNo: "TJ07002", port: "平口" },
    { sizeColor: "19*8.5 黑电镀", params: "ET35 PCD5*120 CB72.6", modelNo: "GZM534", port: "锥口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07002", port: "平口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*120 CB60.1", modelNo: "TJ07002", port: "平口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*120 CB72.6", modelNo: "GZM534", port: "锥口" },
  ] },
  { styleNo: "款式02", finish: "forged", specs: [
    { sizeColor: "18*8 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "DZSTT07", port: "平口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "DZSTT07", port: "平口" },
  ] },
  { styleNo: "款式03", finish: "forged", specs: [
    { sizeColor: "18*8 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07005", port: "平口" },
    { sizeColor: "19*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07005", port: "平口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07005", port: "平口" },
  ] },
  { styleNo: "款式04", finish: "forged", specs: [
    { sizeColor: "17*7.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07019", port: "平口" },
    { sizeColor: "18*8 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07019", port: "平口" },
    { sizeColor: "19*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07019", port: "平口" },
    { sizeColor: "19*8.5 黑电镀", params: "ET35 PCD5*120 CB60.1", modelNo: "TJ07019", port: "平口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07019", port: "平口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*120 CB60.1", modelNo: "TJ07019", port: "平口" },
  ] },
  { styleNo: "款式05", finish: "forged", specs: [
    { sizeColor: "20*8.5 黑色车面", params: "ET34 PCD5*150 CB110", modelNo: "TJ07001", port: "平口" },
    { sizeColor: "20*8.5 枪灰车面", params: "ET34 PCD5*150 CB110", modelNo: "TJ07001", port: "平口" },
    { sizeColor: "21*8.5 黑色车面", params: "ET40 PCD5*150 CB110", modelNo: "TJ07001", port: "平口" },
    { sizeColor: "21*8.5 枪灰车面", params: "ET40 PCD5*150 CB110", modelNo: "TJ07001", port: "平口" },
  ] },
  { styleNo: "款式06", finish: "forged", specs: [
    { sizeColor: "20*8.5 黑色车面", params: "ET35 PCD6*139.7 CB95.1", modelNo: "TJ07010", port: "平口" },
  ] },
  { styleNo: "款式07", finish: "forged", specs: [
    { sizeColor: "18*8 黑色车面", params: "ET25 PCD6*139.7 CB95.1", modelNo: "TJ07006", port: "平口" },
    { sizeColor: "18*8 黑色车面", params: "ET25 PCD6*139.7 CB106.1", modelNo: "TJ07006", port: "平口" },
    { sizeColor: "18*8 枪灰车面", params: "ET25 PCD6*139.7 CB95.1", modelNo: "TJ07006", port: "平口" },
    { sizeColor: "18*8 枪灰车面", params: "ET25 PCD6*139.7 CB106.1", modelNo: "TJ07006", port: "平口" },
    { sizeColor: "20*9 黑色车面", params: "ET20 PCD6*139.7 CB95.1", modelNo: "TJ07006", port: "平口" },
    { sizeColor: "20*9 黑色车面", params: "ET20 PCD6*139.7 CB106.1", modelNo: "TJ07006", port: "平口" },
    { sizeColor: "20*9 枪灰车面", params: "ET20 PCD6*139.7 CB95.1", modelNo: "TJ07006", port: "平口" },
    { sizeColor: "20*9 枪灰车面", params: "ET20 PCD6*139.7 CB106.1", modelNo: "TJ07006", port: "平口" },
  ] },
  { styleNo: "款式08", finish: "forged", specs: [
    { sizeColor: "18*8 黑色车面", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "18*8 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "19*8.5 黑色车面", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "19*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "19*8.5 黑色车面", params: "ET35 PCD5*120 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "19*8.5 黑电镀", params: "ET35 PCD5*120 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "20*8.5 黑色车面", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "20*8.5 黑色车面", params: "ET35 PCD5*120 CB60.1", modelNo: "TJ07035", port: "平口" },
    { sizeColor: "20*8.5 黑电镀", params: "ET35 PCD5*120 CB60.1", modelNo: "TJ07035", port: "平口" },
  ] },
  { styleNo: "款式09", finish: "forged", specs: [
    { sizeColor: "19*8.5 黑色车面", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07028", port: "平口" },
    { sizeColor: "20*8.5 黑色车面", params: "ET35 PCD5*114.3 CB60.1", modelNo: "TJ07028", port: "平口" },
  ] },
] as const;
