import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "rb:data-[state=open]:animate-in rb:data-[state=closed]:animate-out rb:data-[state=closed]:fade-out-0 rb:data-[state=open]:fade-in-0 rb:fixed rb:inset-0 rb:z-50 rb:bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "rb:group/drawer-content rb:bg-background rb:fixed rb:z-50 rb:flex rb:h-auto rb:flex-col",
          "rb:data-[vaul-drawer-direction=top]:inset-x-0 rb:data-[vaul-drawer-direction=top]:top-0 rb:data-[vaul-drawer-direction=top]:mb-24 rb:data-[vaul-drawer-direction=top]:max-h-[80vh] rb:data-[vaul-drawer-direction=top]:rounded-b-lg rb:data-[vaul-drawer-direction=top]:border-b",
          "rb:data-[vaul-drawer-direction=bottom]:inset-x-0 rb:data-[vaul-drawer-direction=bottom]:bottom-0 rb:data-[vaul-drawer-direction=bottom]:mt-24 rb:data-[vaul-drawer-direction=bottom]:max-h-[80vh] rb:data-[vaul-drawer-direction=bottom]:rounded-t-lg rb:data-[vaul-drawer-direction=bottom]:border-t",
          "rb:data-[vaul-drawer-direction=right]:inset-y-0 rb:data-[vaul-drawer-direction=right]:right-0 rb:data-[vaul-drawer-direction=right]:w-3/4 rb:data-[vaul-drawer-direction=right]:border-l rb:data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "rb:data-[vaul-drawer-direction=left]:inset-y-0 rb:data-[vaul-drawer-direction=left]:left-0 rb:data-[vaul-drawer-direction=left]:w-3/4 rb:data-[vaul-drawer-direction=left]:border-r rb:data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="rb:bg-muted rb:mx-auto rb:mt-4 rb:hidden rb:h-2 rb:w-[100px] rb:shrink-0 rb:rounded-full rb:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "rb:flex rb:flex-col rb:gap-0.5 rb:p-4 rb:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center rb:group-data-[vaul-drawer-direction=top]/drawer-content:text-center rb:md:gap-1.5 rb:md:text-left",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("rb:mt-auto rb:flex rb:flex-col rb:gap-2 rb:p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("rb:text-foreground rb:font-semibold", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("rb:text-muted-foreground rb:text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
