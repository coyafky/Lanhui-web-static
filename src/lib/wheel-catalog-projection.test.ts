import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { wheelModels } from "./wheels.data";
import {
  getWheelDetailContent,
  wheelCatalogItems,
  wheelCatalogOptions,
} from "./wheel-catalog-projection";

/**
 * §10 架构约束：静态导出下筛选只能走客户端，因此**生成物绝不能进客户端包**。
 * 这里做源码级守卫（构建后还会对客户端 chunk 做一次 grep 实测）。
 */

const COMPONENT_DIR = join(process.cwd(), "src", "components", "product", "wheel");
const PURE_MODULE = join(process.cwd(), "src", "lib", "wheel-catalog.ts");

/** 去掉注释，避免文档注释里提到模块名被误判成运行时引用。 */
const stripComments = (source: string): string =>
  source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|\s)\/\/[^\n]*/g, "");

/** 去掉 `import type ... from "..."` 后再检查是否还有（运行时会求值的）数据引用。 */
const stripTypeImports = (source: string): string =>
  source.replace(/import\s+type\s[\s\S]*?from\s+["'][^"']+["'];?/g, "");

const strip = (source: string): string => stripTypeImports(stripComments(source));

/** 测试文件自身要读真实投影做断言，不参与本次源码级守卫。 */
const componentFiles = readdirSync(COMPONENT_DIR).filter(
  (file) => /\.(ts|tsx)$/.test(file) && !/\.test\.tsx?$/.test(file)
);

describe("wheel 客户端组件不得把生成物带进客户端包", () => {
  it("组件目录里存在客户端可达文件（防止守卫空跑）", () => {
    expect(componentFiles.length).toBeGreaterThan(8);
  });

  it.each(componentFiles)("%s 不引用 wheels.data / 投影模块", (file) => {
    const source = strip(readFileSync(join(COMPONENT_DIR, file), "utf8"));
    const withoutTypeImports = source;

    expect(withoutTypeImports).not.toMatch(/wheels\.data/);
    expect(withoutTypeImports).not.toMatch(/wheel-catalog-projection/);
  });

  it("纯逻辑层 wheel-catalog.ts 只有类型导入，没有运行时数据引用", () => {
    const raw = readFileSync(PURE_MODULE, "utf8");
    const withoutTypeImports = strip(raw);

    expect(raw).toMatch(/import\s+type\s/);
    expect(withoutTypeImports).not.toMatch(/wheels\.data/);
    expect(withoutTypeImports).not.toMatch(/wheel-catalog-projection/);
  });
});

describe("wheel-catalog-projection 数据一致性", () => {
  it("投影与生成物的编号一一对应（顺序、数量、主键唯一）", () => {
    expect(wheelCatalogItems.map((item) => item.id)).toEqual(
      wheelModels.map((model) => model.modelId)
    );
    expect(new Set(wheelCatalogItems.map((item) => item.id)).size).toBe(
      wheelModels.length
    );
  });

  it("variant 数与工艺分布与生成物一致", () => {
    const variantTotal = wheelCatalogItems.reduce(
      (sum, item) => sum + item.variantCount,
      0
    );
    expect(variantTotal).toBe(2521);
    expect(
      wheelCatalogItems.filter((item) => item.process === "旋压")
    ).toHaveLength(186);
    expect(
      wheelCatalogItems.filter((item) => item.process === "锻造")
    ).toHaveLength(218);
  });

  it("缺图编号在投影与详情内容里都保持“无图”语义", () => {
    const missing = wheelCatalogItems.filter((item) => item.cardImage === null);
    expect(missing).toHaveLength(26);

    for (const item of missing) {
      const content = getWheelDetailContent(item.id);
      expect(content, item.id).toBeDefined();
      expect(content?.model.images, item.id).toEqual([]);
    }
  });

  it("详情内容给出摘要与有内容的段落，未生成的编号返回 undefined", () => {
    const content = getWheelDetailContent("GZ032");
    expect(content).toBeDefined();
    expect(content?.summary.pcd).toBe("5×100 / 5×114.3");
    expect(content?.sections.map((section) => section.id)).toEqual([
      "wheel-detail-gallery",
      "wheel-detail-summary",
      "wheel-detail-specs",
      "wheel-detail-cta",
    ]);

    expect(getWheelDetailContent("__NOT_A_WHEEL__")).toBeUndefined();
  });

  it("取值域来自投影本身", () => {
    expect(wheelCatalogOptions.diameters.length).toBeGreaterThan(0);
    expect(wheelCatalogOptions.pcds).toContain("5×114.3");
  });
});
