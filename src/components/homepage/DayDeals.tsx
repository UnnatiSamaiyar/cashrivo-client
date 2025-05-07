/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { Button } from '../ui/button';

gsap.registerPlugin(ScrollTrigger);

// Define the type for the coupon items
type CouponItem = {
  logo: string;
  brand: string;
  title: string;
  category: string;
  code: string;
  productImg: string;
  description: string;
  storeName: string;
  couponUrl: string;
};

const DayDeals = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [cashbackItems, setCashbackItems] = useState<CouponItem[]>([]);
  const [_loading, setLoading] = useState<boolean>(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!sliderRef.current) return;
    
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sliderRef.current,
        start: 'top 80%', // When top of container hits 80% of viewport
        toggleActions: 'play none none reverse', // animate in, reverse out
      },
    });
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth / 1.2;
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/get-coupons`);
        

        // Access the correct path for the coupons data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items = response.data.map((deal: any) => ({
          logo: deal.storeLogo, // Logo of the store
          brand: deal.storeName, // Store name as brand
          title: deal.couponName, // Coupon name
          code: deal.code,
          category: deal.category,
          productImg: deal.image, // Coupon image
          description: deal.description, // Coupon description
          storeName: deal.storeName, // Store name
          couponUrl: deal.storeUrl, // Link to the store's coupon page
        }));

        setCashbackItems(items);
      } catch (error) {
        console.error('Error fetching deals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, [backendUrl]);

  return (
    <div className="w-full py-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl font-semibold text-[#FF6B6B] mb-4 sm:mb-6">
          Deals of the Day
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-4 sm:px-6 md:px-10"
          >
            {cashbackItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                
                className="min-w-[70vw] sm:min-w-[40vw] md:min-w-[280px] max-w-[300px] bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl shadow-md p-4 flex flex-col justify-between relative"
              >
                <img
                  src={`${backendUrl}/uploads/coupons/${item.logo}`}
                  alt="Brand Logo"
                  className="w-16 h-10 object-contain mb-2"
                />
                <div className="flex flex-col gap-1 mb-2">
                  <h3 className="text-[#27348A] font-bold text-base">{item.brand}</h3>
                  <p className="text-[#27348A] text-sm">{item.category}</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={`${backendUrl}/uploads/coupons/${item.productImg}`}
                    alt={item.title}
                    className="w-30 h-30 object-contain"
                  />
                </div>
                <div className="mt-4 text-white">
                  <Button>{item.code} </Button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayDeals;
