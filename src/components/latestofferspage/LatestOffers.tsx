import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deals from "./Deals.json";

interface Deal {
  id: string;
  title: string;
  description: string;
  store: string;
  code: string;
  category: string;
  expiry: string;
  isExclusive: boolean;
  image: string;
}

const LatestOffers = () => {
  const [search, setSearch] = useState("");
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>(deals);

  const allStores = Array.from(new Set(deals.map((deal) => deal.store))).sort();

  const toggleStore = (store: string) => {
    setSelectedStores((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  useEffect(() => {
    let updatedDeals = deals;

    if (search) {
      updatedDeals = updatedDeals.filter((deal) =>
        deal.store.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedStores.length > 0) {
      updatedDeals = updatedDeals.filter((deal) =>
        selectedStores.includes(deal.store)
      );
    }

    setFilteredDeals(updatedDeals);
  }, [search, selectedStores]);

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
        </div>

        {/* Deals */}
        <div className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((deal) => (
            <Link
              key={deal.id}
              to={`/deal/${deal.id}`}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={`/images/${deal.image}`}
                alt={deal.title}
                className="rounded-md h-40 object-cover w-full mb-4"
              />
              <h2 className="text-lg font-semibold">{deal.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{deal.store}</p>
              <p className="text-orange-600 text-sm font-semibold mt-2">
                {deal.isExclusive ? "Exclusive Deal 🔒" : "Open Deal"}
              </p>
              <p className="text-gray-500 text-xs mt-1">Expires: {deal.expiry}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestOffers;
