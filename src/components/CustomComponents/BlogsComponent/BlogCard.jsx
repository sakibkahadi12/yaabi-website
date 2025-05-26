"use client";
import { useRouter } from "next/navigation";
import { BlogDescription } from "./BlogDescription";

const BlogCard = ({ blog }) => {
  // console.log(blog)
  const { heading, description, imageUrl, id } = blog;
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/blog/${id}`)}
      className="flex flex-col bg-[#D8E6F3] rounded-[8px] hover:cursor-pointer"
    >
      {/* image sectoin  */}

      <img src={imageUrl} alt="blog" className="sm:h-[250px] rounded-[8px]" />

      {/* text section */}
      <section className="p-4   space-y-3">
        <h3 className="text-lg sm:text-2xl font-medium ">{heading} </h3>
        <BlogDescription align="start" description={description} />
      </section>
    </div>
  );
};

export default BlogCard;
