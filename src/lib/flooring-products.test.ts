import { describe, expect, it } from "vitest";
import {
  flooringScenarios,
  flooringCoreValues,
  flooringProDetails,
  flooringVehicleGroups,
  flooringInstallNotes,
  flooringWarranties,
  flooringMaintenance,
  flooringFaqs,
  flooringDouyinHighlights,
  flooringColors,
} from "./flooring-products";

describe("flooring-products", () => {
  it("exports exactly 5 scenarios", () => {
    expect(flooringScenarios).toHaveLength(5);
  });

  it("exports exactly 3 core values", () => {
    expect(flooringCoreValues).toHaveLength(3);
  });

  it("exports exactly 4 pro details", () => {
    expect(flooringProDetails).toHaveLength(4);
  });

  it("exports exactly 4 vehicle groups", () => {
    expect(flooringVehicleGroups).toHaveLength(4);
  });

  it("exports exactly 4 install notes", () => {
    expect(flooringInstallNotes).toHaveLength(4);
  });

  it("exports exactly 4 warranties", () => {
    expect(flooringWarranties).toHaveLength(4);
  });

  it("exports exactly 3 maintenance items", () => {
    expect(flooringMaintenance).toHaveLength(3);
  });

  it("exports exactly 8 FAQs", () => {
    expect(flooringFaqs).toHaveLength(8);
  });

  it("exports exactly 3 douyin highlights", () => {
    expect(flooringDouyinHighlights).toHaveLength(3);
  });

  it("exports exactly 4 colors", () => {
    expect(flooringColors).toHaveLength(4);
  });

  it("each scenario has required fields", () => {
    for (const s of flooringScenarios) {
      expect(s.id).toBeTruthy();
      expect(s.icon).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
    }
  });

  it("each vehicle group has required fields including new fields", () => {
    for (const g of flooringVehicleGroups) {
      expect(g.id).toBeTruthy();
      expect(g.brand).toBeTruthy();
      expect(g.brandName).toBeTruthy();
      expect(g.models.length).toBeGreaterThanOrEqual(1);
      expect(g.modelYears).toBeTruthy();
      expect(g.seatLayout).toBeTruthy();
      expect(g.headline).toBeTruthy();
      expect(g.summary).toBeTruthy();
      expect(g.fitmentStatus).toBeTruthy();
      expect(g.fitmentNote).toBeTruthy();
      expect(g.installTime).toBeTruthy();
      expect(g.startingPrice).toBeTruthy();
      expect(g.colorVariants.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("each vehicle group has valid fitmentStatus", () => {
    const validStatuses = ["confirmed", "needs-review", "not-supported"];
    for (const g of flooringVehicleGroups) {
      expect(validStatuses).toContain(g.fitmentStatus);
    }
  });

  it("vehicle group summaries do not contain internal language", () => {
    for (const g of flooringVehicleGroups) {
      expect(g.summary).not.toMatch(/专题应突出|页面模板|本页只展示|应强调|应更偏/);
      expect(g.fitmentNote).not.toMatch(/本页|页面|模板/);
    }
  });

  it("each FAQ has question and answer", () => {
    for (const faq of flooringFaqs) {
      expect(faq.question).toBeTruthy();
      expect(faq.answer).toBeTruthy();
    }
  });

  it("each warranty has component, coverage, and period", () => {
    for (const w of flooringWarranties) {
      expect(w.component).toBeTruthy();
      expect(w.coverage).toBeTruthy();
      expect(w.period).toBeTruthy();
    }
  });

  it("each color variant has valid colorId", () => {
    const validColorIds = new Set(flooringColors.map((c) => c.id));
    for (const g of flooringVehicleGroups) {
      for (const cv of g.colorVariants) {
        expect(validColorIds.has(cv.colorId)).toBe(true);
      }
    }
  });

  it("each color variant has valid assetPath", () => {
    for (const g of flooringVehicleGroups) {
      for (const cv of g.colorVariants) {
        expect(cv.assetPath).toMatch(/^\/images\/products\/flooring\//);
      }
    }
  });
});
