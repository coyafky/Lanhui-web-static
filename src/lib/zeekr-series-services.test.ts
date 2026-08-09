/**
 * 极氪一级页数据 — vitest 单元测试
 *
 * 验证项（2026-07-15 重构）：
 *   1. 长度字面量（baseServices=6, steps=6, faq=8, douyin=3）
 *   2. id 唯一 / step 单调递增
 *   3. 基础服务 href 均指向已存在的产品路由
 *   4. FAQ 无"需到店确认"式空洞话术
 *   5. 车型入口文案仅含 9X / 8X（009 未发布不提供入口）
 */

import { describe, it, expect } from "vitest";

import {
  zeekrBaseServices,
  zeekrSeriesServiceSteps,
  zeekrSeriesFaq,
  zeekrDouyinHighlights,
  ZEEKR_MODEL_COPY,
} from "./zeekr-series-services";

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

describe("zeekr-series-services: lengths (literal constraints)", () => {
  it("base services has exactly 6 entries", () => {
    expect(zeekrBaseServices).toHaveLength(6);
  });

  it("service steps has exactly 6 entries", () => {
    expect(zeekrSeriesServiceSteps).toHaveLength(6);
  });

  it("faq has exactly 8 entries", () => {
    expect(zeekrSeriesFaq).toHaveLength(8);
  });

  it("douyin highlights has exactly 3 entries", () => {
    expect(zeekrDouyinHighlights).toHaveLength(3);
  });
});

describe("zeekr-series-services: base services", () => {
  it("all service ids are unique", () => {
    const ids = zeekrBaseServices.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all service hrefs point to existing product routes", () => {
    for (const svc of zeekrBaseServices) {
      expect(VALID_SERVICE_HREFS.has(svc.href)).toBe(true);
      for (const sub of svc.subLinks ?? []) {
        expect(VALID_SERVICE_HREFS.has(sub.href)).toBe(true);
      }
    }
  });

  it("car-film service has 3 sub links (ppf / window-film / color-film)", () => {
    const carFilm = zeekrBaseServices.find((s) => s.id === "car-film");
    expect(carFilm?.subLinks).toHaveLength(3);
    expect(carFilm?.subLinks?.map((s) => s.href)).toEqual([
      "/product/ppf",
      "/product/window-film",
      "/product/color-film",
    ]);
  });

  it("each service has painPoint and suitableFor copy", () => {
    for (const svc of zeekrBaseServices) {
      expect(svc.painPoint.length).toBeGreaterThan(10);
      expect(svc.suitableFor.length).toBeGreaterThan(0);
    }
  });

  it("electric-step explicitly states it is not universal for all models", () => {
    const step = zeekrBaseServices.find((s) => s.id === "electric-step");
    expect(step?.painPoint).toContain("不是极氪全系通用");
  });
});

describe("zeekr-series-services: service steps", () => {
  it("steps are numbered 1..6 sequentially", () => {
    const steps = zeekrSeriesServiceSteps.map((s) => s.step);
    expect(steps).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("flow covers 车型核对 / 方案边界 / 功能复检", () => {
    const titles = zeekrSeriesServiceSteps.map((s) => s.title).join("");
    expect(titles).toContain("车型核对");
    expect(titles).toContain("边界");
    expect(titles).toContain("功能复检");
  });

  it("车型核对 covers wheel data and seat structure", () => {
    const first = zeekrSeriesServiceSteps[0];
    expect(first.description).toContain("轮毂数据");
    expect(first.description).toContain("座椅结构");
  });
});

describe("zeekr-series-services: FAQ", () => {
  it("all faq entries have non-empty question and substantive answer", () => {
    for (const f of zeekrSeriesFaq) {
      expect(f.question.length).toBeGreaterThan(0);
      expect(f.answer.length).toBeGreaterThan(15);
    }
  });

  it("faq answers avoid hollow deflection phrases", () => {
    for (const f of zeekrSeriesFaq) {
      expect(f.answer).not.toMatch(/^需到店确认$|^不做承诺/);
    }
  });
});

describe("zeekr-series-services: model copy", () => {
  it("only 9X and 8X have model entries (009 not published)", () => {
    expect(Object.keys(ZEEKR_MODEL_COPY).sort()).toEqual(["8X", "9X"]);
  });

  it("each model has scenario and exactly 3 top needs", () => {
    for (const copy of Object.values(ZEEKR_MODEL_COPY)) {
      expect(copy.scenario.length).toBeGreaterThan(10);
      expect(copy.topNeeds).toHaveLength(3);
    }
  });
});
