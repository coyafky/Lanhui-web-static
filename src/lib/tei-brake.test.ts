import { describe, it, expect } from "vitest";
import {
  TEI_PRODUCTS,
  TEI_SERIES,
  getTeiProduct,
  getTeiRelated,
  teiImagePath,
} from "./tei-brake";
import { getServiceRoute } from "./product-routes";
import { existsSync } from "node:fs";
import { join } from "node:path";

describe("TEI 刹车卡钳数据层", () => {
  it("33 款产品,slug 唯一", () => {
    expect(TEI_PRODUCTS.length).toBe(33);
    const slugs = TEI_PRODUCTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(33);
  });

  it("数据层不携带任何价格字段或报价字样", () => {
    const raw = JSON.stringify(TEI_PRODUCTS);
    for (const banned of ["price", "5480", "5980", "14800", "6800", "报价", "元"]) {
      expect(raw).not.toContain(banned);
    }
  });

  it("每款产品含型号 / 说明 / 系列,安装位在合法集合内", () => {
    const validAxle = new Set(["前轮", "后轮", null]);
    for (const p of TEI_PRODUCTS) {
      expect(p.model.length).toBeGreaterThan(0);
      expect(p.description.length).toBeGreaterThan(0);
      expect(p.series.length).toBeGreaterThan(0);
      expect(validAxle.has(p.axle)).toBe(true);
    }
  });

  it("每款产品的图片文件真实存在于 public/images/products/tei/", () => {
    for (const p of TEI_PRODUCTS) {
      const file = join(process.cwd(), "public", teiImagePath(p.slug));
      expect(existsSync(file), `${p.slug} 缺少图片`).toBe(true);
    }
  });

  it("getTeiProduct 命中与 miss", () => {
    expect(getTeiProduct("p40ns")?.model).toBe("P40NS");
    expect(getTeiProduct("nope")).toBeUndefined();
  });

  it("getTeiRelated 返回同系列(排除自身,最多4个)", () => {
    const rel = getTeiRelated("p40ns");
    expect(rel.length).toBeGreaterThan(0);
    expect(rel.length).toBeLessThanOrEqual(4);
    expect(rel.every((r) => r.series === "P")).toBe(true);
    expect(rel.some((r) => r.slug === "p40ns")).toBe(false);
  });

  it("系列元数据 count 与产品实际数一致", () => {
    const total = TEI_SERIES.reduce((acc, s) => acc + s.count, 0);
    expect(total).toBe(33);
  });
});

describe("TEI 路由注册", () => {
  it("/product/tei-brake 已在产品中心注册为 live service", () => {
    const route = getServiceRoute("tei-brake");
    expect(route?.type).toBe("service_category");
    expect(route?.status).toBe("live");
    expect(route?.canonicalPath).toBe("/product/tei-brake");
  });
});
