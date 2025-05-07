import { useParams } from "react-router-dom";
import deals from "../latestofferspage/Deals.json";
import { Card, CardContent } from "../ui/card.tsx";

const Stores = () => {
  const { store } = useParams();
  const filteredDeals = deals.filter(
    (deal) => deal.store.toLowerCase() === (store?.toLowerCase() || "")
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-[#27548A] mb-6 capitalize">
        {store} Deals
      </h1>

      {filteredDeals.length === 0 ? (
        <p className="text-gray-600">No deals found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((deal) => (
            <Card
              key={deal.id}
              className="rounded-2xl shadow hover:shadow-md transition-all"
            >
              <img
                src={`/assets/${deal.image}`}
                alt={deal.title}
                className="rounded-t-2xl w-full h-40 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-lg font-medium text-[#27548A] mb-2">
                  {deal.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  {deal.description}
                </p>
                <div className="text-sm text-[#FBBF24] font-semibold">
                  Code: {deal.code || "No Code Required"}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Expiry: {deal.expiry}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stores;
