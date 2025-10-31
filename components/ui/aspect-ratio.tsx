"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

/**
 * Render an AspectRatio root element that forwards received props and injects a data-slot="aspect-ratio" attribute.
 *
 * @param props - Props forwarded to the underlying AspectRatio root element
 * @returns A React element rendering the AspectRatio root with the provided props and a `data-slot="aspect-ratio"` attribute
 */
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }