
import { BlogDescription } from "./BlogDescription";
import BlogHeading from "./BlogHeading"

const BannerCard = ({blog}) => {
    console.log(blog)
    const {heading, author, description, imageUrl} = blog
  return (
    <div className="flex flex-col bg-[#D8E6F3] rounded-[8px]">
      {/* image sectoin  */}

      <img src={imageUrl} alt="blog" className="sm:h-[350px] rounded-[8px]" />

      {/* text section */}
      <section className="p-4  ">
        <BlogHeading heading={heading} />
        <p className="my-[15px] leading-6 font-medium text-[14px] sm:text-[18px] text-[#757575]">
          {" "}
          By {author}
        </p>
        <BlogDescription
          align="start"
          textColor="#757575"
          description={description}
        />
      </section>
    </div>
  );
}

export default BannerCard