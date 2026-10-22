import type { VehiclePageConfig } from "@/components/vehicle-page";
import type { XiaomiSu7Category } from "./xiaomi-su7-upgrade-projects";
import {
  xiaomiSu7UpgradeProjects,
  xiaomiSu7Scenarios,
  xiaomiSu7ServiceSteps,
  xiaomiSu7Faq,
  XIAOMI_SU7_PROJECT_COUNT,
  XIAOMI_SU7_SCENARIO_COUNT,
  XIAOMI_SU7_HERO_IMAGE,
} from "./xiaomi-su7-upgrade-projects";
import { xiaomiFitment } from "./fitment/xiaomi";
import { xiaomiMaterialComparison } from "./xiaomi-material-comparison";

const CATEGORY_LABELS: Record<XiaomiSu7Category, string> = {
  paint_protection: "漆面保护",
  cabin_protection: "座舱防护",
  chassis_protection: "底盘防护",
  exterior_parts: "外观件",
  film_style: "膜类风格",
  cabin_comfort: "座舱舒适",
  electric_convenience: "电动便利",
  handling: "操控",
  infotainment: "信息娱乐",
};

export const xiaomiSu7PageConfig = {
  theme: "orange" as const,

  hero: {
    badge: "小米 SU7 · 轻改方案",
    title: "小米 SU7 轻改升级方案",
    subtitle: "30+ 项升级项目 · 含碳纤维内饰 / 翻毛皮包裹 / 包围尾翼",
    description:
      "蓝辉轻改提供小米 SU7 专属轻改方案参考，共 42 项轻改项目，覆盖车衣、隔热膜、改色膜、360软包脚垫、底盘护板、碳纤维内饰、翻毛皮包裹、包围尾翼、干碳侧裙、电动尾翼、电动遮阳帘、运动风格机盖、运动方向盘等。",
    heroImage: {
      src: XIAOMI_SU7_HERO_IMAGE.publicPath,
      alt: XIAOMI_SU7_HERO_IMAGE.alt,
      width: XIAOMI_SU7_HERO_IMAGE.width,
      height: XIAOMI_SU7_HERO_IMAGE.height,
    },
    stats: {
      totalProjects: XIAOMI_SU7_PROJECT_COUNT,
      totalScenarios: XIAOMI_SU7_SCENARIO_COUNT,
    },
  },

  projectsHeading: "小米 SU7 碳纤维内饰有哪些项目？",

  projects: xiaomiSu7UpgradeProjects.map((p) => ({
    id: p.id,
    name: p.name,
    summary: p.summary,
    suitableFor: p.suitableFor as string[],
    caution: p.caution,
    category: CATEGORY_LABELS[p.category] ?? p.category,
    imageStatus: p.imageStatus,
    imagePublicPath: p.publicPath ?? null,
    imageAlt: p.name,
    imageCaption: p.imageCaption,
    modelBadge: p.modelBadge,
    imageWidth: p.width ?? null,
    imageHeight: p.height ?? null,
  })),

  materialComparison: {
    heading: "翻毛皮内饰和碳纤维内饰怎么选？",
    intro: "材质为分类参考，具体到店看样；价格到店询价（不标价）。",
    rows: xiaomiMaterialComparison.map((row) => ({
      material: row.material,
      texture: row.texture,
      care: row.care,
      durability: row.durability,
      typicalProjects: row.typicalProjects,
    })),
  },

  compliance: {
    heading: "SU7 干碳侧裙和尾翼是外观件吗？要备案吗？",
    intro: "改装合规以当地法规与车管所要求为准，蓝辉轻改可提供方案咨询。",
    items: [
      {
        title: "内饰件",
        description:
          "表台 / 门板 / 方向盘 / 踏板 / 包裹类：车内装饰加装，不改外观与结构，不涉及备案。",
      },
      {
        title: "外观件",
        description:
          "包围 / 尾翼 / 侧裙 / 换件后视镜 / 前大灯饰板：改变车身外观，备案要求以当地车管所为准，页面不做免备案承诺。",
      },
      {
        title: "电动件",
        description:
          "电动尾翼 / 电动遮阳帘：涉及电路与随动件，方案以门店实车评估为准。",
      },
    ],
  },

  scenarios: xiaomiSu7Scenarios.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    projectIds: s.projectIds as string[],
  })),

  serviceFlow: {
    title: "服务流程",
    steps: xiaomiSu7ServiceSteps.map((step) => ({
      order: step.order,
      title: step.title,
      description: step.description,
    })),
  },

  faq: xiaomiSu7Faq.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),

  // 适配速查（供应商适配库）：SU7 专属节 + 「SU7、YU7」全系节
  fitment: {
    heading: "小米 SU7 适配速查：你的配置能装哪些项目？",
    models: xiaomiFitment.models
      .filter((m) => m.model === "SU7" || m.model === "SU7、YU7")
      .map((m) => ({
        model: m.model,
        projects: m.projects.map((p) => ({
          name: p.name,
          specs: [...p.specs],
        })),
      })),
  },
} satisfies VehiclePageConfig;
