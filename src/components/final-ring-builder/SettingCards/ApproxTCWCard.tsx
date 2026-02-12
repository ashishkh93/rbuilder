import { COMMON_ICONS } from "@/components/shared/icons/common";
import BaseSettingCard from "./BaseSettingCard";

export const ApproxTCWCard = () => (
  <BaseSettingCard
    title="APPROX. TCW"
    desc="The setting’s average total carat weight"
    iconSrc={COMMON_ICONS.carat}
  >
    <p className="rb:text-xl rb:font-semibold rb:text-black">0.1 ct</p>
  </BaseSettingCard>
);
