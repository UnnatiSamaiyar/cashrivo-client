import { useParams, Link } from "react-router-dom";
import deals from "./Deals.json";

const DealDetail = () => {
  const { id } = useParams();
  const deal = deals.find((d) => d.id === id);

  if (!deal) return <p>Deal not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <img
        src={`/images/${deal.image}`}
        alt={deal.title}
        className="rounded-md w-full mb-4"
      />
      <h1 className="text-2xl font-bold">{deal.title}</h1>
      <p className="text-gray-700 mt-2">{deal.description}</p>
      <p className="mt-4">
        <strong>Store:</strong> {deal.store}
      </p>
      <p>
        <strong>Category:</strong> {deal.category}
      </p>
      <p>
        <strong>Code:</strong>{" "}
        {deal.code ? (
          <code className="bg-gray-100 px-2 py-1 rounded">{deal.code}</code>
        ) : (
          "No code needed"
        )}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Expires on: {deal.expiry}
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
