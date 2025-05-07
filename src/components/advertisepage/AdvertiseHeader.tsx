import { Button } from "../ui/button";
import whoImage from "../../assets/advertise/Advertise-with-us.png";
import {ArrowBigRightIcon } from "lucide-react";

const AdvertiseHeader = () => {
  return (
    <>
      <div className="w-full py-12 px-4 md:px-12 bg-[#FEFFF1] ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2  rounded-2xl p-6 md:p-8 ">
            <h3 className="text-4xl font-bold text-[#27548A] mb-2">
              Advertise With Cashrivo!
            </h3>
            <p className="text-gray-700 text-lg md:text-lg leading-relaxed mb-6">
              At Cashrivo, we don’t just share deals — we spark purchases. We’re
              the go-to destination for thousands of budget-conscious shoppers
              who live for discounts, crave savings, and love discovering new
              brands like yours.
            </p>

            {/* Second Icon + Heading + Description */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="text-[#1A3668] font-bold bg-[#FBBF24] rounded-4xl "
              >
                Want in? Let's talk <ArrowBigRightIcon />
              </Button>
            </div>
          </div>
          {/* Right - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={whoImage}
              alt="Who Are We"
              className="w-[500px] h-auto object-cover ml-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertiseHeader;
