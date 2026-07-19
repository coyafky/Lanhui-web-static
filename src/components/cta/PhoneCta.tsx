"use client";

import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type PhoneCtaProps = {
  label?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
};

/**
 * 电话咨询 CTA。
 *
 * 行为：
 *   - 当 brand.phoneTel 是 "tel:" 开头时渲染可点击链接。
 *   - 否则降级为禁用按钮并提示补充电话。
 */
export function PhoneCta({
  label = "电话咨询",
  variant = "default",
  size = "default",
  className,
}: PhoneCtaProps) {
  const telHref = brand.phoneTel;
  const isReady = telHref.startsWith("tel:");

  if (!isReady) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="电话待补充"
        className={cn(
          buttonVariants({ variant: "outline", size }),
          "cursor-not-allowed opacity-60",
          className,
        )}
      >
        <Phone className="w-4 h-4 mr-2" />
        电话待补充
      </button>
    );
  }

  return (
    <a
      href={telHref}
      aria-label={`${label}：${brand.phone}`}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Phone className="w-4 h-4 mr-2" />
      {label}
    </a>
  );
}
