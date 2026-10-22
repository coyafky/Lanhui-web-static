/**
 * 品牌理念数据（/brand 品牌理念区块）
 *
 * 把三张价值卡（轻量升级 / 实用优先 / 审美表达）集中到数据层，
 * 与 `src/lib/brand.ts` 保持同一事实来源约定，页面只负责渲染。
 */

import type { LucideIcon } from "lucide-react";
import { Car, Sparkles, Wrench } from "lucide-react";

export interface BrandValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const brandValues: BrandValue[] = [
  {
    icon: Sparkles,
    title: "轻量升级",
    description:
      "在不动原车结构与日常使用习惯的前提下，给车辆带来更清晰的功能与颜值提升。",
  },
  {
    icon: Wrench,
    title: "实用优先",
    description:
      "升级方案围绕用车场景展开，不为噱头买单，注重长期使用体验。",
  },
  {
    icon: Car,
    title: "审美表达",
    description:
      "尊重原车风格，给车主提供差异化的轻改与膜系表达空间。",
  },
];
