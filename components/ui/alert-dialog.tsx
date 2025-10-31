"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

/**
 * Renders an alert dialog root element with a standardized `data-slot` and forwards all props to it.
 *
 * @param props - Props forwarded to the underlying alert dialog root element.
 * @returns The rendered alert dialog root element with `data-slot="alert-dialog"`.
 */
function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

/**
 * Renders a trigger element for an alert dialog with a standardized data-slot.
 *
 * @returns The trigger element with `data-slot="alert-dialog-trigger"` and any passed props applied.
 */
function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

/**
 * Renders the alert dialog's React portal and attaches `data-slot="alert-dialog-portal"`.
 *
 * @param props - Props forwarded to the portal element
 * @returns The portal element used to render alert dialog content into a React portal
 */
function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

/**
 * Renders the overlay layer for an alert dialog with standardized styling and open/close animations.
 *
 * @param className - Additional CSS classes appended to the overlay's default classes
 * @returns The alert dialog overlay element
 */
function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Composes the AlertDialog content panel inside a Portal with its overlay and standardized layout/styling.
 *
 * @param className - Additional CSS classes merged with the component's default styling
 * @returns The AlertDialog content element rendered inside a portal with an overlay
 */
function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

/**
 * Renders the alert dialog header container with standardized layout and a data-slot attribute.
 *
 * Applies a column flex layout with gap spacing and responsive text alignment, merges any
 * provided `className`, and forwards all other `div` props to the resulting element.
 *
 * @param className - Additional CSS classes to merge with the component's default layout classes
 * @returns The header `div` element with `data-slot="alert-dialog-header"`
 */
function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/**
 * Layout container for an alert dialog's footer and action controls.
 *
 * @param className - Additional CSS classes to merge with the component's default responsive layout
 * @returns A div element that stacks actions vertically on small screens (reversed column) and aligns them to the right on larger screens
 */
function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render the alert dialog title with standardized styling and a data-slot attribute.
 *
 * @returns A styled AlertDialog title element with `data-slot="alert-dialog-title"` and any forwarded props
 */
function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the alert dialog's description element with standardized styling and a `data-slot` attribute.
 *
 * @returns The AlertDialog description element with muted foreground styling and `data-slot="alert-dialog-description"`.
 */
function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders an AlertDialog action button with the library's standard button styling.
 *
 * @param className - Additional CSS class names to merge with the default button styles
 * @returns A React element for an AlertDialog action that applies button variants and merges `className`
 */
function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

/**
 * Renders an AlertDialog cancel control styled with the outline button variant.
 *
 * @param className - Additional CSS classes to merge with the component's outline button styles
 * @returns The configured `AlertDialogPrimitive.Cancel` element
 */
function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}