import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "rb:group/tabs rb:flex rb:gap-2 rb:data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "rb:rounded-lg rb:p-[3px] rb:group-data-[orientation=horizontal]/tabs:h-9 rb:data-[variant=line]:rounded-none rb:group/tabs-list rb:text-muted-foreground rb:inline-flex rb:w-fit rb:items-center rb:justify-center rb:group-data-[orientation=vertical]/tabs:h-fit rb:group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "rb:bg-muted",
        line: "rb:gap-1 rb:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "rb:focus-visible:border-ring rb:focus-visible:ring-ring/50 rb:focus-visible:outline-ring rb:text-foreground/60 rb:hover:text-foreground rb:dark:text-muted-foreground rb:dark:hover:text-foreground rb:relative rb:inline-flex rb:h-[calc(100%-1px)] rb:flex-1 rb:items-center rb:justify-center rb:gap-1.5 rb:rounded-md rb:border rb:border-transparent rb:px-2 rb:py-1 rb:text-sm rb:font-medium rb:whitespace-nowrap rb:transition-all rb:group-data-[orientation=vertical]/tabs:w-full rb:group-data-[orientation=vertical]/tabs:justify-start rb:focus-visible:ring-[3px] rb:focus-visible:outline-1 rb:disabled:pointer-events-none rb:disabled:opacity-50 rb:group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm rb:group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none rb:[&_svg]:pointer-events-none rb:[&_svg]:shrink-0 rb:[&_svg:not([class*='size-'])]:size-4",
        "rb:group-data-[variant=line]/tabs-list:bg-transparent rb:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent rb:dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent rb:dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "rb:data-[state=active]:bg-background rb:dark:data-[state=active]:text-foreground rb:dark:data-[state=active]:border-input rb:dark:data-[state=active]:bg-input/30 rb:data-[state=active]:text-foreground",
        "rb:after:bg-foreground rb:after:absolute rb:after:opacity-0 rb:after:transition-opacity rb:group-data-[orientation=horizontal]/tabs:after:inset-x-0 rb:group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] rb:group-data-[orientation=horizontal]/tabs:after:h-0.5 rb:group-data-[orientation=vertical]/tabs:after:inset-y-0 rb:group-data-[orientation=vertical]/tabs:after:-right-1 rb:group-data-[orientation=vertical]/tabs:after:w-0.5 rb:group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
