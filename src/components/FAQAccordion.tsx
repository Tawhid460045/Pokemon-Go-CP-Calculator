"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-border rounded-lg">
          <button
            className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-secondary/50 transition-colors rounded-lg"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium pr-4">{item.question}</span>
            {openItems.includes(index) ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            )}
          </button>

          {openItems.includes(index) && (
            <div className="px-4 pb-4 pt-0 text-muted-foreground border-t border-border mt-2">
              <div className="pt-4">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
