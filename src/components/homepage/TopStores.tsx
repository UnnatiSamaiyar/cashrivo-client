import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

// Define the type for cashback items
type CashbackItem = {
  logo: string;
  brand: string;
};

const TopStores = () => {
  // Explicitly define cashbackItems state as an array of CashbackItem
  const [cashbackItems, setCashbackItems] = useState<CashbackItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/vcommission`);
        console.log(response.data);

        // Access the correct path for the campaigns array
        const items = response.data.data.campaigns.map((campaign: any) => ({
          logo: campaign.thumbnail, // Replace with actual field for logo
          brand: campaign.title, // Replace with actual field for brand name
        }));

        setCashbackItems(items);
      } catch (error) {
        console.error('Error fetching deals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full px-4 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF6B6B] mb-6 text-center sm:text-left">
          Top Stores
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-5 bg-[#FFF8F2] rounded-xl">
          {cashbackItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow-sm flex flex-col items-center justify-center p-3 sm:p-4 transition-transform hover:scale-105"
            >
              <img
                src={item.logo}
                alt={`${item.brand} logo`}
                className="w-16 sm:w-20 h-10 object-contain mb-2"
              />
              <p className="text-sm sm:text-base font-medium text-center">
                <span className="text-pink-600 font-bold">{item.brand}</span>{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStores;
