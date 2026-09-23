import React from "react";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  id: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * A plain, unstyled anchor point for ad injection - no border, label, or
 * forced reserved height. Mediavine's script scans the page and inserts its
 * own ad element (sized to whatever it serves) wherever it finds a suitable
 * break, the same way it does between paragraphs on a WordPress post; this
 * just gives it a natural gap/DOM hook to find, rather than one continuous
 * block of UI with nowhere to insert into.
 */
const AdSlot: React.FC<AdSlotProps> = ({ id, className, width, height }) => {
  return (
    <div
      id={id}
      data-ad-slot={id}
      className={cn("w-full", className)}
      style={width || height ? { width, height, maxWidth: "100%" } : undefined}
    />
  );
};

export default AdSlot;
