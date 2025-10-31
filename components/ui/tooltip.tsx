"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

/**
 * Renders a Radix Tooltip Provider with a consistent `data-slot` attribute and a default delay.
 *
 * @param delayDuration - Milliseconds to wait before showing the tooltip; defaults to 0.
 * @returns A TooltipPrimitive.Provider element with `data-slot="tooltip-provider"` and the supplied props.
 */
function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

/**
 * Wraps Radix's TooltipRoot with the local TooltipProvider to ensure provider context and default settings.
 *
 * @param props - Props forwarded to `TooltipPrimitive.Root`
 * @returns The `TooltipPrimitive.Root` element wrapped in `TooltipProvider` (includes `data-slot="tooltip"`)
 */
function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

/**
 * Renders a tooltip trigger element with a standardized data-slot attribute and forwarded props.
 *
 * @returns A `TooltipPrimitive.Trigger` element configured with `data-slot="tooltip-trigger"` and all provided props
 */
function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

/**
 * Renders tooltip content inside a Portal with consistent styling, a configurable side offset, and a decorative arrow.
 *
 * @param className - Additional CSS class names appended to the default tooltip styling
 * @param sideOffset - Offset applied to the tooltip position relative to its trigger (defaults to 0)
 * @param children - Elements to render inside the tooltip content
 * @returns A JSX element containing the styled tooltip content with the configured offset and an appended arrow
 */
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }