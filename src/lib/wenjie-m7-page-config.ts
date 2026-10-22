import type { VehiclePageConfig } from "@/components/vehicle-page";
import {
  wenjieM7UpgradeProjects,
  wenjieM7Scenarios,
  wenjieM7ServiceSteps,
  wenjieM7Faq,
  type WenjieM7UpgradeCategory,
} from "./wenjie-m7-upgrade-projects";
import { wenjieFitment } from "./fitment/wenjie";

const CATEGORY_LABELS: Record<WenjieM7UpgradeCategory, string> = {
  protection: "新车保护",
  cabin_comfort: "座舱舒适",
  business_cabin: "商务座舱",
  appearance: "外观升级",
  outdoor: "户外拓展",
  electric_convenience: "电动便利",
  practical_accessory: "实用配件",
  screen_care: "屏幕保护",
  noise_sealing: "隔音密封",
};

export const wenjieM7PageConfig = {
  theme: "cyan" as const,

  hero: {
    badge: "问界 M7 · 专属升级方案",
    title: "问界 M7 专属升级方案",
    subtitle: "30 个升级项目 · 7 大用车场景",
    description:
      "围绕新车保护、底盘防护、电动踏板、后排娱乐、家庭座舱与商务接待 7 大场景整理 30 个升级项目。",
    heroImage: {
      src: "/images/products/wenjie/M7/generated/hero.webp",
      alt: "问界 M7 专属升级方案主视觉",
      width: 1448,
      height: 1086,
    },
  },

  projects: wenjieM7UpgradeProjects.map((p) => ({
    id: p.id,
    name: p.name,
    summary: p.summary,
    suitableFor: p.suitableFor as string[],
    caution: p.caution,
    category: CATEGORY_LABELS[p.category] ?? p.category,
    imageStatus: p.imageStatus === "real" ? "matched" : p.imageStatus,
    imagePublicPath: p.image.publicPath,
    imageAlt: p.name,
    imageWidth: p.image.width,
    imageHeight: p.image.height,
  })),

  scenarios: wenjieM7Scenarios.map((s) => ({
    id: s.key,
    name: s.name,
    description: s.description,
    projectIds: s.projectIds as string[],
  })),

  serviceFlow: {
    title: "服务流程",
    steps: wenjieM7ServiceSteps.map((step) => ({
      order: step.step,
      title: step.title,
      description: step.description,
    })),
  },

  faq: wenjieM7Faq.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),

  // 适配速查（供应商适配库）：M7 主节 + 22-25款/26款/增程细分节（同名项目由组件合并方案）
  fitment: {
    heading: "问界 M7 适配速查：你的配置能装哪些项目？",
    models: wenjieFitment.models
      .filter((m) =>
        ["M7", "22-25款问界M7", "26款问界M7", "M7增程"].includes(m.model),
      )
      .map((m) => ({
        model: m.model,
        projects: m.projects.map((p) => ({
          name: p.name,
          specs: [...p.specs],
        })),
      })),
  },
} satisfies VehiclePageConfig;
