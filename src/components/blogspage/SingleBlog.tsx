import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
  bannerImage: string;
  content: string;
  description: string;
  bannerLink: string;
}

const SingleBlog = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/get-blog/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!blog) return <div className="p-8 text-red-500">Blog not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold mt-6 mb-4">{blog.title}</h1>
      <p className="mb-4">{blog.description} </p>
      <Link to={`${blog.bannerLink}`}>
      <img src={`${backendUrl}/uploads/blogs/${blog.bannerImage}`} alt={blog.description} className="w-full h-64 object-cover rounded" />
      </Link>
      <p className="text-gray-500 mt-2">
        Cashrivo /// {new Date(blog.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </p>
      <div
        className="mt-6 text-lg leading-relaxed prose prose-p:my-2 prose-li:my-1 prose-strong:font-semibold"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

    </div>
  );
};

export default SingleBlog;
