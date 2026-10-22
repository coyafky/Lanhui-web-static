import { FitmentQuickCheck } from "@/components/vehicle-page/FitmentQuickCheck";
import type { FitmentConfig, VehicleTheme } from "@/components/vehicle-page";

interface Props {
  config: FitmentConfig;
  theme: VehicleTheme;
}

/** 通用品牌页适配速查块（包装 FitmentQuickCheck，品牌页多车型分组渲染） */
export function GenericBrandFitment({ config, theme }: Props) {
  return <FitmentQuickCheck config={config} theme={theme} />;
}
