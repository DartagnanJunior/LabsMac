import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ 
  width = 150, 
  height = 54,
  className 
}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="LabsMac Logo"
      width={width}
      height={height}
      className={cn(className)}
      priority
    />
  );
}

