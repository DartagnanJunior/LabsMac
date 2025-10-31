"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Wrapper around Radix Avatar Root that applies base avatar styling and forwards all received props.
 *
 * @param className - Additional CSS class names to merge with the component's base avatar classes
 * @returns A React element rendering the Avatar root with composed classes and all props forwarded
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image using Radix Avatar.Image with a square aspect ratio and full size.
 *
 * @returns A React element rendering AvatarPrimitive.Image with the applied classes and all received props forwarded.
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled avatar fallback element shown when the avatar image is unavailable.
 *
 * @param className - Additional CSS classes to append to the component's default styles
 * @param props - Remaining props passed through to the underlying Radix Avatar Fallback element
 * @returns The rendered Avatar Fallback element
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }