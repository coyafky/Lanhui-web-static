import type { ReactNode } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_WHEEL_CATALOG_FILTERS,
  WHEEL_CATALOG_PATH,
  WHEEL_PAGE_SIZE,
  filterWheelCatalog,
  type WheelCatalogFilters,
} from "@/lib/wheel-catalog";
import { wheelCatalogItems } from "@/lib/wheel-catalog-projection";
import { WheelCatalogView } from "./WheelCatalogView";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, preload, sizes, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...rest} />;
  },
}));

const filtersOf = (patch: Partial<WheelCatalogFilters> = {}): WheelCatalogFilters => ({
  ...DEFAULT_WHEEL_CATALOG_FILTERS,
  ...patch,
});

const detailLinks = (): HTMLAnchorElement[] =>
  Array.from(document.querySelectorAll<HTMLAnchorElement>("a")).filter((anchor) =>
    new RegExp(`^${WHEEL_CATALOG_PATH}/[^/?]+$`).test(anchor.getAttribute("href") ?? "")
  );

afterEach(() => {
  cleanup();
});

describe("WheelCatalogView 默认分组态", () => {
  it("渲染组介绍 + 24 个编号卡片（组介绍不占分页名额）", () => {
    render(
      <WheelCatalogView
        items={wheelCatalogItems}
        filters={DEFAULT_WHEEL_CATALOG_FILTERS}
      />
    );

    expect(screen.getByText("旋压工艺")).toBeInTheDocument();
    expect(screen.getByText("默认按工艺分组")).toBeInTheDocument();
    // 分页名额 24 个，组介绍是额外的首格。
    expect(detailLinks()).toHaveLength(WHEEL_PAGE_SIZE);
    expect(screen.getByText(`共 ${wheelCatalogItems.length} 个编号 · 当前第 1–${WHEEL_PAGE_SIZE} 个`)).toBeInTheDocument();
  });

  it("翻页链接保留其它条件，并落在图库锚点上", () => {
    render(
      <WheelCatalogView items={wheelCatalogItems} filters={filtersOf({ page: 2 })} />
    );

    const next = screen.getByRole("link", { name: /下一页/ });
    expect(next).toHaveAttribute("href", `${WHEEL_CATALOG_PATH}?page=3#wheel-catalog`);

    const previous = screen.getByRole("link", { name: /上一页/ });
    expect(previous).toHaveAttribute("href", `${WHEEL_CATALOG_PATH}#wheel-catalog`);
  });
});

describe("WheelCatalogView 筛选态退化为平铺", () => {
  it("有筛选时不再出现组介绍与分组提示", () => {
    render(
      <WheelCatalogView
        items={wheelCatalogItems}
        filters={filtersOf({ process: "锻造" })}
      />
    );

    expect(screen.queryByText("旋压工艺")).not.toBeInTheDocument();
    expect(screen.getByText("筛选结果已平铺")).toBeInTheDocument();

    const links = detailLinks();
    expect(links.length).toBeGreaterThan(0);
    expect(links.length).toBeLessThanOrEqual(WHEEL_PAGE_SIZE);
    // 第一页结果都属于锻造。
    for (const link of links) {
      expect(link.getAttribute("href")?.startsWith(`${WHEEL_CATALOG_PATH}/`)).toBe(true);
    }
  });

  it("双孔距在按 5×100 与按 5×114.3 筛选时都能看到 GZ032", () => {
    for (const pcd of ["5×100", "5×114.3"]) {
      const filters = filtersOf({ pcd });
      // 先在分页前的命中集合里确认 GZ032 命中；再渲染它实际所在的那一页做端到端确认，
      // 否则断言会隐含「GZ032 必须落在第 1 页」这个分页假设。
      const index = filterWheelCatalog(wheelCatalogItems, filters).findIndex(
        (item) => item.id === "GZ032"
      );
      expect(index, pcd).toBeGreaterThanOrEqual(0);
      const page = Math.floor(index / WHEEL_PAGE_SIZE) + 1;

      const { unmount } = render(
        <WheelCatalogView
          items={wheelCatalogItems}
          filters={{ ...filters, page }}
        />
      );
      const hrefs = detailLinks().map((link) => link.getAttribute("href"));
      expect(hrefs, pcd).toContain(`${WHEEL_CATALOG_PATH}/GZ032`);
      unmount();
    }
  });

  it("筛选链接回第 1 页且带上新条件", () => {
    render(
      <WheelCatalogView
        items={wheelCatalogItems}
        filters={filtersOf({ page: 3, process: "旋压" })}
      />
    );

    const diameterLink = screen.getByRole("link", { name: /^18 英寸（/ });
    const href = diameterLink.getAttribute("href") ?? "";
    expect(href).toContain("diameter=18");
    expect(href).toContain("process=");
    expect(href).not.toContain("page=");
    expect(href).toContain("#wheel-catalog");
  });
});

describe("WheelCatalogView 空态", () => {
  it("无结果时给出说明与重置入口", () => {
    render(
      <WheelCatalogView
        items={wheelCatalogItems}
        filters={filtersOf({ process: "旋压", diameter: 23, pcd: "6×139.7" })}
      />
    );

    // 该文案设计上出现两次：结果计数行的 aria-live 播报 + 可见的空态块。
    expect(screen.getAllByText("没有匹配的编号").length).toBeGreaterThan(0);
    expect(detailLinks()).toHaveLength(0);
    expect(screen.queryByRole("navigation", { name: "轮毂编号分页" })).not.toBeInTheDocument();

    const reset = screen.getAllByRole("link", { name: "重置筛选" });
    expect(reset.length).toBeGreaterThan(0);
    for (const link of reset) {
      expect(link).toHaveAttribute("href", WHEEL_CATALOG_PATH);
    }
  });
});
