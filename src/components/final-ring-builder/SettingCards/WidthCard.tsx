import BaseSettingCard from "./BaseSettingCard";
import { COMMON_ICONS } from "@/components/shared/icons/common";

export const WidthCard = () => (
  <BaseSettingCard
    title="WIDTH"
    desc="Measured at the base of the ring"
    iconSrc={COMMON_ICONS.width}
  >
    <p className="text-xl font-semibold text-black">1.5mm</p>
  </BaseSettingCard>
);
