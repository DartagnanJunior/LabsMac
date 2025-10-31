import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Renders the root container for an empty state layout.
 *
 * @returns A div element with data-slot="empty" and default layout, spacing, and styling classes.
 */
function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the header slot for an empty-state layout.
 *
 * Applies a centered, columnar layout and accepts a `className` to extend styling.
 *
 * @param className - Additional CSS class names to merge with the component's base classes
 * @param props - Additional attributes forwarded to the underlying `div`
 * @returns The header element for an empty-state layout
 */
function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Renders the media/icon container for an Empty state.
 *
 * @param className - Optional additional class names to append to the computed styles.
 * @param variant - The visual variant to apply; `"default"` for a transparent media area or `"icon"` for icon-specific styling.
 * @returns A div element used as the Empty state's media/icon slot with variant-specific styling and any passed props applied.
 */
function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

/**
 * Renders the title area for an Empty state.
 *
 * @returns A `div` element with `data-slot="empty-title"` and typography classes applied (`text-lg font-medium tracking-tight`), merging any provided `className` and spreading additional props onto the element.
 */
function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  )
}

/**
 * Renders the "empty" state's description slot.
 *
 * @returns A React element: a div with `data-slot="empty-description"` that applies muted foreground text, small relaxed line height, and link styles (underline and hover color). Additional props (including `className`) are merged and spread onto the element.
 */
function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the Empty state content container.
 *
 * @returns A div element marked with `data-slot="empty-content"` that serves as the content area for the Empty layout; accepts and merges an optional `className` and forwards other div props.
 */
function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}