import React from "react";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  id: string;
  className?: string;
  minHeight?: number;
}

/**
 * Reserved space for an ad placement between content blocks. Deliberately a
 * plain, stable container (not tied to any ad network's SDK) so it reserves
 * layout space and doesn't shift content once an ad script populates it -
 * whatever network/placement mechanism ends up targeting this id.
 */
const AdSlot: React.FC<AdSlotProps> = ({ id, className, minHeight = 250 }) => {
  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1.5">Advertisement</span>
      <div
        id={id}
        data-ad-slot={id}
        className="w-full max-w-[336px] flex items-center justify-center rounded-lg border border-dashed border-border/60 bg-secondary/20"
        style={{ minHeight }}
      />
    </div>
  );
};

export default AdSlot;
