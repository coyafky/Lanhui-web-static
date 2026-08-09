/**
 * 问界系列专题页数据 — vitest 单元测试
 *
 * 验证项（2026-07-15 重构后）：
 *   1. 长度字面量（featured=10, optional=24, baseServices=6, steps=6, faq=8, douyin=3）
 *   2. key 唯一 / order 单调递增
 *   3. 基础服务 href 均指向已存在的产品路由
 *   4. FAQ 无"需到店确认"式空洞话术
 */

import { describe, it, expect } from "vitest";

import {
  wenjieSeriesFeaturedProjects,
  wenjieSeriesOptionalProjects,
  wenjieBaseServices,
  wenjieSeriesServiceSteps,
  wenjieSeriesFaq,
  wenjieDouyinHighlights,
} from "./wenjie-series-upgrade-projects";

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

describe("wenjie-series-upgrade-projects: lengths (literal constraints)", () => {
  it("featured has exactly 10 projects", () => {
    expect(wenjieSeriesFeaturedProjects).toHaveLength(10);
  });

  it("optional has exactly 24 projects", () => {
    expect(wenjieSeriesOptionalProjects).toHaveLength(24);
  });

  it("base services has exactly 6 entries", () => {
    expect(wenjieBaseServices).toHaveLength(6);
  });

  it("service steps has exactly 6 entries", () => {
    expect(wenjieSeriesServiceSteps).toHaveLength(6);
  });

  it("faq has exactly 8 entries", () => {
    expect(wenjieSeriesFaq).toHaveLength(8);
  });

  it("douyin highlights has exactly 3 entries", () => {
    expect(wenjieDouyinHighlights).toHaveLength(3);
  });
});

describe("wenjie-series-upgrade-projects: base services", () => {
  it("all service ids are unique", () => {
    const ids = wenjieBaseServices.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all service hrefs point to existing product routes", () => {
    for (const svc of wenjieBaseServices) {
      expect(VALID_SERVICE_HREFS.has(svc.href)).toBe(true);
      for (const sub of svc.subLinks ?? []) {
        expect(VALID_SERVICE_HREFS.has(sub.href)).toBe(true);
      }
    }
  });

  it("car-film service has 3 sub links (ppf / window-film / color-film)", () => {
    const carFilm = wenjieBaseServices.find((s) => s.id === "car-film");
    expect(carFilm?.subLinks).toHaveLength(3);
    expect(carFilm?.subLinks?.map((s) => s.href)).toEqual([
      "/product/ppf",
      "/product/window-film",
      "/product/color-film",
    ]);
  });

  it("each service has painPoint and suitableFor copy", () => {
    for (const svc of wenjieBaseServices) {
      expect(svc.painPoint.length).toBeGreaterThan(10);
      expect(svc.suitableFor.length).toBeGreaterThan(0);
    }
  });
});

describe("wenjie-series-upgrade-projects: featured projects invariants", () => {
  it("all featured keys are unique", () => {
    const keys = wenjieSeriesFeaturedProjects.map((p) => p.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("all featured orders are strictly increasing 1..10", () => {
    const orders = wenjieSeriesFeaturedProjects.map((p) => p.order);
    expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("all featured priorities are 'featured'", () => {
    expect(
      wenjieSeriesFeaturedProjects.every((p) => p.priority === "featured"),
    ).toBe(true);
  });
});

describe("wenjie-series-upgrade-projects: optional projects invariants", () => {
  it("all optional keys are unique", () => {
    const keys = wenjieSeriesOptionalProjects.map((p) => p.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("all optional orders are strictly increasing 11..34", () => {
    const orders = wenjieSeriesOptionalProjects.map((p) => p.order);
    expect(orders).toEqual(Array.from({ length: 24 }, (_, i) => i + 11));
  });

  it("all projects have product preview images", () => {
    const withImages = [...wenjieSeriesFeaturedProjects, ...wenjieSeriesOptionalProjects]
      .filter((p) => p.imageStatus !== "missing");
    for (const p of withImages) {
      expect(p.image.publicPath).toMatch(/^\/images\/products\/wenjie\/generated\/series-.+\.webp$/);
      expect(p.image.width).toBe(1448);
      expect(p.image.height).toBe(1086);
      expect(p.image.aspectRatio).toBe("4/3");
    }
  });

  it("featured and optional keys do not collide", () => {
    const featuredKeys = new Set<string>(
      wenjieSeriesFeaturedProjects.map((p) => p.key),
    );
    for (const p of wenjieSeriesOptionalProjects) {
      expect(featuredKeys.has(p.key)).toBe(false);
    }
  });
});

describe("wenjie-series-upgrade-projects: service steps", () => {
  it("steps are numbered 1..6 sequentially", () => {
    const steps = wenjieSeriesServiceSteps.map((s) => s.step);
    expect(steps).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("flow covers 车型核对 / 方案边界 / 功能复检", () => {
    const titles = wenjieSeriesServiceSteps.map((s) => s.title).join("");
    expect(titles).toContain("车型核对");
    expect(titles).toContain("边界");
    expect(titles).toContain("功能复检");
  });
});

describe("wenjie-series-upgrade-projects: FAQ", () => {
  it("all faq entries have non-empty question and substantive answer", () => {
    for (const f of wenjieSeriesFaq) {
      expect(f.question.length).toBeGreaterThan(0);
      expect(f.answer.length).toBeGreaterThan(15);
    }
  });

  it("faq answers avoid hollow deflection phrases", () => {
    for (const f of wenjieSeriesFaq) {
      expect(f.answer).not.toMatch(/^需到店确认$|^不做承诺/);
    }
  });
});
