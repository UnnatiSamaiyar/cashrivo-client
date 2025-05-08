/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoreCoupons = () => {
  const { storeName } = useParams();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [coupons, setCoupons] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStoreCoupons = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/get-coupons-by-store/${storeName}`
        );
        const items = response.data.map((deal: any) => ({
          id: deal._id,
          logo: deal.storeLogo,
          brand: deal.storeName,
          title: deal.couponName,
          code: deal.code,
          category: deal.category,
          productImg: deal.couponBanner,
          description: deal.description,
          storeName: deal.storeName,
          couponUrl: deal.storeUrl,
          expiry: deal.endDate,
          isExclusive: deal.isExclusive,
        }));
        setCoupons(items);
      } catch (err) {
        console.error(err);
        setError("No coupons found for this store.");
      }
    };

    fetchStoreCoupons();
  }, [storeName]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">
        Coupons for {storeName}
      </h1>

      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl shadow p-4">
              <img
                src={`${backendUrl}/uploads/coupons/${deal.productImg}`}
                alt={deal.title}
                className="rounded-md h-40 object-cover w-full mb-4"
              />
              <h2 className="text-lg font-semibold">{deal.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{deal.storeName}</p>
              <p className="text-orange-600 text-sm font-semibold mt-2">
                {deal.isExclusive ? "Exclusive Deal 🔒" : "Open Deal"}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Expires: {new Date(deal.expiry).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoreCoupons;
