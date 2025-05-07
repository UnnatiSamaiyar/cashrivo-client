import { CheckCheck } from "lucide-react";
import whoImage from "../../assets/Contact/hero.png";
import { Button } from "../ui/button";

const ContactHeader = () => {
  return (
    <>
      <div className="w-full py-12 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2  rounded-2xl p-6 md:p-8 ">
            <h2 className="font-bold text-[#FBBF24] mb-4"># GREAT OFFERS</h2>
            <h3 className="text-4xl font-bold text-[#27548A] mb-2">
              Need Help Saving More?
            </h3>
            <p className="text-gray-700 text-lg md:text-lg leading-relaxed mb-6">
              Our team is here to help with deals, redemption issues, or
              partnership inquiries
            </p>

            {/* First Icon + Heading + Description */}
            <div className="flex items-center gap-4 mb-4">
              <ul className="space-y-2 text-[#142A4F] text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCheck className="w-6 h-6 text-[#02c522]" />
                  24/7 Assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck className="w-6 h-6 text-[#02c522] " />
                  100% Verified Deals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck className="w-6 h-6 text-[#02c522] " />
                  Secure Redemption
                </li>
              </ul>
            </div>

            {/* Second Icon + Heading + Description */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="text-[#1A3668] font-bold bg-[#FBBF24] rounded-4xl "
              >
                CONTACT US
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

export default ContactHeader;
