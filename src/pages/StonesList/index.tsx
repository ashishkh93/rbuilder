import FilterDropdown from "@/components/engagement/filter/FilterDropdown";
import PriceFilter from "@/components/engagement/filter/PriceFilter";
import ResetDivider from "@/components/stone/list/ResetDivider";
import StoneCategoryGrid from "@/components/stone/list/StoneCategoryGrid";
import StoneFilterComp from "@/components/stone/list/StoneFilterComp";
import StoneGrid from "@/components/stone/list/StoneGrid";
import StoneHeader from "@/components/stone/list/StoneHeader";
import StoneTypeTabs from "@/components/stone/list/StoneTypeTabs";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectPriceSort } from "@/store/filters/filters.selectors";
import { setDiamondSingle } from "@/store/filters/filters.slice";
import { getPriceLabel } from "@/utils/constants";

const StonesList = () => {
  const dispatch = useAppDispatch();
  const priceSort = useAppSelector(selectPriceSort);

  return (
    <div>
      <StoneHeader />
      <div className="py-2">
        <StoneTypeTabs />
      </div>
      <div className="py-6!">
        <StoneCategoryGrid />
      </div>
      <ResetDivider />
      <div className="py-6!">
        <StoneFilterComp />
      </div>
      <div className="py-3!">
        <Separator />
      </div>
      <div className="py-1! flex flex-col gap-5">
        <div className="flex items-center justify-end">
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
  );
};

export default StonesList;
