import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rb:inline-flex rb:items-center rb:justify-center rb:gap-2 rb:whitespace-nowrap rb:rounded-md rb:text-sm rb:font-medium rb:transition-all rb:disabled:pointer-events-none rb:disabled:opacity-50 rb:[&_svg]:pointer-events-none rb:[&_svg:not([class*='size-'])]:size-4 rb:shrink-0 rb:[&_svg]:shrink-0 rb:outline-none rb:focus-visible:border-ring rb:focus-visible:ring-ring/50 rb:focus-visible:ring-[3px] rb:aria-invalid:ring-destructive/20 rb:dark:aria-invalid:ring-destructive/40 rb:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "rb:bg-primary rb:text-primary-foreground rb:hover:bg-primary/90",
        destructive:
          "rb:bg-destructive rb:text-white rb:hover:bg-destructive/90 rb:focus-visible:ring-destructive/20 rb:dark:focus-visible:ring-destructive/40 rb:dark:bg-destructive/60",
        outline:
          "rb:border rb:bg-background rb:shadow-xs rb:hover:bg-accent rb:hover:text-accent-foreground rb:dark:bg-input/30 rb:dark:border-input rb:dark:hover:bg-input/50",
        secondary:
          "rb:bg-secondary rb:text-secondary-foreground rb:hover:bg-secondary/80",
        ghost:
          "rb:hover:bg-accent rb:hover:text-accent-foreground rb:dark:hover:bg-accent/50",
        link: "rb:text-primary rb:underline-offset-4 rb:hover:underline",
      },
      size: {
        default: "rb:h-9 rb:px-4 rb:py-2 rb:has-[>svg]:px-3",
        xs: "rb:h-6 rb:gap-1 rb:rounded-md rb:px-2 rb:text-xs rb:has-[>svg]:px-1.5 rb:[&_svg:not([class*='size-'])]:size-3",
        sm: "rb:h-8 rb:rounded-md rb:gap-1.5 rb:px-3 rb:has-[>svg]:px-2.5",
        lg: "rb:h-10 rb:rounded-md rb:px-6 rb:has-[>svg]:px-4",
        icon: "rb:size-9",
        "icon-xs": "rb:size-6 rb:rounded-md rb:[&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "rb:size-8",
        "icon-lg": "rb:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
