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
    <div className="rb:relative rb:my-1 rb:flex rb:items-center">
      {/* Left line */}
      <div className="rb:flex-1 rb:border-t rb:border-gray-200" />

      {/* Reset button */}
      <button
        type="button"
        disabled={disabled}
        onClick={onReset}
        className={`rb:mx-2 rb:cursor-pointer rb:inline-flex rb:items-center rb:gap-1 rb:text-xs rb:font-medium rb:transition ${
          disabled
            ? "rb:cursor-not-allowed rb:text-gray-300"
            : "rb:text-gray-400! rb:hover:text-gray-900"
        }
        `}
      >
        Reset
        <RotateCcw className="rb:h-3.5 rb:w-3.5" />
      </button>

      {/* Right line */}
      <div className="rb:flex-1 rb:border-t rb:border-gray-200" />
    </div>
  );
};

export default ResetDivider;
