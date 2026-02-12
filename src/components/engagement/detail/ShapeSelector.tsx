// components/ring/ShapeSelector.tsx
import SingleOptionWithIcon from "../filter/SingleOptionWithIcon";
import { SHAPE_OPTIONS } from "../../icons/metalConfig";
import OptionGroup from "./OptionGroup";
``;

const ShapeSelector = () => {
  return (
    <OptionGroup title="Center Stone Shape" subTitle="Marquise">
      {SHAPE_OPTIONS.map((opt) => {
        const isActive = false;
        return (
          <SingleOptionWithIcon
            key={opt.id}
            opt={opt}
            handleSelect={() => {}}
            isActive={isActive}
            labelClass={""}
            iconClass="rb:w-6 rb:h-6 rb:md:w-7 rb:md:h-7"
          />
        );
      })}
    </OptionGroup>
  );
};

export default ShapeSelector;
