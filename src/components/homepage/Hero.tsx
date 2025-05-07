import heroBg from "../../assets/gif3.gif"; // Adjust path if needed
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import gsap from "gsap";

// Backend URL (from environment variable)
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Hero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filteredDeals, setFilteredDeals] = useState<Array<{
    id: string;
    title: string;
    description: string;
    storeName: string;
    code: string;
    category: string;
    expiry: string;
    isExclusive: boolean;
    image: string;
  }>>([]);
  const [allDeals, setAllDeals] = useState<Array<{
    id: string;
    title: string;
    description: string;
    storeName: string;
    code: string;
    category: string;
    expiry: string;
    isExclusive: boolean;
    image: string;
  }>>([]);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: "power2.out",
    });

    gsap.from(inputRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.9,
      ease: "power2.out",
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: -70,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });
  }, []);

  // Fetch all deals on component mount
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/get-coupons`);
        const data = response.data.map((deal: any) => ({
          id: deal._id,
          title: deal.couponName,
          description: deal.description,
          storeName: deal.storeName,
          code: deal.code,
          category: deal.category,
          expiry: deal.endDate,
          isExclusive: deal.isExclusive || false,
          image: deal.image,
        }));

        setAllDeals(data);
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    };

    fetchDeals();
  }, []);

  // Debounced search handler
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);

      if (value.trim() === "") {
        setFilteredDeals([]);
        return;
      }

      const lower = value.toLowerCase();
      const results = allDeals.filter(
        (deal) =>
          deal.title.toLowerCase().includes(lower) ||
          deal.description.toLowerCase().includes(lower) ||
          deal.category.toLowerCase().includes(lower) ||
          deal.storeName.toLowerCase().includes(lower)
      );

      setFilteredDeals(results);
    },
    [allDeals] // Only re-run when `allDeals` change
  );

  return (
    <section
      className="z-0 w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="z-0 text-center max-w-2xl px-4 text-white">
        <h1 ref={titleRef} className="text-4xl z-0 md:text-6xl font-bold mb-4">
          Unlock the Best Deals. Every Day.
        </h1>
        <p ref={descriptionRef} className="text-lg md:text-xl mb-6 z-0">
          Real-time coupons, cashback offers, and the smartest savings curated
          for you.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 w-full sm:w-auto">
          {/* Search input with icon */}
          <div className="relative w-full sm:w-96">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#27548A] z-50" />
            <Input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search products, services..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-black shadow-sm"
            />

            {/* Results Dropdown */}
            {query && filteredDeals.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-md z-50 max-h-60 overflow-y-auto">
                {filteredDeals.map((deal) => (
                  <Link
                    to={`/deal/${deal.id}`}
                    key={deal.id}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#FFF8F2] hover:text-[#FBBF24] transition"
                  >
                    {deal.title}
                    <div className="text-xs text-gray-500">{deal.storeName}</div>
                  </Link>
                ))}
              </div>
            )}

            {/* No results */}
            {query && filteredDeals.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-md z-50 px-4 py-2 text-sm text-gray-500">
                No deals found.
              </div>
            )}
          </div>

          {/* Explore Button on new row */}
          <Button
            onClick={() => navigate("/latest-offers")}
            className="bg-transparent cursor-pointer text-white border px-6 py-2 w-full sm:w-auto"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
