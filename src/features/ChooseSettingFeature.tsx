import FilterDropdown from "@/components/engagement/filter/FilterDropdown";
import RingSizeFilter from "@/components/engagement/filter/RingSizeFilter";
import { getBandWidths, RING_SIZES } from "@/utils/constants";
import React from "react";

interface ChooseSettingUIProps {
  ringSize: string;
  bandWidth: string;

  showRingSizeError?: boolean;
  showBandWidthError?: boolean;

  isLoading?: boolean;
  isBand?: boolean;

  onRingSizeChange?: (value: string) => void;
  onBandWidthChange?: (value: string) => void;
  onPrimaryAction?: () => void;
}

const ChooseSettingFeature: React.FC<ChooseSettingUIProps> = ({
  ringSize,
  bandWidth,

  showRingSizeError = false,
  showBandWidthError = false,

  isLoading = false,
  isBand = false,

  onRingSizeChange,
  onBandWidthChange,
  onPrimaryAction,
}) => {
  return (
    <div className="space-y-6">
      {/* Ring Size */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-900">Ring Size</label>

        <div className="flex items-center gap-3">
          <FilterDropdown
            filterKey="ringSize"
            triggerLabel="Ring Size"
            options={[]}
            customDropDownComponent={
              <RingSizeFilter onChange={() => {}} value={""} />
            }
          />
          {/* <select
            value={ringSize}
            onChange={(e) => onRingSizeChange?.(e.target.value)}
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2
              ${
                showRingSizeError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-black"
              }`}
          >
            <option value="">Select Ring Size</option>
            {getRingSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select> */}

          <a
            href="/pages/ring-size-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-sm font-medium underline"
          >
            Size Guide
          </a>
        </div>
      </div>

      {/* Band Width */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-900">Band Width</label>

        <select
          value={bandWidth}
          onChange={(e) => onBandWidthChange?.(e.target.value)}
          className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2
            ${
              showBandWidthError
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-black"
            }`}
        >
          <option value="">Select Band Width</option>
          {getBandWidths.map((width) => (
            <option key={width} value={width}>
              {width}
            </option>
          ))}
        </select>
      </div>

      {/* CTA */}
      <button
        type="button"
        disabled={isLoading}
        onClick={onPrimaryAction}
        className="w-full rounded-md bg-black py-3 text-sm font-semibold text-white
          transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading
          ? "Loading..."
          : isBand
            ? "Add To Cart"
            : "Select This Setting"}
      </button>
    </div>
  );
};

export default ChooseSettingFeature;
