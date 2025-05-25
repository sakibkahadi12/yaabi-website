"use client";
import BannerCard from "@/components/CustomComponents/BlogsComponent/BannerCard";
import BlogCard from "@/components/CustomComponents/BlogsComponent/BlogCard";
import { MainHeading } from "@/components/CustomComponents/MainHeading";

import { useRouter } from "next/navigation";
import React from "react";

const ViewMoreBlogComponent = () => {
  const articles = [
    {
      key: 1,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
      imageUrl: "/assets/blog.png",
      author: "Andreas Grodstad",
    },
    {
      key: 2,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
      imageUrl: "/assets/blog.png",
      author: "John Smith",
    },
  ];
  const blogs = [
    {
      key: 1,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 2,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 3,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 4,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 5,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 6,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 7,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 8,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 9,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 10,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 11,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      key: 12,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
  ];
  
  const router = useRouter();
  return (
    <div className="mt-[120px] mx-auto max-w-[80rem] py-10 px-5 sm:px-[3.5rem]">
      {/* banner section */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {articles.map((blog) => {
          return <BannerCard key={blog.key} blog={blog} />;
        })}
      </section>
      {/* blog section */}
      <section className="mt-[50px]">
        <MainHeading heading="Recent blogs" align="start" />
        {/* blog */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-10">
          {blogs.map((blog) => {
            return <BlogCard key={blog.key} blog={blog} />;
          })}
        </div>
        
      </section>
    </div>
  );
};

export default ViewMoreBlogComponent;
