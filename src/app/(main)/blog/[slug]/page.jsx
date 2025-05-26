import BlogDetailsPage from "@/components/MainPages/BlogPage/BlogDetailsPage";

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  return (
    <div className="mt-[100px] max-w-[80rem] mx-auto py-12 px-5 sm:px-[3.5rem]">
      <BlogDetailsPage slug={slug} />
    </div>
  );
}
