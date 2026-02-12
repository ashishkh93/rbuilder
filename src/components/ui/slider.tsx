import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "rb:relative rb:flex rb:w-full rb:touch-none rb:items-center rb:select-none rb:data-disabled:opacity-50 rb:data-[orientation=vertical]:h-full rb:data-[orientation=vertical]:min-h-44 rb:data-[orientation=vertical]:w-auto rb:data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "rb:bg-gray-300 rb:relative rb:grow rb:overflow-hidden rb:rounded-full rb:data-[orientation=horizontal]:h-1.5 rb:data-[orientation=horizontal]:w-full rb:data-[orientation=vertical]:h-full rb:data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "rb:bg-primary rb:absolute rb:data-[orientation=horizontal]:h-full rb:data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="rb:border-primary rb:ring-ring/50 rb:block rb:size-4 rb:shrink-0 rb:rounded-full rb:border rb:bg-white rb:shadow-sm rb:transition-[color,box-shadow] rb:hover:ring-4 rb:focus-visible:ring-4 rb:focus-visible:outline-hidden rb:disabled:pointer-events-none rb:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
