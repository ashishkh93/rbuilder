import { memo, useMemo } from "react";
import Button from "@/components/shared/button/Button";
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
    <Button onClick={onClick} className="rb:py-[6px]! rb:min-h-[38px]! rb:px-3!">
      <SlidersHorizontal className="rb:w-4 rb:h-4 rb:text-black" strokeWidth={1.75} />
      <span className="rb:text-xs md:rb:text-sm">{label}</span>
      {selectedCount > 0 && (
        <span className="rb:text-xs rb:px-3 rb:py-1 rb:rounded-full rb:bg-gray-100 rb:text-gray-600">
          {selectedCount}
        </span>
      )}
    </Button>
  );
};

export default memo(MobileFilterButton);
