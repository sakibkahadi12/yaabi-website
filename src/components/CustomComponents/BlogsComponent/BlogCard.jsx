
import { BlogDescription } from "./BlogDescription";
import BlogHeading from "./BlogHeading"

const BlogCard = ({blog}) => {
    console.log(blog)
    const {heading,  description, imageUrl} = blog
  return (
    <div className="flex flex-col bg-[#D8E6F3] rounded-[8px]">
      {/* image sectoin  */}

      <img src={imageUrl} alt="blog" className="sm:h-[296px] rounded-[8px]" />

      {/* text section */}
      <section className="p-4   space-y-3">
        <h3 className="text-lg sm:text-2xl font-medium ">{heading} </h3>
        <BlogDescription align="start" description={description} />
      </section>
    </div>
  );
}

export default BlogCard