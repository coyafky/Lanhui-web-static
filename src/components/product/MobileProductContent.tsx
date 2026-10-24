"use client";

/**
 * MobileProductContent — 移动端分段切换 + 桌面端平铺
 *
 * PRD v3 §4.4:
 * - 移动端 (< 768px): StickyTabBar 显示，仅 active tab 内容可见
 * - 桌面端 (≥ 768px): StickyTabBar 隐藏 (md:hidden), 内容区块平铺
 *
 * 用法：父组件按 tabs 顺序传入 ReactNode
 * 注意: children 顺序必须与 tabs 顺序一致
 */

import { useEffect, useState, type ReactNode } from "react";
import { StickyTabBar, type Tab } from "./StickyTabBar";

type Props = {
  tabs: readonly Tab[];
  children: ReactNode | readonly ReactNode[];
};

export function MobileProductContent({ tabs, children }: Props) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "");
  const panels = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const activateForHash = (hash: string) => {
      const targetTab = hash === "#service-projects"
        ? "project"
        : hash === "#vehicle-topics"
          ? "vehicle"
          : null;
      if (!targetTab) return;
      setActiveTab(targetTab);
      requestAnimationFrame(() => {
        document.getElementById(targetTab === "project" ? "service-projects" : "vehicle-topics")?.scrollIntoView();
      });
    };
    const syncTabWithHash = () => activateForHash(window.location.hash);
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const href = target.closest("a[href='#vehicle-topics'], a[href='#service-projects']")?.getAttribute("href");
      if (href) activateForHash(href);
    };
    syncTabWithHash();
    window.addEventListener("hashchange", syncTabWithHash);
    document.addEventListener("click", onAnchorClick);
    return () => {
      window.removeEventListener("hashchange", syncTabWithHash);
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return (
    <div>
      {/* Sticky tab — 移动端 only */}
      <div className="md:hidden">
        <StickyTabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      {/* 内容区块 — 移动端只显示 active; 桌面端全部平铺 */}
      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          id={`tab-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={tab.id}
          className={
            activeTab === tab.id ? "block" : "hidden md:block"
          }
        >
          {panels[i]}
        </div>
      ))}
    </div>
  );
}
