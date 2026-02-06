import { useAppDispatch } from "@/store";
import { resetDiamondFilters } from "@/store/filters/filters.slice";
import { RotateCcw } from "lucide-react";
import { useCallback } from "react";

const ResetDivider = ({ disabled = false }: ResetDividerProps) => {
  const dispatch = useAppDispatch();

  const onReset = useCallback(() => {
    dispatch(resetDiamondFilters());
  }, []);

  return (
    <div className="relative my-1 flex items-center">
      {/* Left line */}
      <div className="flex-1 border-t border-gray-200" />

      {/* Reset button */}
      <button
        type="button"
        disabled={disabled}
        onClick={onReset}
        className={`mx-2 cursor-pointer inline-flex items-center gap-1 text-xs font-medium transition ${
          disabled
            ? "cursor-not-allowed text-gray-300"
            : "text-gray-400! hover:text-gray-900"
        }
        `}
      >
        Reset
        <RotateCcw className="h-3.5 w-3.5" />
      </button>

      {/* Right line */}
      <div className="flex-1 border-t border-gray-200" />
    </div>
  );
};

export default ResetDivider;
