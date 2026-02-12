import { useAppDispatch } from "@/store";
import { setCurrentActiveFilterDropdown } from "@/store/filters/filters.slice";
import { PRICE_FILTER_OPTIONS } from "@/utils/constants";

const PriceFilter = ({ onChange, value }: PriceFilterProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`rb:absolute rb:top-full rb:left-0 rb:pt-3 rb:z-60 rb:transition-all rb:duration-800 rb:origin-top rb:visible rb:opacity-100 rb:translate-y-0 rb:w-full!`}
    >
      <div className="rb:p-2 rb:bg-white! rb:rounded-md rb:shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
        <div className="rb:relative rb:w-full!">
          <div
            className={`rb:md:w-full rb:gap-2 rb:whitespace-nowrap rb:snap-start rb:hiddenScroll rb:overflow-x-auto rb:overflow-y-hidden rb:scroll-smooth rb:p-px rb:md:p-0.5 rb:flex rb:flex-col rb:justify-start! rb:snap-center`}
          >
            {PRICE_FILTER_OPTIONS.map((opt) => {
              const isActive = opt.id === value;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    onChange(opt.id as SortOrder);
                    dispatch(setCurrentActiveFilterDropdown(""));
                  }}
                  className={`rb:min-w-max! rb:shrink-0 rb:p-2 rb:pb-1.75 rb:cursor-pointer rb:md:px-1 rb:md:min-w-full! rb:select-none rb:rounded-[4px] rb:transition-colors rb:bg-customGray-150! rb:border-borders rb:hover:bg-customGray-75! ${isActive ? "rb:bg-gray-100!" : "rb:bg-white!"}`}
                >
                  <div className="rb:-mt-0.5 md:rb:mt-0 rb:text-sm rb:leading-4 rb:tracking-tight! rb:overflow-hidden rb:text-ellipsis rb:text-[12px] md:rb:leading-tight rb:text-condensed!">
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
