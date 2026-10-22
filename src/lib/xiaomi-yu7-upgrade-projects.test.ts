import { describe, expect, it } from "vitest";

import {
  XIAOMI_YU7_PROJECT_COUNT,
  XIAOMI_YU7_SCENARIO_COUNT,
  XIAOMI_YU7_SERVICE_STEP_COUNT,
  XIAOMI_YU7_FAQ_COUNT,
  xiaomiYu7UpgradeProjects,
  xiaomiYu7Scenarios,
  xiaomiYu7ServiceSteps,
  xiaomiYu7Faq,
} from "./xiaomi-yu7-upgrade-projects";

describe("Xiaomi YU7 data shape", () => {
  describe("数组长度字面量对齐", () => {
    it(`projects.length === ${XIAOMI_YU7_PROJECT_COUNT}`, () => {
      expect(xiaomiYu7UpgradeProjects).toHaveLength(XIAOMI_YU7_PROJECT_COUNT);
    });
    it(`scenarios.length === ${XIAOMI_YU7_SCENARIO_COUNT}`, () => {
      expect(xiaomiYu7Scenarios).toHaveLength(XIAOMI_YU7_SCENARIO_COUNT);
    });
    it(`serviceSteps.length === ${XIAOMI_YU7_SERVICE_STEP_COUNT}`, () => {
      expect(xiaomiYu7ServiceSteps).toHaveLength(XIAOMI_YU7_SERVICE_STEP_COUNT);
    });
    it(`faq.length === ${XIAOMI_YU7_FAQ_COUNT}`, () => {
      expect(xiaomiYu7Faq).toHaveLength(XIAOMI_YU7_FAQ_COUNT);
    });
  });

  describe("30 项项目字段防漂移", () => {
    it("id 唯一", () => {
      const ids = xiaomiYu7UpgradeProjects.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it("order 严格单调递增", () => {
      for (let i = 1; i < xiaomiYu7UpgradeProjects.length; i++) {
        expect(xiaomiYu7UpgradeProjects[i].order).toBeGreaterThan(
          xiaomiYu7UpgradeProjects[i - 1].order
        );
      }
    });

    it("imageStatus ∈ {product-preview, matched}，且 matched 数量 = 21", () => {
      const allowed = ["product-preview", "matched"] as const;
      let matchedCount = 0;
      for (const p of xiaomiYu7UpgradeProjects) {
        expect(allowed).toContain(p.imageStatus);
        if (p.imageStatus === "matched") matchedCount++;
      }
      expect(matchedCount).toBe(21);
    });

    it("原有 9 项（xy-01~xy-09）为 product-preview", () => {
      const legacy = xiaomiYu7UpgradeProjects.filter((p) =>
        p.id.startsWith("xy-")
      );
      expect(legacy).toHaveLength(9);
      for (const p of legacy) {
        expect(p.imageStatus).toBe("product-preview");
      }
    });

    it("所有项目有非空 imageCaption", () => {
      for (const p of xiaomiYu7UpgradeProjects) {
        expect(p.imageCaption?.trim().length).toBeGreaterThan(0);
      }
    });

    it("modelBadge ∈ {SU7, YU7, 双车型}", () => {
      const allowed = ["SU7", "YU7", "双车型"] as const;
      for (const p of xiaomiYu7UpgradeProjects) {
        expect(allowed).toContain(p.modelBadge);
      }
    });

    it("新增 21 项 id 为 yu-22~yu-42，order 22~42", () => {
      const added = xiaomiYu7UpgradeProjects.filter((p) =>
        p.id.startsWith("yu-")
      );
      expect(added).toHaveLength(21);
      const expectedIds = Array.from({ length: 21 }, (_, i) => `yu-${22 + i}`);
      const expectedOrders = Array.from({ length: 21 }, (_, i) => 22 + i);
      expect(added.map((p) => p.id)).toEqual(expectedIds);
      expect(added.map((p) => p.order)).toEqual(expectedOrders);
      for (const p of added) {
        expect(p.imageStatus).toBe("matched");
        expect(p.publicPath).toMatch(/^\/images\/products\/xiaomi\/yu7\/.+\.webp$/);
      }
    });

    it("所有项目有非空 name", () => {
      for (const p of xiaomiYu7UpgradeProjects) {
        expect(p.name.trim().length).toBeGreaterThan(0);
      }
    });

    it("所有项目有非空 summary", () => {
      for (const p of xiaomiYu7UpgradeProjects) {
        expect(p.summary.trim().length).toBeGreaterThan(0);
      }
    });

    it("所有项目有非空 suitableFor", () => {
      for (const p of xiaomiYu7UpgradeProjects) {
        expect(p.suitableFor.length).toBeGreaterThan(0);
      }
    });

    it("所有项目的 sourceArea 正确", () => {
      for (const p of xiaomiYu7UpgradeProjects) {
        expect(p.sourceArea).toBe("poster_project_matrix");
      }
    });

    it("category 是已知值", () => {
      const valid = ["cabin_protection", "chassis_protection", "exterior_parts", "film_style", "cabin_comfort", "electric_convenience", "handling"] as const;
      for (const p of xiaomiYu7UpgradeProjects) {
        expect(valid).toContain(p.category);
      }
    });
  });

  describe("5 场景数据完整性", () => {
    it("每个场景有非空 name", () => {
      for (const s of xiaomiYu7Scenarios) {
        expect(s.name.trim().length).toBeGreaterThan(0);
      }
    });

    it("每个场景引用已存在的 project id", () => {
      const validIds = new Set(xiaomiYu7UpgradeProjects.map((p) => p.id));
      for (const s of xiaomiYu7Scenarios) {
        for (const pid of s.projectIds) {
          expect(validIds.has(pid), `scenario ${s.id} references unknown ${pid}`).toBe(true);
        }
      }
    });

    it("场景 id 唯一", () => {
      const ids = xiaomiYu7Scenarios.map((s) => s.id);
      expect(new Set(ids).size).toBe(ids.length);
    });
  });

  describe("6 步服务流程（无方案确认）", () => {
    it("order 严格 1..6", () => {
      xiaomiYu7ServiceSteps.forEach((s, i) => {
        expect(s.order).toBe(i + 1);
      });
    });

    it("没有方案确认步骤", () => {
      const titles = xiaomiYu7ServiceSteps.map((s) => s.title);
      expect(titles).not.toContain("方案确认");
    });

    it("每步有非空 title 和 description", () => {
      for (const s of xiaomiYu7ServiceSteps) {
        expect(s.title.trim().length).toBeGreaterThan(0);
        expect(s.description.trim().length).toBeGreaterThan(0);
      }
    });

    it("最后一步是售后支持", () => {
      expect(xiaomiYu7ServiceSteps[5].title).toBe("售后支持");
    });
  });

  describe("15 条 FAQ", () => {
    it("每条有非空 question 和 answer", () => {
      for (const f of xiaomiYu7Faq) {
        expect(f.question.trim().length).toBeGreaterThan(0);
        expect(f.answer.trim().length).toBeGreaterThan(0);
      }
    });
  });
});
