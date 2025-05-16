import { notFound } from "next/navigation";
import { FaCalendarAlt, FaClock, FaTasks } from "react-icons/fa";
import { blogs as allBlogsData } from "@/contents/blogs";
import { Blog } from "@/types";

const getBlogBySlug = (slug: string): Blog | undefined => {
  return allBlogsData.find((blog) => blog.slug === slug);
};

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container max-w-3xl mx-auto py-12 px-4">
      <article className="prose dark:prose-invert lg:prose-xl max-w-none">
        <h1 className="text-3xl-l font-bold mb-2">{blog.title}</h1>

        <div className=" flex-wrap flex-i gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex-i gap-2">
            <FaCalendarAlt className="h-4 w-4" />
            <span>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex-i gap-2">
            <FaClock className="h-4 w-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{blog.excerpt}</p>
        </div>

        {blog.tasks && (
          <div className="mb-8 ">
            <h2 className="text-xl font-semibold mb-3 flex-i gap-2 text-gray-800 dark:text-gray-200">
              <FaTasks className="h-5 w-5" />
              Topics Covered
            </h2>
            <div className="pl-12">
              {blog.tasks.map((item, index) => {
                return (
                  <ul key={index} className="">
                    <li className="text-gray-700 dark:text-gray-300 list-disc">
                      {item}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPage;
