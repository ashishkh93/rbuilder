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
      iconClass="rb:w-13.5! rb:h-13.5! rb:md:w-9! rb:md:h-9!"
    />
  );
};

export default StoneCategoryGrid;
