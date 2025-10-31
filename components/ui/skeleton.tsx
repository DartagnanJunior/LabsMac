import { cn } from "@/lib/utils"

/**
 * Renders a div styled as a skeleton loading placeholder.
 *
 * @param className - Additional CSS class names to merge with the default skeleton styles
 * @param props - Additional props forwarded to the underlying `div` element
 * @returns The rendered `div` element with skeleton styling and forwarded props
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }