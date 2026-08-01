import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./Header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock("@/components/Logo", () => ({
  Logo: (props: Record<string, unknown>) => <span {...props}>LANHUI</span>,
}));

describe("Header", () => {
  it("keeps the fixed mobile menu outside the sticky header containing block", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    const dialog = screen.getByRole("dialog", { hidden: true });

    expect(header).not.toContainElement(dialog);
    expect(dialog.parentElement).toHaveClass("overflow-hidden");
  });

  it("opens and closes the mobile menu from the header toggle", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "切换菜单" });
    const dialog = screen.getByRole("dialog", { hidden: true });

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveClass("translate-x-0");
    expect(document.body.style.overflow).toBe("hidden");

    await user.click(screen.getByRole("button", { name: "关闭菜单" }));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(dialog).toHaveClass("translate-x-full");
    expect(document.body.style.overflow).toBe("");
  });
});
