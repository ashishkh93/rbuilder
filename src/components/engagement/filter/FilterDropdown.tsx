// src/components/common/FilterDropdown.tsx
import { ChevronDown } from "lucide-react";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import ButtonWithIcon from "../../common/ButttonWithIcon";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileFilterDropdown from "./MobileFilterDropdown";
import FilterButttonWithValue from "./FilterButttonWithValue";
import SettingOptionsRenderer from "./SettingOptionsRenderer";
import { MEDIA_QUERIES } from "@/lib/utils";
import MobileFilterButton from "./MobileFilterButton";
import { selectCurrentActiveFilterDropdown } from "@/store/filters/filters.selectors";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrentActiveFilterDropdown } from "@/store/filters/filters.slice";

const FilterDropdown = ({
  filterKey,
  triggerLabel,
  title,
  options,
  widthClass = "rb:w-70",
  columnsClass = "rb:md:grid-cols-3",
  onChange,
  value,
  customDropDownComponent,
  selectedValueIcon = <> </>,
}: FilterDropdownProps) => {
  const currentActiveFilterDropdown = useAppSelector(
    selectCurrentActiveFilterDropdown
  );

  const dispatch = useAppDispatch();
  const [internalValue, setInternalValue] = useState(options[0]?.id);
  const ref = useRef<HTMLDivElement | null>(null);

  const open = useMemo(
    () =>
      (currentActiveFilterDropdown === "mobile" && filterKey !== "price") ||
      currentActiveFilterDropdown === filterKey,
    [currentActiveFilterDropdown, filterKey]
  );

  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  const setOpen = useCallback(
    (open: string) => {
      dispatch(setCurrentActiveFilterDropdown(open));
    },
    [dispatch]
  );

  const selectedId = useMemo(
    () => value ?? internalValue,
    [value, internalValue]
  );

  // Close on outside click
  // useEffect(() => {
  //   const handler = (e: MouseEvent) => {
  //     if (ref.current && !ref.current.contains(e.target as Node)) {
  //       setOpen("");
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => document.removeEventListener("mousedown", handler);
  // }, []);

  const handleSelect = useCallback((id: string) => {
    setInternalValue(id);
    onChange?.(id);
    setOpen("");
  }, []);

  return (
    <div
      className="rb:relative"
      aria-expanded={currentActiveFilterDropdown === triggerLabel}
    >
      {/* Trigger */}
      {isMobile && !customDropDownComponent ? (
        <div className="rb:space-y-2!">
          <MobileFilterButton
            label={triggerLabel}
            onClick={() => setOpen(filterKey)}
          />
        </div>
      ) : !!selectedId ? (
        <FilterButttonWithValue
          valueLabel={selectedId}
          onClick={() => setOpen(filterKey)}
          icon={selectedValueIcon}
          onClickRemove={() => onChange?.("")}
        />
      ) : (
        <ButtonWithIcon
          triggerLabel={triggerLabel}
          onClick={() => setOpen(filterKey)}
          icon={
            <ChevronDown
              className={`rb:w-3.5 rb:h-3.5 rb:transition-transform rb:duration-300 ${
                open ? "rb:rotate-180" : ""
              }`}
            />
          }
        />
      )}

      {/* Dropdown panel */}
      {customDropDownComponent && open ? (
        <>{customDropDownComponent}</>
      ) : isMobile ? (
        <MobileFilterDropdown
          open={open}
          setOpen={(open) => setOpen(open ? "mobile" : "")}
        />
      ) : (
        <div
          ref={ref}
          className={`rb:absolute rb:top-full rb:left-0 rb:pt-3 rb:z-60 ${widthClass} rb:transition-all rb:duration-200 rb:origin-top ${open ? "rb:visible rb:opacity-100 rb:translate-y-0" : "rb:invisible rb:opacity-0 rb:-translate-y-1"}`}
        >
          <div className="rb:p-6 rb:pt-5 rb:bg-white! rb:rounded-md rb:shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
            <div className="rb:flex rb:gap-0.5 rb:items-center rb:mb-4">
              <div className="rb:text-base rb:font-bold rb:text-black rb:leading-tight">
                {title}
              </div>
            </div>

            <div className="rb:relative">
              <SettingOptionsRenderer
                options={options}
                selectedId={selectedId}
                handleSelect={handleSelect}
                columnsClass={columnsClass}
                labelClass={"rb:text-xs! rb:md:text-10!"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(FilterDropdown);
