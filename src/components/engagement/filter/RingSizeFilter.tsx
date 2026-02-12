import { useAppDispatch } from "@/store";
import { setCurrentActiveFilterDropdown } from "@/store/filters/filters.slice";
import { PRICE_FILTER_OPTIONS, RING_SIZES } from "@/utils/constants";

const RingSizeFilter = ({ onChange, value }: PriceFilterProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="rb:absolute rb:top-full rb:left-0 rb:z-60 rb:w-full rb:pt-3">
      <div className="rb:rounded-md rb:bg-white rb:shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
        {/* THIS is the scroll container */}
        <div className="rb:max-h-[240px] rb:overflow-y-auto">
          <div className="rb:flex rb:flex-col">
            {RING_SIZES.map((opt) => {
              const isActive = opt.id === value;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(opt.id as SortOrder);
                    dispatch(setCurrentActiveFilterDropdown(""));
                  }}
                  className={`rb:px-3! rb:py-2! rb:text-sm! rb:text-left! rb:transition-colors! ${isActive ? "rb:bg-gray-100!" : "rb:hover:bg-gray-50!"}`}
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
