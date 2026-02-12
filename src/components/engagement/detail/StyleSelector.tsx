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
          className={`rb:w-8 rb:h-20 rb:border! ${item.active ? "rb:border-black/60" : "rb:border-gray-100!"} rb:min-w-16.5! rb:rounded-md!`}
          iconClass="rb:w-10! rb:h-10! rb:md:w-8 rb:md:h-8 rb:mx-0!"
          labelClass="rb:text-xs rb:md:text-xs"
        />
      ))}
    </OptionGroup>
  );
};

export default StyleSelector;
