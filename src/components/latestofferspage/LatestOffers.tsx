/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Coupon = {
  _id: string;
  couponName: string;
  url: string;
  code: string;
  startDate: string;
  endDate: string;
  storeName: string;
  category: string;
  description: string;
  image: string;
  storeLogo: string;
  couponBanner: string;
  storeUrl: string;
  tagline: string;
}

const LatestOffers = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [_search, setSearch] = useState("");
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [allCoupons, setAllCoupons] = useState<any[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  const toggleStore = (store: string) => {
    setSelectedStores((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  const toggleCategory = (store: string) => {
    setSelectedCategory((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  // Fetch once from backend
  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/get-coupons`);
        const data = await response.json();
        setAllCoupons(data);
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    };

    fetchCoupons();
  }, []);

  // Filter on search or selectedStores change
  useEffect(() => {
    let filtered = [...allCoupons];

    if (selectedStores.length > 0) {
      filtered = filtered.filter((coupon) =>
        selectedStores.includes(coupon.storeName)
      );
    }

    if (_search.trim() !== "") {
      filtered = filtered.filter((coupon) =>
        coupon.storeName.toLowerCase().includes(_search.toLowerCase())
      );
    }

    setCoupons(filtered);
  }, [allCoupons, selectedStores, _search]);

  useEffect(() => {
    let filtered = [...allCoupons];

    if (selectedCategory.length > 0) {
      filtered = filtered.filter((coupon) =>
        selectedCategory.includes(coupon.category)
      );
    }

    if (_search.trim() !== "") {
      filtered = filtered.filter((coupon) =>
        coupon.category.toLowerCase().includes(_search.toLowerCase())
      );
    }

    setCoupons(filtered);
  }, [allCoupons, selectedCategory, _search]);

  const allStores = Array.from(
    new Set(allCoupons.map((deal) => deal.storeName))
  ).sort();

  const allCategories = Array.from(
    new Set(allCoupons.map((deal) => deal.category))
  ).sort();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">🔥 Hot Deals</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Filters */}
        <div className="col-span-1 space-y-4">
          <input
            type="text"
            placeholder="Search By Store"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="mt-4 space-y-2">
            <p className="font-semibold text-gray-700">Filter By Store</p>
            {allStores.map((store) => (
              <div key={store} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={store}
                  checked={selectedStores.includes(store)}
                  onChange={() => toggleStore(store)}
                  className="accent-orange-500"
                />
                <label htmlFor={store} className="text-sm text-gray-700">
                  {store}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <p className="font-semibold text-gray-700">Filter By Category</p>
            {allCategories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedStores.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="accent-orange-500"
                />
                <label htmlFor={category} className="text-sm text-gray-700">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Deals */}
        <div className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((deal) => (
            <Link
              key={deal._id}
              to={`/deal/${deal._id}`}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={`${backendUrl}/uploads/coupons/${deal.couponBanner}`}
                alt={deal.couponName}
                className="rounded-md h-40 object-cover w-full mb-4"
              />
              <h2 className="text-lg font-semibold">{deal.couponName}</h2>
              <p className="text-gray-600 text-sm mt-1">{deal.storeName}</p>
              {/* <p className="text-orange-600 text-sm font-semibold mt-2">
                {deal.isExclusive ? "Exclusive Deal 🔒" : "Open Deal"}
              </p> */}
              <p className="text-gray-500 text-xs mt-1">
                Expires: {new Date(deal.endDate).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestOffers;
