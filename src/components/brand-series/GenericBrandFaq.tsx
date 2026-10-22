import { FaqSection } from "@/components/vehicle-page/FaqSection";
import type { FaqItem, VehicleTheme } from "@/components/vehicle-page";

interface Props {
  items: FaqItem[];
  theme: VehicleTheme;
}

/** 通用品牌页 FAQ 块（包装 vehicle-page 的 FaqSection） */
export function GenericBrandFaq({ items, theme }: Props) {
  return <FaqSection items={items} theme={theme} />;
}
