import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Adjusted type based on backend schema
type Blog = {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
  featuredImage: string;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/get-blogs`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog._id}`}
            key={blog._id}
            className="shadow-md hover:shadow-xl transition rounded-md overflow-hidden bg-white"
          >
            <img
              src={`${backendUrl}/uploads/blogs/${blog.featuredImage}`}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{blog.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                Cashrivo ///{" "}
                {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p className="text-green-600 font-medium mt-2">Read More »</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
