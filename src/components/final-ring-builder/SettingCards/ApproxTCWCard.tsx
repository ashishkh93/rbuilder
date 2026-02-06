import { COMMON_ICONS } from "@/components/shared/icons/common";
import BaseSettingCard from "./BaseSettingCard";

export const ApproxTCWCard = () => (
  <BaseSettingCard
    title="APPROX. TCW"
    desc="The setting’s average total carat weight"
    iconSrc={COMMON_ICONS.carat}
  >
    <p className="text-xl font-semibold text-black">0.1 ct</p>
  </BaseSettingCard>
);
