/**
 * 腾势一级页数据 — vitest 单元测试
 *
 * 验证项（2026-07-15 重构）：
 *   1. 长度字面量（baseServices=6, scenarioEntries=4, steps=6, faq=8, douyin=3）
 *   2. id 唯一 / step 单调递增
 *   3. 基础服务 href 均指向已存在的产品路由
 *   4. 场景 serviceIds 均指向有效基础服务
 *   5. FAQ 无"需到店确认"式空洞话术
 *   6. D9 入口卡 topNeeds 恰 3 项，路径指向 /product/denza/d9
 */

import { describe, it, expect } from "vitest";

import {
  denzaBaseServices,
  denzaScenarioEntries,
  denzaSeriesServiceSteps,
  denzaSeriesFaq,
  denzaDouyinHighlights,
  DENZA_D9_ENTRY,
} from "./denza-series-services";

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

describe("denza-series-services: lengths (literal constraints)", () => {
  it("base services has exactly 6 entries", () => {
    expect(denzaBaseServices).toHaveLength(6);
  });

  it("scenario entries has exactly 4 entries", () => {
    expect(denzaScenarioEntries).toHaveLength(4);
  });

  it("service steps has exactly 6 entries", () => {
    expect(denzaSeriesServiceSteps).toHaveLength(6);
  });

  it("faq has exactly 8 entries", () => {
    expect(denzaSeriesFaq).toHaveLength(8);
  });

  it("douyin highlights has exactly 3 entries", () => {
    expect(denzaDouyinHighlights).toHaveLength(3);
  });
});

describe("denza-series-services: base services", () => {
  it("all service ids are unique", () => {
    const ids = denzaBaseServices.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all service hrefs point to existing product routes", () => {
    for (const svc of denzaBaseServices) {
      expect(VALID_SERVICE_HREFS.has(svc.href)).toBe(true);
      for (const sub of svc.subLinks ?? []) {
        expect(VALID_SERVICE_HREFS.has(sub.href)).toBe(true);
      }
    }
  });

  it("car-film service has 3 sub links (ppf / window-film / color-film)", () => {
    const carFilm = denzaBaseServices.find((s) => s.id === "car-film");
    expect(carFilm?.subLinks).toHaveLength(3);
    expect(carFilm?.subLinks?.map((s) => s.href)).toEqual([
      "/product/ppf",
      "/product/window-film",
      "/product/color-film",
    ]);
  });

  it("each service has painPoint and suitableFor copy", () => {
    for (const svc of denzaBaseServices) {
      expect(svc.painPoint.length).toBeGreaterThan(10);
      expect(svc.suitableFor.length).toBeGreaterThan(0);
    }
  });

  it("electric-step explicitly states it is not universal for all models", () => {
    const step = denzaBaseServices.find((s) => s.id === "electric-step");
    expect(step?.painPoint).toContain("不是腾势全系通用");
  });

  it("flooring service addresses MPV slide-rail cleaning pain point", () => {
    const flooring = denzaBaseServices.find((s) => s.id === "flooring");
    expect(flooring?.painPoint).toContain("滑轨");
  });

  it("wheels service covers full fitment data checklist", () => {
    const wheels = denzaBaseServices.find((s) => s.id === "wheels");
    expect(wheels?.painPoint).toContain("孔距");
    expect(wheels?.painPoint).toContain("ET");
    expect(wheels?.painPoint).toContain("胎压系统");
  });
});

describe("denza-series-services: scenario entries", () => {
  it("all scenario ids are unique", () => {
    const ids = denzaScenarioEntries.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("includes MPV-specific family and business scenarios", () => {
    const ids = denzaScenarioEntries.map((s) => s.id);
    expect(ids).toContain("family");
    expect(ids).toContain("business");
  });

  it("all scenario serviceIds reference valid base services", () => {
    const validIds = new Set(denzaBaseServices.map((s) => s.id));
    for (const scenario of denzaScenarioEntries) {
      expect(scenario.serviceIds.length).toBeGreaterThanOrEqual(2);
      for (const id of scenario.serviceIds) {
        expect(validIds.has(id)).toBe(true);
      }
    }
  });

  it("each scenario has a recommendation", () => {
    for (const scenario of denzaScenarioEntries) {
      expect(scenario.recommendation.length).toBeGreaterThan(10);
    }
  });
});

describe("denza-series-services: service steps", () => {
  it("steps are numbered 1..6 sequentially", () => {
    const steps = denzaSeriesServiceSteps.map((s) => s.step);
    expect(steps).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("flow covers 车型核对 / 方案边界 / 功能复检", () => {
    const titles = denzaSeriesServiceSteps.map((s) => s.title).join("");
    expect(titles).toContain("车型核对");
    expect(titles).toContain("边界");
    expect(titles).toContain("功能复检");
  });

  it("车型核对 covers seat mounting points, slide rails and wiring", () => {
    const first = denzaSeriesServiceSteps[0];
    expect(first.description).toContain("座椅固定点");
    expect(first.description).toContain("滑轨");
    expect(first.description).toContain("线束");
  });
});

describe("denza-series-services: FAQ", () => {
  it("all faq entries have non-empty question and substantive answer", () => {
    for (const f of denzaSeriesFaq) {
      expect(f.question.length).toBeGreaterThan(0);
      expect(f.answer.length).toBeGreaterThan(15);
    }
  });

  it("faq answers avoid hollow deflection phrases", () => {
    for (const f of denzaSeriesFaq) {
      expect(f.answer).not.toMatch(/^需到店确认$|^不做承诺/);
    }
  });

  it("faq explains why complex projects live on the D9 sub page", () => {
    const complex = denzaSeriesFaq.find((f) => f.question.includes("吸顶电视"));
    expect(complex?.answer).toContain("D9");
  });
});

describe("denza-series-services: D9 entry card", () => {
  it("canonical path points to the D9 sub page", () => {
    expect(DENZA_D9_ENTRY.canonicalPath).toBe("/product/denza/d9");
  });

  it("has scenario and exactly 3 top needs", () => {
    expect(DENZA_D9_ENTRY.scenario.length).toBeGreaterThan(10);
    expect(DENZA_D9_ENTRY.topNeeds).toHaveLength(3);
  });

  it("scenario highlights family and business dual use cases", () => {
    expect(DENZA_D9_ENTRY.scenario).toContain("家庭");
    expect(DENZA_D9_ENTRY.scenario).toContain("商务");
  });

  it("declares confirmed and review scopes", () => {
    expect(DENZA_D9_ENTRY.confirmedScope.length).toBeGreaterThan(10);
    expect(DENZA_D9_ENTRY.reviewScope.length).toBeGreaterThan(10);
  });
});
