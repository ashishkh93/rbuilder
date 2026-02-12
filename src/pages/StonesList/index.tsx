import FilterDropdown from "@/components/engagement/filter/FilterDropdown";
import PriceFilter from "@/components/engagement/filter/PriceFilter";
import ResetDivider from "@/components/stone/list/ResetDivider";
import StoneCategoryGrid from "@/components/stone/list/StoneCategoryGrid";
import StoneFilterComp from "@/components/stone/list/StoneFilterComp";
import StoneGrid from "@/components/stone/list/StoneGrid";
import StoneHeader from "@/components/stone/list/StoneHeader";
import StoneTypeTabs from "@/components/stone/list/StoneTypeTabs";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectPriceSort } from "@/store/filters/filters.selectors";
import { setDiamondSingle } from "@/store/filters/filters.slice";
import { getPriceLabel } from "@/utils/constants";

const StonesList = () => {
  const dispatch = useAppDispatch();
  const priceSort = useAppSelector(selectPriceSort);

  return (
    <>
      <div>
        <StoneHeader />
        <div className="rb:py-2">
          <StoneTypeTabs />
        </div>
        <div className="rb:py-6!">
          <StoneCategoryGrid />
        </div>
        <ResetDivider />
        <div className="rb:pt-6! rb:pb-2!">
          <StoneFilterComp />
        </div>
        <div className="rb:py-1! rb:flex rb:flex-col rb:gap-5">
          <div className="rb:flex rb:items-center rb:justify-end">
            <FilterDropdown
              filterKey="price"
              triggerLabel={getPriceLabel(priceSort)}
              title="Select Price"
              options={[]}
              customDropDownComponent={
                <PriceFilter
                  onChange={(value) =>
                    dispatch(setDiamondSingle({ key: "priceSort", value }))
                  }
                  value={priceSort}
                />
              }
            />
          </div>
          <StoneGrid />
        </div>
      </div>
    </>
  );
};

export default StonesList;
