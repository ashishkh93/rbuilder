import { useAppDispatch } from "@/store";
import { setCurrentActiveFilterDropdown } from "@/store/filters/filters.slice";
import { PRICE_FILTER_OPTIONS, RING_SIZES } from "@/utils/constants";

const RingSizeFilter = ({ onChange, value }: PriceFilterProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="absolute top-full left-0 z-60 w-full pt-3">
      <div className="rounded-md bg-white shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
        {/* THIS is the scroll container */}
        <div className="max-h-[240px] overflow-y-auto">
          <div className="flex flex-col">
            {RING_SIZES.map((opt) => {
              const isActive = opt.id === value;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    onChange(opt.id as SortOrder);
                    dispatch(setCurrentActiveFilterDropdown(""));
                  }}
                  className={`px-3 py-2 text-sm text-left transition-colors
                ${isActive ? "bg-gray-100" : "hover:bg-gray-50"}`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingSizeFilter;
