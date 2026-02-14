import BaseSettingCard from "./BaseSettingCard";
import { COMMON_ICONS } from "@/components/shared/icons/common";
import { selectSettingBandWidth } from "@/store/products/products.selectors";
import { useAppSelector } from "@/store";

export const WidthCard = () => {
  const width = useAppSelector(selectSettingBandWidth);
  return (
    <BaseSettingCard
      title="WIDTH"
      desc="Measured at the base of the ring"
      iconSrc={COMMON_ICONS.width}
    >
      <p className="rb:text-xl rb:font-semibold rb:text-black">{`${width}${width?.includes("mm") ? "" : " mm"}`}</p>
    </BaseSettingCard>
  );
};
