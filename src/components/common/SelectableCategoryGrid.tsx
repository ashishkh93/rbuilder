import { useMemo } from "react";
import SelectableCard from "./SelectableCard";
import ResponsiveHorizontalGrid from "./ResponsiveHorizontalGrid";

const SelectableCategoryGrid = <T extends string | number>({
  items,
  activeId,
  onSelect,
  iconClass,
}: SelectableCategoryGridProps<T>) => {
  const cards = useMemo(
    () =>
      items.map((item) => (
        <SelectableCard
          key={item.id}
          label={item.label}
          iconSrc={item.iconSrc}
          active={activeId === item.id}
          onClick={() => onSelect(activeId === item.id ? null : (item.id as T))}
          iconClass={iconClass}
        />
      )),
    [items, activeId, onSelect, iconClass]
  );

  return <ResponsiveHorizontalGrid>{cards}</ResponsiveHorizontalGrid>;
};

export default SelectableCategoryGrid;
