import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const couponsData = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  brand: 'prime',
  logo: '/src/assets/Samsung-logo.png', // Replace with actual image path
  code: `SAVE${i + 1}00`,
  description: 'Flat Rs.100 OFF',
}));

interface Coupon {
  id: number;
  brand: string;
  logo: string;
  code: string;
  description: string;
}

const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition-all duration-300 w-[220px] mx-auto">
      <img src={coupon.logo} alt={coupon.brand} className="w-16 h-8 object-contain mb-3" />

      <div className="bg-gray-100 px-4 py-2 rounded-md font-bold tracking-widest mb-2 text-center text-black">
        {revealed ? coupon.code : '*****00'}
      </div>

      <h3 className="text-md font-semibold text-center mb-1">Exclusive Code</h3>
      <p className="text-gray-600 text-sm mb-3">{coupon.description}</p>

      <button
        onClick={() => setRevealed(!revealed)}
        className="text-[#FF6B6B] border border-[#FF6B6B] rounded px-3 py-1 text-sm hover:bg-[#FF6B6B] hover:text-white transition"
      >
        {revealed ? 'Hide Code' : 'Show Coupons'}
      </button>
    </div>
  );
};

const TrendingCoupons = () => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-[#FF6B6B] mb-6">
          Trending Coupons
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
        >
          {couponsData.map((coupon) => (
            <SwiperSlide key={coupon.id}>
              <CouponCard coupon={coupon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingCoupons;
