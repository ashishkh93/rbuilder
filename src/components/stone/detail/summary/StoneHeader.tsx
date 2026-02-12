import { COMMON_ICONS } from "@/components/shared/icons/common";
import { selectDiamondTitle } from "@/store/diamonds/diamonds.selectors";
import { useSelector } from "react-redux";

const StoneHeader = () => {
  const diamondTitle = useSelector(selectDiamondTitle);

  return (
    <div className="rb:flex rb:items-start rb:gap-2 rb:justify-between">
      <div className="rb:text-xl rb:lg:text-2xl rb:font-semibold">
        {diamondTitle?.title || ""}
      </div>
      <img src={COMMON_ICONS.labgrown} alt="" className="rb:w-15 rb:h-15" />
    </div>
  );
};

export default StoneHeader;
