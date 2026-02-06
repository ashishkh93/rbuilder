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
    <div className="fixed inset-x-0 bottom-0 z-100! bg-white rounded-t-2xl shadow-xl max-h-[90vh] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <button
          className="p-2 cursor-pointer"
          onClick={() => dispatch(resetRingFilters())}
        >
          <RotateCcw size={18} />
        </button>

        <div className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
          Filters Selected {selectedCount}
        </div>

        <button
          className="p-2 cursor-pointer"
          onClick={() => dispatch(setCurrentActiveFilterDropdown(""))}
        >
          <X size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-28">
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
      <div className="fixed inset-x-0 bottom-0 bg-white p-4">
        <button className="w-full h-12 rounded-full bg-black text-white text-sm font-medium">
          View Results
        </button>
      </div>
    </div>
  );
};

export default FiltersSheet;
