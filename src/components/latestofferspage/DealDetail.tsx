import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Coupon {
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

const DealDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCoupon = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/get-coupon/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        setCoupon(data);
      } catch (error) {
        console.error("Error fetching coupon:", error);
        setCoupon(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCoupon();
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!coupon) return <div className="p-8 text-red-500">Blog not found.</div>;


  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <img
        src={`${backendUrl}/uploads/coupons/${coupon.couponBanner}`}
        alt={coupon.couponName}
        className="rounded-md w-full mb-4"
      />
      <h1 className="text-2xl font-bold">{coupon.couponName}</h1>
      <p className="text-gray-700 mt-2">{coupon.description}</p>
      <p className="mt-4">
        <strong>Store:</strong> {coupon.storeName}
      </p>
      <p>
        <strong>Category:</strong> {coupon.category}
      </p>
      <p>
        <strong>Code:</strong>{" "}
        {coupon.code ? (
          <code className="bg-gray-100 px-2 py-1 rounded">{coupon.code}</code>
        ) : (
          "No code needed"
        )}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Expires on: {new Date(coupon.endDate).toLocaleDateString()}
      </p>
      <Link
        to="/latest-offers"
        className="mt-6 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Back to Deals
      </Link>
    </div>
  );
};

export default DealDetail;
