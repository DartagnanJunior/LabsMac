"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * Wraps the Radix Collapsible root and forwards all received props while adding a `data-slot="collapsible"` attribute.
 *
 * @returns A React element rendering a CollapsiblePrimitive.Root with forwarded props and `data-slot="collapsible"`.
 */
function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

/**
 * Wrapper component that renders a Radix CollapsibleTrigger and adds `data-slot="collapsible-trigger"`.
 *
 * @param props - Props forwarded to the underlying Radix CollapsibleTrigger.
 * @returns The rendered CollapsibleTrigger element.
 */
function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

/**
 * Renders a Radix CollapsibleContent element with a `data-slot="collapsible-content"` attribute.
 *
 * @param props - Props forwarded to `CollapsiblePrimitive.CollapsibleContent`
 * @returns The rendered `CollapsiblePrimitive.CollapsibleContent` element
 */
function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }