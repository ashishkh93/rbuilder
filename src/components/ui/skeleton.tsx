import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("rb:bg-accent rb:animate-pulse rb:rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
