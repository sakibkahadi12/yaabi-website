// components/ui/ListItem.jsx

import React, { forwardRef } from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu"; 
import { cn } from "@/lib/utils"; 

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="sm:text-[18px] text-[16px]  sm:leading-6 font-medium text-[#10243E]">
          {title}
        </div>
        <p className="font-[400] text-[13px] sm:text-[14px] text-[#00000080] leading-4 sm:leading-5">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;
