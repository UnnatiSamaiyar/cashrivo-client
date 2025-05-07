import { Menu, User, MessageSquare, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/cashrivo-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Deal = {
  category: string;
  storeName: string;
};


const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [stores, setStores] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_deals, setDeals] = useState<Deal[]>([]);


  const [showCategories, setShowCategories] = useState(false);
  const [showStores, setShowStores] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/get-coupons`);
        const data = response.data;

        setDeals(data);

        const uniqueCategories = Array.from(new Set(data.map((deal: Deal) => deal.category))) as string[];
        const uniqueStores = Array.from(new Set(data.map((deal: Deal) => deal.storeName))) as string[];



        setCategories(uniqueCategories);
        setStores(uniqueStores);
      } catch (error) {
        console.error('Error fetching coupons:', error);
      }
    };

    fetchCoupons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = localStorage.getItem("cashrivo_user");

  const handleLogout = () => {
    localStorage.removeItem("cashrivo_user");
    navigate('/auth')
  };



  return (
    <div className="w-full top-0 z-[9999] bg-[#FFF8F2] shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Cashrivo Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Nav Items */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6 font-medium">
            <div className="relative group z-999">
              <span className="text-[#27348A] font-bold hover:text-[#FBBF24] transition cursor-pointer">
                Top Categories
              </span>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-auto">

                <ul className="divide-y divide-gray-100">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/stores/${category.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF8F2] hover:text-[#FBBF24] transition"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>


              </div>
            </div>
            <div className="relative group z-999">
              <span className="text-[#27348A] font-bold hover:text-[#FBBF24] transition cursor-pointer">
                Top Stores
              </span>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-auto">

                <ul className="divide-y divide-gray-100">
                  {stores.map((store, index) => (
                    <li key={index}>
                      <Link
                        to={`/stores/${store.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF8F2] hover:text-[#FBBF24] transition"
                      >
                        {store}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="/latest-offers" className="text-[#27348A] font-bold hover:text-[#FBBF24] transition">Latest Offers</a>
            <a href="/blogs" className="text-[#27348A] font-bold hover:text-[#FBBF24] transition">Blogs</a>
          </div>

          {/* Right Icons & Search */}
          <div className="flex items-center space-x-4">


            {user ? (
              <div className="relative group">
                <Button variant="ghost" size="icon" className="hidden md:flex hover:cursor-pointer">
                  <User className="w-5 h-5" />
                </Button>

                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                  <ul className="divide-y divide-gray-100 text-sm text-gray-700">
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-[#FFF8F2] hover:text-[#FBBF24] hover:cursor-pointer"
                        onClick={() => navigate("/user-profile")}
                      >
                        User Profile
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-[#FFF8F2] hover:text-[#FBBF24] hover:cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/auth")}
                className="hover:cursor-pointer"
              >
                <User className="w-5 h-5" />
              </Button>
            )}




            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/contact")}
              className="hidden md:flex hover:cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
            </Button>




            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="hover:cursor-pointer"
              >
                <Menu className="w-6 h-6" />
              </Button>

              {/* Full screen overlay */}
              {mobileMenuOpen && (
                <div className="fixed inset-0 z-[9999] bg-opacity-50">
                  <div className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg px-6 py-4 transform transition-transform duration-300 ease-in-out translate-x-0 flex flex-col">

                    {/* Close Button */}
                    <div className="flex justify-end mb-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className=" hover:cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <X className="w-6 h-6" />
                      </Button>
                    </div>

                    {/* Menu Content */}
                    <div className="flex flex-col space-y-4 text-[#27548A] font-medium flex-grow">

                      {/* Top Categories */}
                      <div>
                        <button
                          onClick={() => setShowCategories(!showCategories)}
                          className="w-full text-left flex items-center justify-between hover:text-[#FBBF24] transition py-2"
                        >
                          <span>Top Categories</span>
                          <span>
                            {showCategories ? (

                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 10.293a1 1 0 011.414 0L10 7.707l3.293 3.293a1 1 0 011.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            )}
                          </span>
                        </button>
                        {showCategories && (
                          <ul className="ml-4 mt-2 space-y-1">
                            {categories.map((category, index) => (
                              <li key={index}>
                                <Link
                                  to={`/categories/${category.toLowerCase()}`}
                                  className="text-sm text-gray-700 hover:text-[#FBBF24] py-1"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setShowCategories(false);  // Auto-close on selection
                                  }}
                                >
                                  {category}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Top Stores */}
                      <div>
                        <button
                          onClick={() => setShowStores(!showStores)}
                          className="w-full text-left flex items-center justify-between hover:text-[#FBBF24] transition py-2"
                        >
                          <span>Top Stores</span>
                          <span>
                            {showStores ? (

                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 10.293a1 1 0 011.414 0L10 7.707l3.293 3.293a1 1 0 011.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            )}
                          </span>
                        </button>
                        {showStores && (
                          <ul className="ml-4 mt-2 space-y-1">
                            {stores.map((store, index) => (
                              <li key={index}>
                                <Link
                                  to={`/stores/${store.toLowerCase()}`}
                                  className="text-sm text-gray-700 hover:text-[#FBBF24] py-1"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setShowStores(false);  // Auto-close on selection
                                  }}
                                >
                                  {store}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Additional Links */}
                      <Link
                        to="/latest-offers"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#FBBF24] py-2 transition"
                      >
                        Latest Offers
                      </Link>
                      <Link
                        to="/blogs"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#FBBF24] py-2 transition"
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#FBBF24] py-2 transition"
                      >
                        Contact Us
                      </Link>
                      <Link
                        to="/advertise-with-us"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#FBBF24] py-2 transition"
                      >
                        Advertise with us
                      </Link>
                      <Link
                        to="/refer-and-earn"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#FBBF24] py-2 transition"
                      >
                        Refer and Earn
                      </Link>

                      {user && (
                        <>
                          {/* Profile Section */}
                          <div>
                            <Link
                              to="/user-profile"
                              onClick={() => setMobileMenuOpen(false)}
                              className="hover:text-[#FBBF24] py-2 transition"
                            >
                              User Profile
                            </Link>
                          </div>
                        </>
                      )}
                    </div>


                    {/* Logout Section */}
                    {user ? (
                      <div className="mt-auto">
                        <Button
                          onClick={handleLogout}
                          className="text-center bg-[#fbbf24] font-semibold text-[#1A3668] hover:cursor-pointer hover:bg-[#fbbf24] transition w-full"
                        >
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <Button
                          onClick={() => navigate('/auth')}
                          className=" bg-[#fbbf24] font-semibold text-[#1A3668] hover:cursor-pointer hover:bg-[#fbbf24] transition w-full block py-2 text-center"
                        >
                          Login/Register
                        </Button>
                      </div>
                    )}

                  </div>
                </div>
              )}


            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
