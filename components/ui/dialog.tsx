"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Provides the Dialog root element with a standardized `data-slot="dialog"` attribute for easy querying.
 *
 * @param props - Props forwarded to Radix UI's DialogPrimitive.Root
 * @returns The DialogPrimitive.Root element with `data-slot="dialog"` and the provided props
 */
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

/**
 * Renders the dialog trigger element, forwarding all received props and tagging it with `data-slot="dialog-trigger"`.
 *
 * @returns A `DialogPrimitive.Trigger` element with forwarded props and `data-slot="dialog-trigger"`.
 */
function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/**
 * Provides a portal container for dialog content and marks it with a `data-slot`.
 *
 * @param props - Props forwarded to the underlying Radix Portal component
 * @returns A dialog portal element with `data-slot="dialog-portal"` and all provided props applied
 */
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/**
 * DialogClose component that renders a close control with a `data-slot="dialog-close"` attribute.
 *
 * @returns The underlying Radix Dialog Close element with the provided props and `data-slot="dialog-close"`.
 */
function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

/**
 * Renders a dialog overlay with consistent styling and a `data-slot="dialog-overlay"` attribute.
 *
 * @returns The underlying `DialogPrimitive.Overlay` element with composed overlay classes and forwarded props.
 */
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders styled dialog content inside a portal with an overlay and an optional close button.
 *
 * @param showCloseButton - When `true`, includes a positioned close button inside the content (defaults to `true`).
 * @returns The dialog content element composed of a portal, overlay, content container, children, and an optional close control.
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

/**
 * Renders the dialog header slot with vertical layout, spacing, and responsive text alignment.
 *
 * @param className - Additional CSS classes appended to the default header classes.
 * @param props - Additional HTML attributes forwarded to the header element.
 * @returns The header element used as the dialog's header (data-slot="dialog-header").
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/**
 * Renders a dialog footer container with responsive alignment and spacing.
 *
 * Merges provided classes with the default footer classes, stacks children column-reverse on small screens, and right-aligns them on larger screens.
 *
 * @param className - Additional classes to merge with the default responsive footer classes.
 * @returns A div with `data-slot="dialog-footer"` and the composed className; all other div props are forwarded.
 */
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a dialog title element with consistent typography and a `data-slot="dialog-title"` attribute.
 *
 * @returns A `DialogPrimitive.Title` element with title styling and the `data-slot="dialog-title"` attribute.
 */
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled dialog description element.
 *
 * Forwards all props to the underlying Radix Dialog.Description element.
 *
 * @returns A DialogPrimitive.Description element with muted, small text styling, an attached `data-slot="dialog-description"`, and any provided `className` applied.
 */
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}