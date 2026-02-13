import * as React from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "rb:border-input rb:data-placeholder:text-muted-foreground rb:[&_svg:not([class*='text-'])]:text-muted-foreground rb:focus-visible:border-ring rb:focus-visible:ring-ring/50 rb:aria-invalid:ring-destructive/20 rb:dark:aria-invalid:ring-destructive/40 rb:aria-invalid:border-destructive rb:dark:bg-input/30 rb:dark:hover:bg-input/50 rb:flex rb:w-fit rb:items-center rb:justify-between rb:gap-2 rb:rounded-md rb:border rb:bg-transparent rb:px-3 rb:py-2 rb:text-sm rb:whitespace-nowrap rb:shadow-xs rb:transition-[color,box-shadow] rb:outline-none rb:focus-visible:ring-[3px] rb:disabled:cursor-not-allowed rb:disabled:opacity-50 rb:data-[size=default]:h-9 rb:data-[size=sm]:h-8 rb:*:data-[slot=select-value]:line-clamp-1 rb:*:data-[slot=select-value]:flex rb:*:data-[slot=select-value]:items-center rb:*:data-[slot=select-value]:gap-2 rb:[&_svg]:pointer-events-none rb:[&_svg]:shrink-0 rb:[&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="rb:size-4 rb:opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "rb:bg-popover rb:text-popover-foreground rb:data-[state=open]:animate-in rb:data-[state=closed]:animate-out rb:data-[state=closed]:fade-out-0 rb:data-[state=open]:fade-in-0 rb:data-[state=closed]:zoom-out-95 rb:data-[state=open]:zoom-in-95 rb:data-[side=bottom]:slide-in-from-top-2 rb:data-[side=left]:slide-in-from-right-2 rb:data-[side=right]:slide-in-from-left-2 rb:data-[side=top]:slide-in-from-bottom-2 rb:relative rb:z-50 rb:max-h-(--radix-select-content-available-height) rb:min-w-32 rb:origin-(--radix-select-content-transform-origin) rb:overflow-x-hidden rb:overflow-y-auto rb:rounded-md rb:border rb:shadow-md",
          position === "popper" &&
            "rb:data-[side=bottom]:translate-y-1 rb:data-[side=left]:-translate-x-1 rb:data-[side=right]:translate-x-1 rb:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "rb:p-1",
            position === "popper" &&
              "rb:h-[var(--radix-select-trigger-height)] rb:w-full rb:min-w-[var(--radix-select-trigger-width)] rb:scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "rb:text-muted-foreground rb:px-2 rb:py-1.5 rb:text-xs",
        className
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "rb:focus:bg-accent rb:focus:text-accent-foreground rb:[&_svg:not([class*='text-'])]:text-muted-foreground rb:relative rb:flex rb:w-full rb:cursor-default rb:items-center rb:gap-2 rb:rounded-sm rb:py-1.5 rb:pr-8 rb:pl-2 rb:text-sm rb:outline-hidden rb:select-none rb:data-[disabled]:pointer-events-none rb:data-[disabled]:opacity-50 rb:[&_svg]:pointer-events-none rb:[&_svg]:shrink-0 rb:[&_svg:not([class*='size-'])]:size-4 rb:*:[span]:last:flex rb:*:[span]:last:items-center rb:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="rb:absolute rb:right-2 rb:flex rb:size-3.5 rb:items-center rb:justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="rb:size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "rb:bg-border rb:pointer-events-none rb:-mx-1 rb:my-1 rb:h-px",
        className
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "rb:flex rb:cursor-default rb:items-center rb:justify-center rb:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="rb:size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "rb:flex rb:cursor-default rb:items-center rb:justify-center rb:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="rb:size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
