"use client";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { forwardRef } from "react";

const AppSelect = forwardRef<HTMLSelectElement, AppSelectProps>(
  (
    {
      value = "",
      options,
      placeholder,
      disabled,
      onChange,
      className,
      error,
    }: AppSelectProps,
    ref
  ) => {
    return (
      <NativeSelect
        ref={ref}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`${error ? "rb:border-red-500!" : ""} ${className}`}
      >
        {placeholder && (
          <NativeSelectOption
            value=""
            disabled
            className={error ? "rb:text-red-500!" : ""}
          >
            {placeholder}
          </NativeSelectOption>
        )}

        {options.map((opt) => (
          <NativeSelectOption key={opt.id} value={opt.id}>
            {opt.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    );
  }
);

export default AppSelect;
