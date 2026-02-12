import { COMMON_ICONS } from "@/components/shared/icons/common";
import BaseSettingCard from "./BaseSettingCard";

export const MetalCard = () => (
  <BaseSettingCard
    title="METAL"
    fullWidth
    desc="The secret sauce that makes this piece."
    iconSrc={COMMON_ICONS.metal}
  >
    <p className="rb:text-xl rb:font-semibold rb:text-black">14k Yellow Gold</p>

    {/* graph + legend can live here */}
  </BaseSettingCard>
);
