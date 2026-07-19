/**
 * 小鹏一级页数据 — vitest 单元测试
 *
 * 验证项（2026-07-15 重构）：
 *   1. 长度字面量（baseServices=6, scenarioEntries=4, steps=6, faq=8, douyin=3）
 *   2. id 唯一 / step 单调递增
 *   3. 基础服务 href 均指向已存在的产品路由
 *   4. 场景 serviceIds 均指向有效基础服务
 *   5. FAQ 无"需到店确认"式空洞话术
 *   6. GX 入口卡 topNeeds 恰 3 项，路径指向 /product/xpeng/gx
 */

import { describe, it, expect } from "vitest";

import {
  xpengBaseServices,
  xpengScenarioEntries,
  xpengSeriesServiceSteps,
  xpengSeriesFaq,
  xpengDouyinHighlights,
  XPENG_GX_ENTRY,
  xpengLocalAnswer,
} from "./xpeng-series-services";

const VALID_SERVICE_HREFS = new Set([
  "/product/ppf",
  "/product/window-film",
  "/product/color-film",
  "/product/wheels",
  "/product/electric-steps",
  "/product/flooring",
  "/product/floor-mats",
  "/product/car-care",
]);

describe("xpeng-series-services: lengths (literal constraints)", () => {
  it("base services has exactly 6 entries", () => {
    expect(xpengBaseServices).toHaveLength(6);
  });

  it("scenario entries has exactly 4 entries", () => {
    expect(xpengScenarioEntries).toHaveLength(4);
  });

  it("service steps has exactly 6 entries", () => {
    expect(xpengSeriesServiceSteps).toHaveLength(6);
  });

  it("faq has exactly 8 entries", () => {
    expect(xpengSeriesFaq).toHaveLength(8);
  });

  it("douyin highlights has exactly 3 entries", () => {
    expect(xpengDouyinHighlights).toHaveLength(3);
  });
});

describe("xpeng-series-services: base services", () => {
  it("all service ids are unique", () => {
    const ids = xpengBaseServices.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all service hrefs point to existing product routes", () => {
    for (const svc of xpengBaseServices) {
      expect(VALID_SERVICE_HREFS.has(svc.href)).toBe(true);
      for (const sub of svc.subLinks ?? []) {
        expect(VALID_SERVICE_HREFS.has(sub.href)).toBe(true);
      }
    }
  });

  it("car-film service has 3 sub links (ppf / window-film / color-film)", () => {
    const carFilm = xpengBaseServices.find((s) => s.id === "car-film");
    expect(carFilm?.subLinks).toHaveLength(3);
    expect(carFilm?.subLinks?.map((s) => s.href)).toEqual([
      "/product/ppf",
      "/product/window-film",
      "/product/color-film",
    ]);
  });

  it("each service has painPoint and suitableFor copy", () => {
    for (const svc of xpengBaseServices) {
      expect(svc.painPoint.length).toBeGreaterThan(10);
      expect(svc.suitableFor.length).toBeGreaterThan(0);
    }
  });

  it("electric-step explicitly states it is not universal for all models", () => {
    const step = xpengBaseServices.find((s) => s.id === "electric-step");
    expect(step?.painPoint).toContain("不是小鹏全系通用");
  });

  it("wheels service covers full fitment data checklist", () => {
    const wheels = xpengBaseServices.find((s) => s.id === "wheels");
    expect(wheels?.painPoint).toContain("孔距");
    expect(wheels?.painPoint).toContain("ET");
    expect(wheels?.painPoint).toContain("胎压系统");
  });
});

describe("xpeng-series-services: scenario entries", () => {
  it("all scenario ids are unique", () => {
    const ids = xpengScenarioEntries.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all scenario serviceIds reference valid base services", () => {
    const validIds = new Set(xpengBaseServices.map((s) => s.id));
    for (const scenario of xpengScenarioEntries) {
      expect(scenario.serviceIds.length).toBeGreaterThanOrEqual(2);
      for (const id of scenario.serviceIds) {
        expect(validIds.has(id)).toBe(true);
      }
    }
  });

  it("each scenario has a recommendation", () => {
    for (const scenario of xpengScenarioEntries) {
      expect(scenario.recommendation.length).toBeGreaterThan(10);
    }
  });
});

describe("xpeng-series-services: service steps", () => {
  it("steps are numbered 1..6 sequentially", () => {
    const steps = xpengSeriesServiceSteps.map((s) => s.step);
    expect(steps).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("flow covers 车型核对 / 方案边界 / 功能复检", () => {
    const titles = xpengSeriesServiceSteps.map((s) => s.title).join("");
    expect(titles).toContain("车型核对");
    expect(titles).toContain("边界");
    expect(titles).toContain("功能复检");
  });

  it("车型核对 covers sensors, wiring and mounting points", () => {
    const first = xpengSeriesServiceSteps[0];
    expect(first.description).toContain("传感器");
    expect(first.description).toContain("线束");
    expect(first.description).toContain("固定点");
  });
});

describe("xpeng-series-services: FAQ", () => {
  it("all faq entries have non-empty question and substantive answer", () => {
    for (const f of xpengSeriesFaq) {
      expect(f.question.length).toBeGreaterThan(0);
      expect(f.answer.length).toBeGreaterThan(15);
    }
  });

  it("faq answers avoid hollow deflection phrases", () => {
    for (const f of xpengSeriesFaq) {
      expect(f.answer).not.toMatch(/^需到店确认$|^不做承诺/);
    }
  });

  it("faq explains why complex projects live on the GX sub page", () => {
    const complex = xpengSeriesFaq.find((f) => f.question.includes("电动门"));
    expect(complex?.answer).toContain("GX");
  });
});

describe("xpeng-series-services: GX entry card", () => {
  it("canonical path points to the GX sub page", () => {
    expect(XPENG_GX_ENTRY.canonicalPath).toBe("/product/xpeng/gx");
  });

  it("has scenario and exactly 3 top needs", () => {
    expect(XPENG_GX_ENTRY.scenario.length).toBeGreaterThan(10);
    expect(XPENG_GX_ENTRY.topNeeds).toHaveLength(3);
  });

  it("declares confirmed and review scopes", () => {
    expect(XPENG_GX_ENTRY.confirmedScope.length).toBeGreaterThan(10);
    expect(XPENG_GX_ENTRY.reviewScope.length).toBeGreaterThan(10);
  });
});

describe("xpeng-series-services: local answer (GEO)", () => {
  it("leads with the store and services within a direct answer", () => {
    expect(xpengLocalAnswer).toContain("顺德大良");
    expect(xpengLocalAnswer.length).toBeGreaterThan(40);
  });
});
