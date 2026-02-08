import CustomTabs from "@/components/common/CustomTabs";
import { FlaskConical, Gem } from "lucide-react";
import { selectType } from "@/store/filters/filters.selectors";
import { useAppDispatch, useAppSelector } from "@/store";
import { setDiamondSingle } from "@/store/filters/filters.slice";

const StoneTypeTabs = () => {
  const diamondType = useAppSelector(selectType);
  const dispatch = useAppDispatch();

  return (
    <div className="stone-type-outer-wrapper max-w-70 md:max-w-124 mx-auto flex justify-center items-center w-400">
      <CustomTabs<StoneType>
        value={diamondType}
        onChange={(value) => dispatch(setDiamondSingle({ key: "type", value }))}
        heightClass="h-12 md:h-14! w-90 md:w-120 cursor-pointer!"
        items={[
          {
            value: "lab",
            label: "Lab Grown",
            icon: <FlaskConical />,
          },
          {
            value: "natural",
            label: "Natural",
            icon: <Gem />,
          },
        ]}
      />
    </div>
  );
};

export default StoneTypeTabs;
