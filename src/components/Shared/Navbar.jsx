"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Menu, ChevronDown, ChevronUp, Home, Component } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "../ui/ListItem";
import { PrimaryButton } from "../PrimaryButton";

export const Icons = {
  logo: Home,
  menu: Menu,
  down: ChevronDown,
  up: ChevronUp,
  component: Component,
};

const featuresLeftSideMenu = [
  {
    title: "Email Marketing",
    href: "/features/email-marketing",
    description:
      "Take you customer journey to the next level with data-driven emails",
  },
  {
    title: "Coupon Management",
    href: "/features/coupon-management",
    description:
      "Drive sales with product focused and targeted coupon management",
  },
  {
    title: "GDPR Compliant",
    href: "/features/gdpr-compliant",
    description:
      "Drive sales with product focused and targeted coupon management",
  },
];
const featuresRightSideMenu = [
  {
    title: "SMS Campaigns",
    href: "/features/sms-campaign",
    description:
      "The potential of SMS and connect with your most valuable customer",
  },
  {
    title: "Analytics Dashboard",
    href: "/features/analytics-dashboard",
    description:
      "Drive sales with product focused and targeted coupon management",
  },
  {
    title: "Easy Automation",
    href: "/features/easy-automation",
    description:
      "Drive sales with product focused and targeted coupon management",
  },
];

export const Navbar = () => {
  return (
    <div className="w-full fixed top-4 bg-white z-[999]">
      <div className="max-w-[80rem] px-5 sm:px-[3.5rem] mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <section>
          <img src="/assets/yaabi_logo.png" alt="logo" className="h-10" />
        </section>

        {/* Navigation */}
        <section>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {/* Features with submenu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[800px]">
                  <div>
                    <h1 className="font-bold text-[36px] leading-[48px]">
                      Features
                    </h1>
                    <div className="grid gap-4 p-4 lg:grid-cols-3">
                      {/* Column 1: Feature links */}
                      <div className="grid gap-3">
                        {featuresLeftSideMenu.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </div>

                      {/* Column 2: Additional information */}
                      <div className="grid gap-3">
                        {featuresRightSideMenu.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </div>

                      {/* Column 3: Promo image or CTA */}
                      <div className="hidden lg:flex flex-col">
                        <Image
                          src="/assets/feature_submenu.jpg"
                          alt="Features preview"
                          width={120}
                          height={120}
                          className="rounded-md w-full h-[224px] object-cover"
                        />
                        <p className="text-[#5E97CB] text-[18px] text-start font-hanken">
                          Learn more Yaabi
                        </p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Regular menu items */}
              <NavigationMenuItem>
                <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blogs" className={navigationMenuTriggerStyle()}>
                  Blogs
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/support" className={navigationMenuTriggerStyle()}>
                  Support
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/support" className={navigationMenuTriggerStyle()}>
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Auth Buttons */}
        <section className="text-[15px] leading-[20px] flex gap-5">
          <button className="text-[#154D7E]">Login</button>
          <PrimaryButton
            bgColor="#154D7E"
            textColor="#ffffff"
            buttonText="Get Started"
          />
        </section>
      </div>
    </div>
  );
};
