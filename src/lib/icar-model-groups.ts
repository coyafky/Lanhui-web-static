export type IcarModelGroupKey = "ev" | "e-range";

export const ICAR_MODEL_GROUP_LABELS: Record<IcarModelGroupKey, string> = {
  ev: "纯电 · 方盒子SUV",
  "e-range": "增程 · 方盒子SUV",
};

export const ICAR_MODEL_GROUPS: IcarModelGroupKey[] = ["ev", "e-range"];

export interface IcarModel {
  slug: string;
  name: string;
  group: IcarModelGroupKey;
  projects: string[];
}

export const icarModels: IcarModel[] = [
  { slug: "03", name: "iCAR 03", group: "ev", projects: ["底盘护板"] },
  { slug: "v23", name: "iCAR V23", group: "ev", projects: ["底盘护板"] },
  { slug: "v23s", name: "iCAR V23S", group: "ev", projects: ["底盘护板"] },
  { slug: "v27", name: "iCAR V27", group: "e-range", projects: ["底盘护板"] },
];
