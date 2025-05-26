"use client";
import BannerCard from "@/components/CustomComponents/BlogsComponent/BannerCard";
import BlogCard from "@/components/CustomComponents/BlogsComponent/BlogCard";
import { MainHeading } from "@/components/CustomComponents/MainHeading";
import ViewMoreButton from "@/components/CustomComponents/ViewMoreButton";
import { useRouter } from "next/navigation";
import React from "react";

const BlogPageComponent = () => {
  const articles = [
    {
      id: 1,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
      imageUrl: "/assets/blog.png",
      author: "Andreas Grodstad",
    },
    {
      id: 2,
      heading: "Improve your marketing tools with Yaabi",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
      imageUrl: "/assets/blog.png",
      author: "John Smith",
    },
  ];
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
    <div className="mt-[120px] mx-auto max-w-[80rem] py-10 px-5 sm:px-[3.5rem]">
      {/* banner section */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {articles.map((blog) => {
          return <BannerCard key={blog.id} blog={blog} />;
        })}
      </section>
      {/* blog section */}
      <section className="mt-[50px]">
        <MainHeading heading="Recent blogs" align="start" />
        {/* blog */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-10">
          {blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
        <div className="w-full flex items-center justify-center mt-[25px]">
          <ViewMoreButton onClick={() => router.push("/blog/more-blogs")} />
        </div>
      </section>
    </div>
  );
};

export default BlogPageComponent;
