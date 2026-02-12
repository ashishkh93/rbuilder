import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "rb:file:text-foreground rb:placeholder:text-muted-foreground rb:selection:bg-primary! rb:selection:text-primary-foreground rb:dark:bg-input/30 rb:border-input! rb:h-9 rb:w-full rb:min-w-0 rb:rounded-sm! rb:border! rb:bg-transparent! rb:px-3! rb:py-1! rb:text-base rb:shadow-xs rb:transition-[color,box-shadow] rb:outline-none rb:file:inline-flex rb:file:h-7 rb:file:border-0! rb:file:bg-transparent rb:file:text-sm rb:file:font-medium rb:disabled:pointer-events-none rb:disabled:cursor-not-allowed rb:disabled:opacity-50 rb:md:text-sm",
        "rb:focus-visible:border-ring rb:focus-visible:ring-ring/50 rb:focus-visible:ring-[3px]",
        "rb:aria-invalid:ring-destructive/20 rb:dark:aria-invalid:ring-destructive/40 rb:aria-invalid:border-destructive",
        type === "number" &&
          "rb:[appearance:textfield] rb:[-moz-appearance:textfield] rb:[&::-webkit-inner-spin-button]:appearance-none rb:[&::-webkit-outer-spin-button]:appearance-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
