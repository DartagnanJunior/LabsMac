import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Container component that renders a styled card element and forwards props to the underlying div.
 *
 * Renders a div with data-slot="card" and a composed className that includes the base card styles
 * (background, foreground text color, flex layout, gap, rounded border, padding, shadow) plus any
 * provided `className`. All other props are spread onto the div.
 *
 * @returns The rendered card div element with applied styles and forwarded props
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the header slot for a Card component.
 *
 * Merges provided `className` with the Card header's default layout and spacing classes and spreads remaining `div` props onto the element.
 *
 * @param className - Additional CSS classes to apply to the header container
 * @param props - Other props forwarded to the underlying `div` element
 * @returns A `div` element configured as the card header slot with responsive grid layout and spacing
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the card title slot with base typography styles.
 *
 * @param className - Additional CSS classes to merge with the base `leading-none font-semibold` styles
 * @returns A `div` element with `data-slot="card-title"` and the merged class names
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the descriptive text slot for a Card component.
 *
 * @returns A div element for card description with muted foreground color and small text size.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders the card action slot used to position action controls within the card layout.
 *
 * @returns A div element that serves as the card's action container, preconfigured with positioning classes and accepts additional div props.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the card content slot with horizontal padding.
 *
 * @param className - Additional CSS class names to merge with the base horizontal padding
 * @returns A div element used as the card's content area (`data-slot="card-content"`)
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Renders the card footer slot used to host actions and secondary content.
 *
 * @param className - Additional CSS classes to merge with the footer's base styles
 * @returns The footer div element with `data-slot="card-footer"` and composed styling
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}