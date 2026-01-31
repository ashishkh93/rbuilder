import FilterDropdown from "@/components/engagement/filter/FilterDropdown";
import PriceFilter from "./PriceFilter";
import {
  getMetalLabel,
  getShapeLabel,
  METAL_COLORS,
  METAL_OPTIONS,
  SHAPE_OPTIONS,
} from "../icons/metalConfig";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/lib/utils";
import MobileSelectedFilters from "./MobileSelectedFilters";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectMetalFilter,
  selectShapeFilter,
} from "@/store/filters/filters.selectors";
import { setMetal, setShape } from "@/store/filters/filters.slice";
import { MetalRingIcon } from "../icons/MetalRingIcon";
import { SHAPE_ICONS } from "../icons/shapeIcon";
import { memo } from "react";

const FilterSection = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);
  const dispatch = useAppDispatch();

  const metal = useAppSelector(selectMetalFilter);
  const shape = useAppSelector(selectShapeFilter);

  return (
    <>
      <div className="flex justify-between gap-2 my-2">
        <div className="flex gap-2">
          {isMobile ? (
            <FilterDropdown
              filterKey="filters"
              triggerLabel="Filters"
              options={[]}
            />
          ) : (
            <>
              <FilterDropdown
                filterKey="metal"
                triggerLabel="Metal"
                title="Select Metal"
                options={METAL_OPTIONS}
                value={getMetalLabel(metal || "")}
                selectedValueIcon={
                  <MetalRingIcon
                    color={METAL_COLORS?.[metal as keyof typeof METAL_COLORS]}
                    width={25}
                    height={25}
                    radius={15}
                  />
                }
                onChange={(id) => dispatch(setMetal(id))}
              />
              <FilterDropdown
                filterKey="shape"
                triggerLabel="Shape"
                title="Select Shape"
                options={SHAPE_OPTIONS}
                value={getShapeLabel(shape || "")}
                selectedValueIcon={
                  <img
                    src={SHAPE_ICONS[shape as keyof typeof SHAPE_ICONS]}
                    alt="Round"
                    className="w-5 h-5 mx-1"
                  />
                }
                onChange={(id) => dispatch(setShape(id))}
              />
            </>
          )}
        </div>

        <FilterDropdown
          filterKey="price"
          triggerLabel="Price (low-to-high)"
          title="Select Price"
          options={[]}
          customDropDownComponent={<PriceFilter />}
        />
      </div>

      {isMobile && <MobileSelectedFilters onClick={() => {}} />}
    </>
  );
};

export default memo(FilterSection);
