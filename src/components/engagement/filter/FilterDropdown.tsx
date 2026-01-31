// src/components/common/FilterDropdown.tsx
import { ChevronDown } from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ButtonWithIcon from "../../common/ButttonWithIcon";
import { MetalRingIcon } from "../icons/MetalRingIcon";
import { METAL_COLORS } from "../icons/metalConfig";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileFilterDropdown from "./MobileFilterDropdown";
import FilterButttonWithValue from "./FilterButttonWithValue";
import SettingOptionsRenderer from "./SettingOptionsRenderer";
import { MEDIA_QUERIES } from "@/lib/utils";
import MobileFilterButton from "./MobileFilterButton";
import {
  selectMetalFilter,
  selectCurrentActiveFilterDropdown,
} from "@/store/filters/filters.selectors";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrentActiveFilterDropdown } from "@/store/filters/filters.slice";

const FilterDropdown = ({
  filterKey,
  triggerLabel,
  title,
  options,
  widthClass = "w-70",
  columnsClass = "md:grid-cols-3",
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
      currentActiveFilterDropdown === "mobile" ||
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
      className="relative"
      aria-expanded={currentActiveFilterDropdown === triggerLabel}
    >
      {/* Trigger */}
      {isMobile && !customDropDownComponent ? (
        <div className="space-y-2!">
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
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                open ? "rotate-180" : ""
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
          className={`absolute top-full left-0 pt-3 z-60 ${widthClass} transition-all duration-200 origin-top ${open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"}`}
        >
          <div className="p-6 pt-5 bg-white! rounded-md shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
            <div className="flex gap-0.5 items-center mb-4">
              <div className="text-base font-bold text-black leading-tight">
                {title}
              </div>
            </div>

            <div className="relative">
              <SettingOptionsRenderer
                options={options}
                selectedId={selectedId}
                handleSelect={handleSelect}
                columnsClass={columnsClass}
                labelClass={"text-xs! md:text-10!"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(FilterDropdown);
