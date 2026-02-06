import { memo, useCallback, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn, MEDIA_QUERIES } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const FilterRangeSlider = ({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  showInputs = false,
  marks,
  className,
}: FilterRangeSliderProps) => {
  const isSmallScreen = useMediaQuery(MEDIA_QUERIES.small);

  const isRange = Array.isArray(value);

  const [draft, setDraft] = useState<number[]>(
    isRange ? [...(value as number[])] : [value as number]
  );

  useEffect(() => {
    setDraft(isRange ? [...(value as number[])] : [value as number]);
  }, [value, isRange]);

  const commit = useCallback(
    (next: number[]) => {
      onChange(isRange ? (next as [number, number]) : next[0]);
    },
    [isRange, onChange]
  );

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <h4 className="text-sm font-medium text-black">{label}</h4>

      {/* Slider */}
      <div className="relative">
        <Slider
          value={draft}
          min={min}
          max={max}
          step={step}
          onValueChange={setDraft}
          onValueCommit={commit}
          className={`w-full sm:w-[calc(100%+15px)] cursor-pointer!`}
        />

        {marks && isRange && (
          <div className="pointer-events-none absolute inset-x-0 top-0!">
            {/* This height & offset matches shadcn track */}
            <div className="relative h-1.5">
              {Array.from({ length: marks.length }).map((_, i) => {
                const left =
                  ((i + (isSmallScreen ? 0 : 0.15)) / marks.length) * 100;
                if (i !== 0)
                  return (
                    <span
                      key={i}
                      className="absolute top-0 h-full w-px bg-white!"
                      style={{ left: `${left}%` }}
                    />
                  );
              })}
            </div>
          </div>
        )}

        {/* Marks / splitters */}
        {marks && isRange && (
          <div className="relative mt-3 h-4">
            {marks.map((m, index) => {
              const left = ((index + 0.5) / marks.length) * 100;

              return (
                <span
                  key={m.value}
                  className="absolute text-xs text-gray-600 whitespace-nowrap"
                  style={{ left: `${left}%` }}
                >
                  {m.label}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Inputs */}
      {showInputs && isRange && (
        <div className="flex justify-between gap-4">
          <input
            type="number"
            value={draft[0]}
            onChange={(e) => setDraft([+e.target.value, draft[1]])}
            onBlur={() => commit(draft)}
            className="w-32 rounded-md border px-3 py-2 text-sm"
          />

          <input
            type="number"
            value={draft[1]}
            onChange={(e) => setDraft([draft[0], +e.target.value])}
            onBlur={() => commit(draft)}
            className="w-32 rounded-md border px-3 py-2 text-sm"
          />
        </div>
      )}
    </div>
  );
};

export default memo(FilterRangeSlider);
