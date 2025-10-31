import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Render a nav element designated as the breadcrumb container.
 *
 * Forwards all received props to the underlying `<nav>` element and sets
 * `aria-label="breadcrumb"` and `data-slot="breadcrumb"`.
 *
 * @returns The breadcrumb `<nav>` element with `aria-label="breadcrumb"` and `data-slot="breadcrumb"`.
 */
function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

/**
 * Renders an ordered list container for breadcrumb items.
 *
 * @returns An `<ol>` element with `data-slot="breadcrumb-list"`, default layout and typography classes for breadcrumb presentation, and any provided props applied.
 */
function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a breadcrumb list item with default inline layout and spacing.
 *
 * @param className - Additional CSS classes merged with the component's default classes
 * @returns An `<li>` element with `data-slot="breadcrumb-item"` and a composed `className`
 */
function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

/**
 * Renders a breadcrumb link element, using a Radix Slot when `asChild` is true.
 *
 * @param asChild - If true, render the link as its child using Radix `Slot`; otherwise render a native `<a>` element.
 * @returns The rendered link component prepared for use in a breadcrumb (either an `<a>` or a `Slot`).
 */
function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
}

/**
 * Renders a non-interactive current-page indicator for a breadcrumb.
 *
 * Renders a span with role="link", `aria-current="page"`, and `aria-disabled="true"` to indicate the active page and merges the provided `className` with default styling.
 *
 * @returns A span element representing the current breadcrumb page.
 */
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

/**
 * Renders a breadcrumb separator element between items.
 *
 * @param children - Custom separator content to render inside the list item; if omitted, a chevron icon is used.
 * @returns A list item (<li>) with presentation semantics and the provided or default separator content
 */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

/**
 * Renders an ellipsis indicator used when breadcrumb items are collapsed or overflow.
 *
 * @returns A span element containing a `MoreHorizontal` icon and a visually hidden "More" label for screen readers.
 */
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}