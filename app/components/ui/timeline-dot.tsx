import React from "react";
import { cn } from "../../lib/utils";

interface TimelineDotProps {
  className?: string;
}

export const TimelineDot: React.FC<TimelineDotProps> = ({ className }) => {
  return (
    <div 
      className={cn(
        "w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0", 
        className
      )} 
    />
  );
};