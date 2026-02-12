import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn, MEDIA_QUERIES } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Input } from "../ui/input";

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

  const committedRef = useRef<[number, number]>(draft as [number, number]);

  useEffect(() => {
    setDraft(isRange ? [...(value as number[])] : [value as number]);
  }, [value, isRange]);

  const commit = useCallback(
    (next: number[]) => {
      onChange(isRange ? (next as [number, number]) : next[0]);
    },
    [isRange, onChange]
  );

  const handleInputBlur = useCallback(() => {
    if (
      committedRef.current[0] === draft[0] &&
      committedRef.current[1] === draft[1]
    ) {
      return; // nothing changed
    }

    commit(draft);
    committedRef.current = draft as [number, number];
  }, [commit, draft]);

  return (
    <div className={cn("rb:space-y-4", className)}>
      {/* Header */}
      <div className="rb:text-sm rb:font-medium rb:text-black">{label}</div>

      {/* Slider */}
      <div className="rb:relative">
        <Slider
          value={draft}
          min={min}
          max={max}
          step={step}
          onValueChange={setDraft}
          onValueCommit={commit}
          className={`rb:w-full rb:sm:w-full! rb:cursor-pointer!`}
          // className={`rb:w-full rb:sm:w-[calc(100%+15px)] rb:cursor-pointer!`}
        />

        {marks && isRange && (
          <div className="rb:pointer-events-none rb:absolute rb:inset-x-0 rb:top-0!">
            {/* This height & offset matches shadcn track */}
            <div className="rb:relative rb:h-1.5">
              {Array.from({ length: marks.length }).map((_, i) => {
                const left =
                  ((i + (isSmallScreen ? 0 : 0)) / marks.length) * 100;
                if (i !== 0)
                  return (
                    <span
                      key={i}
                      className="rb:absolute rb:top-0 rb:h-full rb:w-px rb:bg-white!"
                      style={{ left: `${left}%` }}
                    />
                  );
              })}
            </div>
          </div>
        )}

        {/* Marks / splitters */}
        {marks && isRange && (
          <div className="rb:relative rb:mt-3 rb:h-4">
            {marks.map((m, index) => {
              const left = ((index + 0.45) / marks.length) * 100;

              return (
                <span
                  key={m.value}
                  className="rb:absolute rb:text-xs rb:text-gray-600 rb:whitespace-nowrap"
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
        <div className="rb:flex rb:justify-between rb:gap-4">
          <Input
            type="number"
            min={0}
            value={draft[0]}
            onChange={(e) => setDraft([+e.target.value, draft[1]])}
            onBlur={handleInputBlur}
            className="rb:h-8! rb:w-32!"
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
          />

          <Input
            type="number"
            min={0}
            value={draft[1]}
            onChange={(e) => setDraft([draft[0], +e.target.value])}
            onBlur={handleInputBlur}
            className="rb:h-8! rb:w-32!"
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default memo(FilterRangeSlider);
