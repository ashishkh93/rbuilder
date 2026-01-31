import { memo, useMemo } from "react";
import Button from "@/components/shared/button/Buttton";
import { MetalRingIcon } from "../icons/MetalRingIcon";
import {
  getMetalLabel,
  getShapeLabel,
  METAL_COLORS,
} from "../icons/metalConfig";
import { SHAPE_ICONS } from "../icons/shapeIcon";
import { X } from "lucide-react";
import { useAppSelector } from "@/store";
import {
  selectMetalFilter,
  selectShapeFilter,
  selectStyleFilter,
} from "@/store/filters/filters.selectors";
import { RING_TYPE_ICONS } from "@/components/shared/icons/ringTypeIcon";
import { getStyleLabel } from "@/utils/contants";

type FilterKey = "metal" | "shape" | "style";

const FILTER_CONFIG: Record<
  FilterKey,
  {
    getLabel: (value: string) => string;
    renderIcon: (value: string) => React.ReactNode;
    gapClass: string;
  }
> = {
  metal: {
    getLabel: getMetalLabel,
    renderIcon: (value) => (
      <MetalRingIcon
        color={METAL_COLORS[value as keyof typeof METAL_COLORS]}
        width={25}
        height={25}
        radius={15}
      />
    ),
    gapClass: "gap-1!",
  },

  shape: {
    getLabel: getShapeLabel,
    renderIcon: (value) => (
      <img
        src={SHAPE_ICONS[value as keyof typeof SHAPE_ICONS]}
        alt={value}
        className="w-4 h-4 ml-1"
      />
    ),
    gapClass: "gap-2!",
  },

  style: {
    getLabel: getStyleLabel,
    renderIcon: (value) => (
      <img
        src={RING_TYPE_ICONS[value as keyof typeof RING_TYPE_ICONS]}
        alt={value}
        className="w-4 h-4 ml-1"
      />
    ),
    gapClass: "gap-2!",
  },
};

const MobileSelectedFilters = ({ onClick }: { onClick: () => void }) => {
  const metal = useAppSelector(selectMetalFilter);
  const shape = useAppSelector(selectShapeFilter);
  const style = useAppSelector(selectStyleFilter);

  const selectedFilters = { metal, shape, style } as const;

  return (
    <div className="flex gap-2">
      {(Object.entries(selectedFilters) as [FilterKey, string | null][])
        .filter(([, value]) => Boolean(value))
        .map(([key, value]) => {
          const config = FILTER_CONFIG[key];

          return (
            <Button
              key={key}
              onClick={onClick}
              className={`py-[2px]! px-1! ${config.gapClass}`}
            >
              {config.renderIcon(value!)}
              <span className="text-[11px]! md:text-sm">
                {config.getLabel(value!)}
              </span>
              <X className="w-4 h-4 text-gray-400" />
            </Button>
          );
        })}
    </div>
  );
};

export default memo(MobileSelectedFilters);
