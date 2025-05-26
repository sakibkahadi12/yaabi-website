"use client";
import BlogCard from "@/components/CustomComponents/BlogsComponent/BlogCard";

import { MainHeading } from "@/components/CustomComponents/MainHeading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BlogDetailsPage = () => {
  const blogs = [
    {
      id: 1,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      id: 3,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
    {
      id: 2,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "Gliding onto the world stage in 2019, Fuego is ushering in a new era of dance footwear with its uniquely engineered sneakers and a thriving affiliate marketing program powered by Refersion.",
      imageUrl: "/assets/blog.png",
    },
  ];
  const router = useRouter();
  return (
    <div>
      {/* button and title */}
      <section className="flex max-w-[1046px] mx-auto items-center gap-3 mb-7 sm:mb-10">
        <button
          onClick={() => router.back()}
          className="bg-[#D8E6F3] hover:bg-black flex items-center justify-center rounded-full size-10 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="text-[#10243E] hover:text-white transition-colors duration-300"
          >
            <path
              d="M11.8797 17.6875L17.8228 25.1542L16.3105 27.0208L7.82031 16.3542L16.3105 5.6875L17.8228 7.55417L11.8797 15.0208H24.8007V17.6875H11.8797Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <h3 className="text-[#10243E] font-medium text-[20px] sm:text-[24px] leading-8">
          Blogs
        </h3>
      </section>
      {/* heading */}
      <section className="max-w-[1046px] mx-auto">
        <MainHeading
          align="start"
          heading="Your journey to marketing starts here"
        />
        <div>
          <p className="text-[14px] sm:text-[16px] font-medium my-6 text-[#5A5D62]">
            <span className="text-[#10243ECC]">Updated:</span> February 28, 2025
            by Admin{" "}
          </p>
          <Image
            alt="banner"
            src={"/assets/blog-banner.jpg"}
            height={1000}
            width={1000}
            className="rounded-[16px]"
          />
        </div>
      </section>
      {/* text editor section */}
      <div className="my-12">text-editor</div>
      {/* Recommended blog section */}
      <MainHeading align="start" heading="Recommended blogs" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-10">
        {blogs.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
