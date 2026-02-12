import FilterDropdown from "@/components/engagement/filter/FilterDropdown";
import PriceFilter from "./PriceFilter";
import {
  getMetalLabel,
  getShapeLabel,
  METAL_COLORS,
  METAL_OPTIONS,
  SHAPE_OPTIONS,
} from "../../icons/metalConfig";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/lib/utils";
import MobileSelectedFilters from "./MobileSelectedFilters";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectActiveFilters } from "@/store/filters/filters.selectors";
import { setMetal, setShape, setSort } from "@/store/filters/filters.slice";
import { MetalRingIcon } from "../../icons/MetalRingIcon";
import { SHAPE_ICONS } from "../../icons/shapeIcon";
import { getPriceLabel } from "@/utils/constants";
import { shallowEqual } from "react-redux";

const FilterSection = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);
  const dispatch = useAppDispatch();

  const { metal, shape, sort } = useAppSelector(
    selectActiveFilters,
    shallowEqual
  );

  return (
    <>
      <div className="rb:flex rb:justify-between rb:gap-2 rb:my-2">
        <div className="rb:flex rb:gap-2">
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
                    className="rb:w-5 rb:h-5 rb:mx-1"
                  />
                }
                onChange={(id) => dispatch(setShape(id))}
              />
            </>
          )}
        </div>

        <FilterDropdown
          filterKey="price"
          triggerLabel={getPriceLabel(sort || "")}
          title="Select Price"
          options={[]}
          customDropDownComponent={
            <PriceFilter
              onChange={(id) => dispatch(setSort(id as SortOrder))}
              value={sort || ""}
            />
          }
        />
      </div>

      {isMobile && <MobileSelectedFilters />}
    </>
  );
};

export default FilterSection;
