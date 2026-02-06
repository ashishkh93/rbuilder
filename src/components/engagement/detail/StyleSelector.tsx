import { RING_TYPE_ICONS } from "@/components/shared/icons/ringTypeIcon";
import OptionGroup from "./OptionGroup";
import SelectableCard from "@/components/common/SelectableCard";

const StyleSelector = () => {
  const categories = [
    { label: "Solitaire", icon: "solitaire", active: true },
    { label: "Pave", icon: "pave" },
  ];

  return (
    <OptionGroup title="Style" subTitle="Solitaire">
      {categories.map((item) => (
        <SelectableCard
          key={item.label}
          label={item.label}
          iconSrc={RING_TYPE_ICONS[item.icon as keyof typeof RING_TYPE_ICONS]}
          active={item.active}
          className={`w-8 h-20 border! ${item.active ? "border-black/60" : "border-gray-100!"} min-w-16.5! rounded-md!`}
          iconClass="w-10! h-10! md:w-8 md:h-8 mx-0!"
          labelClass="text-xs md:text-xs"
        />
      ))}
    </OptionGroup>
  );
};

export default StyleSelector;
