import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import type { FitmentConfig } from "@/components/vehicle-page";

const config: FitmentConfig = {
  heading: "测试车型适配速查：我的配置能装吗？",
  models: [
    {
      model: "SU7",
      projects: [
        {
          name: "底盘护板",
          specs: [
            {
              material: "锰钢1.2mm；铝镁合金2.0mm",
              note: "续航700电池螺丝专用，800/830通用",
              date: "2026-08-30",
            },
            {
              label: "五件套",
              code: "X3054S",
              date: "2026-09-08",
            },
          ],
        },
        {
          name: "360软包脚垫",
          specs: [
            {
              label: "4门5座/3片",
              year: "24款-25款",
            },
          ],
        },
      ],
    },
  ],
};

describe("FitmentQuickCheck", () => {
  it("renders heading and project rows", () => {
    render(<FitmentQuickCheck config={config} theme="orange" />);
    expect(
      screen.getByRole("heading", { name: /测试车型适配速查/ }),
    ).toBeInTheDocument();
    expect(screen.getByText("底盘护板")).toBeInTheDocument();
    expect(screen.getByText("360软包脚垫")).toBeInTheDocument();
    expect(screen.getByText("2 个方案")).toBeInTheDocument();
  });

  it("shows material and note inside expanded project", () => {
    render(<FitmentQuickCheck config={config} theme="orange" />);
    const material = screen.getAllByText("锰钢1.2mm；铝镁合金2.0mm");
    expect(material.length).toBeGreaterThan(0);
    // 供应商编号不展示（脱敏）
    expect(screen.queryByText("X3054S")).not.toBeInTheDocument();
  });

  it("renders nothing when no models provided", () => {
    const { container } = render(
      <FitmentQuickCheck config={{ heading: "空", models: [] }} theme="orange" />,
    );
    expect(container.firstChild).toBeNull();
  });
});

describe("FitmentQuickCheck groupByModel mode", () => {
  const groupedConfig: FitmentConfig = {
    heading: "宝马适配速查：你的车型能装哪些项目？",
    groupByModel: true,
    models: [
      {
        model: "宝马3系",
        projects: [
          {
            name: "360软包脚垫",
            specs: [{ label: "4门5座/3片", year: "13款--20款" }],
          },
          {
            name: "平面尾箱垫",
            specs: [{ label: "4门5座", year: "13款--20款" }],
          },
        ],
      },
      {
        model: "宝马X5",
        projects: [
          {
            name: "360软包脚垫",
            specs: [{ label: "5门5座/3片", year: "19款--21款" }],
          },
          {
            name: "360全包尾箱",
            specs: [{ label: "5门5座", year: "19款--21款" }],
          },
        ],
      },
    ],
  };

  it("renders one accordion per model and keeps same-name projects separate", () => {
    render(<FitmentQuickCheck config={groupedConfig} theme="blue" />);
    expect(screen.getByText("宝马3系")).toBeInTheDocument();
    expect(screen.getByText("宝马X5")).toBeInTheDocument();
    // 分组模式：同名项目不跨车型合并 → 360软包脚垫出现两次（每个车型组内各一次）
    expect(screen.getAllByText("360软包脚垫")).toHaveLength(2);
    // 两个车型组各显示「2 个项目 · 2 个方案」
    expect(screen.getAllByText("2 个项目 · 2 个方案")).toHaveLength(2);
    // 分组模式统计行：2 个车型 · 4 个适配方案
    expect(screen.getByText("2 个车型 · 4 个适配方案 · 数据来自蓝辉供应商适配库")).toBeInTheDocument();
  });

  it("still hides supplier codes in grouped mode", () => {
    const withCode: FitmentConfig = {
      heading: "分组脱敏",
      groupByModel: true,
      models: [
        {
          model: "宝马3系",
          projects: [
            { name: "360软包脚垫", specs: [{ code: "F2414S", year: "13款--20款" }] },
          ],
        },
      ],
    };
    render(<FitmentQuickCheck config={withCode} theme="blue" />);
    expect(screen.queryByText("F2414S")).not.toBeInTheDocument();
    expect(screen.getByText("13款--20款")).toBeInTheDocument();
  });
});
