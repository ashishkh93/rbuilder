import { useAppDispatch, useAppSelector } from "@/store";
import { setStyle } from "@/store/filters/filters.slice";
import { selectStyleFilter } from "@/store/filters/filters.selectors";
import { RING_CATEGORIES } from "@/utils/constants";
import { RING_TYPE_ICONS } from "../shared/icons/ringTypeIcon";
import SelectableCategoryGrid from "@/components/common/SelectableCategoryGrid";

const RingCategoryGrid = () => {
  const dispatch = useAppDispatch();
  const activeStyle = useAppSelector(selectStyleFilter);

  const items = RING_CATEGORIES.map((item) => ({
    id: item.id,
    label: item.label,
    iconSrc: RING_TYPE_ICONS[item.icon as keyof typeof RING_TYPE_ICONS],
  }));

  return (
    <SelectableCategoryGrid
      items={items}
      activeId={activeStyle}
      onSelect={(id) => dispatch(setStyle(id))}
    />
  );
};

export default RingCategoryGrid;
