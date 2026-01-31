// components/ring/ShapeSelector.tsx
import SingleOptionWithIcon from "../filter/SingleOptionWithIcon";
import { SHAPE_OPTIONS } from "../icons/metalConfig";
import OptionGroup from "./OptionGroup";
``;

const ShapeSelector = () => {
  return (
    <OptionGroup title="Center Stone Shape: Marquise">
      {SHAPE_OPTIONS.map((opt) => {
        const isActive = false;
        return (
          <SingleOptionWithIcon
            key={opt.id}
            opt={opt}
            handleSelect={() => {}}
            isActive={isActive}
            labelClass={""}
            iconClass="w-6 h-6 md:w-7 md:h-7"
          />
        );
      })}
    </OptionGroup>
  );
};

export default ShapeSelector;
