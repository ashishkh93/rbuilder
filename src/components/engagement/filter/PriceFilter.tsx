import { useAppDispatch, useAppSelector } from "@/store";
import { selectSortOrder } from "@/store/filters/filters.selectors";
import { setCurrentActiveFilterDropdown, setSort } from "@/store/filters/filters.slice";
import { useMemo } from "react";

const PriceFilter = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSortOrder);

  const options = useMemo(
    () => [
      {
        id: "price-desc",
        label: "Price(high to low)",
      },
      {
        id: "price-asc",
        label: "Price(low to high)",
      },
    ],
    []
  );

  return (
    <div
      className={`absolute top-full left-0 pt-3 z-60 transition-all duration-800 origin-top visible opacity-100 translate-y-0 w-full!`}
    >
      <div className="p-2 bg-white! rounded-md shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
        <div className="relative w-full!">
          <div
            className={`md:w-full gap-2 whitespace-nowrap snap-start hiddenScroll overflow-x-auto overflow-y-hidden scroll-smooth p-px md:p-0.5 flex flex-col md:justify-start! md:snap-center`}
          >
            {options.map((opt) => {
              const isActive = opt.id === sort;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    dispatch(setSort(opt.id as SortOrder));
                    dispatch(setCurrentActiveFilterDropdown(""));
                  }}
                  className={`min-w-max! shrink-0 p-2 pb-1.75 cursor-pointer md:px-1 md:min-w-full! select-none rounded-[4px] transition-colors bg-customGray-150! border-borders md:hover:bg-customGray-75! ${isActive ? "bg-gray-100!" : "md:bg-white!"}`}
                >
                  <div className="-mt-0.5 md:mt-0 text-sm leading-4 tracking-tight! overflow-hidden text-ellipsis text-[12px] md:leading-tight text-condensed!">
                    {opt.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
