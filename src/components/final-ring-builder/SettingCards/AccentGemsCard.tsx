import { Separator } from "@/components/ui/separator";
import BaseSettingCard from "./BaseSettingCard";
import { COMMON_ICONS } from "@/components/shared/icons/common";

export const AccentGemsCard = () => (
  <BaseSettingCard
    title="ACCENT GEMS"
    desc="Side stones average color & clarity"
    iconSrc={COMMON_ICONS.accentGems}
  >
    <div className="rb:flex rb:gap-3">
      <div>
        <p className="rb:text-xl rb:font-semibold">D-F</p>
        <p className="rb:text-xs rb:text-gray-500">Color</p>
      </div>

      <Separator orientation="vertical" />

      <div>
        <p className="rb:text-xl rb:font-semibold">VVS</p>
        <p className="rb:text-xs rb:text-gray-500">Clarity</p>
      </div>
    </div>
  </BaseSettingCard>
);
