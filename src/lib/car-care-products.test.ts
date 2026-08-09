import { describe, expect, it } from "vitest";
import {
  carCareScenarios,
  carCareServiceDetails,
  carCareProcess,
  carCareFaqs,
} from "./car-care-products";

describe("car-care-products", () => {
  it("exports exactly 3 scenarios", () => {
    expect(carCareScenarios).toHaveLength(3);
  });
  it("exports the 3 confirmed service lines", () => {
    expect(carCareServiceDetails).toHaveLength(3);
    expect(carCareServiceDetails.map((service) => service.title)).toEqual([
      "普洗",
      "精洗",
      "轮毂定向清洗",
    ]);
  });
  it("exports exactly 4 process steps", () => {
    expect(carCareProcess).toHaveLength(4);
    for (const step of carCareProcess) {
      expect(step.step).toMatch(/^\d{2}$/);
      expect(step.title).toBeTruthy();
      expect(step.description).toBeTruthy();
    }
  });
  it("exports exactly 4 FAQs", () => {
    expect(carCareFaqs).toHaveLength(4);
  });
  it("each scenario has required fields", () => {
    for (const s of carCareScenarios) {
      expect(s.id).toBeTruthy();
      expect(s.icon).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
    }
  });
  it("each service detail has required fields including extensions", () => {
    for (const svc of carCareServiceDetails) {
      expect(svc.id).toBeTruthy();
      expect(svc.title).toBeTruthy();
      expect(svc.subtitle).toBeTruthy();
      expect(svc.description).toBeTruthy();
      expect(svc.highlights.length).toBeGreaterThanOrEqual(3);
      expect(svc.suitableFor).toBeTruthy();
      expect(svc.timeRange).toBeTruthy();
      expect(svc.priceNote).toBeTruthy();
    }
  });
  it("service copy stays within the confirmed service lines", () => {
    for (const svc of carCareServiceDetails) {
      const copy = [
        svc.title,
        svc.description,
        svc.suitableFor,
        ...svc.highlights,
      ].join(" ");
      expect(copy).not.toMatch(/内饰深度清洁|玻璃油膜去除|发动机舱/);
    }
  });
  it("does not include removed exclusion fields", () => {
    for (const service of carCareServiceDetails) {
      expect(service).not.toHaveProperty("exclusions");
    }
  });
});
