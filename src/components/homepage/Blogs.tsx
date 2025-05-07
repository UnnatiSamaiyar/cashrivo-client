import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Blog {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  featuredImage: string;
  link: string;
}
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const BlogCard = ({ blog }: { blog: Blog }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
    <img src={`${backendUrl}/uploads/blogs/${blog.featuredImage}`} alt={blog.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-md font-semibold mb-1">{blog.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        Cashrivo /// {new Date(blog.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}

      </p>
      <Link to={`/blog/${blog._id}`} className="text-green-600 text-sm font-semibold hover:underline">
        Read More »
      </Link>
    </div>
  </div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/get-blogs`);
        const data = await res.json();
        setBlogs(data);
        console.log(data);
        
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-white py-10 px-4 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-[#FF6B6B] mb-6">Latest Blog Posts</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p>No blog posts available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
