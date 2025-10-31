import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine multiple class name inputs into a single string and resolve conflicting Tailwind classes.
 *
 * @param inputs - A list of class name values (strings, arrays, objects, etc.) to be combined
 * @returns A single class string with Tailwind utility conflicts merged and resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}