import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import axios from "axios"; // axios for API requests

const PromotionBanners = () => {
  const [banners, setBanners] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch banners from the backend
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(backendUrl + "/api/get-banners"); // Replace with your backend endpoint
        setBanners(response.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (imgRef.current) {
        gsap.to(imgRef.current, { opacity: 0, duration: 0.5, scale: 1.05 });
      }

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
        if (imgRef.current) {
          gsap.fromTo(
            imgRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
          );
        }
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners]);

  useEffect(() => {
    if (imgRef.current) {
      gsap.from(imgRef.current, { opacity: 0, duration: 1, scale: 1.05 });
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
      <div className="relative overflow-hidden">
        {banners.length > 0 && (
          <img
            ref={imgRef}
            key={currentIndex}
            src={`${backendUrl}${banners[currentIndex]?.imageUrl}`}
            alt={`Banner ${currentIndex + 1}`}
            className="w-full max-h-[400px] sm:max-h-[500px] object-contain"
          />
        )}

      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-[#FFDADA] w-5" : "bg-gray-200"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionBanners;
