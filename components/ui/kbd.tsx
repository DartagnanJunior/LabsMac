import { cn } from "@/lib/utils"

/**
 * Renders a styled keyboard-key element that applies consistent theming and contextual variants.
 *
 * @param className - Additional CSS class names to merge with the component's default classes.
 * @param props - Other props forwarded to the rendered `<kbd>` element (e.g., event handlers, ARIA attributes).
 * @returns A `<kbd>` React element with default keyboard-key styling, `data-slot="kbd"`, and any provided props applied.
 */
function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props}
    />
  )
}

/**
 * Groups multiple keyboard key visuals inline with spacing.
 *
 * @param className - Additional CSS class names to merge with the component's layout classes
 * @param props - Additional attributes and event handlers passed to the rendered element
 * @returns A <kbd> element configured as an inline-flex container for grouping keyboard keys
 */
function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }