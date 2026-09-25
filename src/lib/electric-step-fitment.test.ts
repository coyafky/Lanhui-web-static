import { describe, expect, it } from "vitest";
import {
  ELECTRIC_STEP_FAQ,
  ELECTRIC_STEP_FITMENT,
  ELECTRIC_STEP_SOURCE,
  ELECTRIC_STEP_UNAVAILABLE,
  getElectricStepFitmentByModelSlug,
} from "./electric-step-fitment";
import { getBrandRoute, getModelRoute } from "./product-routes";

describe("electric-step-fitment", () => {
  it("exports exactly 21 verified fitment records", () => {
    expect(ELECTRIC_STEP_FITMENT).toHaveLength(21);
  });

  it("covers 5 brands in the 4/5/3/1/8 grouping", () => {
    const order: string[] = [];
    for (const record of ELECTRIC_STEP_FITMENT) {
      if (!order.includes(record.brand)) order.push(record.brand);
    }

    expect(order).toEqual(["问界", "理想", "腾势", "岚图", "魏牌"]);
    expect(
      order.map(
        (brand) =>
          ELECTRIC_STEP_FITMENT.filter((record) => record.brand === brand).length
      )
    ).toEqual([4, 5, 3, 1, 8]);
  });

  it("keeps every key unique so anchors stay stable", () => {
    const keys = ELECTRIC_STEP_FITMENT.map((record) => record.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("has no duplicate brand + model pair", () => {
    const pairs = ELECTRIC_STEP_FITMENT.map(
      (record) => `${record.brand}|${record.model}`
    );
    expect(new Set(pairs).size).toBe(pairs.length);
  });

  it("keeps years, body and signal non-empty on every record", () => {
    for (const record of ELECTRIC_STEP_FITMENT) {
      expect(record.years.trim().length, `${record.key} years`).toBeGreaterThan(0);
      expect(record.body.trim().length, `${record.key} body`).toBeGreaterThan(0);
      expect(record.signal.trim().length, `${record.key} signal`).toBeGreaterThan(0);
    }
  });

  it("only uses the three known signal types", () => {
    const allowed = ["原厂对插", "对插", "线夹"];
    for (const record of ELECTRIC_STEP_FITMENT) {
      expect(allowed, `${record.key} signal`).toContain(record.signal);
    }
  });

  it("tags every record with the fixed source label", () => {
    expect(ELECTRIC_STEP_SOURCE).toBe("车型项目适配库 2026-09");
    for (const record of ELECTRIC_STEP_FITMENT) {
      expect(record.source).toBe(ELECTRIC_STEP_SOURCE);
    }
  });

  it("only references model pages that exist in product-routes", () => {
    for (const record of ELECTRIC_STEP_FITMENT) {
      if (record.modelSlug === null) continue;

      expect(
        record.brandSlug,
        `${record.key} needs a brandSlug when modelSlug is set`
      ).not.toBeNull();

      const brandSlug = record.brandSlug as string;
      expect(getBrandRoute(brandSlug), `${brandSlug} brand missing`).toBeDefined();

      const model = getModelRoute(brandSlug, record.modelSlug);
      expect(
        model,
        `${brandSlug}/${record.modelSlug} missing in product-routes`
      ).toBeDefined();
      expect(model?.canonicalPath).toBe(
        `/product/${brandSlug}/${record.modelSlug}`
      );
    }
  });

  it("resolves the 5 supported models via getElectricStepFitmentByModelSlug", () => {
    expect(getElectricStepFitmentByModelSlug("wenjie", "m6")?.key).toBe("wenjie-m6");
    expect(getElectricStepFitmentByModelSlug("wenjie", "m7")?.key).toBe("wenjie-m7");
    expect(getElectricStepFitmentByModelSlug("wenjie", "m8")?.key).toBe("wenjie-m8");
    expect(getElectricStepFitmentByModelSlug("li-auto", "one")?.key).toBe("li-auto-one");
    expect(getElectricStepFitmentByModelSlug("li-auto", "l9")?.key).toBe("li-auto-l9");
  });

  it("returns null when a model has no verified fitment record", () => {
    expect(getElectricStepFitmentByModelSlug("li-auto", "i6")).toBeNull();
    expect(getElectricStepFitmentByModelSlug("xiaomi", "su7")).toBeNull();
    expect(getElectricStepFitmentByModelSlug("denza", "d9")).toBeNull();
    // M9 has a fitment record but no in-site model page (modelSlug: null)
    expect(getElectricStepFitmentByModelSlug("wenjie", "m9")).toBeNull();
  });

  it("exports a non-empty unavailable list for reverse qualification", () => {
    expect(ELECTRIC_STEP_UNAVAILABLE.length).toBeGreaterThan(0);
    for (const item of ELECTRIC_STEP_UNAVAILABLE) {
      expect(item.brand.trim().length).toBeGreaterThan(0);
    }
  });

  it("exports the 4 fitment FAQ entries without price claims", () => {
    expect(ELECTRIC_STEP_FAQ).toHaveLength(4);
    for (const faq of ELECTRIC_STEP_FAQ) {
      expect(faq.question.trim().length).toBeGreaterThan(0);
      expect(faq.answer.trim().length).toBeGreaterThan(0);
      expect(faq.answer).not.toMatch(/多少钱|\d+\s*元/);
    }
  });
});
