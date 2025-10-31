import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Render the LabsMac logo with configurable dimensions and an optional container class.
 *
 * @param width - Image width in pixels (default: 150)
 * @param height - Image height in pixels (default: 54)
 * @param className - Optional additional class applied to the logo container
 * @returns A JSX element containing the logo image
 */
export default function Logo({
  width = 150,
  height = 54,
  className
}: LogoProps) {
  return (
    <div className={cn("logo-container", className)}>
      <Image
        src="/logo.svg"
        alt="LabsMac Logo"
        width={width}
        height={height}
        className="logo-svg"
        priority
      />
    </div>
  );
}