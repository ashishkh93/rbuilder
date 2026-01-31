import { memo, useMemo } from "react";
import Button from "@/components/shared/button/Buttton";
import { SlidersHorizontal } from "lucide-react";
import {
  selectMetalFilter,
  selectShapeFilter,
} from "@/store/filters/filters.selectors";
import { useAppSelector } from "@/store";

const MobileFilterButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  const metal = useAppSelector(selectMetalFilter);
  const shape = useAppSelector(selectShapeFilter);

  const selectedCount = useMemo(
    () => [metal, shape].filter(Boolean).length,
    [metal, shape]
  );

  return (
    <Button onClick={onClick} className="py-[6px]! px-3!">
      <SlidersHorizontal className="w-4 h-4 text-black" strokeWidth={1.75} />
      <span className="text-xs md:text-sm">{label}</span>
      {selectedCount && (
        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
          {selectedCount}
        </span>
      )}
    </Button>
  );
};

export default memo(MobileFilterButton);
