import CustomTabs from "@/components/common/CustomTabs";
import { FlaskConical, Gem } from "lucide-react";
import { selectType } from "@/store/filters/filters.selectors";
import { useAppDispatch, useAppSelector } from "@/store";
import { setDiamondSingle } from "@/store/filters/filters.slice";

const StoneTypeTabs = () => {
  const diamondType = useAppSelector(selectType);
  const dispatch = useAppDispatch();

  return (
    <div className="rb:stone-type-outer-wrapper rb:max-w-70 rb:md:max-w-124 rb:mx-auto rb:flex rb:justify-center rb:items-center rb:w-400">
      <CustomTabs<StoneType>
        value={diamondType}
        onChange={(value) => dispatch(setDiamondSingle({ key: "type", value }))}
        heightClass="rb:h-12 rb:md:h-14! rb:w-90 rb:md:w-120 rb:cursor-pointer!"
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
