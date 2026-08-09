import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PpfProtectionPrinciples } from "@/components/product/PpfProtectionPrinciples";

describe("PpfProtectionPrinciples", () => {
  it("explains the protection relationship and the six customer-facing benefits", () => {
    render(<PpfProtectionPrinciples />);

    expect(
      screen.getByRole("heading", {
        name: "一层透明保护，降低日常用车对原厂漆的损耗",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("透明车衣层")).toBeInTheDocument();
    expect(screen.getByText("原厂车漆层")).toBeInTheDocument();
    expect(screen.getByText("车身钢板层")).toBeInTheDocument();

    for (const feature of [
      "轻微划痕修复",
      "柔韧缓冲",
      "耐候防护",
      "保持漆面光泽",
      "疏水耐污",
      "稳定贴合",
    ]) {
      expect(screen.getByText(feature)).toBeInTheDocument();
    }
  });

  it("does not use absolute brochure claims", () => {
    render(<PpfProtectionPrinciples />);

    expect(screen.queryByText(/顶级漆面保护膜/)).not.toBeInTheDocument();
    expect(screen.queryByText(/无黄变/)).not.toBeInTheDocument();
    expect(screen.queryByText(/不会残留胶水/)).not.toBeInTheDocument();
  });
});
