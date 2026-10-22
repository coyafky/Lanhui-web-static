import type { VehiclePageConfig } from "@/components/vehicle-page";
import {
  liAutoOneUpgradeProjects,
  liAutoOneScenarios,
  liAutoOneServiceSteps,
  liAutoOneFaq,
  LI_AUTO_ONE_PROJECT_COUNT,
  LI_AUTO_ONE_SCENARIO_COUNT,
} from "@/lib/li-auto-one-products";
import { li_autoFitment } from "./fitment/li-auto";

export const liAutoOnePageConfig: VehiclePageConfig = {
  theme: "blue",
  hero: {
    badge: "LI AUTO ONE UPGRADE",
    title: "理想 ONE 专属轻改方案",
    subtitle: "理想 ONE 轻改升级方案",
    description:
      "8 项实用轻改项目，覆盖漆面保护、玻璃隔热、外观焕新、后排便利、座舱氛围、上下车辅助和户外自驾拓展 5 大场景；蓝辉轻改顺德大良店到店评估、按标准流程施工。",
    heroImage: {
      src: "/images/products/li-auto/one/generated/hero.webp",
      alt: "理想 ONE 专属轻改方案主视觉",
      width: 1448,
      height: 1086,
    },
    stats: {
      totalProjects: LI_AUTO_ONE_PROJECT_COUNT,
      totalScenarios: LI_AUTO_ONE_SCENARIO_COUNT,
    },
  },
  projects: liAutoOneUpgradeProjects.map((p) => ({
    id: p.key,
    name: p.name,
    summary: p.summary,
    suitableFor: [...p.suitableFor],
    ...(p.caution ? { caution: p.caution } : {}),
    category: p.category,
    imageStatus: p.imageStatus,
    imagePublicPath: p.publicPath ?? null,
    imageAlt: p.name,
    imageWidth: p.width ?? null,
    imageHeight: p.height ?? null,
  })),
  scenarios: liAutoOneScenarios.map((s) => ({
    id: s.key,
    name: s.name,
    description: s.description,
    projectIds: [...s.projectKeys],
  })),
  serviceFlow: {
    title: "服务流程",
    steps: liAutoOneServiceSteps.map((s) => ({
      order: s.step,
      title: s.title,
      description: s.description,
    })),
  },
  faq: [...liAutoOneFaq],

  // 适配速查（供应商适配库）：ONE 专属节
  fitment: {
    heading: "理想 ONE 适配速查：你的配置能装哪些项目？",
    models: li_autoFitment.models
      .filter((m) => m.model === "ONE")
      .map((m) => ({
        model: m.model,
        projects: m.projects.map((p) => ({
          name: p.name,
          specs: [...p.specs],
        })),
      })),
  },
};
