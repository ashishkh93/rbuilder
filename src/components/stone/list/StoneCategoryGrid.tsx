import { useAppDispatch, useAppSelector } from "@/store";
import { setDiamondSingle } from "@/store/filters/filters.slice";
import { selectShape } from "@/store/filters/filters.selectors";
import { SHAPE_OPTIONS } from "../../icons/metalConfig";
import SelectableCategoryGrid from "@/components/common/SelectableCategoryGrid";
import { useMemo } from "react";

const StoneCategoryGrid = () => {
  const dispatch = useAppDispatch();
  const activeShape = useAppSelector(selectShape);

  const items = useMemo(
    () =>
      SHAPE_OPTIONS.map((item) => ({
        id: item.id,
        label: item.label,
        iconSrc: item.iconSrc,
      })),
    []
  );

  return (
    <SelectableCategoryGrid
      items={items}
      activeId={activeShape as string}
      onSelect={(id) => dispatch(setDiamondSingle({ key: "shape", value: id }))}
      iconClass="w-13.5! h-13.5! md:w-9! md:h-9!"
    />
  );
};

export default StoneCategoryGrid;
