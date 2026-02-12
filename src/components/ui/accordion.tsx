import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("rb:border-b rb:last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="rb:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "rb:focus-visible:border-ring rb:focus-visible:ring-ring/50 rb:flex rb:flex-1 rb:items-start rb:justify-between rb:gap-4 rb:rounded-md rb:py-4 rb:text-left rb:text-sm rb:font-medium rb:transition-all rb:outline-none rb:hover:underline rb:focus-visible:ring-[3px] rb:disabled:pointer-events-none rb:disabled:opacity-50 rb:[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="rb:text-muted-foreground rb:pointer-events-none rb:size-4 rb:shrink-0 rb:translate-y-0.5 rb:transition-transform rb:duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="rb:data-[state=closed]:rb:animate-accordion-up rb:data-[state=open]:animate-accordion-down rb:overflow-hidden rb:text-sm"
      {...props}
    >
      <div className={cn("rb:pt-0 rb:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
