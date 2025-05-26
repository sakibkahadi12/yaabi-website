"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

// Root Accordion
const Accordion = AccordionPrimitive.Root;

// Accordion Item
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// Accordion Trigger with Custom SVG
// Accordion Trigger with Custom SVG Props
const AccordionTrigger = React.forwardRef(
  ({ className, children, openIcon, closeIcon, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          "[&[data-state=open]>.close-icon]:block [&[data-state=open]>.plus-icon]:hidden",
          "[&[data-state=closed]>.close-icon]:hidden [&[data-state=closed]>.plus-icon]:block",
          className
        )}
        {...props}
      >
        {children}

        {/* Close icon (when open) */}
        <span className="close-icon hidden">{closeIcon}</span>

        {/* Plus icon (when closed) */}
        <span className="plus-icon">{openIcon}</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// Accordion Content
const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// Export components
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
