import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NativeSelect({
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & { size?: "sm" | "default" }) {
  return (
    <div
      className="rb:group/native-select rb:relative rb:w-full! rb:has-[select:disabled]:opacity-50"
      data-slot="native-select-wrapper"
    >
      <select
        data-slot="native-select"
        data-size={size}
        className={cn(
          "rb:border-input rb:placeholder:text-muted-foreground rb:selection:bg-primary rb:selection:text-primary-foreground rb:dark:bg-input/30 rb:dark:hover:bg-input/50 rb:h-9 rb:w-full rb:min-w-0 rb:appearance-none rb:rounded-md rb:border rb:bg-transparent rb:px-3 rb:py-2 rb:pr-9 rb:text-sm rb:shadow-xs rb:transition-[color,box-shadow] rb:outline-none rb:disabled:pointer-events-none rb:disabled:cursor-not-allowed rb:data-[size=sm]:h-8 rb:data-[size=sm]:py-1",
          "rb:focus-visible:border-ring rb:focus-visible:ring-ring/50 rb:focus-visible:ring-[3px]",
          "rb:aria-invalid:ring-destructive/20 rb:dark:aria-invalid:ring-destructive/40 rb:aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {/* <ChevronDownIcon
        className="rb:text-muted-foreground rb:pointer-events-none rb:absolute rb:top-1/2 rb:right-3.5 rb:size-4 rb:-translate-y-1/2 rb:opacity-50 rb:select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      /> */}
    </div>
  )
}

function NativeSelectOption({ ...props }: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
