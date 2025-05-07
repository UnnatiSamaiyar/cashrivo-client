
import whoImage from "../../assets/WhoAreWe.png"; // Update path as needed
import deals from "../../assets/Deals-made-simple.png";
import growth from "../../assets/Growth-that-converts.png";

const WhoAreWe = () => {
  return (
    <div className="w-full py-12 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={whoImage}
            alt="Who Are We"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2  rounded-2xl p-6 md:p-8 ">
          <h2 className="font-bold text-[#FBBF24] mb-4">WHO ARE WE</h2>
          <h3 className="text-4xl font-bold text-[#27548A] mb-2">
            Unlock Bigger Savings. See Real Results.
          </h3>
          <p className="text-gray-700 text-sm md:text-sm leading-relaxed mb-6">
            At Cashrivo, we’re passionate about helping people save more while
            discovering the best deals online. Our team blends deep market
            insights with a user-first approach to deliver tangible results for
            both shoppers and brands. We’re not just tech— we’re real people
            committed to real impact.
          </p>

          {/* First Icon + Heading + Description */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={deals}
              alt="Impact Icon"
              className="w-10 h-10 object-contain mt-1"
            />
            <div>
              <h4 className="text-md md:text-lg font-semibold text-[#27548A]">
                Deals Made Simple
              </h4>
              <p className="text-sm text-gray-600">
                Cashrivo is your go-to digital platform for coupons, exclusive
                offers, and unbeatable discounts. We partner with top brands and
                merchants to bring value straight to your screen.
              </p>
            </div>
          </div>

          {/* Second Icon + Heading + Description */}
          <div className="flex items-center gap-4">
            <img
              src={growth}
              alt="Trust Icon"
              className="w-10 h-10 object-contain mt-1"
            />
            <div>
              <h4 className="text-md md:text-lg font-semibold text-[#27548A]">
                Growth That Converts
              </h4>
              <p className="text-sm text-gray-600">
                We help brands connect with high-intent shoppers through
                affiliate marketing, SEO-rich deal pages, and data-led
                campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
