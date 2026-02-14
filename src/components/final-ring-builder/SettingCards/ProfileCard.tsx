import { COMMON_ICONS } from "@/components/shared/icons/common";
import BaseSettingCard from "./BaseSettingCard";

export const ProfileCard = () => (
  <BaseSettingCard
    title="PROFILE"
    desc="Sits flush with a straight wedding band"
    iconSrc={COMMON_ICONS.profile}
    descClassName="rb:mt-5"
  >
    <p className="rb:text-xl rb:font-bold rb:text-black">High</p>
    <img
      src={COMMON_ICONS.stoneProfile}
      alt="stone profile"
      loading="lazy"
      className="rb:w-15!"
    />
  </BaseSettingCard>
);
