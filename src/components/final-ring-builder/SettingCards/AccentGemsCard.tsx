import { Separator } from "@/components/ui/separator";
import BaseSettingCard from "./BaseSettingCard";
import { COMMON_ICONS } from "@/components/shared/icons/common";
import { useAppSelector } from "@/store";
import {
  selectDiamondColor,
  selectDiamondClarity,
} from "@/store/diamonds/diamonds.selectors";

export const AccentGemsCard = () => {
  const diaColor = useAppSelector(selectDiamondColor);
  const diaClarity = useAppSelector(selectDiamondClarity);

  return (
    <BaseSettingCard
      title="ACCENT GEMS"
      desc="Side stones average color & clarity"
      iconSrc={COMMON_ICONS.accentGems}
      descClassName="rb:mt-5"
    >
      <div className="rb:flex rb:gap-3">
        <div>
          <p className="rb:text-xl rb:font-semibold">{diaColor}</p>
          <p className="rb:text-11 rb:text-gray-500">Color</p>
        </div>

        <Separator orientation="vertical" />

        <div>
          <p className="rb:text-xl rb:font-semibold">{diaClarity}</p>
          <p className="rb:text-11 rb:text-gray-500">Clarity</p>
        </div>
      </div>
    </BaseSettingCard>
  );
};
