"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useState } from "react";

export const CustomAccordion = ({ items }) => {
  const [activeKey, setActiveKey] = useState(items[0]?.key || "");
  const activeItem = items.find((item) => item.key === activeKey);

  return (
    <div className="flex flex-col gap-5">
      <Accordion
        type="single"
        collapsible
        value={activeKey}
        onValueChange={(val) => setActiveKey(val)}
        className="w-full"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.key}
            value={item.key}
            className="border rounded-lg mb-2"
          >
            <AccordionTrigger className="text-left px-4 py-3 font-semibold text-lg">
              {item.heading}
            </AccordionTrigger>
            <AccordionContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Left - Banner Image */}
                <div className="flex-shrink-0 w-full sm:w-1/2">
                  <Image
                    src={item.bannerImage}
                    alt={item.heading}
                    width={400}
                    height={250}
                    className="rounded-xl object-cover w-full"
                  />
                </div>

                {/* Right - Logo, Heading, Description */}
                <div className="flex flex-col justify-center w-full sm:w-1/2 gap-2">
                  <Image
                    src={item.logo}
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <h3 className="text-xl font-bold">{item.heading}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
