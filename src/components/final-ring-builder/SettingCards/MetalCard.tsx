import { COMMON_ICONS } from "@/components/shared/icons/common";
import BaseSettingCard from "./BaseSettingCard";

export const MetalCard = () => (
  <BaseSettingCard
    title="METAL"
    fullWidth
    desc="The secret sauce that makes this piece."
    iconSrc={COMMON_ICONS.metal}
  >
    <p className="text-xl font-semibold text-black">14k Yellow Gold</p>

    {/* graph + legend can live here */}
  </BaseSettingCard>
);
