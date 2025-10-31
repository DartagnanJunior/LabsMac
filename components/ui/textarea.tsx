import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A styled wrapper around the native textarea element.
 *
 * @param className - Additional CSS class names appended to the component's default styling
 * @param props - Remaining textarea props are forwarded to the underlying element
 * @returns The rendered textarea element with default styling and `data-slot="textarea"`
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }