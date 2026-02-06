import { COMMON_ICONS } from "@/components/shared/icons/common";
import BaseSettingCard from "./BaseSettingCard";

export const ProfileCard = () => (
  <BaseSettingCard
    title="PROFILE"
    desc="Sits flush with a straight wedding band"
    iconSrc={COMMON_ICONS.profile}
  >
    <p className="text-xl font-bold text-black">High</p>
  </BaseSettingCard>
);
