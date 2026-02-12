import { X, RotateCcw } from "lucide-react";
import MobileFilterSection from "./MobileFilterSection";
import {
  getMetalLabel,
  getShapeLabel,
  METAL_OPTIONS,
  SHAPE_OPTIONS,
} from "../../icons/metalConfig";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  setMetal,
  setShape,
  resetRingFilters,
} from "@/store/filters/filters.slice";
import {
  selectMetalFilter,
  selectShapeFilter,
} from "@/store/filters/filters.selectors";
import { setCurrentActiveFilterDropdown } from "@/store/filters/filters.slice";

const FiltersSheet = () => {
  const dispatch = useAppDispatch();

  const metal = useAppSelector(selectMetalFilter);
  const shape = useAppSelector(selectShapeFilter);

  const selectedCount = [metal, shape].filter(Boolean).length;

  return (
    <div className="rb:fixed rb:inset-x-0 rb:bottom-0 rb:z-100! rb:bg-white rb:rounded-t-2xl rb:shadow-xl rb:max-h-[90vh] rb:flex rb:flex-col">
      {/* Header */}
      <div className="rb:flex rb:items-center rb:justify-between rb:px-4 rb:py-3 rb:border-b">
        <button
          className="rb:p-2 rb:cursor-pointer"
          onClick={() => dispatch(resetRingFilters())}
        >
          <RotateCcw size={18} />
        </button>

        <div className="rb:text-xs rb:px-3 rb:py-1 rb:rounded-full rb:bg-gray-100 rb:text-gray-600">
          Filters Selected {selectedCount}
        </div>

        <button
          className="rb:p-2 rb:cursor-pointer"
          onClick={() => dispatch(setCurrentActiveFilterDropdown(""))}
        >
          <X size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="rb:flex-1 rb:overflow-y-auto rb:pb-28">
        <MobileFilterSection
          title="Metal"
          value={getMetalLabel(metal || "")}
          options={METAL_OPTIONS}
          selected={metal || ""}
          onSelect={(id) => dispatch(setMetal(id))}
        />

        <MobileFilterSection
          title="Shape"
          value={getShapeLabel(shape || "")}
          options={SHAPE_OPTIONS}
          selected={shape || ""}
          onSelect={(id) => dispatch(setShape(id))}
        />
      </div>

      {/* CTA */}
      <div className="rb:fixed rb:inset-x-0 rb:bottom-0 rb:bg-white rb:p-4">
        <button className="rb:w-full rb:h-12 rb:rounded-full rb:bg-black rb:text-white rb:text-sm rb:font-medium">
          View Results
        </button>
      </div>
    </div>
  );
};

export default FiltersSheet;
