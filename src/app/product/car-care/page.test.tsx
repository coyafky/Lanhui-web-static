/**
 * 洗美养护专题页测试 (TDD RED->GREEN)
 *
 * 覆盖：
 *  - 页面渲染不崩溃
 *  - JSON-LD 结构数据正确
 *  - 所有核心区域组件均被渲染
 */
import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { renderProductPage } from "@/test/product-page-test-utils";

// ---------- Mock 基础设施 ----------
vi.mock("next/navigation", () => ({
  notFound: vi.fn(),
}));
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => <img {...props} />,
}));

// ---------- Mock Header / Footer ----------
vi.mock("@/components/Header", () => ({
  Header: () => <div data-testid="Header" />,
}));
vi.mock("@/components/Footer", () => ({
  Footer: () => <div data-testid="Footer" />,
}));

// ---------- Mock child components ----------
vi.mock("@/components/product/car-care/CarCareHero", () => ({
  CarCareHero: () => <section data-testid="CarCareHero" />,
}));
vi.mock("@/components/product/car-care/CarCarePainPoints", () => ({
  CarCarePainPoints: () => <section data-testid="CarCarePainPoints" />,
}));
vi.mock("@/components/product/car-care/CarCareConditionSelector", () => ({
  CarCareConditionSelector: () => <section data-testid="CarCareConditionSelector" />,
}));
vi.mock("@/components/product/car-care/CarCareServiceGrid", () => ({
  CarCareServiceGrid: () => <section data-testid="CarCareServiceGrid" />,
}));
vi.mock("@/components/product/car-care/CarCareCaseShowcase", () => ({
  CarCareCaseShowcase: () => <section data-testid="CarCareCaseShowcase" />,
}));
vi.mock("@/components/product/car-care/CarCareServiceFlow", () => ({
  CarCareServiceFlow: () => <section data-testid="CarCareServiceFlow" />,
}));
vi.mock("@/components/product/car-care/CarCareDeliveryChecklist", () => ({
  CarCareDeliveryChecklist: () => <section data-testid="CarCareDeliveryChecklist" />,
}));
vi.mock("@/components/product/car-care/CarCareDouyinCta", () => ({
  CarCareDouyinCta: () => <section data-testid="CarCareDouyinCta" />,
}));

let Page: () => React.JSX.Element;

beforeEach(async () => {
  vi.resetModules();
  const mod = await import("./page");
  Page = mod.default;
});

afterEach(() => {
  cleanup();
});

describe("CarCarePage", () => {
  it("renders without crashing", () => {
    expect(() => render(<Page />)).not.toThrow();
  });

  it("renders main content area", () => {
    render(<Page />);
    const main = document.querySelector("main#main-content");
    expect(main).not.toBeNull();
  });

  it("renders all car-care sections", () => {
    render(<Page />);
    expect(screen.getByTestId("CarCareHero")).toBeDefined();
    expect(screen.getByTestId("CarCarePainPoints")).toBeDefined();
    expect(screen.getByTestId("CarCareConditionSelector")).toBeDefined();
    expect(screen.getByTestId("CarCareServiceGrid")).toBeDefined();
    expect(screen.getByTestId("CarCareCaseShowcase")).toBeDefined();
    expect(screen.getByTestId("CarCareServiceFlow")).toBeDefined();
    expect(screen.getByTestId("CarCareDeliveryChecklist")).toBeDefined();
    expect(screen.getByTestId("CarCareDouyinCta")).toBeDefined();
  });

  it("includes JSON-LD structured data with ItemList", () => {
    render(<Page />);
    const scripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    expect(scripts.length).toBe(2); // page schema + breadcrumb schema
    const jsonLd = JSON.parse(scripts[0]?.innerHTML ?? "{}");
    expect(jsonLd["@type"]).toBe("CollectionPage");
    expect(jsonLd.mainEntity["@type"]).toBe("ItemList");
    expect(jsonLd.mainEntity.itemListElement).toHaveLength(4);
    expect(jsonLd.mainEntity.itemListElement[0].name).toBe("外观精洗");
    expect(jsonLd.mainEntity.itemListElement[1].name).toBe("内饰深度清洁");
    expect(jsonLd.mainEntity.itemListElement[2].name).toBe("轮毂专项清洁");
    expect(jsonLd.mainEntity.itemListElement[3].name).toBe("玻璃油膜去除");
  });
});
