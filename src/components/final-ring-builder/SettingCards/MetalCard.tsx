import { COMMON_ICONS } from "@/components/shared/icons/common";
import BaseSettingCard from "./BaseSettingCard";
import { useAppSelector } from "@/store";
import { selectedSettingSubtitle } from "@/store/products/products.selectors";

export const MetalCard = () => {
  const { subTtitle } = useAppSelector(selectedSettingSubtitle);

  return (
    <BaseSettingCard
      title="METAL"
      fullWidth
      desc="The secret sauce that makes this piece."
      iconSrc={COMMON_ICONS.metal}
    >
      <p className="rb:text-xl rb:font-semibold rb:text-black">{subTtitle}</p>

      {/* graph + legend can live here */}
    </BaseSettingCard>
  );
};
