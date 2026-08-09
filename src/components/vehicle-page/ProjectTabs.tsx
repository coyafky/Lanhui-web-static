"use client";

import { useMemo, useState } from "react";
import type { ProjectConfig, VehicleTheme } from "./vehicle-page.schema";
import { ProjectGrid } from "./ProjectGrid";

interface ProjectTabsProps {
  projects: ProjectConfig[];
  theme: VehicleTheme;
}

/* ------------------------------------------------------------------ */
/* 分类归一化：把各车型的细分类（英文 key 或中文 label）归入 4 大 Tab   */
/* ------------------------------------------------------------------ */

/** 4 大 Tab 定义（移动端一屏放得下，无需横向滚动） */
const TABS = [
  { id: "全部", label: "全部" },
  { id: "protection", label: "新车保护" },
  { id: "appearance", label: "外观升级" },
  { id: "interior", label: "内饰座舱" },
  { id: "function", label: "功能便利" },
] as const;

type TabId = (typeof TABS)[number]["id"];

/** 英文 category key → 大类 */
const EN_CATEGORY_MAP: Record<string, TabId> = {
  // 新车保护
  protection: "protection",
  paint_protection: "protection",
  chassis_protection: "protection",
  cabin_protection: "protection",
  driving_protection: "protection",
  interior_protection: "protection",
  chassis: "protection",
  film: "protection",
  film_style: "appearance",
  // 外观升级
  appearance: "appearance",
  exterior_parts: "appearance",
  exterior: "appearance",
  exterior_style: "appearance",
  business_appearance: "appearance",
  exterior_detail: "appearance",
  lighting: "appearance",
  // 内饰座舱
  cabin_comfort: "interior",
  interior: "interior",
  interior_care: "interior",
  rear_cabin: "interior",
  family_cabin: "interior",
  business_cabin: "interior",
  mpv_comfort: "interior",
  cabin_atmosphere: "interior",
  screen_care: "interior",
  detail_care: "interior",
  infotainment: "interior",
  cabin_care: "interior",
  // 功能便利
  electric_convenience: "function",
  practical_accessory: "function",
  outdoor_accessory: "function",
  outdoor: "function",
  accessibility: "function",
  noise_sealing: "function",
  handling: "function",
};

/** 中文 label → 大类（关键词规则，兼容传中文 label 的车型） */
function mapChineseCategory(cat: string): TabId {
  if (cat.includes("保护") || cat.includes("膜") || cat.includes("底盘") || cat.includes("防护")) {
    return "protection";
  }
  if (cat.includes("外观") || cat.includes("灯") || cat.includes("拉花") || cat.includes("轮毂") || cat.includes("包围") || cat.includes("风格")) {
    return "appearance";
  }
  if (cat.includes("座舱") || cat.includes("内饰") || cat.includes("舒适") || cat.includes("屏幕") || cat.includes("细节") || cat.includes("娱乐") || cat.includes("氛围") || cat.includes("养护") || cat.includes("隔音")) {
    return "interior";
  }
  if (cat.includes("电动") || cat.includes("便利") || cat.includes("户外") || cat.includes("实用") || cat.includes("操控") || cat.includes("拓展") || cat.includes("踏板")) {
    return "function";
  }
  // 兜底：归入功能便利（保持有处可去）
  return "function";
}

/** 归一化入口：英文 key 查表，中文 label 关键词，其他兜底 */
function normalizeCategory(category: string): TabId {
  const c = category.trim();
  // 英文 key（小写 + 下划线形态）
  if (/^[a-z_]+$/.test(c) && EN_CATEGORY_MAP[c]) {
    return EN_CATEGORY_MAP[c];
  }
  return mapChineseCategory(c);
}

/** 各 Tab 对应的分类中文名（用于统计角标文案） */
const TAB_LABELS: Record<TabId, string> = {
  全部: "全部",
  protection: "新车保护",
  appearance: "外观升级",
  interior: "内饰座舱",
  function: "功能便利",
};

/* ------------------------------------------------------------------ */
/* 组件                                                               */
/* ------------------------------------------------------------------ */

/**
 * 项目 Tab 分组容器（解决移动端长页面滚动疲劳 + 图片白屏）
 *
 * - 按归一化后的 4 大分类（新车保护/外观升级/内饰座舱/功能便利）Tab 切换
 * - 一次只渲染一个分类：移动端无需划过 30 个同构卡片
 * - 非当前分类的图片不进入 DOM → 图片按需加载，缓解白屏
 * - 桌面端保留"全部"Tab，行为不变
 */
export function ProjectTabs({ projects, theme }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("全部");

  // 归一化 + 分组（保持 Tab 顺序固定）
  const grouped = useMemo(() => {
    const map = new Map<TabId, ProjectConfig[]>();
    for (const t of TABS) map.set(t.id, []);
    for (const p of projects) {
      const tab = normalizeCategory(p.category);
      map.get(tab)!.push(p);
    }
    return map;
  }, [projects]);

  // 是否真的需要 Tab（所有项目归一化后只落在一个分类 → 退化原列表）
  const nonEmptyTabs = TABS.filter((t) => t.id !== "全部" && grouped.get(t.id)!.length > 0);
  if (nonEmptyTabs.length <= 1) {
    return <ProjectGrid projects={projects} theme={theme} />;
  }

  const visibleProjects =
    activeTab === "全部" ? projects : (grouped.get(activeTab) ?? []);

  const tabActive =
    theme === "orange" ? "text-orange-400 border-orange-400/60 bg-orange-500/10" :
    theme === "cyan" ? "text-cyan-400 border-cyan-400/60 bg-cyan-500/10" :
    theme === "amber" ? "text-amber-400 border-amber-400/60 bg-amber-500/10" :
    theme === "blue" ? "text-blue-400 border-blue-400/60 bg-blue-500/10" :
    theme === "green" ? "text-emerald-400 border-emerald-400/60 bg-emerald-500/10" :
    theme === "red" ? "text-red-400 border-red-400/60 bg-red-500/10" :
    "text-zinc-300 border-zinc-500 bg-zinc-500/10";

  const tabInactive = "text-zinc-400 border-transparent hover:text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900";

  return (
    <div className="relative">
      {/* Tab 栏：移动端也无需横向滚动（5 个以内），吸顶便于切换 */}
      <div className="sticky top-16 z-30 -mx-4 px-4 sm:mx-0 sm:px-0 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-900 overflow-hidden">
        <div
          role="tablist"
          aria-label="升级项目分类"
          className="flex gap-2 py-3 overflow-x-auto sm:justify-center sm:flex-wrap scrollbar-hide"
        >
          {TABS.map((t) => {
            const count =
              t.id === "全部" ? projects.length : grouped.get(t.id)!.length;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(t.id)}
                className={`shrink-0 inline-flex items-center justify-center min-h-[44px] px-4 rounded-full border text-sm font-medium transition-colors ${
                  isActive ? tabActive : tabInactive
                }`}
              >
                {t.label}
                <span className="ml-1.5 text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 分组渲染：切换 Tab 时自动触发图片按需加载 */}
      <ProjectGrid projects={visibleProjects} theme={theme} />
    </div>
  );
}

export { TAB_LABELS };
