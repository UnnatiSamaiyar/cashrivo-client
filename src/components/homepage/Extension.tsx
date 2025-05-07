import { Search, Wallet, Bell } from "lucide-react";
import extensionImg from "../../assets/extension.png";

const Extension = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={extensionImg}
            alt="Cashback Extension"
            className="max-w-xs md:max-w-sm w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#142A4F] mb-2">
            Never Miss a Deal Again!
          </h2>
          <p className="text-[#142A4F] mb-4">
            Install the{" "}
            <span className="font-semibold">CashRivo Browser Extension</span>{" "}
            and automatically unlock the best offers while shopping.
          </p>

          <ul className="space-y-2 text-[#142A4F] text-sm mb-6">
            <li className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-700" />
              Auto-detects coupons while you shop
            </li>
            <li className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-yellow-600" />
              Cashback offers directly in your browser
            </li>
            <li className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-orange-500" />
              Real-time notifications for partner brands
            </li>
          </ul>

          <button className="bg-[#142A4F] text-white px-6 py-2 rounded-full hover:bg-[#0f1e36] transition-all">
            + Add to Browser
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extension;
