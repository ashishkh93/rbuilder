import { memo, useCallback, useMemo } from "react";
import Button from "@/components/shared/button/Button";
import { MetalRingIcon } from "../../icons/MetalRingIcon";
import {
  getMetalLabel,
  getShapeLabel,
  METAL_COLORS,
} from "../../icons/metalConfig";
import { SHAPE_ICONS } from "../../icons/shapeIcon";
import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectMetalFilter,
  selectShapeFilter,
} from "@/store/filters/filters.selectors";
import { RING_TYPE_ICONS } from "@/components/shared/icons/ringTypeIcon";
import { getStyleLabel } from "@/utils/constants";
import {
  setCurrentActiveFilterDropdown,
  setMetal,
  setShape,
  setStyle,
} from "@/store/filters/filters.slice";

type FilterKey = "metal" | "shape";

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

  // style: {
  //   getLabel: getStyleLabel,
  //   renderIcon: (value) => (
  //     <img
  //       src={RING_TYPE_ICONS[value as keyof typeof RING_TYPE_ICONS]}
  //       alt={value}
  //       className="w-6 h-4 ml-1"
  //     />
  //   ),
  //   gapClass: "gap-2!",
  // },
};

const MobileSelectedFilters = () => {
  const metal = useAppSelector(selectMetalFilter);
  const shape = useAppSelector(selectShapeFilter);
  const dispatch = useAppDispatch();

  const selectedFilters = { metal, shape } as const;

  const onClick = useCallback(() => {
    dispatch(setCurrentActiveFilterDropdown("mobile"));
  }, []);

  const onRemoveClick = useCallback((key: FilterKey) => {
    switch (key) {
      case "metal":
        dispatch(setMetal(null));
        break;
      case "shape":
        dispatch(setShape(null));
        break;
    }
  }, []);

  const hasAtleastOneFilter = useMemo(() => {
    return Object.values(selectedFilters).some((value) => Boolean(value));
  }, [selectedFilters]);

  return (
    <div
      className={`flex gap-2 ${hasAtleastOneFilter ? "min-h-[35px]!" : ""}`}
    >
      {(Object.entries(selectedFilters) as [FilterKey, string | null][])
        .filter(([, value]) => Boolean(value))
        .map(([key, value]) => {
          const config = FILTER_CONFIG[key];

          return (
            <Button
              key={key}
              onClick={onClick}
              className={`py-1! px-2! ${config.gapClass} bg-customGray-75!`}
            >
              {config.renderIcon(value!)}
              <span className="text-11! md:text-sm">
                {config.getLabel(value!)}
              </span>
              <X
                className="w-4 h-4 text-gray-400"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveClick(key);
                }}
              />
            </Button>
          );
        })}
    </div>
  );
};

export default memo(MobileSelectedFilters);
