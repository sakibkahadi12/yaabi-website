"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


import { Menu, ChevronDown, ChevronUp,  } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
import { useRouter } from "next/navigation";

// export const Icons = {
//   logo: Home,
//   menu: Menu,
//   down: ChevronDown,
//   up: ChevronUp,
//   component: Component,
// };

const featuresLeftSideMenu = [
  {
    title: "Email Marketing",
    href: "/features/email-marketing",
    description:
      "Take you customer journey to the next level with data-driven emails",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.36613 9.18581C0.9367 10.0883 0.00379972 11.6805 0.00379972 13.469C-2.75454e-07 18.321 0 27.2751 0 32.1283C0 34.6933 1.91583 36.853 4.46247 37.1589C4.46437 37.1595 4.46627 37.1595 4.46817 37.1595C14.1968 38.2805 23.8855 38.2799 33.5356 37.1589C33.5375 37.1583 33.5401 37.1583 33.542 37.1583C36.0842 36.8505 37.9962 34.6927 37.9962 32.1315C38 27.2802 38 18.3261 38 13.4722C38 11.6843 37.069 10.0927 35.6421 9.18962C35.6339 9.18455 35.6263 9.17948 35.6187 9.17505C35.6187 9.17505 25.8818 3.30405 21.6163 0.732081C20.007 -0.238819 17.993 -0.238819 16.3837 0.732081L2.39083 9.17062C2.39083 9.17062 2.37817 9.17822 2.36613 9.18581Z"
          fill="#1A314E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.70117 15.2025L19.0012 24.0667L32.3012 15.2019V5.06667C32.3012 2.2686 30.0338 0 27.2345 0C23.3142 0 14.6882 0 10.7678 0C7.96851 0 5.70117 2.2686 5.70117 5.06667V15.2025Z"
          fill="#E7EEFF"
        />
      </svg>
    ),
  },
  {
    title: "Coupon Management",
    href: "/features/coupon-management",
    description:
      "Drive sales with product focused and targeted coupon management",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 24.2025L18.3 33.0667L31.6 24.2019V14.0667C31.6 11.2686 29.3327 9 26.5333 9C22.613 9 13.987 9 10.0667 9C7.26733 9 5 11.2686 5 14.0667V24.2025Z"
          fill="#E7EEFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.90399 0C3.09095 0 0 2.27196 0 5.06793V32.9321C0 35.728 3.09095 38 6.90399 38H13.8165C15.2373 38 16.4125 37.1443 16.4125 36.1025C16.4125 35.0456 17.5587 34.1987 19 34.1987C20.4413 34.1987 21.5892 35.0456 21.5892 36.1025C21.5892 37.1443 22.7627 38 24.1835 38H31.0892C34.9022 38 38 35.728 38 32.9321V5.06793C38 2.27196 34.9022 0 31.0892 0H24.1835C22.7626 8.13869e-07 21.5892 0.8569 21.5892 1.89873C21.5892 2.95558 20.4412 3.8012 19 3.8012C17.5588 3.8012 16.4125 2.95558 16.4125 1.89873C16.4125 0.8569 15.2373 0 13.8165 0H6.90399ZM28.4966 11.0808C28.841 11.0808 29.1712 11.1814 29.4142 11.3604C29.919 11.7312 29.919 12.3317 29.4142 12.7025L10.4125 26.6371C9.90687 27.0072 9.08796 27.0072 8.58239 26.6371C8.07422 26.2658 8.07422 25.6624 8.58239 25.2912L27.5789 11.3604C27.8219 11.1815 28.1522 11.0808 28.4966 11.0808ZM12.9564 11.3999C15.3305 11.3999 17.2728 12.8268 17.2728 14.5679C17.2728 16.3089 15.3304 17.7333 12.9564 17.7333C10.5823 17.7333 8.63645 16.3088 8.63645 14.5679C8.63645 12.8269 10.5822 11.3999 12.9564 11.3999ZM25.0455 20.2666C26.1908 20.2666 27.2891 20.6002 28.099 21.1941C28.9088 21.788 29.3637 22.5934 29.3637 23.4333C29.3637 23.8491 29.252 24.2609 29.035 24.6451C28.818 25.0293 28.4999 25.3784 28.099 25.6724C27.698 25.9665 27.2219 26.1998 26.698 26.3589C26.1741 26.518 25.6126 26.5999 25.0455 26.5999C24.4785 26.5999 23.9169 26.518 23.393 26.3589C22.8691 26.1998 22.3931 25.9665 21.9921 25.6724C21.5911 25.3784 21.2731 25.0293 21.0561 24.6451C20.839 24.2609 20.7274 23.8491 20.7274 23.4333C20.7274 22.5934 21.1823 21.788 21.9921 21.1941C22.8019 20.6002 23.9003 20.2666 25.0455 20.2666Z"
          fill="#1A314E"
        />
      </svg>
    ),
  },

  {
    title: "GDPR Compliant",
    href: "/features/gdpr-compliant",
    description:
      "Drive sales with product focused and targeted coupon management",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <g clipPath="url(#clip0_6070_5642)">
          <path
            d="M34.393 24.5H25.321C24.2843 24.5 23.4414 25.3599 23.4414 26.4167V32.55C23.4414 33.6068 24.2843 34.4667 25.321 34.4667H26.4487V35.6167C26.4487 35.7582 26.5251 35.8881 26.6469 35.9547C26.7684 36.0207 26.9161 36.0147 27.0331 35.9356L29.1939 34.4667H34.393C35.4297 34.4667 36.2726 33.6068 36.2726 32.55V26.4167C36.2726 25.3599 35.4297 24.5 34.393 24.5Z"
            fill="#1A314E"
          />
          <path
            d="M7.61891 -0.21875C3.42836 -0.21875 0.03125 3.22306 0.03125 7.46875V27.9688C0.03125 32.2144 3.42836 35.6562 7.61891 35.6562H21.3838C20.2787 34.0136 19.6327 32.0285 19.6327 29.8906C19.6327 24.2297 24.1622 19.6406 29.7496 19.6406C31.8597 19.6406 33.819 20.2952 35.4403 21.4148V7.46875C35.4403 3.22306 32.0432 -0.21875 27.8527 -0.21875H7.61891Z"
            fill="#1A314E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.7493 21.5625C25.2095 21.5625 21.5293 25.2911 21.5293 29.8906C21.5293 34.4901 25.2095 38.2188 29.7493 38.2188C34.289 38.2188 37.9692 34.4901 37.9692 29.8906C37.9692 25.2911 34.289 21.5625 29.7493 21.5625ZM33.0449 26.9496C33.6004 27.3785 33.7077 28.1824 33.2844 28.7453L29.9121 33.2296C29.6781 33.5407 29.3168 33.7265 28.9308 33.7341C28.5448 33.7417 28.1766 33.5704 27.9309 33.2687L26.2448 31.199C25.8001 30.6533 25.8764 29.8457 26.4151 29.3953C26.9537 28.9449 27.7507 29.0221 28.1953 29.5678L28.8666 30.3917L31.2726 27.1922C31.6959 26.6294 32.4894 26.5207 33.0449 26.9496Z"
            fill="#E7EEFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_6070_5642">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
const featuresRightSideMenu = [
  {
    title: "SMS Campaigns",
    href: "/features/sms-campaign",
    description:
      "The potential of SMS and connect with your most valuable customer",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <path
          d="M32.4336 0H5.56641C2.4962 0 0 2.84138 0 6.33333V26.6C0 30.092 2.4962 32.9333 5.56641 32.9333H8.90625V36.7333C8.90625 37.2009 9.13239 37.6301 9.49332 37.8503C9.85313 38.0685 10.2904 38.0487 10.637 37.7873L17.0362 32.9333H32.4336C35.5038 32.9333 38 30.092 38 26.6V6.33333C38 2.84138 35.5038 0 32.4336 0Z"
          fill="#1A314E"
        />
        <path
          d="M32.6133 17.731H5.74609C5.13075 17.731 4.63281 18.2975 4.63281 18.9976C4.63281 19.6978 5.13075 20.2643 5.74609 20.2643H32.6133C33.2286 20.2643 33.7266 19.6978 33.7266 18.9976C33.7266 18.2975 33.2286 17.731 32.6133 17.731ZM32.6133 22.7976H5.74609C5.13075 22.7976 4.63281 23.3642 4.63281 24.0643C4.63281 24.7644 5.13075 25.331 5.74609 25.331H32.6133C33.2286 25.331 33.7266 24.7644 33.7266 24.0643C33.7266 23.3642 33.2286 22.7976 32.6133 22.7976ZM5.74609 15.1976H32.6133C33.2286 15.1976 33.7266 14.6311 33.7266 13.931C33.7266 13.2309 33.2286 12.6643 32.6133 12.6643H5.74609C5.13075 12.6643 4.63281 13.2309 4.63281 13.931C4.63281 14.6311 5.13075 15.1976 5.74609 15.1976ZM5.74609 10.131H16.8789C17.4943 10.131 17.9922 9.56445 17.9922 8.86432C17.9922 8.16419 17.4943 7.59766 16.8789 7.59766H5.74609C5.13075 7.59766 4.63281 8.16419 4.63281 8.86432C4.63281 9.56445 5.13075 10.131 5.74609 10.131Z"
          fill="#E7EEFF"
        />
      </svg>
    ),
  },
  {
    title: "Analytics Dashboard",
    href: "/features/analytics-dashboard",
    description:
      "Drive sales with product focused and targeted coupon management",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <g clipPath="url(#clip0_6070_5635)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.56055 25.7425L19.1019 35.434L33.6432 25.7418V14.6606C33.6432 11.6014 31.1643 9.12109 28.1037 9.12109C23.8174 9.12109 14.3863 9.12109 10.1001 9.12109C7.0395 9.12109 4.56055 11.6014 4.56055 14.6606V25.7425Z"
            fill="#E7EEFF"
          />
          <path
            d="M31.6667 -0.5H6.33333C4.65381 -0.499396 3.04326 0.168058 1.85566 1.35566C0.668058 2.54326 0.000604301 4.15381 0 5.83333V31.1667C0.000604301 32.8462 0.668058 34.4567 1.85566 35.6443C3.04326 36.8319 4.65381 37.4994 6.33333 37.5H31.6667C33.3462 37.4994 34.9567 36.8319 36.1443 35.6443C37.3319 34.4567 37.9994 32.8462 38 31.1667V5.83333C37.9994 4.15381 37.3319 2.54326 36.1443 1.35566C34.9567 0.168058 33.3462 -0.499396 31.6667 -0.5ZM30.0289 14.3289L24.2199 20.1378C23.5069 20.8494 22.5407 21.2491 21.5333 21.2491C20.526 21.2491 19.5597 20.8494 18.8467 20.1378L17.3622 18.6533C17.1247 18.4158 16.8025 18.2824 16.4667 18.2824C16.1308 18.2824 15.8087 18.4158 15.5711 18.6533L9.7622 24.4622C9.64535 24.5832 9.50558 24.6797 9.35105 24.7461C9.19651 24.8124 9.0303 24.8474 8.86211 24.8489C8.69392 24.8503 8.52713 24.8183 8.37146 24.7546C8.21579 24.6909 8.07436 24.5968 7.95543 24.4779C7.8365 24.359 7.74245 24.2175 7.67876 24.0619C7.61507 23.9062 7.58302 23.7394 7.58448 23.5712C7.58594 23.403 7.62089 23.2368 7.68727 23.0823C7.75366 22.9277 7.85015 22.788 7.97113 22.6711L13.7813 16.8622C14.4943 16.1506 15.4606 15.7509 16.4679 15.7509C17.4753 15.7509 18.4415 16.1506 19.1545 16.8622L20.6391 18.3467C20.8766 18.5842 21.1987 18.7176 21.5346 18.7176C21.8705 18.7176 22.1926 18.5842 22.4301 18.3467L28.2391 12.5378C28.478 12.3071 28.7979 12.1794 29.13 12.1823C29.4622 12.1852 29.7799 12.3184 30.0147 12.5532C30.2496 12.7881 30.3828 13.1058 30.3857 13.4379C30.3885 13.77 30.2596 14.09 30.0289 14.3289Z"
            fill="#1A314E"
          />
        </g>
        <defs>
          <clipPath id="clip0_6070_5635">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Easy Automation",
    href: "/features/easy-automation",
    description:
      "Drive sales with product focused and targeted coupon management",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <g clipPath="url(#clip0_6070_5236)">
          <path
            d="M31.6667 -0.5H6.33333C4.65381 -0.499396 3.04326 0.168058 1.85566 1.35566C0.668058 2.54326 0.000604301 4.15381 0 5.83333V31.1667C0.000604301 32.8462 0.668058 34.4567 1.85566 35.6443C3.04326 36.8319 4.65381 37.4994 6.33333 37.5H31.6667C33.3462 37.4994 34.9567 36.8319 36.1443 35.6443C37.3319 34.4567 37.9994 32.8462 38 31.1667V5.83333C37.9994 4.15381 37.3319 2.54326 36.1443 1.35566C34.9567 0.168058 33.3462 -0.499396 31.6667 -0.5ZM30.0289 14.3289L24.2199 20.1378C23.5069 20.8494 22.5407 21.2491 21.5333 21.2491C20.526 21.2491 19.5597 20.8494 18.8467 20.1378L17.3622 18.6533C17.1247 18.4158 16.8025 18.2824 16.4667 18.2824C16.1308 18.2824 15.8087 18.4158 15.5711 18.6533L9.7622 24.4622C9.64535 24.5832 9.50558 24.6797 9.35105 24.7461C9.19651 24.8124 9.0303 24.8474 8.86211 24.8489C8.69392 24.8503 8.52713 24.8183 8.37146 24.7546C8.21579 24.6909 8.07436 24.5968 7.95543 24.4779C7.8365 24.359 7.74245 24.2175 7.67876 24.0619C7.61507 23.9062 7.58302 23.7394 7.58448 23.5712C7.58594 23.403 7.62089 23.2368 7.68727 23.0823C7.75366 22.9277 7.85015 22.788 7.97113 22.6711L13.7813 16.8622C14.4943 16.1506 15.4606 15.7509 16.4679 15.7509C17.4753 15.7509 18.4415 16.1506 19.1545 16.8622L20.6391 18.3467C20.8766 18.5842 21.1987 18.7176 21.5346 18.7176C21.8705 18.7176 22.1926 18.5842 22.4301 18.3467L28.2391 12.5378C28.478 12.3071 28.7979 12.1794 29.13 12.1823C29.4622 12.1852 29.7799 12.3184 30.0147 12.5532C30.2496 12.7881 30.3828 13.1058 30.3857 13.4379C30.3885 13.77 30.2596 14.09 30.0289 14.3289Z"
            fill="#1A314E"
          />
          <path
            d="M25.2976 0.511719H12.1952C5.87961 0.511719 0.759766 5.63156 0.759766 11.9472V25.0496C0.759766 31.3652 5.87961 36.4851 12.1952 36.4851H25.2976C31.6133 36.4851 36.7331 31.3652 36.7331 25.0496V11.9472C36.7331 5.63156 31.6133 0.511719 25.2976 0.511719Z"
            fill="#1A314E"
          />
          <path
            d="M7.77532 10.6135L5.64598 11.0801L5.90444 13.1082L8.11679 13.2172C8.37192 13.758 8.74167 14.2538 9.21144 14.6642L8.63643 16.6958L10.5805 17.5613L11.7055 15.7746C12.3248 15.8491 12.9407 15.7921 13.5132 15.6199L15.0746 17.191L16.7547 16.026L15.6767 14.1314C15.8489 13.8985 15.9973 13.6458 16.1192 13.3719C16.2411 13.0981 16.3296 12.8187 16.3875 12.5349L18.5168 12.0682L18.2584 10.0401L16.046 9.93117C15.7909 9.3904 15.4211 8.89455 14.9514 8.48419L15.5264 6.45261L13.5823 5.58707L12.4573 7.37378C11.838 7.29925 11.2222 7.35626 10.6496 7.52852L9.08823 5.95732L7.40811 7.12232L8.48615 9.01696C8.31394 9.24984 8.16552 9.5026 8.0436 9.77645C7.92168 10.0503 7.83316 10.3297 7.77532 10.6135ZM10.5676 10.9002C10.9207 10.1071 11.885 9.76565 12.7209 10.1378C13.5568 10.51 13.9484 11.4551 13.5952 12.2482C13.2421 13.0413 12.2778 13.3827 11.4419 13.0106C10.606 12.6384 10.2145 11.6933 10.5676 10.9002Z"
            fill="#E7EEFF"
          />
          <path
            d="M14.9174 25.5372L12.4564 28.2099L14.748 30.7317L17.8726 28.7655C18.7379 29.2599 19.7167 29.5834 20.7504 29.6946L21.9075 33.0179L25.389 32.3412L25.2168 28.8264C26.1336 28.3361 26.92 27.6695 27.537 26.887L31.1706 27.5394L32.3507 24.3428L29.0677 22.7867C29.0802 22.3041 29.0412 21.8172 28.9459 21.3268C28.8505 20.8364 28.7043 20.3702 28.512 19.9275L30.9729 17.2549L28.6813 14.7331L25.5567 16.6992C24.6915 16.2048 23.7126 15.8813 22.679 15.7702L21.5219 12.4468L18.0404 13.1236L18.2125 16.6384C17.2957 17.1286 16.5094 17.7952 15.8923 18.5778L12.2587 17.9253L11.0786 21.1219L14.3616 22.678C14.3492 23.1606 14.3882 23.6476 14.4835 24.138C14.5788 24.6284 14.7251 25.0945 14.9174 25.5372ZM19.0036 23.2594C18.7275 21.839 19.7177 20.451 21.2147 20.16C22.7116 19.869 24.1497 20.785 24.4258 22.2054C24.7019 23.6258 23.7117 25.0138 22.2147 25.3048C20.7178 25.5957 19.2797 24.6797 19.0036 23.2594Z"
            fill="#E7EEFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_6070_5236">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export const Navbar = () => {
  const router = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="w-full fixed top-4  ">
      <div className="max-w-[80rem] z-[999] bg-[#FFFFFF] px-5 sm:px-[4rem] mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <section
          onClick={() => {
            router.push("/");
          }}
        >
          <img src="/assets/yaabi_logo.png" alt="logo" className="h-10" />
        </section>

        {/* Navigation */}
        <section className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {/* Features with submenu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[1000px]">
                  <div>
                    <h1 className="font-bold text-[36px] py-8  leading-[48px]">
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
                            image={item.image}
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
                            image={item.image}
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
                        <p className="text-[#5E97CB] text-[18px] flex items-center gap-0 text-start font-hanken">
                          Learn more Yaabi{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                          >
                            <path
                              d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                              fill="#5E97CB"
                            />
                          </svg>
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
                <Link href="/blog" className={navigationMenuTriggerStyle()}>
                  Blogs
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/support" className={navigationMenuTriggerStyle()}>
                  Support
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact-us"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Auth Buttons */}
        <section className="hidden  text-[15px] leading-[20px] sm:flex gap-5">
          <button className="text-[#154D7E]">Login</button>
          <PrimaryButton
            bgColor="#154D7E"
            textColor="#ffffff"
            buttonText="Get Started"
          />
        </section>

        {/* drawer for mobile */}

        <section className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-[#ffffff] bg-[#154D7E] rounded-[5px] p-2 ">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader> </SheetHeader>
              <SheetTitle> </SheetTitle>
              
                <nav className="flex flex-col gap-4 text-[16px] mt-10 font-medium text-[#0A2A3C]">
                  {/* Features Dropdown Toggle */}
                  <button
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    className="flex  gap-3 items-center w-full text-[15px] text-[#1A314E]"
                  >
                    Features
                    {featuresOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {/* Dropdown Content */}
                  {featuresOpen && (
                    <div className=" flex flex-col ml-3 justify-start items-start font-semibold  gap-3 text-[15px] text-[#1A314E]">
                      {[...featuresLeftSideMenu, ...featuresRightSideMenu].map(
                        (item) => (
                          <Link key={item.title} href={item.href}>
                            {item.title}
                          </Link>
                        )
                      )}
                    </div>
                  )}

                  <div className="gap-3  flex flex-col items-start justify-start text-[15px] text-[#1A314E]">
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/blog">Blogs</Link>
                    <Link href="/support">Support</Link>
                    <Link href="/contact-us">Contact Us</Link>
                  </div>
                  <div className="mt-2 flex flex-col   gap-3">
                    <button className="text-[#154D7E] w-full text-left">
                      Login
                    </button>

                    <PrimaryButton
                      bgColor="#154D7E"
                      textColor="#ffffff"
                      buttonText="Get Started"
                      className="w-full"
                    />
                  </div>
                </nav>
              
            </SheetContent>
            <SheetFooter></SheetFooter>
          </Sheet>
        </section>
      </div>
    </div>
  );
};
