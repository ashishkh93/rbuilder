import CustomTabs from "@/components/common/CustomTabs";
import { useState } from "react";
import { FlaskConical, Gem } from "lucide-react";

const StoneTypeTabs = () => {
  const [value, setValue] = useState<StoneType>("lab");

  return (
    <div className="stone-type-outer-wrapper max-w-70 md:max-w-124 mx-auto flex justify-center items-center w-400">
      <CustomTabs<StoneType>
        value={value}
        onChange={setValue}
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
