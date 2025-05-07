/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import cardImg from '../../assets/article.png'; // Fallback image
import { FaClock } from 'react-icons/fa';
import axios from 'axios';

const Articles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=OFFERS&from=2025-03-30&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API}`
        );
        setArticles(response.data.articles.slice(0, 8));
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="px-4 py-10">Loading...</div>;

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-10">
      <h2 className="text-2xl font-semibold text-[#f14144] mb-6">News & Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
          >
            <img
              src={article.urlToImage || cardImg}
              alt="Article"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-2 leading-snug line-clamp-2">
                {article.title}
              </h3>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FaClock className="text-gray-400" />
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
                {/* <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f14144] font-medium hover:underline"
                >
                  Read More
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
