import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { SkidPlateFitmentEntry } from "./SkidPlateFitmentEntry";
import {
  SKID_PLATE_BRAND_COUNT,
  SKID_PLATE_MODEL_COUNT,
  SKID_PLATE_SCHEME_COUNT,
} from "@/lib/skid-plate-fitment";

/** 打开模块入口（默认收起，不占视口） */
function openModule() {
  fireEvent.click(
    screen.getByRole("button", {
      name: new RegExp(`^展开适配速查（${SKID_PLATE_BRAND_COUNT} 品牌`),
    }),
  );
}

describe("SkidPlateFitmentEntry", () => {
  it("keeps the module collapsed by default and only renders the counts on the toggle", () => {
    render(<SkidPlateFitmentEntry />);
    const toggle = screen.getByRole("button", {
      name: new RegExp(`^展开适配速查（${SKID_PLATE_BRAND_COUNT} 品牌 · ${SKID_PLATE_MODEL_COUNT} 车型 · ${SKID_PLATE_SCHEME_COUNT} 条适配备注）$`),
    });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    // 收起态不渲染品牌树，也不渲染搜索框 —— 整块只占一行，不侵占视口
    expect(screen.queryByRole("list", { name: "底盘护板品牌车型适配" })).not.toBeInTheDocument();
    expect(screen.queryByRole("searchbox", { name: "搜索品牌或车型" })).not.toBeInTheDocument();
  });

  it("expands and collapses the tree from the toggle", () => {
    render(<SkidPlateFitmentEntry />);
    openModule();

    const toggle = screen.getByRole("button", { name: "收起适配速查" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("list", { name: "底盘护板品牌车型适配" })).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(screen.queryByRole("list", { name: "底盘护板品牌车型适配" })).not.toBeInTheDocument();
  });

  it("drills down from brand to model, and the model is the leaf (no scheme cards)", () => {
    render(<SkidPlateFitmentEntry />);
    openModule();

    const tree = screen.getByRole("list", { name: "底盘护板品牌车型适配" });
    const liAuto = within(tree).getByRole("button", { name: /^理想\s+\d+\s+车型$/ });
    expect(within(tree).getAllByRole("button", { name: /^理想\s+\d+\s+车型$/ })).toHaveLength(1);
    expect(liAuto).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(liAuto);
    expect(liAuto).toHaveAttribute("aria-expanded", "true");
    // 车型是叶子：直接出现适配备注，而不是「方案1」卡片
    expect(within(tree).getAllByText(/条年款\/配置/).length).toBeGreaterThan(0);
    expect(within(tree).queryByText("方案1")).not.toBeInTheDocument();

    // 切换品牌会收起上一个
    fireEvent.click(within(tree).getByRole("button", { name: /^问界\s+\d+\s+车型$/ }));
    expect(liAuto).toHaveAttribute("aria-expanded", "false");
  });

  it("merges a model's year/config variants into its own notes instead of separate cards", () => {
    render(<SkidPlateFitmentEntry />);
    openModule();

    const tree = screen.getByRole("list", { name: "底盘护板品牌车型适配" });
    fireEvent.click(within(tree).getByRole("button", { name: /^比亚迪\s+\d+\s+车型$/ }));

    // 宋Pro 排在品牌车型列表后段，先展开被截断的部分（这一步同时验证限流开关）
    const brandLi = within(tree).getByText("比亚迪").closest("li")!;
    fireEvent.click(within(brandLi).getByRole("button", { name: /^还有 \d+ 个车型$/ }));

    const songPro = within(tree).getByText("比亚迪宋Pro");

    // 比亚迪宋Pro 原始有 26 条方案 —— 必须收敛成一个车型叶子 + 折叠余量
    const leaf = songPro.closest("li")!;
    // 26 条差异全部并进这一个车型叶子（精确匹配计数标签，避免撞上「还有 N 条」按钮）
    expect(within(leaf).getAllByText(/^\s*26\s*条年款\/配置\s*$/)).toHaveLength(1);
    const more = within(leaf).getByRole("button", { name: /^还有 \d+ 条年款\/配置$/ });
    expect(more).toHaveAttribute("aria-expanded", "false");
    // 首屏只渲染 4 条备注，不是 26 张卡（用 children，避免 :scope 选择器空集侥幸通过）
    const notes = leaf.querySelector("ul")!;
    expect(notes.children.length).toBeLessThanOrEqual(4);
    expect(notes.children.length).toBeGreaterThan(0);
    // 展开后能看到剩下的
    fireEvent.click(more);
    expect(more).toHaveAttribute("aria-expanded", "true");
    expect(notes.children.length).toBe(26);
  });

  it("caps the model list inside a brand so a huge brand cannot fill the viewport", () => {
    render(<SkidPlateFitmentEntry />);
    openModule();

    const tree = screen.getByRole("list", { name: "底盘护板品牌车型适配" });
    fireEvent.click(within(tree).getByRole("button", { name: /^比亚迪\s+\d+\s+车型$/ }));

    const brandLi = within(tree).getByText("比亚迪").closest("li")!;
    const models = brandLi.querySelectorAll('ul[class*="space-y-2"] > li');
    expect(models.length).toBeLessThanOrEqual(12);
    expect(within(brandLi).getByRole("button", { name: /^还有 \d+ 个车型$/ })).toBeInTheDocument();
  });

  it("filters a combined brand and model query inside the expanded tree", () => {
    render(<SkidPlateFitmentEntry />);
    openModule();
    fireEvent.change(screen.getByRole("searchbox", { name: "搜索品牌或车型" }), {
      target: { value: "理想 L9" },
    });

    const tree = screen.getByRole("list", { name: "底盘护板品牌车型适配" });
    expect(Array.from(tree.children).filter((node) => node.tagName === "LI")).toHaveLength(1);
    fireEvent.click(within(tree).getByRole("button", { name: /^理想\s+\d+\s+车型$/ }));
    expect(within(tree).getByText("理想L9")).toBeInTheDocument();
    expect(within(tree).queryByText("理想L8")).not.toBeInTheDocument();
  });

  it("starts with a compact brand list and still exposes the full library", () => {
    render(<SkidPlateFitmentEntry />);
    openModule();

    const tree = screen.getByRole("list", { name: "底盘护板品牌车型适配" });
    const allBrands = screen.getByRole("button", { name: `查看全部 ${SKID_PLATE_BRAND_COUNT} 个品牌` });

    expect(tree.children).toHaveLength(18);
    fireEvent.click(allBrands);
    expect(tree.children).toHaveLength(SKID_PLATE_BRAND_COUNT);

    fireEvent.click(screen.getByRole("button", { name: "收起其余品牌" }));
    expect(tree.children).toHaveLength(18);
  });
});
