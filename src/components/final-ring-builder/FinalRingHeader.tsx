import { selectedSettingDetail } from "@/store/products/products.selectors";
import { COMMON_ICONS } from "../shared/icons/common";
import { useAppSelector } from "@/store";
import { selectDiamondTitle } from "@/store/diamonds/diamonds.selectors";
import { useMemo } from "react";

const FinalRingHeader = () => {
  const selectedSetting = useAppSelector(selectedSettingDetail);
  const { title: diamondTitle } = useAppSelector(selectDiamondTitle);

  const title = useMemo(
    () =>
      `${(selectedSetting?.name || "")?.toString().split("-")[0]} With ${diamondTitle}`,
    [selectedSetting, diamondTitle]
  );

  return (
    <div className="rb:flex rb:items-start rb:justify-between">
      <div className="rb:text-xl rb:font-semibold rb:leading-tight rb:max-w-[270px] rb:sm:max-w-full! rb:lg:max-w-[400px]!">
        {title}
      </div>

      <button className="rb:flex rb:flex-col rb:items-center rb:gap-1 rb:text-sm rb:text-gray-600">
        <img src={COMMON_ICONS.dropAHint} className="rb:w-8" alt="" />
        <span className="rb:text-10">Drop a Hint</span>
      </button>
    </div>
  );
};

export default FinalRingHeader;
