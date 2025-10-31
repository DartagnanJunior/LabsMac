import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

/**
 * Render a styled container that groups related buttons and applies orientation-specific layout.
 *
 * The element uses role="group", sets data-slot="button-group" and data-orientation, and merges
 * classes from `buttonGroupVariants` with any provided `className`. All other props are forwarded
 * to the underlying `div`.
 *
 * @param className - Additional CSS classes to append to the component's computed classes
 * @param orientation - Layout orientation for the group; `"horizontal"` (default) arranges children inline, `"vertical"` stacks children vertically
 * @returns A `div` element configured as a button group with orientation-aware styling
 */
function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

/**
 * Render styled label-like text for use inside a ButtonGroup.
 *
 * Renders a small, rounded, muted-background text container that aligns with button group items and prevents SVG pointer events.
 *
 * @param className - Additional CSS classes to merge with the component's default styling
 * @param asChild - If `true`, render a `Slot` so the caller can provide the underlying element; otherwise render a `div`
 * @param props - Additional props passed to the underlying element
 * @returns The rendered element (a `div` or `Slot`) styled as button-group text
 */
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a Separator styled for use inside a ButtonGroup.
 *
 * @param className - Additional class names to apply to the separator
 * @param orientation - Separator orientation; `"vertical"` by default
 * @returns A Separator element configured for placement inside a ButtonGroup
 */
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}