import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

/**
 * Render a navigation container for pagination controls.
 *
 * @returns A <nav> element with role="navigation", aria-label="pagination", data-slot="pagination", and merged `className` applied.
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

/**
 * Renders a ul container for pagination items.
 *
 * @returns A `ul` element with `data-slot="pagination-content"`, a flex row layout and gap, and any additional `className` and props merged onto the element.
 */
function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

/**
 * Renders a list item used as a pagination item.
 *
 * The component outputs an `<li>` with `data-slot="pagination-item"` and forwards all received props to the element.
 *
 * @param props - Props forwarded to the underlying `<li>` element.
 * @returns The rendered pagination list item element.
 */
function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

/**
 * Renders an anchor element styled and annotated as a pagination link.
 *
 * @param className - Additional CSS class names to apply to the link
 * @param isActive - When `true`, marks the link as the current page (sets `aria-current="page"` and applies active styling)
 * @param size - Button size variant to use for styling (default: `"icon"`)
 * @param props - Additional props passed through to the underlying `<a>` element
 * @returns The rendered `<a>` element configured for use as a pagination control
 */
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a pagination control configured to navigate to the previous page.
 *
 * The control includes a left chevron icon and a "Previous" label that is hidden on small screens. It sets an `aria-label` of "Go to previous page" and applies default sizing and spacing; additional props and className are forwarded to the underlying link.
 *
 * @returns A React element representing the previous-page pagination link.
 */
function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

/**
 * Renders the pagination "Next" control.
 *
 * The link includes a right chevron and a "Next" label (label hidden on small screens), sets
 * an accessible label of "Go to next page", defaults the size to "default", and forwards any
 * additional props to the underlying PaginationLink.
 *
 * @returns A PaginationLink element configured as the next-page control
 */
function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

/**
 * Renders a non-interactive ellipsis indicator for pagination.
 *
 * The element visually displays a horizontal-dots icon and includes a screen-reader-only label "More pages". It is marked with `aria-hidden` and `data-slot="pagination-ellipsis"`.
 *
 * @returns A span element used as a non-interactive pagination ellipsis.
 */
function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}