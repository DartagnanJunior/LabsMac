import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Renders a spinning loading indicator using the lucide-react Loader2Icon.
 *
 * @param className - Additional CSS classes appended to the default "size-4 animate-spin" styling
 * @param props - Other props are forwarded to the underlying SVG element
 * @returns A Loader2Icon SVG element configured as a spinning loading indicator with role="status" and aria-label="Loading"
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }