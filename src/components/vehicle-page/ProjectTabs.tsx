"use client";

import { useMemo, useState } from "react";
import type { ProjectConfig, VehicleTheme } from "./vehicle-page.schema";
import { ProjectGrid } from "./ProjectGrid";

interface ProjectTabsProps {
  projects: ProjectConfig[];
  theme: VehicleTheme;
}

/**
 * 项目 Tab 分组容器（解决移动端长页面滚动疲劳 + 图片白屏）
 *
 * 按项目的 category 分组，一次只渲染一个分类：
 * - 移动端不再需要划过 30 个同构卡片
 * - 非当前分类的图片不进入 DOM → 图片按需加载，缓解白屏
 * - 桌面端行为不变（保留"全部"Tab）
 */
export function ProjectTabs({ projects, theme }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<string>("全部");

  // 提取分类（保持出现顺序）
  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const p of projects) {
      const c = p.category || "其他";
      if (!seen.includes(c)) seen.push(c);
    }
    return ["全部", ...seen];
  }, [projects]);

  const visibleProjects = useMemo(() => {
    if (activeTab === "全部") return projects;
    return projects.filter((p) => (p.category || "其他") === activeTab);
  }, [projects, activeTab]);

  // 无分类或只有一种分类时，退化为原行为（不显示 Tab）
  if (categories.length <= 2) {
    return <ProjectGrid projects={projects} theme={theme} />;
  }

  const tabText =
    theme === "orange" ? "text-orange-400 border-orange-400/60" :
    theme === "cyan" ? "text-cyan-400 border-cyan-400/60" :
    theme === "amber" ? "text-amber-400 border-amber-400/60" :
    theme === "blue" ? "text-blue-400 border-blue-400/60" :
    theme === "green" ? "text-emerald-400 border-emerald-400/60" :
    theme === "red" ? "text-red-400 border-red-400/60" :
    "text-zinc-300 border-zinc-500";

  const tabInactive = "text-zinc-400 border-transparent hover:text-zinc-200 hover:border-zinc-700";

  return (
    <div>
      {/* Tab 栏：移动端横向滚动，桌面居中 */}
      <div className="sticky top-0 z-30 -mx-4 px-4 sm:mx-0 sm:px-0 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-900">
        <div
          role="tablist"
          aria-label="升级项目分类"
          className="flex gap-2 overflow-x-auto pb-3 pt-2 scrollbar-none sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={activeTab === c}
              onClick={() => setActiveTab(c)}
              className={`shrink-0 inline-flex items-center justify-center min-h-[44px] px-4 rounded-full border text-sm font-medium transition-colors ${
                activeTab === c ? tabText : tabInactive
              }`}
            >
              {c}
              <span className="ml-1.5 text-xs opacity-60">
                {c === "全部" ? projects.length : projects.filter((p) => (p.category || "其他") === c).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 分组渲染：切换 Tab 时自动触发图片按需加载 */}
      <ProjectGrid projects={visibleProjects} theme={theme} />
    </div>
  );
}
