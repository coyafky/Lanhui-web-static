import type { VehiclePageConfig } from "@/components/vehicle-page";
import {
  xiaomiYu7UpgradeProjects,
  xiaomiYu7Scenarios,
  xiaomiYu7ServiceSteps,
  xiaomiYu7Faq,
  XIAOMI_YU7_PROJECT_COUNT,
  XIAOMI_YU7_SCENARIO_COUNT,
  XIAOMI_YU7_HERO_IMAGE,
} from "./xiaomi-yu7-upgrade-projects";
import { xiaomiFitment } from "./fitment/xiaomi";
import { xiaomiMaterialComparison } from "./xiaomi-material-comparison";

const CATEGORY_LABELS: Record<string, string> = {
  cabin_protection: "座舱防护",
  chassis_protection: "底盘防护",
  exterior_parts: "外观件",
  film_style: "膜类风格",
  cabin_comfort: "座舱舒适",
  electric_convenience: "电动便利",
  handling: "操控",
};

export const xiaomiYu7PageConfig = {
  theme: "orange" as const,

  breadcrumbs: [
    { label: "首页", href: "/" },
    { label: "产品中心", href: "/product" },
    { label: "小米系列", href: "/product/xiaomi" },
    { label: "小米 YU7" },
  ],

  hero: {
    badge: "小米 YU7 · 轻改方案",
    title: "小米 YU7 轻改升级方案",
    subtitle: "30+ 项升级项目 · 含碳纤维内饰 / 翻毛皮包裹 / 包围尾翼",
    description:
      "蓝辉轻改整理小米 YU7 轻改项目参考，覆盖碳纤维表台饰板、碳纤维出风口、碳纤维方向盘、四门门板翻毛皮、中控仪表台包裹、座椅皮套等碳纤维内饰与翻毛皮包裹，以及干碳侧裙、碳纤维后扰流板、碳纤维鸭尾、运动包围等包围尾翼外观件，共 30 项，具体适配以门店实车评估为准。",
    heroImage: {
      src: XIAOMI_YU7_HERO_IMAGE.publicPath,
      alt: XIAOMI_YU7_HERO_IMAGE.alt,
      width: XIAOMI_YU7_HERO_IMAGE.width,
      height: XIAOMI_YU7_HERO_IMAGE.height,
    },
    stats: {
      totalProjects: XIAOMI_YU7_PROJECT_COUNT,
      totalScenarios: XIAOMI_YU7_SCENARIO_COUNT,
    },
  },

  projectsHeading: "小米 YU7 碳纤维表台饰板能装吗？",

  materialComparison: {
    heading: "翻毛皮内饰和碳纤维内饰怎么选？",
    intro: "材质为分类参考，具体到店看样；价格到店询价（不标价）。",
    rows: [...xiaomiMaterialComparison],
  },

  projects: xiaomiYu7UpgradeProjects.map((p) => ({
    id: p.id,
    name: p.name,
    summary: p.summary,
    suitableFor: p.suitableFor as string[],
    caution: p.caution,
    category: CATEGORY_LABELS[p.category] ?? p.category,
    imageStatus: p.imageStatus,
    imagePublicPath: p.publicPath ?? null,
    imageAlt: p.name,
    imageWidth: p.width ?? null,
    imageHeight: p.height ?? null,
    imageCaption: p.imageCaption,
    modelBadge: p.modelBadge,
  })),

  scenarios: xiaomiYu7Scenarios.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    projectIds: s.projectIds as string[],
  })),

  serviceFlow: {
    title: "服务流程",
    steps: xiaomiYu7ServiceSteps.map((step) => ({
      order: step.order,
      title: step.title,
      description: step.description,
    })),
  },

  faq: xiaomiYu7Faq.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),

  compliance: {
    heading: "YU7 改装包围、尾翼要备案吗？",
    intro: "改装合规以当地法规与车管所要求为准，蓝辉轻改可提供方案咨询。",
    items: [
      {
        title: "内饰件（表台 / 门板 / 方向盘 / 踏板 / 包裹类）",
        description: "车内装饰加装，不改外观与结构，不涉及备案。",
      },
      {
        title: "外观件（包围 / 尾翼 / 侧裙 / 换件后视镜 / 前大灯饰板）",
        description:
          "改变车身外观，备案要求以当地车管所为准，页面不做免备案承诺。",
      },
      {
        title: "电动件（电动尾翼 / 电动遮阳帘）",
        description: "涉及电路与随动件，方案以门店实车评估为准。",
      },
    ],
  },

  // 适配速查（供应商适配库）：YU7 专属节 + 「SU7、YU7」全系节
  fitment: {
    heading: "小米 YU7 适配速查：你的配置能装哪些项目？",
    models: xiaomiFitment.models
      .filter((m) => m.model === "YU7" || m.model === "SU7、YU7")
      .map((m) => ({
        model: m.model,
        projects: m.projects.map((p) => ({
          name: p.name,
          specs: [...p.specs],
        })),
      })),
  },
} satisfies VehiclePageConfig;
